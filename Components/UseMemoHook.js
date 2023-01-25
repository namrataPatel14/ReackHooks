import React, {useState, useMemo} from 'react';
import {View, Button, Text} from 'react-native';

function UseMemoHook() {
  const [one, setOne] = useState(0);
  const [two, setTwo] = useState(0);

  const buttonOne = () => {
    setOne(one + 1);
  };
  const buttonTwo = () => {
    setTwo(two + 1);
  };
  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) {
      i++;
    }
    return one % 2 === 0;
  }, [one]);
  return (
    <View>
      <Text>{one}</Text>
      <Button title="Button 1" onPress={buttonOne} />
      <Text>{isEven ? 'even' : 'odd'}</Text>
      <Button title="Button 2" onPress={buttonTwo} />
      <Text>{two}</Text>
    </View>
  );
}

export default UseMemoHook;
