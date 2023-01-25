import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

function UseEffectDependency() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const tick = () => {
      setCount(count + 1);
    };
    const interval = setInterval(tick, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [count]);
  return (
    <View>
      <Text>{count}</Text>
    </View>
  );
}

export default UseEffectDependency;
