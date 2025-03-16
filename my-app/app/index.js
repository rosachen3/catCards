import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  ScrollView,
} from "react-native";
import CatCard from "./components/CatCard";

export default function Index() {
  const cat1Data = {
    name: "Cool Cat",
    image: require("./assets/cat1.jpg"),
    hp: 44,
    type: "Fire",
    moves: ["Smile", " Sit"],
    weakness: ["Food"],
  };

  const cat2Data = {
    name: "Sitting Cat",
    image: require("./assets/cat2.jpg"),
    hp: 20,
    type: "Water",
    moves: ["Scratch", "Meow", "Sit"],
    weakness: ["Moving"],
  };

  const cat3Data = {
    name: "Nori Cat",
    image: require("./assets/cat3.jpg"),
    hp: 65,
    type: "Earth",
    moves: ["Rollover"],
    weakness: ["??"],
  };

  const cat4Data = {
    name: "Sushi Cat",
    image: require("./assets/cat4.jpg"),
    hp: 15,
    type: "Fire",
    moves: ["Nom"],
    weakness: ["Cool Cat"],
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <CatCard {...cat1Data} />
        <CatCard {...cat2Data} />
        <CatCard {...cat3Data} />
        <CatCard {...cat4Data} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: Platform.OS == "android" ? 25 : 0,
  },
});
