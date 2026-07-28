import { useEffect, useState } from "react";
import api from "../api/axios";


export default function AdminProducts() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        const fetchProducts = async () => {

            try {

                const response = await api.get("/products/");



                setProducts(response.data.results);

            }
            catch (error) {

                console.log("ERROR:", error);

            }
            finally {

                setLoading(false);

            }

        };


        fetchProducts();

    }, []);



    if (loading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div>
            <h1>
                Admin Product Panel
            </h1>
            {
                products.map((product) => (

                    <div key={product.id}>
                        <h1>Stock Remaining : {product.stock}</h1>
                        <h1>Status : {product.stock_status}</h1>

                        <img
                            src={product.image}
                            alt={product.name}
                            width="150"
                        />
                        <h2>
                            {product.name}
                        </h2>
                        <p>
                            Category: {product.category}
                        </p>
                        <p>
                            Type: {product.product_type}
                        </p>
                        <p>
                            Price: {product.price}
                        </p>
                    </div>

                ))
            }


        </div>

    );
}