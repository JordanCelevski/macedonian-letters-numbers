import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LetterGrid } from "../../src/components/LetterGrid";
import { LETTERS } from "../../src/constants/letters";

export default function LettersScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.back} onPress={() => router.back()}>
          <Text style={styles.backText}>← Назад</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Букви</Text>
      </View>

      <Text style={styles.subtitle}>Допри буква за да црташ</Text>

      <LetterGrid
        items={LETTERS}
        renderLabel={(l: any) => l}
        onPressItem={(l: string | number | boolean) =>
          router.push(`/draw/${encodeURIComponent(l)}`)
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fef6e4",
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  header: { flexDirection: "row", alignItems: "center", marginBottom: 12 },
  back: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 16,
    backgroundColor: "#f4d35e",
    marginRight: 10,
  },
  backText: { fontSize: 14, fontWeight: "700" },
  headerTitle: { fontSize: 22, fontWeight: "800" },
  subtitle: { fontSize: 16, marginBottom: 16 },
});
