import React from 'react';
import { Grid } from '@material-ui/core';
import Header from './Header'
import Breadcrumbs from './Breadcrumbs';
import HouseCards from './HouseCard'
import Help from './Help'
import Footer from './Footer'
import HousesList from './Data'

function App() {

	const getHousesCard = (HouseCard) => {
		return(
			<Grid item container sm = {4} alignItems="stretch">
				<HouseCards {...HouseCard} />
			</Grid>
		)
	}

	return (
		<Grid container direction="column">
			<Grid item><Header /></Grid>
			<Grid item xs={12}> <Breadcrumbs /></Grid>
			<Grid item container>
				<Grid item xs={false} sm={2} />
				<Grid xs={12} sm={8}>
					<Grid container spacing = {4}>
						{HousesList.map(HouseCard => getHousesCard(HouseCard))}
						
					</Grid>
				
				</Grid>
			</Grid>
			<Grid item xs={0} sm={2} />
			<Grid item container>
				<Grid xs= {false} sm ={1} />
				
				<Grid item sm= {10}>
				<Help />	
				</Grid>
				
				<Grid xs= {false} sm ={1} />
			</Grid>
			<Footer />
		</Grid>
	);
}

export default App;
