import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import FindScreen from '../screens/FindScreen';
import PostScreen from '../screens/PostScreen';
import ReelsScreen from '../screens/ReelsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { View, Text } from 'react-native';


const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator
        tabBarOptions ={
            {    
              showLabel: false,
              style: {
                position : 'absolute',
                bottom: 25,
                left: 20,
                right: 20,
                elevation: 0,
                backgroundColor: 'white',
                borderRadius: 15,
                height: 90,
              }
            }
          }>
            <Tab.Screen name='Home' 
            component={HomeScreen}
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems:'center', justifyContent: 'center', top:10}}>
                        <Text
                        style={ {color: focused? 'black' : 'red'}}>
                            Home
                        </Text>
                    </View>


                ),
            }}

            
            />
            <Tab.Screen 
            name='Find' 
            component={FindScreen}
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems:'center', justifyContent: 'center', top:10}}>
                        <Text
                        style={ {color: focused? 'black' : 'red'}}>Find
                        </Text>
                    </View>
                ),
            }}     
            
            />
            <Tab.Screen
             name='Post'
              component={PostScreen}
              options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems:'center', justifyContent: 'center', top:10}}>
                        <Text
                        style={ {color: focused? 'black' : 'red'}}>
                        Post
                        </Text>
                    </View>


                ),
            }}
              />
            <Tab.Screen 
            name='Reels'
             component={ReelsScreen}
             options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems:'center', justifyContent: 'center', top:10}}>
                        <Text
                        style={ {color: focused? 'black' : 'red'}}>
                        Reels
                        </Text>
                    </View>


                ),
            }}
             />
            <Tab.Screen 
            name='Profile'
            component={ProfileScreen}
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems:'center', justifyContent: 'center', top:10}}>
                        <Text
                        style={ {color: focused? 'black' : 'red'}}>
                        Profile
                        </Text>
                    </View>


                ),
            }}
            />
        </Tab.Navigator>

    );
}

export default Tabs;