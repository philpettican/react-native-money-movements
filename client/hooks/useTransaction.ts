import { useQuery } from "react-query";

import transactionsJson from '../sampleData/transactions.json';

export const fetchTransaction = (transactionId: string) => {
    // Use setTimeout to mimic API delay
    return new Promise((resolve) => {
        setTimeout(() => {
            const filteredTransactions = transactionsJson.filter(i => i.created_at === transactionId);
            if (!filteredTransactions.length) {
                resolve(null);
                return;
            }

            const [transaction] = filteredTransactions;
            resolve(transaction);
        }, 1000);
    });
}

export default function useTransaction(transactionId: string) {
    return useQuery(['transactions', transactionId], fetchTransaction.bind(null, transactionId));
}