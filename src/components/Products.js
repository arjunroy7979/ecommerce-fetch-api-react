import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { AddCart } from '../redux/CartSystem'

const Products = () => {
    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data)
    // search
    const [search, setSearch] = useState('');

    useEffect(() => {
        axios.get('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json')
            .then((response) => {
                setData(response.data?.categories)
                setFilter(response.data?.categories)
            }).catch((err) => console.log(err))
    }, [])

    const filterProduct = (cat) => {
        const updatedList = data.filter((x) => x.category_name === cat);
        setFilter(updatedList)
    }
    const dispatch = useDispatch();

    return (
        <>

            <div className="container my-5 py-5 ">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="buttons d-flex justify-content-center mb-5 pb-5">
                        <input placeholder='Search Here...' className='search me-2' onChange={(e) => { setSearch(e.target.value.toLowerCase()) }} />
                        <button className='btn btn-sm btn-outline-primary w-100  me-2' onClick={() => setFilter(data)}>All</button>
                        {
                            data && data.map((item, i) => {
                                return (
                                    <button key={i} className='btn btn-sm btn-outline-dark w-100 me-2' onClick={() => filterProduct(`${item.category_name}`)}>{item.category_name}</button>
                                )
                            })
                        }

                    </div>
                </div>
                <div className="row justify-content-center">
                    {
                        filter && filter.map((item) => {
                            return (
                                item.category_products.filter((item) => {
                                    return search === '' ? item : item.vendor.toLowerCase().includes(search)
                                }).map((ele) => {
                                    const { id, image, title, badge_text, price, vendor, compare_at_price } = ele;
                                    return (
                                        <div className='col-md-3 mb-4' key={id}>
                                            <div className="card">
                                                <img src={image} className="card-img-top" alt={title} />
                                                <div className='card-body'>
                                                    <h5 className="card-title text-primary">{title.substring(0, 12)}...</h5>
                                                    <p className="card-text">{badge_text === null ? "No Offer" : badge_text}</p>
                                                    <p className="card-text">Price Rs. {price} | <span>{compare_at_price}</span></p>
                                                    <p className="card-text">{vendor}</p>
                                                    <Link to={`/cart`} onClick={() => dispatch(AddCart(ele))} className="fa fa-cart-plus btn p-0 m-0"></Link>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Products