import Styles from '@/styles/HeroBanner.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function HeroBanner({ heroBanner }) {
    return (
        <>
        <div className={Styles.heroBannerContainer}>
            <div>
                {console.log(heroBanner)}
                <p className={Styles.seiko}>
                    {heroBanner.smallText}
                </p>
                <h2>
                    {heroBanner.midText}
                </h2>
                <h3>
                {heroBanner.largeText1}
                </h3>
                <Image 
                className={Styles.salesImage}
                src={heroBanner.imageUrl}
                width={7406}
                height={4629}
                />
                <div>
                    <Link href={`/product/${heroBanner.product}`}>
                        <button
                            type='button'
                        >
                            {heroBanner.buttonText}
                        </button>
                    </Link>
                    <div
                        className='desc'
                    >
                        <h5>
                            Description
                        </h5>
                        <p>
                        {heroBanner.desc}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}