import React, { useState, useEffect } from "react";

import { NavLink } from "react-router-dom";
const Products = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter);
            }
            return () => {
                componentMounted = true;
            };
        };
        getProducts();
    }, []);

    const filterProduct = (selectedCat) => {
        const updatedList = data.filter((item) => item.category === selectedCat);
        setFilter(updatedList);
    };

    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button
                        className="btn btn-outline-dark me-4"
                        onClick={() => setFilter(data)}
                    >
                        {" "}
                        All{" "}
                    </button>
                    <button
                        className="btn btn-outline-dark me-4"
                        onClick={() => filterProduct("men's clothing")}
                    >
                        {" "}
                        Men's Clothing{" "}
                    </button>
                    <button
                        className="btn btn-outline-dark me-4"
                        onClick={() => filterProduct("women's clothing")}
                    >
                        Women's Clothing{" "}
                    </button>
                    <button
                        className="btn btn-outline-dark me-4"
                        onClick={() => filterProduct("jewelery")}
                    >
                        {" "}
                        Jewelery{" "}
                    </button>
                    <button
                        className="btn btn-outline-dark"
                        onClick={() => filterProduct("electronics")}
                    >
                        Accessories{" "}
                    </button>
                </div>
                {filter.map((prod) => {
                    return (
                        <>
                            <div className='card-wrapper col-lg-3 col-md-4 col-sm-5 col-xs-6 mb-4' key={prod.id}>
                                <div className="card h-100 text-center p-3"  >
                                    <img className="card-img-top" src={prod.image} alt={prod.title} height="250px" />
                                    <div className="card-body">
                                        <h5 className="card-title mb-0">{prod.title.substring(0, 12)}</h5>
                                        <br />
                                        <p className="card-text" >₹{(prod.price * 85.4).toFixed(2)}</p>
                                        <NavLink to={`/products/${prod.id}`} className='btn btn-outline-secondary'> View Product </NavLink>
                                    </div>
                                </div>
                            </div>
                        </>
                    );
                })}
            </>
        );
    };
    return (
        <>
            <div className="container my-2 py-3">
                <div className="row">
                    <div className="col-12 mb-1">
                        <div>
                            <h1 className="fw-bolder text-center mt-1"> PRODUCTS </h1>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                    <ShowProducts />
                    </div>
                </div>
            </div>
        </>
    )
};
export default Products;
