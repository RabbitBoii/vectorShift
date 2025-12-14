from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Any
import networkx as nx

app = FastAPI()

class PipelineData(BaseModel):
    nodes: List[dict]
    edges: List[dict]


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials = True,
    allow_methods = ["*"],
    allow_headers = ["*"],
)

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.post('/pipelines/parse')
def parse_pipeline(pipeline: PipelineData):


    numNodes = len(pipeline.nodes)
    numEdges = len(pipeline.edges)

    G = nx.DiGraph()
    for node in pipeline.nodes:
        G.add_node(node['id'])

    for edge in pipeline.edges:
        G.add_edge(edge['source'], edge['target'])

    
    is_dag = nx.is_directed_acyclic_graph(G)

    return{
        "num_nodes": numNodes,
        "num_edges": numEdges,
        "is_dag": is_dag
    }


