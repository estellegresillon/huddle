import styled from "styled-components";

const Wall = () => <WallWrapper>Wall</WallWrapper>;

export default Wall;

const WallWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  width: calc(100% - 150px);
`;
