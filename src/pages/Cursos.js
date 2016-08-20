import React from 'react';

export default class Cursos extends React.Component {
	constructor() {
		super()
	}
	
	render() {
		return (
			<div>
				<h1 className="title">Cursos</h1>
				{this.props.children}
			</div>
		);
	}
}