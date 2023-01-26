import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, VStack , Center, Text} from "native-base";
import {THEME} from './src/styles/theme';

export default function App() {
  return (
    <NativeBaseProvider theme={THEME}>
      <Center flex={1} bgColor="gray.900">
        <Text>Oi!</Text>
        <StatusBar style="auto" />
      </Center>
    </NativeBaseProvider>
  );
}

