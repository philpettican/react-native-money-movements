import { useQuery } from "react-query";

import transactionsJson from '../sampleData/transactions.json';

export const fetchTransactions = () => {
    // Use setTimeout to mimic API delay
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(transactionsJson)
        }, 1000);
    });
};

export default function useTransactions() {
    return useQuery("transactions", fetchTransactions);
}