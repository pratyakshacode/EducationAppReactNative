import React from 'react';
import { Button, Image } from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
import Menu from '../component/Menu';
import notifee from '@notifee/react-native';

const Home = (props) => {

    const sendNotification = async () => {
        
        await notifee.requestPermission();

        const channelId = await notifee.createChannel({
            id:'default',
            name: 'Default Channel'
        })

        await notifee.displayNotification({
            title: 'App Notification',
            body: 'Hey there you are using our education app',
            android: {
                channelId,
                smallIcon: 'App Icon',
                pressAction : {
                    id: 'default'
                }
            }
        })
    }
    return (
        <>
        <View style= {styles.homeContainer}>
        <Image style={styles.imgStyle} source={require('../../assets/edu.jpg')}/>
        <Text style= {styles.miniHeading}>Welcome to</Text>
        <Text style= {styles.heading}>{props.channelName}</Text>
        <Text style= {styles.heading}>Our Education App</Text>
        <Text style= {styles.desc}>We are the organization provides the free education to the students. Our aim to create the evolution in the education system where everyone can learn anything and can improve the skills.  </Text>
        
        
        </View>
        <Button onPress={()=> sendNotification()} title='Notify'/>
        <View style= {styles.menuContainer}>
            <Menu/>
        </View>
        </>
    )

}

const styles = StyleSheet.create({

    imgStyle : {
        marginTop: 40,
        height: 250,
        width: 250,
        
    },

    
    heading : {
        color:'rgb(25,100,180)',
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 3,
        textAlign: 'center'
    },
    miniHeading : {
        color:'rgb(25,100,15)',
        fontWeight: 'bold',
        fontSize: 40,
        marginTop: 10,
        textAlign: 'center'
    }
    ,
    homeContainer : {
        
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        backgroundColor: 'white'
    }
,
desc: {
    color: 'grey',
    textAlign:'center',
    marginTop: 5
    
},
menuContainer : {
    marginVertical : 7,
    padding: 10,
    backgroundColor: 'white'

}
})

export default Home