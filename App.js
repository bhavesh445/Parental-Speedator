import * as React from 'react';
import { Text, View, Button, TouchableOpacity, Image } from 'react-native';
import AppHeader from './components/AppHeader';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppHeader />
        <Text
          style={{
            marginTop: 10,
            marginLeft: 5,
            backgroundColor: 'yellow',
          }}>
          In the recent times the craze of riding vehicles at very fast pace by
          youngsters has increased.The youngsters just for the sake of show off
          and to flatter their pride in social media they risk their life by
          riding vehicles very fast. They become the targets of road
          accidents.They not only ruin their own life but they also ruin their
          parents life.
        </Text>
        <Text
          style={{
            marginTop: 10,
            marginLeft: 5,
            backgroundColor: 'orange',
          }}>
          In order to reduce these road accidents the parents can play an
          significant role.So to assist the parents in doing this job I have
          developed an application in which the application will be connected to
          the vehicle through a device.The feature of this device is that it can
          limit the speed of the vehicle and will not allow the vehicle to
          increase its speed out of the limit specified by the parents.And the
          control of the device will be in the parents hand so that they can
          easily limit the speed of their chidren's vehicle.
        </Text>
        <Image
          style={{ width: 250, height: 250, marginLeft: 40 }}
          source={{
            uri:
              'https://us.123rf.com/450wm/artinspiring/artinspiring1812/artinspiring181200334/127096892-stock-vector-man-holding-mobile-phone-and-have-idea-person-with-smartphone-vector-illustration-in-cartoon-style.jpg?ver=6',
          }}
        />
        <Text
          style={{
            marginTop: 10,
            marginLeft: 5,
            backgroundColor: 'red',
          }}>
          In this way the parents can restrict the speed of the vehicle and the
          casualty of the road accidents will decrease as well as they can save
          their children's life.The app also comes with a special feature that
          it can also track the vehicle so parents can easily keep an eye on
          their kids.
        </Text>
      </View>
    );
  }
}
