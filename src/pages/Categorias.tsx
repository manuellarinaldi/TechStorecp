import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCategorias } from '../services/api'
import './Categorias.css'

export const Categorias = () => {
  const [categorias, setCategorias] = useState<string[]>([])
  const [carregando, setCarregando] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const carregar = async () => {
      try {
        const lista = await getCategorias()
        setCategorias(lista)
      } finally {
        setCarregando(false)
      }
    }
    carregar()
  }, [])

  const emojis: Record<string, string> = {
    'Notebooks': '💻',
    'Celulares': '📱',
    'Tablets': '📟',
    'Periféricos': '🖱️',
    'Monitores': '🖥️',
    'Acessórios': '🎧',
    'Smartwatches': '⌚',
    'Componentes': '⚙️',
  }

  if (carregando) return <p>Carregando...</p>

  return (
    <section className="categorias-page">
      <div className="categorias-header">
        <h1>Categorias</h1>
        <p>Explore produtos por categoria</p>
      </div>
      <div className="categorias-grid">
        {categorias.map((cat) => (
          <div
            key={cat}
            className="categoria-card"
            onClick={() => navigate(`/categorias/${encodeURIComponent(cat)}`)}
          >
            <span className="categoria-emoji">{emojis[cat] || '📦'}</span>
            <span className="categoria-nome">{cat}</span>
          </div>
        ))}
      </div>
    </section>
  )
}