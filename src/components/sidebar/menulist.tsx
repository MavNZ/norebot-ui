import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
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
        {/* {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5
              }}
              onClick={() => {
                handleItemClick({ path: "/one" });
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center"
                }}
              >
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center"
                }}
              >
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        ))} */}
      </List>
    </ListWrapper>
  );
};
