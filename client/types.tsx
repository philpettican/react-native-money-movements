/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { StackNavigationProp } from "@react-navigation/stack";
import { NavigatorScreenParams, RouteProp } from '@react-navigation/native';

import { ITransaction } from "./model/Transaction";

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Transactions: undefined;
  TabTwo: undefined;
};

export type TransactionsTabParamList = {
  TransactionsScreen: undefined;
  TransactionDetailScreen: { transaction: ITransaction };
};

type TransactionsScreenNavigationProp = StackNavigationProp<TransactionsTabParamList, 'TransactionsScreen'>;


export type TransactionsScreenProps = {
  navigation: TransactionsScreenNavigationProp
};

type TransactionDetailScreenNavigationProp = StackNavigationProp<TransactionsTabParamList, 'TransactionDetailScreen'>;
type TransactionDetailsRouteProp = RouteProp<TransactionsTabParamList, 'TransactionDetailScreen'>;

export type TransactionDetailScreenProps = {
  navigation: TransactionDetailScreenNavigationProp,
  route: TransactionDetailsRouteProp
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};
