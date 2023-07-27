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
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthenticationLayout />,
        children: [
            {
                path: '/auth/log-in',
                element: <LoginPage />
            },
            {
                path: '/auth/sing-up',
                element: <SingUpPage />
            },
            {
                path: '/auth/account-recovery',
                element: <AccountRecoveryPage />
            },
            {
                path: '/auth/otp-verification',
                element: <OTPVerificationPage />
            },
            {
                path: '/auth/new-password',
                element: <NewPasswordPage />
            }
        ]
    }
]);
