// imports
import React from 'react';
import AppNavigator from './src/navigation/Index';

// import context
import {Provider as PostProvider} from './src/context/PostContext';

export default function App(){
  return (
    <PostProvider>
      <AppNavigator/>
    </PostProvider>
  )
}