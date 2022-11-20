import React, {Component} from "react";
import {View,
    StyleSheet,
    ImageBackground,
    Image,
    TextInput,
    TouchableOpacity,
    Text,
    Alert,
    KeyboardAvoidingView}
    from "react-native";
    import firebase from "firebase";

    export default class LoginScreen extends Component{
        constructor(props){
            super(props)
            this.state = {
                email : "",
                password : ""
            }
        }
handleLogin = (email,password)=>{
firebase
.auth()
.signInWithEmailAndPassword(email,password)
.then(()=>{
    this.props.navigation.navigate("BottomTab");
})
.catch(error => {
    Alert.alert(error.message);
});
};

    }