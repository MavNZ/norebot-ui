import QueueMusicIcon from "@mui/icons-material/QueueMusic";
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

export const Playlists = ({ open, onClick }: playlistsProps): JSX.Element => {
  return (
    <ListItem key="Playlists" disablePadding sx={{ display: "block" }}>
      <ListItemButton
        sx={{
          minHeight: 48,
          justifyContent: open ? "initial" : "center",
          px: 2.5
        }}
        onClick={() => {
          onClick({ path: "/playlists" });
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: open ? 3 : "auto",
            justifyContent: "center"
          }}
        >
          <QueueMusicIcon />
        </ListItemIcon>
        <ListItemText primary="Playlists" sx={{ opacity: open ? 1 : 0 }} />
      </ListItemButton>
    </ListItem>
  );
};
