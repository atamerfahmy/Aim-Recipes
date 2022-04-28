import { Box, Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';
import MultiActionAreaCard from '../../components/card';
import { getRequest } from '../../utils/RequestService';

const Home = () => {

     // const [currentPage, setCurrentPage] = useState(1);
     const [recipes, setRecipes] = useState([]);

     const init = async () => {
          let recipes = await getRequest("/getAll");
          console.log(recipes.data?.data)
          setRecipes(recipes.data?.data);
     }

     useEffect(() => {
          init();
     }, [])

     return (
          <Grid container mb={10} mt={5} ml={5}>
               {
                    recipes.map((recipe, i) => <Grid key={i} item mb={5} xs={12} sm={12} md={6} lg={4} xl={4}>
                         <MultiActionAreaCard recipe={recipe} refresh={init}/>
                    </Grid>
                    )
               }
          </Grid>
     );
};

export default Home;
