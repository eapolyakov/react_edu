import React from 'react';


const ChangeNames = () =>{
   return (
      <div>
         <input type="text" />
         <input type="submit" value="Изменить" /*onSubmit={}*/ />
      </div>
   )
}

const ChangeEmail = () =>{
   return (
      <div>
         <input type="email" />
         <input type="submit" value="Изменить" /*onSubmit={}*/ />
      </div>
   )
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
               <h4>Вы</h4>
               <div>{user.name}</div>
               <ChangeNames />
               <div>{user.lastname}</div>
               <ChangeNames />
            </div>
            <div className="py-2">
               <h4>Ваш emeil</h4>
               <div>{user.email}</div>
               <ChangeEmail />

            </div>
         </div>
      </div>
   </div>)
}

export default Settings;
