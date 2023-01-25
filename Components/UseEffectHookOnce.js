import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

function UseEffectHookOnce() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const logMousePosition = e => {
    console.log('touch move', e);
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect(() => {
    console.log('update event');
    window.addEventListener('pointermove', logMousePosition);

    return () => {
      console.log('cleanup code');
      window.removeEventListener('pointermove', logMousePosition);
    };
  }, []); // run effect once
  return (
    <View>
      <Text>
        {x}Hello{y}
      </Text>
    </View>
  );
}

export default UseEffectHookOnce;
