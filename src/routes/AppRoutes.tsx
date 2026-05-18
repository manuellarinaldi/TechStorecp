import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Produtos } from '../pages/Produtos';
import { Detalhes } from '../pages/Detalhes';
import { Categorias } from '../pages/Categorias';
import { CategoryProducts } from '../pages/CategoryProducts';
import { About } from '../pages/About';
import { Erro } from '../pages/Erro';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/produtos/:id" element={<Detalhes />} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/categorias/:categoria" element={<CategoryProducts />} />
        <Route path="/sobre" element={<About />} />
        <Route path="*" element={<Erro />} />
      </Routes>
    </BrowserRouter>
  );
}