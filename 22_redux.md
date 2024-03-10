# Redux

## Redux 의 원칙

- 전체 상태값은 하나의 객체에 저장
- 상태값은 불변 객체
- 상태값은 순수 함수에 의해서만 변경됨

## Redux 에서의 Flux pattern

- Redux 에서 컴포넌트 간 단방향 데이터 흐름은 props 와 state 를 통해 이루어진다.
- Flux 는 Store 가 여러 개 존재할 수 있지만, Redux 는 1개의 Store 만 사용한다.
- Flux 는 각 Store 가 상태 변경을 독립적으로 처리할 수 있다.  
  이벤트와 콜백을 통해 상태가 업데이트되며 Store 에서 비즈니스 로직을 처리한다.
  Redux 는 Reducer 에서 상태 변경 및 비즈니스 로직을 처리한다(Dispatcher 와 유사한 역할).  
  이때 Reducer 는 순수함수여야 한다.

## Single Source of Truth

- 데이터 관리의 핵심 원칙
- 애플리케이션의 모든 데이터, 상태는 단 한 곳에서 관리되어야 한다.

1. 일관성: 모든 상태가 한 곳에서 관리되어 상태 불일치를 방지
2. 예측 가능성: 모든 상태가 중앙에서 관리되면 데이터 흐름을 쉽게 추적할 수 있음
3. 재사용성: 상태 관리 로직을 중앙에서 관리하면 다른 곳(컴포넌트)에서 상태를 재사용할 수 있음

## Action

```js
{
    type: "ADD_TODO",
    content: "start a new project"
}
```

- state 에 변화를 일으키는 동작
- type, payload 를 담은 객체로 이루어짐
  - type 은 고유 값, 고유 이름. redux-devtools 에서 식별자 역할
  - payload 는 파라미터로 전달받을 수 있음
- Action Creator: 액션 생성함수
  - 파라미터를 받아 Action 객체를 반환
  - 직접 객체를 작성하지 않아 오탈자로 인한 오류 방지 가능
  - 사용 가능한 Action 에 대해 나열 가능

## Middleware

- Reducer 가 Action 을 처리하기 전 실행되는 함수로 Reducer 호출 전후 필요한 작업을 정의 가능  
  (error handling, 비동기 처리, side effect)
- e.g. saga, thunk(특정 작업을 나중에 수행할 수 있도록 하는 함수)

## Store

- 애플리케이션의 전체 상태 트리를 가지고 있는 저장소 객체

```js
configureStore({
  reducer: {
    // rootReducer 단독 또는 여러 Reducer 작성
  },
  middleware: () => {},
  devTools: true,
});
```

- `configureStore()`: Redux 관련 설정값 지정
  - Reducer Slice 자동 통합
  - redux-thunk 를 포함한 지정 미들웨어를 추가
  - Redux DevTools 활성화
- `combineReducers()`: 여러 Reducer 를 하나로 모아 rootReducer 를 생성한 후 `configureStore()` 로 전달

## useDispatch(): React Redux

- Dispatch 정의 hook
- Dispatch: 컴포넌트 내부에서 Action 을 실행시키는 함수

## useSelector(): React Redux

```js
const user = useSelector((state) => state.userSlice.user);
```

- Store 의 상태에서 필요한 데이터를 select 하는 hook
- Action 이 Dispatch 되었을 때, 이전 결과값과 현재 값을 비교하여 값이 바뀌었을 때만 컴포넌트 리렌더링

## createSlice(): Redux Toolkit

- Slice: 특정 값에 대한 Action 과 Reducer 가 정의된 함수
- `name` 과 `initialState`, 리듀서 함수들 `reducers` 로 이루어진 객체를 받아 아래의 요소를 반환:
- 반환 객체:
  1. name: Action type
  2. reducer: slice Reducer 로 Store 생성에 사용
  3. actions: Action creator

### extraReducers

```js
createSlice({
  // ...
  extraReducers: (builder) => {
    builder
      .addCase(getName.pending, (state, action) => {})
      .addCase(getName.fulfilled, (state, action) => {})
      .addCase(getName.rejected, (state, action) => {});
  },
});
```

- `createSlice() ` 의 옵션으로 전달
- Reducer 에서 끝내지 못한 작업을 할 수 있도록 하는 함수 작성
- slice Reducer 에서 생성된 Action 이 아닌, 외부의 Action 에 대응하는 Reducer 를 정의
- 일반적으로 thunk 핸들링 시 사용  
  `builder` 파라미터를 받아 `builder.addCase(actionType, (state, action) => {})` 로 API 호출 후 분기 처리
- promise 진행 상태에 따라 개별 Reducer 실행

## createAsyncThunk(): Redux Toolkit

- Thunk: 특정 작업을 나중에 할 수 있도록 하는 함수  
  Redux Store 의 `dispatch`, `getState` 메서드와 상호작용 할 수 있는 함수
- axios 나 fetch API 와 함께 사용하여 비동기 처리
- Action type 문자열과 promise 를 반환하는 함수를 받아,
  `pending`, `fulfilled`, `rejected` Action type 을 Dispatch 해주는 thunk 생성
- 파라미터:
  1. type: 문자열 Action type prefix  
     이를 기반으로 Action type 이 생성됨  
     (`user/getName` => `user/getName/pending`...)
  2. payloadCreator: promise 를 반환하는 비동기 콜백함수
  3. options 객체: 선택적. 거의 쓰지 않음
