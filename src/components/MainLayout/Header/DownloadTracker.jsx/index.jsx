import { useTheme } from "@mui/material/styles";
import {
  Avatar,
  Box,
  ClickAwayListener,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Popper,
  Stack,
  Typography,
} from "@mui/material";

import { useState } from "react";
import { useSelector } from "react-redux";
import MainCard from "../../../ui-components/MainCard/MainCard";
import Transitions from "../../../ui-components/Extended/Transitions";
import {
  IconBrandApple,
  IconBrandUbuntu,
  IconBrandWindows,
} from "@tabler/icons-react";

const DownloadTracker = () => {
  const appliedTheme = useTheme();
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const customization = useSelector((state) => state.customization);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleToggle = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <>
      <Avatar
        variant="rounded"
        aria-label="Tracker Download"
        sx={{
          // ...theme.typography.commonAvatar,
          // ...theme.typography.mediumAvatar,
          transition: "all .2s ease-in-out",
          background: appliedTheme.palette.secondary.light,
          color: appliedTheme.palette.secondary.main,
          '&[aria-controls="menu-list-grow"],&:hover': {
            background: appliedTheme.palette.secondary.main,
            color: appliedTheme.palette.secondary.light,
          },
        }}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        color="inherit"
        onClick={handleToggle}
      >
        {/* <IconDownload stroke={2} size="1.4rem" /> */}
      </Avatar>
      <Popper
        placement="bottom-end"
        role={undefined}
        transition
        disablePortal
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        popperOptions={{
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [0, 13],
              },
            },
          ],
        }}
      >
        {({ TransitionProps }) => (
          <Transitions in={open} {...TransitionProps}>
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MainCard
                  border={false}
                  elevation={16}
                  content={false}
                  sx={{
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <Box sx={{ p: 2 }}>
                    <Stack>
                      <Typography variant="h4">Download Trackers</Typography>
                    </Stack>
                    <Divider sx={{ mt: "15px" }} />
                    <List
                      component="nav"
                      sx={{
                        width: "100%",
                        maxWidth: 350,
                        minWidth: 150,
                        backgroundColor: appliedTheme.palette.background.paper,
                        borderRadius: "10px",
                        // [appliedTheme.breakpoints.down("md")]: {
                        //   minWidth: "100%",
                        // },
                        "& .MuiListItemButton-root": {
                          px: 1,
                          // borderRadius: `${customization.borderRadius}px`,
                        },
                      }}
                    >
                      <ListItemButton>
                        <ListItemIcon>
                          <IconBrandWindows stroke={1.6} size={"1.7rem"} />
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            <Typography variant="h5">Windows</Typography>
                          }
                        />
                      </ListItemButton>
                      <ListItemButton>
                        <ListItemIcon>
                          <IconBrandApple stroke={1.6} size={"1.7rem"} />
                        </ListItemIcon>
                        <ListItemText
                          primary={<Typography variant="h5">Mac</Typography>}
                        />
                      </ListItemButton>
                      <ListItemButton>
                        <ListItemIcon>
                          <IconBrandUbuntu stroke={1.6} size={"1.7rem"} />
                        </ListItemIcon>
                        <ListItemText
                          primary={<Typography variant="h5">Linux</Typography>}
                        />
                      </ListItemButton>
                    </List>
                  </Box>
                </MainCard>
              </ClickAwayListener>
            </Paper>
          </Transitions>
        )}
      </Popper>
    </>
  );
};

export default DownloadTracker;
