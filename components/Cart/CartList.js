//React
import React from 'react'
import { View, Text, ScrollView, Button, Alert } from 'react-native'
//Mobx
import { observer } from 'mobx-react'
import cartStore from '../../stores/cartStore'
import authStore from '../../stores/authStore'
//Components
import CartItem from './CartItem'
//Styles
import styles from './style'


const CartList = ({ navigation }) => {
    
    const cartProductList = cartStore.cartItems.map(item => 
        (<CartItem key={item.product._id} item={item} />)
    )

    const handleCheckout = () => {
        authStore.user ? cartStore.checkOutCart() : 
        Alert.alert(
            "Not Signed In!",
            "Please ensure your logged in to checkout.",
            [
                { text: "Signup!", onPress: () => navigation.navigate("Signup") },
                { text: "SignIn!", onPress: () => navigation.navigate("Signin") }
            ]
          );
    };
    

    const handleClear = () => {
        cartStore.clearCart();
    }

    return (
        
        <View style={styles.container}>
                <ScrollView style={styles.cartListContainer}>
                    {cartStore.cartItems.length >= 1 ? cartProductList :
                    <Text>Your cart is empty!</Text>
                    }
            </ScrollView >
            {cartProductList.length >= 1 &&
                <View style={styles.checkoutContainter}>
                    <Button style={styles.checkoutButton} title="Clear Cart" onPress={ handleClear }/>
                    <Button style={styles.checkoutButton} title="Checkout" onPress={ handleCheckout }/>
                </View>
            }
        </View>

    )
}

export default observer(CartList)
