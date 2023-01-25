import React from 'react';
import {View, Text} from 'react-native';

function Count({text, count}) {
  console.log('Count component', text);
  return (
    <View>
      <Text>
        {text} - {count}
      </Text>
    </View>
  );
}

export default React.memo(Count);
