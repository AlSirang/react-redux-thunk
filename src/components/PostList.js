import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPostsAndUsers } from "../Redux/actions/";

import UserHeader from "./UserHeader";

const PostList = ({ posts, fetchPostsAndUsers }) => {
  useEffect(() => {
    fetchPostsAndUsers();
  }, []);

  const renderList = posts.data.map((post) => {
    return (
      <div className="item" key={post.id}>
        <h2 className="ui header">
          <i className="lagre middle aligned icon user" />
          <div className="content">
            <UserHeader userId={post.userId} />
          </div>
        </h2>
        <div className="content">
          <div className="description">
            <h3 className="sub header">{post.title}</h3>
            <p>{post.body}</p>
          </div>
        </div>
      </div>
    );
  });

  if (posts.isDataLoading) return <div>Lodading ...</div>;

  return <div className="ui relaxed divided list">{renderList}</div>;
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

const mapDispatchToProps = {
  fetchPostsAndUsers: fetchPostsAndUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
