import React, {useReducer} from 'react';
import {Button, View, Text} from 'react-native';

function UseReducerMultiple() {
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
  const [count2, dispatch2] = useReducer(reducer, initialState);
  return (
    <View>
      <Text>{count}</Text>
      <Button onPress={() => dispatch('Increment')} title="Increment" />
      <Button onPress={() => dispatch('Decrement')} title="Decrement" />
      <Button onPress={() => dispatch('Reset')} title="Reset" />
      <Text>{count2}</Text>
      <Button onPress={() => dispatch2('Increment')} title="Increment" />
      <Button onPress={() => dispatch2('Decrement')} title="Decrement" />
      <Button onPress={() => dispatch2('Reset')} title="Reset" />
    </View>
  );
}

export default UseReducerMultiple;
