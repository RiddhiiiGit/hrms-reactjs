import {
  NotificationsActiveOutlined,
  NotificationsNoneOutlined,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  ButtonBase,
  Chip,
  ClickAwayListener,
  Divider,
  Grid2,
  Paper,
  Popper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useRef, useState } from "react";
import Transitions from "../../../ui-components/Extended/Transitions";
import MainCard from "../../../ui-components/MainCard/MainCard";
import NotificationList from "./NotificationList";


const NotificationSection = () => {
  const appliedTheme = useTheme();
  const [open, setOpen] = useState(false);
  const matchesXs = useMediaQuery(appliedTheme.breakpoints.down("md"));
  const [List, setList] = useState({});
  const [loader, setLoader] = useState(true);

  const anchorRef = useRef(null);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
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
      >
        {({ TransitionProps }) => (
          <Transitions
            position={matchesXs ? "top" : "top-right"}
            in={open}
            {...TransitionProps}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MainCard
                  border={false}
                  elevation={16}
                  content={false}
                  boxShadow
                >
                  <Grid2 container direction="column" spacing={2}>
                    <Grid2 item xs={12}>
                      <Grid2
                        container
                        alignItems="center"
                        justifyContent="space-between"
                        sx={{ pt: 2, px: 2 }}
                      >
                        <Grid2 item>
                          <Stack direction="row" spacing={2}>
                            <Typography variant="subtitle1">
                              All Notification
                            </Typography>
                            <Chip
                              size="small"
                              label={List?.total ?? 0}
                              sx={{
                                color: appliedTheme.palette.background.default,
                                // bgcolor: appliedTheme.palette.warning.dark,
                              }}
                            />
                          </Stack>
                        </Grid2>
                      </Grid2>
                    </Grid2>
                    <Grid2 item xs={12} p={0}>
                      <Divider sx={{ my: 0 }} />
                      <NotificationList loader={loader} />
                    </Grid2>
                  </Grid2>
                </MainCard>
              </ClickAwayListener>
            </Paper>
          </Transitions>
        )}
      </Popper>
    </>
  );
};

export default NotificationSection;
