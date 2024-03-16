# React 2

## Error Boundary

- 하위 컴포넌트 트리에서 발생한 에러를 잡아 선언적 처리
- 컴포넌트 내부 에러를 try - catch 를 사용한 명령적 처리 대신 선언적으로 처리
- JS 에러, 404 나 500 에러 등에서 깨진 컴포넌트 트리 대신 fallback UI 표시
- 에러 핸들링 기준에 따라 묶음: 페이지 단위, 특정 기능 이나 UI 단위 등
- react-error-boundary 라이브러리를 사용하여 구현 없이 바로 사용 가능

```jsx
<ErrorBoundary fallbackComponent={Fallback}>
<MyComponent>
</ErrorBoundary>
```

## Context API

- 컴포넌트 간 전역적으로 사용되는 데이터 공유
- 모달, 토스트 등 간단한 곳에서 사용
- `useContext()`: context 를 읽고 구독
- `Provider`: context 의 변경 사항 구독
  - 최상위 부모 컴포넌트에서 컴포넌트를 `Provider` 로 감싸 전역 값 사용
  - `Provider` 는 중첩 사용 가능
  - `value` prop 이 바뀔 때마다 context 를 구독하는 모든 컴포넌트가 리렌더링됨에 유의

## Portal

- 부모 컴포넌트의 DOM 계층 구조 바깥에 있는 노드에서 자식 컴포넌트 렌더링

```js
// child(렌더링 할 React 자식 요소), container(렌더링 될 DOM element)
ReactDOM.createPortal(<Modal />, document.body);
```
