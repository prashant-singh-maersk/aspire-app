export const TAB_LIST = [
  { id: 'my', label: 'My debit cards' },
  { id: 'all', label: 'All company cards' },
];

export const INITIAL_CARDS = [
  {
    id: 1,
    name: 'Prashant Shekhar',
    expiryDate: '11/32',
    cvv: '345',
    cardNumber: '1234543245661234',
  },
  {
    id: 2,
    name: 'Plavika Singh',
    expiryDate: '02/35',
    cvv: '666',
    cardNumber: '2321543244443234',
  },
  {
    id: 3,
    name: 'Vaani Singh',
    expiryDate: '06/40',
    cvv: '333',
    cardNumber: '0002223332124211',
  },
];

export const TRANSACTION = [
  { id:1,
    name: 'Hamleys',
    date: '20 May 2022',
    type: 'DEBIT',
    amount: 'S$ 130',
    icon: 'fileStorage',
    bgColor: '#009DFF1A',
  },
  {
    id:2,
    name: 'Hamleys',
    date: '20 May 2020',
    type: 'CREDIT',
    amount: 'S$ 130',
    icon: 'megaphone',
    bgColor: '#F251951A',
  },
  {
    id:3,
    name: 'Hamleys',
    date: '20 May 2020',
    type: 'DEBIT',
    amount: 'S$ 130',
    icon: 'flights',
    bgColor: '#009DFF1A',
  },
  {
    id:4,
    name: 'Hamleys',
    date: '20 May 2020',
    type: 'CREDIT',
    amount: 'S$ 130',
    icon: 'fileStorage',
    bgColor: '#009DFF1A',
  },
];

export const BREAKPOINT = '1024px';
export const enum TRANSACTION_TYPE {
  credit = 'CREDIT',
  debit = 'DEBIT',
}
