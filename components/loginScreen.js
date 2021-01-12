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

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
    
        this.state = { isLoading: true }
      }
      didSelectLoginButton = () => 
      {
        this.props.navigation.navigate('Dashboard')
      }
      didSelectForgotButton = () =>
      {
          this.props.navigation.navigate('Dashboard')
      }
      render() {
      return (
        <View style={styles.container}>
            <Text style={{paddingBottom: 20, textAlign: 'center', fontSize: 30, fontWeight: "bold", color: "white"}}>
              NeoSTORE
            </Text>
            <View style={styles.inputView} >
              <TextInput
                style={styles.inputText}
                placeholder="Enter EmailId"
                placeholderTextColor="black"
                onChangeText={text => this.setState({ email: text })} />
            </View>
            <View style={styles.inputView} >
              <TextInput
                secureTextEntry
                style={styles.inputText}
                placeholder="Enter Password"
                placeholderTextColor="black"
                onChangeText={text => this.setState({ password: text })} />
            </View>
            <TouchableOpacity style={styles.forgotButton} onPress={this.didSelectForgotButton}>
              <Text style={styles.forgot}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginButton} onPress={this.didSelectLoginButton}>
              <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
        </View>
      )
      }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "red",
      alignItems: 'center',
      justifyContent: 'center',
    },
    bgimage: {
  
      resizeMode: 'stretch'
  
    },
    logo: {
      fontWeight: "bold",
      fontSize: 50,
      color: "red",
      marginBottom: 40
    },
    inputView: {
      width: "80%",
      backgroundColor: "#f7f7ed",
      borderRadius: 25,
      height: 40,
      marginBottom: 20,
      justifyContent: "center",
      padding: 20,
      paddingTop: 20
    },
    imageLogo: {
      width: 250,
      height: 90,
      marginBottom: 5,
      resizeMode: 'center'
    },
    inputText: {
      height: 40,
      color: "black"
    },
    forgot: {
      paddingTop: 10,
      color: "white",
      fontWeight: 'bold',
      fontSize: 10,
      justifyContent: 'center',
      alignItems: 'center'
    },
    loginButton: {
      width: 120,
      backgroundColor: "white",
      borderRadius: 20,
      height: 40,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 20,
      marginBottom: 10,
      fontSize: 30
    },
    forgotButton: {
        paddingTop: 10,
        color: "white",
        fontWeight: 'bold',
        fontSize: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginText: {
      color: "red",
      fontSize: 25,
      fontWeight: 'bold'
    }
  });