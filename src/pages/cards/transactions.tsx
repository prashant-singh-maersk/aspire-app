import React from 'react';
import FileStorage from 'icons/business-and-finance.svg';
import { getTransactionIcon } from 'core/transaction-icon-map';

interface TransactionProps {
  name: string;
  date: string;
  type: string;
  amount: string;
  icon: string;
  bgColor?: string;
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
    <div
      style={{
        display: 'flex',
        marginBottom: '10px',
        alignItems: 'flex-start',
      }}
    >
      <div style={{ marginRight: '10px' }}>
        <div
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            backgroundColor: bgColor,
          }}
        >
          <img
            style={{
              width: '16px',
              height: '16px',
              position: 'relative',
              top: '16px',
              left: '16px',
            }}
            src={getTransactionIcon(icon)}
            alt="icon"
          />
        </div>
      </div>
      <div style={{ flexGrow: 1 }}>
        <strong
          style={{ fontWeight: '500', fontSize: '14px', marginBottom: '4px' }}
        >
          {name}
        </strong>
        <div style={{ color: '#AAAAAA', marginTop: '4px', fontSize: '13px' }}>
          {date}
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
            style={{ color: '#325BAF', fontWeight: 'bold', fontSize: '12px' }}
          >
            {type === 'CREDIT'
              ? 'Refund on debit card'
              : 'Charged to debit card'}
          </div>
        </div>
      </div>
      <div
        style={{
          fontWeight: 700,
          fontSize: '14px',
          color: type === 'CREDIT' ? 'var(--primary-default)' : 'black',
        }}
      >
        {type === 'CREDIT' ? '+' : '-'} {amount}
      </div>
    </div>
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
        <>
          <Transaction key={index} {...transaction} />
          {index !== transactions.length - 1 && (
            <hr
              style={{ borderTop: '1px solid #F5F5F5', marginBottom: '24px' }}
            />
          )}
        </>
      ))}
    </div>
  );
};

export default TransactionsList;
