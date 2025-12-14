import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type Props = { onPress: () => void };

export function SoundButton({ onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btn} activeOpacity={0.85}>
      <Text style={styles.txt}>▶ Звук</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    marginTop: 8,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#90e0ef",
    borderRadius: 20,
  },
  txt: { fontSize: 16, fontWeight: "800" },
});
