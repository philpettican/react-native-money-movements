import getSymbolFromCurrency from "currency-symbol-map";

export interface ITransaction {
    name: string,
    status: string,
    category: string,
    carbon_footprint: number,
    fees: number,
    type: string,
    amount: number,
    currency: string,
    created_at: string,
    icon: string,
    brand_partner: string
};

export default class Transaction implements ITransaction {
    name: string;
    status: string;
    category: string;
    carbon_footprint: number;
    fees: number;
    type: string;
    amount: number;
    currency: string;
    created_at: string;
    icon: string;
    brand_partner: string;

    constructor(props: ITransaction) {
        this.name = props.name;
        this.status = props.status;
        this.category = props.category;
        this.carbon_footprint = props.carbon_footprint;
        this.fees = props.fees;
        this.type = props.type;
        this.amount = props.amount;
        this.currency = props.currency;
        this.created_at = props.created_at;
        this.icon = props.icon;
        this.brand_partner = props.brand_partner;
    }

    get currencySymbol() {
        return getSymbolFromCurrency(this.currency);
    }

    get amountWithCurrencySymbol() {
        return `${this.currencySymbol}${this.amount.toFixed(2)}`;
    }

}