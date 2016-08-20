import React from 'react';

const cursos = [
	{nome: 'React'},
	{nome: 'Redux'},
	{nome: 'NodeJS'},
	{nome: 'React Native'},
]

export default class Curso extends React.Component {
	constructor() {
		super()
	}
	
	render() {
		return (
			<h1>{cursos[this.props.params.id].nome}</h1>
		);
	}
}