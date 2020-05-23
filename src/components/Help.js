import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root : {
		maxWidth  : '100%',
		margin    : '20px',
		textAlign : 'center'
	}
}));

export default function Help() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<div class="ui positive message">
				<i class="icon help" />
				Need Any Help? <a href="#"> Ask Us Here!!</a>
			</div>
		</div>
	);
}
