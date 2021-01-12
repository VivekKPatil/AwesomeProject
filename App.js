/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import LoginScreen from './components/loginScreen';
import DashboardScreen from './components/dashboardScreen';

const SplashScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>Neosoft Technologies</Text>
      <TouchableOpacity style={styles.startButton} onPress={() => navigation.push("Login")}>
        <Text style={{color: "red", fontSize: 15}}>Start App</Text>
      </TouchableOpacity>
      </View>
  );
}

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Dashboard" component={DashboardScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContainer: {
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 30
  },
  startButton: {
    width: 100,
    backgroundColor: "white",
    borderRadius: 20,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 10
  }
});
