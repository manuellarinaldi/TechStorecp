import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import type { Produto } from '../types/Produto';
import { getProdutoPorId } from '../services/api';
import { Loading } from '../components/Loading';
import { ErrorMessage } from '../components/ErrorMessage';
import './Detalhes.css';

export const Detalhes = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [produto, setProduto] = useState<Produto | null>(null);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduto = async () => {
      try {
        const data = await getProdutoPorId(Number(id));
        if (!data) throw new Error('Produto não encontrado');
        setProduto(data);
      } catch (err) {
        setErro(err instanceof Error ? err.message : 'Erro desconhecido');
      } finally {
        setLoading(false);
      }
    };
    fetchProduto();
  }, [id]);

  if (loading) return <Loading mensagem="Carregando produto..." />;
  if (erro) return <ErrorMessage mensagem={erro} />;

  return (
    <div className="detalhes-page">
      <button onClick={() => navigate('/produtos')}>← Voltar</button>
      {produto && (
        <>
          <img src={produto.imagem} alt={produto.nome} />
          <span className="detalhes-categoria">{produto.categoria}</span>
          <h1>{produto.nome}</h1>
          <p className="detalhes-preco">R$ {produto.preco.toFixed(2)}</p>
          <p className="detalhes-descricao">{produto.descricaoDetalhada}</p>
        </>
      )}
    </div>
  );
};