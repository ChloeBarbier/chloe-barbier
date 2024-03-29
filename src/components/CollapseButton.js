import React from "react"
import PropTypes from 'prop-types';
import { BiCollapse } from 'react-icons/bi';

const CollapseButton = ({onClickCollapse}) => {

    const onCollapseAll = () => {
        var accordions = document.getElementsByClassName('accordion');
        var panels = document.getElementsByClassName('panel');
        var signs = document.getElementsByClassName('sign');
        for (var i = 0; i < accordions.length; i++) accordions.item(i).classList.remove('active');
        for (var j = 0; j < panels.length; j++) panels.item(j).style.display = "none";
        for (var k = 0; k < signs.length; k++) signs.item(k).textContent = "+";

        onClickCollapse();
    }

    return (
        <button className="button-collapser" onClick={onCollapseAll}>
            <BiCollapse />
        </button>
    )
}

CollapseButton.defaultProps = {
    onClickCollapse: () => {}
}
    
CollapseButton.propTypes = {
    onClickCollapse: PropTypes.func
}

export default CollapseButton;