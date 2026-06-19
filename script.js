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

// dark mode
const darkmode = document.querySelector(".darkmodebtn");

darkmode?.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
    console.log("clicked");
});

let tasks = [];
const data=localStorage.getItem("usertask");
const userdata=JSON.parse(data);
if (data) {
  tasks = JSON.parse(data);
}
const allTasks = document.querySelector("#allTasks");

function renderTasks() {
  allTasks.innerHTML = "";
totaltask.textContent = tasks.length;
  tasks.forEach((task,index) => {
    allTasks.insertAdjacentHTML(
      "beforeend",
      `<div class="sm:p-3 p-2 w-full mt-2 flex rounded-2xl border-2 border-[#8b8b8b3e] dark:bg-[#171717] bg-white">

 <div class="sm:w-15 w-12 h-[4em] flex  justify-center items-center  ">
 <!-- custom tick box -->
  <div class="w-7 h-7 rounded-md border-2 text-white hidden:bg-[#8d7154e9]  flex justify-center items-center border-gray-400">
<i class="fa-solid fa-check  hidden!"></i>
  </div>
  
 </div>

  
  <div  class="h-full  w-full text-[16px] sm:text-xl  flex-1 font-['Syne'] dark:text-[#e0e0e0]">
${task};
<!-- other info boxes -->
<div class="w-full mt-2">
  <span id="extrainfo1" class="bg-green-100 font-['Syne'] p-1 text-sm px-2 dark:bg-gray-500 dark:text-green-300 rounded-2xl">Study</span>
   <span id="extrainfo2" class="bg-gray-100 font-['Syne'] p-1 text-sm px-2 dark:bg-gray-500 dark:text-white rounded-2xl">High</span>
</div>
  </div>
  <!-- edit delete -->
   <div class="flex gap-3 justify-center items-center">

   

   <button onclick="deleteTask(${index})"
        class="sm:w-10 sm:h-10 w-8 h-8 rounded-xl bg-gray-100 flex items-center justify-center"
    >
       <i class="fa-solid fa-trash-can text-gray-500"></i>
    </button>

</div>`
    );
  });
}
renderTasks()
taskaddbtn.addEventListener("click",()=>{
const val=taskinput.value;
tasks.push(val);

localStorage.setItem("usertask",JSON.stringify(tasks));
renderTasks();
});
function deleteTask(index) {
  tasks.splice(index, 1);

  localStorage.setItem(
    "usertask",
    JSON.stringify(tasks)
  );

  renderTasks();
}


