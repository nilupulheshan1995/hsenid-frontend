import { useRouter } from "next/router";
import { FunctionComponent } from "react";
import { GET_ITEMS_BY_ORDER } from "../../api/base-api";
import Header from "../../components/header";
import OrderItemsTable from "../../components/tables/OrderItemsTable";
import useFetch from "../../hooks/useFetchHook";

interface PageProps {}

const Page: FunctionComponent<PageProps> = () => {
  const router = useRouter();
  const {data} = useFetch(`${GET_ITEMS_BY_ORDER}/${router.query.oid}`);

  return (
    <>
      <Header/>
      <div>Order ID - {router.query.oid}</div>
      <br />
      {!!data && Array.isArray(data) ?<OrderItemsTable data={data}/>:""}
    </>
  );
};

export default Page;
