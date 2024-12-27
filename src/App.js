import React from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  MiniMap,
  Controls,
  Background
} from 'react-flow-renderer';
import { useState } from 'react';
import './App.css';

const initialNodes = [
  { id: '1', type: 'input', data: { label: 'Start Node' }, position: { x: 250, y: 0 } },
  { id: '2', data: { label: 'Processing Node' }, position: { x: 250, y: 150 } },
  { id: '3', type: 'output', data: { label: 'End Node' }, position: { x: 250, y: 300 } },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e2-3', source: '2', target: '3', animated: true },
];

const App = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = (changes) => setNodes((nds) => ReactFlow.updateNodes(nds, changes));
  const onEdgesChange = (changes) => setEdges((eds) => ReactFlow.updateEdges(eds, changes));
  const onConnect = (params) => setEdges((eds) => addEdge(params, eds));

  return (
    <ReactFlowProvider>
      <div style={{ height: '100vh' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
        >
          <MiniMap />
          <Controls />
          <Background />
        </ReactFlow>
      </div>
    </ReactFlowProvider>
  );
};

export default App;

