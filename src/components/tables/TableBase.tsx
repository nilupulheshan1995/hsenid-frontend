import { FunctionComponent } from "react";

interface TableBaseProps {
    children:any;
    headers:string[];
    body?:any[];
}

const TableBase: FunctionComponent<TableBaseProps> = (props) => {
  return (
    <div className="relative shadow-md sm:rounded-lg">
      <table className="table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400 m-10">
      <thead className="">
          <tr>
            {props.headers.map(head => <th key={head}>{head}</th>)}
          </tr>
        </thead>
        {props.children}
      </table>
    </div>
  );
};

export default TableBase;
