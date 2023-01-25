import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {View, Text, TextInput} from 'react-native';

function UseEffectFetchDatabyID() {
  const [data, setData] = useState({});
  const [id, setID] = useState(1);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => {
        console.log(res);
        setData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [id]);
  return (
    <View>
      <TextInput type="text" value={id} onChangeText={value => setID(value)} />
      <Text>{data.title}</Text>
    </View>
  );
}

export default UseEffectFetchDatabyID;
