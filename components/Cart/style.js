import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '90%',

    },
    cartListContainer: {
        height: '90%'
    },
    cartItemContainer: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    productDetailsContainer: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        marginHorizontal: 10,
    },
    cartActionsContainer: {
        flexDirection: 'row',
        width: '25%',
        justifyContent: 'flex-end',
        marginTop: 10,
        marginBottom: 10,
        marginHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    checkoutContainter: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    checkoutButton: {
        marginLeft: 30,
        marginRight: 30,
    }
    
});

export default styles