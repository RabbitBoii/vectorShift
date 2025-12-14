# VectorShift Frontend Assessment

## Project Overview
This project is a React-based Node Pipeline UI integrated with a FastAPI backend. It allows users to create, connect, and analyze node-based workflows.

![Pipeline Overview](./public/Screenshot%202025-12-14%20185506.png)

## Features
- **Node Abstraction:** Created a reusable `BaseNode` component for consistent styling and logic across all nodes.
- **Dynamic Text Node:** Implemented auto-resizing text areas and dynamic handle generation using variable detection (e.g., `{{input}}`).
- **Styling:** Fully styled components using Tailwind CSS.
- **Backend Integration:** A FastAPI backend that parses the pipeline to calculate nodes, edges, and validate if the graph is a Directed Acyclic Graph (DAG).
- **Custom Nodes:** Added 5 new node types (Filter, Combine, API Call, Code, Note) to demonstrate flexibility.

## How to Run

### Frontend
1. Navigate to the frontend directory: `cd frontend`
2. Install dependencies: `npm install`
3. Start the server: `npm start` (Runs on localhost:3000)

### Backend
1. Navigate to the backend directory: `cd backend`
2. Install dependencies: `pip install fastapi uvicorn networkx pydantic`
3. Start the server: `python -m uvicorn main:app --reload` (Runs on localhost:8000)

## Tech Stack
- **Frontend:** React, React Flow, Zustand, Tailwind CSS
- **Backend:** Python, FastAPI, NetworkX