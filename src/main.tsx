import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

console.log('[main] Starting application...');
const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error('[main] Root element not found!');
} else {
  console.log('[main] Root element found, rendering app...');
  createRoot(rootElement).render(<App />);
}
