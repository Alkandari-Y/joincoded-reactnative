import decode from "jwt-decode";
import { makeAutoObservable } from "mobx";
import instance from "./instance";
import {AsyncStorage} from "react-native";

class AuthStore {

    constructor() {
        makeAutoObservable(this);
        }

	user = null;

    setUser = async (token) => {
        const userToken = JSON.stringify(token)
		await AsyncStorage.setItem("myToken", userToken);
		instance.defaults.headers.common.Authorization = `Bearer ${token}`;
		this.user = decode(token);
	};

	checkForToken = async() => {
		const token = await AsyncStorage.getItem("myToken");
		if (token) {
			const tempUser = decode(token);
			const time = tempUser.exp;
			if (time > Date.now()) {
				this.setUser(token);
			} else {
				this.signOut();
			}
		}
	};

	signIn = async (user, navigation, toast) => {
		try {
			const res = await instance.post("/login", user);
            this.setUser(res.data.token);
            navigation.navigate("CartList")
		} catch (error) {
            console.log(error);
            toast.show({
                title: 'Try Again!',
                description: 'Invalid Credentials',
                status: 'error',
            })
		}
	};

	signUp = async (user, navigation, toast) => {
		try {
			const res = await instance.post("/signup", user);
            this.setUser(res.data.token);
            navigation.navigate("CartList")
		} catch (error) {
			console.log(error);
		}
	};

	signOut = async () => {
		delete instance.defaults.headers.common.Authorization;
		await AsyncStorage.removeItem("myToken");
        this.user = null;
        console.log(`logged out`)
	};
}

const authStore = new AuthStore();
authStore.checkForToken();
export default authStore;