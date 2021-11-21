//React
import React from 'react'
import { View, Text } from 'react-native'
//Components
import ProductList from '../ProductList/ProductList'
//Mobx
import { observer } from 'mobx-react'
import shopStore from "../../stores/shopStore";
//Native Base
import { Spinner } from 'native-base';


const ShopDetail = ({ route, navigation }) => {
    const shop = route.params.shopObj;
    //Can also receive the whole object 
    //const shop = route.params.shop
    
    if (shopStore.isLoading) return <Spinner />;

    // const shop = shopStore.shops.find(shop => shop._id === shopId);

    const products = shop.products;

    return (
        <View>
            <Text>{ shop.name }</Text>
            <ProductList products={products} navigation={ navigation }/>
        </View>
    )
}

export default observer(ShopDetail)
