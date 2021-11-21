import React from 'react'
import { View, Pressable } from 'react-native'
//Nativebase
import { Badge } from 'native-base';
//Mobx
import { observer } from 'mobx-react';
import cartStore from '../../stores/cartStore';
//Vector Icons
import Icon from 'react-native-vector-icons/FontAwesome';

//Styles


const CartButton = ({ navigation }) => {

    const cartTotal = cartStore.numberOfItemsInCart

    return(
        <Pressable
            onPress={() => {
                navigation.navigate("CartList")
            }}
            style={{marginRight: 15}}
        >
            <View>
                {cartTotal > 0 &&
                <View>
                    <Badge
                        bg="red.400"
                        colorScheme="danger"
                        rounded="999px"
                        mb={-2}
                        zIndex={1}
                        variant="solid"
                    >
                        {cartTotal}
                    </Badge>
                </View>
            }
            <Icon
                name="shopping-cart"
                color="white"
                size={15}
            />
            </View>
        </Pressable>
    )
}
export default observer(CartButton)
