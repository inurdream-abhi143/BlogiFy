import { Container, Grid } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import AdminNavbar from "./Components/AdminNavbar/AdminNavbar";

const AdminLayout = () => {
  return (
    <>
      <Grid container spacing={0.5}>
        <Grid item xs={12} md={3}>
          <AdminNavbar />
        </Grid>
        <Grid item xs={12} md={9}>
          <Outlet />
        </Grid>
      </Grid>
    </>
  );
};

export default AdminLayout;
