import React, { useState } from 'react';
import { Platform, Switch, View } from 'react-native';
import HeaderTitle from '../components/HeaderTitle';

const SwitchScreen = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(!isEnabled);

    return (
        <View style={{ marginTop: 20 }}>
            <HeaderTitle title="Switches" />
            <Switch
                trackColor={{ false: '#d9d9db', true: '#5856d6' }}
                thumbColor={Platform.OS === 'android' ? '#5856d6' : ''}
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>
    );
};

export default SwitchScreen;