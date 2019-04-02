import React from 'react';
import { Check } from 'react-feather';
import { X } from 'react-feather';
import Emoji from 'react-emoji-render';

const Li = {
	background: '#fff',
	width:'200px',
	height:'200px',	
	borderRadius: '10px'
}

const Left = {
	float: 'left'
}

const Right = {
	float: 'right',
	background: 'yellow',
	width:'400px',
	height:'100%',	
	borderRadius: '10px'
}

export const TASK_STATUSES = {
	TO_DO: 'TO_DO',
	DONE: 'DONE'
};

export default (props) => {
	const handleChange = (name, type) => {
		props.remove(name, type);
	};
	const handleDone = (name) => {
		props.complete(name);
	};
	const rlist = props.tasks.map((list, idx) =>
		<div key={idx}>
			<p style={Li} className="todo">{list}</p>
			<Check className="check" color="white" size={17} onClick={() => handleDone(list)} />
			<X className="cross" color="red" size={17} onClick={() => handleChange(list, TASK_STATUSES.TO_DO)} />
		</div>
	);
	const dlist = props.done.map((done, idx) =>
		<div key={idx}>
			<p className="done">{done}<X className="cross" color="red" size={17} onClick={() => handleChange(done, TASK_STATUSES.DONE)} /></p>
			
		</div>
	);

	return (
		<div>
			<span style={Left}>{rlist}{props.done.length}</span>
			<span style={Right}>{dlist}</span>
		</div>
	);
}
