import React from 'react';
import { Text, View, Image, StyleSheet, ImageBackground } from 'react-native';
import tailwind from 'tailwind-rn';
import { Button } from '../../src/components';

export default function Start({ navigation }) {
  const handleNavigation = (stackname) => {
    navigation.navigate(stackname);
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/img/on-board-bg.png')} style={styles.image}>
        <View style={tailwind('flex flex-col w-full h-full justify-center px-5')}>
          <View style={tailwind('flex flex-col h-full w-full items-center justify-center')}>
            <Image
              style={tailwind('h-64 w-64')}
              source={require('../../assets/img/on-boarding.png')}
            />
            <View style={tailwind('w-full px-4 py-12')}>
              <Text style={tailwind('text-white font-bold text-2xl')}>Invite Your Friend's</Text>
              <Text style={tailwind('text-white font-bold text-2xl')}>And Earn Rewards</Text>
              <Text style={tailwind('text-gray-400 text-left text-xs font-bold py-1')}>
                We reveal the top cashback current account available if you want to earn a extra cash throught your account.
              </Text>
            </View>
            <View style={tailwind('flex flex-row items-center justify-around w-full')}>
              <View>
                <Button
                  icon_name='arrow-forward'
                  classname='w-full px-2 py-3 rounded-lg'
                  iconSize={16}
                  grdStart={1.6}
                  grdEnd={2}
                  icon_color='white'
                  textColor='text-yellow-800'
                  gradientColors={['#E8CD66','#FAC400', '#FAC400']}
                  text='Sign Up For Free'
                  onPress={() => handleNavigation('SignUp')}
                />
              </View>
              <View>
                <Button
                  icon_name='log-in'
                  textColor='text-white'
                  icon_color='white'
                  grdStart={0.8}
                  grdEnd={1}
                  classname='w-full px-10 py-3 rounded-lg'
                  iconSize={20}
                  gradientColors={['#2B156A', '#2B156A']}
                  text='Sign In'
                  onPress={() => handleNavigation('SignIn')}
                />
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "stretch",
    justifyContent: "center"
  }
});

