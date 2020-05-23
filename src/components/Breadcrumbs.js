import React from 'react';
import { Breadcrumbs, Grid, Link, Fab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import NavigationIcon from '@material-ui/icons/Navigation';

function handleClick(event) {
	event.preventDefault();
	alert('You clicked a breadcrumb.');
}

const useStyles = makeStyles((theme) => ({
	margin       : {
		margin : theme.spacing(0)
	},

	buttonStyle  : {
		margin : theme.spacing(1)
	},

	extendedIcon : {
		marginRight : theme.spacing(1)
	},

	padding      : {
		padding    : theme.spacing(1.3),
		flexShrink : 0
	}
}));

const ActiveLastBreadcrumb = () => {
	const classes = useStyles();
	return (
		<div>
			<Grid item container>
				<Grid item xs={11}>
					<Breadcrumbs aria-label="breadcrumb" className={classes.padding}>
						<Link color="inherit" href="/" onClick={handleClick}>
							Spaces
						</Link>
						<Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
							Bangalore
						</Link>
						<Link
							color="textPrimary"
							href="/components/breadcrumbs/"
							onClick={handleClick}
							aria-current="page"
						>
							koramangala
						</Link>
					</Breadcrumbs>
				</Grid>
				<Grid item xs={1} className={classes.margin}>
					<Fab variant="extended" className={classes.buttonStyle} size="small">
						<NavigationIcon className={classes.extendedIcon} />
						Navigate
					</Fab>
				</Grid>
			</Grid>
		</div>
	);
};

export default ActiveLastBreadcrumb;
