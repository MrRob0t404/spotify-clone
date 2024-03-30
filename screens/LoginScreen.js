import React from "react";
import { View, SafeAreaView, StyleSheet, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { FontAwesome, AntDesign, Entypo } from "@expo/vector-icons";

const LoginScreen = () => {
    const authenticate = () => {
        // Implement authentication
    };
    
  return (
    <LinearGradient colors={["#040306", "#131624"]} style={{ flex: 1 }}>
      <SafeAreaView>
        <View style={{ height: 80 }} />
        <FontAwesome
          style={{ textAlign: "center" }}
          name="spotify"
          size={80}
          color="white"
        />
        <Text
          style={{
            color: "white",
            fontSize: 40,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: 40,
          }}
        >
          Millions of Songs Free on Spotify!
        </Text>
        <View style={{ height: 80 }} />
        <Pressable
          style={{
            backgroundColor: "#1db954",
            padding: 10,
            marginLeft: "auto",
            marginRight: "auto",
            width: 300,
            borderRadius: 25,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>Sign in with Spotify</Text>
        </Pressable>
        <Pressable onPress={authenticate}
          style={{
            backgroundColor: "#131624",
            padding: 10,
            marginLeft: "auto",
            marginRight: "auto",
            width: 300,
            borderRadius: 25,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 10,
            boarderColor: "#c0c0c0",
          }}
        >
          <AntDesign name="phone" size={24} color="white" />
          <Text
            style={{
              fontWeight: 500,
              color: "white",
              textAlign: "center",
              flex: 1,
            }}
          >
            Continue with phone number 1 
          </Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: "#131624",
            padding: 10,
            marginLeft: "auto",
            marginRight: "auto",
            width: 300,
            borderRadius: 25,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 10,
            boarderColor: "#c0c0c0",
          }}
        >
          <AntDesign name="google" size={24} color="red" />
          <Text
            style={{
              fontWeight: 500,
              color: "white",
              textAlign: "center",
              flex: 1,
            }}
          >
            Continue with Google
          </Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: "#131624",
            padding: 10,
            marginLeft: "auto",
            marginRight: "auto",
            width: 300,
            borderRadius: 25,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 10,
            boarderColor: "#c0c0c0",
          }}
        >
          <Entypo name="facebook" size={24} color="blue" />
          <Text
            style={{
              fontWeight: 500,
              color: "white",
              textAlign: "center",
              flex: 1,
            }}
          >
            Continue with phone number 3
          </Text>
        </Pressable>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
