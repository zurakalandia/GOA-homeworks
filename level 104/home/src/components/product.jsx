export default function Product({price, inStock}) {
    return(
        <div>
            <p>Price: {price}</p>
            <p>In Stock: {String(inStock)}</p>
        </div>
    )
}