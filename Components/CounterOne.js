import React from 'react';
import {Button, View, Text} from 'react-native';
import {UseCustomHook} from './UseCustomHook';
export const CounterOne = () => {
  const [count, increment, decrement, reset] = UseCustomHook(10, 10);
  return (
    <View>
      <Text>{count}</Text>
      <Button title="increment" onPress={increment} />
      <Button title="decrement" onPress={decrement} />
      <Button title="reset" onPress={reset} />
    </View>
  );
};
