import { makeAutoObservable } from "mobx";
import instance from "./instance";

class ShopStore {
  constructor() {
    makeAutoObservable(this);
  }
  shops = [];
  isLoading = true

  fetchShops = async () => {
    try {
      const response = await instance.get("/shops");
      this.shops = response.data;
      this.isLoading = false;
    } catch (error) {
      console.log(error);
    }
  };
}

const shopStore = new ShopStore();
shopStore.fetchShops();
export default shopStore;
