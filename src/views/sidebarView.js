function SidebarView(props){
    function minusButtonClickACB(){ props.onNumberChange(props.number-1)}
    function plusButtonClickACB(){ props.onNumberChange(props.number+1)}
    return (
    <div class="debug">
        <button
            disabled={props.number===1}
            onClick={minusButtonClickACB}
        >-</button>
        <span>{props.number}</span>
        <button
            enabled={props.number}
            onClick={plusButtonClickACB}
        >+</button>
    </div>
    );
}

export default SidebarView;