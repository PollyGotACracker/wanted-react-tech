# Coding Convention

- 특정 프로그래밍 언어에서 채택된 코딩 관행을 따르는 것
- 공통 배경 지식, 일반적으로 알려진 디자인 패턴을 사용

## 변수명

- 반대 상응되는 단어끼리 짝을 맞추기:  
  `first`/`last`, `next`/`prev`, `opened`/`closed`, `source`/`target`

- 시제 제거, 단 수동태는 사용 가능:  
  `isLoading`, `isOpened`

- 상수는 SCREAMING(UPPER)\_SNAKE_CASE:  
  `DEFAULT_VALUE`

- Computed-Value Qualifiers: `usersTotal`
  `Total`, `Sum`, `Average`, `Max`, `Min`, `Count` 등  
   수량을 표현할 때는 `Num` 사용 가능: `numUsers`

- 이벤트 핸들러는 `on` + 동사 + 명사 형태:

  1. Prop - `on` + 이벤트: `onClick(Button)`
  2. Function - `handle` + 실제 동작: `handleFormSubmit`

- `interface` 와 `type` 은 PascalCase, `I` 나 `T` prefix 는 선택사항

### Boolean 변수

- 긍정적인 의미의 변수명 작성  
  `!` 연산자 사용 시 의미가 명확해짐
- true/false 로 답이 가능한 변수명 작성
- `is` + 명사 + 형용사 형태:  
  `isVisible`, `isDone`, `isError`, `isSuccess`

## If문

- 조건문을 개행할 경우 `&&`, `||` 는 이전 행에 붙임
- if - else 문을 사용할 경우 긍정 조건을 먼저 작성

```js
if (isFetchDone && 
    isFetchSuccess) {
  return successMessage;
} else {
  return errorMessage;
}
```
