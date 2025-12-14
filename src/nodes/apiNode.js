import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import { BaseNode } from './baseNode';

export const APINode = ({ id, data }) => {
    const [url, setUrl] = useState(data?.url || 'https://api.example.com');

    return (
        <BaseNode label="API Call">
            <label className="flex flex-col gap-1">
                <span className="text-xs font-medium text-gray-500">API Endpoint:</span>
                <input
                    className="nodrag border border-gray-300 rounded px-2 py-1 text-xs"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                />
            </label>

            <Handle type="target" position={Position.Left} id={`${id}-req`} className="w-3 h-3 bg-indigo-500" />
            <Handle type="source" position={Position.Right} id={`${id}-res`} className="w-3 h-3 bg-indigo-500" />
        </BaseNode>
    );
};