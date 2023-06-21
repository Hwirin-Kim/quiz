# Random Quiz

---

## 구현사항

1. 메인페이지

   - 닉네임을 입력해야 퀴즈 풀기 버튼 활성화

2. 퀴즈페이지

   - Open api를 이용하여 퀴즈문제 fetching
     - Data fetching하는 동안 로딩스피너 애니메이션 적용
     - 만약 fetching에 실패하는 경우 Error페이지로 리다이렉트됨
   - 보기 4개 중 1개를 선택하여 퀴즈를 풀어 나감
     - 4개중 정답은 랜덤한 위치에 배치됨
   - 답안을 선택해야만 다음 버튼 활성화됨
   - 답을 선택하면 바로 정/오답 확인 가능
   - 다음 버튼을 눌러야만 다음 문제를 풀 수 있음

3. 결과페이지
   - 퀴즈를 마칠때까지 걸린 시간을 볼수있음
   - 정/오답 개수를 볼 수 있음
   - 정/오답에 대한 비율을 pie chart로 볼 수 있음
   - 다시풀기 버튼으로 다시 문제를 풀 수 있음
   - 정/오답 비율을 표현하는 차트는 애니메이션이 적용되어있음
4. 랭킹페이지

   - 역대 결과를 랭킹페이지에서 모두 볼 수 있음
     - 단 페이지를 새로고침하거나 닫으면 데이터 유실
   - 랭킹은 정답을 많이 맞추거나, 동점인 경우 시간을 적게 사용한 사람이 유리함

5. 오답페이지
   - 문제를 풀고 틀린 답을 모아서 볼 수 있음
     - 단 문제를 다시 푸는경우 기존 오답은 사라지고 다시 풀었을때의 오답만 적용

---

## 라이브러리

1. styled-components

   - 스타일링은 styled-components를 사용하였습니다.

2. react-router-dom

   - 페이지 라우팅을 위해 사용하였습니다.

3. axios

   - data fetching에 사용하였습니다.

4. recoil

   - 상태관리에 비교적 사용성이 쉬운 recoil을 선택하였습니다.

---

## 트러블슈팅

### keyframes의 변수 공유 문제

- 문제

  - keyframes 변수는 전역적으로 생성되어 중복적인 이름을 사용할 수 없음
  - keyframes가 적용된 컴포넌트를 여러개 생성하면 모두 동일한 결과를 보여줌

- 해결

  - styled components에서 제공하는 keyframes모듈을 사용하여 해당 컴포넌트 scope에서만 사용가능한 변수 생성

- https://huirin.tistory.com/212


<br/>

### Open api로 받아온 문제의 보기 순서가 일정

- 문제

  - open api로 받아온 json 데이터는 정답 1개와 오답 3개를 분리하여 보내줌
  - 해당 정답과 오답을 1개의 배열로 합치면 항상 동일한 위치에 정답이 생성됨

- 해결

  - Fisher yates 알고리즘을 사용하여 배열을 랜덤하게 재배열함

- https://huirin.tistory.com/213


<br/>

### 타이머로 인한 QuizPage의 과도한 렌더링 성능개선

- 문제1

  - 시간을 카운트 하기 위해 setTimeout을 활용한 커스텀 훅을 작성함
  - 퀴즈를 풀기 시작할 때, 걸린 시간을 측정하기 위한 타이머를 가동시킴
  - 해당 타이머는 매 초 작동되어 해당 컴포넌트를 매 초 재 렌더링 시키는 문제 발생
  - useCallback등을 사용하여 해당 컴포넌트의 함수들을 메모이제이션 시켰지만 렌더링 자체는 막지 못했음

- 해결1

  - 해당 타이머 훅이 언마운트 될 때 시간을 지역변수에서 전역변수로 변경하는데 해당 전역변수 변경 함수가 useEffect의 의존성때문에 재 렌더링 되면서 매 초 전역변수가 갱신되는 문제였음
  - 결국 전역변수를 업데이트하는 useEffect의 의존성을 제거하기로 결정함
  - 하지만 의존성을 제거하면 매 초 시간이 지나도 해당 useEffect는 생성되는 시점의 컨텍스트를 기억하기 때문에 초기값인 0초로 업데이트됨
  - 따라서 useRef를 사용하여 새로운 useEffect를 통해 useRef.current값을 지역state 값으로 매 초 변경해주고, 해당 컴포넌트가 언마운트 될 때의 useRef.current 값을 전역변수로 업데이트 시킴

- 문제2

  - 그렇게 해도 해당 훅을 QuizPage에서 불러오면 해당 컴포넌트의 지역 state이기 때문에 아무런 소용이 없음

- 해결2

  - 자식 컴포넌트를 만들어서 해당 컴포넌트에서 타이머 훅을 불러서 사용함
  - 자식 컴포넌트는 재 렌더링 되어도 부모컴포넌트에 영향을 주지 않기 때문에 가능하였음

- 문제3
  - 사용상 문제가 없었으나 페이지가 언마운트 될 때, 전역변수로 업데이트를 하게 되는데, 이러면 문제를 다 풀고 해당 페이지에서 잠시 머물면 시간이 그대로 흘러서 결과보기를 누른 시점까지 멈추지 않고 카운트됨
- 해결3

  - 해당 타이머 훅에 부모로부터 문제를 다 푼 시점에 true가 되는 props를 받아 해당 props이 true가 될 때 전역변수로 업데이트 하도록 변경함

- https://huirin.tistory.com/214
