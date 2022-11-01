import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#131016',
        paddingHorizontal: 24,
        alignItems: "center",
    },
    logo: {
        marginTop: 70,
    },
    input: {
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        color: '#FFF',
        padding: 16,
        fontSize: 16,
        flex: 1, 
        marginRight: 12
    },
    buttonText: {
        color: '#FFF',
        fontSize: 24
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#1E6F9F',
        alignItems: 'center', 
        justifyContent: 'center'
    },
    form: {
        width: '100%', 
        flexDirection: 'row', 
        marginTop: 36,
        marginBottom: 10
    },
    subtittles: {
        width: '100%',
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    createdText: {
        fontWeight: 'bold',
        color:'#1E6F9F',
    }, 
    doneText: {
        fontWeight: 'bold',
        color:'#8284FA',
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
    counterView: {
        height: 19,
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    viewEmptyText: {
        marginHorizontal: 20,
        marginVertical: 48,
        alignItems: 'center'
    },
    listEmptyText: {
        color: '#808080',
        fontSize: 14,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    listEmptySubText: {
        color: '#808080',
        fontSize: 14,
        textAlign: 'center'
    },
    clipboardEmptyText: {
        marginBottom: 16
    }
})