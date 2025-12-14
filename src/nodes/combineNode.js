import { Handle, Position } from 'reactflow';
import { BaseNode } from './baseNode';

export const CombineNode = ({ id }) => {
    return (
        <BaseNode label="Combine">
            <p className="text-xs text-gray-500">Merges two data streams:</p>

            <Handle type="target" position={Position.Left} id={`${id}-a`} style={{ top: '40px' }} className="w-3 h-3 bg-indigo-500" title="Input A" />
            <Handle type="target" position={Position.Left} id={`${id}-b`} style={{ top: '70px' }} className="w-3 h-3 bg-indigo-500" title="Input B" />

            <Handle type="source" position={Position.Right} id={`${id}-out`} className="w-3 h-3 bg-indigo-500" />
        </BaseNode>
    );
};