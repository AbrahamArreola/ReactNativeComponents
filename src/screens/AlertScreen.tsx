import React from 'react';
import { Alert, Button, View } from 'react-native';
import prompt from 'react-native-prompt-android';
import HeaderTitle from '../components/HeaderTitle';
import { styles } from '../theme/app-theme';

const AlertScreen = () => {
    const showAlert = () => {
        Alert.alert(
            'Warning',
            'This is the alert body',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'destructive',
                },
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ],
            {
                cancelable: true,
            },
        );
    };

    const showPrompt = () => {
        /* Alert.prompt(
            'Cancel?',
            'Are you sure you want to cancel this order? explain us why',
            (value: string) => console.log('info', value),
            'plain-text',
            "I didn't like it",
        ); */
        prompt(
            'Cancel?',
            'Are you sure you want to cancel this order? explain us why',
            [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                {
                    text: 'OK',
                    onPress: text => console.log('OK Pressed, text: ' + text),
                },
            ],
            {
                type: 'plain-text',
                cancelable: true,
                defaultValue: 'I did not like',
                placeholder: 'placeholder',
            },
        );
    };

    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title="Alerts" />
            <Button title="Show Alert" onPress={() => showAlert()} />
            <Button title="Show Prompt" onPress={() => showPrompt()} />
        </View>
    );
};

export default AlertScreen;
