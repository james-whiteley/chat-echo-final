import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

// REDUX
import { useSelector } from 'react-redux';
import { selectArray } from '../reducers/arraySlice';

export default function ChatHistory() {
	const chatHistory = useSelector(selectArray);

	return (
		<List>
			{chatHistory.map((element, key) => {
				return element.bot !== true ? (
					<ListItem key={key} width={1}>
  	  			<ListItemText primary={`You said: ${element.message}`} />
  	  		</ListItem>
				) : null;
			})}
  	</List>
	);
}