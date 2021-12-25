import { NavigationContainer } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/core'
import React, { useState, useEffect, Component } from 'react'
import { KeyboardAvoidingView, Text, View, FlatList, Image } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { auth } from '../firebase'
import styles from '../assets/styles/Style'
import 'firebase/firestore'



const PostScreen = () => {
  


//my stuff
    const [title, setTitle] = useState('')//change name to title
    const [description, setDescription] = useState('')	
    //const [image, setImage] = useState(null);
    
    


    const submitPost = async () => {
        //const imageUrl = await uploadImage();
      //  console.log('Image Url: ', imageUrl);
    
    firestore()
    .collection('Posts')
    .add({
      post: post,//title
      //postImg: imageUrl,
      desc: description,//need description
      postTime: firestore.Timestamp.fromDate(new Date()),
    })
    .then(() => {
        console.log('Post Added!');
        Alert.alert(
          'Post published!',
          'Your post has been published Successfully!',
        );
        setPost(null);
      })
      .catch((error) => {
        console.log('Something went wrong with added post to firestore.', error);
      });
  }




        const navigation = useNavigation()
    
        return (
            <KeyboardAvoidingView 
                style={styles.container}
                behavior="padding"
            >
                <Text style={styles.greeting}>Let's Create A Post</Text>
                <View style={styles.inputContainer}>
                    <TextInput 
                        placeholder="Title"
                        value={title} 
                        onChangeText={text => setTitle(text)}
                        style={styles.input}
                    />
                    <TextInput 
                        placeholder="Description"
                        value={description} 
                        onChangeText={text => setDescription(text)}
                        style={styles.input}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    
                        <TouchableOpacity //needs to send title and description to home screen
                            onPress={() => navigation.navigate('Home', title, description)}
                            style={[styles.button, styles.buttonOutline]}
                        >
                            <Text style={styles.buttonOutlineText}>Create Post</Text>
                        </TouchableOpacity> 
                </View>
            </KeyboardAvoidingView>
        )
}




export default PostScreen