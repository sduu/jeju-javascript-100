/* 문제16 : 로꾸거

문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.

```jsx
**입출력**

입력 : 거꾸로
출력 : 로꾸거
``` */

const input = prompt('거꾸로 출력할 문장을 입력하세요');
const output = [...input].reverse().join('');
console.log(output);
