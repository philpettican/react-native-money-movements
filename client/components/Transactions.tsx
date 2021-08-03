import React from 'react';
import { ActivityIndicator, FlatList } from 'react-native';

import Transaction from './Transaction';
import { ITransaction } from '../model/Transaction';
import useTransactions from '../hooks/useTransactions';

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
            <ActivityIndicator style={{flex: 1, backgroundColor: 'white'}}></ActivityIndicator>
        );
    }

    return (
        <FlatList {...props} data={query?.data as ITransaction[]} renderItem={renderItem} keyExtractor={(item) => item.created_at}></FlatList>
    );
};

export default Transactions;