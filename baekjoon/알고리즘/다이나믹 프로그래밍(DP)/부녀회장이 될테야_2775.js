// /dev/stdin
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const T = input[0]; // Test case의 수
const arr = input.slice(1); // [1,3,2,3]

for (let t = 0; t < T; t++) {
  const k = arr[t * 2];
  const n = arr[t * 2 + 1];
  console.log(peopleNum(k, n)); // (2,3)이라고 할때,
}

function peopleNum(floor, roomNum) {
  // 매개변수 (2,3) 대입 => (1층 1호, 1층 2호, 1층 3호) 입주민의 총합
  if (floor === 0) return roomNum; // 0층 i호에는 i명 거주
  let people = 0;
  for (let r = 1; r <= roomNum; r++) {
    people += peopleNum(floor - 1, r);
  }
  return people;
}
