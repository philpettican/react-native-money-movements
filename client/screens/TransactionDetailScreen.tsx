import React from 'react';

import { ActivityIndicator, View } from '../components/Themed';
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
            {query.isLoading && <ActivityIndicator lightColor="rgba(255,255,255,0.1)" darkColor="#eee" />}
            {query.isFetched && <TransactionDetails transaction={transaction}></TransactionDetails>}
        </View>
    );
};

export default TransactionDetailScreen;