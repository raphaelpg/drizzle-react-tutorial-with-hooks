import React, { useState } from "react";

const SetString = (props) => {
  const [stackId, setStackId] = useState(null);
  const { drizzle, drizzleState } = props;
  
  const handleKeyDown = e => {
    if (e.keyCode === 13) {
      setValue(e.target.value);
    };
  };
  
  const setValue = value => {
    const contract = drizzle.contracts.MyStringStore;
    const stackId = contract.methods["set"].cacheSend(value, {
      from: drizzleState.accounts[0]
    });
    setStackId(stackId);
  };
  
  const getTxStatus = () => {
    const { transactions, transactionStack } = drizzleState;
    const txHash = transactionStack[stackId];
    if (!txHash) return null;
    return `Transaction status: ${transactions[txHash] && transactions[txHash].status}`;
  };

  return (
    <div>
      <input type="text" onKeyDown={handleKeyDown} />
      <div>{getTxStatus()}</div>
    </div>
  );
}

export default SetString;