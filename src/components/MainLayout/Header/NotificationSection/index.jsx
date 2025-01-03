import {
  NotificationsActiveOutlined,
  NotificationsNoneOutlined,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  ButtonBase,
  Popper,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useRef, useState } from "react";

const NotificationSection = () => {
  const appliedTheme = useTheme();
  const [open, setOpen] = useState(false);
  const matchesXs = useMediaQuery(appliedTheme.breakpoints.down("md"));
  const [List, setList] = useState({});

  const anchorRef = useRef(null);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  return (
    <>
      <Box m={1}>
        <ButtonBase sx={{ borderRadius: "12px" }}>
          <Avatar
            variant="rounded"
            aria-label="Notification"
            sx={{
              transition: "all .2s ease-in-out",
              background: appliedTheme.palette.secondary.light,
              borderRadius: 2,
              color: appliedTheme.palette.secondary.main,

              "&:hover": {
                background: appliedTheme.palette.secondary.main,
                color: appliedTheme.palette.secondary.light,
              },
            }}
            ref={anchorRef}
            aria-controls={open ? "menu-list-grow" : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
            color="inherit"
          >
            {List.total > 0 ? (
              <NotificationsActiveOutlined stroke={1.5} size="1.3rem" />
            ) : (
              <NotificationsNoneOutlined stroke={1.5} size="1.3rem" />
            )}
          </Avatar>
        </ButtonBase>
      </Box>
      <Popper
        sx={{ minWidth: 350 }}
        placement={matchesXs ? "bottom" : "bottom-end"}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        popperOptions={{
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [matchesXs ? 5 : 0, 13],
              },
            },
          ],
        }}
      ></Popper>
    </>
  );
};

export default NotificationSection;
