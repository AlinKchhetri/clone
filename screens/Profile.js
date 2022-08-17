import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, ScrollView, Text } from 'react-native';
import { COLORS, images, icons, SIZES, lightFONTS } from '../constants';

const Profile = () => {
	return (
		<SafeAreaView style={styles.container}>
			<StatusBar hidden={false} barStyle="dark-content" backgroundColor= {COLORS.white} translucent = {true}/>
			<ScrollView>
                <Text style={styles.text}>Profile</Text>
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
        paddingHorizontal: 15,
	},
    text: {
        ...lightFONTS.h4
    }
});

export default Profile;
