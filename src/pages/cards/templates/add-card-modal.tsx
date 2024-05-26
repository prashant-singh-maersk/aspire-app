import React, { ChangeEvent, useState } from 'react';
import { usePaymentInputs } from 'react-payment-inputs';
import Modal from 'components/modal';
import { TitleModal } from '../style';
import InputText from 'components/input-text';
import { CardDetails } from 'core/api';

interface AddCardProps {
  onSubmit: (formValues: CardDetails) => void;
  onClose: () => void;
}

const AddCard: React.FC<AddCardProps> = ({ onSubmit, onClose }) => {
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCvv] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const { meta, getExpiryDateProps, getCVCProps } =
    usePaymentInputs();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  return (
    <Modal isOpen onClose={onClose}>
      <TitleModal className="title-modal">Add new card</TitleModal>
      <div className="flex flex-column" style={{ gap: '12px' }}>
        <InputText
          label="Card name"
          placeholder="Please enter name"
          type="text"
          id="cardName"
          name="cardName"
          value={name}
          onChange={handleChange}
          maxLength={30}
        />
        <InputText
          label="Card Number"
          placeholder="Please enter 16 digit card number"
          onChange={(e)=> setCardNumber(e.target.value)}
          value={cardNumber}
          maxLength={16}
        />
        <InputText
          label="Expiry Date"
          {...getExpiryDateProps({
            onChange: (e: any) => {
              setExpiryDate(e.target.value);
            },
          })}
          value={expiryDate}
        />

        <InputText
          label="Cvv"
          {...getCVCProps({
            onChange: (e: any) => {
              setCvv(e.target.value);
            },
          })}
          maxLength={3}
          value={cvv}
        />
      </div>

      <div className="center">
        <input
          className="card-name-submit"
          style={{
            marginTop: '30px',
            padding: '4px 8px',
            borderRadius: '8px',
            cursor: 'pointer',
            background: 'var(--primary-default)',
            color: '#FFF',
            height: '40px',
            width: '100%',
            fontSize: '16px',
            fontWeight: 'bold',
            border: 'none',
          }}
          type="button"
          value="Submit"
          disabled={!name?.length || !!meta.erroredInputs.cvc || !!meta.erroredInputs.expiryDate || !(cardNumber?.length === 16)}
          onClick={() => {
            onSubmit({ name, cardNumber, cvv, expiryDate });
          }}
        />
      </div>
    </Modal>
  );
};

export default AddCard;
