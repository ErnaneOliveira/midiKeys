import React, {useEffect, useState} from "react";
import { View, StatusBar, Text, ImageBackground, StyleSheet, TouchableOpacity, Dimensions} from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
//import { useNavigation } from "@react-navigation/native";
//rimport { useFocusEffect } from "@react-navigation/native";
import * as NavigationBar from "expo-navigation-bar";

//const images = ["01-Splash-screen.png", "02-Home-screen.png", "03-virtual-keyboard-screen.png", "4-lesson-screen.png"];

const images = {
    0: require("../img/01-Splash-screen.png"),
    1: require("../img/02-Home-screen.png"),
    2: require("../img/03-virtual-keyboard-screen.png"),
    3: require("../img/04-lesson-screen.png"),
    4: require("../img/00-solid-background.png")
  };

  const { width, height } = Dimensions.get("window"); // Get screen size

const Splash = () => {

    const [count, setCount] = useState(0);
    const [image, setImage] = useState("require('./../img/01-Splash-screen.png'");
    const onPress = () => {
        setCount(prevCount => prevCount + 1); console.log(count);
        if(count==4){

          setCount(0);  
        }
    
    };

    /*const changeBackgroundImage =(n)=>{

         const path = "./../img/";

         path.concat("", images[0]);

          if(count==3){
            setCount(0);
          }

          let img = "./../img/";
          img = img.concat("",images[n]);
          console.log(img);

          return require();

    };

    changeBackgroundImage(3);*/



    useEffect(() => {
        //if (Platform.OS === "android") {
          NavigationBar.setVisibilityAsync("hidden"); // Hide bottom navigation bar
          NavigationBar.setBehaviorAsync("immersive"); // Prevent it from reappearing
        //}
      }, []);

    const changeOrientation = async () => {
            await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
          };
      
          changeOrientation();
    

  return (
    <ImageBackground 
      source={images[count]} // Use require for local images
      style={styles.background}
      resizeMode="contain"
      
    >
        <TouchableOpacity style={styles.background} onPress={onPress}></TouchableOpacity>
        <StatusBar hidden={true} /> 
    </ImageBackground>
    
  );
};

const styles = StyleSheet.create({
  background: {
    height:height,
    width:width+80,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Optional: adds overlay effect
    padding: 20,
    borderRadius: 10,
  },
  text: {
    color: "#fff",
    fontSize: 20,
  },
});

export default Splash;