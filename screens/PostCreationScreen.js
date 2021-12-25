import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Text, View, Flatlist } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { auth } from '../firebase'
import styles from '../assets/styles/Style'


const PostCreationScreen = () => {

const [name, setName] = useState('')
const [description, setDescription] = useState('')		
//const [location, setLocation] = useState('')	
//whatever else needs to be on a post


    const navigation = useNavigation()

    return (
        <KeyboardAvoidingView 
            style={styles.container}
            behavior="padding"
        >
            <Text style={styles.greeting}>Let's Create A Post</Text>
            <View style={styles.inputContainer}>
                <TextInput 
                    placeholder="Name"
                    value={name} 
                    onChangeText={text => setName(text)}
                    style={styles.input}
                />
                <TextInput 
                    placeholder="Description"
                    value={description} 
                    onChangeText={text => setDescription(text)}
                    style={styles.input}
                    secureTextEntry
                />
            </View>
            <View style={styles.buttonContainer}>
                <FlatList 
                    data={name}
                    renderItem={({item}) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Post')}
                        style={[styles.button, styles.buttonOutline]}
                    >
                        <Text style={styles.buttonOutlineText}>item.name</Text>
                    </TouchableOpacity> )}
                />
            </View>
        </KeyboardAvoidingView>
    )

}

export default PostCreationScreen
