import React from 'react';
import { SafeAreaView, StatusBar, View, StyleSheet, FlatList, ImageBackground, TouchableOpacity, TouchableWithoutFeedback, ScrollView, Text, TextInput, Image } from 'react-native';
import { COLORS, images, icons, SIZES, lightFONTS } from '../constants';

function HomeHeader (props) {
    return (
        <View>
            <Text>{props.text}</Text>
        </View>
    );
}

const data = [
    {
      id: '1',
      title: 'Sajjan Raj Vaidya',
      date: 'July 30',
      type: 'Concert',
      image : icons.home
    },
    {
      id: '2',
      title: 'Albatross LIVE',
      date: 'Dec 08',
      type: 'Concert',
      image : icons.home
    },
    {
      id: '3',
      title: 'Concert',
      date: 'April 03',
      type: 'Concert',
      image : icons.home
    },
  ];

function UI () {
    return (
        <>
            <View style={styles.WelcomeText}>
            <Text style={styles.WelcomeTitle}>Welcom Back</Text>
            <TouchableOpacity onPress={() => {
                navigation.navigate('Profile');
            } }>
                <Image source={icons.cart} />
            </TouchableOpacity>
        </View><View style={styles.Title}>
                <Text style={styles.TitleText}>Explore Events</Text>
            </View><View style={styles.searchSection}>
                <TextInput
                    placeholder='Search'
                    style={styles.searchInput} />

                <TouchableOpacity onPress={() => { navigation.navigate('Search'); } }>
                    <Image source={icons.profile}
                        style={{ opacity: 0.4 }} />
                </TouchableOpacity>
            </View><View style={styles.featuredSection}>
                <Text style={styles.featuredTitle}>FEATURED</Text>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={data}
                    renderItem={(event) => {
                        return (
                            <TouchableWithoutFeedback
                                onPress={() => {
                                    navigation.navigate('My Events');
                                } }
                            >
                                <View style={{
                                    marginBottom: 20,
                                    overflow: 'hidden'
                                    // marginRight: -10,
                                }}>
                                    <ImageBackground source={event.item.image}
                                        resizeMode='cover'
                                        borderRadius={15}
                                        style={{
                                            width: 210,
                                            height: 210,
                                            justifyContent: 'space-between',
                                            margin: 10,
                                        }}>
                                        <View style={{
                                            display: 'flex',
                                            margin: 10,
                                            flexDirection: 'column',
                                            justifyContent: 'flex-end',
                                        }}>
                                            <View style={{
                                                width: 60,
                                                height: 60,
                                                backgroundColor: 'white',
                                                borderRadius: 10,
                                                alignSelf: 'flex-end',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }}>
                                                <Text style={{
                                                    fontFamily: 'ProductSansBold',
                                                    fontSize: 15,
                                                }}>{event.item.date}</Text>
                                            </View>
                                            <View style={{
                                                bottom: -80,
                                                padding: 10,
                                                width: 193,
                                                borderRadius: 10,
                                                opacity: 0.8,
                                                backgroundColor: '#121212'
                                            }}>
                                                <Text style={{
                                                    color: 'white',
                                                    opacity: 0.7,
                                                    fontFamily: 'ProductSansBold',
                                                    fontSize: 13
                                                }}>{event.item.type}</Text>
                                                <Text style={{
                                                    color: 'white',
                                                    fontFamily: 'ProductSansBlack',
                                                    fontSize: 17,
                                                }}>{event.item.title}</Text>
                                            </View>
                                        </View>

                                    </ImageBackground>
                                </View>
                            </TouchableWithoutFeedback>
                        );
                    } } />
            </View></>
    )
}

const Home = () => {
	return (
		<SafeAreaView style={styles.container}>
			<StatusBar hidden={false} barStyle="dark-content" backgroundColor= {COLORS.white} translucent = {true}/>
			<ScrollView>
                <ImageBackground source={images.background} style = {styles.background}>
                    <UI />
                </ImageBackground>
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
    WelcomeText: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        top: 30,
        marginHorizontal: 15,
      },
      WelcomeTitle: {
        ...lightFONTS.h3
      },
    
      Title:{
        // backgroundColor: 'grey',
        // top: 35,
        marginVertical: 30,
        marginHorizontal: 15,
      },
      TitleText: {
        ...lightFONTS.body3
      },
    
      searchSection:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#121212',
        marginHorizontal: 25,
        marginVertical: -18,
        padding: 10,
        borderWidth: 3,
        borderRadius: 16,
      },
      searchInput: {
        marginLeft: 10,
        marginTop: 5,
        width: 270,
        height: 25,
        color: 'white',
        fontSize: 17,
      },
      featuredSection:{
        marginStart: 15,
        marginTop: 40,
      },
      featuredTitle: {
        color: 'white',
        fontFamily: 'ProductSansBold',
        fontSize: 20,
    
      },
      foryouSection: {
        marginHorizontal: 15,
      }
    
});

export default Home;
