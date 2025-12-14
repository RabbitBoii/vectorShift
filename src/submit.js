// submit.js

import { useStore } from './store'
// import { shallow } from 'zustand/shallow'

export const SubmitButton = () => {

    const state = useStore.getState();
    const nodes = state.nodes
    const edges = state.edges

    console.log("Submitting nodes:", nodes);
    console.log("Submitting edges:", edges);


    const handleSubmit = async () => {

        const { nodes, edges } = useStore.getState();

        try {
            const response = await fetch('http://127.0.0.1:8000/pipelines/parse', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ nodes, edges })
            })

            const data = await response.json()

            alert(
                `Pipeline Overview\n` +
                `-----------------\n` +
                `Number of nodes: ${data.num_nodes}\n` +
                `Number of edges: ${data.num_edges}\n` +
                `Is DAG: ${data.is_dag ? 'YES' : "NO"}`
            )
        }
        catch (error) {
            console.error("Submission Error:", error)
            alert("Failed to submit.")
        }
    }


    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <button type="button"
                onClick={handleSubmit}
                className='px-6 py-3 bg-indigo-600 rounded-lg shadow-lg text-white font-semibold hover:bg-indigo-700 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>Submit</button>
        </div>
    );
}
