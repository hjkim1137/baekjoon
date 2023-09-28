입력 받는법

[첫번째 방법]
<한 줄의 입력만 받을 때>
const fs = require('fs');

// 백준 제출 할 때 주석 제거
// const path = "/dev/stdin"
// vsc 테스트 할 때 주석 제거
// const path = "input.txt"

const input = fs.readFileSync(path).toString().trim().split(' '); // 공백으로 입력을 구분한다.

// function solution() {} 풀이과정~
console.log(solution(input));




<여러 줄의 입력을 받을 때>
cosnt fs = require('fs');

// 백준 제출 할 때 주석 제거
// const path = "/dev/stdin"
// vsc 테스트 할 때 주석 제거
// const path = "input.txt"

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n'); // 개행문자로 입력을 구분한다.

// function solution(x,y,z,arr) {} 풀이과정~
console.log(solution(x,y,z,arr));

[두번째 방법]
<한 줄의 입력만 받을 때>
const readline = require("readline");
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

rl.on("line", function(line) {
console.log("hello !", line); // 다음의 line에서 입력을 받는다.
rl.close();
}).on("close", function() {
// 수행할 작업을 구현하기
process.exit();
});

<여러 줄의 입력을 받을 때>
const readline = require('readline');
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

let input = [];
rl.on('line', function (line) {
input.push(line) // input 배열에 입력을 한 줄씩 넣어준다.
})
.on('close', function () {
sol(input); // 입력이 포함된 input 배열을 구현한 sol함수에 인수로 넣을 수 있다.
process.exit();
});
