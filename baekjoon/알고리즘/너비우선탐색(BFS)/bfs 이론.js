BFS(Breath First Search)는 너비 우선 탐색이라고 하며 시작 노드로부터 가까운 노드를 먼저 방문하고 멀리 떨어져 있는 노드를 나중에 방문하는 탐색 방법이다. 
DFS는 최대한 멀리 있는 노드를 우선으로 탐색하는데, BFS는 그 반대다. 
BFS는 선입선출 방식인 큐 자료구조를 이용하는 것이 일반적이다. 
다른 언어의 경우는 보통 내장 라이브러리에 큐를 제공하고 있다. 
하지만 자바스크립트는 큐와 관련된 객체가 내장되어 있지 않다. 
따라서 큐를 이용하기 위해서는 직접 자료구조를 구현할 필요가 있다.

https://chamdom.blog/bfs-using-js/

예제:
상상해봐요, 우리는 A, B, C, D, E라는 친구들이 있어요. 친구들 사이에는 서로 알고 있는 관계가 있어요.

A - B
|   |
D - C - E
A는 B와 D를 알고, B는 A와 C를 알고, C는 B와 D와 E를 알고, D는 A와 C를 알고, E는 C만 알아요.
만약 A부터 친구들을 BFS 방법으로 차례로 방문한다면: A -> B -> D -> C -> E 순으로 방문할거에요.

# 자바스크립트로의 BFS 구현:
let graph = {
  A: ['B', 'D'],
  B: ['A', 'C'],
  C: ['B', 'D', 'E'],
  D: ['A', 'C'],
  E: ['C']
};

//이 함수는 시작점에서부터 가장 가까운 친구부터 멀리 있는 친구 순서대로 알아보는 함수에요.
function bfs(start) { // 시작점: start
  let visited = []; // 이곳에 '방문한' 친구들을 저장할 거에요.
  let queue = [start]; // 이곳에 차례로 '방문예정인' 친구들을 넣을 거에요. 어떤 친구를 다음에 방문할지 정함

  while(queue.length) { // queue를 다 비우기(모두 방문하기)가 목표이므로, 아직 방문해야 할 친구가 있다면 계속 반복해요.
    console.log("현재 queue:", queue); // 현재 queue 출력
    let node = queue.shift(); // (친구방문) queue에서 한 명의 친구를 꺼내올 거에요. (shift: 가장 앞쪽= 제일 먼저 들어온 node)
    if(!visited.includes(node)) { // (방문 체크) visited 목록에 node 친구가 없다면, 그 친구는 아직 방문하지 않은 친구입니다.
      visited.push(node); // 방문한 친구 목록에 추가해요.
      console.log(node, "의 친구들:", graph[node]); // 현재 방문 중인 노드의 친구들 출력
      queue = queue.concat(graph[node]); // node= A,B,C,D,E
      // 방문한 친구의 친구들은 다시 queue에 추가되어 나중에 방문하게 됩니다.
    }
  }
  return visited; // 마지막으로 방문한 순서대로 친구들을 반환해요.
}

// 'A'부터 시작해서 어떤 순서로 친구들을 만나는지 출력하려고 해요.
console.log(bfs('A'));  // 결과: [ 'A', 'B', 'D', 'C', 'E' ]

// 현재 queue: [ 'A' ]
// A 의 친구들: [ 'B', 'D' ]
// 현재 queue: [ 'B', 'D' ]
// B 의 친구들: [ 'A', 'C' ]
// 현재 queue: [ 'D', 'A', 'C' ]
// D 의 친구들: [ 'A', 'C' ]
// 현재 queue: [ 'A', 'C', 'A', 'C' ]
// 현재 queue: [ 'C', 'A', 'C' ]
// C 의 친구들: [ 'B', 'D', 'E' ]
// 현재 queue: [ 'A', 'C', 'B', 'D', 'E' ]
// 현재 queue: [ 'C', 'B', 'D', 'E' ]
// 현재 queue: [ 'B', 'D', 'E' ]
// 현재 queue: [ 'D', 'E' ]
// 현재 queue: [ 'E' ]
// E 의 친구들: [ 'C' ]
// 현재 queue: [ 'C' ]

# concat()
.concat()는 JavaScript의 배열 메서드로, 
두 개 이상의 배열을 연결하여 새로운 배열을 생성합니다. 원본 배열은 변경되지 않습니다.

간단한 예제로 설명하겠습니다:
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let result = arr1.concat(arr2);
console.log(result); // [1, 2, 3, 4, 5, 6]
