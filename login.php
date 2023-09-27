<?php
// Get the submitted username and password from the form
$enteredUsername = $_POST['username'];
$enteredPassword = $_POST['password'];

// Replace with actual username and password stored in a database
$expectedUsername = "your_username";
$expectedPassword = "your_password";

// Check if the submitted credentials match the expected credentials
if ($enteredUsername === $expectedUsername && $enteredPassword === $expectedPassword) {
    // Successful login, redirect to a secure page
    header("Location: welcome.php");
    exit();
} else {
    // Invalid login, display an error message
    echo "Invalid username or password.";
}
?>
