import styled from "styled-components";

const BudgetItem = ({ goal, type, value }) => (
  <BudgetItemWrapper $type={type}>
    <div className="budget-item-value">
      {value} {goal ? `/ ${goal}` : ""}
    </div>
    <div className="budget-item-type">{type} BUDGET</div>
  </BudgetItemWrapper>
);

export default BudgetItem;

const BudgetItemWrapper = styled.div`
  background-color: ${({ $type }) =>
    $type === "trip" ? "#5e7aff" : "#3151e8"};
  border-radius: 3px;
  box-shadow: 0 1px 10px 0 rgb(69 129 192 / 50%);
  color: white;
  margin-left: 15px;
  padding: 15px;
  text-align: center;

  .budget-item-type {
    font-size: 11px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  .budget-item-value {
    font-weight: bolder;
  }
`;
