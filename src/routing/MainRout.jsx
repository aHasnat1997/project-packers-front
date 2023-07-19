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
import NewPasswordPage from "../pages/AuthenticationPages/NewPasseord/NewPasswordPage";

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
