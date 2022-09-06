import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Sections, Cart, Profile} from '../screens/index';
import {COLORS, icons, SIZES, svgs} from '../constants';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <>
      <Tab.Navigator
      initialRouteName='Messagges'
        screenOptions={{
          keyboardHidesTabBar: true,
          headerShown: false,
          // tabBarShowLabel: false,
          tabBarLabelPosition: 'below-icon',
          tabBarLabelStyle: {
            fontSize: 12,
          },
          tabBarStyle: {
            position: 'absolute',
            width: SIZES.width,
            height: (SIZES.height * 60) / SIZES.height,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            marginBottom: 5,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: '#FFF',
            elevation: 0,
          },
        }}>
          <Tab.Screen
            name="Messagges"
            component={Home}
            options={{
              tabBarIcon: ({focused}) => (
                <Image
                  source={svgs.messages}
                  resizeMode="contain"
                  style={[styles.tabBarIcon, {tintColor: focused ? '#1987ff' : 'black'}]}
                />
              ),
            }}
          />
        <Tab.Screen
          name="Roster"
          component={Sections}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                source={svgs.roster}
                resizeMode="contain"
                style={[styles.tabBarIcon, {tintColor: focused ? '#1987ff' : 'black'}]}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Pays"
          component={Cart}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                source={svgs.pays}
                resizeMode="contain"
                style={[styles.tabBarIcon, {tintColor: focused ? '#1987ff' : 'black'}]}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                source={svgs.profile}
                resizeMode="contain"
                style={[styles.tabBarIcon, {tintColor: focused ? '#1987ff' : 'black'}]}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  tabBarIcon: {
    width: 25,
    height: 25,
  },
});

export default Tabs;
