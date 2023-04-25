import React from "react";
import { Image, View, StyleSheet, Text, Dimensions } from "react-native";

const LogoImage = () => {
    return (
    <View style={styles.imageContainer}>
        <Image source={require('../assets/humana-asset.png')} 
    style={styles.image}/>
    </View>
)}

const { height } = Dimensions.get('window')

const styles = StyleSheet.create({
    imageContainer: {
        alignItems: "center", 
        justifyContent: "center",
    },
    image: {
        width: 260, 
        height: 55, 
        // marginTop: 100
        marginTop: height * 0.1
    }
});

export default LogoImage