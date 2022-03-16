import styled from "styled-components";

import BudgetItem from "components/common/BudgetItem";

const Budget = () => (
  <BudgetWrapper>
    <BudgetItem type="daily" value="40€" />
    <BudgetItem type="monthly" value="1200€" />
    <BudgetItem goal="2500€" type="trip" value="500€" />
  </BudgetWrapper>
);

export default Budget;

const BudgetWrapper = styled.div`
  align-items: center;
  border-top: 0.5px solid #dfdfdf;
  display: flex;
  height: 100px;
  width: 100%;
`;
