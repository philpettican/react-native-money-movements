import React from 'react';
import { StyleSheet } from 'react-native';

import Transactions from '../components/Transactions';
import { ITransaction } from '../model/Transaction';
import { TransactionsScreenProps } from '../types';
import { View } from '../components/Themed';

export default function TransactionsScreen(props: TransactionsScreenProps) {

  const { navigation } = props;

  const onItemPress = (transaction: ITransaction) => {
    navigation.navigate('TransactionDetailScreen', { transaction });
  };

  return (
    <View style={styles.container}>
      <Transactions onItemPress={onItemPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
