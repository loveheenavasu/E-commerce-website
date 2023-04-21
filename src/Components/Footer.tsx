
import React, { FC, ReactElement } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

export const Footer: FC = (): ReactElement => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "rgb(242, 242, 242)",
        opacity:0.7,
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="black" variant="h5">
              E-Store.com
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="textSecondary" variant="subtitle1">
              {`${new Date().getFullYear()} |  This Year | New Deals| Latest  Fashion`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;