import {Outlet} from "react-router-dom";
import Navbar from '../components/Navbar';
import Sidebar from '../components/SIdebar'
import {Grid, GridItem} from "@chakra-ui/react";

export default function RootLayout() {
  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
      <GridItem as="aside" colSpan={{base: 6, lg: 2, xl: 1}} bg="brand.500" minHeight={{lg: "100vh"}} p="30px">
       <Sidebar/>
      </GridItem>
      <GridItem as="main" colSpan={{base: 6, lg: 4, xl: 5}} p={{base: '20px', lg:"30px"}} >
        <Navbar />
        <Outlet />
      </GridItem>
    </Grid>
  );
}
