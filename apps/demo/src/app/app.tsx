// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import NxWelcome from './nx-welcome';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Authentication } from "@cpp-platfrom-ui/authentication";
import { CommonUi } from '@cpp-platfrom-ui/common-ui'
import Home from '../components/Home/Home';
import AuthGuard from './AuthGuard';



export function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthGuard><NxWelcome title="demo" /></AuthGuard>} />
          <Route path="/authpamal" element={<AuthGuard><Authentication /></AuthGuard>} />
          <Route path="/commonui" element={<AuthGuard><CommonUi /></AuthGuard>} />
          <Route path='/home' element={<AuthGuard><Home /></AuthGuard>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
