document.addEventListener("DOMContentLoaded", function (event) {
  // DOM is fully loaded and parsed
  const form = document.getElementById("taskForm");
  const taskList = document.getElementById("taskList");

  let m = "hello world";

  // listen for form submission
  form.addEventListener("submit", handleFormSubmission);

  function handleFormSubmission(event) {
    event.preventDefault();

    // get input value
    const taskValue = event.target.task.value;

    // create li, 2 span, and 2 i tags
    const li = document.createElement("li");
    const taskSpanTag = document.createElement("span");
    const iconsWrapperSpanTag = document.createElement("span");
    const deleteIcon = document.createElement("i");
    const editIcon = document.createElement("i");

    // add classes to the i tags
    deleteIcon.classList.add("fa", "fa-trash");
    // add aria hidden attribute
    deleteIcon.setAttribute("aria-hidden", "true");

    editIcon.classList.add("fa", "fa-pencil");
    // add aria hidden attribute
    editIcon.setAttribute("aria-hidden", "true");

    // add the i tags to the span tag
    iconsWrapperSpanTag.appendChild(editIcon);
    iconsWrapperSpanTag.appendChild(deleteIcon);

    // add text content to span tag
    taskSpanTag.innerText = taskValue;

    // add the task span tag
    li.appendChild(taskSpanTag);
    // add the icons span tag
    li.appendChild(iconsWrapperSpanTag);
    // add the li tag to the taskList tag
    taskList.appendChild(li);
    // clear the value of the form input field
    event.target.reset();
  }
});
