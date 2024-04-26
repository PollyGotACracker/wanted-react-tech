# Project Structure

- 유지보수 측면에서 중요:  
  코드 탐색 시간을 줄이고 코드베이스 응집도를 높임
- 팀원과 논의하여 합의점 도출 필요: 어떤 아키텍처? 기능 및 분류? 비즈니스 로직?

## Feature Driven Development

📦src
┣ 📂common(share) // 공통 파일
┃ ┣ 📂hooks
┃ ┗ 📂utils
┣ 📂features
┃ ┗ 📂order
┃ ┃ ┣ 📂api
┃ ┃ ┃ ┗ 📜index.ts
┃ ┃ ┣ 📂components
┃ ┃ ┃ ┗ 📜OrderList.tsx
┃ ┃ ┣ 📂constants
┃ ┃ ┣ 📂containers
┃ ┃ ┃ ┗ 📜OrderPage.tsx
┃ ┃ ┣ 📂hooks
┃ ┃ ┣ 📂redux
┃ ┃ ┃ ┗ 📜orderSlice.ts
┃ ┃ ┗ 📂services
┃ ┗ 📂user
┗ 📜App.tsx

- 화면(페이지)에 종속되지 않으므로 컴포넌트 배치 및 재사용 용이
- 기능별로 파일을 구분하여 찾아보기 편하고, 어디에 쓰이는지 한눈에 알 수 있음
- import 시 파일 경로가 간단해짐
- Divide and Conquer: 기능별 구분으로 구현 복잡도 최소화
- cf) schema: 데이터 구조 또는 폼 입력 검증 규칙 정의(form/schema)

## Monorepo

- 하나의 저장소에 여러 프로젝트가 존재
- npm 배포 없이 프로젝트 간 코드 공유 가능(재사용 코드, 상태, 상수, API, 스키마 등...)
- 관심사 분리의 어려움: 프로젝트 간 의존성이 높아져 설계 및 리팩토링 시 곤란
- 버전 업데이트 어려움: 모든 프로젝트가 동일한 버전의 라이브러리를 사용하기 때문
- 빌드 속도 저하: 패키지 규모가 커지기 때문
- 부분적인 에러가 전체 서비스에 영향을 줄 가능성 존재
- yarn(workspace), lerna, turborepo, nx, npm, pnpm
  - yarn 은 기본적인 기능만을 제공
  - 다른 라이브러리 툴 사용 시 이점:
    - node_modules 통일
    - 이전에 실행했던 파일 및 로그 캐싱(이미 완료한 작업이 현재 실행 테스크에 있으면 건너뜀)
    - 캐싱용 원격 저장소, 의존성 그래프 시각화

## Multirepo

- 하나의 프로젝트를 하나의 저장소에 관리
- 다른 프로젝트와 의존성이 없으며 각자 다른 버전의 라이브러리 사용
- 개발, 테스트, 빌드 각자 존재
- 관리 포인트 증가
- 코드 재사용성 감소

## Submodule

- 저장소 안에 다른 저장소를 디렉토리로 분리
- 저장소 하위에 다른 저장소를 포함하면서, 두 프로젝트를 별도로 다루어야 할 경우
