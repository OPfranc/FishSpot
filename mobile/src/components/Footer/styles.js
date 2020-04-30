import { StyleSheet, Dimensions } from 'react-native'
import Constants from 'expo-constants'


export default StyleSheet.create({
    footer: {
        marginHorizontal: 4,
        marginTop: 6,
        alignItems: 'center',
        flexDirection: 'row',
        height: 65,
        justifyContent: 'space-between',
        paddingBottom: 20
    },
    footerbuttom: {
        justifyContent: "center",
        borderRadius: 25,
        backgroundColor: '#427386',
        flexDirection: 'row',
        alignItems: 'center',
        width: 35,
        height: 35,
    },
    footerbuttomactive: {

        borderColor: '#427386',
        borderWidth: 0.2,

        justifyContent: "center",
        backgroundColor: '#fdfdfd',
        alignItems: 'center',
        flexDirection: 'row',
        width: 110,
        height: 37,
        borderRadius: 19,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    footerbuttomtext: {
        color: '#234d5e',
        fontWeight: '600',
        marginHorizontal: 8,
    },
})