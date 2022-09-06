import React, { useState } from 'react';
import { SafeAreaView, StatusBar, View, StyleSheet, FlatList, ImageBackground, TouchableOpacity, TouchableWithoutFeedback, ScrollView, Text, TextInput, Image } from 'react-native';
import { COLORS, images, svgs, icons, SIZES, lightFONTS } from '../constants';

const Home = ({ navigation }) => {
	const [items, setItems] = useState([]);
	return (
		<SafeAreaView style={styles.container}>
			<StatusBar hidden={false} barStyle="dark-content" backgroundColor={COLORS.white} translucent={true} />
			<Text>Hello</Text>
			<TouchableOpacity onPress={() => navigation.navigate('Timeline')}>
				<Text>Click</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
};


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.white,
		marginBottom: 50,
	},

});

export default Home;
