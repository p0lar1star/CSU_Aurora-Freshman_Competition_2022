<?php
error_reporting(0);
$flag = "actf{md555555_based_sq1_gam3}";

include 'header.php';
include 'utils/db.php';
include 'utils/ErrorMsg.php';
include 'utils/DrawLaout.php';

$input_uname = $_GET['username'];
$input_pwd = $_GET['Password'];

function whiteList($str)
{
	$list = 'admin';
	if(!preg_match('/^'. $list .'$/i', $str)){
		errorMsg("Only admin can see flag!");
    die();
	}
}
whiteList($input_uname);

list($id, $uname, $eid, $salary, $birth, $ssn, $pwd) = $userDao->query("SELECT * FROM hashtable WHERE (name= '$input_uname') and (Password='".md5($input_pwd, true)."')");

if(!$id) {
  errorMsg("uname or pwd error!");
}else{
  drawLayout($id,$uname,$eid,$flag,$birth,$ssn,$pwd);
}
