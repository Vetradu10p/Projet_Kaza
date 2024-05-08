import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { Home, About, Error404 } from "./Index";
import Layout from '@/Layout/Layout';
import LogementDetail from './LogementDetail/LogementDetail';



const PublicRouter = () => {
    return (
        <Routes>
            <Route element={<Layout/>}>
                <Route path="" element={<Navigate to="/" />} />
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/LogementDetail/:id" element={<LogementDetail />} />
                
                <Route path="*" element={<Error404 />} />
            </Route>
        </Routes>
    );
};

export default PublicRouter;