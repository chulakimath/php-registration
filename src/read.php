<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./output.css">
</head>

<body class="bg-slate-800 w-screen">
    <div class="bg-slate-100/60 rounded-md w-fit">
        <table>
            <tr>
                <th class="px-6">Name</th>
                <th class="px-6">DOB</th>
                <th class="px-6">Age</th>
                <th class="px-6">Gender</th>
                <th class="px-6">Email</th>
                <th class="px-6">Phone</th>
                <th class="px-6">Address</th>
                <th class="px-6">State</th>
                <th class="px-6">Courses</th>
                <th class="px-6">Hobbies</th>
            </tr>

            <?php
            include("./conn.php");
            $sql = "select * from students";
            $result = mysqli_query($conn, $sql);
            if ($result) {
                while ($row = mysqli_fetch_assoc($result)) {
            ?>
                    <tr class="mb-4">
                        <td class="px-6 py-2 text-center w-[100px]"><?php echo $row['name']; ?></td>
                        <td class="px-6 text-center"><?php echo $row['dob']; ?></td>
                        <td class="px-6 text-center"><?php echo $row['age']; ?></td>
                        <td class="px-6 text-center"><?php echo $row['gender']; ?></td>
                        <td class="px-6 text-center"><?php echo $row['email']; ?></td>
                        <td class="px-6 text-center"><?php echo $row['phone']; ?></td>
                        <td class="px-6 text-center"><?php echo $row['address']; ?></td>
                        <td class="px-6 text-center"><?php echo $row['state']; ?></td>
                        <td class="px-6 text-center"><?php echo $row['courses']; ?></td>
                        <td class="px-6 text-center "><?php echo $row['hobbies']; ?></td>
                    </tr>
            <?php
                }
            }
            mysqli_close($conn);
            ?>


        </table>
    </div>
</body>

</html>