import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";

import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";
import List from "../components/mealDetail/List";
import Subtitle from "../components/mealDetail/Subtitle";
import { useLayoutEffect } from "react";

function MealDetailScreen({ route, navigation }) {
  const mealId = route.params.mealId;
  function handlePress() {
    console.warn("pressed");
  }

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  useLayoutEffect(() => {
    const mealsTitle = selectedMeal.title;
    navigation.setOptions({
      title: mealsTitle,
      headerRight: () => {
        return <Button title="Tap me!" onPress={handlePress} />;
      },
    });
  }, [navigation]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "black",
  },
  detailText: {
    color: "black",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
