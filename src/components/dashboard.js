import React from "react";
import { Grid } from "@mui/material";
//import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import "./dasboard.css";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
//import MenuData from "./MenuData";
import InventoryIcon from "@mui/icons-material/Inventory";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import HelpIcon from "@mui/icons-material/Help";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
//import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import { alpha } from "@mui/material/styles";
//import AppBar from "@mui/material/AppBar";
//import IconButton from '@mui/material/IconButton';
//import Typography from '@mui/material/Typography';
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import WavingHandSharpIcon from "@mui/icons-material/WavingHandSharp";
import Paper from "@mui/material/Paper";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import NorthRoundedIcon from "@mui/icons-material/NorthRounded";
import SouthOutlinedIcon from "@mui/icons-material/SouthOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { BarChart } from "@mui/x-charts/BarChart";
import { useStyles } from "./styles";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const drawerWidth = 240;

function createData(name, image, description, stock, totalSales, price) {
  return { name, image, description, stock, totalSales, price };
}

const rows = [
  createData(
    "abstract 3d",
    "/abstract3d.jpg",
    "loreum ipsum dolor sit amet,consectutur adipscing edit",
    "32 in stock",
    "$45.99",
    "20"
  ),
  createData(
    "sarphens illustration",
    "/realisticimage.jpg",
    "loreum ipsum dolor sit amet,consectutur adipscing edit",
    "32 in stock",
    "$45.9",
    "37"
  ),
];

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar1 = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const Dashboard = () => {
  // const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const classes = useStyles();
  const arrayOfListMarketing = [
    {
      icon: (
        <CurrencyExchangeOutlinedIcon
          fontSize="large"
          sx={{ color: "orange", opacity: "1" }}
        />
      ),
      detailName: "Earnings",
      price: "$198k",
      percentageRise: "37.8%",
      color: "green",
      backgroundColor: "#C0F5CE",
      arrowIconName: (
        <NorthRoundedIcon
          sx={{ fontSize: 13, fontWeight: "bold", color: "green" }}
        />
      ),
    },

    {
      icon: (
        <ListAltOutlinedIcon
          fontSize="large"
          sx={{ color: "orange", opacity: "1" }}
        />
      ),
      detailName: "orders",
      price: "$2.4k",
      percentageRise: "2%",
      color: "red",
      backgroundColor: "lightyellow",
      arrowIconName: (
        <SouthOutlinedIcon
          sx={{ fontSize: 13, fontWeight: "bold", color: "red" }}
        />
      ),
    },

    {
      icon: (
        <AccountBalanceWalletOutlinedIcon
          fontSize="large"
          sx={{ color: "#0a37fc", opacity: "1" }}
        />
      ),
      detailName: "Balance",
      price: "$2.4k",
      percentageRise: "2%",
      color: "red",
      backgroundColor: "red",
      arrowIconName: (
        <SouthOutlinedIcon
          sx={{ fontSize: 13, fontWeight: "bold", color: "red" }}
        />
      ),
    },

    {
      icon: (
        <LocalMallOutlinedIcon
          fontSize="large"
          sx={{ color: "orange", opacity: "1" }}
        />
      ),
      detailName: "Total sales",
      price: "$89k",
      percentageRise: "11%",
      color: "green",
      backgroundColor: "#F5C0D7",
      arrowIconName: (
        <NorthRoundedIcon
          sx={{ fontSize: 13, fontWeight: "bold", color: "green" }}
        />
      ),
    },
  ];

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    color: "black",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    //color: 'inherit',
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar1
          position="fixed"
          open={open}
          style={{ backgroundColor: "transparent" }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                // flexGrow: 1,
                display: { xs: "none", sm: "block", color: "black" },
              }}
              className="titleName"
            >
              Hello Madhan kumar
            </Typography>
            <WavingHandSharpIcon
              size="large"
              edge="start"
              color="secondary"
              aria-label="open drawer"
              sx={{ mr: "auto", ml: 2 }}
            >
              <MenuIcon />
            </WavingHandSharpIcon>
            <Search style={{ backgroundColor: "lightblue" }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Toolbar>
        </AppBar1>
        <Drawer variant="permanent" open={open} className={classes.bg}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {/* {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />} */}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {[
              "Dashboard",
              "Customers",
              "Products",
              "Income",
              "Promote",
              "Help",
            ].map((text, index) => (
              <ListItem key={index} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {text === "Dashboard" && (
                      <DashboardCustomizeIcon style={{ color: "white" }} />
                    )}
                    {text === "Customers" && (
                      <PersonOutlineIcon style={{ color: "white" }} />
                    )}{" "}
                    {text === "Products" && (
                      <InventoryIcon style={{ color: "white" }} />
                    )}{" "}
                    {text === "Income" && (
                      <AttachMoneyIcon style={{ color: "white" }} />
                    )}
                    {text === "Promote" && (
                      <PointOfSaleIcon style={{ color: "white" }} />
                    )}
                    {text === "Help" && <HelpIcon style={{ color: "white" }} />}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 1 }} />
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <ChevronRightIcon style={{ color: "white" }} />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List></List>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Grid container>
            <Grid
              item
              // className="DetailsPage"
              // style={{ width: "calc(100% - max-width)" }}
              md={12}
              xs={10}
              lg={12}
            >
              <Box sx={{ flexGrow: 1 }}>
                <Grid
                  container
                  rowGap={2}
                  columnGap={2}
                  m={3}
                  className="gridRowClass"
                  style={{
                    display: "flex",
                    flexWrap: "nowrap",
                    width: "auto",
                  }}
                >
                  {arrayOfListMarketing.map((item, index) => {
                    const {
                      icon,
                      detailName,
                      price,
                      percentageRise,
                      arrowIconName,
                      color,
                      backgroundColor,
                    } = item;
                    return (
                      <React.Fragment key={index}>
                        <Grid
                          item
                          md={3}
                          sm={12}
                          lg={3}
                          style={{
                            backgroundColor: "#FFFFFF",
                            height: "128px",
                            borderRadius: "5px",
                          }}
                          className={
                            detailName === "Total sales" ? classes.salesSvg : ""
                          }
                        >
                          <Paper elevation={3} />
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "space-evenly", // Center content along perpendicular x-axis (vertically)
                              alignItems: "center", // Center content along y-axis (horizontally)
                              height: "100%",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "75px",
                                width: "75px",
                                borderRadius: "50%",
                                backgroundColor,
                              }}
                            >
                              {icon}
                            </div>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                height: "75px",

                                overflow: "hidden", // Hide content that exceeds the box
                                padding: "5px", // Add padding for inner content spacing
                                boxSizing: "border-box",
                              }}
                            >
                              <p style={{ margin: 0 }}>{detailName}</p>
                              <p
                                style={{
                                  margin: 0,
                                  fontWeight: "bold",
                                  color: "black",
                                  opacity: "1",
                                }}
                              >
                                {price}
                              </p>
                              <p style={{ margin: 0, fontSize: "13px" }}>
                                <span
                                  style={{
                                    color,
                                    fontSize: "13px",
                                    fontWeight: 900,
                                  }}
                                >
                                  {arrowIconName} {percentageRise}
                                </span>
                                this month
                              </p>
                            </div>
                          </div>
                        </Grid>
                      </React.Fragment>
                    );
                  })}
                </Grid>

                <Grid
                  container
                  rowGap={2}
                  columnGap={2}
                  ml={3}
                  mb={3}
                  className="gridRowClass"
                  style={{
                    // display: "flex",
                    // flexWrap: "nowrap",
                    width: "auto",
                  }}
                >
                  <Grid
                    item
                    md={8}
                    sm={8}
                    xs={12}
                    style={{
                      //height: "100%",
                      backgroundColor: "#FFFFFF",
                      borderRadius: "5px",
                      width: "auto",
                    }}
                  >
                    <Grid container>
                      {" "}
                      <Grid
                        item
                        md={6}
                        sm={6}
                        xs={6}
                        style={{
                          paddingTop: "5px",
                          paddingLeft: "10px",
                          backgroundColor: "white",
                        }}
                      >
                        <Typography variant="subtitle1">Overview</Typography>
                        <Typography
                          variant="subtitle2"
                          style={{ fontSize: "9px", color: "#CFCACA" }}
                        >
                          Monthly Earning
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        md={6}
                        sm={6}
                        xs={6}
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                          paddingTop: "5px",
                          paddingRight: "30px",
                          backgroundColor: "white",
                        }}
                      >
                        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                          <InputLabel id="demo-select-small-label">
                            Quartarly
                          </InputLabel>
                          <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            // label="Age"
                            disabled
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                    </Grid>

                    <BarChart
                      xAxis={[
                        {
                          id: "barCategories",
                          data: [
                            "Jan",
                            "Feb",
                            "March",
                            "April",
                            "May",
                            "June",
                            "July",
                            "Aug",
                            "Sep",
                            "Oct",
                            "Nov",
                            "Dec",
                          ],
                          scaleType: "band",
                        },
                      ]}
                      series={[
                        {
                          data: [2, 5, 3, 7, 5, 3, 6, 5, 3, 2, 5, 6],
                        },
                      ]}
                      // width={700}
                      height={300}
                    />
                  </Grid>

                  <Grid
                    item
                    md={3.5}
                    sm={6}
                    xs={12}
                    style={{
                      //height: "40vh",
                      backgroundColor: "#FFFFFF",
                      borderRadius: "5px",

                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "10px",
                    }}
                  >
                    <Grid
                      item
                      md={12}
                      sm={12}
                      xs={12}
                      style={{
                        paddingTop: "5px",
                        paddingLeft: "10px",
                        backgroundColor: "white",
                        fontWeight: "900",
                        fontStyle: "bold",
                      }}
                    >
                      <Typography
                        variant="subtitle1"
                        style={{
                          fontSize: "20px",
                          color: "black",
                          fontWeight: "900",
                        }}
                      >
                        Customers
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        style={{
                          fontSize: "7px",
                          color: "#CFCACA",
                          fontWeight: "900",
                          display: "block",
                        }}
                      >
                        Customers that buy products
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      md={12}
                      sm={12}
                      xs={12}
                      style={{ textAlign: "center", marginTop: "10px" }}
                    >
                      <div className="outer-circle">
                        <div className="inner-circle">
                          {" "}
                          <div className="inner-circle1">
                            <div className="content">
                              <p style={{ fontSize: "30px", height: "7px" }}>
                                {" "}
                                65%{" "}
                              </p>{" "}
                              <p>total new customers</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Grid>
                  </Grid>

                  <TableContainer
                    component={Paper}
                    style={{ marginRight: "20px", width: "100%" }}
                    // sm={12}
                    // xs={12}
                  >
                    <Table
                      sx={{ minWidth: 650, width: "100%" }}
                      aria-label="simple table"
                    >
                      <TableHead>
                        <TableRow>
                          <TableCell
                            sx={{ fontWeight: "900", borderBottom: "none" }}
                          >
                            Product sell
                          </TableCell>
                          <TableCell
                            align="right"
                            colSpan={2}
                            sx={{ borderBottom: "none" }}
                          >
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                backgroundColor: "#f0f0f0",
                                padding: "5px",
                                borderRadius: "10px",
                              }}
                            >
                              <SearchOutlinedIcon
                                style={{ marginRight: "5px" }}
                              />
                              <span>Search</span>
                            </div>
                          </TableCell>
                          <TableCell
                            align="right"
                            sx={{ borderBottom: "none" }}
                          >
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                backgroundColor: "#f0f0f0",
                                padding: "5px",
                                borderRadius: "10px",

                                whiteSpace:
                                  "nowrap" /* Prevent content from wrapping */,
                                flexShrink: 0,
                              }}
                            >
                              <KeyboardArrowDownOutlinedIcon
                                style={{ marginRight: "5px" }}
                              />
                              <span>Last 30 days</span>
                            </div>
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableHead>
                        <TableRow>
                          <TableCell>Product Name</TableCell>
                          <TableCell align="right">Stock</TableCell>
                          <TableCell align="right">Price&nbsp;</TableCell>
                          <TableCell align="right">Total Sales&nbsp;</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row, index) => (
                          <TableRow
                            key={index}
                            sx={{
                              "&:last-child td, &:last-child th": {
                                border: 0,
                              },
                            }}
                          >
                            <TableCell component="th" scope="row">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <img
                                  src={row.image}
                                  alt={row.name}
                                  style={{
                                    marginRight: "10px",
                                    width: "75px",
                                    height: "50px",
                                    borderRadius: "5px",
                                  }}
                                />
                                <div
                                  style={{
                                    display: "flex",
                                    flexDirection: "column",
                                  }}
                                >
                                  <p
                                    style={{ fontWeight: "900", height: "1px" }}
                                  >
                                    {" "}
                                    {row.name}
                                  </p>
                                  <p>{row.description}</p>{" "}
                                </div>
                              </div>
                            </TableCell>
                            <TableCell align="right">{row.stock}</TableCell>
                            <TableCell
                              align="right"
                              style={{ fontWeight: "900" }}
                            >
                              {row.price}
                            </TableCell>
                            <TableCell align="right">
                              {row.totalSales}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};
export default Dashboard;
