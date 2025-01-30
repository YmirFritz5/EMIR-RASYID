function addTask() {
    const input = document.getElementById("tf-input");
    const inputValue = input.value;

    const task = document.createElement("li");
    task.textContent = inputValue;
    task.classList.add("list-item");

    task.id =
    new Date().valueOf().toString() + Math.random().toString(36).substring(2,7);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");
    deleteButton.addEventListener('click', function() {
    deleteTask(task.id)
    })

    task.appendChild(deleteButton);
    const taskContainer = document.getElementById("task-container");

    taskContainer.appendChild(task);
    input.value = "";
}

function editTask(id) {
    const task = document.getElementById(id);
    if (!task) return;
  
    // Ambil teks task saat ini
    const currentText = task.firstChild.textContent.trim();
  
    // Buat input text untuk mengedit
    const input = document.createElement("input");
    input.type = "text";
    input.value = currentText;
    input.classList.add("edit-textfield");
  
    // Tombol Save
    const saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    saveButton.classList.add("save-button");
    saveButton.addEventListener("click", function () {
      saveTask(id, input.value.trim());
    });
  
    // Ganti konten task dengan input dan tombol Save
    task.innerHTML = "";
    task.appendChild(input);
    task.appendChild(saveButton);
  }
  
  function saveTask(id, newText) {
    if (newText === "") {
      alert("Teks tidak boleh kosong!");
      return;
    }

function deleteTask(id) {
    const task = document.getElementById(id);
    task.remove();
}
}
