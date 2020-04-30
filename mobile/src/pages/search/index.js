import React, { useState, useEffect } from 'react'
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location'
import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native'
import { FontAwesome5, MaterialIcons, AntDesign } from '@expo/vector-icons'

import { createStackNavigator } from '@react-navigation/stack'
const StackNavigator = createStackNavigator()

import Results from './results'

import styles, {
    Container,
    Button,
    TittleText,
    TittleContainer,
    SearchContainer,
    SearchBoxContainer,
    SearchInfoText,
    SearchInputField,
    SearchButtonContainer,

} from './styles'
import api from '../../services/api'

export default function Search() {

    const [data, setData] = useState({})
    
    useEffect(() => {
        const message = {
            fish: null,
            latitude: null,
            longitude: null,
            distance: null
        }
        setData(message)
    }, [])
 


    async function setLocalPosition() {
        const { granted } = await requestPermissionsAsync()
        if (granted) {
            const { coords } = await getCurrentPositionAsync({
                enableHighAccuracy: true
            })
            const { latitude, longitude } = coords

            const newData = {
                fish: data.fish,
                latitude,
                longitude,
            }
            setData(newData)
        }
    }


    function fishHandler(fish) {
        
        const newData = {
            fish,
            latitude: data.latitude,
            longitude: data.longitude,
        }
        setData(newData)
    }
    // function placeHandler(text) {
    //     message.latitude = text
    //     message.longitude = text
    // }
    // function back() {
    //     console.log('back')

    // }
    // function info() {
    //     console.log('info')
    // }
    // function saveHistory(message) {
    //     const newSearch = {
    //         id: searchId,
    //         fish,
    //         latitude,
    //         longitude,
    //         distance
    //     }
    // }
    function send() {
        console.log('--------');

        console.log(data);

    }

    return (
        <>
            <Container >
                <SearchContainer style={styles.shadowed}>
                    <TittleContainer style={styles.tcont}>
                        {/* <Button onPress={back} /> */}
                        <TittleText style={styles.se}>Buscar</TittleText>
                        {/* <Button onPress={info} /> */}
                    </TittleContainer>

                    <SearchBoxContainer style={styles.shadowed} >
                        <SearchInputField
                            onChangeText={fishHandler}
                            placeholder={'Peixe'}
                        />
                    </SearchBoxContainer>

                    <SearchBoxContainer style={styles.shadowed}>
                        <SearchInputField
                            style={{ paddingBottom: -1 }}
                            // onChangeText={placeHandler}
                            placeholder={'Local'}
                        />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <SearchInfoText style={{}}>usar localização atual</SearchInfoText>
                            <Button onPress={setLocalPosition}/>
                        </View>
                    </SearchBoxContainer>


                    <SearchBoxContainer style={styles.shadowed} >
                        <SearchInfoText> Distância </SearchInfoText>

                    </SearchBoxContainer>
                    <SearchButtonContainer>
                        <SearchInfoText> Buscar </SearchInfoText>
                        <Button onPress={send} />
                    </SearchButtonContainer>
                </SearchContainer>
            </Container>
        </>
    )
}