import ItemForm from "../../components/ItemForm";
import useStockItems from "../../hooks/useStockItems";
import { useParams } from "react-router-dom";

export default function UpdateItem() {
  const { getItem } = useStockItems();
  const { id } = useParams();

  const item = getItem(id);

  return (
    <>
      <h1>Atualizar Item</h1>
      <ItemForm itemToUpdate={item} />
    </>
  );
}
