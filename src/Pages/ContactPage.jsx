import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import useScrollReveal from "../components/useScrollReveal";
import Accordion from '../components/Accordion';
import { Toaster, toast } from 'react-hot-toast'

//تعریف اعتبار با yup
const contactSchema = yup.object({
    name: yup
        .string()
        .required('نام و نام خانوادگی الزامی است')
        .min(3, 'نام باید حداقل 3 کاراکتر باشد')
        .max(50, 'نام حداکثر 50 کاراکتر باشد'),

    email: yup
        .string()
        .required('ایمل الزامی است')
        .email('ایمیل معتبر نیست')
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'ایمیل معتبر نیست'),

    phone: yup
        .string()
        .required('شماره تماس الزامی است')
        .matches(/^09[0-9]{9}$/, 'شماره تماس باید با 09 شروع شود و رقم باشد'),

    subject: yup
        .string()
        .required('موضوع پیام الزامی است')
        .min(4, 'موضوع باید حداقل 4 کاراکتر باشد')
        .max(100, 'موضوع حداکثر 100 کاراکتر باشد'),

    message: yup
        .string()
        .required('متن پیام الزامی است')
        .min(10, 'متن پیام باید حداقل ۱۰ کاراکتر باشد')
        .max(500, 'متن پیام حداکثر ۵۰۰ کاراکتر باشد'),
})

function ContactPage() {
    const [submitted, setSubmitted] = useState(false)
    // استفاده از react-hook-form
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset
    } = useForm({
        resolver: yupResolver(contactSchema),
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        }
    })

    //تابع ارسال فرم
    const onSubmit = async (data) => {
        console.log('فرم ارسال شد:', data)

        // اینجا می‌تونی API رو بزنی
        // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) })

        // نمایش نوتیفیکیشن موفقیت
        toast.success('پیام شما با موفقیت ارسال شد! به زودی با شما تماس می‌گیریم.', {
            duration: 3000,
            position: 'bottom-left',
            icon: '✅',
            style: {
                background: '#10b981',
                color: '#fff',
                padding: '12px 24px',
                borderRadius: '16px',
                direction: 'rtl',
            },
        })

        // پاک کردن فرم
        reset()
    }


    useScrollReveal('.start-item')


    return (

        <div className="bg-gray-50 min-h-screen py-12 start-item">
            <div className="container mx-auto px-4">

                {/* هدر صفحه */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        تماس با ما
                    </h1>
                    <div className="w-24 h-1 bg-purple-600 mx-auto rounded-full"></div>
                    <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                        ما همیشه آماده شنیدن نظرات و پاسخ به سوالات شما هستیم
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* اطلاعات تماس - سمت راست */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
                            <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                                <span>📞</span> اطلاعات تماس
                            </h2>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4 group">
                                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-2xl">
                                        📍
                                    </div>
                                    <div className="">
                                        <h3 className="font-semibold text-gray-800">
                                            آدرس
                                        </h3>
                                        <p className="text-gray-500 text-sm">
                                            تهران، خیابان ولیعصر، بالاتر از میدان ونک، پلاک ۱۲
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 group">
                                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-2xl">
                                        📞
                                    </div>
                                    <div className="">
                                        <h3 className="font-semibold text-gray-800">
                                            تلفن های تماس
                                        </h3>
                                        <p className="text-gray-500 text-sm">
                                            ۰۲۱-۱۲۳۴۵۶۷۸
                                        </p>
                                        <p className="text-gray-500 text-sm">
                                            ۰۲۱-۸۷۶۵۴۳۲۱
                                        </p>
                                        <p className="text-gray-500 text-sm">
                                            ۰۹۱۲-۳۴۵-۶۷۸۹
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 group">
                                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                                        📧
                                    </div>
                                    <div className="">
                                        <h3 className="font-semibold text-gray-800">
                                            ایمیل
                                        </h3>
                                        <p className="text-gray-500 text-sm">
                                            info@samshop.com
                                        </p>

                                        <p className="text-gray-500 text-sm">
                                            support@samshop.com
                                        </p>

                                        <p className="text-gray-500 text-sm">
                                            sales@samshop.com
                                        </p>
                                    </div>
                                </div>

                                <div className="fle items-start gap-4 group">
                                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                                        🕒
                                    </div>
                                    <div className="">
                                        <h3 className="font-semibold text-gray-800">
                                            ساعات کاری
                                        </h3>

                                        <p className="text-gray-500 text-sm">
                                            شنبه تا چهارشنبه: ۹ صبح تا ۱۸
                                        </p>

                                        <p className="text-gray-500 text-sm">
                                            پنجشنبه: ۹ صبح تا ۱۳
                                        </p>

                                        <p className="text-gray-500 text-sm">
                                            جمعه: تعطیل
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* شبکه های اجتماعی */}
                        <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
                            <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                                <span>🌐</span> شبکه‌های اجتماعی
                            </h2>
                            <div className="flex justify-around">
                                <div className="text-center group cursor-pointer">
                                    <div className="w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full flex items-center justify-center text-2xl text-white group-hover:scale-110 transition-all duration-300">
                                        📷
                                    </div>
                                    <p className="text-xs to-gray-500 mt-2">اینستاگرام</p>
                                </div>

                                <div className="text-center group cursor-pointer">
                                    <div className="w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full flex items-center justify-center text-2xl text-white group-hover:scale-110 transition-all duration-300">
                                        📘
                                    </div>
                                    <p className="text-xs to-gray-500 mt-2">تلگرام</p>
                                </div>

                                <div className="text-center group cursor-pointer">
                                    <div className="w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full flex items-center justify-center text-2xl text-white group-hover:scale-110 transition-all duration-300">
                                        💬
                                    </div>
                                    <p className="text-xs to-gray-500 mt-2">واتساپ</p>
                                </div>

                                <div className="text-center group cursor-pointer">
                                    <div className="w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full flex items-center justify-center text-2xl text-white group-hover:scale-110 transition-all duration-300">
                                        🐦
                                    </div>
                                    <p className="text-xs to-gray-500 mt-2">توییتر</p>
                                </div>
                            </div>
                        </div>

                        {/* نقشه ساده */}
                        <div className="bg-white rounded-2xl shadow-md p-6">
                            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                <span>🗺️</span> موقعیت ما
                            </h2>
                            <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl h-48 flex items-center justify-center relative overflow-hidden">
                                <div className="text-center">
                                    <div className="text-5xl mb-2">📍</div>
                                    <p className="text-gray-600 text-sm">
                                        تهران - میدان ونک
                                    </p>
                                </div>
                                {/* گرادینت css یک نقشه ساده */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-indigo-600"></div>
                            </div>

                            <p className="text-gray-400 text-xs text-center mt-3">
                                برای مشاهده مسیر کلیک کنید
                            </p>
                        </div>
                    </div>

                    {/* فرم تماس - سمت چپ */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                                <span>✉️</span> ارسال پیام
                            </h2>

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    {/* فیلد نام */}
                                    <div className="">
                                        <label className="block text-gray-700 font-medium mb-2">
                                            نام و نام خانوادگی <span className="text-red-500">*</span>
                                        </label>
                                        <input type="text"
                                            {...register('name')}
                                            className={`w-full border ${errors.name ? 'border-red-500' : 'border-gray-300'}rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all text-[#111]`}
                                            placeholder="امیر محمدی"
                                        />
                                        {errors.name && (
                                            <p className="text-red-500 text-xs mt-1">
                                                {errors.name.message}
                                            </p>
                                        )}
                                    </div>

                                    {/* فیلد ایمیل */}
                                    <div className="">
                                        <label className="block text-gray-700 font-medium mb-2">
                                            ایمیل <span className="text-red-500">*</span>
                                        </label>
                                        <input type="email"
                                            {...register('email')}
                                            className={`w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'}rounded-xl px-3 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all text-[#111]`}
                                            placeholder="alireza@example.com"
                                        />
                                        {errors.email && (
                                            <p className="text-red-500 text-xs mt-1">
                                                {errors.email.message}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">

                                    {/* فیلد تلفن */}
                                    <div className="">
                                        <label className="block text-gray-700 font-medium mb-2">
                                            شماره تماس <span className="text-red-500">*</span>
                                        </label>
                                        <input type="tel"
                                            {...register('phone')}
                                            className={`w-full border ${errors.phone ? 'border-red-500' : 'border-gray-300'}rounded-xl px-3 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all text-[#111]`}
                                            placeholder="09123456789"
                                        />
                                        {errors.phone && (
                                            <p className="text-red-500 text-xs mt-1">
                                                {errors.phone.message}
                                            </p>
                                        )}
                                    </div>

                                    {/* فیلد موضوع */}
                                    <div className="">
                                        <label className="block text-gray-700 font-medium mb-2">
                                            موضوع <span className="text-red-500">*</span>
                                        </label>
                                        <input type="text"
                                            {...register('subject')}
                                            className={`w-full border ${errors.subject ? 'border-red-500' : 'border-gray-300'}rounded-xl px-3 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all text-[#111]`}
                                            placeholder="مشکل در سفارش، مشاوره خرید، ..."
                                        />
                                        {errors.subject && (
                                            <p className="text-red-500 text-xs mt-1">
                                                {errors.subject.message}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* فیلد پیام */}
                                <div className="mb-6">
                                    <label className="block text-gray-700 font-medium mb-2">
                                        متن پیام <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        {...register('message')}
                                        rows={6}
                                        className={`w-full border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none text-[#111]`}
                                        placeholder="پیام خود را بنویسید..."
                                    ></textarea>
                                    {errors.message && (
                                        <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
                                    )}
                                    {/* <p className="text-gray-400 text-xs mt-2 text-left">
                                        {formData?.message?.length || 0}/500 کاراکتر
                                    </p> */}
                                </div>

                                {/* دکمه ارسال */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-3 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            در حال ارسال ...
                                        </>
                                    ) : (
                                        <>
                                            📨 ارسال پیام
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* سوالات متداول */}
                <div className="mt-12 bg-white rounded-2xl shadow-md p-8">
                    <h2 className="text-2xl font-bold text-gray-800 text-center mb-16 ">
                        ❓ سوالات متداول
                    </h2>

                    <div className="w-full space-y-7 ">
                        <Accordion
                            question="🤔 چگونه می‌توانم سفارش خود را پیگیری کنم؟"
                            answer="بعد از ثبت سفارش، کد رهگیری برای شما پیامک می‌شود و می‌توانید از طریق پنل کاربری سفارشتان را پیگیری کنید."
                        />

                        <Accordion
                            question="🚚 هزینه ارسال چقدر است؟"
                            answer="هزینه ارسال برای خرید‌های بالای ۵۰۰ هزار تومان رایگان است. در غیر این صورت ۳۵ هزار تومان می‌باشد."
                        />

                        <Accordion
                            question="⏱️ زمان تحویل سفارش چقدر است؟"
                            answer="سفارشات در تهران ۲۴ ساعته و در شهرستان‌ها ۳ تا ۵ روز کاری تحویل داده می‌شوند."
                        />

                        <Accordion
                            question="🔄 چگونه می‌توانم کالا را مرجوع کنم؟"
                            answer="شما تا ۷ روز پس از تحویل سفارش، می‌توانید کالا را با شرایط مشخص شده مرجوع کنید."
                        />

                        <Accordion
                            question="💳 روش‌های پرداخت چیست؟"
                            answer="پرداخت آنلاین از طریق درگاه بانکی، کارت به کارت و پرداخت در محل (فقط تهران)."
                        />

                        <Accordion
                            question="🎁 چگونه از تخفیف‌ها استفاده کنم؟"
                            answer="کد تخفیف را در صفحه سبد خرید وارد کنید و از خرید خود لذت ببرید."
                        />


                    </div>
                </div>



            </div>
        </div>
    )
}

export default ContactPage;