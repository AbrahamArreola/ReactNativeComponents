import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/core';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { RouteStackParams } from '../navigation/Navigation';
import { IMenuItem } from '../constants/menu-item';
interface IProps {
    menuItem: IMenuItem;
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    itemText: {
        marginLeft: 5,
        fontSize: 19,
    },
});

const FlatListMenuItem = ({ menuItem }: IProps) => {
    const navigation = useNavigation<NavigationProp<RouteStackParams>>();

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate(menuItem.component)}>
            <View style={styles.container}>
                <Icon name={menuItem.icon} color="gray" size={23} />
                <Text style={styles.itemText}>{menuItem.name}</Text>
                <View style={{ flex: 1 }} />
                <Icon name="chevron-forward-outline" color="gray" size={23} />
            </View>
        </TouchableOpacity>
    );
};

export default FlatListMenuItem;
