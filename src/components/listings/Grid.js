import React from 'react';
import PropTypes from 'prop-types';
import Single from './Single';

const Grid = ({ items }) => {
	const renderList = () => {
		return items.map((item) => <Single key={item.id} item={item} />);
	};

	return (
		<div>
			<div className="row">
				<ul>{renderList()}</ul>
			</div>
		</div>
	);
};

Grid.propTypes = {
	items: PropTypes.array.isRequired
};

export default Grid;
