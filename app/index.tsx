import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Учи и цртај</Text>
      <Text style={styles.subtitle}>Букви и броеви</Text>

      <TouchableOpacity
        style={styles.card}
        onPress={() => router.push("/letters")}
      >
        <Text style={styles.cardText}>📘 Букви</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => router.push("/numbers")}
      >
        <Text style={styles.cardText}>🔢 Броеви</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fef6e4",
    paddingTop: 80,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  title: { fontSize: 34, fontWeight: "800", marginBottom: 6 },
  subtitle: { fontSize: 16, marginBottom: 24 },
  card: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 18,
    borderWidth: 2,
    borderColor: "#f4d35e",
    paddingVertical: 18,
    paddingHorizontal: 16,
    marginBottom: 14,
    elevation: 2,
  },
  cardText: { fontSize: 22, fontWeight: "800" },
});
