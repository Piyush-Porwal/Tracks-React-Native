import {useContext} from 'react';
import {Context as TrackContext} from '../context/TrackContext';
import {Context as LocationContext} from '../context/LocationContext';
import {navigate} from '../navigationRef';

export default () => {
    const {createTrack} = useContext(TrackContext);
    const { state : {location , name}, reset} = useContext(LocationContext);

    const saveTrack = () =>{
        createTrack(name,location);
        reset();
        navigate('TrackList');
    };

    return [saveTrack];
};