import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Typography } from './src/components/Typography';
import { LocalImage } from './src/components/LocalImage';
import { RemoteImage } from './src/components/RemoteImage';
import { Icon } from './src/components/Icons';
import { Badge } from './src/components/Badge';
import { Button } from './src/components/Button';
import { Divider } from './src/components/Divider';
import { Spacer } from './src/components/Spacer';

export default function App() {
  return (
    <View style={styles.container}>
      <Typography color='red' fontSize={20}>
        {/* 이것은 <Typography color='green' fontSize={20}>텍스트</Typography> 입니다. */}
        이것은 텍스트 입니다.
      </Typography>

      <Divider/>

      <LocalImage 
        localAsset={require('./assets/favicon.png')} 
        width={50} 
        height={50}
      />

      <Spacer space={20}/>

      <RemoteImage 
        url={'https://miro.medium.com/v2/resize:fit:1400/1*6GWNVdu_xV-OhgjYy4shcA.png'}
        width={200}
        height={100}
      />

      <Icon name='home' size={40} color='red'/>

      <View style={{ flexDirection: 'row '}}>
        <Badge fontSize={10}>
          <Typography>BADGE</Typography>
        </Badge>

        <Badge fontSize={10}>
          <Icon name='home' size={50} color='black' />
        </Badge>
      </View>

      <Divider/>

      <View style={{ flexDirection: 'row ', marginTop: 32}}>
        <Button onPress={() => {console.log('PRESSED BUTTON')}}>
          <Typography>BUTTON</Typography>
        </Button>

        <Button onPress={() => {console.log('PRESSED ICON BUTTON')}}>
          <Icon name='home' size={50} color='green'/>
        </Button>

      </View>

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
