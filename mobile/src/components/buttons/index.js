import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

import { FooterButton, FooterText } from './styles'

const shadow = {
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
}

export default function Button({ name, focused, iconName }) {

    return (
        <FooterButton style={focused ? shadow : ''} focused={focused}>
            <AntDesign
                name={iconName}
                size={24}
                color={focused ? '#234d5e' : '#fdfdfd'}
            />
            <FooterText focused={focused} >{focused ? name : ''}</FooterText>
        </FooterButton>
    )
}