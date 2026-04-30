import { products } from "../data/productsData";
import ProductsCard from "./ProuductCard";
import useScrollReveal from "./useScrollReveal";


function SpecialProducts({ onAddToCart }) {
    const specialProducts = products.filter(p => p.isSpecial === true)
    useScrollReveal('.start-item')


    return (
        <section className="py-16 bg-white stat-item">
            <div className="container mx-auto px-4">

                {/* عنوان بخش */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
                        🔥 محصولات ویژه و پرفروش
                    </h2>
                    <div className="w-24 h-1 bg-purple-600 mx-auto rounded-full"></div>
                    <p className="text-gray-500 mt-4">
                        بهترین و محبوب‌ترین محصولات سام شاپ با تخفیف‌های ویژه
                    </p>
                </div>

                {/* گرید محصولات */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {specialProducts.map(prduct => (
                        <ProductsCard
                            key={prduct.id}
                            product={prduct}
                            onAddToCart={onAddToCart}
                        />
                    ))}
                </div>
            </div>
        </section>
    )

}

export default SpecialProducts;