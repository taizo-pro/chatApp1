// import {Component} from 'react';
// import {StyleSheet, Text, View} from 'react-native';
// import {GiftedChat} from 'react-native-gifted-chat';

// export default class Chat extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       messages: []
//     };
//   }

//   componentDidMount() {}

//   componentWillMount() {
//     this.setState({message: []});
//   }

//   componentWillUnmount() {}

//   reply() {
//     return {
//       _id: 1,
//       text: 'Hello',
//       createAt: new Date(),
//       user: {
//         _id: 2,
//         name: 'React Native',
//         avatar: 'https://placeimg.com/140/140/any',
//       },
//     };
//   }

//   // 「Send」ボタンが押されたときに実行されるメソッド
//   onSend(messages = []) {
//     this.setState(previousState => ({
//       // stateで管理しているmessagesに送信されたメッセージを増加する
//       messages: GiftedChat.append(
//         GiftedChat.append(previousState.messages, messages),
//         // this.reply(),
//       ),
//     }));
//   }

//   render() {
//     return(
//       <GiftedChat 
//         messages={this.state.messages}
//         onSend={messages => this.onSend(messages)}
//         user={{
//           _id: 1,
//           name: 'you',
//           avatar: 'https://placeimg.com/140/140/any'
//         }}
//       />
//     )
//   }
// }
