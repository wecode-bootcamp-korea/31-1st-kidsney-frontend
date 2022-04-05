import React, { useState, useEffect } from 'react';

import './EditModal.scss';

const EditModal = ({ product }) => {
  return (
    <div className="editModal">
      <div className="modalBox">
        <h2>Edit Item</h2>
        <main />
      </div>
    </div>
  );
};

export default EditModal;
