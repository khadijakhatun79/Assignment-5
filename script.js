const container=document.getElementById("issuesContainer")
const loading=document.getElementById("loading")

function showLoading(){
loading.classList.remove("hidden")
}

function hideLoading(){
loading.classList.add("hidden")
}


async function loadIssues(type="all"){

showLoading()

const res=await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")

const data=await res.json()

let issues=data.data

if(type==="open"){
issues=issues.filter(i=>i.status==="open")
}

if(type==="closed"){
issues=issues.filter(i=>i.status==="closed")
}

displayIssues(issues)

hideLoading()

}

loadIssues()


function displayIssues(issues){

container.innerHTML=""

issues.forEach(issue=>{

const card=document.createElement("div")

card.className=`card ${issue.status==="open"?"open":"closed"}`

card.innerHTML=`

<h3>${issue.title}</h3>

<p>${issue.description.slice(0,80)}</p>

<p>Status: ${issue.status}</p>
<p>Author: ${issue.author}</p>

`

card.onclick=()=>openModal(issue.id)

container.appendChild(card)

})

}


async function openModal(id){

const res=await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`)

const data=await res.json()

const issue=data.data

document.getElementById("modalTitle").innerText=issue.title
document.getElementById("modalDescription").innerText=issue.description
document.getElementById("modalStatus").innerText=issue.status
document.getElementById("modalAuthor").innerText=issue.author
document.getElementById("modalPriority").innerText=issue.priority
document.getElementById("modalLabel").innerText=issue.label

document.getElementById("modal").classList.remove("hidden")

}


function closeModal(){
document.getElementById("modal").classList.add("hidden")
}


async function searchIssue(){

const text=document.getElementById("searchInput").value

const res=await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${text}`)

const data=await res.json()

displayIssues(data.data)

}