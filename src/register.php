<?php
if (isset($_POST['submit'])) {
    $dob = $_POST['dob'] ? date('Y-m-d', strtotime($_POST['dob'])) : '';

    function calculateAge($dateOfBirth)
    {
        $today = new DateTime();
        $dob = new DateTime($dateOfBirth);
        $age = $today->diff($dob)->y;
        return $age;
    }
    $age = calculateAge($_POST['dob']);
    $name = $_POST['name'];
    $gender = $_POST['gender'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $phone = $_POST['phone'];
    $address = $_POST['address'];
    $state = $_POST['state'];
    $courses = $_POST['courses'];
    $courses = implode(',', $courses);
    $hobbies = $_POST['hobbies'];
    $hobbies = implode(",", $hobbies);
    include("./conn.php");
    $sql = "insert into students (name,dob,age,gender,email,password,phone,address,state,courses,hobbies)
    values ('$name','$dob','$age','$gender','$email','$password','$phone','$address','$state','$courses','$hobbies')";
    try {
        $success = mysqli_query($conn, $sql);
        if ($success) {
            print("<script>alert('success');</script>");
            header("Location:read.php");
        }
    } catch (Exception $e) {
        print("CAnt");
    }
    mysqli_close($conn);
}
