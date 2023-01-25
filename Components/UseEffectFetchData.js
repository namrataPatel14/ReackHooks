import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

function UseEffectFetchData() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        console.log(res);
        setData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <View>
      {data.map(post => {
        return <Text key={post.id}>{post.title}</Text>;
      })}
    </View>
  );
}

export default UseEffectFetchData;
