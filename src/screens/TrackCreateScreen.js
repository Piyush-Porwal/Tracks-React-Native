// import '../_mockLocation';
import React, {useContext, useCallback} from 'react';
import {View, StyleSheet} from 'react-native';
import Map from "../components/Map";
import {SafeAreaView, withNavigationFocus} from 'react-navigation';
import {Text} from 'react-native-elements';
import {Context as LocationContext} from '../context/LocationContext';
import useLocation from "../hooks/useLocation";
import TrackForm from "../components/TrackForm";
import {FontAwesome} from '@expo/vector-icons';

const TrackerCreateScreen = ({isFocused}) => {
    const {state:{recording}, addLocation} = useContext(LocationContext);
    const  callback = useCallback((location) =>{
        addLocation(location,recording)
    },[recording]);
    const [err] = useLocation(isFocused || recording, callback);

    return (
        <SafeAreaView forceInset={{top: 'always'}}>
            <Text h3> Create Track</Text>
            <Map/>
            {/*<NavigationEvents onWillBlur={() => console.log("Leaving")}/>*/}
            {err ? <Text>Please Enable location services</Text> : null}
            <TrackForm/>
        </SafeAreaView>
    );
};

TrackerCreateScreen.navigationOptions = {
    title : 'Add Track',
    tabBarIcon : <FontAwesome name = "plus" size = {20}/>
};

const styels = StyleSheet.create({});

export default withNavigationFocus(TrackerCreateScreen);