import { Link } from "react-router-dom";
import styled from "styled-components";
import { ListItemProps } from "../types";

const ListItem: React.FC<ListItemProps> = ({
  type,
  title,
  text,
  path,
}) => {
  const icon =
    type === "instagram"
      ? "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
      : "https://icons-for-free.com/iconfiles/png/512/media+social+telegram+icon-1320193121598222952.png";

  return (
    <ListItemWrapper>
      <StyledLink to={path}>
        <Icon src={icon} alt="icon" />
        {title}
      </StyledLink>
      <Text>{text}</Text>
    </ListItemWrapper>
  );
};

const ListItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px auto;
  width: 70%;
  border-radius: 15px;
  border: 1px solid black;
  box-shadow: 3px 4px 5px #bbbbbb;
  padding: 20px 30px 20px 30px;
`;

const StyledLink = styled(Link)`
  display: flex;
  gap: 8px;
  font-size: 22px;
  color: black;
  font-weight: 300;
  letter-spacing: 1px;
  cursor: pointer;
  text-decoration: none;
`;

const Icon = styled.img`
  width: 25px;
  height: 25px;
`;

const Text = styled.p`
  margin-top: 30px;
  font-size: 17px;
  font-weight: 300;
  letter-spacing: 1px;
`;

export default ListItem;
