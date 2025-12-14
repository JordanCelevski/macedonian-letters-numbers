import { useRouter } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Учи и цртај</Text>
      <Text style={styles.subtitle}>Букви и броеви</Text>

      <Pressable
        style={({ pressed }) => [
          styles.card,
          styles.cardLetters,
          pressed && styles.pressed,
        ]}
        onPress={() => router.push("/letters")}
      >
        <View style={styles.iconCircle}>
          <Text style={styles.iconLetter}>А</Text>
        </View>

        <View style={styles.cardTextWrap}>
          <Text style={styles.cardTitle}>Букви</Text>
          <Text style={styles.cardHint}>Научи ја азбуката</Text>
        </View>

        <Text style={styles.chevron}>›</Text>
      </Pressable>

      <Pressable
        style={({ pressed }) => [
          styles.card,
          styles.cardNumbers,
          pressed && styles.pressed,
        ]}
        onPress={() => router.push("/numbers")}
      >
        <View style={styles.iconCircle}>
          <Text style={styles.iconNumber}>1 2 3..</Text>
        </View>

        <View style={styles.cardTextWrap}>
          <Text style={styles.cardTitle}>Броеви</Text>
          <Text style={styles.cardHint}>Учи 1 до 10</Text>
        </View>

        <Text style={styles.chevron}>›</Text>
      </Pressable>

      <Text style={styles.footerTip}>✨ Допри картичка за да започнеш!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF7E6",
    paddingTop: 70,
    paddingHorizontal: 16,
    alignItems: "center",
  },

  title: {
    fontSize: 36,
    fontWeight: "900",
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 16,
    marginTop: 6,
    marginBottom: 24,
    opacity: 0.8,
  },
  iconLetter: {
    fontSize: 34,
    fontWeight: "900",
    color: "#4361ee",
  },

  iconNumber: {
    fontSize: 18,
    fontWeight: "900",
    color: "#2a9d8f",
    letterSpacing: 2,
    paddingLeft: 10
  },
  card: {
    width: "100%",
    borderRadius: 22,
    paddingVertical: 18,
    paddingHorizontal: 16,
    marginBottom: 16,
    borderWidth: 2,
    flexDirection: "row",
    alignItems: "center",
    elevation: 3,
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },

  cardLetters: {
    backgroundColor: "#E8F2FF",
    borderColor: "#7BB6FF",
  },
  cardNumbers: {
    backgroundColor: "#E9FFF3",
    borderColor: "#6BD69A",
  },

  iconCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
    borderWidth: 2,
    borderColor: "rgba(0,0,0,0.06)",
  },
  iconEmoji: {
    fontSize: 28,
  },

  cardTextWrap: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: "900",
  },
  cardHint: {
    marginTop: 3,
    fontSize: 14,
    opacity: 0.75,
    fontWeight: "600",
  },

  chevron: {
    fontSize: 34,
    fontWeight: "900",
    opacity: 0.35,
    marginLeft: 8,
  },

  pressed: {
    transform: [{ scale: 0.98 }],
    opacity: 0.95,
  },

  footerTip: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: "700",
    opacity: 0.75,
  },
});
