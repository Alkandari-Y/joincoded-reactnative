//React
import React from "react";
//Components
import Navigation from "./components/Navigation/Navigation";
//Native Base
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer >
      <NativeBaseProvider>
        <Navigation/>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};