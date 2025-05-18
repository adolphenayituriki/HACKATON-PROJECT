<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "citizen_system";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$fullname = $_POST['fullname'];
$email = $_POST['email'];
$id_number = $_POST['id_number'];

// Insert into database
$sql = "INSERT INTO citizen_login (fullname, email, id_number) VALUES (?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sss", $fullname, $email, $id_number);

if ($stmt->execute()) {
    // No echo before redirect
    header("Location: citizeDasbod.html");
    exit();
} else {
    echo "❌ Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
