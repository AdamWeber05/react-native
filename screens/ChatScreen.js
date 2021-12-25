import { useNavigation } from '@react-navigation/core'
import React, { useCallback, useLayoutEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { auth, db } from '../firebase'
import { GiftedChat } from 'react-native-gifted-chat'
import styles from '../assets/styles/Style'

const ChatScreen = () => {
    const navigation = useNavigation()

    const [messages, setMessages] = useState([]);
      
      useLayoutEffect( () => {
          const getMessages = db.collection('chats').orderBy('createdAt', 'desc').onSnapshot(
              snapshot => setMessages(
                  snapshot.docs.map(
                      doc => ({
                          _id: doc.data()._id,
                          createdAt: doc.data().createdAt.toDate(),
                          text: doc.data().text,
                          user: doc.data().user
                        })
                    )
                )
            );
            return getMessages;
        }, [])
        
        const onSend = useCallback((messages = []) => {
            setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
            const {
                _id,
                createdAt,
                text,
                user,
            } = messages[0]
            
            db.collection('chats').add({
                _id,
                createdAt,
                text,
                user
            })
        }, [])
        return (
        <GiftedChat
            messages={messages}
            //showAvatarForEveryMessage={true}
            onSend={messages => onSend(messages)}
            user={{
                _id: auth?.currentUser?.email,
                name: auth?.currentUser?.displayName,
                //avatar: auth?.currentUser?.photoURL
            }}
        />
    )
}

export default ChatScreen