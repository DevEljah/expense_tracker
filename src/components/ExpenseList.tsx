import { useState } from "react";
import tw from "tailwind-styled-components";
import categories from "./categoris";

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Milk", amount: 1, category: "Food" },
    { id: 2, description: "Movie", amount: 4, category: "Entertainment" },
    { id: 3, description: "Notebook", amount: 2, category: "Utilties" },
    { id: 4, description: "Eggs", amount: 10, category: "Food" },
  ]);

  return (
    <Div>
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
          {expenses.map((expense, index) => (
            <TbodyTr key={index}>
              <TbodyTd>{expense.description}</TbodyTd>
              <TbodyTd>${expense.amount}</TbodyTd>
              <TbodyTd>{expense.category}</TbodyTd>
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
