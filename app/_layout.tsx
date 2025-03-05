import { 
  DarkTheme, 
  DefaultTheme, 
  ThemeProvider 
}                         from '@react-navigation/native';

import { Stack }          from 'expo-router';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useEffect }      from 'react';
import { useFonts }       from 'expo-font';

import * as SplashScreen  from 'expo-splash-screen';

import 'react-native-reanimated';


SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        {/* <Stack.Screen name="(coffee)" options={{title: 'Home', headerShown: false}} /> */}
        <Stack.Screen name="index" options={{title: 'Home', headerShown: false}} />
        <Stack.Screen name="contact" options={{title: 'Contact Us'}} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}