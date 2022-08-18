import { FlatList, StyleSheet, Text, View, Image , ScrollView} from 'react-native'
import React, {useRef, useState, useEffect} from 'react'

const Menu = ({navigation, route}) => {

    const [selectedmenu, setSelectedMenu] = useState(null);


    useEffect(() => {
        let {item} = route.params
        setSelectedMenu(item)
    }, [])
    

  return (
    <ScrollView>
      {
        selectedmenu?.menu.map((item, index) => (
            <View
                key={`menu-${index}`}
                style={{ alignItems: 'center' }}>

                    <Text>{item.description}</Text>
                    <Image source={item.photo} />
                </View>
        ))}
    </ScrollView>
  )
}

export default Menu

const styles = StyleSheet.create({})