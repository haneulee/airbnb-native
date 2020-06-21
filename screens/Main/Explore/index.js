import ExploreContainer from "./ExploreContainer";
import { connect } from "react-redux";
import { getRooms } from "../../../redux/roomsSlice";

function mapDispatchToProps(dispatch) {
    return {
        getRooms: (page) => dispatch(getRooms(page))
    };
}

function mapStateToProps(state) {
    return state.roomsReducer.explore;
}

export default connect(mapStateToProps, mapDispatchToProps)(ExploreContainer);