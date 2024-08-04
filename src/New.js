import React, { useState } from 'react';
import './App.css'
export const New = () => {
    const [products] = useState([
        {
            Productname: "Sakhar",
            MRP: "40",
            Sale: "35"
        },
        {
            Productname: "Dal",
            MRP: "40",
            Sale: "35"
        }, {
            Productname: "Mugachidal",
            MRP: "40",
            Sale: "35"
        },
        {
            Productname: "Gul",
            MRP: "55",
            Sale: "50"
        },
        {
            Productname: "Pohe",
            MRP: "45",
            Sale: "40"
        },
        {
            Productname: "Soda",
            MRP: "20",
            Sale: "15"
        }
    ]);

    const [search, setSearch] = useState('');
    const [selectedProducts, setSelectedProducts] = useState([]);

    function calculateTotal(product, quantity) {
        return (quantity * parseFloat(product.Sale)).toFixed(2);
    }
    function calculateTotalAmount() {
        let totalAmount = 0;
        for (const product of selectedProducts) {
            totalAmount += parseFloat(calculateTotal(product, product.quantity));
        }
        return totalAmount.toFixed(2);
    }

    function calculateTotalDiscount() {
        let totalDiscount = 0;
        for (const product of selectedProducts) {
            const mrp = parseFloat(product.MRP);
            const salePrice = parseFloat(product.Sale);
            const discount = (mrp - salePrice) * product.quantity;
            totalDiscount += discount;
        }
        return totalDiscount.toFixed(2);
    }
    function calculateTotalMRP() {
        let totalMRP = 0;
        for (const product of selectedProducts) {
            totalMRP += parseFloat(product.MRP) * product.quantity;
        }
        return totalMRP.toFixed(2);
    }
    function searchProduct(event) {
        const searchTerm = event.target.value;
        setSearch(searchTerm);

        const foundProduct = products.find(product => product.Productname === searchTerm);

        if (foundProduct) {

            const existingProductIndex = selectedProducts.findIndex(

                product => product.Productname === foundProduct.Productname
            );

            if (existingProductIndex !== -1) {

                const updatedProducts = [...selectedProducts];
                updatedProducts[existingProductIndex].quantity++;
                setSelectedProducts(updatedProducts);
            } else {

                setSelectedProducts(prevSelectedProducts => [
                    ...prevSelectedProducts,
                    { ...foundProduct, quantity: 1 }
                ]);
            }
        }
    }

    function updateQuantity(product, newQuantity) {
        const updatedProducts = selectedProducts.map(selectedProduct => {
            if (selectedProduct.Productname === product.Productname) {
                return { ...selectedProduct, quantity: newQuantity };
            }
            return selectedProduct;
        });
        setSelectedProducts(updatedProducts);
    }

    return (
        <>
           
            <div className='container-fluid  bg-light ps-5 pe-5 pb-5'>

                <div className='row d-flex'>
                    <div className='col-lg-7 ms-5 bg-white'>
                        <input className='r' type='text' onChange={searchProduct} placeholder='Search Product by Name or Scan Barcode' />
                        <table className='table bg-light mt-3 p-2'>
                            <thead>
                                <tr>
                                    <th className='ms-3'>No</th>
                                    <th>Item Name</th>
                                    <th style={{ marginLeft: "90px" }}>Qty</th>
                                    <th>MRP</th>
                                    <th>Sale Price</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {selectedProducts.map((product, index) => (
                                    <tr key={index}>
                                        <td className='ms-3'>{index + 1}</td>
                                        <td>{product.Productname}</td>
                                        <td>
                                            <button className='nbtn' onClick={() => updateQuantity(product, product.quantity + 1)}>+</button>
                                            <input type='text' className='nbtn' placeholder='  0' value={product.quantity} />
                                            <button className='nbtn' onClick={() => updateQuantity(product, product.quantity - 1)}>-</button>
                                        </td>
                                        <td>{product.MRP}</td>
                                        <td>{product.Sale}</td>
                                        <td>{calculateTotal(product, product.quantity)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className='col-lg-4 ms-5'>
                        <div className='bg-white p-2'>
                            <h5 className='ms-1'>Customer Details</h5>
                            <div className='ms-3 bg-white'>
                                <input type='text' className='Cash mt-2' placeholder='Cash Sale' />
                                <h6 className='mt-3'><b>Customer Name : </b> Cash Sale</h6>
                                <h6 className='mt-2'><b>Customer Mobile :</b> No Data</h6>
                                <h6 className='mt-2'><b>Customer Email :</b> No Data</h6>
                                <h6 className='mt-2'><b>Customer Address :</b> No Data</h6>
                                <h3 className='mt-3'>Bill Date</h3>
                                <input type='text' placeholder='21/09/2023' />
                            </div>
                        </div>
                        <div className='mt-3 bg-white ps-3 pt-1 pb-3'>
                            <h3 className='mt-3'>Payment Details</h3>
                            <input type='text' className='Cash mt-2' placeholder='Cash' />
                            <h6 className='mt-3'><b>Rs.0 </b><b className='rimi'>  Remaining Amount Rs.0</b></h6>

                        </div>
                        <div className='mt-3 bg-white p-3'>
                            <h3 className='mt-3'>Bill Details</h3>
                            <div className='boligdiv mt-3 pt-4'>
                                <h3 className='text-white ms-3'>Total Amount : {calculateTotalAmount()}Rs </h3>
                            </div>
                        </div>
                        <div className='mt-3 bg-white p-5'>
                            <button type="button" className="btn btn-primary btn1">Save Bill</button>
                            <button type="button" className="btn btn-danger btn2">Cancel Bill</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid mt-3 fixed-bottom'>
                <div className='row'>
                    <div className='col-lg-2 bg-info footer1box p-2'>
                        <button type="button" class="btn btn-light btn3 ">History</button>
                    </div>
                    <div className='col-lg-2 bg-dark footer1box'>
                        <h6 className='text-white mt-3 ms-1 '>Last Bill No : 3 | Amount :143</h6>
                    </div>
                    <div className='col-lg-2 bg-warning footer1box'>
                        <h6 className='text-white mt-3 h5 ms-1'>Total Qty : 5</h6>
                    </div>
                    <div className='col-lg-2 bg-success footer1box'>
                        <h6 className='text-white mt-3 h5 ms-1'>Total MRP : {calculateTotalMRP()}</h6>
                    </div>
                    <div className='col-lg-2 bg-info footer1box'>
                        <h6 className='text-white mt-3 h5 ms-1'>Total Selas : 5</h6>
                    </div>
                    <div className='col-lg-2 bg-secondary footer1box'>
                        <h6 className='text-white mt-3 h5 ms-1'>Total Discount : {calculateTotalDiscount()}</h6>
                    </div>
                </div>

            </div>

        </>
    );
};
