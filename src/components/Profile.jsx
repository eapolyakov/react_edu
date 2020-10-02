import React from 'react';

const Profile = (props) => {
  let userId = window.location.pathname.split("/")[2];
  let user = props.function(userId);
  return (<div className="row">
    <div className="col-sm-3">
      <img src={user.avatar} width="90%" alt=""/>
    </div>
    <div className="col-sm-9">
      <h1>{user.name} {user.lastname}</h1>
      <h4>Обо мне</h4>
      <p>{user.about}</p>
    </div>
  </div>)
}

export default Profile;
