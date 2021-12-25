import { useNavigation } from '@react-navigation/core'
import React, {useState} from 'react'
import { Text, View, TextInput, KeyboardAvoidingView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons';
import Animated from 'react-native-reanimated';
import { auth } from '../firebase'
import styles from '../assets/styles/Style'

const SettingsScreen = () => {
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const navigation = useNavigation()
    const handleSignOut = () => {
        auth.signOut().then(() => {
            navigation.replace("Login")
        })
        .catch(error => alert(error.message))
    }

    const updateProfile = () => {
        auth.currentUser.updateProfile({
            displayName: name,
        }).then(() => {
            navigation.replace("Home")
        })
        .catch(error => alert(error.message))
        }
    return (
        <KeyboardAvoidingView 
        style={styles.container}
        behavior="padding"
    >
        <Text style={styles.greeting}>Edit Account</Text>
        <Text style={styles.greeting}>Name: {auth?.currentUser?.displayName} </Text>
        <View style={styles.inputContainer}>
            <TextInput 
                placeholder="Name"
                value={name} 
                onChangeText={text => setName(text)}
                style={styles.input}
            />
            <TextInput 
                placeholder="Location"
                value={location} 
                onChangeText={text => setLocation(text)}
                style={styles.input}
            />
        </View>
        <View style={styles.buttonContainer}>
        <TouchableOpacity
                onPress={updateProfile}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Update Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={handleSignOut}
                style={[styles.button, styles.buttonOutline]}
            >
                <Text style={styles.buttonOutlineText}>Sign Out</Text>
            </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
)
}
    export default SettingsScreen
