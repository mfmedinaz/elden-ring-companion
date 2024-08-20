import { Stack } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { NativeModules, processColor } from 'react-native';
import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
const { StatusBarManager } = NativeModules;

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();


export default function RootLayout() {

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    StatusBarManager.setColor(processColor("#050D06"), false);
    StatusBarManager.setStyle("light-content");
  }, []);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ header: () => null, headerTitle: "Cheat Sheet" }} />
      <Stack.Screen name="cheat" options={{
        headerTitle: "Cheat Sheet", headerStyle: {
          backgroundColor: '#050D06',
        }, headerTintColor: '#fff',
      }} />
      <Stack.Screen name="quest-tracker" options={{
        headerTitle: "NPC Quest Tracker", headerStyle: {
          backgroundColor: '#050D06',
        }, headerTintColor: '#fff',
      }} />
      <Stack.Screen name="limgrave-npc" options={{
        headerTitle: "Limgrave", headerStyle: {
          backgroundColor: '#050D06',
        }, headerTintColor: '#fff',
      }} />
    </Stack>
  );
}
