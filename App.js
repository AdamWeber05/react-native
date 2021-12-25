import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import ChatScreen from './screens/ChatScreen';
import PostScreen from './screens/PostScreen';
import FindScreen from './screens/FindScreen';
import SettingsScreen from './screens/SettingsScreen';
import RegisterScreen from './screens/RegisterScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return(
    <Tab.Navigator initialRouteName="Home" tabBarOptions={{
      showLabel: false,
      style: {
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 40,
        marginHorizontal: 20,
        height: 60,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.06,
        shadowOffset: {
          width: 10,
          height: 10
        },
        paddingHorizontal: 20,
      }
    }}>
      <Tab.Screen name="Chat" component={ChatScreen} options={{ 
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <View style={{
            position: 'absolute',
            top: 15
          }}>
            <FontAwesome5 name="comments" size={20} color={focused ? 'red': 'gray'}></FontAwesome5>
          </View>
        )
      }}/>
      <Tab.Screen name="Post" component={PostScreen} options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <View style={{
            position: 'absolute',
            top: 15
          }}>
            <FontAwesome5 name="plus" size={20} color={focused ? 'red': 'gray'}></FontAwesome5>
          </View>
        )
      }}/>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <View style={{
            position: 'absolute',
            top: 15
          }}>
            <FontAwesome5 name="home" size={20} color={focused ? 'red': 'gray'}></FontAwesome5>
          </View>
        )
      }}/>
      <Tab.Screen name="Find" component={FindScreen} options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <View style={{
            position: 'absolute',
            top: 15
          }}>
            <FontAwesome5 name="search" size={20} color={focused ? 'red': 'gray'}></FontAwesome5>
          </View>
        )
      }}/>
      <Tab.Screen name="Settings" component={SettingsScreen} options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <View style={{
            position: 'absolute',
            top: 15
          }}>
            <FontAwesome5 name="user-alt" size={20} color={focused ? 'red': 'gray'}></FontAwesome5>
          </View>
        )
      }}/>
      </Tab.Navigator>
    ) 
  }

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerTitleAlign: 'center'}}>
        <Stack.Screen options={{ headerShown: false}} name="Login" component={LoginScreen}/>
        <Stack.Screen options={{ headerShown: false}} name="Register" component={RegisterScreen}/>
        <Stack.Screen options={{ headerShown: false}} name="Home" component={HomeTabs}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
});
