import { useState } from "react";
import PropTypes from 'prop-types';
import "./DropArea.css";


const DropArea = ({ onDrop , status }) => {
	const [showDrop, setShowDrop] = useState(false);

	return (
		<section
			onDragEnd={() => setShowDrop(true)}
			onDragLeave={() => setShowDrop(false)}
			onDrop={(e) => {
				e.preventDefault();
				const position = e.dataTransfer.getData("position");
				onDrop(status, position);
				setShowDrop(false);
			}}
			onDragOver={(e) => e.preventDefault()}
			className={showDrop ? "drop_area" : "hide_drop"}
		>
			Drop Here
		</section>
	);
};

DropArea.propTypes = {
    onDrop: PropTypes.func.isRequired,
	status: PropTypes.string.isRequired,
};

export default DropArea;