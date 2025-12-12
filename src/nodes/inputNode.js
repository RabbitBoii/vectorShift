// inputNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import { BaseNode } from './baseNode';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  return (
    <BaseNode label="Input">

      <label className='flex flex-col gap-1'>
        <span className='text-xs font-medium text-gray-500'>Field Name: </span>
        <input
          className="nodrag border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:border-indigo-500"
          type="text"
          value={currName}
          onChange={handleNameChange}
        />
      </label>

      <label className='flex flex-col gap-1'>
        <span className='text-xs font-medium text-gray-500'>Type</span>
        <select className='nodrag border border-gray-300 rounded px-2 py-1 text-sm bg-white' value={inputType} onChange={handleTypeChange}>
          <option value="Text">Text</option>
          <option value="File">File</option>
        </select>
      </label>


      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-value`}
        className='w-3 h-3 bg-indigo-500 border-2 border-white'
      />
    </BaseNode>
  );
}
