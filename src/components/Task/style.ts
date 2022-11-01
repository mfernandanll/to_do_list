import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        backgroundColor: '#333',
        paddingVertical: 12,
        paddingHorizontal: 8,
        borderRadius: 8,
        marginTop: 20,
        alignItems: 'center',
        height: 64
    },
    checkboxBase: {
        width: 24,
        height: 24,
        marginHorizontal: 12,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#1E6F9F',
        backgroundColor: 'transparent',
        flex: 0.5
    },
    checkboxChecked: {
        backgroundColor: '#8284FA',
        borderColor: '#8284FA',
        flex: 0.5
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    taskDescriptionBase: {
        flex: 7,
        color: '#F2F2F2',
        flexWrap: 'wrap',
        fontWeight: '400',
        fontSize: 14
    },
    taskDescriptionChecked: {
        flex: 7,
        color: '#808080',
        flexWrap: 'wrap',
        fontWeight: '400',
        fontSize: 14,
        textDecorationLine: 'line-through'
    },
    trashIcon: {
        color: '#808080',
        fontSize: 20
    },
    deleteButton: {
        flex: 0.8
    }
})