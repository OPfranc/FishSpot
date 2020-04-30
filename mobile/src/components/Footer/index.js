import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { AntDesign } from '@expo/vector-icons'

import styles from './styles'

export default function Footer() {

    const navigation = useNavigation()

    function navigateToHome() {
        navigation.navigate('Home')
    }
    function navigateToDetail() {
        navigation.navigate('Detail')
    }
    function navigateToSearch() {
        navigation.navigate('Search')
    }

    return (
        <View style={styles.footer}>
            <TouchableOpacity
                onPress={navigateToHome}
                activeOpacity={0.7}
                style={styles.footerbuttomactive}>

                <AntDesign
                    name={'home'}
                    size={24}
                    color={'#234d5e'}
                />
                <Text style={styles.footerbuttomtext}>Início</Text>

            </TouchableOpacity>
            <TouchableOpacity
                onPress={navigateToSearch}
                style={styles.footerbuttom}>
                <AntDesign
                    name={'search1'}
                    size={24}
                    color={'#fdfdfd'}
                />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={navigateToHome}
                style={styles.footerbuttom}>
                <AntDesign
                    name={'pluscircleo'}
                    size={24}
                    color={'#fdfdfd'}
                />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={navigateToDetail}
                style={styles.footerbuttom}>
                <AntDesign
                    name={'user'}
                    size={24}
                    color={'#fdfdfd'}
                />
            </TouchableOpacity>
        </View>
    )
}