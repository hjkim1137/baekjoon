const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = input.slice(1); // ["1 0", "5", "4 2", "1 2 3 4", "6 0", "1 1 9 1 1 1"]

function solution() {
  for (let i = 0; i < arr.length; i += 2) {
    // 인덱스: 0,2,4,6
    const [n, m] = arr[i].split(' ').map(Number); // [1, 0], [4, 2], [6, 0]
    const priorities = arr[i + 1].split(' ').map(Number); // 중요도: [5], [1,2,3,4], [1,1,9,1,1,1]
    let queue = priorities.map((priority, idx) => ({ idx, priority }));
    // 문서의 위치 (idx):        0   1   2   3   4   5
    // 문서의 중요도(priority):   1   1   9   1   1   1

    // queue = [{idx: 0, priority: 1}, {idx: 1, priority: 1}, {idx: 2, priority: 9}, {idx: 3, priority: 1}, {idx: 4, priority: 1}, {idx: 5, priority: 1}]
    // 첫 번째 반복: current는 {idx: 0, priority: 1} 입니다.
    // 중요도가 9인 세 번째 문서 때문에 current 문서는 인쇄되지 않고 queue의 뒤로 보내집니다.

    let count = 0;

    while (queue.length > 0) {
      // queue에 문서가 남아 있는 동안 계속 반복
      const current = queue.shift(); // queue의 맨 앞에 있는 문서(중요도가 제일 높은 순서)빼서 current에 저장
      if (queue.some((doc) => doc.priority > current.priority)) {
        queue.push(current);
        // 현재 문서의 중요도가 queue 내의 다른 문서 중 어느 하나보다 낮다면 현재 문서를 queue의 맨 뒤로 다시 배치
      } else {
        // 현재 queue 내의 다른 문서 중 어느 것보다도 중요도가 높으므로
        count++; // 문서를 인쇄할 때마다 카운트를 1씩 증가시킵니다. 이 카운트는 몇 번째로 인쇄되었는지를 나타냄.
        if (current.idx === m) {
          // 이런식으로 계속 진행하다가 만약 현재 인쇄한 문서가 우리가 찾고 있는 문서 (인덱스 m을 가진 문서)라면,
          // count (즉, 몇 번째로 인쇄되었는지)를 출력하고 반복을 종료합니다.
          console.log(count);

          break;
        }
      }
    }
  }
}

solution();

// some 메소드 예제
// const numbers = [1, 2, 3, 4, 5];
// const hasEvenNumber = numbers.some(num => num % 2 === 0);
// console.log(hasEvenNumber); // true, 배열에는 짝수인 2, 4가 있다.
