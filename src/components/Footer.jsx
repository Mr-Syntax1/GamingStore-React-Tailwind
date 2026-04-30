// src/components/Footer.jsx
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="bg-zinc-100 dark:bg-zinc-900 text-white pt-12 pb-6 mt-16">
            <div className="container mx-auto px-4">

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

                    {/* درباره شرکت */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-2xl">🎮</span>
                            <h3 className="text-xl font-bold">سام شاپ</h3>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            اولین و بزرگترین فروشگاه آنلاین تخصصی محصولات دیجیتال با ضمانت اصالت کالا و بهترین قیمت.
                        </p>
                    </div>

                    {/* دسترسی سریع */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">دسترسی سریع</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><Link to="/" className="hover:text-purple-400 transition">خانه</Link></li>
                            <li><Link to="/shop" className="hover:text-purple-400 transition">فروشگاه</Link></li>
                            <li><Link to="/about" className="hover:text-purple-400 transition">درباره ما</Link></li>
                            <li><Link to="/blog" className="hover:text-purple-400 transition">مجله سام شاپ</Link></li>
                            <li><Link to="/contact" className="hover:text-purple-400 transition">تماس با ما</Link></li>
                        </ul>
                    </div>

                    {/* خدمات مشتریان */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">خدمات مشتریان</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-purple-400 transition">سوالات متداول</a></li>
                            <li><a href="#" className="hover:text-purple-400 transition">رویه‌های بازگشت کالا</a></li>
                            <li><a href="#" className="hover:text-purple-400 transition">حریم خصوصی</a></li>
                            <li><a href="#" className="hover:text-purple-400 transition">قوانین و مقررات</a></li>
                        </ul>
                    </div>

                    {/* اطلاعات تماس */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">تماس با ما</h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li>📞 ۰۲۱-۱۲۳۴۵۶۷۸</li>
                            <li>📧 info@samshop.com</li>
                            <li>📍 تهران، خیابان ولیعصر، پلاک ۱۲۳</li>
                        </ul>
                        <div className="flex gap-4 mt-4">
                            <span className="text-2xl cursor-pointer hover:text-purple-400">📷</span>
                            <span className="text-2xl cursor-pointer hover:text-purple-400">📘</span>
                            <span className="text-2xl cursor-pointer hover:text-purple-400">📧</span>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
                    <p>© ۱۴۰۳ تمامی حقوق برای سام شاپ محفوظ است.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer