import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button, TouchableOpacity, ColorPropType,
} from 'react-native';
import AboutUsScreen from './aboutUsScreen';
import HomeScreen from './homeScreen';
import SettingsScreen from './settingsScreen';

const Tab = createBottomTabNavigator();

export default class DashboardScreen extends Component {
  render() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="About Us" component={AboutUsScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
    
  );
  }
}