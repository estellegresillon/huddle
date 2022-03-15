import styled from "styled-components";

const Select = ({ name, onChange, options, value }) => (
  <SelectWrapper>
    <select onChange={onChange} name={name} id={name} value={value}>
      {options?.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </SelectWrapper>
);

export default Select;

const SelectWrapper = styled.div`
  display: flex;
  align-items: flex-end;

  select {
    border: none;
    border-radius: 4px;
    box-shadow: 0 1px 10px 0 rgb(69 129 192 / 20%);
    color: #30305a;
    cursor: pointer;
    display: inline-block;
    font-family: "Gilroy";
    font-size: 12px;
    padding: 5px;
    outline: 0;
    transition: all 0.5s ease;

    &:hover {
      box-shadow: 0 1px 15px 0 rgb(69 129 192 / 25%);
    }
  }

  select::-ms-expand {
    position: absolute;
  }
`;
