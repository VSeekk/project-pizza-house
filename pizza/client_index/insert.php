<!DOCTYPE html>
<html>

<head>
    <title>Insert Page page</title>
</head>

<body>
    <center>
        <?php

        $servername = "localhost:3306";
        $username = "root";
        $password = "";
        $dbname ="pizza_house"
        $conn = mysqli_connect($servername, $username, $password, $dbname);

        // Check connection
        if($conn === false){
            die("ERROR: Could not connect. "
                . mysqli_connect_error());
        }

        // Taking all 5 values from the form data(input)
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $Name =  $_REQUEST['Name'];
        $Phone_No = $_REQUEST['phonenumber'];
        $Pizza_type =  $_REQUEST['ptype'];
        $Crust_type = $_REQUEST['crusttype'];
        $Toppings = $_REQUEST['toppings'];
        $Delivery = $_REQUEST['delivery'];
        $location = $_REQUEST['location'];
        $Total_Cost = $_REQUEST['Total_Cost'];
        }
        // Performing insert query execution
        // here our table name is college
        $sql = "INSERT INTO orders  VALUES ('$Name',
            '$Phone_No','$Pizza_type','$Crust_type','$Toppings','Delivery','location','Total_Cost')";

        if(mysqli_query($conn, $sql)){
            echo "<h3>Your order is placed</h3>";

            echo nl2br("\n$Name");
        } else{
            echo "ERROR: Hush! Sorry $sql. "
                . mysqli_error($conn);
        }

        // Close connection
        mysqli_close($conn);
        ?>
    </center>
</body>

</html>
