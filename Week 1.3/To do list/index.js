// Function to add a new todo item
function addTodo() {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('dueDate').value;

    if (title && description && dueDate) {
        const todoList = document.getElementById('todoList');
        const li = document.createElement('li');
        li.classList.add('todo-item');

        // Create the new todo item with the title, description, and due date
        li.innerHTML = `
            <div>
                <span><strong>Title: </strong>${title}</span><br>
                <span><strong>Description: </strong>${description}</span><br>
                <span><strong>Due: </strong>${new Date(dueDate).toLocaleString()}</span><br>
                <input type="checkbox" onclick="markComplete(this)"> Completed
            </div>
            <button onclick="removeTodo(this)">Delete</button>
            <button class="edit-btn" onclick="editTodo(this)">Edit</button>
        `;

        // Add to the todo list
        todoList.appendChild(li);

        // Clear the input fields
        document.getElementById('title').value = '';
        document.getElementById('description').value = '';
        document.getElementById('dueDate').value = '';
    } else {
        alert("Please fill out all fields.");
    }
}

// Function to remove a todo item
function removeTodo(button) {
    const todoItem = button.parentElement;
    todoItem.remove();
}

// Function to edit an existing todo item
function editTodo(button) {
    const todoItem = button.parentElement;
    const title = todoItem.querySelector('span').nextSibling.textContent.trim();
    const description = todoItem.querySelector('span:nth-of-type(2)').nextSibling.textContent.trim();
    const dueDate = todoItem.querySelector('span:nth-of-type(3)').nextSibling.textContent.trim();

    // Pre-fill the input fields with the existing data
    document.getElementById('title').value = title;
    document.getElementById('description').value = description;
    document.getElementById('dueDate').value = new Date(dueDate).toISOString().slice(0, 16); // Format to datetime-local

    // Remove the item temporarily to allow editing
    todoItem.remove();
}

// Function to mark a todo item as complete (with a strike-through style)
function markComplete(checkbox) {
    const todoItem = checkbox.closest('li');
    if (checkbox.checked) {
        todoItem.classList.add('completed');
    } else {
        todoItem.classList.remove('completed');
    }
}

// Function to sort the todo items by due date
function sortTodos(order) {
    const todoList = document.getElementById('todoList');
    const todos = Array.from(todoList.children);

    todos.sort((a, b) => {
        const dateA = new Date(a.querySelector('span:nth-of-type(3)').nextSibling.textContent.trim());
        const dateB = new Date(b.querySelector('span:nth-of-type(3)').nextSibling.textContent.trim());

        return order === 'asc' ? dateA - dateB : dateB - dateA;
    });

    // Clear the list and append sorted items
    todoList.innerHTML = '';
    todos.forEach(todo => todoList.appendChild(todo));
 }



