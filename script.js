function login(){

let email=document.getElementById("email").value;

let users=JSON.parse(localStorage.getItem("users"))||[];

let user=users.find(u=>u.email==email);

if(!user){

user={
email,
bio:"",
education:[],
projects:[],
skills:[],
certs:[],
views:0
};

users.push(user);

localStorage.setItem("users",JSON.stringify(users));

}

localStorage.setItem("currentUser",email);

loadDashboard();

}

function loadDashboard(){

loginBox.classList.add("hidden");
dashboard.classList.remove("hidden");

render();

}

function getUser(){

let users=JSON.parse(localStorage.getItem("users"));
let email=localStorage.getItem("currentUser");

return users.find(u=>u.email==email);

}

function saveUser(user){

let users=JSON.parse(localStorage.getItem("users"));
let index=users.findIndex(u=>u.email==user.email);

users[index]=user;

localStorage.setItem("users",JSON.stringify(users));

}

function saveBio(){

let user=getUser();
user.bio=bio.value;

saveUser(user);

}