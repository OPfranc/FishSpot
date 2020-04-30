import React, { useState, useEffect } from 'react'
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location'
import { View, FlatList, Text, TouchableOpacity, Image } from 'react-native'
import MapView, { Marker, Callout } from 'react-native-maps'
import { FontAwesome5 } from '@expo/vector-icons'
import { getPreciseDistance } from 'geolib'

import api from '../../services/api'
import Footer from '../../components/Footer'


import styles from './styles'

export default function Home(props) {

    const [initialRegion, setInitialRegion] = useState(null)

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

    const [cases, setCases] = useState([])
    async function loadCases() {

        // const resp = await api.get('/search',{
        //     params: {
        //         latitude,
        //         longitude
        //     }
        // })
        const resp = await api.get('cases')

        const cases = resp.data
        let modifiedCases = []

        for (let a of cases) {

            const { author, date, description, fish, id, latitude, longitude } = a
            const distance = ''

            if (initialRegion) distance = distanceCalc(a)

            const modifiedCase = {
                author,
                date,
                description,
                fish,
                id,
                latitude,
                longitude,
                distance
            }
            modifiedCases.push(modifiedCase)
        }

        modifiedCases.sort(function (a, b) { return a.distance - b.distance })
        

        setCases(modifiedCases)

    }


    useEffect(() => {
        loadCases()
    }
        , [initialRegion])

    const [targetRegion, setTargetRegion] = useState(null)
    function changeMapRegion({ latitude, longitude }) {

        setTargetRegion({
            latitude,
            longitude,
            latitudeDelta: 0.04,
            longitudeDelta: 0.04
        })
    }

    function distanceCalc({ latitude, longitude }) {
        if (!initialRegion) return 0
        const centerCoordinates = {
            latitude: initialRegion.latitude,
            longitude: initialRegion.longitude
        }
        const pointCoordinates = {
            latitude,
            longitude
        }

        const distance = getPreciseDistance(centerCoordinates, pointCoordinates, 1)
        return distance
    }
    const [currentRegion, setCurrentRegion] = useState(null)

    function handleRegionChange(region) {
        console.log(region);
        setCurrentRegion(region)

    }
    return (
        <View style={styles.container}>
            <View style={styles.mapcontainer}>
                <MapView
                    //onRegionChangeComplete={handleRegionChange}
                    showsMyLocationButton={true}
                    showsUserLocation={true}
                    initialRegion={initialRegion}
                    region={targetRegion}
                    style={styles.map}>
                    {cases.map(item => (
                        <Marker
                            key={item.id}
                            coordinate={{
                                latitude: item.latitude,
                                longitude: item.longitude
                            }}>
                            <Image
                                style={styles.mapmark}
                                source={{ uri: 'https://res.cloudinary.com/pixel-art/image/upload/v1554278651/tuna/235429-tuna-pixel-art.png' }}
                            />
                            <Callout>
                                <View style={{
                                    width: 140,
                                    borderRadius: 4
                                }}>
                                    <Text>{item.fish}</Text>
                                    <Text>"5estrelas"</Text>
                                    <Text>ontem, 18:34</Text>
                                </View>
                            </Callout>
                        </Marker>))}
                </MapView>
            </View>
            <FlatList
                style={styles.list}
                data={cases}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.case}
                        onPress={() => { changeMapRegion(item) }}>
                        <View style={styles.caseleft}>
                            <FontAwesome5
                                style={styles.fishImage}
                                name={'fish'}
                                size={30}
                                color={'#999'} />
                            <View style={styles.caselefttext}>
                                <Text style={styles.fishName}>{item.fish.toUpperCase()}</Text>
                                <Text style={styles.caseDescription}>{item.description.toLowerCase()}</Text>
                            </View>
                        </View>
                        <Text style={styles.distance}>{(distanceCalc(item)/1000).toFixed(1)}Km</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    )
}