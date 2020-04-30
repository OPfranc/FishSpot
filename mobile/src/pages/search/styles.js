import { StyleSheet, Dimensions } from 'react-native'
import styled from 'styled-components/native'


export const Container = styled.View`
     flex: 1;
     padding-top: 1px;
     background-color: #4e8092;
     padding-left: 5px;
     padding-right: 5px;
`

export const SearchContainer = styled.View`
     margin-left: 4px;
     margin-right: 4px;
     background-color: #f3f4f6;
     border-radius: 30px;
     padding-top: 5px;
     padding-bottom: 35px;
     margin-bottom: 20px;

`

export const TittleContainer = styled.View`
     flex-direction: row;
     align-items: center;
     justify-content: space-between;
     margin-left: 25px;
     margin-right: 25px;
     margin-top: 25px;
     padding-bottom: 25px;

`

export const Button = styled.TouchableOpacity`
     height: 40px;
     width: 40px;
     border-radius: 25px;
     background-color: #bbb;

`

export const TittleText = styled.Text`
     color: #4e8092;
     font-size: 19px;
     font-weight: bold;


`

export const SearchBoxContainer = styled.View`
     margin-top: 20px;
     background-color: #fff;
     margin-left: 25px;
     margin-right: 25px;
     border-radius: 10px;
     min-height: 50px;
     padding-left: 20px;
     padding-right: 20px;

`

export const SearchInputField = styled.TextInput`
    margin-top: 20px;
    padding-bottom: 8px;
    font-size: 17px;
    color: #4e8092;
`

export const SearchInfoText = styled.Text`
     font-size: 14px;
     color: #0003;
     margin-top: 6px;
     padding-bottom: 6px;

`

export const SearchButtonContainer = styled.View`
     
    flex-direction: row;
    justify-content: flex-end;
    margin-left: 25px;
    margin-right: 25px;
    margin-top: 25px;
    align-items: center;
`


//#################################################################
export default StyleSheet.create({

    shadowed:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        
        elevation: 3,
    },
})