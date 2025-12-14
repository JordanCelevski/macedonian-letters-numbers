import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useMemo, useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { NUMBER_SOUNDS } from "@/src/constants/numberAssets";
import { isNumberValue, NUMBERS } from "@/src/constants/numbers";
import { useSound } from "@/src/hooks/useSound";
import { ColorPicker } from "../../src/components/ColorPicker";
import { DrawingCanvas } from "../../src/components/DrawingCanvas";
import { SoundButton } from "../../src/components/SoundButton";
import { COLOR_OPTIONS } from "../../src/constants/colors";
const { width } = Dimensions.get("window");

export default function DrawNumberScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();

  const number = useMemo(() => {
    const raw = params.number;
    if (typeof raw === "string" && isNumberValue(raw)) return raw;
    return "1";
  }, [params.number]);

  const numberLabel = useMemo(() => {
    const found = NUMBERS.find((n) => n.value === number);
    return found?.label ?? "";
  }, [number]);

  const [strokeColor, setStrokeColor] = useState<string>(COLOR_OPTIONS[0]);

  const soundFile = NUMBER_SOUNDS[number];
  const { play } = useSound(soundFile);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backText}>← Назад</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Цртај го бројот</Text>
      </View>

      <View style={styles.topArea}>
        <View style={styles.card}>
          <Text style={styles.bigSymbol}>{number}</Text>
          <Text style={styles.label}>
            Број {number} {numberLabel ? `– ${numberLabel}` : ""}
          </Text>

          {!!soundFile && <SoundButton onPress={play} />}
        </View>

        <ColorPicker
          colors={COLOR_OPTIONS}
          selected={strokeColor}
          onSelect={setStrokeColor}
        />
      </View>

      <DrawingCanvas strokeColor={strokeColor} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fef6e4",
    paddingTop: 40,
    paddingHorizontal: 16,
  },
  header: { flexDirection: "row", alignItems: "center", marginBottom: 8 },
  backButton: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 16,
    backgroundColor: "#f4d35e",
    marginRight: 8,
  },
  backText: { fontSize: 14, fontWeight: "700" },
  headerTitle: { fontSize: 20, fontWeight: "800" },
  topArea: { flexDirection: "row", alignItems: "center", marginBottom: 8 },
  card: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 10,
    alignItems: "center",
    marginRight: 8,
    borderWidth: 2,
    borderColor: "#f4d35e",
  },
  bigSymbol: { fontSize: 70, fontWeight: "800" },
  label: { fontSize: 14, marginTop: 4, marginBottom: 4, textAlign: "center" },
  picture: { width: width * 0.4, height: width * 0.3 },
});
