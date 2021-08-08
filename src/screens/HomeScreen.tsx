import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FlatListMenuItem, { IMenuItem } from '../components/FlatListMenuItem';
import { styles } from '../theme/app-theme';

const menuItems: IMenuItem[] = [
    {
        name: 'Animation 101',
        icon: 'cube-outline',
        component: 'Animation101Screen',
    },
    {
        name: 'Animation 102',
        icon: 'albums-outline',
        component: 'Animation102Screen',
    },
];

const HomeScreen = () => {
    const { top } = useSafeAreaInsets();

    const renderListHeader = () => {
        return (
            <View style={{ marginTop: top + 20, marginBottom: 20 }}>
                <Text style={styles.title}>Opciones de menú</Text>
            </View>
        );
    };

    const renderItemSeparator = () => {
        return <View style={{ borderBottomWidth: 1, opacity: 0.4, marginVertical: 8 }} />;
    };

    return (
        <View style={{ flex: 1, ...styles.globalMargin }}>
            <FlatList
                data={menuItems}
                renderItem={({ item }) => <FlatListMenuItem menuItem={item} />}
                keyExtractor={item => item.name}
                ListHeaderComponent={renderListHeader}
                ItemSeparatorComponent={renderItemSeparator}
            />
        </View>
    );
};

export default HomeScreen;
