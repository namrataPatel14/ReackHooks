import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';

function UseStateObjectHook() {
  const [name, setName] = useState({firstName: '', lastName: ''});
  return (
    <View>
      <TextInput
        value={name.firstName}
        onChangeText={text => setName({...name, firstName: text})}
        style={{borderWidth: 1}}
      />
      <TextInput
        value={name.lastName}
        onChangeText={text => setName({...name, lastName: text})}
        style={{borderWidth: 1}}
      />
      <Text style={{fontSize: 24}}>{JSON.stringify(name)}</Text>
    </View>
  );
}

export default UseStateObjectHook;
