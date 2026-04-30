import mobile1 from '../assets/mobile1.webp';
import mobile2 from '../assets/mobile2.webp';
import mobile3 from '../assets/mobile3.webp';
import airpod from '../assets/airpod.webp';
import appleWatch1 from '../assets/appleWatch1.webp';
import appleWatch2 from '../assets/appleWatch2.webp';
import console1 from '../assets/console1.webp';
import console2 from '../assets/console2.webp';
import console3 from '../assets/console3.webp';
import headphone from '../assets/headphone.webp';
import labtop1 from '../assets/labtop1.webp';
import labtop2 from '../assets/labtop2.webp';
import labtop3 from '../assets/labtop3.webp';

import cd1 from '../assets/cd1.webp'
import cd2 from '../assets/cd2.webp'
import cd3 from '../assets/cd3.webp'
import cd4 from '../assets/cd4.webp'
import cd5 from '../assets/cd5.webp'
import cd6 from '../assets/cd6.webp'
import gameing1 from '../assets/gameing1.webp'
import gameing2 from '../assets/gameing2.webp'
import manitor1 from '../assets/manitor1.webp'
import manitor2 from '../assets/manitor2.webp'
import manitor3 from '../assets/manitor3.webp'
import manitor4 from '../assets/manitor4.webp'
import manitor5 from '../assets/manitor5.webp'

export const categories = [
    { id: 1, name: "ساعت هوشمند", icon: "⌚" },
    { id: 2, name: "هدفون", icon: "🎧" },
    { id: 3, name: "لپ تاپ", icon: "💻" },
    { id: 4, name: "گوشی", icon: "📱" },
    { id: 5, name: "پلی استیشن", icon: "🎮" },
    { id: 6, name: "بازی و سی دی", icon: "💿" },
    { id: 7, name: "وسایل گیمینگ", icon: "🖱️" },
    { id: 8, name: "مانیتور", icon: "🖥️" },
]
export const products = [

    {
        id: 1,
        ProductName: 'iPhone 17 Pro Max',
        category: "گوشی",
        price: 150900900,
        oldPrice: 179900000,
        description: "پیشرفته‌ترین گوشی اپل با تراشه A19 Pro، دوربین ۴۸ مگاپیکسلی و نمایشگر ۱۲۰ هرتز Super Retina XDR",
        image: mobile1,
        isSpecial: true,
        isNew: true,
        rating: 4.9
    },
    {
        id: 2,
        ProductName: 'Redmi 13x',
        category: "گوشی",
        description: "باتری ۵۰۰۰ میلی‌آمپری، نمایشگر ۱۲۰ هرتز AMOLED، دوربین ۱۰۸ مگاپیکسلی با شارژ سریع ۶۷ وات",
        price: 38990000,
        oldPrice: null,
        image: mobile2,
        isSpecial: false,
        isNew: true,
        rating: 4.2
    },
    {
        id: 3,
        ProductName: 'Mobile H3 64',
        category: "گوشی",
        description: "گوشی اقتصادی با رم ۶ گیگ و حافظه ۱۲۸ گیگ، باتری پرطرفدار ۶۰۰۰ میلی‌آمپری و نمایشگر ۹۰ هرتز",
        price: 136990000,
        oldPrice: 149990000,
        image: mobile3,
        isSpecial: false,
        isNew: false,
        rating: 3.8
    },

    {
        id: 4,
        ProductName: 'AirPods Pro 2',
        category: "هدفون",
        description: "هدفون بی‌سیم اپل با قابلیت حذف نویز فعال (ANC)، کیفیت صدای استثنایی و مقاومت در برابر آب IPX4",
        price: 1509900,
        oldPrice: 1799000,
        image: airpod,
        isSpecial: true,
        isNew: false,
        rating: 4.8
    },

    {
        id: 5,
        ProductName: 'Sony WH-1000XM5',
        category: "هدفون",
        description: "بهترین هدفون حذف نویز دنیا با کیفیت صدای فوق العاده و با قیمت فوق العاده",
        price: 1509900,
        oldPrice: 1799000,
        image: headphone,
        isSpecial: true,
        isNew: true,
        rating: 4.9
    },

    {
        id: 6,
        ProductName: 'Apple Watch Series 9',
        category: "ساعت هوشمند",
        description: "ساعت هوشمند اپل با نمایشگر همیشه روشن، سنسور اندازه‌گیری اکسیژن خون، ECG و ردیابی پیشرفته ورزشی",
        price: 27990000,
        oldPrice: null,
        image: appleWatch1,
        isSpecial: false,
        isNew: false,
        rating: 4.5
    },

    {
        id: 7,
        ProductName: 'PlayStation 5',
        category: "پلی استیشن",
        description: "کنسول بازی نسل نهم سونی با پشتیبانی از رزولوشن ۸K، سرعت فوق‌العاده SSD و کنترلر DualSense پیشرفته",
        price: 1509000,
        oldPrice: 2200000,
        image: console1,
        isSpecial: true,
        isNew: false,
        rating: 4.7
    },
    {
        id: 8,
        ProductName: 'PlayStation 5 Digital',
        category: "پلی استیشن",
        description: "نسخه دیجیتال PS5 بدون درایو دیسک، با طراحی مدرن و کتابخانه عظیم بازی‌های انحصاری سونی",
        price: 48990000,
        oldPrice: 55990000,
        image: console2,
        isSpecial: false,
        isNew: true,
        rating: 4.6
    },
    {
        id: 9,
        ProductName: 'PlayStation 4 Digital',
        category: "پلی استیشن",
        description: "نسخه دیجیتال PS4 بدون درایو دیسک، با طراحی مدرن و کتابخانه عظیم بازی‌های انحصاری سونی",
        price: 27990000,
        oldPrice: null,
        image: console3,
        isSpecial: false,
        isNew: false,
        rating: 4.6
    },

    {
        id: 10,
        ProductName: 'MacBook Pro M3',
        category: "لپ تاپ",
        description: "لپ‌تاپ حرفه‌ای اپل با تراشه M3 Pro، صفحه نمایش Liquid Retina XDR، ۱۶ گیگ رم و ۵۱۲ گیگ SSD",
        price: 136990000,
        oldPrice: 149990000,
        image: labtop1,
        isSpecial: true,
        isNew: true,
        rating: 4.9
    },
    {
        id: 11,
        ProductName: 'ASUS ROG Zephyrus',
        category: "لپ تاپ",
        description: "لپ‌تاپ گیمینگ حرفه‌ای با پردازنده Intel Core i9، کارت گرافیک RTX 4080 و نمایشگر ۲۴۰ هرتز",
        price: 38990000,
        oldPrice: null,
        image: labtop2,
        isSpecial: true,
        isNew: true,
        rating: 5.0
    },
    {
        id: 12,
        ProductName: 'Dell XPS 15',
        category: "لپ تاپ",
        description: "لپ‌تاپ اولترابوک فوق‌باریک دِل با نمایشگر ۴K OLED، پردازنده Intel Core i7 و ۳۲ گیگ رم",
        price: 150990000,
        oldPrice: 179990000,
        image: labtop3,
        isSpecial: false,
        isNew: false,
        rating: 4.4
    },

    {
        id: 13,
        ProductName: 'Assassins Creed Unity',
        category: "بازی و سی دی",
        description: "بازی محبوب Assassins Creed Unity برای پلی استیشن و ایکس باکس، با گرافیک فوق‌العاده و داستان جذاب",
        price: 1500000,
        oldPrice: 2500000,
        image: cd1,
        isSpecial: true,
        isNew: false,
        rating: 4.3
    },
    {
        id: 14,
        ProductName: 'Control',
        category: "بازی و سی دی",
        description: "بازی برنده جوایز Control، تجربه‌ای منحصر‌به‌فرد از دنیای رمزآلود و قدرت‌های ماورایی",
        price: 1200000,
        oldPrice: 1800000,
        image: cd2,
        isSpecial: false,
        isNew: false,
        rating: 4.6
    },
    {
        id: 15,
        ProductName: 'Assassins Creed Revelations',
        category: "بازی و سی دی",
        description: "نسخه کلاسیک Assassins Creed Revelations، پایان حماسه Ezio با داستانی به یادماندنی",
        price: 1000000,
        oldPrice: 1500000,
        image: cd3,
        isSpecial: false,
        isNew: true,
        rating: 4.4
    },
    {
        id: 16,
        ProductName: 'Resident Evil Biohazard',
        category: "بازی و سی دی",
        description: "بازی ترسناک و محبوب Resident Evil Biohazard، بازگشت به ریشه‌های وحشت",
        price: 1800000,
        oldPrice: 2800000,
        image: cd4,
        isSpecial: true,
        isNew: false,
        rating: 4.8
    },
    {
        id: 17,
        ProductName: 'Resident Evil 2 Remake',
        category: "بازی و سی دی",
        description: "نسخه بازسازی شده Resident Evil 2 با گرافیک نسل جدید و گیم‌پلی هیجان‌انگیز",
        price: 1900000,
        oldPrice: 2900000,
        image: cd5,
        isSpecial: true,
        isNew: true,
        rating: 4.9
    },

    {
        id: 18,
        ProductName: 'Call Of Duty MW3',
        category: "بازی و سی دی",
        description: "نسخه بازسازی شده call of duty با گرافیک نسل جدید و گیم‌پلی هیجان‌انگیز",
        price: 1300000,
        oldPrice: 2400000,
        image: cd6,
        isSpecial: true,
        isNew: true,
        rating: 4.9
    },

    {
        id: 19,
        ProductName: 'Samsung Odyssey G7',
        category: "مانیتور",
        description: "مانیتور گیمینگ سامسونگ با نرخ刷新 ۲۴۰ هرتز، صفحه خمیده و کیفیت ۴K",
        price: 25000000,
        oldPrice: 32000000,
        image: manitor1,
        isSpecial: true,
        isNew: true,
        rating: 4.8
    },
    {
        id: 20,
        ProductName: 'LG UltraGear 27GN950',
        category: "مانیتور",
        description: "مانیتور ۴K الجی با نرخ刷新 ۱۴۴ هرتز و پشتیبانی از G-Sync و FreeSync",
        price: 22000000,
        oldPrice: null,
        image: manitor2,
        isSpecial: false,
        isNew: true,
        rating: 4.5
    },
    {
        id: 21,
        ProductName: 'ASUS ROG Swift',
        category: "مانیتور",
        description: "مانیتور حرفه‌ای ASUS با نرخ刷新 ۳۶۰ هرتز، مناسب برای بازی‌های رقابتی",
        price: 28000000,
        oldPrice: 35000000,
        image: manitor3,
        isSpecial: true,
        isNew: false,
        rating: 4.9
    },
    {
        id: 22,
        ProductName: 'Dell UltraSharp U2720Q',
        category: "مانیتور",
        description: "مانیتور ۴K حرفه‌ای برای طراحی و ادیت ویدیو با دقت رنگ فوق‌العاده",
        price: 18000000,
        oldPrice: null,
        image: manitor4,
        isSpecial: false,
        isNew: false,
        rating: 4.3
    },
    {
        id: 23,
        ProductName: 'AOC C24G1',
        category: "مانیتور",
        description: "مانیتور خمیده ۲۴ اینچی با نرخ刷新 ۱۴۴ هرتز، مناسب برای گیمرهای حرفه‌ای",
        price: 12000000,
        oldPrice: 15000000,
        image: manitor5,
        isSpecial: true,
        isNew: false,
        rating: 4.4
    },

    {
        id: 24,
        ProductName: 'Logitech G502 Hero',
        category: "وسایل گیمینگ",
        description: "ماوس گیمینگ حرفه‌ای لاجیتک با سنسور ۲۵K DPI و ۱۱ دکمه قابل برنامه‌ریزی",
        price: 3500000,
        oldPrice: 4500000,
        image: gameing1,
        isSpecial: true,
        isNew: false,
        rating: 4.8
    },
    {
        id: 25,
        ProductName: 'Razer BlackWidow V4',
        category: "وسایل گیمینگ",
        description: "کیبورد مکانیکی مخصوص گیمینگ با سوئیچ‌های سبز ریزر و نورپردازی RGB",
        price: 5500000,
        oldPrice: 7000000,
        image: gameing2,
        isSpecial: true,
        isNew: true,
        rating: 4.9
    },

    {
        id: 26,
        ProductName: 'Apple Watch Series 12',
        category: "ساعت هوشمند",
        description: "ساعت هوشمند اپل با نمایشگر همیشه روشن، سنسور اندازه‌گیری اکسیژن خون، ECG و ردیابی پیشرفته ورزشی",
        price: 25990000,
        oldPrice: 37990000,
        image: appleWatch2,
        isSpecial: false,
        isNew: false,
        rating: 4.5
    },

];