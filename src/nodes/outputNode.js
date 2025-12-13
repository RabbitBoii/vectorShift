// outputNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import { BaseNode } from "./baseNode"


export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  return (
    <BaseNode label="Output">

      <label className='flex flex-col gap-1'>
        <span className='text-xs font-medium text-gray-500'>Name:</span>
        <input
          type="text"
          className='nodrag border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:border-indigo-500'
          value={currName}
          onChange={handleNameChange}
        />
      </label>

      <label className='flex flex-col gap-1'>
        <span className='text-xs font-medium text-gray-500'>Type:</span>
        <select value={outputType} className='nodrag border border-gray-300 rounded px-2 py-1 text-sm bg-white' onChange={handleTypeChange}>
          <option value="Text">Text</option>
          <option value="File">Image</option>
        </select>
      </label>

      <Handle
        type="target"
        position={Position.Left}
        className='w-3 h-3 bg-indigo-500 border-2 border-white'
        id={`${id}-value`}
      />
    </BaseNode >
  );
}
