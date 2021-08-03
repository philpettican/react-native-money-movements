import * as React from 'react';
import { render } from '@testing-library/react-native';

import Transaction from '../Transaction';

const transactionData = {
    name: "Tuition Fees",
    status: "completed",
    category: "education",
    carbon_footprint: 25,
    fees: 0,
    type: "card",
    amount: 2195,
    currency: "GBP",
    created_at: "2021-04-22 02:15",
    icon: "https://novus-app-styleguide.s3.eu-west-1.amazonaws.com/banking_icons/education_small.svg",
    brand_partner: "FALSE"
};

it(`renders correctly`, () => {
  const { getAllByText, toJSON } = render(<Transaction transaction={transactionData}></Transaction>);
  const tree = toJSON();
  expect(tree).toMatchSnapshot();
  expect(getAllByText(transactionData.name).length).toBe(1);
  expect(getAllByText(`£${transactionData.amount.toFixed(2)}`).length).toBe(1);
});

it('renders svg if icon extension is .svg', () => {
  const { getByTestId } = render(<Transaction transaction={transactionData}></Transaction>);
  expect(getByTestId('svg')).toBeDefined();
});

it('renders image if icon extension is not .svg', () => {
  const { getByTestId } = render(<Transaction transaction={{...transactionData, icon: transactionData.icon.replace('.svg', '.png')}}></Transaction>);
  expect(getByTestId('image')).toBeDefined();
});