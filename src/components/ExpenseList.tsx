import { useState } from "react";
import tw from "tailwind-styled-components";

const ExpenseList = () => {
  const [data, setData] = useState([
    { description: "Milk", amount: 1, category: "Food" },
    { description: "Movie", amount: 4, category: "Entertainment" },
    { description: "Notebook", amount: 2, category: "Utilties" },
    { description: "Eggs", amount: 10, category: "Food" },
  ]);

  const categories = ["Food", "Utilites", "Entertainment"];

  return (
    <Div>
      <div className="mb-4">
        <Label htmlFor="category">All Catgories</Label>
        <Select id="category">
          <option value="none">None</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </Select>
      </div>
      <Table>
        <thead>
          <Tr>
            <Th>description</Th>
            <Th>Amount</Th>
            <Th>Category</Th>
            <Th>Action</Th>
          </Tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <TbodyTr key={index}>
              <TbodyTd>{item.description}</TbodyTd>
              <TbodyTd>${item.amount}</TbodyTd>
              <TbodyTd>{item.category}</TbodyTd>
              <TbodyTd>
                <Btn>Delete</Btn>
              </TbodyTd>
            </TbodyTr>
          ))}
          <TbodyTr>
            <TbodyTd>Total</TbodyTd>
            <TbodyTd>Total Amount</TbodyTd>
          </TbodyTr>
        </tbody>
      </Table>
    </Div>
  );
};

export default ExpenseList;

// styling
export const Div = tw.div`
  w-full
`;

export const Label = tw.label`
block text-gray-700
font-bold
mb-2
`;
export const Select = tw.select`
block
w-full
bg-gray-200
border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded
leading-tight
focus:outline-none focus:bg-white focus:border-gray-500
`;

export const Table = tw.table`
  w-full
  border-collapse
`;

export const Tr = tw.tr`
  bg-gray-200
`;

export const Th = tw.th`
  border
  border-gray-400
  px-4
  py-2
`;

export const TbodyTr = tw.tr`
  bg-white
`;

export const TbodyTd = tw.td`
  border
  border-gray-400
  px-4
  py-2
`;
export const Btn = tw.button`
bg-red-500
hover:bg-red-700
text-white
font-bold 
py-2 px-4 rounded
`;
