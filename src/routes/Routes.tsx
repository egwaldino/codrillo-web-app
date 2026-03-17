// src/routes.tsx
import { lazy, Suspense } from "react";
import { useRoutes, Navigate } from "react-router-dom";
import { Spinner, Center } from "@chakra-ui/react";
/* import ProtectedRoute from "./components/ProtectedRoute";
 */
// lazy load (opcional)
const SignIn = lazy(() => import("@/app/pages/signin/SignIn").then(m => ({ default: m.SignIn })));
const SignUp = lazy(() => import("@/app/pages/signup/SignUp").then(m => ({ default: m.SignUp })));
const Home = lazy(() => import("@/app/pages/home/Home").then(m => ({ default: m.Home })));
const ForgotPassword = lazy(() => import("@/app/pages/signin/ForgotPassword").then(m => ({ default: m.ForgotPassword })));
const CodeCheck = lazy(() => import("@/app/pages/signin/CodeCheck").then(m => ({ default: m.CodeCheck })));
const ResetPassword = lazy(() => import("@/app/pages/signin/ResetPassword").then(m => ({ default: m.ResetPassword })));
const SetNewPassword = lazy(() => import("@/app/pages/signin/SetNewPassword").then(m => ({ default: m.SetNewPassword })));
const ResetSuccessful = lazy(() => import("@/app/pages/signin/ResetSuccessful").then(m => ({ default: m.ResetSuccessful })));
const Footer = lazy(() => import("@/components/Footer").then(m => ({ default: m.Footer })));
/* const Dashboard = lazy(() => import("./pages/Dashboard").then(m => ({ default: m.Dashboard })));
 */
export default function AppRoutes() {
  const routes = [
    { path: "/signin", element: <SignIn /> },
    { path: "/signup", element: <SignUp /> },
    { path: "/home", element: <Home /> },
    { path: "/forgotpassword", element: <ForgotPassword /> },
    { path: "/codecheck", element: <CodeCheck /> },
    { path: "/resetpassword", element: <ResetPassword /> },
    { path: "/setnewpassword", element: <SetNewPassword /> },
    { path: "/resetsuccessful", element: <ResetSuccessful /> },
    { path: "/footer", element: <Footer /> },

/*     // rota privada: exemplo de /dashboard
    {
      path: "/dashboard",
      element: (
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      ),
    }, */

    // redirect raiz para signin
    { path: "/", element: <Navigate to="/signin" replace /> },

    // fallback 404 -> volta ao signin
    { path: "*", element: <Navigate to="/signin" replace /> },
  ];

  // useRoutes aceita um array de objetos de rota
  return (
    <Suspense fallback={
      <Center h="100vh"><Spinner /></Center>
    }>
      {useRoutes(routes)}
    </Suspense>
  );
}
