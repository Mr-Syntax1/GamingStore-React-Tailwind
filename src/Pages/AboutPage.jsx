import useScrollReveal from '../components/useScrollReveal';

function AboutPage() {

    useScrollReveal('.stat-item');

    return (
        <div className="bg-gray-50 min-h-screen p-12 stat-item">
            <div className="container mx-auto px-4">

                {/* هدر صفحه */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        درباره ما
                    </h1>
                    <div className="w-24 h-1 bg-purple-600 mx-auto rounded-full"></div>
                    <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                        آشنایی با سام شاپ, افتخارات و تیم ما
                    </p>
                </div>

                {/* داستان ما */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12 ">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-8 md:p-10">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                داستان سام شاپ
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                سام شاپ در سال ۱۳۹۸ با هدف ارائه بهترین محصولات دیجیتال با بالاترین کیفیت و مناسب‌ترین قیمت شروع به کار کرد.
                                ما معتقدیم که همه باید به تکنولوژی روز دنیا دسترسی داشته باشند.
                            </p>

                            <p className="text-gray-600 leading-relaxed mb-4">
                                امروز پس از ۵ سال فعالیت مستمر، بیش از ۵۰,۰۰۰ مشتری راضی داریم و جزو ۱۰ فروشگاه برتر آنلاین کشور هستیم.
                            </p>

                            <p className="text-gray-600 leading-relaxed">
                                هدف ما ایجاد تجربه خریدی لذت‌بخش و مطمئن برای شما عزیزان است.
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-purple-600 to-indigo-600 p-8 md:p-10 flex items-center justify-center">
                            <div className="text-center text-white">
                                <div className="text-7xl mb-4">🎯</div>
                                <h3 className="text-2xl font-bold mb-2">چشم انداز</h3>
                                <p className="text-purple-100">
                                    اولین انتخاب شما در خرید آنلاین
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* آمار و ارقام */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                    <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
                        <div className="text-4xl mb-2">📦</div>
                        <div className="text-2xl font-bold text-purple-600">۵۰,۰۰۰+</div>
                        <div className="text-gray-500 text-sm">
                            محصولات فروخته شده
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
                        <div className="text-4xl mb-2">😊</div>
                        <div className="text-2xl font-bold text-purple-600">۵۰,۰۰۰+</div>
                        <div className="text-gray-500 text-sm">
                            مشتریان راضی
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
                        <div className="text-4xl mb-2">⭐</div>
                        <div className="text-2xl font-bold text-purple-600">۴.۸</div>
                        <div className="text-gray-500 text-sm">
                            میانگین امتیاز
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
                        <div className="text-4xl mb-2">🏆</div>
                        <div className="text-2xl font-bold text-purple-600">۱۰+</div>
                        <div className="text-gray-500 text-sm">
                            جوایز کسب شده
                        </div>
                    </div>
                </div>

                {/* ارزش‌های ما */}
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
                    <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
                        ارزش‌های ما
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center">
                            <div className="text-5xl mb-3">
                                ✅
                            </div>
                            <h3 className="font-bold text-lg">ضمانت اصالت کالا</h3>
                            <p className="text-gray-500 text-sm">همه محصولات اصل و با گرانتی</p>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl mb-3">🚚</div>
                            <h3 className="font-bold text-lg mb-2">ارسال سریع</h3>
                            <p className="text-gray-500 text-sm">ارسال به تمام نقاط کشور در 24 ساعت </p>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl mb-3">💎</div>
                            <h3 className="font-bold text-lg mb-2">بهترین قیمت</h3>
                            <p className="text-gray-500 text-sm">تضمین بهترین قیمت بازار</p>
                        </div>
                    </div>
                </div>

                {/* تیم ما */}
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-8">تیم ما</h2>
                    <div className="grid md:grid-cols-3 gap-6">

                        <div className="bg-white rounded-2xl shadow-md p-6">
                            <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl text-white">
                                👨‍💼
                            </div>
                            <h3 className="font-bold text-lg">علی محمدی</h3>
                            <p className="text-purple-600 text-sm mb-2">مدیرعامل</p>
                            <p className="text-gray-500 text-sm">بنیان گذار سام شاپ با 10 سال تجربه</p>
                        </div>

                        <div className="bg-white rounded-2xl shadow-md p-6">
                            <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl text-white">
                                👩‍💻
                            </div>
                            <h3 className="font-bold text-lg">سارا احمدی</h3>
                            <p className="text-purple-600 text-sm mb-2">مدیر فنی</p>
                            <p className="text-gray-500 text-sm">متخصص توسعه وب و هوش مصنوعی</p>
                        </div>

                        <div className="bg-white rounded-2xl shadow-md p-6">
                            <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl text-white">
                                📦
                            </div>
                            <h3 className="font-bold text-lg">رضا کریمی</h3>
                            <p className="text-purple-600 text-sm mb-2">دیر لجستیک</p>
                            <p className="text-gray-500 text-sm">مدیریت زنجیره تامین و ارسال</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage;