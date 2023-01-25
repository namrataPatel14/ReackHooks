import React from 'react';
import {Button} from 'react-native';

function ButtonItem({buttonTitle, handlePress}) {
  console.log('ButtonItem component', buttonTitle);
  return <Button title={buttonTitle} onPress={handlePress} />;
}

export default React.memo(ButtonItem);
