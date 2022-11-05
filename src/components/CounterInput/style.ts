import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    counterView: {
        height: 19,
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    createdText: {
        fontWeight: 'bold',
        color: '#1E6F9F',
    },
    counter: {
        width: 25,
        paddingTop: 2,
        paddingBottom: 2,
        fontSize: 12,
        backgroundColor: '#333',
        color: '#fff',
        borderRadius: 10,
        marginLeft: 10,
        textAlign: 'center'

    },
    doneText: {
        fontWeight: 'bold',
        color: '#8284FA',
    },
})