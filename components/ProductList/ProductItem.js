//React
import React from 'react'
import { View, Text, Image, Pressable } from 'react-native'
//Mobx
import { observer } from 'mobx-react'
//Axios
import { baseUrl } from '../../stores/baseUrl'
//Style
import styles from './style'

const ProductItem = ({ product, navigation }) => {
    return (
        <Pressable
        onPress={() => {
            navigation.navigate("ProductDetails", {product: product})}}
        >
            <View>
                <Text>{product.name}</Text>
                <Image
                    style={styles.productimg}
                    source={{ uri: baseUrl + product.image }}
                />
            </View>
        </Pressable>
    )
}

export default observer(ProductItem)
