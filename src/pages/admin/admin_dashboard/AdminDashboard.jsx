import React, { useState } from 'react'

const AdminDashboard = () => {

    //useState
    const [productName, setproductName] = useState('')
    const [productPrice, setproductPrice] = useState('')
    const [productCategory, setproductCategory] = useState('')
    const [productDescription, setproductDescription] = useState('')

    //State for image
    const [productImage, setProductImage] = useState('')
    const [previewImage, setPreviewImage] = useState('')

    //image upload handler
    const handleImage = (event) => {
        const file = event.target.files[0]
        setProductImage(file)//for backend
        setPreviewImage(URL.createObjectURL(file))
    }
    return (
        <>

            <div className='container mt-3'>
                <div className='d-flex justify-content-between'>
                    <h3>Admin Dashboard</h3>


                    <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Add Product
                    </button>


                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Create a new product</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form action="">
                                        <label className='mt-2'>Product Name</label>
                                        <input onChange={(e) => setproductName(e.target.value)} type="text" className='form-control' placeholder='Enter Product Name' />
                                        <label className='mt-2'>Product Price</label>
                                        <input onChange={(e) => setproductPrice(e.target.value)} type="number " className='form-control' placeholder='Enter Product Price' />
                                        <label className='mt-2'>Choose Category</label>
                                        <select onChange={(e) => setproductCategory(e.target.value)} className='form-control'>
                                            <option value="plants">Plants</option>
                                            <option value="electronics">Electronics</option>
                                            <option value="gadgets">Gadgets</option>
                                            <option value="furniture">Furniture</option>
                                        </select>

                                        <label className='mt-2'>Enter Description</label>
                                        <textarea onChange={(e) => setproductDescription(e.target.value)} className='form-control'></textarea>
                                        <label className='mt-2'> Choose Product Image</label>
                                        <input onChange={handleImage} type="file" className='form-control' />

                                        {/* {Preview Image} */}
                                        {
                                            previewImage && <img src={previewImage} alt="preview image" className=" img-fluid rounded mt-2"/>
                                        }
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <table className='table mt-2'>
                    <thead className='table-dark'>
                        <tr>
                            <th>Product Image</th>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>Category</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <img width={'10%'} height={'40%'} src="data:image/jpeg;base64,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" alt=" " />
                            </td>
                            <td>Flower</td>
                            <td>200</td>
                            <td>Indoor</td>
                            <td>Beautiful Flower</td>
                            <td>
                                <button className='btn btn-primary'> Edit</button>
                                <button className='btn btn-danger ms-2'> Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>



        </>
    )
}

export default AdminDashboard