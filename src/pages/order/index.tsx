import { ErrorMessage, Field, Form } from "formik";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { GET_ALL_ITEM_API } from "../../api/base-api";
import FormBase from "../../components/forms/FormBase";
import Header from "../../components/header";
import TableBase from "../../components/tables/TableBase";
import useFetch from "../../hooks/useFetchHook";
import { ItemResponse, ItemType } from "../../types/api-types";

interface OrderType {
  qty: number;
  item: number;
}

const orderTableHeaders = [
  "Item ID",
  "Name",
  "Description",
  "Unit Price",
  "Quantity",
  "Sub Total",
];

const Order: NextPage = () => {
  const { data: items, error } = useFetch<ItemResponse[]>(GET_ALL_ITEM_API);
  const [orderList, setOrderList] = useState<OrderType[]>([]);
  const [orderTableList, setOrderTableList] = useState<any>([]);
  const [totalCost, setTotalCost] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  const handleSubmit = (value: any) => {
    const orderItem: OrderType = { item: Number(value.itemid), qty: value.qty };
    setOrderList([...orderList, orderItem]);
    updateOrderItemTable(orderItem);
  };

  useEffect(() => {
    if (orderList.length > 0)
      alert(`Order list Update! - total Items ${orderList.length}`);
  }, [orderList]);

  const updateOrderItemTable = (orderItem: OrderType) => {
    const itemObj = items?.find((item) => item.itemid == orderItem.item);
    if (!!itemObj) {
      let subTotal = Number(itemObj.unitPrice) * orderItem.qty;
      let subTotalCost = Number(itemObj.unitCost) * orderItem.qty;
      let obj = {
        itemid: itemObj.itemid,
        name: itemObj.name,
        description: itemObj.description,
        unitPrice: itemObj.unitPrice,
        qty: orderItem.qty,
        subTotal,
      };
      setTotal(total + subTotal);
      setTotalCost(totalCost + subTotalCost);
      setOrderTableList([...orderTableList, obj]);
    }
  };

  const renderItems = () => {
    if (!!items && Array.isArray(items)) {
      return items.map((item, i) => (
        <Field
          as="option"
          key={item.itemid}
          value={item.itemid}
        >{`${item.name} - ${item.description}`}</Field>
      ));
    }
  };

  const renderItemDescription = (values: any) => {
    const itemObj = items?.find((item) => item.itemid == values.itemid);
    return (
      <ol>
        <li>Name :{itemObj?.name}</li>
        <li>Description :{itemObj?.description}</li>
        <li>Unit Price :{itemObj?.unitPrice}</li>
        <li>Unit Cost :{itemObj?.unitCost}</li>
      </ol>
    );
  };

  return (
    <>
    <Header/>
      <div className="">
        <FormBase
          handleSubmit={handleSubmit}
          init={{ itemid: "", qty: "" }}
          formTitle="Place Order form"
          formElements={(isSubmitting: any, values: any) => (
            <Form>
              <div className="inputWrapper">
                <p>Item</p>
                <Field type="text" name="itemid" as="select">
                  <Field name="default" as="option">
                    Select Item
                  </Field>
                  {renderItems()}
                </Field>
              </div>

              {renderItemDescription(values)}

              <div className="inputWrapper">
                <p>Item Quantity</p>
                <Field type="number" name="qty" />
                <ErrorMessage name="description" component="div" />
              </div>

              <div className="flex justify-end">
                <h1 className="text-2xl">Total : {total}</h1>
              </div>
              <TableBase
                body={orderTableList}
                headers={orderTableHeaders}
              ></TableBase>

              <button
                className="submitBtn"
                type="submit"
                disabled={isSubmitting}
              >
                Add
              </button>
            </Form>
          )}
        />
      </div>
    </>
  );
};

export default Order;
