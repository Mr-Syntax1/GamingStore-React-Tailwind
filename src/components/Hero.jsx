import { Link } from "react-router-dom";
import useScrollReveal from '../components/useScrollReveal';

function Hero() {
    useScrollReveal('.stat-item');
    return (
        <section className="bg-gradient-to-r from-purple-700 via-indigo-700 to-purple-700 text-white py-20 px-4">
            <div className="container mx-auto text-center">
                <div className="mb-6">
                    <span className="text-7xl inline-block animate-bounce">🎮</span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    خرید هوشمندانه با سام شاپ
                </h1>

                <p className="text-purple-100 text-lg md:text-xl my-14 max-w-2xl mx-auto">
                    تجهیزات گیمینگ حرفه‌ای | مانیتور | کیبورد مکانیکال | ارسال سریع به سراسر کشور

                </p>

                {/* دکمه ها */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-white text-purple-700 hover:bg-purple-100 font-bold py-3 px-8 rounded-full  transition-all duration-300 shadow-lg hover:scale-105">
                        <Link to='/about'> مشاهده بیشتر ✨</Link>


                    </button>

                    <button className="border-2 border-white hover:bg-white hover:text-purple-700  font-bold py-3 px-8 rounded-full transition-all duration-300">
                        <Link to='/shop'> خرید از فروشگاه 🛒</Link>
                    </button>
                </div>

                {/* آمار */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-8 border-t border-purple-500/30 stat-item">

                    <div className="">
                        <div className="text-3xl font-bold">100%</div>
                        <div className="text-purple-200 text-sm">تضمین کیفیت</div>
                    </div>

                    <div className="">
                        <div className="text-3xl font-bold">24/7</div>
                        <div className="text-purple-200 text-sm">پشتیبانی</div>
                    </div>

                    <div className="">
                        <div className="text-3xl font-bold">1500+</div>
                        <div className="text-purple-200 text-sm">محصولات</div>
                    </div>

                    <div className="">
                        <div className="text-3xl font-bold">50k+</div>
                        <div className="text-purple-200 text-sm">مشتریان راضی</div>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Hero;