import React from 'react';
import { FlatList } from 'react-native';

import Transaction from './Transaction';
import { ITransaction } from '../model/Transaction';
import useTransactions from '../hooks/useTransactions';
import { ActivityIndicator } from './Themed';

type TransactionProps = {
    onItemPress?: (transaction: ITransaction) => void
};

const Transactions = (props: TransactionProps) => {

    const query = useTransactions();

    const { onItemPress } = props;

    const renderItem = ({ item }: { item: ITransaction}) => {
        return (
            <Transaction transaction={item} onPress={() => onItemPress ? onItemPress(item) : null}></Transaction>
        )
    };

    if (query.isLoading) {
        return (
            <ActivityIndicator lightColor="rgba(255,255,255,0.1)" darkColor="#eee" />
        );
    }

    return (
        <FlatList {...props} data={query?.data as ITransaction[]} renderItem={renderItem} keyExtractor={(item) => item.created_at}></FlatList>
    );
};

export default Transactions;