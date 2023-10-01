const array = require('fs')
  .readFileSync('example.txt') //제출시: '/dev/stdin'
  .toString()
  .trim()
  .split('\n'); // 문자 -> 배열화

const stack = [];
const result = [];

const length = Number(array.shift()); // 14 제거, 명령 모음만 남음

for (let i = 0; i < length; i++) {
  const commandArray = array[i].split(' ');
  const command = commandArray[0];

  switch (
    command // if - else if 조건문 대신 사용
  ) {
    case 'push': // 스택에 값 추가
      stack.push(Number(commandArray[1])); // 숫자로 변환하여 추가
      break;

    case 'pop': // 스택에서 제거하고 그 수를 출력, 들어있는 정수가 없으면 -1 출력
      result.push(stack.pop() || -1);
      break; // 조건이 맞아 break를 만나면 그 이후의 비교는 하지 않고 switch문 종료

    case 'size': // 스택 내 정수 개수 출력
      result.push(stack.length);
      break;

    case 'empty':
      result.push(stack.length === 0 ? 1 : 0);
      break;

    case 'top': // 스택의 가장 위(가장 마지막으로 들어온 값) 출력, 없는 경우 -1 출력
      result.push(stack[stack.length - 1] || -1);
      break;
  }
}

// console.log(result.join('\n')); // join: 배열에서 원소 꺼내기
console.log(result.join('\n'));
// result: ['2', 2, 0, '2', '1', -1,  0, 1, -1, 0, '3']
// result.join() : 2,2,0,2,1,-1,0,1,-1,0,3

// result.join('\n')
// 2
// 2
// 0
// 2
// 1
// -1
// 0
// 1
// -1
// 0
// 3
