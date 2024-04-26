# Etc

## 선언문과 표현식

### 함수 선언문

```js
export default function myFunc1() {}

export function myFunc2() {}
```

- 전역 또는 함수 스코프에 함수를 정의
- 코드 블록 내 어디서든 호출
- 가독성 향상:
  1. 함수 호이스팅이 가능하므로 함수 선언보다 먼저 함수를 호출할 수 있음  
     따라서 메인 로직을 가장 상단에 위치시킬 수 있음
  2. 함수 선언과 동시에 `export default` 가능

### 함수 표현식

```js
const myFunc1 = function () {};
export default myFunc1;

export const myFunc2 = function () {};

// 화살표 함수 사용
const myFunc1 = () => {};
export default myFunc1;

export const myFunc2 = () => {};
```

- 함수를 변수에 할당
- 함수 호이스팅 불가: 선언이 이루어진 위치 이후부터 호출 가능

1. 함수를 다른 함수의 인자로 전달하는 경우
   - 클로저 생성이 쉬움
   - 콜백 함수, 이벤트 핸들러도 클로저이므로 마찬가지
2. 조건에 따라 함수를 선언하고 블록 밖에서 호출할 경우
   - 블록 밖에서 변수를 선언한 뒤 블록 내에서 함수 할당
3. 함수 호출 시점을 제어해야 할 경우
   - 클로저 생성이 쉽기 때문에 함수 호출 시 외부 변수에 접근하는 데 이점

## 프로그래밍 패러다임: 명령형과 선언형

### 명령형 프로그래밍(Imperative Programming)

- 단계적으로 순서 제어
- 어떻게 동작해야 하는지, 해결 과정에 집중
- 알고리즘을 명시하고 목표는 명시하지 않음
- for문, try-catch문

### 선언형 프로그래밍(Declarative Programming)

- 추상적으로 최종 상태만을 선언
- 원하는 데이터가 무엇인지, 결과에 집중
- 목표를 명시하고 알고리즘은 명시하지 않음
- 가독성 향상, 추상화 수준 증가
- Array 메서드
