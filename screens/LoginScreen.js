import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
// import Icon from 'react-native-ionicons';
// import Ionicons from 'react-native-vector-icons/Ionicons';

export default class LoginScreen extends Component {
  state = {
    name: '',
  };

  continue = () => {
    this.props.navigation.navigate('Chat', {name: this.state.name});
  };

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.circle} />
        <View style={{marginTop: 64}}>
          <Image
            source={require('../assets/conversation.png')}
            style={{alignSelf: 'center'}}
          />
        </View>
        <View style={{marginHorizontal: 32}}>
          <Text style={styles.header}>UserName</Text>
          <TextInput 
            style={styles.input}
            placeholder='ユーザーネーム'
            onChangeText={name => {
              this.setState({name})
            }}
            value={this.state.name}
          />
          <View style={{alignItems: 'flex-end', marginTop: 64}}>
            <TouchableOpacity 
              style={styles.continue} 
              onPress={this.continue}
            >
              <Image 
                source={require('../assets/send.png')} 
                style={{height: 24, width: 24, alignSelf: 'center', color: 'black'}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    backgroundColor: '#F4F5F7',
  },
  circle: {
    width: 540,
    height: 540,
    borderRadius: 500 / 2,
    backgroundColor: '#FFF',
    position: 'absolute',
    left: -120,
    top: -20,
  },
  header: {
    fontWeight: '800',
    fontSize: 30,
    color: '#514E5A',
    marginTop: 32,
  },
  input: {
    marginTop: 32,
    height: 58,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#BAB7C3',
    borderRadius: 30,
    paddingHorizontal: 16,
    color: '#514E5A',
    fontWeight: '600',
  },
  continue: {
    width: 70,
    height: 70,
    borderRadius: 70 / 1,
    backgroundColor: '#9075E3',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
