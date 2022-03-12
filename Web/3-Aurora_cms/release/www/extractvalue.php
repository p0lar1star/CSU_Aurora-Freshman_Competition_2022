<?php
error_reporting(0);
$flag = "actf{err0r_bas3d_sq1i_ha99y_1ew_year!}";

include 'header.php';
include 'utils/db.php';
include 'utils/ErrorMsg.php';
include 'utils/DrawLaout.php';

$input_uname = $_GET['username'];
$input_pwd = $_GET['Password'];

function waf($str)
{
	$filter = 'outfile|readfile|;|union| |drop|load_file|sleep|delete|insert|update|user|updatexml|floor|exp|benchmark|count|rpad|rlike';
	if(preg_match('/'. $filter .'/i', $str)){
		errorMsg('hacker!');
    exit();
	}
}

waf($input_uname);

list($id, $uname, $eid, $salary, $birth, $ssn, $pwd) = $userDao->query("SELECT * FROM credential WHERE name= '$input_uname'");

if(!$id) {
  errorMsg("User not exist!");
  return;
}

if($input_pwd === $pwd){
  if($uname === "Admin") $salary = $flag;
  drawLayout($id,$uname,$eid,$salary,$birth,$ssn,$pwd);
}else{
  errorMsg("Login Failed!");
  return;
}
