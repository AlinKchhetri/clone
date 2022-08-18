import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Sections, Cart, Profile} from '../screens/index';
import {COLORS, icons, SIZES} from '../constants';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          keyboardHidesTabBar: true,
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            position: 'absolute',
            width: SIZES.width,
            height: (SIZES.height * 74) / SIZES.height,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: '#EE3037',
            elevation: 0,
          },
        }}>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({size}) => (
                <Image
                  source={icons.home}
                  resizeMode="contain"
                  style={styles.tabBarIcon}
                />
              ),
            }}
          />
        <Tab.Screen
          name="Sections"
          component={Sections}
          options={{
            tabBarIcon: () => (
              <Image
                source={icons.sections}
                resizeMode="contain"
                style={[styles.tabBarIcon, {width: 28, height:28}]}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            tabBarIcon: () => (
              <Image
                source={icons.cart}
                resizeMode="contain"
                style={styles.tabBarIcon}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: () => (
              <Image
                source={icons.profile}
                resizeMode="contain"
                style={[styles.tabBarIcon, {width: 23, height:23}]}
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
