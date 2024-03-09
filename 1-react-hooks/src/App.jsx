import { useEffect, useState, useCallback, useMemo } from "react";
import "./App.css";
import MyComponent from "./components/MyComponent";

function App() {
  const [rendered, setRendered] = useState(0);
  const [count, setCount] = useState(0);
  const [bool, setBool] = useState(false);

  // MyComponent 를 React.memo() 로 감싸지 않는다면
  // 부모 컴포넌트의 state 값이 변경될 때마다 MyComponent 는 불필요하게 리렌더링된다.

  useEffect(() => {
    setRendered(rendered + 1);
    console.log(`App is initialized`);
  }, []);

  // memoization 된 handleClick 은 count 가 변경될 때에만 재생성된다.
  // 그렇지 않으면 bool 이 변경될 경우에도 불필요하게 재생성될 것이다.

  const handleClick = useCallback(() => {
    console.log(`count: ${count}`);
  }, [count]);

  useEffect(() => {
    console.log(`handleClick is changed`);
  }, [handleClick]);

  useEffect(() => {
    console.log(bool);
  }, [bool]);

  // MyComponent 의 props 가 object 일 경우
  // MyComponent 를 React.memo() 로 감싸더라도
  // 해당 object 를 memoization 하지 않는다면
  // 부모 컴포넌트의 state 값이 변경될 때마다
  // 전달되는 props 값도 변경되었다고 판단하여 MyComponent 는 불필요하게 리렌더링된다.

  const onClick = useCallback(() => {
    console.log(`Component is clicked`);
    return;
  }, []);

  // 아래 memoization 된 함수들을 MyComponent 의 props 로 줄 경우
  // 의존성 배열의 state 값이 변경되었을 때만 함수가 재생성되어
  // MyComponent 의 리렌더링이 발생한다.

  const onClickWithCallback = useCallback(() => {
    console.log(`count: ${count}`);
  }, [count]);

  const onClickWithMemo = useMemo(() => {
    return () => {
      console.log(`count: ${count}`);
    };
  }, [count]);

  return (
    <>
      <input
        type="number"
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />
      <button onClick={handleClick}>Show Count</button>
      <button onClick={() => setBool(!bool)}>Change Bool</button>
      <MyComponent onClick={onClickWithCallback} />
    </>
  );
}

export default App;
