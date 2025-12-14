import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import { BaseNode } from './baseNode';

export const CodeNode = ({ id, data }) => {
    const [code, setCode] = useState(data?.code || '// Write JS code here');

    return (
        <BaseNode label="Code">
            <label className="flex flex-col gap-1">
                <span className="text-xs font-medium text-gray-500">Script:</span>
                <textarea
                    className="nodrag border border-gray-300 rounded px-2 py-1 text-xs font-mono h-16 bg-gray-50"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                />
            </label>

            <Handle type="target" position={Position.Left} id={`${id}-in`} className="w-3 h-3 bg-indigo-500" />
            <Handle type="source" position={Position.Right} id={`${id}-out`} className="w-3 h-3 bg-indigo-500" />
        </BaseNode>
    );
};