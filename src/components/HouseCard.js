import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles({
	root    : {
		maxWidth : 400
	},
	media   : {
		height : 200
	},
	ratings : {
		width      : 200,
		display    : 'flex',
		alignItems : 'center'
	}
});

const HouseCard = (props) => {
	const [
		value,
		setValue
	] = React.useState(2);
	const classes = useStyles();
	const { title, price, address, imageUrl } = props;

	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia className={classes.media} image={imageUrl} title={title} />
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{price}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						{address}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button size="small" color="primary">
					Share
				</Button>
				<Button size="small" color="primary">
					Learn More
				</Button>

				<Rating
					name="simple-controlled"
					value={value}
					onChange={(event, newValue) => {
						setValue(newValue);
					}}
				/>
			</CardActions>
		</Card>
	);
};

export default HouseCard;
