import axios from 'axios'
import React, { useEffect, useState } from 'react'

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

    return (
        <>
            <div className='container-fluid mx-2'>
                <div className='row mt-5 mx-2'>
                    <div className='col-md-2'>
                        <h4 className='text-center'>Categories</h4>
                        <input placeholder='Search Here...' className='search mb-2' onChange={(e) => { setSearch(e.target.value.toLowerCase()) }} />
                        <button className='btn btn-sm btn-warning w-100 mb-2' onClick={() => setFilter(data)}>All</button>
                        {
                            data && data.map((item, i) => {
                                return (
                                    <button key={i} className='btn btn-sm btn-warning w-100 mb-2' onClick={() => filterProduct(`${item.category_name}`)}>{item.category_name}</button>
                                )
                            })
                        }
                    </div>
                    <div className='col-md-10'>
                        <div className='row'>
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
                                                            <h5 className="card-title text-primary">{title}</h5>
                                                            <p className="card-text">{badge_text === null ? "No Offer" : badge_text}</p>
                                                            <p className="card-text">Price Rs. {price} | <span>{compare_at_price}</span></p>
                                                            <p className="card-text">{vendor}</p>
                                                            <i className="fa fa-cart-plus btn p-0 m-0"></i>
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
                </div>
            </div>
        </>
    )
}

export default Products