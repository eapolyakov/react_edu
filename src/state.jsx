const user = {
    name: "Name",
    lastname : "Lastname",
    email: "name@lst.na",
    id: "1",
    about: "Somthing about",
    avatar: "https://s1.iconbird.com/ico/2013/12/505/w450h4001385925286User.png"
}

const users = {
    0: {name: "Марина", lastname: "Крутелева"},
    1: {name: "Марина", lastname: "Солдатова"},
    2: {name: "Ева", lastname: "Жолдина"},
    3: {name: "Нона", lastname: "Мандрыкина"},
    4: {name: "Ева", lastname: "Мандрыкина"},
    5: {name: "Венедикт", lastname: "Солдатов"},
    6: {name: "Нона", lastname: "Язина"},
    7: {name: "Сигизмунд", lastname: "Моряев"},
    8: {name: "Ульяна", lastname: "Иньшова"},
    9: {name: "Юнона", lastname: "Крутелева"},
    10:{name: "Самсон", lastname: "Мандрыкин"}
}

export function getUser(){
    return user;
}

export function getUsers(){
    return users;
}