import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import CustomSwitch from '../components/CustomSwitch';

const styles = StyleSheet.create({
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    switchText: {
        fontSize: 25,
    },
});

const SwitchScreen = () => {
    const [state, setState] = useState({
        isActive: false,
        isHungry: false,
        isHappy: false,
    });

    const onChange = (field: string, isOn: boolean) => {
        setState({
            ...state,
            [field]: isOn,
        });
    };

    return (
        <View style={{ marginTop: 20 }}>
            <HeaderTitle title="Switches" />

            {Object.entries(state).map(([key, value]) => (
                <View style={styles.switchRow}>
                    <Text style={styles.switchText}>{key}</Text>
                    <CustomSwitch key={key} isOn={value} onChange={val => onChange(key, val)} />
                </View>
            ))}

            <Text style={styles.switchText}>{JSON.stringify(state, null, 5)}</Text>
        </View>
    );
};

export default SwitchScreen;
