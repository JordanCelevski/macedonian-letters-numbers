import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  colors: readonly string[];
  selected: string;
  onSelect: (c: string) => void;
};

export function ColorPicker({ colors, selected, onSelect }: Props) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.tip}>Избери боја</Text>
      <View style={styles.col}>
        {colors.map((c) => (
          <TouchableOpacity
            key={c}
            style={[styles.dot, { backgroundColor: c }, selected === c && styles.selected]}
            onPress={() => onSelect(c)}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { width: 90, alignItems: "center" },
  tip: { fontSize: 12, marginBottom: 4 },
  col: { alignItems: "center" },
  dot: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginVertical: 3,
    borderWidth: 2,
    borderColor: "transparent",
  },
  selected: { borderColor: "#000" },
});
