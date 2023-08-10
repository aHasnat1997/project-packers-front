import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomeLayout from "../pages/Home/HomeLayout";
import AllProductsLayout from "../pages/AllProducts/AllProductsLayouts";
import SingleProductLayout from "../pages/SingleProduct/SingleProductLayout";
import AuthenticationLayout from "../pages/AuthenticationPages/AuthenticationLayout";
import LoginPage from "../pages/AuthenticationPages/Login/LoginPage";
import SingUpPage from "../pages/AuthenticationPages/SingUp/SingUpPage";
import AccountRecoveryPage from "../pages/AuthenticationPages/AccountRecovery/AccountRecoveryPage";
import OTPVerificationPage from "../pages/AuthenticationPages/OTPVerification/OTPVerificationPage";
import NewPasswordPage from "../pages/AuthenticationPages/NewPassword/NewPasswordPage";
import AddToCartLayoutPage from "../pages/AddToCart/AddToCartLayoutPage";
import CheckoutLayoutPage from "../pages/Checkout/CheckoutLayoutPage";
import BlogLayout from "../pages/Blog/BlogLayout";
import SingleBlogLayout from "../pages/SingleBlog/SingleBlogLayout";
import AboutUs from "../pages/AboutUs/AboutUs";
import FAQPage from "../pages/FAQ/FAQPage";
import Notification from "../pages/Notification/Notification";
import MyAccountLayout from "../pages/MyAccount/MyAccountLayout";
import ProtectedRoute from "./ProtectedRoute";
import OrdersTable from "../pages/MyAccount/OutletComponents/OrdersTable";
import AccountDetails from "../pages/MyAccount/OutletComponents/AccountDetails";
import DashboardMainLayout from "../Dashboard/DashboardMainLayout";
import DashboardLayout from "../Dashboard/DDPages/DashboardPage/DashboardLayout";
import OrderLayout from "../Dashboard/DDPages/OrderPage/AllOrders/OrderLayout";
import AdminProductsLayout from "../Dashboard/DDPages/AdminProductsPage/AdminProductsLayout";
import Customers from "../Dashboard/DDPages/Customers/Customers";
import Support from "../Dashboard/DDPages/Support/Support";
import Staff from "../Dashboard/DDPages/AdminStaff/Staff";
import AllCustomers from "../Dashboard/DDPages/Customers/AllCustomers";
import SingleCustomer from "../Dashboard/DDPages/Customers/SingleCustomer";
import AddNewCustomer from "../Dashboard/DDPages/Customers/AddNewCustomer";
import ItemRequestLayout from "../Dashboard/DDPages/OrderPage/ItemRequest/ItemRequestLayout";
import AllItemRequest from "../Dashboard/DDPages/OrderPage/ItemRequest/AllItemRequest";
import SingleItemRequest from "../Dashboard/DDPages/OrderPage/ItemRequest/SingleItemRequest";
import AllOrders from "../Dashboard/DDPages/OrderPage/AllOrders/AllOrders";
import SingleOrder from "../Dashboard/DDPages/OrderPage/AllOrders/SingleOrder";
import AllProducts from "../Dashboard/DDPages/AdminProductsPage/AllProducts";
import AddProduct from "../Dashboard/DDPages/AdminProductsPage/AddProduct";
import DiscountLayout from "../Dashboard/DDPages/DiscountPage/DiscountLayout";
import AllDiscountList from "../Dashboard/DDPages/DiscountPage/AllDiscountList";
import AddDiscount from "../Dashboard/DDPages/DiscountPage/AddDiscount";
import CategoryLayout from "../Dashboard/DDPages/CategoryPage/CategoryLayout";
import AllCategory from "../Dashboard/DDPages/CategoryPage/AllCategory";
import SupportRight from "../Dashboard/DDPages/Support/SupportRight";
import SupportHome from "../Dashboard/DDPages/Support/SupportHome";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <HomeLayout />,
            },
            {
                path: '/all-products',
                element: <AllProductsLayout />
            },
            {
                path: '/product',
                element: <SingleProductLayout />
            },
            {
                path: '/cart',
                element: <AddToCartLayoutPage />
            },
            {
                path: '/checkout',
                element: <CheckoutLayoutPage />
            },
            {
                path: '/blog',
                element: <BlogLayout />
            },
            {
                path: '/blog/9699669699669',
                element: <SingleBlogLayout />
            },
            {
                path: '/about-us',
                element: <AboutUs />
            },
            {
                path: '/faq',
                element: <FAQPage />
            },
            {
                path: '/notification',
                element: <Notification />
            },
            {
                path: '/account',
                element: <ProtectedRoute><MyAccountLayout /></ProtectedRoute>,
                children: [
                    {
                        path: '/account/order',
                        element: <ProtectedRoute><OrdersTable /></ProtectedRoute>
                    },
                    {
                        path: '/account/details',
                        element: <ProtectedRoute><AccountDetails /></ProtectedRoute>
                    }
                ]
            }
        ]
    },
    {
        path: '/authentication',
        element: <AuthenticationLayout />,
        children: [
            {
                path: '/authentication/log-in',
                element: <LoginPage />
            },
            {
                path: '/authentication/sing-up',
                element: <SingUpPage />
            },
            {
                path: '/authentication/account-recovery',
                element: <AccountRecoveryPage />
            },
            {
                path: '/authentication/otp-verification',
                element: <OTPVerificationPage />
            },
            {
                path: '/authentication/new-password',
                element: <NewPasswordPage />
            }
        ]
    },
    {
        path: '/admin',
        element: <ProtectedRoute><DashboardMainLayout /></ProtectedRoute>,
        children: [
            {
                path: '',
                element: <ProtectedRoute><DashboardLayout /></ProtectedRoute>
            },
            {
                path: 'request',
                element: <ProtectedRoute><ItemRequestLayout /></ProtectedRoute>,
                children: [
                    {
                        path: '',
                        element: <ProtectedRoute><AllItemRequest /></ProtectedRoute>
                    },
                    {
                        path: ':id',
                        element: <ProtectedRoute><SingleItemRequest /></ProtectedRoute>
                    }
                ]
            },
            {
                path: 'orders',
                element: <ProtectedRoute><OrderLayout /></ProtectedRoute>,
                children: [
                    {
                        path: '',
                        element: <ProtectedRoute><AllOrders /></ProtectedRoute>
                    },
                    {
                        path: ':id',
                        element: <ProtectedRoute><SingleOrder /></ProtectedRoute>
                    }
                ]
            },
            {
                path: 'products',
                element: <ProtectedRoute><AdminProductsLayout /></ProtectedRoute>,
                children: [
                    {
                        path: '',
                        element: <ProtectedRoute><AllProducts /></ProtectedRoute>
                    },
                    {
                        path: 'add-product',
                        element: <ProtectedRoute><AddProduct /></ProtectedRoute>
                    },
                    {
                        path: ':id',
                        element: <ProtectedRoute><AddProduct /></ProtectedRoute>
                    }
                ]
            },
            {
                path: 'discount',
                element: <ProtectedRoute><DiscountLayout /></ProtectedRoute>,
                children: [
                    {
                        path: '',
                        element: <ProtectedRoute><AllDiscountList /></ProtectedRoute>
                    },
                    {
                        path: 'add-coupon',
                        element: <ProtectedRoute><AddDiscount /></ProtectedRoute>
                    }
                ]
            },
            {
                path: 'category',
                element: <ProtectedRoute><CategoryLayout /></ProtectedRoute>,
                children: [
                    {
                        path: '',
                        element: <ProtectedRoute><AllCategory /></ProtectedRoute>
                    }
                ]
            },
            {
                path: 'customers',
                element: <ProtectedRoute><Customers /></ProtectedRoute>,
                children: [
                    {
                        path: '',
                        element: <ProtectedRoute><AllCustomers /></ProtectedRoute>
                    },
                    {
                        path: ':id',
                        element: <ProtectedRoute><SingleCustomer /></ProtectedRoute>
                    },
                    {
                        path: 'add-customer',
                        element: <ProtectedRoute><AddNewCustomer /></ProtectedRoute>
                    }
                ]
            },
            {
                path: 'support',
                element: <ProtectedRoute><Support /></ProtectedRoute>,
                children: [
                    {
                        path: '',
                        element: <ProtectedRoute><SupportHome /></ProtectedRoute>
                    },
                    {
                        path: ':id',
                        element: <ProtectedRoute><SupportRight /></ProtectedRoute>
                    }
                ]
            },
            {
                path: 'staff',
                element: <ProtectedRoute><Staff /></ProtectedRoute>
            }
        ]
    }
]);
