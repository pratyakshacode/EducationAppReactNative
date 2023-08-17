import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput, Button, Alert } from "react-native";
const Contact = ({navigation}) => {


    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")
    const [about, setAbout] = useState('')

    const submit = () => {

        if(!userName || !email || !number || !about) {
            Alert.alert('Please fill all the details ...')
        } else {
            Alert.alert('All Good! Redirecting to Home')
            navigation.navigate('Home')

        }
    }
    return (
       <View style={styles.mainContainer}>

        <Text style={styles.mainHeader}> Level Up Your knowledge with Us. </Text>
        <Text style={styles.description}>You can reach us anutime via pratyakshaverma2018@gmail.com</Text>
        <View style={styles.inputContainer}>

            <Text>Enter Your Name: </Text>
            <TextInput style={styles.inputStyle} 
            value={userName}
            onChangeText ={(e)=>setUserName(e)}
            placeholder="Enter Your Name"/>
            

        </View>
        <View style={styles.inputContainer}>

            <Text>Enter Your Email: </Text>
            <TextInput style={styles.inputStyle} 
            value={email}
            onChangeText ={(e)=>setEmail(e)}
            placeholder="Enter Your Email"/>
            

        </View>
        <View style={styles.inputContainer}>

            <Text>Enter Your Number: </Text>
            <TextInput 
            style={styles.inputStyle} 
            value={number}
            onChangeText ={(e)=>setNumber(e)}
            placeholder="Enter Your Number"/>
            

        </View>
        <View style={styles.inputContainer}>

            
            <TextInput 
            style={[styles.inputStyle, styles.textArea]} 
            value={about}
            onChangeText ={(e)=>setAbout(e)}
            placeholder="Tell us about yourself"
            numberOfLines={5}
            multiline={true}
            />
            

        </View>

        <View style={styles.inputContainer}>
            <Button title="Submit" onPress={()=> submit()}/>
        </View>

       </View>
    )
}

const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        alignItems: 'center',
        padding: 10
        // justifyContent: 'center'
    },
    inputStyle :{
        height: 40,
        width: '100%',
        borderStyle: 'solid',
        borderColor: '#4af',
        borderWidth: 1,
        marginVertical: 10,
        padding: 7,
        borderRadius: 10
    },
    inputContainer : {
        // height: '100%',
        width: '100%',
        marginVertical: 10
        
    },
    mainHeader: {
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 10
    },

    description : {
        fontSize: 15,
        textAlign:'center',
        color:'gray',
        marginVertical: 10
    },
    textArea : {
        height: 100,
    }
})
export default Contact