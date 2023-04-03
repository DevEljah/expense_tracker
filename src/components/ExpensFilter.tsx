import tw from "tailwind-styled-components";
import categories from "./categoris";

const ExpensFilter = () => {
  return (
    <div>
      <div>
        <Select id="category">
          <option value="none">All Catgories</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </Select>
      </div>
    </div>
  );
};

export default ExpensFilter;

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
