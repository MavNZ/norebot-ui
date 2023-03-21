import HomeIcon from "@mui/icons-material/Home";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from "@mui/material";
import React from "react";

interface playlistsProps {
  open: boolean;
  onClick: ({ path }: { path: string }) => void;
}

export const Home = ({ open, onClick }: playlistsProps): JSX.Element => {
  return (
    <ListItem key="Home" disablePadding sx={{ display: "block" }}>
      <ListItemButton
        sx={{
          minHeight: 48,
          justifyContent: open ? "initial" : "center",
          px: 2.5
        }}
        onClick={() => {
          onClick({ path: "/" });
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: open ? 3 : "auto",
            justifyContent: "center"
          }}
        >
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" sx={{ opacity: open ? 1 : 0 }} />
      </ListItemButton>
    </ListItem>
  );
};
