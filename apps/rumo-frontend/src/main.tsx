import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { LandingPage } from './pages/LandingPage.tsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {routes} from "./constants/routes.ts";
import {NotFoundPage} from "./pages/NotFoundPage.tsx";
import {OnboardingPage} from "./pages/OnboardingPage.tsx";
import {App} from "./pages/App.tsx";

const router = createBrowserRouter([
    {path: routes.home, element: <LandingPage />},
    {path: routes.onboarding, element: <OnboardingPage />},
    {path: routes.search, element: <App />},
    {path: '*', element: <NotFoundPage />},
]);
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>

)
