import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { CategoriesPage } from './pages/CategoriesPage';
import { AboutPage } from './pages/AboutPage';
import { ToastContainer } from './components/Toast/ToastContainer';
import { useCart } from './hooks/useCart';
import { AuthProvider } from './contexts/AuthContext';
import { ToastProvider } from './contexts/ToastContext';

function App() {
  const cartHook = useCart();

  return (
    <ToastProvider>
    <AuthProvider>
      <BrowserRouter>
        <Layout cartHook={cartHook}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage cartHook={cartHook} />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </Layout>
        <ToastContainer />
      </BrowserRouter>
    </AuthProvider>
    </ToastProvider>
  );
}

export default App;