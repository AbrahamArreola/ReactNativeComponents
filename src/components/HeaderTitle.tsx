import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../theme/app-theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface IProps {
    title: string;
}

const HeaderTitle = ({ title }: IProps) => {
    const { top } = useSafeAreaInsets();

    return (
        <View style={{ marginTop: top + 20, marginBottom: 20 }}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

export default HeaderTitle;
