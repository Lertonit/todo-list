const taskInptBTN = document.getElementById("TaskInptBTN");
const taskInput = document.getElementById("TaskInput");
const taskInptDate = document.getElementById("TaskDate");
const taskInptTime = document.getElementById("TaskTime");
const taskList = document.getElementById("TaskList");

function addTask() {
    const taskText = taskInput.value;
    const taskDate = taskInptDate.value;
    const taskTime = taskInptTime.value;
    const taskPriority = document.getElementById("TaskPriority").value;

    if (taskText.trim() === '') {
        alert("Нечего добавлять");
        return;
    }

    const taskItem = document.createElement("li");
    const dateAdded = new Date().toLocaleString();

    taskItem.classList.add('task-item');
    taskItem.innerHTML = `
        <div class="task-content" onclick="toggleTaskDetails(this)">
            <div class="task-title">${taskText}</div>
            <div class="task-details">
                <span class="task-priority">Приоритет: ${taskPriority}</span><br>
                <span class="task-time">Время: ${taskTime}</span><br>
                <span class="task-date">Дата: ${taskDate}</span><br>
                <span class="task-added" style="display: none;">Добавлено: ${dateAdded}</span>
            </div>
        </div>
        <button class="complete-btn" onclick="completeTask(this)">Выполнено</button>
        <div class="task-comments" style="display:none;"></div>
        <div class="comment-section" style="display:none;">
            <input type="text" placeholder="Добавить описание..." class="comment-input">
            <button onclick="addComment(this)">Сохранить</button>
            <button onclick="deleteTask(this)">Удалить</button>
        </div>
    `;

    taskList.appendChild(taskItem);
    taskInput.value = "";
    taskInptDate.value = "";
    taskInptTime.value = "";
}

function toggleTaskDetails(taskContent) {
    const taskComments = taskContent.parentElement.querySelector(".task-comments");
    const commentSection = taskContent.parentElement.querySelector(".comment-section");
    
    // Переключение видимости комментариев и секции комментариев
    taskComments.style.display = taskComments.style.display === "none" ? "block" : "none";
    commentSection.style.display = commentSection.style.display === "none" ? "block" : "none";

    // Переключение видимости даты добавления
    const taskDetails = taskContent.querySelector(".task-details");
    const taskAdded = taskDetails.querySelector(".task-added");
    
    // Показать или скрыть дату добавления
    taskAdded.style.display = taskAdded.style.display === "none" ? "block" : "none";
}

function completeTask(button) {
    const taskItem = button.parentElement;
    const confirmed = confirm("Вы точно выполнили задачу?");

    if (confirmed) {
        const message = document.createElement("li");
        message.textContent = "Отлично!";
        taskList.appendChild(message);
        taskItem.remove();

        setTimeout(() => {
            message.remove();
        }, 3000);
    }
}

function addComment(button) {
    const taskItem = button.parentElement.parentElement;
    const commentInput = taskItem.querySelector(".comment-input");
    const comment = commentInput.value;

    if (comment) {
        const commentSpan = document.createElement("span");
        commentSpan.textContent = comment;
        taskItem.querySelector(".task-comments").appendChild(commentSpan);
        commentInput.value = "";
    }
}

function editTask(button) {
    const taskItem = button.parentElement;
    const taskContent = taskItem.querySelector(".task-title").textContent;
    const newTaskText = prompt("Редактируйте:", taskContent);

    if (newTaskText) {
        taskItem.querySelector(".task-title").textContent = newTaskText;
    }
}

function deleteTask(button) {
    const taskItem = button.parentElement.parentElement;
    taskItem.remove();
}

taskInptBTN.addEventListener('click', addTask);
