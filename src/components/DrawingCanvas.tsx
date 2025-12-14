import React, { useCallback, useRef, useState } from "react";
import { PanResponder, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Svg, { Path } from "react-native-svg";

type Point = { x: number; y: number };
type Stroke = { color: string; points: Point[] };

export function DrawingCanvas({ strokeColor }: { strokeColor: string }) {
  const [paths, setPaths] = useState<Stroke[]>([]);
  const pointsRef = useRef<Point[]>([]);

  const start = useCallback(
    (x: number, y: number) => {
      pointsRef.current = [{ x, y }];
      setPaths((p) => [...p, { color: strokeColor, points: [{ x, y }] }]);
    },
    [strokeColor]
  );

  const move = useCallback((x: number, y: number) => {
    if (!pointsRef.current.length) return;
    const pts = [...pointsRef.current, { x, y }];
    pointsRef.current = pts;

    setPaths((prev) => {
      if (!prev.length) return prev;
      const next = [...prev];
      next[next.length - 1] = { ...next[next.length - 1], points: pts };
      return next;
    });
  }, []);

  const end = useCallback(() => {
    pointsRef.current = [];
  }, []);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: (e) => start(e.nativeEvent.locationX, e.nativeEvent.locationY),
    onPanResponderMove: (e) => move(e.nativeEvent.locationX, e.nativeEvent.locationY),
    onPanResponderRelease: end,
    onPanResponderTerminate: end,
  });

  const clear = () => {
    setPaths([]);
    pointsRef.current = [];
  };

  const d = (pts: Point[]) =>
    pts.map((p, i) => (i === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`)).join(" ");

  return (
    <View style={styles.wrap}>
      <View style={styles.canvas} {...panResponder.panHandlers}>
        <Svg style={StyleSheet.absoluteFill}>
          {paths.map((p, i) => (
            <Path
              key={i}
              d={d(p.points)}
              stroke={p.color}
              strokeWidth={10}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ))}
        </Svg>
      </View>

      <TouchableOpacity style={styles.clearBtn} onPress={clear}>
        <Text style={styles.clearTxt}>Избриши</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { flex: 1, width: "100%", alignItems: "center", paddingBottom: 12 },
  canvas: { width: "100%", flex: 1, backgroundColor: "#fff", borderRadius: 20, overflow: "hidden" },
  clearBtn: { marginTop: 10, paddingHorizontal: 40, paddingVertical: 15, backgroundColor: "#ee6c4d", borderRadius: 30 },
  clearTxt: { color: "#fff", fontSize: 16, fontWeight: "800" },
});
