import { ErrorMessage, Field, Form } from "formik";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { GET_ALL_ITEM_API } from "../../api/base-api";
import FormBase from "../../components/forms/FormBase";
import useFetch from "../../hooks/useFetchHook";
import { ItemResponse, ItemType } from "../../types/api-types";

interface OrderType{
    qty:number;
    item:number;
}

const Order: NextPage = () => {
  const { data: items, error } = useFetch<ItemResponse[]>(GET_ALL_ITEM_API);
  const [orderList, setOrderList] = useState<OrderType[]>([]);

  const handleSubmit = (value: any) => {
      const orderItem:OrderType = {item:Number(value.itemid),qty:value.qty}
      setOrderList([...orderList,orderItem]);
  };

  useEffect(() => {
    if(orderList.length>0)
        alert(`Order list Update! - total Items ${orderList.length}`)
  }, [orderList]);

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
    const itemObj = items?.find((item) => item.itemid == values.itemid)
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

            

            <button className="submitBtn" type="submit" disabled={isSubmitting}>
              Add
            </button>
          </Form>
        )}
      />
    </div>
  );
};

export default Order;
