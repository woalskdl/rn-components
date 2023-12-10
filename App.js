import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Typography } from './src/components/Typography';
import { LocalImage } from './src/components/LocalImage';
import { RemoteImage } from './src/components/RemoteImage';

export default function App() {
  return (
    <View style={styles.container}>
      <Typography color='red' fontSize={20}>
        {/* 이것은 <Typography color='green' fontSize={20}>텍스트</Typography> 입니다. */}
        이것은 텍스트 입니다.
      </Typography>

      <LocalImage 
        localAsset={require('./assets/favicon.png')} 
        width={50} 
        height={50}/>
      <RemoteImage 
        url={'https://miro.medium.com/v2/resize:fit:1400/1*6GWNVdu_xV-OhgjYy4shcA.png'}
        width={200}
        height={100}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
