import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {userContext, GuestConext} from '../App';

function UseConextHook() {
  const user = useContext(userContext);
  const Guest = useContext(GuestConext);
  return (
    <View>
      <Text>
        {user} - {Guest}
      </Text>
    </View>
  );
}

export default UseConextHook;
