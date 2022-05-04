const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

breadthFirst = (graph, startingNode) => {
  const q = [startingNode];
  while (q.length > 0) {
    const current = q.shift();
    for (let i of graph[current]) {
      q.push(i);
    }
  }
};

breadthFirst(graph, "a");
