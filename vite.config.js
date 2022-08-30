import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     host: '0.0.0.0',
//   }
// }) 


export default (({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugin: [react()],
    server: {
      port: +env.PORT || 3000
    }
  }
})