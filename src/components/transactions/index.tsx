import React from 'react';
import FileStorage from 'icons/business-and-finance.svg';
import { getTransactionIcon } from 'core/transaction-icon-map';
import { TransactionContainer, TransactionLogoContainer, TransactionLogo } from './style';
import { TransactionType } from 'core/constants';


interface TransactionProps {
  name: string;
  date: string;
  type: string;
  amount: string;
  icon: string;
  bgColor?: string;
  id:number;
}

const Transaction: React.FC<TransactionProps> = ({
  name,
  date,
  type,
  amount,
  icon,
  bgColor,
}) => {
  return (
    <TransactionContainer>
      <TransactionLogoContainer color={bgColor ?? '#009DFF1A'}>
        <TransactionLogo src={getTransactionIcon(icon)} alt="icon" />
      </TransactionLogoContainer>
      <div className="info-container">
        <div className='flex-between'>
        <div >
          <div className='name'>{name}</div>
          <div className="date" >{date}</div>
        </div>
        <div
            className='amount'
          style={{
            fontWeight: 700,
            fontSize: '14px',
            color: type === TransactionType.credit ? 'var(--primary-default)' : '#222222',
          }}
        >
          {type === TransactionType.credit ? '+' : '-'} {amount}
        </div>
        </div>
        <div
          className="flex"
          style={{
            gap: '8px',
            alignItems: 'baseline',
            marginTop: '14px',
          }}
        >
          <div
            style={{
              height: '24px',
              width: '24px',
              borderRadius: '50%',
              background: 'var(--secondary-strong)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              style={{ position: 'relative' }}
              src={FileStorage}
              alt="transaction-type"
            />
          </div>
          <div
            style={{
              color: '#325BAF',
              fontWeight: 'bold',
              fontSize: '12px',
            }}
          >
            {type === TransactionType.credit
              ? 'Refund on debit card'
              : 'Charged to debit card'}
          </div>
        </div>
      </div>
    </TransactionContainer>
  );
};

interface TransactionsListProps {
  transactions: TransactionProps[];
}

const TransactionsList: React.FC<TransactionsListProps> = ({
  transactions,
}) => {
  return (
    <div>
      {transactions.map((transaction, index) => (
        <React.Fragment key={transaction.id}>
          <Transaction key={transaction.id} {...transaction} />
          {index !== transactions.length - 1 && (
            <hr
              style={{ borderTop: '1px solid #F5F5F5', marginBottom: '24px' }}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default TransactionsList;
