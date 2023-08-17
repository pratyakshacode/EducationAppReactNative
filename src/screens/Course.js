import React from "react";
import { Text, StyleSheet, FlatList, View, Image, TouchableOpacity, Button, Linking } from "react-native";
import Courses from "../api/Courses";

const Course = () => {

    return (
        <View style={styles.mainContainer}>
    <FlatList style={styles.listStyle} keyExtractor={(item)=> item.id} data={Courses} renderItem={({item}) => {
              
        return <View style={styles.courseContainer}>
        <View style= {styles.imgContainer}>
            <Image source={item.image} style= {styles.imgStyle}/>
        </View>
        <View>

            <Text style= {[styles.textStyle, styles.title]}>{item.title}</Text>
            <Text style= {styles.textStyle}>{item.description}</Text>
            <Text style= {styles.textStyle}>{item.price}</Text>
        </View>
        <View>
            <Button title="Buy Now" onPress={()=>{
                Linking.openURL(`http://www.youtube.com/${item.title}`)
            }}  color='black'/>
        </View>
    </View>
            
            }}/>
        </View>
    )
}

const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 7
        
        // justifyContent: 'center'
    },
  
    courseContainer: {
        // flex: 1,
        borderWidth: 2,
        borderRadius: 10,
        borderStyle: 'solid',
        borderColor: 'black',
        // alignItems: 'center',
        // width:'80%',
        margin: 10
    },

    title: {
        fontSize: 20,
        fontWeight:'bold'

    },
    imgStyle: {
        aspectRatio: 1,
        
        height: 200
    },
    textStyle: {
        textAlign: 'center',
    },
    imgContainer: {
        alignItems:'center',
        width:'100%',
        borderBottomColor: 'black',
        borderStyle:'solid',
        borderWidth: 1
    }
})
export default Course