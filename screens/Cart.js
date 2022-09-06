import React, { useState } from 'react';
import { SafeAreaView, StatusBar, ScrollView, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
import { COLORS, images, icons, SIZES, lightFONTS } from '../constants';
import { Agenda, DateData } from 'react-native-calendars'

const Cart = () => {
  const [items, setItems] = useState([]);
  const currentDate = new Date().toJSON().slice(0, 10);
  const renderEmptyDate = () => {
    return (
      <View />
    );
  }

  const timeToString = (time) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }

  const loadItems = (day) => {
    const items = items || {};

    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);

        if (!items[strTime]) {
          items[strTime] = [];
          
          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: 'Item for ' + strTime + ' #' + j,
              height: Math.max(50, Math.floor(Math.random() * 150)),
              day: strTime
            });
          }
        }
      }
      
      const newItems = {};
      Object.keys(items).forEach(key => {
        newItems[key] = items[key];
      });
      setItems(newItems);
    }, 1000);
  }

  const obj = Object.assign({}, items);


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={false} barStyle="dark-content" backgroundColor={COLORS.white} translucent={true} />
      <Agenda
        items={obj}
        loadItemsForMonth={loadItems}
        selected={currentDate}
        renderEmptyDate={renderEmptyDate}
        renderItem={(item) => {
          return (
            <TouchableOpacity style={styles.itemContainer} onPress={() => Alert.alert(item.name)}>
              <Text>{item.name}</Text>
              <Text>{item.h}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginBottom: 70,
    paddingTop: 10,
    paddingHorizontal: 15,
  },
  text: {
    ...lightFONTS.h4
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30
  },
  itemContainer: {
    backgroundColor: 'white',
    margin: 5,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    // flex: 1,
  },
});

export default Cart;
