import React, {Component} from 'react'
import {
    Routes,
    Route
} from 'react-router-dom'
import Inicio from "./pages/Inicio.js"
import Todos from "./pages/Todos.js"
import Favoritos from "./pages/Favoritos.js"
import Vistos from "./pages/Vistos.js"
import Adicionados from "./pages/Adicionados.js"
export default class Routes extends Components {
    render(){
        return(
            <>
            <Routes>
                <Route path="/" element={<Início />} />
                <Route path="Todos" element={<Todos />} />
                <Route path="Favoritos" element={<Favoritos />} />
                <Route path="Vistos" element={<Vistos />} />
                <Route path="Adicionados" element={<Adicionados />} />
            </Routes>
            </>
        )
    }
}