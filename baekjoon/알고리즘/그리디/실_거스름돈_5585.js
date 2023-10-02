// 시도과정
// const input = parseInt(
//   require('fs').readFileSync('example.txt').toString().trim()
// );

// let change = 1000 - input; // 620
// let num = 0;

// while (change >= 0) {
//   if (change % 500 == 0) {
//     num += change / 500;
//     break;
//   } else if (change % 50 == 0) {
//     num += change / 50;
//     break;
//   } else if (change % 10 == 0) {
//     num += change / 10;
//     break;
//   } else if (change % 5 == 0) {
//     num += change / 5;
//     break;
//   } else if (change % 1 == 0) {
//     num += change;
//     break;
//   }
// }

// console.log(num);

// 오답노트: 500엔, 50엔, 10엔, 5엔, 1엔 각각의 동전을 효과적으로 사용하지 않고 있습니다.
// 현재의 로직은 단순히 남은 돈이 특정 동전으로 나누어 떨어질 때 해당 동전만 사용하여 잔돈을 주는 방식입니다.
// 이 방식은 최소 개수의 동전을 사용하는 방식이 아닙니다.

// 정답풀이
const input = parseInt(
  require('fs').readFileSync('dev/stdin').toString().trim()
);

let change = 1000 - input; // 620
let num = 0;

const coins = [500, 100, 50, 10, 5, 1];

for (let coin of coins) {
  num += Math.floor(change / coin);
  change %= coin;
}

console.log(num);

// 코드 흐름:
// coins 배열의 첫 번째 요소인 500을 coin에 할당합니다.
// 620을 500으로 나눈 결과의 몫인 1을 num에 더합니다. (num의 값이 1이 됩니다)
// 620을 500으로 나눈 나머지인 120을 change에 다시 할당합니다.
// 다음 배열의 요소인 100을 coin에 할당합니다.
// 120을 100으로 나눈 결과의 몫인 1을 num에 더합니다. (num의 값이 2가 됩니다)
// 120을 100으로 나눈 나머지인 20을 change에 다시 할당합니다.
// 다음 배열의 요소인 50을 coin에 할당합니다.
// 20은 50보다 작으므로, 20을 50으로 나누면 몫은 0이 됩니다. 따라서 num의 값에 변화가 없습니다.
// change는 여전히 20입니다.
// 다음 배열의 요소인 10을 coin에 할당합니다.
// 20을 10으로 나눈 결과의 몫인 2를 num에 더합니다. (num의 값이 4가 됩니다)
// 20을 10으로 나눈 나머지인 0을 change에 다시 할당합니다.
// change의 값이 0이 되므로, 이후의 배열 요소들 (5와 1)로의 반복에서는 어떠한 연산도 발생하지 않습니다.
// 따라서 for문이 종료된 후, num의 값은 4가 됩니다.
