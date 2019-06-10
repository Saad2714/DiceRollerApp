import React from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native';

export default class App extends React.Component{

  constructor(){
    super();
    this.state={
      uri:require("./DiceAssets/dice1.png")
    };
  }
  
getRandomValue = ()=>{
  return Math.floor(Math.random() * 6) + 1;
};

  playButtonPressed = () => {
    // Alert.alert("Heyyyyy "+ this.getRandomValue());
    
    var number = this.getRandomValue();

 
  
  switch (number) {
    case 1: this.setState({uri:require("./DiceAssets/dice1.png")})
      
      break;
      case 2: this.setState({uri:require("./DiceAssets/dice2.png")})
      
      break;
      case 3: this.setState({uri:require("./DiceAssets/dice3.png")})
      
      break;
      case 4: this.setState({uri:require("./DiceAssets/dice4.png")})
      
      break;
      case 5: this.setState({uri:require("./DiceAssets/dice5.png")})
      
      break;
      case 6: this.setState({uri:require("./DiceAssets/dice6.png")})
      
      break;
      
  
  
    default: this.setState({uri:require("./DiceAssets/dice1.png")})

      break;
  }

  
};
  render(){
  return (
    <View style={styles.container}>
      <Image source ={this.state.uri} />
      <TouchableOpacity onPress={this.playButtonPressed}>
          <Text style={styles.gameButton}>Play Game</Text>
     </TouchableOpacity>
    </View>
  );  
}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BB2CD9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gameButton:{
    marginTop:35,
    fontSize: 20,
    color:"#FFFFFF",
    fontWeight:"bold",
    borderWidth:2,
    paddingVertical:8,
    paddingHorizontal:40,
    borderRadius:7,
    borderColor:"#FFF"
  }
});
