import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "./screens/HomeScreen";
import { NoteMainScreen } from "./screens/NoteMainScreen";
import { NewNoteScreen } from "./screens/NewNoteScreen";
import translate from "./utils/language.utils";

const Stack = createStackNavigator();

function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NoteMain"
          component={NoteMainScreen}
          options={{ title: translate("note_main") }}
        />
        <Stack.Screen
          name="NewNote"
          component={NewNoteScreen}
          options={{ title: translate("new_note") }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Main;