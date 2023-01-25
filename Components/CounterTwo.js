import React from 'react';
import {Button, View, Text} from 'react-native';
import {UseCustomHook} from './UseCustomHook';
export const CounterTwo = () => {
  const [count, increment, decrement, reset] = UseCustomHook(1, 1);
  return (
    <View>
      <Text>{count}</Text>
      <Button title="increment" onPress={increment} />
      <Button title="decrement" onPress={decrement} />
      <Button title="reset" onPress={reset} />
    </View>
  );
};
