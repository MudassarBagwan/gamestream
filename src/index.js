import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Video from './component/video/[video]';
import { BrowserRouter as Main,Route,Routes } from 'react-router-dom';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main>
   
    <Routes>
    <Route path="/" element={<App/>} />
    <Route path="/video/:cat/:videoid" element={<Video />} />
    </Routes>
    </Main>
  </React.StrictMode>
);


