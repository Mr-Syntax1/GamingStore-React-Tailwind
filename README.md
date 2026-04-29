<div align="center">

# 🎮 Sam Shop - Modern E-commerce Website

![React](https://img.shields.io/badge/React-19.0.0-61dafb?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0.0-38bdf8?style=for-the-badge&logo=tailwindcss)
![React Router](https://img.shields.io/badge/React_Router-7.0.0-ca4245?style=for-the-badge&logo=reactrouter)
![Vite](https://img.shields.io/badge/Vite-6.0.0-646cff?style=for-the-badge&logo=vite)
![React Hook Form](https://img.shields.io/badge/React_Hook_Form-7.54.0-ec5990?style=for-the-badge&logo=reacthookform)

</div>

---

## 📖 About The Project

**Sam Shop** is a modern, fully-featured e-commerce website built with **React** and **Tailwind CSS**. This project includes all the essential features of a real online store including shopping cart, product pages, contact form, dark/light mode, and more.

### ✨ Key Features

| Feature | Description |
|---------|-------------|
| 🌓 **Dark/Light Mode** | Theme switching with localStorage persistence |
| 🛒 **Shopping Cart** | Add/remove items, update quantities, calculate totals |
| 📱 **Fully Responsive** | Works perfectly on mobile, tablet, and desktop |
| 🔍 **Product Filtering** | Filter by category and search by name/description |
| 📄 **Blog Section** | Articles with category filtering |
| 📞 **Contact Form** | Validation with react-hook-form + yup |
| 🎨 **Beautiful UI** | Modern design with smooth animations |
| ⚡ **Fast Performance** | Built with Vite for lightning-fast builds |

---

## 🗺️ Pages & Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | HomePage | Hero section, categories, featured products |
| `/shop` | ShopPage | All products with filters and search |
| `/about` | AboutPage | Company info, team, statistics |
| `/blog` | BlogPage | Articles with category filtering |
| `/contact` | ContactPage | Contact form with validation |
| `/cart` | CartPage | Shopping cart management |
| `/product/:id` | ProductDetailPage | Detailed product view |
| `*` | NotFoundPage | 404 error page |

---

## 🛠️ Built With

- **[React 19](https://react.dev/)** - UI Library
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Styling Framework
- **[React Router DOM 7](https://reactrouter.com/)** - Navigation & Routing
- **[React Hook Form](https://react-hook-form.com/)** - Form Management
- **[Yup](https://github.com/jquense/yup)** - Form Validation
- **[React Hot Toast](https://react-hot-toast.com/)** - Toast Notifications
- **[Vite](https://vitejs.dev/)** - Build Tool

---

## 📁 Project Structure

```bash
sam-shop/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation bar with theme toggle
│   │   ├── Footer.jsx          # Footer with links & info
│   │   ├── Hero.jsx            # Hero section
│   │   ├── Category.jsx        # Category list
│   │   ├── ProductCard.jsx     # Product card component
│   │   ├── SpecialProducts.jsx # Featured products section
│   │   └── ThemeToggle.jsx     # Dark/light mode button
│   ├── pages/
│   │   ├── HomePage.jsx        # Home page
│   │   ├── ShopPage.jsx        # Shop page with filters
│   │   ├── AboutPage.jsx       # About page
│   │   ├── BlogPage.jsx        # Blog page
│   │   ├── ContactPage.jsx     # Contact page with form
│   │   ├── CartPage.jsx        # Shopping cart page
│   │   ├── ProductDetailPage.jsx # Product details
│   │   └── NotFoundPage.jsx    # 404 page
│   ├── context/
│   │   └── ThemeContext.jsx    # Theme management
│   ├── data/
│   │   └── products.js         # Products and categories data
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/sam-shop.git
cd sam-shop
```
2. **Install dependencies**

```bash
npm install
```
3. **Run the development server**

```bash
npm run dev
```
Open your browser

Visit http://localhost:5173

---

<div align="center">
⭐ Don't forget to star this repository if you found it helpful! ⭐

Made with ❤️ by [Mr-Syntax1]

</div>
