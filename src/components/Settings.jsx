import React, { useState } from 'react';

function AddForm() {
   const [newName, setNewName] = useState();
   const [name, setName] = useState('');

  function handleChange(e) {
    setName(e.target.value);
    e.preventDefault();
  }

  function handleSubmit(e) {
    setNewName(String(name));
    e.preventDefault();
  }

  return <form onSubmit={handleSubmit}>
  <input type="text" value={name} onChange={handleChange} />
  <p>{newName}</p>
  <input type="submit" value="Change" />
  </form>;
}

const Settings = (props) => {
   let user = props.function()
   return (<div className="row">
      <div className="col-sm py-5 px-5">
         <div>
            <img src={user.avatar} width="30%" alt=""/>
            <div className="py-4">
               Изменить автар
               <input className="ml-4" type="file" name="" value=""/>
            </div>
         </div>
         <div className="col-sm py-3">
            <div className="py-2">
               <h4>Ваши данные</h4>
               <div>{user.name}<AddForm /></div>
               <div>{user.lastname}<AddForm /> </div>

            </div>
            <div className="py-2">
               <h4>Ваш emeil</h4>
               <div>{user.email}</div>
               <AddForm />
            </div>
         </div>
      </div>
   </div>)
}

export default Settings;
