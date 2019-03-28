function checkRoute(source, target) {
  let visited = new Set();
  let queue = [source];

  while (queue.length) {
    let node = queue.shift();
    let neighbors = node.neighbors;

    for (let i in neighbors) {
      let neighbor = neighbors[i];
      if (!visited.has(neighbor)) {
        if (neighbor === target) {
          return true;
        }

        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }

  return false;
}

class GraphNode {
  constructor(val) {
    this.value = val;
    this.neighbors = [];
  }
}

/* Test */
const j = new GraphNode('j');
const k = new GraphNode('k');
const l = new GraphNode('l');
const m = new GraphNode('m');
const o = new GraphNode('o');
const p = new GraphNode('p');
const q = new GraphNode('q');

j.neighbors = [k,l];
l.neighbors = [m, o];
m.neighbors = [p];
p.neighbors = [q];

console.log(checkRoute(j, l), true);
console.log(checkRoute(j, o), true);
console.log(checkRoute(k, p), false);
console.log(checkRoute(m, q), true);
console.log(checkRoute(o, q), false);


