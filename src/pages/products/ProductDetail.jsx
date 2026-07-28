import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../api/axios";
export default function ProductDetail() {
    const { slug } = useParams();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false);
    const fetchProduct = async () => {
        setLoading(true)
        try {
            const response = await api.get(`/products/${slug}/`);
            console.log(response.data);
            setProduct(response.data);
        }
        catch (err) {
            console.log(err);
        }
        finally {
            setLoading(false)
        }
    };



    useEffect(() => {
        fetchProduct()
    }, [slug]);

    if (loading) {
        return <h2>Loading.....</h2>;
    }
    if (!product) {
        return <h2>Product not found.</h2>;
    }
    return (
        <>
            <div>
                <h1>{product.name}</h1>

                <p>Price: {product.price}</p>

                <p>Type: {product.product_type}</p>

                <p>Category: {product.category}</p>
                <p>{product.description}</p>
                <img className="w-40 h-40 "
                    src={product.image}
                    alt={product.name}
                />
            </div>
        </>
    )
}