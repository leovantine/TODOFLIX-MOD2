import React, {Component} from 'react'
import {
    Routes,
    Route
} from 'react-router-dom'
import Inicio from "../pages/Inicio.js"
import Todos from "../pages/Todos.js"
import Favoritos from "../pages/Favoritos.js"
import Vistos from "../pages/Vistos.js"
import Adicionados from "../pages/Adicionados.js"
export default class App extends Component {
    render(){
        return(
            <>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="todos" element={<Todos />} />
                <Route path="favoritos" element={<Favoritos />} />
                <Route path="vistos" element={<Vistos />} />
                <Route path="adicionados" element={<Adicionados />} />
            </Routes>
            </>
        )
    }
}