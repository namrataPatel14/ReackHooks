import React, {useState, useCallback} from 'react';
import {View} from 'react-native';
import ButtonItem from './ButtonItem';
import Count from './Count';
import Title from './Title';

function UseCallbackHook() {
  const [age, setAge] = useState(20);
  const [salary, setSalary] = useState(25000);
  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);
  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);
  return (
    <View>
      <Title />
      <Count text={'age'} count={age} />
      <ButtonItem handlePress={incrementAge} buttonTitle={'Age'} />
      <Count text={'salary'} count={salary} />
      <ButtonItem handlePress={incrementSalary} buttonTitle={'salary'} />
    </View>
  );
}

export default UseCallbackHook;
