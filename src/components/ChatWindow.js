import React, { useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';
import { makeStyles } from '@material-ui/core/styles';

// REDUX
import { useSelector, useDispatch } from 'react-redux';
import {
  pushElement,
	selectArray
} from '../reducers/arraySlice';

const useStyles = makeStyles((theme) => ({
	table: {
    minWidth: 650,
  },
  chatSection: {
    width: '100%',
		height: 'calc(100vh - 56px)',
		[`${theme.breakpoints.up('sm')}`]: {
      height: 'calc(100vh - 64px)',
    },
		[`${theme.breakpoints.down('lg')} and (orientation: portrait)`]: {
      height: 'calc(100vh - 48px)',
    },
		backgroundImage: "url(/chat-background.png)"
  },
  headBG: {
      backgroundColor: '#e0e0e0'
  },
  borderRight500: {
      borderRight: '1px solid #e0e0e0'
  },
  messageArea: {
		height: 'calc(100vh - 100px - 56px)',
		[`${theme.breakpoints.up('sm')}`]: {
      height: 'calc(100vh - 100px - 64px)',
    },
		[`${theme.breakpoints.down('lg')} and (orientation: portrait)`]: {
      height: 'calc(100vh - 100px - 48px)',
    },
    overflowY: 'auto'
  }
}));

export default function ChatWindow() {
	const classes = useStyles();

	const chatHistory = useSelector(selectArray);
  const dispatch = useDispatch();
  const [newElement, setNewElement] = useState('');

	function sendMessage(event) {
		// Add to redux state
		event.preventDefault();
            
    if (newElement !== '') {
			var date = new Date();
      dispatch(pushElement({ message: newElement, timestamp: date.toString() }));
      // Erase input after submit
      setNewElement('');
    }
	}

	return (
		<div>
  	  <Grid container component={Paper} className={classes.chatSection}>
  	    <Grid item xs={12}>
  	      <List className={classes.messageArea}>
						{chatHistory.map((element, key) => {
        		  return <ListItem key={key}>
        		      <Grid container direction={element.bot === true ? "row-reverse" : "row"}>
										<Box
											boxShadow={3}
      								bgcolor={element.bot === true ? "#FFFFFF" : "#EFFCFF"}
											align="left"
											width={1/3}
											p={2}
										>
											<Grid item xs={12}>
												<ListItemText secondary={`Sent on ${element.timestamp}`}></ListItemText>
  	        			  	</Grid>
  	        			  	<Grid item xs={12}>
  	        			  	  <ListItemText primary={element.message}></ListItemText>
  	        			  	</Grid>
										</Box>
  	        			</Grid>
        		    </ListItem>
        		})}
  	      </List>
					<Grid container style={{padding: '20px', height: '100px', borderTop: '1px solid rgba(0, 0, 0, 0.12)', backgroundColor: '#FFFFFF'}}>
						<form noValidate onSubmit={sendMessage} style={{width: '100%', display: 'flex'}} xs={12}>
  	    	  	<Grid item xs={11}>
  	    	  	  <TextField 
									label="Type your message here, and press enter to send"
									fullWidth
									id="message"
									name="message"
									autoComplete="off"
									value={newElement}
									onChange={e => setNewElement(e.target.value)}
								/>
  	    	  	</Grid>
  	    	  	<Grid item xs={1} align="right">
  	    	  	  <Fab 
									color="primary"
									aria-label="add"
									type="submit"
								>
									<SendIcon />
								</Fab>
  	    	  	</Grid>
						</form>
  	    	</Grid>
  	    </Grid>
  	  </Grid>
  	</div>
	);
}