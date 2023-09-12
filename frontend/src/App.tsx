import "./App.css";
import {
  AppBar,
  Box,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  interface Club {
    id: number;
    name: string;
    dist: string;
  }
  const [data, setData] = useState<any>();
  const [clubs, setClubs] = useState<Club[]>();

  useEffect(() => {
    axios.get(`http://localhost:8080/clubs`).then((res) => {
      setData(res.data);
    });
  }, []);
  useEffect(() => {
    setClubs(data?._embedded.clublist);
    console.log(data);
    console.log(clubs);
  }, [data]);
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
            {clubs?.length} Clubs in bag
            {clubs?.map((club: Club) => club.name + " " + club.dist)}
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default App;
