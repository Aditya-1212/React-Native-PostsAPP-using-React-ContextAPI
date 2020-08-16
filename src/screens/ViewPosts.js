import React, {useState, useContext, useEffect} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {Text, FAB, List} from 'react-native-paper';

// components
import Header from '../components/Header';

// context
import {Context as PostContext} from '../context/PostContext'; 

// function 
function ViewPosts({navigation}){

    // state and dispatch functions from PostContext
    const {state, addpost, deletepost} = useContext(PostContext);

    // method to add new post
    const addPost = post =>{
        post.id = Math.random()
        addpost(post)
    }

    // fetch posts from the API
    const fetchData = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response)=> response.json())
            .then((json)=> {
                const data = json.filter(item=>item.id < 11)
                data.forEach(element => {
                    // console.log("element")
                    // console.log(element);
                    addPost(element)
                });
            })  
    }

    useEffect(()=>{
        fetchData();
    },[]);

    return(
        <>
        <Header titleText='Posts App'/>
        <View style={styles.container}>
            {state.length == 0 ? (
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>You do not have any posts.</Text>
                </View>
            )
            :(
                <FlatList 
                    data = {state}
                    renderItem = { ({item}) => (
                        <List.Item 
                            title = {item.title}
                            description = {item.body}
                            descriptionNumberOfLines = {1}
                            titleStyle = {styles.listLitle}
                            onPress={()=> deletepost(item.id)}
                        />
                    )}
                    keyExtractor = {item => item.id.toString()}
                />
            )}
            <FAB
                style={styles.fab}
                small
                icon= 'plus'
                label='Add a new post'
                onPress ={()=> navigation.navigate('AddPosts',{addPost})}
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
    title: {
        fontSize: 20
    },
    fab: {
        backgroundColor: '#219653',
        position: 'absolute',
        margin: 20,
        right: 0,
        bottom: 10
    },
    listLitle : {
        fontSize: 20,
    }
});

export default ViewPosts;