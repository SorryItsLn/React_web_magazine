import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetProductQuery } from '../features/api/apiSlice';
import { ROUTES } from '../utils/routes'
import Product1 from './Product1';
import Product from './Product'
import { useDispatch, useSelector } from 'react-redux';
import { getRelatedProducts } from '../features/products/productsSlice';

const SingleProduct = () => {


    const dispatch = useDispatch()
    const { id } = useParams();
    const navigate = useNavigate();

    const { related } = useSelector(({ products }) => products)

    const { data, isLoading, isFetching, isSuccses } = useGetProductQuery({ id });

    useEffect(() => {
        // if (!isFetching && !isLoading && !isSuccses) {
        //     navigate(ROUTES.HOME);
        // }


    }, [isLoading, isFetching, isSuccses])
    useEffect(() => {
        if (data) {
            dispatch(getRelatedProducts(data.category.id))
        }
    }, [data, dispatch])

    return !data ?
        (<section className='preloader'> Loading...</section>)
        : (<>
            <Product1 {...data} />
            <Product products={related} amount={5} title='Related' />
        </>
        );
};

export default SingleProduct
