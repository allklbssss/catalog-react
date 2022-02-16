import styled from "styled-components";
import { ListItem as ListItemProps } from "../types";

const ListWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 25px 0px 10px 0px;
`;

const Block = styled.div`
  width: 70%;
  border-radius: 15px;
  border: 1px solid black;
  box-shadow: 3px 4px 5px #bbbbbb;
  padding: 20px 30px 20px 30px;
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 22px;
  color: black;
  font-weight: 300;
  letter-spacing: 1px;
  cursor: pointer;
  text-decoration: none;
`;

const Icon = styled.img`
  margin-right: 8px;
  width: 25px;
  height: 25px;
`;

const Text = styled.p`
margin-top: 30px;
  font-size: 17px;
  font-weight: 300;
  letter-spacing: 1px;
`;

const ListItem: React.FC<ListItemProps> = ({ type, title, text, link }) => {
  return (
    <ListWrapper>
      <Block>
        <Link href={link}>
          <Icon
            src={
              type === "instagram"
                ? "https://cdn-icons.flaticon.com/png/512/3955/premium/3955024.png?token=exp=1644938090~hmac=0de147bba006c31558dbf0d6434ec062"
                : "https://cdn-icons-png.flaticon.com/512/906/906377.png"
            }
            alt="icon"
          />
          {title}
        </Link>
        <Text>{text}</Text>
      </Block>
    </ListWrapper>
  );
};

export default ListItem;
