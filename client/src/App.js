import React, { useState, useEffect } from 'react';
import ReadString from "./ReadString";
import SetString from "./SetString";

const App = (props) => {
  const { drizzle } = props;
  const [drizzleState, setDrizzleState] = useState(null)
  const [loading, setLoading] = useState(true);

  useEffect(
    () => {
      const unsubscribe = drizzle.store.subscribe( () => {
        const drizzleState = drizzle.store.getState()
        if (drizzleState.drizzleStatus.initialized) {
          setDrizzleState(drizzleState)
          setLoading(false)
        }
      })
      return () => {
        unsubscribe()
      }
    }, [drizzle.store, drizzleState, loading]
  )

  return (
    loading ? "Loading Drizzle..."
    :
      <div className="App">
        <ReadString
          drizzle={props.drizzle}
          drizzleState={drizzleState}
        />
        <SetString
          drizzle={props.drizzle}
          drizzleState={drizzleState}
        />
      </div>
    );
}

export default App;
