import React from 'react';
import {View, Text} from 'react-native';

function Title() {
  console.log('title component');
  return (
    <View>
      <Text>UseCallback Hook</Text>
    </View>
  );
}

export default React.memo(Title);
