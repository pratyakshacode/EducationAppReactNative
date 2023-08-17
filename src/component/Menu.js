import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Menu = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.menuContainer}>

            <TouchableOpacity style={styles.buttonStyle} onPress={()=>{
                navigation.navigate('Course')
            }} >
                <Image style= {styles.imgStyle} source={require('../../assets/course.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle} onPress={()=>{
                navigation.navigate('Student')
            }} >
                <Image style= {styles.imgStyle} source={require('../../assets/student.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle} onPress={()=>{
                navigation.navigate('Contact')
            }} >
                <Image style= {styles.imgStyle} source={require('../../assets/contact.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle} onPress={()=>{
                navigation.navigate('About')
            }} >
                <Image style= {styles.imgStyle} source={require('../../assets/about.png')} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

    buttonStyle: {
        // backgroundColor: 'gray',
        paddingVertical: 7,
        paddingHorizontal: 10,
        borderRadius: 10,
    },

    imgStyle: {
        width: 50,
        height: 50
    },

    menuContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },

    text: {
        color: 'white'
    }
})

export default Menu