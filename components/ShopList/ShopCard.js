//React
import React from "react";
import { Text, Image, Pressable } from "react-native";
//Mobx
import { observer } from "mobx-react";
import { baseUrl } from "../../stores/baseUrl";
//Style
import styles from "./style";

const ShopCard = ({ shop, navigation }) => {
  return (
    <Pressable 
      style={styles.storeCard}
      onPress={() => {
        navigation.navigate("ShopDetail", {shopObj: shop})}}
    >
      <Text>{shop.name}</Text>
      <Image
        style={styles.storeimg}
        source={{ uri: baseUrl + shop.image }}
      />
    </Pressable >
  );
}

export default observer(ShopCard)