import styled from "styled-components";

interface StatsProps {
  children?: React.ReactNode;
}

const Stats: React.FC<StatsProps> = ({ children }) => {
  return <StatsContent>{children}</StatsContent>;
};

const StatsContent = styled.span`
  font-size: 16px;
  color: black;
  text-align: center;
  font-weight: 500;
  letter-spacing: 1px;
`;

export default Stats;
