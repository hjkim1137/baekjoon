const fs = require('fs');
const input = fs
  .readFileSync('example.txt') // 제출시: '/dev/stdin'
  .toString()
  .trim()
  .split('\n')
  .map((el) => Number(el));

function stackSequence() {
  const n = input[0]; // 8
  const arr = input.slice(1);
  // [4,3,6,8,7,5,2,1] n을 제외한 나머지 목록(마지막 index 지정 안하면 끝까지 지정됨)
  // 이 숫자와 일치하게 수열을 만들고 완료하면 스택에서 제거, push 할때는 오름차순으로 넣기

  let stack = [];
  let result = [];
  let stackNum = 1;

  for (let i = 0; i < n; i++) {
    let num = arr[i]; // 배열에서 특정 요소

    while (stackNum <= num) {
      stack.push(stackNum++); // 이렇게 되면 스택에는 [1,2,3,4] 가 쌓인다
      result.push('+'); // [+,+,+,+] 가 쌓인다
    }

    if (stack[stack.length - 1] === num) {
      // 원하는 수열까지 스택에 쌓이면
      stack.pop(); // 스택에서 꺼낸다
      result.push('-'); // 꺼냄의 의미로 result 배열에 '-'를 찍는다.
    } else {
      console.log('NO'); // 이외의 경우는 모두 no를 출력한다.
      return;
      // NO 다음에 console이 또 있기 때문에 "출력 초과" 오류가 생긴다.
      // 이를 방지하기 위해 return으로 실행을 종료한다.
    }
  }
  console.log(result.join('\n'));
}

stackSequence();
