import React from "react";
import ReactFlow, {
  addEdge,
  useNodesState,
  useEdgesState,
  Background,
  Controls,
  MiniMap,
} from "reactflow";
import "reactflow/dist/style.css";

const initialNodes = [
  { id: "1", type: "input", data: { label: "Input Node" }, position: { x: 250, y: 0 } },
  { id: "2", data: { label: "Default Node" }, position: { x: 250, y: 150 } },
  { id: "3", type: "output", data: { label: "Output Node" }, position: { x: 250, y: 300 } },
];

const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = (params) => setEdges((eds) => addEdge(params, eds));

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
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
        <Background color="#aaa" gap={16} />
      </ReactFlow>
    </div>
  );
}

export default App;
