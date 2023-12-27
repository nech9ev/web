document.addEventListener("DOMContentLoaded", function () {
    showLoader();
    fetchData();
});

function showLoader() {
    var loader = document.querySelector(".loader");
    loader.style.display = "block";
}

function hideloader() {
    var loader = document.querySelector(".loader");
    loader.style.display = "none";
}

function renderComments(comments) {
    var commentsView = document.getElementById("comments");

    commentsView.innerHTML = "";
    comments.forEach(function (comment) {
        var commentView = document.createElement("div");
        commentView.classList.add("comment");

        var name = document.createElement("h3");
        name.textContent = comment.name;

        var email = document.createElement("p");
        email.textContent = comment.email;

        var comment = document.createElement("p");
        comment.textContent = comment.body;

        commentView.appendChild(name);
        commentView.appendChild(email);
        commentView.appendChild(comment);
        commentsView.appendChild(commentView);
    });
}

function fetchData() {

    var postId = Math.floor(Math.random() * 10) + 1;
    console.log(postId);

    setTimeout(function() {
        fetch("https://jsonplaceholder.typicode.com/comments?postId=" + postId)
        .then(function (response) {
            if (!response.ok) {
                throw new Error("Network error");
            }
            return response.json();
        }
        )
        .then(function (data) {
            hideloader();
            renderComments(data);
        }
        )
        .catch(function (error) {
            console.log(error)
            hideloader();
            var commentsView = document.getElementById("comments");
            commentsView.innerHTML = "Something went wrong";
        }
        );
    }, 2000);
}
