import { View, Text, StyleSheet, Platform, Image } from "react-native";

const getType = (type) => {
  switch (type.toLowerCase()) {
    case "fire":
      return { borderColor: "#FF5733", emoji: " 🔥" };
    case "water":
      return { borderColor: "#6493EA", emoji: " 🌊" };
    case "earth":
      return { borderColor: "green", emoji: " 🌎" };
    default:
      return { borderColor: "#A0A0A0", emoji: "❓" };
  }
};

export default function CatCard({ name, image, hp, type, moves, weakness }) {
  const { borderColor, emoji } = getType(type);

  return (
    <View style={styles.card}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hp}>❤️ HP: {hp}</Text>
      </View>

      <Image style={styles.image} source={image} resizeMode="contain" />

      <View style={styles.typeContainer}>
        <Text style={[styles.type, { borderColor }]}>
          {type}
          {emoji}
        </Text>
      </View>

      <View style={styles.moveContainer}>
        <Text style={styles.move}>Moves: {moves.join(",")}</Text>
      </View>

      <View style={styles.weaknessContainer}>
        <Text style={styles.weakness}>Weakness: {weakness}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 2,
    borderWidth: 2,
    padding: 16,
    margin: 16,
    ...Platform.select({
      ios: {
        shadowOffset: { width: 2, height: 2 },
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
  },
  hp: {
    fontSize: 22,
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  type: {
    fontSize: 22,
    borderWidth: 4,
    borderRadius: 16,
    textAlign: "center",
    fontWeight: "bold",
    padding: 10,
    width: "40%",
  },
  typeContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 200,
    marginTop: 16,
    marginBottom: 16,
  },
  moveContainer: {
    marginBottom: 10,
  },
  move: {
    fontWeight: "bold",
    fontSize: 22,
  },
  weaknessContainer: {
    marginBottom: 10,
  },
  weakness: {
    fontWeight: "bold",
    fontSize: 22,
  },
});
