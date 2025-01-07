import moment from "moment";
import { Fragment } from "react";
import PropTypes from "prop-types";
// material-ui
import { useTheme, styled } from "@mui/material/styles";
import {
  Avatar,
  Divider,
  Grid2,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Skeleton,
  Typography,
} from "@mui/material";
import { CampaignOutlined } from "@mui/icons-material";
import PerfectScrollbar from "react-perfect-scrollbar";
import NoDataFound from "../../../ui-components/models/NoDataFound";

// styles

const NotificationList = ({ Data, loader }) => {
  const appliedTheme = useTheme();
  const ListItemWrapper = styled("div")(({ appliedTheme }) => ({
    cursor: "pointer",
    padding: 16,
    "&:hover": {
      background: appliedTheme.palette.primary.light,
    },
    "& .MuiListItem-root": {
      padding: 0,
    },
  }));

  // const AnnouncementRead = (id) => {
  //     AnnouncementMarkAsReadApi({ id })
  //         .then((res) => {
  //             if (res.data && res.data.status === true) {
  //                 setCallApi((prev) => !prev);
  //                 apiSuccessSnackBar(res);
  //             } else {
  //                 apiErrorSnackBar(res);
  //             }
  //         })
  //         .catch((err) => apiErrorSnackBar(err));
  // };

  return (
    <PerfectScrollbar
      style={{
        height: "100%",
        maxHeight: "calc(100vh - 205px)",
        overflowX: "hidden",
      }}
    >
      {" "}
      <List
        sx={{
          width: "100%",
          maxWidth: 400,
          minWidth: 350,
          py: 0,
          borderRadius: "10px",
          //   [theme.breakpoints.down("md")]: { maxWidth: 400 },
          //   "& .MuiListItemSecondaryAction-root": { top: 22 },
          //   "& .MuiDivider-root": { my: 0 },
          //   "& .list-container": { pl: 7 },
        }}
      >
        {" "}
        {loader ? (
          <List sx={{ px: 1 }}>
            {" "}
            <ListItem alignItems="center" disableGutters>
              {" "}
              <ListItemAvatar>
                {" "}
                <Skeleton
                  variant="rounded"
                  width={45}
                  height={45}
                  animation="wave"
                />{" "}
              </ListItemAvatar>{" "}
              <ListItemText
                sx={{ py: 0, my: 0.45 }}
                primary={
                  <Skeleton variant="text" height={28} animation="wave" />
                }
              />{" "}
            </ListItem>{" "}
          </List>
        ) : Data?.length > 0 ? (
          Data.map((i, idx) => (
            <Fragment key={idx}>
              {" "}
              <ListItem
                alignItems="center"
                secondaryAction={
                  <Grid2 container>
                    {" "}
                    <Grid2 item xs={12} textAlign="right">
                      {" "}
                      <Typography
                        variant="caption"
                        display="block"
                        gutterBottom
                      >
                        {" "}
                        {moment(i.created_at).fromNow()}{" "}
                      </Typography>{" "}
                    </Grid2>{" "}
                    {i?.announcement_user?.mark_as_read === 0 && (
                      <Grid2 item xs={12} textAlign="right">
                        {" "}
                        <Link
                          component="button"
                          underline="none"
                          //   onClick={() =>
                          //     AnnouncementRead(i?.announcement_user?.id)
                          //   }
                        >
                          {" "}
                          <Typography variant="caption" color="inherit">
                            {" "}
                            Mark As Read{" "}
                          </Typography>{" "}
                        </Link>{" "}
                      </Grid2>
                    )}{" "}
                  </Grid2>
                }
              >
                {" "}
                <ListItemAvatar>
                  {" "}
                  <Avatar
                    sx={{
                      color: appliedTheme.palette.orange.dark,
                      backgroundColor: appliedTheme.palette.orange.light,
                      border: "none",
                      borderColor: appliedTheme.palette.orange.main,
                    }}
                  >
                    {" "}
                    <CampaignOutlined stroke={0.5} size="1.3rem" />{" "}
                  </Avatar>{" "}
                </ListItemAvatar>{" "}
                <ListItemText
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    maxWidth: "130px",
                  }}
                  primary={i.name}
                />{" "}
              </ListItem>{" "}
              <Divider />{" "}
            </Fragment>
          ))
        ) : (
          <NoDataFound height={200} dynamicMsg="No Notification Yet" />
        )}{" "}
      </List>{" "}
    </PerfectScrollbar>
    // <PerfectScrollbar style={{ height: '100%', maxHeight: 'calc(100vh - 205px)', overflowX: 'hidden' }}>
    //     <List
    //         sx={{
    //             width: '100%',
    //             maxWidth: 400,
    //             minWidth: 350,
    //             py: 0,
    //             borderRadius: '10px',
    //             [appliedTheme.breakpoints.down('md')]: {
    //                 maxWidth: 400
    //             },
    //             '& .MuiListItemSecondaryAction-root': {
    //                 top: 22
    //             },
    //             '& .MuiDivider-root': {
    //                 my: 0
    //             },
    //             '& .list-container': {
    //                 pl: 7
    //             }
    //         }}
    //     >
    //         {loader ? (
    //             <List sx={{ px: 1 }}>
    //                 <ListItem alignItems="center" disableGutters>
    //                     <ListItemAvatar>
    //                         <Skeleton variant="rounded" width={45} height={45} animation="wave" />
    //                     </ListItemAvatar>
    //                     <ListItemText
    //                         sx={{
    //                             py: 0,
    //                             my: 0.45
    //                         }}
    //                         primary={<Skeleton variant="text" height={28} animation="wave" />}
    //                     />
    //                 </ListItem>
    //             </List>
    //         ) : Data?.length > 0 ? (
    //             Data.map((i, idx) => (
    //                 <Fragment key={idx}>
    //                     <ListItemWrapper>
    //                         <ListItem alignItems="center">
    //                             <ListItemAvatar>
    //                                 <Avatar
    //                                     sx={{
    //                                         color: theme.palette.orange.dark,
    //                                         backgroundColor: theme.palette.orange.light,
    //                                         border: 'none',
    //                                         borderColor: theme.palette.orange.main
    //                                     }}
    //                                 >
    //                                     <CampaignOutlined stroke={0.5} size="1.3rem" />
    //                                 </Avatar>
    //                             </ListItemAvatar>
    //                             <ListItemText
    //                                 sx={{
    //                                     overflow: 'hidden',
    //                                     textOverflow: 'ellipsis',
    //                                     maxWidth: '130px'
    //                                 }}
    //                                 primary={i.name}
    //                             />
    //                             <ListItemSecondaryAction>
    //                                 <Grid container>
    //                                     <Grid item xs={12} textAlign="right">
    //                                         <Typography variant="caption" display="block" gutterBottom>
    //                                             {/* {moment(i.created_at).format('DD MMM, Y')} */}
    //                                             {moment(i.created_at).fromNow()}
    //                                         </Typography>
    //                                     </Grid>
    //                                     {i?.announcement_user?.mark_as_read == 0 && (
    //                                         <Grid item xs={12} textAlign="right">
    //                                             <Link
    //                                                 component="button"
    //                                                 underline="none"
    //                                                 onClick={() => AnnouncementRead(i?.announcement_user?.id)}
    //                                             >
    //                                                 <Typography variant="caption" color={'inherit'}>
    //                                                     Mark As Read
    //                                                 </Typography>
    //                                             </Link>
    //                                         </Grid>
    //                                     )}
    //                                 </Grid>
    //                             </ListItemSecondaryAction>
    //                         </ListItem>
    //                     </ListItemWrapper>
    //                     <Divider />
    //                 </Fragment>
    //             ))
    //         ) : (
    //             <NoDataFound height={200} dynamicMsg="No Notification Yet" />
    //         )}
    //     </List>
    // </PerfectScrollbar>
  );
};

NotificationList.propTypes = {
  Data: PropTypes.array,
  loader: PropTypes.bool,
  setCallApi: PropTypes.func,
};

export default NotificationList;
