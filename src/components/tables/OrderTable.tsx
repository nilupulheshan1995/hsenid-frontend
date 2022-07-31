import { FunctionComponent } from "react";
import { GET_ALL_ORDER_API } from "../../api/base-api";
import useFetch from "../../hooks/useFetchHook";
import TableBase from "./TableBase";

interface OrderTableProps {}

const OrderTable: FunctionComponent<OrderTableProps> = () => {
  const { data, error } = useFetch<any[]>(GET_ALL_ORDER_API);

  const orderHeaders = ["Order ID", "Customer ", "Total", "discount","Date", "Edit"];

  const renderTable = () => {
    if (!!data && Array.isArray(data)) {
      return data.map((order) => (
        <tr key={order.order1PK}>
          <td>{order.order1PK}</td>
          <td>{order.customer}</td>
          <td>{order.sellTotal}</td>
          <td>{order.discount}</td>
          <td>{order.date}</td>
          <td>
            <a className="text-blue-700" href={`/order/${order.order1PK}`}>View</a>
          </td>
        </tr>
      ));
    }
  };

  return (
    <>
      <h1 className="text-stone-600 text-xl font-semibold">{"Order Table"}</h1>
      <TableBase headers={orderHeaders}>
        <tbody>{renderTable()}</tbody>
      </TableBase>
    </>
  );
};

export default OrderTable;
