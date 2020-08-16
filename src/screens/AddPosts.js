
// imports
import React, { useState } from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, FAB, IconButton, TextInput} from 'react-native-paper';

// components
import Header from '../components/Header';

function AddPosts({navigation}){

    // local state to store new post's title and body
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')


    // add a post
    function onSavePost(){
        navigation.state.params.addPost({title, body})
        navigation.goBack()
    }


    return(
        <>
        <Header titleText='New Post'/>
        <IconButton
            icon='close'
            size={25}
            color ='white'
            onPress ={()=>navigation.goBack()}
            style={styles.iconButton}
        />
        <View style={styles.container}>
            <TextInput
                label = "Add Post Title"
                value = {title}
                mode = 'outlined'
                onChangeText = {setTitle}
                style = {styles.title}
            />
            <TextInput
                label = "Add Post Body"
                value = {body}
                mode = 'flat'
                onChangeText = {setBody}
                style = {styles.text}
                multiline = {true}
                scrollEnabled = {true}
                returnKeyLabel = 'done'
                blurOnSubmit = {true}
            />
            <FAB 
                style = {styles.fab}
                small
                icon = 'check'
                disabled = { title == '' ? true: false }
                onPress = {() => onSavePost()}
            />
        </View>
        </>
    )
}

// styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 20
    },
    titleContainer: { 
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    iconButton: {
        backgroundColor: '#219653',
        position: 'absolute',
        right: 0,
        top: 40,
        margin: 10
    },
    title: {
        fontSize: 24,
        marginBottom: 16
    },
    text: {
        height: 300,
        fontSize: 16,
    },
    fab: {
        position: 'absolute',
        margin: 20,
        right: 0,
        bottom: 0,
    }
});


export default AddPosts;