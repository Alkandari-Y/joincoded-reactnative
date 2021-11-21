//React
import React from "react";
import { Alert, View } from "react-native";
//Native Base
import { Button as NButton } from "native-base";
//Styles
import styles from "./style";
import { observer } from "mobx-react";
import authStore from "../../stores/authStore";

const Home = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <NButton onPress={() => navigation.navigate("ShopList")}>Browse Shops</NButton>
      <NButton onPress={authStore.signOut}>Logout</NButton>
    </View>
  );
}
export default observer(Home)