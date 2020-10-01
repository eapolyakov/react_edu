import React from 'react';

const Settings = (props) => {
  let user = props.function()
  return (<div className="row">
    <div className="col-sm py-5 px-5">
      <div>
        <img src={user.avatar} width="30%" alt=""/> [Изменить]
      </div>
      <div>
        {user.name} [Изменить]
      </div>
      <div>
        {user.lastname} [Изменить]
      </div>
      <div>
        {user.email} [Изменить]
      </div>
    </div>
  </div>)
}

export default Settings;
