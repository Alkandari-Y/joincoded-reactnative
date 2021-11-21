//React
import React from "react";
import { Text, View } from "react-native";
//Mobx
import { observer } from "mobx-react";
import shopStore from "../../stores/shopStore";
//Components
import ShopCard from './ShopCard'
//Style
import styles from "./style";

const ShopList = ({ navigation }) => {
  const shopList = shopStore.shops.map((shop) =>
    <ShopCard key={shop._id}
      navigation={ navigation }
      shop={shop} />
  );

  return (
    <View style={styles.shopListContainer}>
      <Text>Shop list</Text>
      {shopList}
    </View>
  );
}
export default observer(ShopList)