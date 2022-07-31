import { FunctionComponent } from "react";
import { GET_ALL_ITEM_API } from "../../api/base-api";
import useFetch from "../../hooks/useFetchHook";
import TableBase from "./TableBase";

interface ItemTableProps {
    
}
 
const ItemTable: FunctionComponent<ItemTableProps> = () => {
    const { data, error } = useFetch<any[]>(GET_ALL_ITEM_API);

  const itemHeaders = [
    "Item ID",
    "Name",
    "Description",
    "Available Stock",
    "Unit Price",
    "Unit Cost",
  ];

  const renderTable = () => {
    if (!!data && Array.isArray(data)) {
      return data.map((item) => (
        <tr key={item.itemid}>
          <td>{item.itemid}</td>
          <td>{item.name}</td>
          <td>{item.description}</td>
          <td>{item.avStock}</td>
          <td>{item.unitPrice}</td>
          <td>{item.unitCost}</td>
        </tr>
      ));
    }
  };

  return (
    <>
      <h1 className="text-stone-600 text-xl font-semibold">{"Item Table"}</h1>
      <TableBase headers={itemHeaders}>
        <tbody>{renderTable()}</tbody>
      </TableBase>
    </>
  );
}
 
export default ItemTable;