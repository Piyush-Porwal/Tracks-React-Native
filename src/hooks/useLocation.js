import {useState, useEffect} from 'react';

import {Accuracy,requestPermissionsAsync,watchPositionAsync} from "expo-location";

export default (shouldTrack, callback) => {
    const [err, setError] = useState(null);

    let subscriber;
    useEffect(() => {
        const startWatching = async () => {
            try {
                await requestPermissionsAsync();
                subscriber = await watchPositionAsync({
                        accuracy: Accuracy.BestForNavigation,
                        timeInterval: 1000,
                        distanceInterval: 10
                    }, callback
                );
            } catch (e) {
                setError(e);
            }
        };

        if(shouldTrack) {
            startWatching();
        }else {
            if (subscriber) {
                subscriber.remove();
            }
            subscriber = null;
        }
    }, [shouldTrack,callback,subscriber]);

    return [err];

};