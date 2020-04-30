import React, { useState, useEffect } from 'react'
import { Image, View, Text } from 'react-native'
import MapView, { Marker, Callout } from 'react-native-maps'
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location'

import styles from './styles'


export default function HomeMap(props) {

    const [initialRegion, setInitialRegion] = useState(null)
    const [region, setRegion] = useState(null)

    const recLocation = props.location

    useEffect(() => {
        async function loadInitialPosition() {
            const { granted } = await requestPermissionsAsync()
            if (granted) {
                const { coords } = await getCurrentPositionAsync({
                    enableHighAccuracy: true
                })
                const { latitude, longitude } = coords

                setInitialRegion({
                    latitude,
                    longitude,
                    latitudeDelta: 0.055,
                    longitudeDelta: 0.055
                })
            }
        }
        loadInitialPosition()
    }
        , [])

    useEffect(() => {
        if (!recLocation) return
        const { latitude, longitude } = recLocation
        setRegion({
            latitude,
            longitude,
            latitudeDelta: 0.04,
            longitudeDelta: 0.04
        })
    }, [recLocation])

    return (
        <MapView
        showsMyLocationButton={true}
        showsUserLocation={true}
            initialRegion={initialRegion}
            region={region}
            style={{
                borderRadius: 5,
                height: 350,
                width: 400
            }}>
            <Marker coordinate={{ latitude: -29.553206, longitude: -49.885322 }}>
                <Image
                    style={{
                        backgroundColor: '#fefefc',
                        width: 54,
                        height: 54,
                        borderBottomRightRadius: 25,
                        borderTopLeftRadius: 25,
                        borderTopRightRadius: 25,

                        borderWidth: 4,
                        borderColor: '#FFF'
                    }}
                    source={{ uri: 'https://res.cloudinary.com/pixel-art/image/upload/v1554278651/tuna/235429-tuna-pixel-art.png' }}
                />
                <Callout>
                    <View style={{
                        width: 140,
                        borderRadius: 4
                    }}>
                        <Text>ROBALO</Text>
                        <Text>"5estrelas"</Text>
                        <Text>ontem, 18:34</Text>
                    </View>
                </Callout>
            </Marker>
            <Marker coordinate={{ latitude: -29.516437, longitude: -49.912176 }}>
                <Image
                    style={{
                        width: 54,
                        height: 54,
                        borderRadius: 4,
                        borderWidth: 4,
                        borderColor: '#FFF'
                    }}
                    source={{ uri: 'https://res.cloudinary.com/pixel-art/image/upload/v1554278651/tuna/235429-tuna-pixel-art.png' }}
                />
                <Callout>
                    <View style={{
                        width: 140,
                        borderRadius: 4
                    }}>
                        <Text>Tilapia</Text>
                        <Text>"4estrelas"</Text>
                        <Text>Hoje, 12:34</Text>
                    </View>
                </Callout>
            </Marker>
        </MapView>

    )
}

