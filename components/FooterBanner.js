import Image from "next/image";
import Link from "next/link";

export default function FooterBanner({ 
    footerBanner : {
        discount,
        largeText1,
        largeText2,
        saleTime,
        smallText,
        midText,
        desc,
        product,
        buttonText,
        imageUrl
    }}) {
    return (
        <>
        <div
        className="footerBannerContainer"
        >
            <div
                className="bannerDesc"
            >
                <div
                    className="left"
                >
                    <p>
                        {discount}
                    </p>
                    <p>
                        {largeText1}
                    </p>
                    <p>
                        {largeText2}
                    </p>
                    <p>
                        {saleTime}
                    </p>
                </div>
                <div
                    className="right"
                >
                    <p>
                        {smallText}
                    </p>
                    <p>
                        {midText}
                    </p>
                    <p>
                        {desc}
                    </p>
                    <Link
                        href={`/product/${product}`}
                    >
                        <button>
                            {buttonText}
                        </button>
                    </Link>
                </div>

                <Image
                    src={imageUrl}
                    width={336}
                    height={210}
                />
            </div>
        </div>
        </>
    )
}