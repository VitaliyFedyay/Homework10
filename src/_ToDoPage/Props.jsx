import React from 'react';
import { Check } from 'react-feather';
import { X } from 'react-feather';
import Emoji from 'react-emoji-render';

const Li = {
	background: '#fff',
	width:'200px',
	height:'200px',	
	borderRadius: '10px',
	padding: '7px'
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

const DelBut = {
	bottom: '2px',
	marginRight: '2px'
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
			<p style={Li} className="todo">
			{list}
			<div style={DelBut}>
			<Check className="check" color="green" size={22} onClick={() => handleDone(list)} />
			<X className="cross" color="red" size={22} onClick={() => handleChange(list, TASK_STATUSES.TO_DO)} />
			</div>
			</p>
		</div>
	);
	const dlist = props.done.map((done, idx) =>
		<div key={idx}>
			<p className="done">{done}<X className="cross" color="red" size={22} onClick={() => handleChange(done, TASK_STATUSES.DONE)} /></p>
			
		</div>
	);

	return (
		<div>
			<span style={Left}><h1 style={{textAlign:"center",background:"white", borderRadius: "15px", padding: '2px'}}>Unfinished tasks!</h1>{rlist}{props.done.length}</span>
			<span style={Right}><h1 style={{textAlign:"center"}}>Complete task!</h1>{dlist}</span>
		</div>
	);
}
