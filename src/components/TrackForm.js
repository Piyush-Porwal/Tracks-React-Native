import React, {useContext} from "react";
import {Input, Text, Button} from "react-native-elements";
import {StyleSheet, View} from "react-native";
import Spacer from "./Spacer";
import {Context as LocationContext} from '../context/LocationContext';
import useSaveTrack from "../hooks/useSaveTrack";

const TrackForm = () => {
    const {
        state: {
            name,
            recording,
            location
        },
        startRecording, stopRecording, changeName
    } = useContext(LocationContext);

    const [saveTrack] = useSaveTrack();

    return <>
        <Spacer>
            <Input value={name} onChangeText={changeName} placeholder={"Enter Track Name"}/>
        </Spacer>

        <Spacer>
            {recording ? <Button title={"Stop"} onPress={stopRecording}/> :
                <Button title={"Start Recording"} onPress={startRecording}/>}
        </Spacer>

        <Spacer>{!recording && location.length ? (<Button title={"Save Recording"} onPress={saveTrack}/>) : null}</Spacer>
    </>
};

const styles = StyleSheet.create({});

export default TrackForm;