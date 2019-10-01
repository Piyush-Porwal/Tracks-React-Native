import React, {useContext} from 'react';
import {Text,View,StyleSheet,FlatList, TouchableOpacity} from 'react-native';
import {NavigationEvents} from "react-navigation";
import {ListItem} from "react-native-elements";
import {Context as TrackContext} from '../context/TrackContext';

const TrackerListScreen = ({navigation}) =>{
    const {state, fetchTrack} = useContext(TrackContext);

    console.log(state);

    return <>
        <NavigationEvents onWillFocus={fetchTrack   }/>
        <FlatList data={state}
                  keyExtractor={item => item._id}
                  renderItem={({item}) => {
                      return (<TouchableOpacity onPress={ () => navigation.navigate('TrackerDetail', {_id : item._id})}>
                          <ListItem chevron title={item.name}/>
                      </TouchableOpacity>);
                  }} />
    </>

};

TrackerListScreen.navigationOptions = {
  title: 'Tracks'
};

const styels = StyleSheet.create({

});

export default TrackerListScreen;