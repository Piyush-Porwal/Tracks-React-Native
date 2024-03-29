import React, {useContext} from 'react';
import {Text,View,StyleSheet} from 'react-native';
import {Context as TrackContext} from '../context/TrackContext';
import MapView, {Polyline} from "react-native-maps";

const TrackerDetailScreen = ({navigation}) =>{
    const {state} = useContext(TrackContext);
    const _id = navigation.getParam('_id');

    const track = state.find(t => t._id === _id);

    const initialCoords = track.location[0].coords;
    return <>
        <Text style={{fontSize: 48}}> {track.name} </Text>
        <MapView
            initialRegion={{
                longitudeDelta : 0.01,
                latitudeDelta : 0.01,
                ...initialCoords
            }}
        style={styels.map}>
            <Polyline coordinates={track.location.map(loc => loc.coords)}/>
        </MapView>
    </>
};

const styels = StyleSheet.create({
    map : {
        height : 300
    }

});

export default TrackerDetailScreen;