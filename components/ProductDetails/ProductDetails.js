//React
import React, { useState } from 'react'
import { View, Text, Image } from 'react-native'
//React Native Numeric Input
import NumericInput from 'react-native-numeric-input'
//Mobx
import { observer } from 'mobx-react';
import cartStore from '../../stores/cartStore';
//Axios
import { baseUrl } from '../../stores/baseUrl';
//Styles
import styles from './styles'

const ProductDetails = ({ route, navigation }) => {

    const [quantity, setQuantity] = useState(quantity);

    const product = route.params.product;

    const handleAdd = (value) => {
        cartStore.addItemToCart(product, value)
        setQuantity(value)
    };

    return (
        <View style={ styles.productDetailsContainer }>
            <Image
                style={styles.productimg}
                source={{ uri: baseUrl + product.image }}
            />
            <Text>{product.name}</Text>
            <Text>{product.price}KD</Text>
            <View>
                <NumericInput
                    totalWidth={60} totalHeight={30} minValue={0}
                    value={0} onChange={value => handleAdd(value)}
                />
            </View>
        </View>
    )
}

export default observer(ProductDetails)
