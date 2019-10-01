import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import AccountScreen from "./src/screens/AccountScreen";
import SignInScreen from "./src/screens/SigninScreen";
import SignUpScreen from "./src/screens/SignupScreen";
import TrackerCreateScreen from "./src/screens/TrackCreateScreen";
import TrackerDetailScreen from "./src/screens/TrackDetailScreen";
import TrackerListScreen from "./src/screens/TrackListScreen";
import {Provider as AuthProvider} from "./src/context/AuthContext";
import {setNavigator} from "./src/navigationRef";
import SplashScreen from './src/screens/SplashSceern';
import {Provider as LocationProvider} from './src/context/LocationContext'
import {Provider as TrackProvider} from './src/context/TrackContext';
import {FontAwesome} from '@expo/vector-icons';


const trackListFlow =  createStackNavigator({
    TrackList : TrackerListScreen,
    TrackerDetail : TrackerDetailScreen
});

trackListFlow.navigationOptions = {
  title : "Tracks",
  tabBarIcon  : <FontAwesome name = "th-list" size = {20}/>
};

const switchNavigator = createSwitchNavigator({

    Splash : SplashScreen,
    logInFlow: createStackNavigator({
        SignUp : SignUpScreen,
        SignIn : SignInScreen
    }),

    mainFlow : createBottomTabNavigator({
        trackListFlow :trackListFlow,
       TrackCreate : TrackerCreateScreen,
       Account : AccountScreen,
    })
});

const  App = createAppContainer(switchNavigator);

export default()=>{
    return(
        <TrackProvider>
            <LocationProvider>
            <AuthProvider>
                <App ref={(navigator) => {
                    setNavigator(navigator)
                }}/>
            </AuthProvider>
        </LocationProvider>
        </TrackProvider>
    );
};
