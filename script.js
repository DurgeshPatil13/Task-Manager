// dark mode
const darkmode = document.querySelector(".darkmodebtn");

darkmode?.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
    console.log("clicked");
});

// selector
const totaltask =document.querySelector("#totaltasks");
const completedtasks=document.querySelector("#completed");
const pending=document.querySelector("#pendingtasks");
const completepercent=document.querySelector("#completionper");
const taskinput=document.querySelector("#taskinput");
const taskcategory=document.querySelector("#taskcat");
const tasklevel=document.querySelector("#tasklvl");
const taskaddbtn=document.querySelector("#taskadd");
const filterbtnall=document.querySelector("#filterall");
const filterbtncom=document.querySelector("#filtercomplete");
const taskcontain=document.querySelector("#taskcontainer");
const tasktag1=document.querySelector("#extrainfo1");
const tasktag2=document.querySelector("#extrainfo2");
const taskeditbtn=document.querySelector("#editbtn");
const taskdeletebtn=document.querySelector("#deletebtn");
const progressbar=document.querySelector("#probar");
const belowprogressinfo=document.querySelector("#belowprobar");
const progressbarpercentage=document.querySelector("#belowprobarpercentage");
const studytaskno=document.querySelector("#studytask");
const worktaskno=document.querySelector("#worktask");
const personaltaskno=document.querySelector("#personaltask");


