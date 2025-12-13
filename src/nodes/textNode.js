// textNode.js

import { useEffect, useState } from 'react';
import { Handle, Position, useUpdateNodeInternals } from 'reactflow';
import { BaseNode } from './baseNode';
import TextareaAutosize from 'react-textarea-autosize';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [handles, setHandles] = useState([]);

  const updateNodeInternals = useUpdateNodeInternals()

  useEffect(() => {
    const regex = /{{([a-zA-Z_$][a-zA-Z0-9_$]*)}}/g;
    const matches = [];
    let match;
    while ((match = regex.exec(currText)) !== null) {
      if (!matches.includes(match[1])) {
        matches.push(match[1])
      }
    }
    setHandles(matches)
  }, [currText])


  useEffect(() => {
    updateNodeInternals(id)
  }, [handles, id, updateNodeInternals])

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <BaseNode label="Text">

      <label className='flex flex-col gap-1'>
        <span className='text-xs font-medium text-gray-500'>Text:</span>

        <TextareaAutosize
          minRows={1}
          className='nodrag border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:border-indigo-500 resize-none overflow-hidden font-mono'
          value={currText}
          onChange={handleTextChange}
        />
      </label>

      {handles.map((handleName, index) => (
        <Handle
          key={handleName}
          type='target'
          position={Position.Left}
          id={`${id}-${handleName}`}
          style={{ top: `${(index + 1) * 25 + 50}px`, zIndex: 1000 }}
          className="w-3 h-3 bg-red-500 border-2 border-white"
          title={handleName}
        />
      ))}

      <Handle
        type="source"
        position={Position.Right}
        className='w-3 h-3 bg-indigo-500 border-2 border-white'
        id={`${id}-output`}
      />

    </BaseNode>
  );
}
