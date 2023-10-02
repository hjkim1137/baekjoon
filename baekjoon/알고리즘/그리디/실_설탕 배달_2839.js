const N = parseInt(require('fs').readFileSync('/dev/stdin').toString().trim());

let bags = 0; // 사용된 총 봉지의 개수
let sugar = N;

while (sugar >= 0) {
  if (sugar % 5 === 0) {
    bags += sugar / 5; // 5킬로로 나누어 떨어지면 결과 출력하고 종료
    console.log(bags);
    return;
  }
  sugar -= 3; // 나누어 떨어지지 않으면 3키로를 빼고 bag 개수 증가시킴
  bags++;
}

console.log(-1);

// 만약 N= 101 일때 코드 흐름:
// 초기 설탕의 무게 sugar는 101입니다.
// bags 변수는 사용할 설탕 봉지의 개수를 나타내며, 초기값은 0입니다.

// 첫 번째 반복:
// sugar는 5로 나누어 떨어지지 않습니다.
// 그래서 sugar에서 3을 뺍니다. (sugar는 이제 98)
// bags를 1 증가시킵니다. (bags는 이제 1)

// 두 번째 반복:
// sugar는 5로 나누어 떨어지지 않습니다.
// sugar에서 3을 뺍니다. (sugar는 이제 95)
// bags를 1 증가시킵니다. (bags는 이제 2)

// 세 번째 반복:
// sugar는 5로 나누어 떨어집니다. (95 / 5 = 19)
// bags에 19를 더합니다. (bags는 이제 21)
// 결과를 출력하고 종료합니다. (21 출력)
