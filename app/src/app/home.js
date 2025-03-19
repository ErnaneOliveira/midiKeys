import {useState} from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity, Dimensions, PanResponder} from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const Home=()=>{

    

      const [screenSize, setScreenSize] = useState({
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
      });

      // Function to update dimensions on screen resize
    const updateScreenSize = () => {
        setScreenSize({
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        });
    };

    const changeOrientation = async () => {
        await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
      };
  
      changeOrientation();

    //console.log(screenSize);

return(
  <View style={styles.container}>
    <View style={styles.sidebar}>
            <TouchableOpacity onPress={(e) => {e.stopPropagation(); // Prevent touch from propagating to the canvas
        console.log("home");
      }} style={styles.iconButton}>
                <SimpleLineIcons style={styles.icon} name="home" size={28} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={(e) => {e.stopPropagation(); // Prevent touch from propagating to the canvas
        console.log("play");
      }} style={styles.iconButton}>
                <Feather style={styles.icon} name="square" size={28} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={(e) => {e.stopPropagation(); // Prevent touch from propagating to the canvas
        console.log("left");
      }}style={styles.iconButton}>
                <AntDesign style={styles.icon} name="left" size={28} color="black" />
            </TouchableOpacity>
        </View>
    <View style={{flex:1, flexDirection:"row", width:screenSize.height, alignItems: 'center', justifyContent:'center', height:screenSize.width, backgroundColor: "#65c6e3"}}>
    <TouchableOpacity onPress={(e) => {e.stopPropagation(); // Prevent touch from propagating to the canvas
        console.log("home");
      }} style={[styles.iconButton]}>
                <Feather style={[styles.iconNew, styles.purple]} name="home" size={80} color="black" />
            </TouchableOpacity>

    <TouchableOpacity onPress={(e) => {e.stopPropagation(); // Prevent touch from propagating to the canvas
        console.log("camera");
      }} style={styles.iconButton}>
                <Feather style={[styles.iconNew, styles.green]} name="camera" size={80} color="black" />
            </TouchableOpacity>

            <TouchableOpacity onPress={(e) => {e.stopPropagation(); // Prevent touch from propagating to the canvas
        console.log("camera");
      }} style={[styles.iconButton, styles.orange]}>
                <Feather style={styles.icon} name="monitor" size={80} color="black" />
            </TouchableOpacity>

    </View> 

  </View>

);

};

export default Home;

const styles = StyleSheet.create({
    
    container:{
        flex: 1, alignItems: "left", flexDirection: "row",
        backgroundColor: "#FFF"

    },
    canvas:{

        
    },
    sidebar:{
        backgroundColor: "#B4EBE6",
        width: 80, 
        height:"100%",
        alignItems: "left", 
        paddingTop: 20,
        paddingLeft:30,
        justifyContent: "space-evenly", // Evenly distribute icons
    },

    icon: {
        padding: 50,
        //borderRadius:80

    },

    iconNew: {
        margin:15,
        padding: 30,
        backgroundColor: "#ffba02",
        borderRadius:80,
        alignItems:'center',
        justifyContent:'center',
        width:150,
        height:150

   },

   purple:{
    backgroundColor: "#6900fa",
    borderRadius:80

   },
   green:{backgroundColor: "#0b6f00", borderRadius:100},

   orange: {backgroundColor: "#ffba02", borderRadius:100}


});


