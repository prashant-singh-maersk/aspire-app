import React, { ChangeEvent, useState } from "react";

import Modal from "components/modal";

import { TitleModal } from "./style";

interface AddCardProps {
  onSubmit: (formValues: { name: string }) => void;
  onClose: () => void;
}

const AddCard: React.FC<AddCardProps> = ({ onSubmit, onClose }) => {
  const [name, setName] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <Modal isOpen onClose={onClose}>
      <TitleModal className="title-modal">Add new card</TitleModal>
      <div className="flex flex-column" style={{ gap: "4px" }}>
        <label
          style={{
            width: "100%",
            fontSize: "14px",
            fontWeight: "bold",
            color: "rgb(12, 54, 90)",
          }}
          htmlFor="cardName"
        >
          Card name*
        </label>
        <input
          style={{
            width: "100%",
            height: "40px",
            borderRadius: "10px",
            padding: "10px",
            backgroundColor: "rgba(244, 246, 248, 0)",
            border: "1px solid #AEBCC9",
            fontSize: "1rem",
          }}
          placeholder="Please enter name"
          type="text"
          id="cardName"
          name="cardName"
          value={name}
          onChange={handleChange}
        />
      </div>

      <br />
      <br />
      <br />
      <div className="center">
        <input
          className="card-name-submit"
          style={{
            padding: "4px 8px",
            borderRadius: "24px",
            cursor: "pointer",
            background: "var(--primary-default)",
            color: "#FFF",
            height: "40px",
            width: "100%",
            fontSize: "16px",
            fontWeight: "bold",
            border: "none",
          }}
          type="button"
          value="Submit"
          disabled={!name?.length}
          onClick={() => {
            onSubmit({ name });
          }}
        />
      </div>
    </Modal>
  );
};

export default AddCard;
