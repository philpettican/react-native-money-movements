import React from 'react';
import { Image, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { SvgUri } from 'react-native-svg';
import { ListItem, ListItemProps } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import moment from 'moment';

import TransactionModel, { ITransaction } from '../model/Transaction';

export type TransactionProps = ListItemProps & {
    transaction: ITransaction
};

export type TransactionIconProps = {
    containerStyle?: ViewStyle,
    uri?: string;
    width?: number;
    height?: number;
};

export const TransactionIcon = (props: TransactionIconProps) => {
    const { containerStyle, uri, width, height } = props;

    if (!uri) {
        return null;
    }

    const isSvg = uri.endsWith('.svg');

    return (
        <View style={containerStyle}>
            {isSvg && <SvgUri testID="svg" uri={uri} width={width || styles.imageStyle.width} height={height || styles.imageStyle.height}></SvgUri>}
            {!isSvg && <Image testID="image" source={{uri}} style={StyleSheet.flatten([styles.imageStyle, width ? { width } : null, height ? { height } : null])}></Image>}
        </View>
    )
};

export const CarbonFootPrintIcon = () => {
    return (
        <MaterialCommunityIcons name="foot-print" size={25}></MaterialCommunityIcons>
    );
};

const Transaction = (props: TransactionProps) => {
    const { onPress } = props;
    const transaction = new TransactionModel(props.transaction);
    const { name, icon, created_at, carbon_footprint } = transaction;

    return (
        <ListItem bottomDivider onPress={onPress}>
            <TransactionIcon uri={icon}></TransactionIcon>
            <ListItem.Content>
                <ListItem.Title>
                    {name}
                </ListItem.Title>
                <ListItem.Subtitle>
                    {moment(created_at).format('LLL')}
                </ListItem.Subtitle>
            </ListItem.Content>
            <View style={styles.rightElementContainerStyle}>
                <Text>{transaction.amountWithCurrencySymbol}</Text>
                <View style={styles.carbonFootPrintContainerStyle}>
                    <Text>{carbon_footprint}</Text>
                    <CarbonFootPrintIcon></CarbonFootPrintIcon>
                </View>
            </View>
            {!!onPress && <ListItem.Chevron></ListItem.Chevron>}
        </ListItem>
    )
};

const styles = StyleSheet.create({
    imageStyle: {
        width: 50,
        height: 50,
    },
    rightElementContainerStyle: {
        width: 100,
        alignItems: 'flex-end',
    },
    carbonFootPrintContainerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default Transaction;
