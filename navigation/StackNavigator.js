import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/LoginScreen";
import Register from "./screens/RegisterScreen";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export { MainStackNavigator };