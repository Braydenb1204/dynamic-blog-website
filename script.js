document.addEventListener("DOMContentLoaded", loadPosts);


const title = document.getElementById("title");
const content = document.getElementById("content");
const image = document.getElementById("image");


const postButton = document.getElementById("post-btn"); //registers post button
postButton.addEventListener("click", savePost);

function savePost() {   
   localStorage.setItem("title", document.getElementById("title").value);
   localStorage.setItem("content", document.getElementById("content").value);
   localStorage.setItem("image", document.getElementById("image").value);
}

function loadPosts() {
   document.getElementById("display-title").innerHTML = localStorage.getItem("title");
   document.getElementById("display-content").innerHTML = localStorage.getItem("content");
   document.getElementById("image-display").innerHTML = localStorage.getItem("image")
}

const deleteButton = document.getElementById("delete");
deleteButton.addEventListener("click", delPost);




window.onload = loadPosts();