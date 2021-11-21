import React from 'react'
import { View, Text } from 'react-native'
//Mobx
import { observer } from 'mobx-react'
// import shopStore from "../../stores/shopStore";
//Components
import ProductItem from './ProductItem';
//Style

const ProductList = ({ products, navigation }) => {
    
    const productList = products.map(product => (
        <ProductItem key={product._id} product={product} navigation={ navigation }/>
    ));
    return (
        <View>
            <Text>Our Products</Text>
            { productList }
        </View>
    )
}

export default observer(ProductList)
