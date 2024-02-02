import React from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';

import LearningView from '../learning/LearningView';
import SettingsView from '../settings/SettingsView';

const Tab = createBottomTabNavigator();

const RootView = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarActiveTintColor: 'steelblue',
                    tabBarInactiveTintColor: 'gray',
                    headerShown: false,
                })}
            >
                <Tab.Screen 
                    name = "学习"
                    component = { LearningView }        
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialIcons name="library-books" color={color} size={size} />
                        ),
                    }} 
                />

                <Tab.Screen 
                    name = "设置"
                    component = { SettingsView }        
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <FontAwesome name="gear" color={color} size={size} />
                        ),
                    }} 
                />

            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default RootView;
