import SidebarView from "../views/sidebarView.js";

export default
function Sidebar(props){
    function onNumberChangeACB(value){ props.model.setNumberOfGuests(value)}
    return <SidebarView number={props.model.numberOfGuests}
                        onNumberChange={onNumberChangeACB}/>;
}
