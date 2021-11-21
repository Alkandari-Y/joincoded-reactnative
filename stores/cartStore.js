
import { makeAutoObservable } from "mobx";
import instance from "./instance";
import {AsyncStorage} from "react-native";

class CartStore {
  constructor() {
    makeAutoObservable(this);
  }
  cartItems = [];
  isLoading = true

  // orderItems = async () => {
  //   try {
  //   //   const response = await instance.post("");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  setStorage = async (cart) => {
    try {
      const saveCart = JSON.stringify(cart)
      await AsyncStorage.setItem(
          'myCartItems',
          saveCart
      )
    } catch (err){
      console.log(err)
    }
  }

  getStorage = async () => {
    try {
      const storedCart = await AsyncStorage.getItem('myCartItems');
      this.cartItems = storedCart ? JSON.parse(storedCart) : [];
      this.isLoading = false;
    } catch (err) {
      console.log(err)
    }

  }

  addItemToCart = async (product, quantity) => {
    const foundItem = this.cartItems.find((item) => item.product._id === product._id);

    if (foundItem) {
      foundItem.quantity = quantity;
      if (foundItem.quantity === 0) {
        this.cartItems = this.cartItems.filter(item => item.quantity !== 0 )
      }
    } else {
      const newItem = {
        product,
        quantity
      }
      this.cartItems.push(newItem)
    }
    await this.setStorage(this.cartItems)
  }

  removeItemFromCart = async (cartProductId) => {
    try {
      this.cartItems = this.cartItems.filter(item => item.product._id !== cartProductId);
      await this.setStorage(this.cartItems)
    } catch (err) {
      console.log(err)
    }
  }

  checkOutCart = async() => {
    try {
      await this.clearCart()
    } catch (err) {
      console.log(err)
    }
  }

  clearCart = async() => {
    try {
      this.cartItems = []
      await this.setStorage(this.cartItems)
    } catch (err) {
      console.log(err)
    }
  }

  get numberOfItemsInCart() {
    let total = 0;
    if (this.isLoading) {
      return total
    } else {
      this.cartItems.forEach(item => (total = total + item.quantity));
      return total;
    }
  }
}

const cartStore = new CartStore();
cartStore.getStorage();
export default cartStore;