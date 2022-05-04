const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

breathfFirst = (graph, startingNode) => {
  const q = [startingNode];
  while (q.length > 0) {
    const current = q.shift();
    for (let i of graph[current]) {
      q.push(i);
    }
  }
};

breathfFirst(graph, "a");
