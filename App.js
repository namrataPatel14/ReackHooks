import React, {useReducer} from 'react';
import {View, Text} from 'react-native';
import {CounterOne} from './Components/CounterOne';
import {CounterTwo} from './Components/CounterTwo';
// import {UseRef} from './Components/UseRef';
// import UseMemoHook from './Components/UseMemoHook';
// import UseCallbackHook from './Components/UseCallbackHook';
// import UseReducerHookFetch from './Components/UseReducerHookFetch';
// import CounterHook from './Components/CounterHook';
// import PrevStateHook from './Components/PrevStateHook';
// import UseEffectHookConditionally from './Components/UseEffectHookConditionally';
// import UseStateArrayHook from './Components/UseStateArrayHook';
// import UseEffectHookRerender from './Components/UseEffectHookRerender';
// import UseEffectHookOnce from './Components/UseEffectHookOnce';
// import UseEffectDependency from './Components/UseEffectDependency';
// import UseEffectFetchData from './Components/UseEffectFetchData';
// import UseEffectFetchDatabyID from './Components/UseEffectFetchDatabyID';
// import UseConextHook from './Components/UseConextHook';
// import UseReducerHook from './Components/UseReducerHook';
// import UseReducerStateObjectHook from './Components/UseReducerStateObjectHook';
// import UseReducerMultiple from './Components/UseReducerMultiple';
// import ComponentA from './Components/ComponentA';
// import ComponentB from './Components/ComponentB';
// import ComponentC from './Components/ComponentC';
// import UseReducerfetchDataHook from './Components/UseReducerfetchDataHook';
// export const userContext = React.createContext();
// export const GuestConext = React.createContext();
// export const countContext = React.createContext();
// const initialState = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case 'Increment':
//       return state + 1;
//     case 'Decrement':
//       return state - 1;
//     case 'Reset':
//       return initialState;
//     default:
//       return state;
//   }
// };

function app() {
  // const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <View>
      {/* <CounterHook /> */}
      {/* <PrevStateHook /> */}
      {/* <UseStateObjectHook /> */}
      {/* <UseStateArrayHook /> */}
      {/* <UseEffectHookConditionally /> */}
      {/* <UseEffectHookRerender /> */}
      {/* <UseEffectHookOnce /> */}
      {/* <UseEffectDependency /> */}
      {/* <UseEffectFetchData /> */}
      {/* <UseEffectFetchDatabyID /> */}
      {/* <userContext.Provider value={'Hello'}>
        <GuestConext.Provider value={'World'}>
          <UseConextHook />
        </GuestConext.Provider>
      </userContext.Provider> */}
      {/* <UseReducerHook /> */}
      {/* <UseReducerStateObjectHook /> */}
      {/* <UseReducerMultiple /> */}
      {/* <countContext.Provider
        value={{counState: count, countDispatch: dispatch}}>
        <View>
          <Text>{count}</Text>
          <ComponentA />
          <ComponentB />
          <ComponentC />
        </View>
      </countContext.Provider> */}
      {/* <UseReducerfetchDataHook /> */}
      {/* <UseReducerHookFetch /> */}
      {/* <UseCallbackHook /> */}
      {/* <UseMemoHook /> */}
      {/* <UseRef /> */}
      <CounterOne />
      <CounterTwo />
    </View>
  );
}

export default app;
