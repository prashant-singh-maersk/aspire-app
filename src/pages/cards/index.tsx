import React, { useEffect, useState } from 'react';

import Tabs from 'components/tabs';
import HeaderComponent from './templates/header';
import Box from 'components/box';
import Accordion from 'components/accordian';
import Carousel from './templates/cards-carousel';
import AddCard from './templates/add-card-modal';
import TransactionsList from 'components/transactions';

import { getCardsApi, addCardApi } from 'core/api';

import { SAMPLE_TRANSACTION, TAB_LIST } from 'core/constants';

import { StyledMyDebitCards } from './style';
import { CardProps } from 'components/card';


const Cards: React.FC = () => {
  const [activeTab, setActiveTab] = useState(TAB_LIST[0].id);
  const [showAddCardForm, setShowAddCardForm] = useState(false);
  const [cardsState, setCardsState] = useState<CardProps[]>([]);

  const onClickAddNew = () => {
    setShowAddCardForm(true);
  };

  const handleSubmit = (payload: any) => {
    addCardApi(payload).then(() => {
      fetchList();
      setShowAddCardForm(false);
    });
  };

  const fetchList = () =>
    getCardsApi().then((resp: any) => {
      if (resp?.length > 0) {
        setCardsState(resp);
      }
    });

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div>
      <HeaderComponent onClickAddNew={onClickAddNew} />
      <Tabs tabs={TAB_LIST} active={activeTab} setActive={setActiveTab} />
      <Box>
        {activeTab === TAB_LIST[0].id && (
          <StyledMyDebitCards>
            <div>
              <Carousel cards={cardsState} setCards={setCardsState} />
            </div>
            <div className="flex flex-column gap-6">
              <Accordion title="Card Details">Card Details</Accordion>
              <Accordion title="Recent Transactions" isOpenDefaultState={true}>
                <TransactionsList transactions={SAMPLE_TRANSACTION} />
              </Accordion>
            </div>
          </StyledMyDebitCards>
        )}
        {activeTab === TAB_LIST[1].id && 'All Company card'}
      </Box>
      {showAddCardForm && (
        <AddCard
          onSubmit={handleSubmit}
          onClose={() => setShowAddCardForm(false)}
        />
      )}
    </div>
  );
};

export default Cards;
