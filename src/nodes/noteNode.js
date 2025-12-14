import { useState } from 'react';
import { BaseNode } from './baseNode';

export const NoteNode = ({ id, data }) => {
    const [text, setText] = useState(data?.text || 'This is a note.');

    return (
        <BaseNode label="Note">
            <textarea
                className="nodrag border-none bg-yellow-50 rounded px-2 py-1 text-sm text-gray-600 w-full h-20 resize-y focus:outline-none"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
        </BaseNode>
    );
};