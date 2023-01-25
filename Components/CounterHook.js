import React, {useState} from 'react';
import {Button, View, Text} from 'react-native';

function CounterHook() {
  const [count, setCount] = useState(0);
  return (
    <View>
      <Button onPress={() => setCount(count + 1)} title="Increment" />
      <Text>{count}</Text>
    </View>
  );
}

export default CounterHook;
