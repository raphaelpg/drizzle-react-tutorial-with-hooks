import React, { useState, useEffect } from "react";

const ReadString = (props) => {
  const [dataKey, setDataKey] = useState(null);
  const { drizzle, drizzleState } = props;
  const { MyStringStore } = drizzleState.contracts;

  useEffect(
    () => {
      const contract = drizzle.contracts.MyStringStore;
      const dataKey = contract.methods["myString"].cacheCall();
      setDataKey(dataKey)
    }, [dataKey, drizzle.contracts.MyStringStore]
  )

  const myString = MyStringStore.myString[dataKey];

  return (
    <p>My stored string: {myString && myString.value}</p>
  )
}

export default ReadString;