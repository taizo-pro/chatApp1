import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
} from 'react-native';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return(

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

