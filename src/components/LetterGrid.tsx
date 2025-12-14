import React from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const { width } = Dimensions.get("window");
const BOX = width / 5.5;

type Props<T> = {
  items: readonly T[];
  renderLabel: (item: T) => string;
  onPressItem: (item: T) => void;
};

export function LetterGrid<T>({ items, renderLabel, onPressItem }: Props<T>) {
  return (
    <View style={styles.grid}>
      {items.map((item, idx) => (
        <TouchableOpacity
          key={idx}
          style={styles.item}
          onPress={() => onPressItem(item)}
          activeOpacity={0.85}
        >
          <Text style={styles.text}>{renderLabel(item)}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: { flexDirection: "row", flexWrap: "wrap", justifyContent: "center" },
  item: {
    width: BOX,
    height: BOX,
    borderRadius: 16,
    backgroundColor: "#fff",
    margin: 6,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#f4d35e",
    elevation: 2,
  },
  text: { fontSize: 26, fontWeight: "800" },
});
