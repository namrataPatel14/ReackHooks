import React, {useState} from 'react';
import {View, Text, Button, FlatList} from 'react-native';

function UseStateArrayHook() {
  const [Items, setItems] = useState([]);
  const addItem = () => {
    setItems([
      ...Items,
      {id: Items.length, value: Math.floor(Math.random() * 10) + 1},
    ]);
  };
  const dataList = item => {
    console.log(item.item.value);
    return (
      <View>
        <Text>{item.item.value}</Text>
      </View>
    );
  };
  return (
    <View>
      <Button onPress={addItem} title="Action" />
      <FlatList
        key={item => item.id}
        data={Items}
        renderItem={item => dataList(item)}
      />
    </View>
  );
}

export default UseStateArrayHook;
