import { Box, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

function SpeedCalculator() {
  const [dist, setDist] = useState<number | string>();
  const checkIfInt = (target: string | number | unknown) => {
    let regex = /^[0-9\b]+\s?/;
    return (target as string) === "" || regex.test(target as string);
  };
  const handleSpeedChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    console.log(e.currentTarget.value);
    if (checkIfInt(e.currentTarget.value)) {
      var dist = parseInt(e.currentTarget.value as string) * 1.65;
      setDist(Math.round(dist));
    }
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={2}
          sx={{ paddingTop: "50px", paddingBottom: "100px" }}
          justifyContent={"center"}
        >
          <Grid
            item
            xs={8}
            justifyContent={"center"}
            alignItems={"center"}
            alignContent={"center"}
          >
            <Typography variant="h3">Distance Calculator</Typography>

            <TextField
              sx={{ my: 1 }}
              name="ballSpeed"
              label="Ball Speed in MPH"
              variant="outlined"
              type="number"
              onChange={handleSpeedChange}
            ></TextField>

            <Typography
              variant="h4"
              sx={{ paddingTop: "50px", paddingBottom: "50px" }}
            >
              Total Projected Carry Distance: {dist ? dist + "yds*" : ""}
            </Typography>

            <Typography
              variant="body1"
              sx={{ paddingTop: "50px", paddingBottom: "50px" }}
            >
              *This distance may vary based on elevation and temperature as well
              as the moisture in the air. This uses a baseline coefficient of
              1:1.65 from ballspeed to distance as a benchmark.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default SpeedCalculator;
