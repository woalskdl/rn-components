import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Header } from './src/components/header/Header';
import { HookTestComponent } from './src/components/HookTestComponent';
import { useCallback, useState } from 'react';
import { Button } from './src/components/Button';
import { Typography } from './src/components/Typography';
import { Spacer } from './src/components/Spacer';

export default function App() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  const sum = useCallback(() => {
    return (a + b)
  }, [a, b])

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

        <View style={{ flex:1, alignItems:'center', justifyContent: 'center'}}>
          <HookTestComponent a={a} b={b} />

          <Spacer space={10}/>

          <Typography>현재 callback으로 계산 된 값 : {sum()} </Typography>

          <Spacer space={10}/>

          <Button onPress={() => {
            console.log('press A');
            setA(a + 1);
          }}>
            <Typography>A 더하기</Typography>
          </Button>
        </View>

      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
