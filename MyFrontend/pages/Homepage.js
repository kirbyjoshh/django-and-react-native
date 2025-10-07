import React from 'react';
import { View, Text, Button} from 'react-native';
import Styles from '../styles.js';

export default function Homepage({navigation}) {
    return (

        <View style={Styles.container}> 
            <Text style={Styles.headerText}>Welcome to Homepage ☺</Text> 

    
            <View style={Styles.buttonWrapper}> 
                <Button
                    title="Register"
                    onPress={() => navigation.navigate('Register')}
                />
            </View>
        </View>
    );
    
}