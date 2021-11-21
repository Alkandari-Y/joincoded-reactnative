import { makeAutoObservable } from "mobx";
// import instance from "./instance";

class ItemStore {
  constructor() {
    makeAutoObservable(this);
  }
  items = [];
  isLoading = true

  getItemById = async () => {
    try {
        //   const response = await instance.post("");
    } catch (error) {
        console.log(error);
    }
  };
}

const itemStore = new ItemStore();
export default itemStore;