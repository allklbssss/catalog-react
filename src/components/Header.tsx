import styled from "styled-components";

const Background = styled.div`
  position: relative;
  width: 100%;
  margin: 0;
  height: 80px;
  border-radius: 0 0 15px 15px;
  background-color: #e8e8e8;
`;

const Title = styled.p`
  position: absolute;
  margin: 0;
  font-size: 35px;
  font-weight: 300;
  letter-spacing: 1.5px;
  align-items: center;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`;

interface HeaderProps {
    title: string
}

const Header: React.FC<HeaderProps> = ({title}) => {
  return (
    <Background>
      <Title>{title}</Title>
    </Background>
  );
};

export default Header;
