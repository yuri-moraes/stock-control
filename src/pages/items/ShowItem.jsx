import { Link, useParams } from "react-router-dom";
import useStockItems from "../../hooks/useStockItems";
import DeleteButton from "../../components/DeleteButton";

export default function ShowItem() {
  const { getItem } = useStockItems();
  const { id } = useParams();

  const item = getItem(id);

  return (
    <div className="item">
      <h2>{item.title}</h2>
      <Link to={`/items/${item.id}/update`} className="button">
        Atualizar
      </Link>
      <DeleteButton itemId={item.id} itemName={item.title} />
      <div className="row">
        <span>Categoria: {item.category}</span>
        <span>Quantidade em estoque: {item.unity}</span>
        <span>Preço: R$ {item.price.toFixed(2)}</span>
      </div>
      <p>{item.description}</p>
      <div className="row">
        <p>Cadastrado em: {item.createdAt.toDateString()}</p>
        <p>Atualizado em: {item.updatedAt.toDateString()}</p>
      </div>
    </div>
  );
}
