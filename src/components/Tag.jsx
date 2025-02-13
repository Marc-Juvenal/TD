import PropTypes from "prop-types";

import "./Tag.css";

const Tag = ({ tagName, selectTag, selected }) => {
    const tagStyle = {
        HTML: { backgroundColor: "#fda821" },
        CSS: { backgroundColor: "#15d4c8" },
        JavaScript: { backgroundColor: "#ffd12c" },
        React: { backgroundColor: "#4cdafc" },
        Express: { backgroundColor: "#827e7e" },
		NodeJs: { backgroundColor: "#6cc24a" },
		MonorepoJs: { backgroundColor: "#FF1493" },
        Github: { backgroundColor: "#EE82EE" },
        ViteJs: { backgroundColor: "#FF7600" },
        
        default: { backgroundColor: "#f9f9f9" },
    };
    return (
        <button
            type='button'
            className='tag'
            style={selected ? tagStyle[tagName] : tagStyle.default}
            onClick={() => selectTag(tagName)}>
            {tagName}
        </button>
    );
};

Tag.propTypes = {
    tagName: PropTypes.string.isRequired,
    selectTag: PropTypes.func.isRequired,
    selected: PropTypes.bool.isRequired,
};

export default Tag;
