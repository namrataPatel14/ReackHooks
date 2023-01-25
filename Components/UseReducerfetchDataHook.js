import React, {useEffect, useReducer} from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';

function UseReducerfetchDataHook() {
  //   const initialstate = {
  //     loading: true,
  //     error: '',
  //     posts: {},
  //   };
  //   const reducer = (state, action) => {
  //     switch (action.type) {
  //       case 'Success':
  //         return {loading: false, posts: action.payload, error: ''};
  //       case 'Error':
  //         return {loading: false, posts: {}, error: 'Something went wrong!'};
  //       default:
  //         return state;
  //     }
  //   };
  //   const [state, dispatch] = useReducer(reducer, initialstate);
  //   useEffect(() => {
  //     axios
  //       .get('https://jsonplaceholder.typicode.com/posts/1')
  //       .then(res => {
  //         dispatch({type: 'Success', payload: res.data});
  //       })
  //       .catch(error => {
  //         dispatch({type: 'Error'});
  //       });
  //   }, []);
  return (
    <View>
      {/* state.loading ? <Text>'Loading' : {state.posts.title}</Text>
      {state.error ? state.error : null} */}
      <Text>Hello</Text>
    </View>
  );
}

export default UseReducerfetchDataHook;
