//React
import React, { useState } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
//Mobx
import { observer } from 'mobx-react';
import cartStore from '../../stores/cartStore';
import { baseUrl } from '../../stores/baseUrl';
//React Native Numeric Input
import NumericInput from 'react-native-numeric-input'
//Vector Icons
import Icon from 'react-native-vector-icons/FontAwesome';
//Style
import styles from './style'

const CartItem = ({ item }) => {
    const [quantity, setQuantity] = useState(item.quantity)
    
    const handleAdd = (value) => {
        cartStore.addItemToCart(item.product, value)
        if (value > 0) {
            setQuantity(value)
        }
    };

    const handleRemove = (productId) => {
        cartStore.removeItemFromCart(productId);
    };

    
    return (
        <View style={styles.cartItemContainer}>

            <View style={styles.productDetailsContainer}>
                <Image style={{ height: 100, width: 100 }} source={{ uri: baseUrl+item.product.image }} />
                <View >
                    <View >
                        <Text>{item.product.name}</Text>
                        <Text>{item.product.price}KWD</Text>
                    </View>
                    <View>
                        <Text>{item.quantity}</Text>
                        <Text>Total {item.product.price * item.quantity}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.cartActionsContainer}>
                <NumericInput
                    totalWidth={60} totalHeight={30} minValue={0}
                    value={quantity} onChange={value => handleAdd(value)}
                />
                <Pressable
                    onPress={() => {
                        handleRemove(item.product._id)
                    }}
                >
                    <Icon
                        name="remove"
                        color="red"
                        size={20}
                    />
                </Pressable>
            </View>
            
        </View>
    )
}

export default observer(CartItem)
