import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { auth } from '../firebase'
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps'
// import styles from '../assets/styles/Style'

const FindScreen = () => {
    const navigation = useNavigation()

    return (
        <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
            latitude: 34.0007,
            longitude: -81.0348,
            latitudeDelta: 0.09,
            longitudeDelta: 0.035
        }}>
            <Marker
            coordinate = {{latitude: 37.7825259, longitude: -81.4351431}}
            title = {'Title'}>
            </Marker>
        </MapView>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 40
    },
    map: {
        height: '100%'
    }
})

export default FindScreen