import React from 'react';
import { SafeAreaView, StatusBar, View, StyleSheet, FlatList, ImageBackground, TouchableOpacity, TouchableWithoutFeedback, ScrollView, Text, TextInput, Image } from 'react-native';
import { COLORS, images, icons, SIZES, lightFONTS } from '../constants';
import {restaurantData} from '../Data/Restaurant'




const Home = ({navigation}) => {

    const userdetails = { 
        username : "Alin",
        location: "Kathmandu"
    }

    function Header() {
        return (
            <View style={styles.header}>
                <Text style={{...lightFONTS.h4}}>Welcome Back!</Text>
                {/* <Text style={{...lightFONTS.body3}}>{userdetails.username}</Text> */}
                <View style={styles.location}>
                    <TouchableOpacity onPress={() => { navigation.navigate('Search') }}>
                        <Image source={icons.location}
                            style={{ width: 15, height: 20}} />
                    </TouchableOpacity>
                    <Text style={{...lightFONTS.body3, marginHorizontal: 5}}>{userdetails.location}</Text>
                </View>
            </View>
        );
    }

    function SearchBar () {
        return (
            <View style={styles.searchSection}>
                <TouchableOpacity onPress={() => { navigation.navigate('Search'); }}>
                    <Image source={icons.search}
                        style={{ opacity: 0.4, width: 20, height: 20 }} />
                </TouchableOpacity>
                <TextInput
                    placeholder='Search'
                    style={styles.searchInput} />
                <TouchableOpacity onPress={() => { navigation.navigate('Search'); }}>
                    <Image source={icons.filter}
                        style={{ width: 26, height: 17 }} />
                </TouchableOpacity>
            </View>
        );
    }

    function RestaurantList () {
        const renderItem = ({ item , id }) => {
            return (
                <TouchableOpacity
                onPress ={() => {navigation.navigate("Menu" ,{item})}}
                    style={{
                        padding: SIZES.padding,
                        paddingBottom: SIZES.padding * 2,
                        backgroundColor: COLORS.white,
                        borderRadius: SIZES.radius,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                    
                >
                    <View
                        style={{
                            width: 145,
                            height: 190,
                            borderRadius: 25,
                            flexDirection: 'column',
                            // justifyContent: 'space-between',
                            alignItems: 'center',
                            backgroundColor: 'white',
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,

                            elevation: 5,
                        }}
                    >
                        <Image
                            source={item.image}
                            resizeMode="contain"
                            style={{
                                width: 145,
                                height: 120
                            }}
                        />
                    <View style={{flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', alignSelf: 'flex-start', marginLeft: 10}}>
                    <Text
                        style={{
                            ...lightFONTS.h6,
                        }}
                    >
                        {item.RestaurantName}
                    </Text>
                    <Text
                        style={{
                            ...lightFONTS.body4,
                            color: COLORS.red,
                        }}
                    >
                        {item.rating}
                    </Text>
                    <Text
                        style={{
                            ...lightFONTS.body4, 
                            color: COLORS.red,
                        }}
                    >
                        {item.distance}
                    </Text>

                    </View>
                    </View>

                </TouchableOpacity>
            )
        }
        return (
            <View style={styles.featuredSection}>
                <Text style={{...lightFONTS.h4, margin: SIZES.padding}}>Top Restaurants</Text>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={restaurantData}
                        keyExtractor = {item => `${item.id}`}
                        renderItem={renderItem} />
                </View>
        );
    }

    function FoodList () {
        const renderFoodItem = ({ item , id }) => {
            return (
                <TouchableOpacity
                onPress ={() => {navigation.navigate("Menu" ,{item})}}
                    style={{
                        padding: SIZES.padding,
                        paddingBottom: SIZES.padding * 2,
                        backgroundColor: COLORS.white,
                        borderRadius: SIZES.radius,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                    
                >
                    <View
                        style={{
                            width: 145,
                            height: 190,
                            borderRadius: 25,
                            flexDirection: 'column',
                            // justifyContent: 'space-between',
                            alignItems: 'center',
                            backgroundColor: 'white',
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,

                            elevation: 5,
                        }}
                    >
                        <Image
                            source={item.menu.photo}
                            resizeMode="contain"
                            style={{
                                width: 145,
                                height: 120
                            }}
                        />
                    <View style={{flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', alignSelf: 'flex-start', marginLeft: 10}}>
                    <Text
                        style={{
                            ...lightFONTS.h6,
                        }}
                    >
                        {item.menu.name}
                    </Text>
                    <Text
                        style={{
                            ...lightFONTS.body4,
                            color: COLORS.red,
                        }}
                    >
                        {item.menu.price}
                    </Text>
                    <Text
                        style={{
                            ...lightFONTS.body4, 
                            color: COLORS.red,
                        }}
                    >
                        {item.menu.calories}
                    </Text>

                    </View>
                    </View>

                </TouchableOpacity>
            )
        }
        return (
            <View>
                <Text style={{...lightFONTS.h5, margin: SIZES.padding, color: COLORS.red}}>Recommended Dishes</Text>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={restaurantData}
                        keyExtractor = {item => `${item.id}`}
                        renderItem={renderFoodItem} />
                </View>
        );
    }

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar hidden={false} barStyle="dark-content" backgroundColor= {COLORS.white} translucent = {true}/>
			<ScrollView>
                {/* <ImageBackground source={images.background} style = {styles.background}> */}
                    <Header />
                    <SearchBar />
                    <RestaurantList />
                    <FoodList />
                {/* </ImageBackground> */}
            </ScrollView>
		</SafeAreaView>
	);
};


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.white,
		marginBottom: 70,
        paddingTop: 30,
        // paddingHorizontal: 15,
	},
    background: {
        width: SIZES.width,
        height: SIZES.height
    },
    header: {
        margin: SIZES.padding,
        flexDirection: 'column',
    },
    location: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    searchSection:{
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#F3F4F9',
        paddingHorizontal: SIZES.padding,
        width: SIZES.width-30,
        height: 40,
        margin: SIZES.padding,
        borderRadius: SIZES.padding
      },
      searchInput: {
        ...lightFONTS.body4,
        marginLeft: 10,
        width: 288,
        height: 56,
      },
    
});

export default Home;
