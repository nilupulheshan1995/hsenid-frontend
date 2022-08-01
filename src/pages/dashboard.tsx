import { FunctionComponent } from "react";
import { GET_ALL_ITEM_API } from "../api/base-api";
import Header from "../components/header";
import ItemTable from "../components/tables/ItemTable";
import OrderTable from "../components/tables/OrderTable";
import TableBase from "../components/tables/TableBase";
import useFetch from "../hooks/useFetchHook";

interface DashboardProps {}

const Dashboard: FunctionComponent<DashboardProps> = () => {
  return (
    <>
      <Header/>
      <ItemTable />
      <OrderTable/>
    </>
  );
};

export default Dashboard;
