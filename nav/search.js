import React from 'react';
import {Text,Button,Image,View} from 'react-native';

export default class third extends React.Component{
  static navigationOptions={
    tabBarLabel: 'Tab2'
    }
    render(){
      return <View style={
      {
      flex: 3,
      justifyContent: 'center',
      alignItems: 'center'
      }
    }>
    <Image 
style={{width: 120, height: 120, marginTop:30, marginBottom:10, alignItems: 'center'}}
source={{uri:'https://abs.twimg.com/icons/apple-touch-icon-192x192.png'}}/>
    <Text style={{fontSize: 30, color: '#55ACEE'}}>
    Search Module, Search Tweets in this module
    </Text>
        </View>  
    }}
