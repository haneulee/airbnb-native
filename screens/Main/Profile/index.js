import ProfileContainer from "./ProfileContainer";
import { connect } from "react-redux";

function mapStateToProps(state) {
    console.log(state.usersReducer)
    return { token: state.usersReducer.token, email: state.usersReducer.email, firstName: state.usersReducer.firstName, lastName: state.usersReducer.lastName };
}

export default connect(mapStateToProps)(ProfileContainer);