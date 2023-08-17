import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View, Image, FlatList } from "react-native";

const UserData = () => {

    const [myData, setMyData] = useState([]);

    const getuserData = async () =>{

        const response = await fetch('https://thapatechnical.github.io/userapi/users.json');
        const data = await response.json();
        setMyData(data);
        // console.log(myData);
        // console.log(myData[0])
    }

    useEffect(()=>{
        getuserData();
    },[])

    const item = myData[0];

    if(myData.length == 0) return (<Text>Loading ... </Text>)

    return (

        
        <View style= {styles.mainContainer}>
            
            
            <FlatList showsHorizontalScrollIndicator={false} horizontal data={myData} renderItem={({item}) => {

                return <View style={styles.studentContainer}>

                <View styles={styles.imgContainer}>
                    <Image style= {styles.imgStyle} source={{uri: item.image}}/>
                </View>
                <View style={styles.bioContainer}>

                    <Text style={styles.textStyle}>Name : {item.name}</Text>
                    <Text style={styles.textStyle}> Description : {item.description}</Text>
                    <Text style={styles.textStyle}> Mobile: {item.mobile}</Text>
                </View>

            </View>
            }} />
        </View>
    )
}

const styles = StyleSheet.create({

    mainContainer : {
        flex: 1,
        alignItems: 'center',
        // justifyContent:'center'
    },
    imgContainer : {
        width: '100%',
        
        
    },
    imgStyle : {
        height: 300,
        // aspectRatio: 1

    },
    studentContainer: {
        height: 435,
        borderStyle: 'solid',
        borderColor:'black',
        borderWidth: 2,
        borderRadius: 10,
        margin: 10,
        justifyContent: 'center',
        // backgroundColor: 'black',
        alignSelf: 'center'
    },
    textStyle: {
        textAlign: 'center',
        // color: 'white'
    },
    bioContainer: {
        padding: 10
    }

})
export default UserData
