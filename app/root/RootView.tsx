import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import LearningView from '../learning/LearningView';
// import SettingsView from '../settings/SettingsView';

const Tab = createBottomTabNavigator();

function HomeScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
  
  function SettingsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings Screen</Text>
      </View>
    );
  }
  
const RootView = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="学习" component={HomeScreen} />
                <Tab.Screen name="设置" component={SettingsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
  };

export default RootView;


  
//   export { HomeScreen, SettingsScreen };