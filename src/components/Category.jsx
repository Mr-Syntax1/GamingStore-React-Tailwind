import { categories } from '../data/productsData'
import useScrollReveal from '../components/useScrollReveal';

function Category() {

    useScrollReveal('.stat-item');
    return (
        <section className='py-16 bg-gray-50 stat-item'>
            <div className="container mx-auto px-4 ">
                {/* عنوان بخش */}
                <div className="text-center mb-12">
                    <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-3'>
                        دسته بندی محصولات
                    </h2>

                    <div className="w-24 h-1 bg-purple-600 mx-auto rounded-full"></div>
                    <p className='text-gray-500 mt-4'>بر اساس دسته‌بندی، محصول مورد نظرت رو پیدا کن</p>
                </div>

                {/* لیست دسته بندی ها */}
                <div className="flex flex-wrap justify-center gap-4">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-all ease-in-out duration-500 hover:-translate-y-2 cursor-pointer group w-[150px]">
                            <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-500 ease-in-out">
                                {category.icon}
                            </div>
                            <h3 className='font-semibold text-gray-800 group-hover:text-purple-600'>
                                {category.name}
                            </h3>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    )
}

export default Category;