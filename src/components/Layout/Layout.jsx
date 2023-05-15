import AppBar from "components/AppBar/AppBar";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Box } from "./Layout.styled";

const Layout = () => {
  return (
    <Box>
    <AppBar/>
      <Suspense fallback={null}>
      <Outlet/>
      </Suspense>
    </Box>
  );
};

export default Layout;