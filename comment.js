// JavaScript for Blog Comments Section
document.addEventListener("DOMContentLoaded", () => {
    const commentForm = document.getElementById("commentForm");
    const commentInput = document.getElementById("commentInput");
    const commentList = document.getElementById("commentList");
    const emojiReactions = document.getElementById("emojiReactions");

    // Handle comment submission
    commentForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const commentText = commentInput.value.trim();

        if (commentText) {
            // Create a new comment element
            const newComment = document.createElement("div");
            newComment.classList.add("comment");
            newComment.innerHTML = `<p><strong>You:</strong> ${commentText}</p>`;

            // Append to the comment list
            commentList.appendChild(newComment);

            // Clear the input
            commentInput.value = "";

            // Add animation
            newComment.classList.add("fade-in");
            setTimeout(() => newComment.classList.remove("fade-in"), 1000);
        }
    });

    // Handle emoji reactions
    emojiReactions.addEventListener("click", (e) => {
        if (e.target.classList.contains("emoji")) {
            const emoji = e.target.cloneNode(true); // Copy the clicked emoji
            emoji.style.animation = "float-up 1s ease forwards"; // Add float animation

            // Append the floating emoji to the reactions container temporarily
            emojiReactions.appendChild(emoji);

            // Remove floating emoji after animation ends
            setTimeout(() => emoji.remove(), 1000);
        }
    });
});
