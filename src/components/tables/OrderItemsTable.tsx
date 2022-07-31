import { FunctionComponent, useState } from "react";
import TableBase from "./TableBase";

interface OrderItemsProps {
  data: any[];
}

const OrderItemsTable: FunctionComponent<OrderItemsProps> = (props) => {
  const [data, setData] = useState(props.data);

  const headers = [
    "Item Name",
    "Description",
    "Quantity",
    "Unit Price",
    "Sub Total",
  ];

  const renderTable = () => {
    if (!!data && Array.isArray(data)) {
      return data.map((item) => (
        <tr key={item.item}>
          <td>{item.item}</td>
          <td>{item.description}</td>
          <td>{item.qty}</td>
          <td>{item.unitPrice}</td>
          <td>{item.subTotal}</td>
        </tr>
      ));
    }
  };
  return (
    <>
      <h1 className="text-stone-600 text-xl font-semibold">{"Order Table"}</h1>
      <TableBase headers={headers}>
        <tbody>{renderTable()}</tbody>
      </TableBase>
    </>
  );
};

export default OrderItemsTable;
