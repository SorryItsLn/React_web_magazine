import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'


//редакс
import { getCategories } from '../../features/categories/categoriesSlice'
import { getProducts } from '../../features/products/productsSlice'

//компоненты
import Footer from '../footer/Footer'
import Header from '../header/Header'
import AppRouts from '../routes/Routes'
import SideBar from '../sideBar/SideBar'


const App = () => {

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getCategories());
        dispatch(getProducts())
    }, [dispatch])

    return (
        <div className='app'>
            <Header />
            <div className='container'>
                <SideBar />
                <AppRouts />
            </div>
            <Footer />
        </div>
    )
}

export default App
