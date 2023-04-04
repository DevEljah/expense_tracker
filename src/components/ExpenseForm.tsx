import styled from "styled-components";
import { useForm /*, SubmitHandler */ } from "react-hook-form";
import categories from "./categoris";

import { ExpenseProps } from "../App";

interface Props {
  onSubmit: (data: ExpenseProps) => void;
}

const ExpenseForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ExpenseProps>();

  // const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <Form onSubmit={handleSubmit((data) => onSubmit(data))}>
      <FormGroup>
        <Label htmlFor="description">Description</Label>
        <Input
          type="text"
          id="description"
          // value="description"
          {...register("description", { required: true, minLength: 3 })}
        />
        {errors.description?.type === "required" && (
          <Error>This field is required</Error>
        )}
        {errors.description?.type === "minLength" && (
          <Error>At least 3 chars is required</Error>
        )}
      </FormGroup>
      <FormGroup>
        <Label htmlFor="amount">Amount</Label>
        <Input
          type="number"
          id="amount"
          {...register("amount", { required: true })}
        />
        {errors.amount?.type === "required" && (
          <Error>This field is required</Error>
        )}
      </FormGroup>
      <FormGroup>
        <Label htmlFor="category">Category</Label>
        <Select
          id="category"
          {...register("category", {
            validate: (value) => value !== "none",
          })}
        >
          <option value="none"> None </option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </Select>
        {errors.category?.type === "validate" && (
          <Error>Please select a category</Error>
        )}
      </FormGroup>
      <Button type="submit">Add Expense</Button>
    </Form>
  );
};
export default ExpenseForm;

const Form = styled.form`
  background-color: #ffffff;
  border-radius: 0.375rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05), 0 1px 5px 0 rgba(0, 0, 0, 0.1);
  padding: 2rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  padding: 0.5rem 0.75rem;
  width: 80%;

  &:focus {
    border-color: #3182ce;
    box-shadow: 0 0 0 2px rgba(49, 130, 206, 0.2);
    outline: none;
  }
`;

const Select = styled.select`
  appearance: none;
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  padding: 0.5rem 0.75rem;
  width: 50%;

  &:focus {
    border-color: #3182ce;
    box-shadow: 0 0 0 2px rgba(49, 130, 206, 0.2);
    outline: none;
  }
`;
const Option = styled.option`
  appearance: none;
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  box-shadow: inset 0 1px 2px 0 rgba(27, 40, 176, 0.374);
`;
const Error = styled.p`
  color: #d70b0b;
`;

const Button = styled.button`
  background-color: #3182ce;
  border-radius: 0.375rem;
  color: #ffffff;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 500;
  padding: 0.5rem 1rem;

  &:hover,
  &:focus {
    background-color: #2c5282;
    outline: none;
  }
`;
