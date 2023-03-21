import List from "@mui/material/List";
import { styled } from "@mui/material/styles";
import React from "react";
import { useNavigate } from "react-router-dom";

import { Home } from "./menuItems/Home";
import { Playlists } from "./menuItems/Playlists";

interface MenuProps {
  open: boolean;
}

const ListWrapper = styled("div")(({ theme }) => ({
  width: 250,
  backgroundColor: theme.palette.background.paper
}));

export const MenuList = ({ open }: MenuProps): JSX.Element => {
  const navigate = useNavigate();

  const handleItemClick = ({ path }: { path: string }): void => {
    navigate(path);
  };

  return (
    <ListWrapper>
      <List>
        <Home open={open} onClick={handleItemClick} />
        <Playlists open={open} onClick={handleItemClick} />
      </List>
    </ListWrapper>
  );
};
