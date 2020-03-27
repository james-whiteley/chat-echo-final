import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

import { useDispatch } from 'react-redux';
import { pushElement } from './reducers/arraySlice';

// COMPONENTS
import ChatHistory from './components/ChatHistory';
import ChatWindow from './components/ChatWindow';

const useStyles = makeStyles((theme) => ({
	toolbar: {
		textAlign: 'center'
	},
	title: {
	  flexGrow: 1,
	},
	appBarSpacer: theme.mixins.toolbar,
	paper: {
	  padding: theme.spacing(2),
	  display: 'flex',
	  overflow: 'auto',
	  flexDirection: 'column',
	},
	fixedHeight: {
	  height: 240,
	},
	footer: {
	  padding: theme.spacing(3, 2),
	  marginTop: 'auto',
	  backgroundColor:
	    theme.palette.type === 'dark' ? theme.palette.grey[800] : theme.palette.grey[200],
	},
	chatHistory: {
		height: '100vh'
	},
	chatWindow: {
		height: '100vh'
	}
}));

export default function Chat() {
	const classes = useStyles();

	const dispatch = useDispatch();
	
	function openChat() {
		var date = new Date();
    dispatch(pushElement({ message: 'Welcomes to my awesome chat app!', bot: true, timestamp: date.toString() }));
	}

	return (
		<div className={classes.root}>
    
    <AppBar position="absolute">
      <Toolbar className={classes.toolbar}>
				<Button color="inherit" onClick={openChat}>Add Chat</Button>
        <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
          An awesome chat app
        </Typography>
      </Toolbar>
    </AppBar>
    <main className={classes.content}>
			<div className={classes.appBarSpacer} />
			<Grid container>
        <Grid item xs={2}>
          <Box component="span" className={classes.chatHistory}>
						<ChatHistory />
					</Box>
        </Grid>
				<Grid item xs={10}>
          <Box className={classes.chatWindow}>
						<ChatWindow />
					</Box>
        </Grid>
      </Grid>
    </main>
  </div>
	);
}