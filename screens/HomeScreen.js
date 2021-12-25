import { useNavigation } from '@react-navigation/core'
import React ,{useState} from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { auth } from '../firebase'
import styles from '../assets/styles/Style'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import 'firebase/firestore'

const HomeScreen = () => {
    const navigation = useNavigation()

    return (
        <GooglePlacesAutocomplete
        placeholder='Search'
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        query={{
          key: 'AIzaSyAHA_DNXPlolyqVCEmP8wahZ58yb_A9quE',
          language: 'en',
        }}
        styles={{
            marginTop: '10px'
        }}
        />
    )
}

export default HomeScreen
