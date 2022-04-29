import { Box, Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';
import MultiActionAreaCard from '../../components/card';
import { getRequest } from '../../utils/RequestService';

const Home = () => {

     // const [currentPage, setCurrentPage] = useState(1);
     const [recipes, setRecipes] = useState([]);

     const init = async () => {
          let recipes = await getRequest("/getAll");
          setRecipes(recipes.data?.data);
     }

     useEffect(() => {
          init();
     }, [])

     return (
          <Grid container mb={10} mt={0} spacing={5}>
               {
                    recipes.map((recipe, i) => <Grid key={i} item  style={{ margin: "auto" }}>
                         <MultiActionAreaCard recipe={recipe} refresh={init}/>
                    </Grid>
                    )
               }
          </Grid>
     );
};

export default Home;
