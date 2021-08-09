import React from 'react';
import { Platform, Switch, View } from 'react-native';

interface IProps {
    isOn: boolean;
    onChange(isOn: boolean): void;
}

const CustomSwitch = ({ isOn, onChange }: IProps) => {
    const toggleSwitch = () => onChange(!isOn);

    return (
        <View>
            <Switch
                trackColor={{ false: '#d9d9db', true: '#5856d6' }}
                thumbColor={Platform.OS === 'android' ? '#5856d6' : ''}
                onValueChange={toggleSwitch}
                value={isOn}
            />
        </View>
    );
};

export default CustomSwitch;
