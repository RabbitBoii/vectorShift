// llmNode.js

import { Handle, Position } from 'reactflow';
import { BaseNode } from './baseNode';

export const LLMNode = ({ id, data }) => {

  return (

    <BaseNode label="LLM">
      <div className='flex flex-col gap-1'>
        <span className='text-sm font-medium text-gray-700'>This is a LLM</span>
      </div>


      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-system`}
        style={{ top: '45px' }}
        className='w-3 h-3 bg-red-500 border-2 border-white'
        title='System Prompt'
      />
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-prompt`}
        style={{ top: `75px` }}
        className='w-3 h-3 bg-red-500 border-2 border-white'
        title='User Prompt'
      />
      {/* <div>
        <span>LLM</span>
      </div>
      <div>
        <span>This is a LLM.</span>
      </div> */}
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-response`}
        className='w-3 h-3 bg-red-500 border-2 border-white'
        title='LLM Response'
      />
    </BaseNode>
  );
}
