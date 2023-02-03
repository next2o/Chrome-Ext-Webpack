import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App';

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App/>)

// function renderApp(info) {
//   root.render(<App info={info} />, document.getElementById('root'));
// }