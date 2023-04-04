import tw from "tailwind-styled-components";
import categories from "./categoris";

interface Props {
  onSelectCategory: (catagory: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <div>
      <div>
        <Select onChange={(event) => onSelectCategory(event.target.value)}>
          <option value="">All Catgories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </Select>
      </div>
    </div>
  );
};

export default ExpenseFilter;

// style
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
