
// imports
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// components
import ViewPosts from '../screens/ViewPosts';
import AddPosts from '../screens/AddPosts';


// navigation 
const StackNavigator = createStackNavigator({
ViewPosts:{
    screen: ViewPosts
},
AddPosts: {
    screen: AddPosts
}
},
{
    initialRouteName: 'ViewPosts',
    headerMode: 'none',
    mode: 'modal'
}
)

export default createAppContainer(StackNavigator);