import { BiExpand } from 'react-icons/bi';

const ExpandButton = () => {

    const onExpandAll = () => {
        var accordions = document.getElementsByClassName('accordion');
        var panels = document.getElementsByClassName('panel');
        var signs = document.getElementsByClassName('sign');
        for (var i = 0; i < accordions.length; i++) accordions.item(i).classList.add('active');
        for (var j = 0; j < panels.length; j++) panels.item(j).style.display = "unset";
        for (var k = 0; k < signs.length; k++) signs.item(k).textContent = "-";
    }

    return (
        <button className="button-expander" onClick={onExpandAll}>
            <BiExpand />
        </button>
    )
}
export default ExpandButton;