import styled from "styled-components";
import Stats from "../components/Stats";
import { useParams } from "react-router-dom";
import { data } from "../data";

const AccountPage = () => {
  const { path } = useParams();

  const info = data.find((item) => item.path === path);

  if (!path || !info) return null;

  return (
    <AccountWrapper>
      <Photo src={info.avatar} alt="Avatar" />
      <Content>
        <AccountHeader>
          <Title>{info.title}</Title>
          <Subscribe href={info.link}>Подписаться</Subscribe>
        </AccountHeader>
        <StatsRow>
         {info.posts && <Stats>{info.posts}</Stats>}
          <Stats>{info.followers}</Stats>
         {info.following && <Stats>{info.following}</Stats>}
        </StatsRow>
        <Text>{info.text}</Text>
      </Content>
    </AccountWrapper>
  );
};

const AccountWrapper = styled.div`
  display: flex;
  gap: 70px;
  margin: 40px auto;
  width: 70%;
  border-radius: 15px;
  border: 1px solid black;
  box-shadow: 3px 4px 5px #bbbbbb;
  padding: 20px 30px 20px 30px;
`;

const Photo = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const AccountHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const Title = styled.p`
  font-size: 28px;
  color: black;
  font-weight: 300;
  letter-spacing: 1px;
`;

const Subscribe = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  font-size: 25px;
  font-weight: 300;
  letter-spacing: 1px;
  color: white;
  border: none;
  border-radius: 5px;
  background-color: #268afd;
  text-decoration: none;
`;

const StatsRow = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`; 

const Text = styled.p`
  font-size: 17px;
  font-weight: 300;
  letter-spacing: 1px;
`;

export default AccountPage;
