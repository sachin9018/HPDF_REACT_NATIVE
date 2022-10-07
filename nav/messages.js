import React from 'react';
import {Text,Button,Image,View} from 'react-native';
import FontAwesome, { Icons } from "react-native-fontawesome";
import {Header} from 'react-native-elements';
export default class third extends React.Component{
  static navigationOptions={
    tabBarLabel: 'Inbox'
    }
    render(){
      return (
<View style={
      {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'justify',
        wrapText:false
      }
    }>


    <Image 
style={{width: 130, height: 130, marginTop:31, marginBottom:32, alignItems: 'center'}}
source={{uri:'https://pbs.twimg.com/profile_images/875603699694948354/vR77CGM9_400x400.jpg'}}/>
    <Text style={{fontSize: 18, color: '#55BCEE'}}>
    Inbox Component
    </Text>
        </View>  
   ); }}
