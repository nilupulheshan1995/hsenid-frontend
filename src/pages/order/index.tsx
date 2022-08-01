import { ErrorMessage, Field, Form } from "formik";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { GET_ALL_ITEM_API, submitOrder } from "../../api/base-api";
import FormBase from "../../components/forms/FormBase";
import Header from "../../components/header";
import TableBase from "../../components/tables/TableBase";
import useFetch from "../../hooks/useFetchHook";
import {
  ItemResponse,
  ItemType,
  OrderSubmitType,
  OrderType,
} from "../../types/api-types";

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
  const router = useRouter();

  const handleAddItem = (value: any) => {
    const orderItem: OrderType = { item: Number(value.itemid), qty: value.qty };
    setOrderList([...orderList, orderItem]);
    updateOrderItemTable(orderItem);
  };

  const handleSubmit = () => {
    const order: OrderSubmitType = {
      costTotal: totalCost,
      customer: 1,
      discount: 0,
      sellTotal: total,
      orderDetials: orderList,
    };

    submitOrder(order).then((res) => {
      if (res.status == 200) {
        router.push('/order/' + res?.data?.order1PK).then((res) => {
          alert("Place Order Successful!");
        })
      } else {
        alert(res.data);
        router.reload();
      }
    });
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
        <li>Available Stock :{itemObj?.avStock}</li>
      </ol>
    );
  };

  return (
    <>
      <Header />
      <div className="">
        <FormBase
          handleSubmit={handleAddItem}
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

              <button
                className="submitBtn"
                type="submit"
                disabled={isSubmitting}
              >
                Add
              </button>

              <div className="flex justify-end">
                <h1 className="text-2xl">Total : {total}</h1>
              </div>
              <TableBase
                body={orderTableList}
                headers={orderTableHeaders}
              ></TableBase>
            </Form>
          )}
        />
      </div>
      <div>
        <button className="submitBtn" type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </>
  );
};

export default Order;
