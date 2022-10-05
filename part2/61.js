// 문자열을 입력받고 연속되는 문자열을 압축해서 표현하고 싶습니다.

// ```jsx
// **입력**
// aaabbbbcdddd

// **출력**
// a3b4c1d4
// ```

const input = prompt('문자열을 입력하세요').split('');
const set = new Set();
let answer = [];

input.forEach(v => {
    if (set.has(v)) {
        answer[answer.length - 1] += 1;
    } else {
        set.add(v);
        answer.push(v, 1);
    }
});

console.log(answer.join(''));

/* 
답안

const user_s = new String(prompt('문자열을 입력하세요'));
let result_s = '';
let store_s = user_s[0];
let count = 0;

for (let i of user_s){
  if (i === store_s){
    count += 1;
  } else{
    result_s += store_s + String(count);
    store_s = i;
    count = 1;
  }
}

result_s += store_s + String(count);
console.log(result_s);
*/
