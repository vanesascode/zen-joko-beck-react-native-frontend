import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ExploreScreen from "../screens/categories/ExploreScreen";
import PresentMomentScreen from "../screens/categories/PresentMomentScreen";
import FalseFearsScreen from "../screens/categories/FalseFearsScreen";
import BoundariesScreen from "../screens/categories/BoundariesScreen";
import RelationshipsScreen from "../screens/categories/RelationshipsScreen";
import HomeScreen from "../screens/HomeScreen";
import PillsScreen from "../screens/PillsScreen";

const Stack = createStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        options={{
          title: "Joko Beck Zen Teachings",
          headerStyle: {
            backgroundColor: "#000000",
          },
          headerTintColor: "#eeeeee",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
            fontFamily: "Cochin",
          },
        }}
        component={HomeScreen}
      />
      <Stack.Screen name="ExploreScreen" component={ExploreScreen} />
      <Stack.Screen
        name="PresentMomentScreen"
        component={PresentMomentScreen}
      />
      <Stack.Screen name="FalseFearsScreen" component={FalseFearsScreen} />
      <Stack.Screen name="BoundariesScreen" component={BoundariesScreen} />
      <Stack.Screen
        name="RelationshipsScreen"
        component={RelationshipsScreen}
      />
      <Stack.Screen name="PillsScreen" component={PillsScreen} />
    </Stack.Navigator>
  );
};