import React, {useContext} from 'react';
import {View, Button, Text} from 'react-native';

function ComponentA() {
  const countContext = useContext(countContext);
  return (
    <View>
      <Text>{countContext.counState} - count</Text>
      <Button
        onPress={() => countContext.countDispatch('Increment')}
        title="Increment"
      />
      <Button
        onPress={() => countContext.countDispatch('Decrement')}
        title="Decrement"
      />
      <Button
        onPress={() => countContext.countDispatch('Reset')}
        title="Reset"
      />
    </View>
  );
}

export default ComponentA;
