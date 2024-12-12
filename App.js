import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text } from "react-native";
import CategoryScreen from "./screens/CategoryScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import { GestureHandlerRootView } from "react-native-gesture-handler";

// import { createNativeStackNavigator } from "@react-navigation/native-stack";

// const Stack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <GestureHandlerRootView>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#cccccc" },
              headerTintColor: "black",
              contentStyle: { backgroundColor: "#ccccc2" },
            }}
          >
            <Stack.Screen
              name="MealsCategories"
              component={CategoryScreen}
              options={{
                title: "All Category",
              }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
              // options={({ route, navigation }) => {
              //   const catId = route.params.categoryID;
              //   return { title: catId };
              // }}
            />
            <Stack.Screen name="MealDetail" component={MealDetailScreen} />
          </Stack.Navigator>
          {/* <CategoryScreen />; */}
        </GestureHandlerRootView>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
