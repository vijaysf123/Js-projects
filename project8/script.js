const taskForm = document.querySelector("#task-form");
const tasksList = document.querySelector("#tasks-lists");
const whenNoTsk = document.querySelector("#default-task-helper");

// on task submit
taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const task = document.querySelector("#task-box").value;
    if (task != "") {
        // hiding default text when it is first task     
        if ((tasksList.children.length == 0)) {
            whenNoTsk.style.display = "none";
        }
        const taskHtml = `<li class="task">
          <span>${task}</span>
          <div class="tasks-cta">
            <button class="task-done btn">Done</button>
            <button class="delete-task btn">Delete</button>
          </div>
        </li>`;
        tasksList.insertAdjacentHTML('beforeend', taskHtml);
    } else {
        alert("Enter Task First");
    }
});

// task cta(event delegation used)
tasksList.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-task")) {

        // removing task    
        e.target.parentElement.parentElement.remove();

        // showing default text whent there is no task     
        if ((tasksList.children.length == 0)) {
            whenNoTsk.style.display = "block";
        }
    } else if (e.target.classList.contains("task-done")) {
        e.target.parentElement.previousElementSibling.style.cssText = `
    text-decoration:line-through;
    text-decoration-color:blue;
    text-decoration-thickness:.3rem;`;
    }
});