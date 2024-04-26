import { createContext } from "react";

// state 와 dispatch 는 구분하여 작성해야 함

// 여러 모달의 정보가 담긴 배열(state)
// { Component, props, isOpen: true }[]
export const ModalsStateContext = createContext([]);

// 각 모달을 여닫는 메서드(dispatch)
// {
// open: (Component, props) => { Component, props, isOpen: true }[];
// close: (Component) => { Component, props, isOpen: true }[];
// }
export const ModalsDispatchContext = createContext({});
