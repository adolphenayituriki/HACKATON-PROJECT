<?php
// Connect to database
$servername = "localhost";
$username = "root";
$password = "";
$database = "citizens_engagement";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get and sanitize input
$full_name = $_POST['full_name'];
$district = $_POST['district'];
$issue_district = $_POST['issue_district'];
$email = $_POST['email'];
$category = $_POST['category'];
$other_message = $_POST['other_message'];
$complaint = $_POST['complaint'];

// Insert into database
$sql = "INSERT INTO complaints (full_name, district, issue_district, email, category, other_message, complaint)
        VALUES (?, ?, ?, ?, ?, ?, ?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param("sssssss", $full_name, $district, $issue_district, $email, $category, $other_message, $complaint);

if ($stmt->execute()) {
    echo "<h2>Thank you! Your complaint has been submitted successfully.</h2>";
    echo "<a href='citizeDasbod.html'>Return to Dashboard</a>";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
