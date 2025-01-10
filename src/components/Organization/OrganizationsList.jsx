// import PropTypes from 'prop-types';
// import { Link as LinkIcon } from '@mui/icons-material';
// import {
//     Chip,
//     Link,
//     Table,
//     TableBody,
//     TableCell,
//     TableContainer,
//     TableHead,
//     TablePagination,
//     TableRow,
//     TableSortLabel,
//     Typography

// } from '@mui/material';
// import { useState, useEffect } from 'react';
// // import CommonDialog from 'ui-component/models/CommonDialog';
// // import DeleteDialog from 'ui-component/models/DeleteDialog';
// // import AddEditOrganization from './AddEditOrganization';
// // import { OrganizationDeleteApi, OrganizationListApi } from 'apis/Organization';
// // import { apiErrorSnackBar, apiSuccessSnackBar } from 'utils/SnackBar';
// // import NoDataFound from 'ui-component/NoDataFound';
// // import SingleLineListSkeleton from 'ui-component/CommonSkeleton/SingleLineListSkeleton';
// // import EditDeleteAction from 'ui-component/extended/EditDeleteAction';

// const params = {
//     search: '',
//     page: 0,
//     length: 25,
//     orderDir: 'ASC',
//     orderColumn: 0,
//     trading_name: '',
//     website: '',
//     status: ''
// };
// let recordsTotal = 0;

// const OrganizationList = ({ search, callApi, filter }) =>
// {
//     const [getData, setData] = useState([]);
//     const [page, setPage] = useState(0);
//     const [loader, setLoader] = useState(true);
//     const [order, setOrder] = useState('asc');
//     const [orderBy, setOrderBy] = useState('0');
//     const [rowsPerPage, setRowsPerPage] = useState(25);
//     // const [openEdit, setOpenEdit] = useState(false);
//     // const [openDelete, setOpenDelete] = useState(false);
//     // const [organizationData, setOrganizationData] = useState({});
//  // const [selectedId, setSelectedId] = useState(null);

//     // ========== Table Pagination ========== //
//     const handleChangePage = (event, newPage) => {
//         setPage(newPage);
//     };

//     const handleChangeRowsPerPage = (event) => {
//         setRowsPerPage(parseInt(event.target.value, 10));
//         setPage(0);
//     };

//     const handleRequestSort = (property) => {
//         const isAsc = orderBy === property && order === 'asc';
//         setOrder(isAsc ? 'desc' : 'asc');
//         setOrderBy(property);
//     };

//     const getAllData = () => {
//         setLoader(true);
//         const staticResponse = {
//             data: {
//                 total: 5,
//                 data: [
//                     { id: 1, name: 'Organization 1', location: 'City A' },
//                     { id: 2, name: 'Organization 2', location: 'City B' },
//                     { id: 3, name: 'Organization 3', location: 'City C' },
//                     { id: 4, name: 'Organization 4', location: 'City D' },
//                     { id: 5, name: 'Organization 5', location: 'City E' },
//                 ],
//             },
//         };

//         try {
//             const { data } = staticResponse.data.data;
//             recordsTotal = staticResponse.data.total;
//             setData(data);
//            // setSelectedId(staticResponse.data.id);
//             setLoader(false);
//         } catch (err) {
//             console.log("Data Is Not Getting",err)
//         }
//     };
//         // OrganizationListApi(params)
//         //     .then((res) => {
//         //         const { data } = res.data;
//         //         recordsTotal = data.total;
//         //         setData(data.data);
//         //         setLoader(false);
//         //     })
//         //     .catch((err) => apiErrorSnackBar(err));

//     useEffect(() => {
//         params.search = search;
//         if (search != '') {
//             setPage(0);
//         }
//         params.page = page + 1;
//         params.orderDir = order?.toUpperCase() ?? params.orderDir;
//         params.orderColumn = Number(orderBy);
//         params.length = rowsPerPage;
//         // params.trading_name = filter
//         // params.website = filter.filterWebsite;
//         // params.status = filter.filterStatus;

//         getAllData();
//     }, [page, order, orderBy, rowsPerPage, search, callApi, filter]);

//     useEffect(() => {
//         setPage(0);
//     }, [filter]);

//     // ========== Edit Detail========== //
//     // const editData = (row) => {
//     //     setOpenEdit((prevState) => !prevState);
//     //     setOrganizationData(row);
//     // };

//     // const submitHandler = () => {
//     //     setOpenEdit((prevState) => !prevState);
//     //     setPage(0);
//     //     getData();
//     // };

//     //  // ========== Delete Detail========== //
//     //  const deleteData = (row) => {
//     //     setOpenDelete(true);
//     //     setOrganizationData(row);
//     // };

//     // const deleteHandler = () => {
//     //     const staticId = selectedId;
//     //     if (!selectedId) {
//     //         console.error("No ID selected for deletion.");
//     //         return;
//     //     }

//     //     // Simulated static response
//     //     const Response = {
//     //         data: {
//     //             status: true, // Simulate a successful delete operation
//     //             message: "Organization deleted successfully.", // Optional message
//     //         },
//     //     };

//     //     try {
//     //         // Simulate the API call
//     //         console.log(`Deleting organization with id: ${staticId}`);
//     //         if (Response.data && Response.data.status === true) {
//     //             setPage(0); // Reset to the first page
//     //             getData(); // Refresh the data
//     //             setOpenDelete(false); // Close the delete confirmation dialog
//     //             apiSuccessSnackBar(Response); // Display success message
//     //         } else {
//     //             apiErrorSnackBar(Response); // Handle error scenario
//     //         }
//     //     } catch (err) {
//     //         apiErrorSnackBar(err); // Handle unexpected errors
//     //     }
//     // };

//   return (
//     <>
//       <TableContainer>
//         <Table size="small">
//           <EnhancedTableHead
//             order={order}
//             orderBy={orderBy}
//             handleRequestSort={handleRequestSort}
//           />
//           <TableBody>
//             {loader ? (
//               <TableRow>
//                 <TableCell align="center" colSpan={4}>
//                   {/* Show a loading indicator or message */}
//                   <Typography>Loading...</Typography>
//                 </TableCell>
//               </TableRow>
//             ) : getData > 0 ? (
//               getData.map((item, index) => (
//                 <TableRow hover role="checkbox" key={index}>
//                   <TableCell align="left">
//                     {item.name}
//                     <Typography variant="subtitle2" display={"flex"}>
//                       <LinkIcon sx={{ mt: -0.3 }} color="primary" />
//                       <Link href={item.website} target="_blank" ml={0.5}>
//                         {item.website}
//                       </Link>
//                     </Typography>
//                   </TableCell>
//                   <TableCell align="left">{item.trading_name}</TableCell>
//                   <TableCell align="left">
//                     <Chip
//                       size="small"
//                       label={item.status}
//                       color={item.status === "Active" ? "success" : "error"}
//                     />
//                   </TableCell>
//                   {/* Uncomment if you need these actions */}
//                   {/* <TableCell align="right">
//           <EditDeleteAction
//             data={item}
//             editRestriction="CAN_EDIT_ORGANIZATION"
//             deleteRestriction="CAN_Delete_ORGANIZATION"
//           />
//         </TableCell> */}
//                 </TableRow>
//               ))
//             ) : (
//               <TableRow>
//                 <TableCell align="center" colSpan={4}>
//                   {/* Display a "No Data Found" message */}
//                   <Typography>No records found.</Typography>
//                 </TableCell>
//               </TableRow>
//             )}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <TablePagination
//         rowsPerPageOptions={[1, 10, 25, 50, 100]}
//         component="div"
//         count={Number(recordsTotal)}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onPageChange={handleChangePage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//       />

//       {/* {openEdit && (
//         <CommonDialog
//                     open={openEdit}
//                     title="Edit Organization"
//                     onClose={() => setOpenEdit((prevState) => !prevState)}
//                     id="editOrganization"
//                     sx={{
//                         '& .MuiDialog-container ': {
//                             justifyContent: 'flex-end',
//                             '& .MuiPaper-root': {
//                                 m: 0,
//                                 p: 0,
//                                 borderRadius: '0px',
//                                 minWidth: { sm: '40%', xs: '100%' },
//                                 minHeight: '100%'
//                             }
//                         }
//                     }}
//                 >
//                     <AddEditOrganization value={organizationData} formID="editOrganization" onSubmit={submitHandler} />
//                 </CommonDialog>
//            )} */}

//       {/* {openDelete && (
//                 <DeleteDialog
//                     onDeleteHandler={deleteHandler}
//                     onClose={() => setOpenDelete(false)}
//                     open={openDelete}
//                     dept="Organization"
//                     name={organizationData['name']}
//                 />
//             )} */}
//     </>
//   );
// };
// export default OrganizationList;

// OrganizationList.propTypes = {
//     search: PropTypes.string,
//     callApi: PropTypes.bool,
//     filter: PropTypes.object
// };

// function EnhancedTableHead({ order, orderBy, handleRequestSort }) {
//     const createSortHandler = (property) => () => {
//         handleRequestSort(property);
//     };

//     return (
//         <TableHead>
//             <TableRow
//                 sx={{
//                     backgroundColor: 'secondary.light'
//                 }}
//             >
//                 <TableCell key="name">
//                     <TableSortLabel active={orderBy === '0'} direction={orderBy === '0' ? order : 'asc'} onClick={createSortHandler('0')}>
//                         Name
//                     </TableSortLabel>
//                 </TableCell>
//                 <TableCell key="trading_name">
//                     <TableSortLabel active={orderBy === '1'} direction={orderBy === '1' ? order : 'asc'} onClick={createSortHandler('1')}>
//                         Trading Name
//                     </TableSortLabel>
//                 </TableCell>
//                 <TableCell key="status">
//                     <TableSortLabel active={orderBy === '2'} direction={orderBy === '2' ? order : 'asc'} onClick={createSortHandler('2')}>
//                         Status
//                     </TableSortLabel>
//                 </TableCell>
//                 <TableCell align="right">Action</TableCell>
//             </TableRow>
//         </TableHead>
//     );
// }
// EnhancedTableHead.propTypes = {
//     order: PropTypes.string,
//     orderBy: PropTypes.string,
//     handleRequestSort: PropTypes.func
// };

import PropTypes from "prop-types";
import { Link as LinkIcon } from "@mui/icons-material";
import { useState, useEffect } from "react";
import {
  Chip,
  ButtonBase,
  Grid2,
  Link,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Typography,
  useTheme,
  FormControl, 
  InputLabel, 
  Select,
  MenuItem,
  OutlinedInput,
  InputAdornment,

} from "@mui/material";
import React from "react";
import MainCard from "../ui-components/MainCard/MainCard";
import {FilterAlt , SearchOutlined} from '@mui/icons-material';
import { gridSpacing } from "../../store/constant";
import Transitions from "../ui-components/Extended/Transitions";
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import AddAction from '../ui-components/Extended/AddAction';
import { useTransition } from 'react';

//import NoDataFound from 'ui-component/NoDataFound';
//import SingleLineListSkeleton from 'ui-component/CommonSkeleton/SingleLineListSkeleton';

const initialFilter = {
  filterUser: '',
  filterStartDate: null,
  filterEndDate: null,
  filterStatus: ''
};
const status = [{ label: 'Active' }, { label: 'Inactive' }];
const OrganizationList = ({ }) => {
  const theme = useTheme();
  const [filterOpen, setFilterOpen] = useState(true);
  const [openAdd, setOpenAdd] = useState(false);
  const [initData, setInitData] = useState({});
  const [filter, setFilter] = useState(initialFilter);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("0");
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const [search, setSearch] = useState('');
  const [Transition, startTransition] = useTransition();

  const handleSearch = (event) => {
    startTransition(() => setSearch(event.target.value));
};
  const handleFilter = (key, event) => {
    if (key !== 'reset') {
        const newString = event;
        setFilter({ ...filter, [key]: newString });
    } else {
        setFilter({ ...initialFilter });
    }
};

const openFilter = () => {
    setFilterOpen((prevState) => !prevState);
};

const submitHandler = () => {
  setOpenAdd((prevState) => !prevState);
  setCallApi((prevState) => !prevState);
};

const addData = () => {
  setOpenAdd((prevState) => !prevState);
};

  useEffect(() => {
    // Static data to display in the table on initial load
    const staticData = [
      {
        name: "Org 1",
        website: "https://org1.com",
        trading_name: "Trading 1",
        status: "Active",
      },
      {
        name: "Org 2",
        website: "https://org2.com",
        trading_name: "Trading 2",
        status: "Inactive",
      },
      {
        name: "Org 3",
        website: "https://org3.com",
        trading_name: "Trading 3",
        status: "Active",
      },
    ];

    setData(staticData);
  }, [search, filter]);

  // ========== Table Pagination ========== //
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  return (
    <>
      <MainCard
        title={
          <Grid2
            container
            alignItems="center"
            spacing={gridSpacing}
            //sx={{ mb: -1, mt: -4 }}
          >
            <Grid2 item xs={12}>
              <Grid2 container alignItems="center" spacing={gridSpacing}>
                <Grid2 item sx={{ flexGrow: 1 }}>
                  <Typography variant="column">Organization List</Typography>
                </Grid2>
                <Grid2 item>
                  <ButtonBase
                    disableRipple
                    onClick={() => {
                      openFilter();
                    }}
                  >
                    <FilterAlt
                      sx={{
                        fontWeight: 500,
                        color:
                          JSON.stringify(filter) !==
                          JSON.stringify(initialFilter)
                            ? "secondary.dark"
                            : "secondary.200",
                      }}
                    />
                    <Typography variant="h6" sx={{ mt: 0.5 }}>
                      Filter
                    </Typography>
                  </ButtonBase>
                </Grid2>
                <AddAction
                  Title="Add Organization"
                  AddHandler={addData}
                  AddRestriction="CAN_ADD_ORGANIZATION"
                />
                <Grid2 item>
                  <OutlinedInput
                    id="input-search-list-style1"
                    placeholder="Search"
                    startAdornment={
                      <InputAdornment position="start">
                        <SearchOutlined stroke={"white"} fontSize="small" />
                      </InputAdornment>
                    }
                    size="small"
                    onChange={handleSearch}
                    autoComplete="off"
                  />
                </Grid2>
              </Grid2>
            </Grid2>
          </Grid2>
        }
        content={true}
      >
        {filterOpen && (
          <Transitions
            type="grow"
            in={filterOpen}
            position="top-left"
            direction="up"
            mb="20px"
          >
            <MainCard
              content={false}
              sx={{
                padding: "20px",
                background:
                  theme.palette.mode === "dark"
                    ? theme.palette.dark.main
                    : theme.palette.primary.light,
              }}
            >
              <Grid2 container spacing={gridSpacing}>
                <Grid2 item md={3} xs={12}>
                  <FormControl size="small" fullWidth>
                    <InputLabel id="filterUser">Employee</InputLabel>
                    <Select
                      fullWidth
                      size="small"
                      labelId="filterUser"
                      id="filterUser"
                      label="Employee"
                      value={filter.filterUser}
                      onChange={(e) =>
                        handleFilter("filterUser", e.target.value)
                      }
                    >
                      <MenuItem value={""} key={-1}>
                        Select
                      </MenuItem>
                      {initData?.users?.map((val, idx) => (
                        <MenuItem value={val.id} key={idx}>
                          {val.full_name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid2>
                <LocalizationProvider dateAdapter={AdapterMoment}>
                  <Grid2 item md={3} xs={12}>
                    <DatePicker
                      id="filterStartDate"
                      name="filterStartDate"
                      label="Start Date"
                      inputFormat="YYYY/MM/DD"
                      format="DD/MM/YYYY"
                      defaultValue={null}
                      value={filter.filterStartDate}
                      onAccept={(date) =>
                        handleFilter("filterStartDate", moment(date))
                      }
                      slotProps={{
                        textField: {
                          fullWidth: true,
                          size: "small",
                        },
                      }}
                    />
                  </Grid2>
                  <Grid2 item md={3} xs={12}>
                    <DatePicker
                      id="filterEndDate"
                      name="filterEndDate"
                      label="End Date"
                      inputFormat="YYYY/MM/DD"
                      format="DD/MM/YYYY"
                      defaultValue={null}
                      value={filter.filterEndDate}
                      onAccept={(date) =>
                        handleFilter("filterEndDate", moment(date))
                      }
                      slotProps={{
                        textField: {
                          fullWidth: true,
                          size: "small",
                        },
                      }}
                    />
                  </Grid2>
                </LocalizationProvider>
                <Grid2 item md={3} xs={12}>
                  <FormControl size="small" fullWidth>
                    <InputLabel id="filterStatus">Status</InputLabel>
                    <Select
                      fullWidth="true"
                      size="small"
                      labelId="filterStatus"
                      id="filterStatus"
                      label="Status"
                      value={filter.filterStatus}
                      onChange={(e) =>
                        handleFilter("filterStatus", e.target.value)
                      }
                    >
                      <MenuItem value={""}>Select</MenuItem>
                      {status.map((item, idx) => (
                        <MenuItem key={idx} value={item.label}>
                          {item.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid2>
                {JSON.stringify(filter) !== JSON.stringify(initialFilter) && (
                  <Grid2 item>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => handleFilter("reset", undefined)}
                    >
                      Clear All
                    </Button>
                  </Grid2>
                )}
              </Grid2>
            </MainCard>
          </Transitions>
        )}

        <TableContainer>
          <Table size="small">
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              handleRequestSort={handleRequestSort}
            />
            <TableBody>
              {data.length > 0 ? (
                data.map((item, index) => (
                  <TableRow hover role="checkbox" key={index}>
                    <TableCell align="left">
                      {item.name}
                      <Typography variant="subtitle2" display={"flex"}>
                        <LinkIcon sx={{ mt: -0.3 }} color="primary" />
                        <Link href={item.website} target="_blank" ml={0.5}>
                          {item.website}
                        </Link>
                      </Typography>
                    </TableCell>
                    <TableCell align="left">{item.trading_name}</TableCell>
                    <TableCell align="left">
                      <Chip
                        size="small"
                        label={item.status}
                        color={item.status === "Active" ? "success" : "error"}
                      />
                    </TableCell>
                    <TableCell align="right">-</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell align="center" colSpan={4}>
                    {/* <NoDataFound height={'319px'} /> */}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[1, 10, 25, 50, 100]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </MainCard>
    </>
  );
};

OrganizationList.propTypes = {
  search: PropTypes.string,
  filter: PropTypes.object,
};

export default OrganizationList;

function EnhancedTableHead({ order, orderBy, handleRequestSort }) {
  const createSortHandler = (property) => () => {
    handleRequestSort(property);
  };

  return (
    <TableHead>
      <TableRow
        sx={{
          backgroundColor: "secondary.light",
        }}
      >
        <TableCell key="name">
          <TableSortLabel
            active={orderBy === "0"}
            direction={orderBy === "0" ? order : "asc"}
            onClick={createSortHandler("0")}
          >
            Name
          </TableSortLabel>
        </TableCell>
        <TableCell key="trading_name">
          <TableSortLabel
            active={orderBy === "1"}
            direction={orderBy === "1" ? order : "asc"}
            onClick={createSortHandler("1")}
          >
            Trading Name
          </TableSortLabel>
        </TableCell>
        <TableCell key="status">
          <TableSortLabel
            active={orderBy === "2"}
            direction={orderBy === "2" ? order : "asc"}
            onClick={createSortHandler("2")}
          >
            Status
          </TableSortLabel>
        </TableCell>
        <TableCell align="right">Action</TableCell>
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  order: PropTypes.string,
  orderBy: PropTypes.string,
  handleRequestSort: PropTypes.func,
};
