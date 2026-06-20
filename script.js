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
  tasks = JSON.parse(data)
}
const allTasks = document.querySelector("#allTasks");

function renderTasks() {
  allTasks.innerHTML = "";
totaltask.textContent = tasks.length;
let studyCount = 0;
let workCount = 0;
let personalCount = 0;
let completedCount = 0;

  tasks.forEach((task,index) => {

    if(task.category === "Study"){
    studyCount++;
}

if(task.category === "Work"){
    workCount++;
}

if(task.category === "Personal"){
    personalCount++;
}
    if(task.completed){
    completedCount++;
}
  allTasks.insertAdjacentHTML(
  "beforeend",
  `
  <div class="sm:p-3 p-2 w-full mt-2 flex rounded-2xl border-2 border-[#8b8b8b3e] dark:bg-[#171717] bg-white">

    <!-- checkbox -->
    <div class="sm:w-15 w-12 h-[4em] flex justify-center items-center">
      <div
        onclick="toggleTask(${index})"
        class="w-7 h-7 rounded-md border-2 cursor-pointer flex justify-center items-center border-gray-400"
      >
        ${task.completed ? '<i class="fa-solid fa-check text-[#9A8061]"></i>' : ''}
      </div>
    </div>

    <!-- task content -->
    <div class="h-full w-full text-[16px] sm:text-xl flex-1 font-['Syne'] dark:text-[#e0e0e0]">

      <div class="${task.completed ? 'line-through opacity-60' : ''}">
        ${task.task}
      </div>

      <div class="w-full mt-2">
        <span class="bg-green-100 p-1 text-sm px-2 rounded-2xl">
          ${task.category}
        </span>

        <span class="bg-gray-100 p-1 text-sm px-2 rounded-2xl">
          ${task.priority}
        </span>
      </div>

    </div>

    <!-- delete button -->
    <div class="flex gap-3 justify-center items-center">
      <button onclick="deleteTask(${index})"
        class="sm:w-10 sm:h-10 w-8 h-8 rounded-xl bg-gray-100 flex items-center justify-center">
        <i class="fa-solid fa-trash-can text-gray-500"></i>
      </button>
    </div>

  </div>
  `
);

  });
  studytaskno.textContent = `${studyCount} Tasks`;
worktaskno.textContent = `${workCount} Tasks`;
personaltaskno.textContent = `${personalCount} Tasks`;
completedtasks.textContent = completedCount;
const pendingCount = tasks.length - completedCount;
pending.textContent = pendingCount;
let completiontasks = 0;

if(tasks.length > 0){
    completiontasks = Math.round((completedCount / tasks.length) * 100);
}

completepercent.textContent = completiontasks + "%";
belowprogressinfo.textContent=completedCount+ ` of `+tasks.length;

progressbar.style.width = completiontasks + "%";
progressbarpercentage.textContent=completiontasks+`%`;


}
renderTasks()
taskaddbtn.addEventListener("click",()=>{
const val=taskinput.value;
const category = taskcategory.value;
const priority = tasklevel.value;
const taskObj = {
  task: val,
  category: category,
  priority: priority,
  completed:false
}
console.log(taskObj);

tasks.push(taskObj);

localStorage.setItem("usertask",JSON.stringify(tasks));
renderTasks();
  taskinput.value = "";
});

function deleteTask(index) {
  tasks.splice(index, 1);

  localStorage.setItem(
    "usertask",
    JSON.stringify(tasks)
  );

  renderTasks();
}
function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;

  localStorage.setItem(
    "usertask",
    JSON.stringify(tasks)
  );

  renderTasks();
}



