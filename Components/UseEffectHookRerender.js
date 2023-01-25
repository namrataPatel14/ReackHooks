import React, {useState, useEffect} from 'react';
import {Button, Text, View} from 'react-native';

function UseEffectHookRerender() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('useEffect - updating doc title');
  }); // rerender run effect
  return (
    <View>
      <Button title="Action" onPress={() => setCount(count + 1)} />
      <Text>{count}</Text>
    </View>
  );
}

export default UseEffectHookRerender;
