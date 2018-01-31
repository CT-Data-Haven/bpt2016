import React from 'react';
import { Table } from 'semantic-ui-react';
import * as _ from 'underscore';
import { nest } from 'd3-collection';
import { format } from 'd3-format';

const percent = format('.2p');
const comma = format(',');

const formatNumber = (s) => (s > 0 && s < 1) ? percent(s) : comma(s);


export default class DataTable extends React.Component {
	render() {
		let header;
		let rows;

		if (this.props.data.length) {
			let data = this.props.data;
			console.log(data[0]);

			header = _.chain(data[0])
				.keys()
				.map((d, i) => (<Table.HeaderCell key={i} onClick={this.props.handleSort(d)}>{d}</Table.HeaderCell>))
				.value();
			rows = _.chain(data)
				.values()
				.map((row, i) => {
					let cells = _.map(row, (d, j) => (
						_.isNumber(d) ?
							<Table.Cell key={j} textAlign="right">{formatNumber(d)}</Table.Cell> :
							<Table.Cell key={j} textAlign="left">{d}</Table.Cell>
						));
					return <Table.Row key={i}>{cells}</Table.Row>;
				})
				.value();
		} else {
			header = null;
			rows = null;
		}

		return (
			<div className="DataTable">
				<Table celled compact stackable selectable sortable>
					<Table.Header>
						<Table.Row>{header}</Table.Row>
					</Table.Header>
					<Table.Body>{rows}</Table.Body>
				</Table>
			</div>
		);
	}
}
