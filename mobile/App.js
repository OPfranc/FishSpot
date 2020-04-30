import 'react-native-gesture-handler'
import React from 'react';

import { StatusBar } from 'react-native'
import Routes from './src/routes'

export default function App() {
  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#4a798a' />
      <Routes />
      
    </>
  );
}

// #4c7e91#47788a#427386#f3f4f6#fdfcfd#fdfdfd#e7eaeb#eef1f1