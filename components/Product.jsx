import Image from "next/image";
import Link from "next/link";
import styles from '@/styles/Product.module.css'


export default function Product({ product: {slug, name, price, imageUrl} }) {
    return (
        <>
        {console.log(imageUrl)}
        <div>
            <Link
            href={`/product/${slug.current}`}
            >
                <div
                    // className={styles.productCard}
                >
                    <Image
                    src={imageUrl}
                    width={250}
                    height={250}
                    className="productImage"
                    />
                    <p>
                        {name}
                    </p>
                    <p>
                        ${price}
                    </p>
                </div>
            </Link>
        </div>
        </>
    )
}