import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from "../home/Home"
import { ROUTES } from '../../utils/routes'
import SingleProduct from '../../Products/SingleProduct'

const AppRouts = () => (
    <Routes>
        <Route path={ROUTES.PRODUCT} element={<SingleProduct />}></Route>
        <Route index element={<Home />} ></Route>

    </Routes>
)


export default AppRouts
