var day9 = require('../src/day9.js');
var expect = require('chai').expect;

describe('Build graph', function() {
  
  it('A graph with two nodes', function() {
    var graph = day9.createGraph(['x to y = 1']);
    expect(graph.x.y).to.equal(1);
    expect(graph.y.x).to.equal(1);
  });

  it('A graph with three nodes', function() {
    var graph = day9.createGraph(['x to y = 1', 'x to z = 1', 'z to y = 1']);
    expect(graph.x.y).to.equal(1);
    expect(graph.x.z).to.equal(1);
    expect(graph.y.x).to.equal(1);
    expect(graph.y.z).to.equal(1);
    expect(graph.z.x).to.equal(1);
    expect(graph.z.y).to.equal(1);
  });
});

xdescribe('Compute shortest path', function() {
  it('A graph with two nodes', function() {
    var graph = {x: {y:1}, y: {x:1}};
    var shortestPath = day9.shortestPath(graph);
    expect(shortestPath).to.equal(1);
  });
  it('A graph with three nodes', function() {
    var graph = {x: {y:1, z: 2}, y: {x:1, z: 3}, z: {x:2, y:3}};
    var shortestPath = day9.shortestPath(graph);
    expect(shortestPath).to.equal(3);
  });
});

describe('Compute longest path', function() {
  it('A graph with three nodes', function() {
    var graph = {x: {y:1, z: 2}, y: {x:1, z: 3}, z: {x:2, y:3}};
    var shortestPath = day9.longestPath(graph);
    expect(shortestPath).to.equal(5);
  });
});
