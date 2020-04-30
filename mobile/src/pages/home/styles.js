import { StyleSheet, Dimensions } from 'react-native'
import Constants from 'expo-constants'


export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 5,
        paddingTop: 1,
        backgroundColor: '#4e8092',

    },

    mapcontainer: {
        marginHorizontal: 4,
        alignItems: 'center',
        backgroundColor: '#f3f4f6',
        borderRadius: 10,
        paddingTop: 5,
        paddingBottom: 35,
        marginBottom: 20,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,

        elevation: 18,

    },
    map: {
        borderRadius: 5,
        height: 350,
        width: 400
    },
    mapmark:{
        backgroundColor: '#fefefc',
        width: 54,
        height: 54,
        borderBottomRightRadius: 25,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,

        borderWidth: 4,
        borderColor: '#FFF'
    },
    list: {
    },
    case: {
        //display: 'none',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5,
        height: 60,
        flexDirection: 'row',
        backgroundColor: '#fdfdfd',
        margin: 4,
        marginBottom: 10,
        borderRadius: 10,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    caseleft: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    caselefttext: {
        marginLeft: 7
    },
    fishImage: {
        transform: [{ rotate: '-45deg' }],
        padding: 2,
        borderWidth: 2,
        borderRadius: 25,
        marginLeft: 2,
        borderRadius: 25,
        borderColor: '#999'
    },
    fishName: {
        color: '#427386',
        fontWeight: 'bold',
        fontSize: 16
    },
    caseDescription: {
        fontSize: 16,
        lineHeight: 20,
        color: '#6497ab'
    },
    distance: {
        bottom: -11,
        right: 5,
        color: '#234d5e',
        fontWeight: 'bold'
    },
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
        width: 500,
        flexDirection: 'row',
        alignItems: 'center',
        width: 35,
        height: 35,
    },
    footerbuttomactive: {

        borderColor: '#427386',
        borderWidth: 0.2,
        paddingLeft: 14,
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