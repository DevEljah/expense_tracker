import tw from "tailwind-styled-components";
interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}
interface Props {
  expenses: Expense[]; //is an array of objects!
  onDelete: (id: number) => void;
}

const ExpenseList = ({ expenses, onDelete }: Props) => {
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
              <TbodyTd>
                $
                {typeof expense.amount === "number"
                  ? expense.amount.toFixed(2)
                  : parseFloat(expense.amount).toFixed(2)}
              </TbodyTd>
              <TbodyTd>{expense.category}</TbodyTd>
              <TbodyTd>
                <Btn onClick={() => onDelete(expense.id)}>Delete</Btn>
              </TbodyTd>
            </TbodyTr>
          ))}
          <TbodyTr>
            <TbodyTd>Total</TbodyTd>
            <TbodyTd>
              $
              {expenses
                .reduce((acc, expense) => Number(expense.amount) + acc, 0)
                .toFixed(2)}
            </TbodyTd>
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
