import React from 'react'
//Navigation
import { createStackNavigator } from "@react-navigation/stack";
//Components
import Home from '../Home/Home';
import ShopList from '../ShopList/ShopList';
import ShopDetail from '../ShopDetail/ShopDetail';
import CartButton from '../Buttons/CartButton'
import ProductDetails from '../ProductDetails/ProductDetails';
import CartList from '../Cart/CartList';
import Signin from '../Auth/Signin';
import Signup from '../Auth/Signup';

const Navigation = () => {
    const { Navigator, Screen } = createStackNavigator();

    return (
        <Navigator initialRouteName="Home"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "red"
                }
            }}
        >
            <Screen name="Home" component={Home} />
            <Screen name="ShopList" component={ShopList}
                options={
                    ({navigation }) => {
                        return ({
                            headerRight: () => 
                                <CartButton navigation={navigation} />
                            
                        });
                    }
                }
            />
            <Screen name="ShopDetail" component={ShopDetail}
                options={
                    ({ route, navigation }) => {
                        return ({
                            title: route.params.shopObj.name,
                            headerRight: () => 
                                <CartButton navigation={navigation} />
                            
                        });
                    }
                }
            />
            <Screen name="ProductDetails" component={ProductDetails} />
            <Screen name="CartList" component={CartList} />
            <Screen name="Signin" component={Signin} />
            <Screen name="Signup" component={Signup} />
        </Navigator>
    )
}

export default Navigation
