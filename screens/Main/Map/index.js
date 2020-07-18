import MapContainer from "./MapContainer";
import { connect } from "react-redux";

function mapStateToProps(state) {
    return { exploreRoom: state.roomsReducer.explore.rooms, token: state.usersReducer.token };
}

export default connect(mapStateToProps)(MapContainer);