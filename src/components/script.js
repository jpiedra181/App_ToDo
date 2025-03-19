
const bdMembers = document.querySelector(".bdMembers")
const bdMembersIcon = document.querySelector(".bdMembersIcon")
const members = document.querySelector(".members")
const bdTasks = document.querySelector(".bdTasks")
const bdTaskIcon = document.querySelector(".bdTaskIcon")
const listActivities = document.querySelector(".listActivities")
const bdDescription = document.querySelector(".bdDescription")
const description = document.querySelector(".description")
const bdDescriptionIcon = document.querySelector(".bdDescriptionIcon")

if (members.style.display === "none") {
    bdMembersIcon.src = "/list-tasks/src/assets/arrow_down.png"
    members.style.display = "flex"
} else {
    bdMembersIcon.src = "/list-tasks/src/assets/arrow_left.png"
    members.style.display = "none"
}

bdMembers.addEventListener("click", () => {
    if (members.style.display === "none") {
    bdMembersIcon.src = "/list-tasks/src/assets/arrow_down.png"
    members.style.display = "flex"
    } else {
    bdMembersIcon.src = "/list-tasks/src/assets/arrow_left.png"
    members.style.display = "none"
    }
})

bdTasks.addEventListener("click", () => {
    if (listActivities.style.display === "none") {
    bdTaskIcon.src = "/list-tasks/src/assets/arrow_down.png"
    listActivities.style.display = "flex"
    } else {
    bdTaskIcon.src = "/list-tasks/src/assets/arrow_left.png"
    listActivities.style.display = "none"
    }
})

bdDescription.addEventListener("click", () => {
    if (description.style.display === "none") {
    bdDescriptionIcon.src = "/list-tasks/src/assets/arrow_down.png"
    description.style.display = "flex"
    } else {
    bdDescriptionIcon.src = "/list-tasks/src/assets/arrow_left.png"
    description.style.display = "none"
    }
})

const content = document.getElementById("todo-input")
const button = document.getElementById("button")
const list = document.querySelector(".listActivities")

button.addEventListener("click", (e) => {
    e.preventDefault()
    const todo = content.value
    if (todo) {
    const li = document.createElement("li")
    list.appendChild(li)

    const input = document.createElement("input")
    input.type = "checkbox"
    input.style.cursor = "pointer"
    input.style.width = "20px"
    li.appendChild(input)
    input.style.marginRight = "14px"

    const span = document.createElement("span")
    span.textContent = todo
    li.appendChild(span)
    span.style.marginRight = "14px"

    const deleteButton = document.createElement("button")
    const deleteIcon = document.createElement("img")
    deleteIcon.src = "/list-tasks/src/assets/delete.png"
    deleteIcon.style.width = "20px"
    deleteButton.appendChild(deleteIcon)
    deleteButton.style.cursor = "pointer"
    li.appendChild(deleteButton)
    deleteButton.addEventListener("click", () => {
        li.remove()
    })

    content.value = ""

    span.style.fontSize = "24px"

    // span.addEventListener("click", () => {
    //     li.style.textDecoration = "line-through"
    //     li.style.color = "red"
    //     li.style.textDecorationColor = "red"
    //     input.checked = true
    // })

    input.addEventListener("click", () => {
        if (input.checked) {
        span.style.textDecoration = "line-through"
        span.style.textDecorationThickness = "2px"
        span.style.color = "red"
        } else {
        span.style.textDecoration = "none"
        span.style.color = "black"
        span.style.textDecorationColor = "black"
        }
    })
    }
})
