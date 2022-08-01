import { FunctionComponent } from "react";



interface TableBaseProps {
  children?: any;
  headers: string[];
  body?: any[];
}


const TableBase: FunctionComponent<TableBaseProps> = (props) => {
  
  const renderRows = (obj:any) => {
    let array = [];
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        array.push(<td>{element}</td>)
      }
    }
    return array.map(ar=>ar);
  };
  
  const renderTableBody = () => {
    if (!!props.body && Array.isArray(props.body)) {
      const { body } = props;
      return body.map((obj, i) => <tr key={i}>
        {renderRows(obj)}
      </tr>);
    }
  };

  return (
    <div className="relative shadow-md sm:rounded-lg">
      <table className="table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400 m-10">
        <thead className="">
          <tr>
            {props.headers.map((head) => (
              <th key={head}>{head}</th>
            ))}
          </tr>
        </thead>
        {props.body? <tbody>
          {renderTableBody()}
        </tbody>:"" }
        {props.children}
      </table>
    </div>
  );
};

export default TableBase;
