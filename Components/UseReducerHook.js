import React, {useReducer} from 'react';
import {Button, View, Text} from 'react-native';

function UseReducerHook() {
  const initialState = 0;
  const reducer = (state, action) => {
    switch (action) {
      case 'Increment':
        return state + 1;
      case 'Decrement':
        return state - 1;
      case 'Reset':
        return initialState;
      default:
        return state;
    }
  };
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <View>
      <Text>{count}</Text>
      <Button onPress={() => dispatch('Increment')} title="Increment" />
      <Button onPress={() => dispatch('Decrement')} title="Decrement" />
      <Button onPress={() => dispatch('Reset')} title="Reset" />
    </View>
  );
}

export default UseReducerHook;
