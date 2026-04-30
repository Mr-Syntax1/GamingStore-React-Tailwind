import { useState } from "react";
import { Link } from "react-router-dom";
import laptopInformationd from '../assets/banner/laptop Information.webp'
import s24 from '../assets/banner/s24.webp'
import headphone1 from '../assets/banner/headphone1.webp'
import battry from '../assets/banner/battry.webp'
import oled from '../assets/banner/oled.webp'
import appleWatch from '../assets/banner/apple watch.webp'
import useScrollReveal from "../components/useScrollReveal";



const articles = [
    {
        id: 1,
        title: "راهنمای خرید لپ‌ تاپ گیمینگ در ۱۴۰۳",
        excerpt: "هر آنچه باید قبل از خرید لپ‌ تاپ گیمینگ بدانید؛ از پردازنده تا کارت گرافیک و رم...",
        image: laptopInformationd,
        category: "راهنما",
        date: "۲۵ فروردین ۱۴۰۳",
        author: "علی محمدی",
        readTime: "۸ دقیقه"
    },
    {
        id: 2,
        title: "مقایسه آیفون ۱۵ پرو در مقابل سامسونگ S24 اولترا",
        excerpt: "جدال سنگین‌وزن‌های دنیای موبایل؛ کدام یک ارزش خرید بیشتری دارد؟",
        image: s24,
        category: "مقایسه",
        date: "۱۸ فروردین ۱۴۰۳",
        author: "سارا احمدی",
        readTime: "۱۰ دقیقه"
    },
    {
        id: 3,
        title: "بهترین هدفون‌های بی‌سیم ۲۰۲۴",
        excerpt: "معرفی ۱۰ هدفون بی‌سیم برتر سال با بهترین کیفیت صدا و حذف نویز فعال",
        image: headphone1,
        category: "معرفی محصول",
        date: "۱۰ فروردین ۱۴۰۳",
        author: "رضا کریمی",
        readTime: "۶ دقیقه"
    },
    {
        id: 4,
        title: "نکات طلایی برای افزایش عمر باتری موبایل",
        excerpt: "با رعایت این نکات ساده، عمر باتری گوشی خود را تا دو برابر افزایش دهید",
        image: battry,
        category: "آموزشی",
        date: "۵ فروردین ۱۴۰۳",
        author: "علی محمدی",
        readTime: "۵ دقیقه"
    },
    {
        id: 5,
        title: "آشنایی با تکنولوژی OLED و مزایای آن",
        excerpt: "چرا صفحه‌نمایش‌های OLED بهتر از LCD هستند؟ تفاوت‌ها و مزایا را اینجا بخوانید",
        image: oled,
        category: "تکنولوژی",
        date: "۲۸ اسفند ۱۴۰۲",
        author: "سارا احمدی",
        readTime: "۷ دقیقه"
    },
    {
        id: 6,
        title: "بررسی ساعت هوشمند اپل واچ سری ۹",
        excerpt: "قابلیت‌ها، امکانات و تجربه کاربری جدیدترین ساعت هوشمند اپل",
        image: appleWatch,
        category: "بررسی تخصصی",
        date: "۲۰ اسفند ۱۴۰۲",
        author: "رضا کریمی",
        readTime: "۹ دقیقه"
    }
]

const categories = ["همه", "راهنما", "مقایسه", "معرفی محصول", "آموزشی", "تکنولوژی", "بررسی تخصصی"]

function BlogPage() {

    useScrollReveal('.start-item')

    const [selectedCategory, setSelectedCategory] = useState('همه')
    const [searchTerm, setSearchTerm] = useState('')

    //فیلتر مقالات
    const filteredArticles = articles.filter(article => {
        const matchCategory = selectedCategory === 'همه' || article.category === selectedCategory
        const matchSearch = article.title.includes(searchTerm) || article.excerpt.includes(searchTerm)

        return matchCategory && matchSearch
    })

    return (
        <div className="bg-gray-50 min-h-screen py-12 start-item">
            <div className="container mx-auto px-4">

                {/* هدر صفحه */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        مجله سام شاپ
                    </h1>
                    <div className="w-24 h-1 bg-purple-600 mx-auto rounded-full"></div>
                    <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                        آخرین اخبار، مقالات و راهنماهای دنیای تکنولوژی
                    </p>
                </div>

                {/* جست و جو */}
                <div className="max-w-xl mx-auto mb-8">
                    <input type="text" placeholder="جستجوی مقالات..." value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none text-[#111]  focus:ring-2 focus:ring-purple-500"
                    />
                </div>

                {/* دسته بندی ها */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-4 py-2 rounded-full duration-200 transition-all ${selectedCategory === cat
                                ? 'bg-purple-600 text-white'
                                : 'bg-white text-gray-700 hover:bg-gray-100'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* تعداد مقالات */}
                <div className="mb-6 text-gray-500 text-center">
                    {filteredArticles.length} مقاله یافت شد
                </div>


                {/* گرید مقالات */}
                {filteredArticles.length === 0 ? (
                    <div className="text-center py-20">
                        <div className="text-6xl mb-4">🔍</div>
                        <h3 className="text-xl font-bold text-gray-700">مقاله‌ای یافت نشد!</h3>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredArticles.map(article => (
                            <div key={article.id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all group">
                                <div className="overflow-hidden">
                                    <img src={article.image} alt={article.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="p-6">
                                    <div className="flex justify-between items-center mb-3">
                                        <span className="bg-purple-100 text-purple-600 text-xs px-3 py-1 rounded-full">
                                            {article.date}
                                        </span>
                                    </div>
                                    <h2 className="text-xl font-bold text-gray-800 mb-2 hover:text-purple-600 transition">
                                        <Link to={`/blog/${article.id}`}>{article.title}</Link>
                                    </h2>
                                    <p className="text-gray-500 text-sm mb-4 line-clamp-2">{article.excerpt}
                                    </p>
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-2">
                                            <span className="text-gray-400 text-sm">
                                                ✍️ {article.author}
                                            </span>
                                        </div>
                                        <Link to={`/blog/${article.id}`}
                                            className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                                            ادامه مطلب ←
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* خبرنامه */}
                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 mt-16 text-center text-white">
                    <h3 className="text-2xl font-bold mb-2">عضویت در خبرنامه</h3>
                    <p className="text-purple-100 mb-6">اولین نفری باش که از تخفیف‌ها و مقالات جدید مطلع می‌شی!</p>
                    <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" action="">
                        <input type="text"
                            placeholder="ایمیل شما"
                            className="flex-1 px-4 py-2 rounded-xl text-[#111] focus:outline-none"
                        />
                        <button className="bg-white text-purple-600 px-6 py-2 rounded-xl font-bold hover:bg-purple-100 transition">
                            عضویت
                        </button>
                    </form>
                </div>

            </div>
        </div >
    )
}

export default BlogPage;