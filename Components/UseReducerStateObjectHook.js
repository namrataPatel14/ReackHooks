import React, {useReducer} from 'react';
import {Button, View, Text} from 'react-native';

function UseReducerStateObjectHook() {
  const initialState = {
    firstCounter: 0,
    secondCounter: 0,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case 'Increment':
        return {...state, firstCounter: state.firstCounter + action.value};
      case 'Decrement':
        return {...state, firstCounter: state.firstCounter - action.value};
      case 'Increment2':
        return {...state, secondCounter: state.secondCounter + action.value};
      case 'Decrement2':
        return {...state, secondCounter: state.secondCounter - action.value};
      case 'Reset':
        return initialState;
      default:
        return state;
    }
  };
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <View>
      <Text>{count.firstCounter} </Text>
      <Button
        onPress={() => dispatch({type: 'Increment', value: 1})}
        title="Increment"
      />
      <Button
        onPress={() => dispatch({type: 'Decrement', value: 1})}
        title="Decrement"
      />
      <Button
        onPress={() => dispatch({type: 'Increment', value: 5})}
        title="Increment 5"
      />
      <Button
        onPress={() => dispatch({type: 'Decrement', value: 5})}
        title="Decrement 5"
      />
      <Button
        onPress={() => dispatch({type: 'Increment2', value: 2})}
        title="Increment 2"
      />
      <Button
        onPress={() => dispatch({type: 'Decrement2', value: 2})}
        title="Decrement 2"
      />
      <Button onPress={() => dispatch({type: 'Reset'})} title="Reset" />
      <Text>{count.secondCounter} </Text>
    </View>
  );
}

export default UseReducerStateObjectHook;
