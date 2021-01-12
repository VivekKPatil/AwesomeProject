import React, { Component } from 'react';
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

export default class SettingsScreen extends Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text> Settings! </Text>
            </View>
        );
    }
}
