# State

- 모든 애플리케이션은 state 값이 존재
- 컴포넌트 간 다른 state 를 공유함으로써 애플리케이션을 reactive 하게 유지
- state 가 변경되었을 때, 변경 사항은 state 를 사용하는 모든 View 에 반영되어야 함
- 어떤 아키텍처를 사용하는지에 따라 데이터 흐름과 View 반영 방식이 달라진다(MVC, Flux).
- Props drilling

## MVC pattern

- Model: 애플리케이션의 데이터 처리
- View: 데이터를 표시하는 UI
- Controller: View 와 Model 구성 요소 사이의 인터페이스
- 컴포넌트 간 양방향 데이터 흐름

## Flux pattern

- React 에서 Redux 로 차용된 패턴
- 단방향 데이터 흐름

## MVC vs Flux

- View 에 데이터와 이벤트(사용자 입력) 유입된다는 공통점을 가진다.  
  그러나 View 에서 나오는 데이터 유형은 다르다.
- 일반적인 View 는 이벤트 핸들러 함수가 다른 컴포넌트와 통신할 때 제약이 없다.
  예시로 사용자가 버튼을 클릭했을 때 View 는 다른 View 의 상태를 변경하거나, Controller 에 직접 동작을 호출하거나, Model 의 상태를 변경할 수 있다.
- Flux 에서 View 는 오직 Action 을 전송하는 Dispatch 역할만 수행한다.  
   따라서 Data Flow 를 위한 진입점은 단 하나이며, 결과적으로 Store 의 상태가 변경된다.
