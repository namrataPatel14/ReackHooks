import React, {useRef, useEffect} from 'react';
import {TextInput, View} from 'react-native';

export const UseRef = () => {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <View>
      <TextInput type="text" ref={inputRef} />
    </View>
  );
};
