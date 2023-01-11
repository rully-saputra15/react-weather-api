import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Route, Routes} from "react-router-dom";
import DashboardPageContainer from "./pages/dashboard/containers/DashboardPageContainer.jsx";
import {QueryClient, QueryClientProvider} from "react-query";

const App = () => {
    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            <Routes>
                <Route path="/" element={<DashboardPageContainer />} />
            </Routes>
        </QueryClientProvider>
    )
}

export default App
