import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';

function PrevStateHook() {
  const initialValue = 0;
  const [count, setCount] = useState(initialValue);
  return (
    <View>
      <Button
        onPress={() => setCount(prevCount => prevCount + 1)}
        title="Increment"
      />
      <Button
        onPress={() => setCount(prevCount => prevCount - 1)}
        title="Decrement"
      />
      <Button onPress={() => setCount(initialValue)} title="Reset" />
      <Text>{count}</Text>
    </View>
  );
}

export default PrevStateHook;
