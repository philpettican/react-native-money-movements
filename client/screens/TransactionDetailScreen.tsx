import React from 'react';
import { ActivityIndicator } from 'react-native';

import { View } from '../components/Themed';
import { TransactionDetailScreenProps } from '../types';
import TransactionDetails from '../components/TransactionDetails';
import useTransaction from '../hooks/useTransaction';

const TransactionDetailScreen = (props: TransactionDetailScreenProps) => {
    const { route }  = props;
    const { params } = route;
    const { transaction } = params;

    const query = useTransaction(transaction.created_at);

    return (
        <View style={{flex: 1, padding: 10}}>
            {query.isLoading && <ActivityIndicator></ActivityIndicator>}
            {query.isFetched && <TransactionDetails transaction={transaction}></TransactionDetails>}
        </View>
    );
};

export default TransactionDetailScreen;