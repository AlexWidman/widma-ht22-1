import SidebarView from "../views/sidebarView.js";

export default
function Sidebar(props){
    return <SidebarView number={props.model.numberOfGuests}/>;
}
