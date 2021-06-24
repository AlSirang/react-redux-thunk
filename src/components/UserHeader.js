import { connect } from "react-redux";

const UserHeader = ({ userData }) => {
  if (userData.isDataLoading) return <div className="header">Loading ...</div>;
  if (!userData.users) return null;
  return <div className="header">{userData.users.name}</div>;
};

const mapStateToProps = (state, ownProps) => {
  return {
    userData: {
      ...state.users,
      users: state.users.users.find((user) => user.id === ownProps.userId),
    },
  };
};

export default connect(mapStateToProps)(UserHeader);
