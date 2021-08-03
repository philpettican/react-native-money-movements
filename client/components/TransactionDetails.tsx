import React from 'react';
import { StyleSheet } from 'react-native';

import Transaction, { ITransaction } from '../model/Transaction';
import { Text, View } from './Themed';
import { CarbonFootPrintIcon, TransactionIcon } from './Transaction';

type TransactionDetailsProps = {
    transaction: ITransaction
};

const TransactionDetails = (props: TransactionDetailsProps) => {
    const transaction = new Transaction(props.transaction);

    return (
        <View>
            <View style={{flexDirection: 'row'}}>
                <TransactionIcon uri={transaction.icon} containerStyle={{flex: 1}}></TransactionIcon>
                <View style={{alignItems: 'center'}}>
                    <Text style={styles.amountTextStyle}>{transaction.amountWithCurrencySymbol}</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text>{transaction.carbon_footprint}</Text>
                        <CarbonFootPrintIcon></CarbonFootPrintIcon>
                    </View>
                </View>
                
            </View>
            <Text style={styles.nameTextStyle}>{transaction.name}</Text>
            <Text>{transaction.created_at}</Text>
            <Text>{transaction.category}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    nameTextStyle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    amountTextStyle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default TransactionDetails;