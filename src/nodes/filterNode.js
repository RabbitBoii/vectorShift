import { Handle, Position } from 'reactflow';
import { BaseNode } from './baseNode';

export const FilterNode = ({ id }) => {
    return (
        <BaseNode label="Filter">
            <div className="text-xs text-gray-500 mb-2">
                Routes data based on condition.
            </div>

            <Handle type="target" position={Position.Left} id={`${id}-in`} className="w-3 h-3 bg-indigo-500" />

            <div className="flex flex-col gap-4 mt-1">
                <div className="relative">
                    <span className="absolute right-4 -top-2 text-[10px] text-green-600">True</span>
                    <Handle type="source" position={Position.Right} id={`${id}-true`} className="w-3 h-3 bg-green-500 top-0" style={{ top: 0 }} />
                </div>
                <div className="relative">
                    <span className="absolute right-4 -top-2 text-[10px] text-red-600">False</span>
                    <Handle type="source" position={Position.Right} id={`${id}-false`} className="w-3 h-3 bg-red-500 top-0" style={{ top: 0 }} />
                </div>
            </div>
        </BaseNode>
    );
};