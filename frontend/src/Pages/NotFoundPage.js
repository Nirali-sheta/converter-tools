import { Box, Button, Container, Typography } from "@mui/material";
import Layout from "Layout";
import { ROUTE_HOME } from "Store/constants";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            height: 'calc(100vh - 200px)',
            textAlign: 'center'
          }}
        >
          <Typography variant="h1">404</Typography>
          <Typography variant="h6">
            The page you're looking for doesn't exist.
          </Typography>
          <Button
            LinkComponent={Link}
            to={ROUTE_HOME}
            variant="contained"
            sx={{
              mt: 2,
              backgroundColor: '#27374D',
              ":hover": {
                backgroundColor: '#4c5c72'
              }
            }}
          >
            Back Home
          </Button>
        </Box>
      </Container>
    </>
  );
}
