document.addEventListener("DOMContentLoaded", function () {
    const commentInput = document.getElementById("comment");
    const saveButton = document.getElementById("saveButton");

    saveButton.addEventListener("click", function () {
        const comment = commentInput.value;

        if (comment.length < 10 || comment.length > 40) {
            alert("Comment must be between 10 and 40 characters.");
        } else {
            // Here, you can add code to save the comment to the cloud.
            // This could involve making an API request to your backend or using a cloud service.
            // For this example, we'll just display an alert.
            alert("Comment saved to the cloud: " + comment);
            commentInput.value = ""; // Clear the input field
        }
    });
});
