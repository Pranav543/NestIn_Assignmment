import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Menu, Button,Toolbar, MenuItem } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
	root       : {
		flexGrow : 1
	},
	menuButton : {
		marginRight : theme.spacing(2)
	},
	title      : {
		flexGrow : 1
	},
	logo       : {
		maxWidth : 60
	}
}));

const Header = () => {
	const classes = useStyles();
	const [
		anchorEl,
		setAnchorEl
	] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div className={classes.root}>
			<AppBar position="static" color="inherit">
				<Toolbar>
					<img src="https://i.ibb.co/DQW1HHq/logo.png" alt="logo" className={classes.logo} />
					<div className={classes.title}>
						<Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
							Select City
						</Button>
						<Menu
							id="simple-menu"
							anchorEl={anchorEl}
							keepMounted
							open={Boolean(anchorEl)}
							onClose={handleClose}
						>
							<MenuItem onClick={handleClose}>Bangalore</MenuItem>
							<MenuItem onClick={handleClose}>Pune</MenuItem>
							<MenuItem onClick={handleClose}>Mumbai</MenuItem>
						</Menu>
					</div>
					<Button color="inherit">Home</Button>
					<Button color="inherit">Services</Button>
					<Button color="inherit">Listings</Button>
					<Button color="inherit">Contacts</Button>
					<Button color="inherit">Login</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Header;
