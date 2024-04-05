import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { Home, About, Logement, Error404 } from "./Index";
import Layout from '@/Layout/Layout';
import LogementDetail from './LogementDetail/LogementDetail';
import LogementsListe from '../../Components/LogementsListe';



const PublicRouter = () => {
    return (
        <Routes>
            <Route element={<Layout/>}>
                <Route path="" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/logement/:id" element={<LogementsListe />} />
                <Route path="/LogementDetail/:id" element={<LogementDetail />} />
                
                <Route path="*" element={<Error404 />} />
            </Route>
        </Routes>
    );
};

export default PublicRouter;