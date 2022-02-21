import styled from "styled-components";

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <HeaderWrapper>
      <Title>{title}</Title>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  border-radius: 0 0 15px 15px;
  background-color: #e8e8e8;
`;

const Title = styled.p`
  margin: 0;
  font-size: 35px;
  font-weight: 300;
  letter-spacing: 1.5px;
`;

export default Header;
