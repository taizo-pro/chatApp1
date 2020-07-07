import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import LoginScreen from './screens/LoginScreen'
import ChatScreen from './screens/ChatScreen'

import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator()

// const AppNavigator = createStackNavigator(
//   {
//     Login: LoginScreen,
//     Chat: ChatScreen
//   },
//   {
//     headerNode: 'none'
//   }
// )

// export default createAppContainer(AppNavigator)

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#333399'
          },
          headerShown: false
        }}
        headerMode='float'
      >
        <Stack.Screen 
          name='Home' 
          component={LoginScreen} 
        />
        <Stack.Screen 
          name='Chat' component={ChatScreen}
          options={{}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}