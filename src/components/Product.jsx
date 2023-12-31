import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import PropTypes from 'prop-types';

const Product = ({ products, product, setProducts }) => {
    console.log(product)
    const { photo, details, name, type, price, _id } = product;

    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://automotive-server-9mwwj9le3-mahedis-projects.vercel.app/cars/${_id}`, {
                    method: 'DELETE'

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = products.filter(car => car._id !== _id)
                            setProducts(remaining)
                            console.log(remaining)
                        }
                    })
            }
        })
    }

    return (
        <div data-aos="zoom-in">
            <div className="card  bg-black shadow-xl">
                <figure><img src={photo} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{details}</p>
                    <p>{type}</p>
                    <p>${price}</p>
                    <div className="card-actions justify-center ">
                        <Link to={`/carsDetails/${_id}`}><button className=" bg-black border border-red-700 hover:bg-red-600 hover:text-white font-bold px-4 md:px-4 py-1 md:py-2 rounded-lg">Details</button></Link>
                        <Link to={`updateCar/${_id}`}>
                            <button className=" bg-black border border-red-700 hover:bg-red-600 hover:text-white font-bold px-4 md:px-4 py-1 md:py-2 rounded-lg">Update</button></Link>
                        <button onClick={() => handleDelete(_id)} className=" bg-black border border-red-700 hover:bg-red-600 hover:text-white font-bold px-4 md:px-4 py-1 md:py-2 rounded-lg">Delete</button>


                    </div>
                </div>
            </div>
        </div>
    );
};

Product.propTypes = {
    products: PropTypes.array,
    product: PropTypes.object,
    setProducts: PropTypes.func
};

export default Product;