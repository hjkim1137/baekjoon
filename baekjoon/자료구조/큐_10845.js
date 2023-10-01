const input = require('fs')
  .readFileSync('example.txt') // '/dev/stdin'
  .toString()
  .trim()
  .split('\n');

const arr = input.slice(1);

const queue = []; // 큐에 쌓이는 값(안보이는 값)
const answer = []; // "출력" 값 (보이는 값)

function solution() {
  for (let i = 0; i < arr.length; i++) {
    let command = arr[i].split(' ')[0];
    let num = arr[i].split(' ')[1];

    switch (command) {
      case 'push':
        queue.push(num);
        break;

      case 'pop':
        answer.push(queue.shift() || -1);
        break;

      case 'size':
        answer.push(queue.length);
        break;

      case 'empty':
        answer.push(queue.length == 0 ? 1 : 0);
        break;

      case 'front':
        answer.push(queue[0] || -1);
        break;

      case 'back':
        answer.push(queue[queue.length - 1] || -1);
        break;
    }
  }
  console.log(answer.join('\n'));
}

solution();
