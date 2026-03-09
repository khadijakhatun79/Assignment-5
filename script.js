const container = document.getElementById("issuesContainer")
const loading = document.getElementById("loading")

function showLoading() {
    loading.classList.remove("hidden")
}

function hideLoading() {
    loading.classList.add("hidden")
}

async function loadIssues(type = "all") {

    showLoading()

    const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    const data = await res.json()

    let issues = data.data

    if (type === "open") {
        issues = issues.filter(i => i.status === "open")
    }

    if (type === "closed") {
        issues = issues.filter(i => i.status === "closed")
    }

    displayIssues(issues)

    hideLoading()

    /* active tab */

    document.querySelectorAll(".tabs button")
        .forEach(btn => btn.classList.remove("active"))

    if (type === "all") document.getElementById("allTab").classList.add("active")
    if (type === "open") document.getElementById("openTab").classList.add("active")
    if (type === "closed") document.getElementById("closedTab").classList.add("active")

}

loadIssues()

function displayIssues(issues) {

    container.innerHTML = ""

    document.getElementById("issueCount").innerText =
        issues.length + " Issues"

    issues.forEach(issue => {

        const card = document.createElement("div")

        card.className = `card ${issue.status === "open" ? "open" : "closed"}`

        card.innerHTML = `

<div class="box-wrapper">
<p>${issue.status}</p>
<p class="priority">${issue.priority}</p>
</div>

<h3>${issue.title}</h3>

<p class="description">${issue.description.slice(0,80)}...</p>
<div class="labels">${issue.labels.map(label => `<span class="label">${label}</span>`).join("")}</div>
<p>#1: ${issue.author}</p>

<p>${new Date(issue.createdAt).toLocaleDateString()}</p>

`

        card.onclick = () => openModal(issue.id)

        container.appendChild(card)

    })

}

async function openModal(id) {

const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`)
const data = await res.json()

const issue = data.data

document.getElementById("modalTitle").innerText = issue.title
document.getElementById("modalDescription").innerText = issue.description
document.getElementById("modalStatus").innerText = issue.status
document.getElementById("modalAuthor").innerText = issue.author
document.getElementById("modalAuthor2").innerText = issue.author
document.getElementById("modalPriority").innerText = issue.priority

document.getElementById("modalcreatedAt").innerText =
new Date(issue.createdAt).toLocaleDateString()

/* labels */

document.getElementById("modalLabels").innerHTML =


`
<div class="labels">${issue.labels.map(label => `<span class="label">${label}</span>`).join("")}</div>
`


document.getElementById("modal").classList.remove("hidden")

}

function closeModal() {
    document.getElementById("modal").classList.add("hidden")
}

async function searchIssue() {

    const text = document.getElementById("searchInput").value.trim()

    if (text === "") {
        loadIssues()
        return
    }

    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${text}`)
    const data = await res.json()

    displayIssues(data.data)

}