import { Assets } from '@react-navigation/stack';
import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput,
    Button, 
    TouchableOpacity, 
    ColorPropType,
    Image
  } from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
          <View style={{ height: '100%', backgroundColor: "red" }}>
            <Image
              style={styles.imageLogo}
              source={require('./Assets/bed.jpg')}
            />
            <View style={{ height: '60%', backgroundColor: "white"}}>
          <View style={{ flexDirection: 'row', height: '50%'}}>

            <View style={styles.circleContainer}>
              <View style={styles.circle}>
                <Text style={styles.circleText}>Tables</Text>
              </View>

            </View>

            <View style={styles.circleContainer}>
              <View style={styles.circle}>
              <Text style={styles.circleText}>Sofas</Text>
              </View>

            </View>

          </View>

          <View style={{ flexDirection: 'row', height: '50%'}}>

            <View style={styles.circleContainer}>
              <View style={styles.circle}>
              <Text style={styles.circleText}>Chairs</Text>
              </View>

            </View>

            <View style={styles.circleContainer}>
              <View style={styles.circle}>
              <Text style={styles.circleText}>Cupboards</Text>
              </View>

            </View>

          </View>
        </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
  imageLogo: {
    width: "100%",
    height: "40%",
    resizeMode: 'center'
  },
    halfContainer: {
  
    },
    circleContainer:
    {
      width: '50%', justifyContent: 'center',
      alignItems: 'center', alignContent: 'center'
    },
  
    circle:
    {
      width: 120, height: 120, borderWidth: 1, borderRadius: 60,
      borderColor: "black", backgroundColor: 'red',
      justifyContent : 'center'
    },
    
    circleText : {
      color: "white",
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 18
    },
  
  });