const user = {
   name: "Вениамин",
   lastname: "Курочкин",
   email: "name@lst.na",
   id: "1",
   about: "Somthing about",
   avatar: "https://s1.iconbird.com/ico/2013/12/505/w450h4001385925286User.png"
}

const users = {
   0: {
      name: "Марина",
      lastname: "Крутелева",
      id: 10
   },
   1: {
      name: "Марина",
      lastname: "Солдатова",
      id: 11
   },
   2: {
      name: "Ева",
      lastname: "Жолдина",
      id: 12
   },
   3: {
      name: "Нона",
      lastname: "Мандрыкина",
      id: 13
   },
   4: {
      name: "Ева",
      lastname: "Мандрыкина",
      id: 14
   },
   5: {
      name: "Венедикт",
      lastname: "Солдатов",
      id: 15
   },
   6: {
      name: "Нона",
      lastname: "Язина",
      id: 16
   },
   7: {
      name: "Сигизмунд",
      lastname: "Моряев",
      id: 17
   },
   8: {
      name: "Ульяна",
      lastname: "Иньшова",
      id: 18
   },
   9: {
      name: "Юнона",
      lastname: "Крутелева",
      id: 19
   },
   10: {
      name: "Самсон",
      lastname: "Мандрыкин",
      id: 20
   }
}

export function getUser(userId) {
   for (let i = 0; i < Object.keys(users).length; i++)
      if (users[i].id == userId)
         return users[i];
return user;
}

export function getUsers() {

   return users;
}
