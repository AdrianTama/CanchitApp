import React from "react";
import { View, Image } from "react-native";
import s from "./styles";

export default function Loading (){
  return (
    <View style={s.home}>
      <Image
        source={require("../assets/loading_new.gif")}
        resizeMode="contain"
        style={{ width: 200 }}
      />
    </View>
  );
}