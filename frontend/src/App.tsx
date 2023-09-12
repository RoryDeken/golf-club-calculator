import "./App.css";
import {
  AppBar,
  Box,
  Button,
  Grid,
  IconButton,
  LinearProgress,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import MenuIcon from "@mui/icons-material/Menu";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  interface Club {
    id: number;
    name: string;
    dist: string;
  }

  const [recommended, setRecommended] = useState<String>();
  const [dist, setDist] = useState<String>();
  const [clubs, setClubs] = useState<Club[]>();
  const [isLoading, setIsLoading] = useState<boolean>();

  const onEditButtonClick = (e: any, row: any) => {
    e.stopPropagation();
    axios
      .post(row.links[0].href, {
        name: "Edited club",
        dist: "120",
      })
      .then(() => {
        setIsLoading(false);
      });
  };
  const onAddButtonClick = (e: any, row: any) => {
    setIsLoading(true);
    e.stopPropagation();
    axios
      .post(row.links[1].href, {
        name: "Added club",
        dist: "300",
      })
      .then(() => {
        setIsLoading(false);
      });
  };
  const onDeleteButtonClick = (e: any, row: any) => {
    e.stopPropagation();
    axios.delete(row.links[0].href).then(() => {
      setIsLoading(false);
    });
  };
  const handleDistChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    setIsLoading(true);
    const regex = /^[0-9\b]+$/;
    if (
      (e.currentTarget.value as string) === "" ||
      regex.test(e.currentTarget.value as string)
    ) {
      setDist(e.currentTarget.value as string);
    } else {
      setDist("");
    }
  };
  useEffect(() => {
    axios.get(`http://localhost:8080/clubs`).then((res) => {
      setClubs(res.data);
    });
    dist
      ? axios.get(`http://localhost:8080/suggest/${dist}`).then((res) => {
          setRecommended(res.data);
        })
      : null;
  }, [dist, clubs]);

  const columns: GridColDef[] = [
    { field: "name", headerName: "Club name", width: 300 },
    { field: "dist", headerName: "Club Avg Yardage", width: 300 },
    {
      field: "actions",
      headerName: "Actions",
      width: 300,
      renderCell: (params) => {
        return (
          <>
            <Button
              onClick={(e) => onAddButtonClick(e, params.row)}
              variant="contained"
              color="success"
              sx={{ marginRight: 2 }}
            >
              Add
            </Button>
            <Button
              onClick={(e) => onEditButtonClick(e, params.row)}
              variant="contained"
              sx={{ marginRight: 2 }}
            >
              Edit
            </Button>
            <Button
              onClick={(e) => onDeleteButtonClick(e, params.row)}
              variant="contained"
              color="error"
              sx={{ marginRight: 2 }}
            >
              Delete
            </Button>
          </>
        );
      },
    },
  ];

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" sx={{ backgroundColor: "#1e692b" }}>
          <Toolbar>
            <IconButton size="large" edge="start" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Club Calculator
            </Typography>
          </Toolbar>
        </AppBar>

        <Grid
          container
          spacing={2}
          sx={{ paddingTop: "100px" }}
          justifyContent={"center"}
        >
          <Grid
            item
            xs={8}
            justifyContent={"center"}
            alignItems={"center"}
            alignContent={"center"}
          >
            <Typography variant="h1">Club Calculator</Typography>
            <Typography variant="subtitle1">
              {recommended
                ? recommended
                : "Enter a distance into the field to get a suggested club"}
            </Typography>
            <Typography variant="subtitle2"></Typography>
            <TextField
              name="remainingDist"
              label="Distance to hole"
              variant="outlined"
              value={dist}
              onChange={handleDistChange}
            ></TextField>

            <Typography variant="h3">Clubs in bag</Typography>
            {isLoading ? <LinearProgress /> : null}
            <Box sx={{ height: 800, width: "100%" }}>
              <DataGrid
                rows={clubs ? clubs : []}
                columns={columns}
                checkboxSelection
                /*
                initialState={{
                  sorting: {
                    sortModel: [{ field: "dist", sort: "desc" }],
                  },
                }} */
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default App;
