import React from "react";
import { Text, StyleSheet , View, Image, TouchableOpacity, Linking} from "react-native";

const About = () => {

    return (<View style={styles.aboutContainer}>

        <Text style={styles.mainHeader}>Pratyaksha Verma</Text>
        <Text style={styles.aboutHeader}>I am full Stack Web Developer, Coder and Programmer</Text>

        <View style={styles.imgContainer}>
            <Image style={styles.imgStyle} source={require('../../assets/myImage.jpg')} />
        </View>

        <View style={styles.aboutLayout}>
            <Text style={styles.aboutSubHeader}>About Me</Text>

        <Text style={styles.paraStyle}> Hey, my self Pratyaksha Verma and I am a CSE Student currently pursuing the B.Tech from the Noida Institute of Engineering and Technology which is in greater Noida. </Text>

        </View>

        <Text style={styles.socialMediaHeader}>Follow Me On Social Networks</Text>
        <View style= {styles.menuContainer}>
            <TouchableOpacity onPress={()=> Linking.openURL('http://www.instagram.com/iampratyaksha_verma')}> 
            <Image style={styles.logo} source={require('../../assets/instagram.png')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> Linking.openURL('https://www.facebook.com/pratyakshaverm/')}>
                <Image style={styles.logo}source={require('../../assets/Facebook.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> Linking.openURL('https://www.linkdedin.com/in/pratyaksha-verma-296729186/')}>
                <Image style={styles.logo}source={require('../../assets/linkedIn.png')} />
            </TouchableOpacity>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({

    imgStyle: {
        height: 200,
        width: 200,
        borderRadius: 100
    },
    logo : {
        height: 50, 
        width: 50,
        borderRadius: 100
    },
    aboutContainer: {

        flex:1,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor:'white'
    },
    mainHeader: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 10,
        backgroundColor: '#086',
        width: '100%',
        textAlign:'center',
        padding:7,
        color:'white'
    },
    imgContainer: {
        marginVertical: 10
    },
    aboutLayout: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(10, 150, 180)',
        padding: 20,
        margin: 10,
        width: '100%'
    },
    aboutSubHeader : {
        fontSize: 20,
        fontWeight: 'bold',
        // color: 'wheat',
        marginBottom: 10
    },
    paraStyle: {
        color: 'white'
    },
    menuContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        
    },
    socialMediaHeader: {
        backgroundColor: '#055',
        color: 'white',
        paddingHorizontal: 30,
        margin: 10,
        width: '100%',
        textAlign: 'center'
    },
    aboutHeader: {
        fontWeight:'500',
        color:'gray'
    }
})
export default About