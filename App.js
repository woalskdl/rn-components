import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Header } from './src/components/header/Header';

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Header>
          <Header.Group>
            <Header.Icon iconName='arrow-back' />
            <Header.Title title={'HEADER'}/>
          </Header.Group>

          <Header.Icon iconName='close'/>
        </Header>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
