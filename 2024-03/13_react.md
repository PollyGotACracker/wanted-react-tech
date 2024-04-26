# React

## virtual DOM

- DOM 트리를 복제한 JS 객체로 메모리에 저장됨
- real DOM 보다 가볍고 빠름:

  1. 실제로 화면에 그려지지 않았기 때문
  2. class, style 속성은 가지고 있지만 DOM API 는 없기 때문

### Reconciliation(재조정)

- VDOM 트리에서 변경된 부분만 real DOM 에 적용하는 과정
- diffing 알고리즘을 사용하여 렌더링 전후 VDOM 트리 비교
- Batch update: 성능 향상을 위해 여러 상태의 변경사항을 하나로 묶어 real DOM 에 반영(단 한번 리렌더링)

## render()

- [react-ko.dev: Render and Commit](https://react-ko.dev/learn/render-and-commit)
- 컴포넌트가 호출되면 `root.render()` 순수 함수 호출(`ReactDOM.render`)

1. props, state 가 변경될 때
2. React 요소 트리로부터 VDOM 생성
3. 이전 VDOM 과 비교: 예전에 렌더링된 요소와 새로 return 된 요소 비교
4. real DOM 에 반영할 내용을 결정

### Rendering Phase

- Render Phase: JSX 로부터 VDOM 최초 생성,  
  그 후 props 나 state 가 변경될 때마다 새로운 VDOM 을 생성해 이전 VDOM 과 비교(diffing)
- Commit Phase: real DOM 에 변경사항 적용(re-rendering)

## JSX(JavaScript XML, JavaScript Syntax eXtension)

- HTML 구조를 작성할 수 있도록 만들어진 JS 확장 문법
- 하나의 태그로 모든 element 를 감싸야 함(Reconciliation 때문)
- JS 값 사용 및 조건부 렌더링(삼항 연산자, AND 연산자 등) 가능

  ```jsx
  render(
    <div className="user">
      <div>{user.name}</div>
    </div>
  );
  ```

  ```js
  // JSX 없이 코드 작성
  // React.createElement(type, [props], [...children])
  render (
  React.createElement(
    "div",
    { className: "user" },
    React.createElement("div", null, user.name)
  );
  )
  ```

### React.Fragment

- React 에서 여러 element 를 return 할 경우 syntax error 발생
- `<></>`: 의미없는 div 태그를 사용하여 real DOM 에 노드를 추가하지 않도록 함(v16.2)

## props, state

- props: 컴포넌트에 전달되는 값
- state: 컴포넌트가 내부적으로 가지고 있는 값

```
cf) 자식 컴포넌트에서 부모 컴포넌트로 데이터를 전달할 경우,
부모 컴포넌트에서 자식 컴포넌트에 props 로 setter 함수를 전달
```

## class vs hooks

### class

- [medium: Boaz Hwang - React Lifecycle 에 대해](https://withboaz.medium.com/react-lifecycle%EC%97%90-%EB%8C%80%ED%95%B4-3fb0da8612cd)
- lifecycle methods 제공
- `constructor` 에서 state 정의

### hooks

- 간결한 함수형 코드(v16.8)
- `this` 키워드 없이 변수 및 함수 정의

## hooks 종류

### useState

- setState 함수로 state 를 변경할 때마다 컴포넌트 리렌더링

### useRef

- DOM 요소에 접근
- React 외부에서 발생하는 이벤트에 사용  
  (즉, React 데이터 흐름과 독립적으로 실행되는 이벤트)
- 리렌더링에 영향을 받지 않는 값 저장  
  (스크롤 위치 값, 클립보드 DOM 텍스트 등)
- 이전 상태 값 기억 등
- [react.dev: How to manage a list of refs using a ref callback ](https://react.dev/learn/manipulating-the-dom-with-refs#how-to-manage-a-list-of-refs-using-a-ref-callback)

| useState                                  | useRef                                   |
| ----------------------------------------- | ---------------------------------------- |
| 초기값이 state 반환                       | 초기값이 {current: initialValue} 반환    |
| 변경되면 렌더링 발생, 모든 변수 초기화    | 변경되어도 리렌더링 발생 X, 변수 값 유지 |
| 컴포넌트 렌더링에 영향을 주는 데이터 관리 | 주로 DOM 요소에 직접 접근                |

### useEffect

- side effect 를 만들기 위한 hook
- 여러 lifecycle method 를 통합
- `useEffect` 밖에서 실행되는 코드가 있으면 리렌더링 될 때마다 재실행됨
- Side effect:
  - 서버에서 데이터를 받아오는 등 부수적인 작업
  - 다른 컴포넌트에 영향을 미칠 수 있음
  - 렌더링 중에는 작업이 완료될 수 없음

```js
useEffect(() => {
  // mount, update, unmount 직전
});

useEffect(() => {
  // componentDidMount
}, []);

useEffect(() => {
  // componentDidUpdate
}, [stateA, stateB]);

useEffect(() => {
  return () => {
    // componentWillUnmount
  };
});
```

### useMemo, useCallback

- state 나 props 가 변할 경우 리렌더링이 발생, 이때 변수가 불필요하게 새로 선언되는 문제
- Memoization: 같은 값을 반환하는 함수를 반복 호출할 때, 맨 처음에 값을 계산해서 메모리에 저장(캐싱)한 후 값이 필요할 때마다 사용
- 렌더링 오버헤드 감소
- `useMemo(() => fn, [deps])`: 계산 결과값 캐싱, `useCallback(fn, [deps])`: 함수 자체 캐싱
- `useCallback` 이 더 자주 쓰이는 편
- [react.dev: Should you add useCallback everywhere?](https://react.dev/reference/react/useCallback#should-you-add-usecallback-everywhere)
