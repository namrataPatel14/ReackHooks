import React, {useState, useEffect} from 'react';
import {Button, Text, TextInput, View} from 'react-native';

function UseEffectHookConditionally() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  useEffect(() => {
    console.log('useEffect - updating doc title');
  }, [count]); // conditionally run effect
  return (
    <View>
      <TextInput value={name} onChangeText={text => setName(text)} />

      <Button title="Action" onPress={() => setCount(count + 1)} />
      <Text>{count}</Text>
    </View>
  );
}

export default UseEffectHookConditionally;
