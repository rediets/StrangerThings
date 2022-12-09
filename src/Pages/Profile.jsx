import PostView from "../Components/PostView";
import MessageView from "../Components/MessageView";
import LogMeOut from "../Components/LogMeOut";

const Profile = ({token, setToken}) => {
    return (
      <div className="profile_page">
        { token &&
          <LogMeOut
            token={ token } 
            setToken={ setToken }/>
        }
        <h1>Profile</h1>
        <PostView token={ token } />
        <MessageView token={ token } />
      </div>
    );
  };
  
export default Profile;