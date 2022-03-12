<?php

    include("db.php");

    if (isset($_POST["email"]) && isset($_POST["password"])) {
        $email = $_POST["email"];
        $psw = $_POST["password"];

        $con = mysqli_connect($DB_HOST, $DB_USER, $DB_PASSWORD, $DB_SCHEMA);
        if (!$con) {
            die("Database Error.");
        }

        $sql = "SELECT id FROM users WHERE email='" . $email . "' AND password='" . $psw . "'";
        $res = mysqli_query($con, $sql);
        if ($res) {
            if (mysqli_num_rows($res) > 0) {
                $row = mysqli_fetch_row($res);
                echo "Welcome! Your id: " . $row[0];
            }
            else {
                die("Login failed.");
            }
        }
        else {
            die(mysqli_error($con));
        }

        mysqli_close($con);
    }
    

    