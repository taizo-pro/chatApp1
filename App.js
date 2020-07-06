import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
} from 'react-native';
// import Chat from './components/Chat'
// import {GiftedChat} from 'react-native-gifted-chat';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {}

  // componentWillMount() {
  //   this.setState({message: []});
  // }

  componentWillUnmount() {}

  // reply() {
  //   return {
  //     _id: 1,
  //     text: 'Hello',
  //     createAt: new Date(),
  //     user: {
  //       _id: 2,
  //       name: 'React Native',
  //       avatar: 'https://placeimg.com/140/140/any',
  //     },
  //   };
  // }

  // onSend(messages = []) {
  //   this.setState(previousState => ({
  //     messages: GiftedChat.append(
  //       GiftedChat.append(previousState.messages, messages),
  //       this.reply(),
  //     ),
  //   }));
  // }

  render() {
    return(
      // <GiftedChat 
      //   messages={this.state.messages}
      //   onSend={messages => this.onSend(messages)}
      //   user={{
      //     _id: 1,
      //     name: 'you',
      //     avatar: 'https://placeimg.com/140/140/any'
      //   }}
      // />
      <View style={styles.container}>
        <Text>Open up App</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

