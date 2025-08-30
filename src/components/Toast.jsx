import React from 'react';

const Toast = ({ message }) => {
  return (
    <div className="toast show">
      {message}
    </div>
  );
};

export default Toast; 