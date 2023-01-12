import { Route, Routes } from "react-router-dom";
import DashboardPageContainer from "./pages/dashboard/containers/DashboardPageContainer.jsx";
import { QueryClient, QueryClientProvider } from "react-query";
import SearchPageContainer from "./pages/search/containers/SearchPageContainer.jsx";
import "./App.css";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<DashboardPageContainer/>}/>
        <Route path="/search" element={<SearchPageContainer/>}/>
      </Routes>
    </QueryClientProvider>
  );
};

export default App;
