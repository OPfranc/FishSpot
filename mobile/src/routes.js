import React from 'react'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AntDesign } from '@expo/vector-icons'

const StackNavigator = createStackNavigator()
const TabNavigator = createBottomTabNavigator()

import Home from './pages/home'
import Search from './pages/search'
import Profile from './pages/profile'
import New from './pages/new'

import Button from './components/buttons'

const icons = {
    Search: {
        lib: AntDesign,
        name: 'search1'
    },
    New: {
        lib: AntDesign,
        name: 'pluscircleo'
    },
    Profile: {
        lib: AntDesign,
        name: 'user'
    }
}

export default function Routes() {
    return (
        <NavigationContainer style={{ backgroundColor: '#000' }}>
            <TabNavigator.Navigator
                screenOptions={({ route, navigation }) => ({
                    tabBarIcon: ({ color, size, focused }) => {

                        if (route.name === 'Home') {
                            return (
                                <Button
                                    //onPress={() => navigation.navigate('Home')}
                                    name={'Início'}
                                    iconName={'home'}
                                    focused={focused}
                                />
                            )
                        }
                        if (route.name === 'Search') {
                            return (
                                <Button
                                    //onPress={() => navigation.navigate('Home')}
                                    name={'Buscar'}
                                    iconName={'search1'}
                                    focused={focused}
                                />
                            )
                        }
                        if (route.name === 'New') {
                            return (
                                <Button
                                    //onPress={() => navigation.navigate('Home')}
                                    name={'Novo'}
                                    iconName={'pluscircleo'}
                                    focused={focused}
                                />
                            )
                        }
                        if(route.name === 'Profile'){
                            return (
                                <Button 
                                    //onPress={() => navigation.navigate('Home')}
                                    name={'Perfil'}
                                    iconName={'user'}
                                    focused={focused}
                                />
                            )
                        }
                        const { lib: Icon, name } = icons[route.name]
                        return <Icon name={name} size={size} color={color} />
                    }
                })}
                tabBarOptions={{
                    style: {
                        borderTopColor: '#0000',
                        backgroundColor: '#4c7e91',
                        alignItems: 'center',

                        height: 65,
                        paddingTop: 4,
                        paddingHorizontal: 4,

                    },

                    tabStyle: {
                    }
                }}
                keyboardHidesTabBar={true}
            >
                <TabNavigator.Screen
                    name='Home'
                    component={Home}
                    options={{
                        title: '',
                    }}
                />
                <TabNavigator.Screen
                    name='Search'
                    component={Search}
                    options={{
                        title: ''
                    }}
                />
                <TabNavigator.Screen
                    name='New'
                    component={New}
                    options={{
                        title: ''
                    }}
                />
                <TabNavigator.Screen
                    name='Profile'
                    component={Profile}
                    options={{
                        title: ''
                    }}
                />
            </TabNavigator.Navigator>
        </NavigationContainer>
    )
    // function Nav() {
    //     return (
    //         <NavigationContainer>
    //             <StackNavigator.Navigator screenOptions={{ headerShown: false }}>
    //                 <StackNavigator.Screen name='Home' component={Home} />
    //                 <StackNavigator.Screen name='Search' component={Search} />
    //                 <StackNavigator.Screen name='Detail' component={Detail} />
    //             </StackNavigator.Navigator>
    //         </NavigationContainer>
    //     )
    // }
    const styles = StyleSheet.create({
        tabcontainer: {
            backgroundColor: '#005',
        }
    })
}