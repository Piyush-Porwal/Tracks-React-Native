import React, {useContext} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import {Context} from "../context/AuthContext";
import {NavigationEvents} from "react-navigation";

const SignInScreen = () => {
    const {state, signin, clearErrorMessage} = useContext(Context);
    return (
        <View style={styels.container}>
            <NavigationEvents
            onWillBlur={clearErrorMessage}
            />

            <AuthForm
                headerText={"Sign In to Your Account"}
                errorMessage={state.errorMessage}
                onSubmit={signin}
                submitButtonText={"Sign In"}
            />
            <NavLink
                routeName="SignUp"
                text="Don't have an account? Signup Instead!"/>
        </View>
    );
};

SignInScreen.navigationOptions = {
    header: null
};

const styels = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250
    }
});

export default SignInScreen;