<?php

$challenge = $_REQUEST['hub_challenge'];
$verify_token = $_REQUEST['hub_verify_token'];

if ($verify_token === '2181ae91-2249-4d41-938f-6a538b8107b8') {
echo $challenge;
}
