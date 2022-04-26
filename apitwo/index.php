<?php 

require_once "Users.php";

header("Content-Type: application/json");

$data = [];

$fn = $_REQUEST['fn'] ?? null;
$id = $_REQUEST['id'] ?? 0;
$email = $_REQUEST['email'] ?? "";

$user = new Users($id, $email);
$user->setId($id);

if($fn === "create" && $email !== null){
    $user->setEmail($email);
    $data["user"] = $user->create();
}
else if($fn === "read"){
    $data["user"] = $user->read();
}

else if($fn === "update" && $email !== null){
    $user->setEmail($email);
    $data["user"] = $user->update();
}

else if($fn === "delete" && $id > 0){
    $data["user"] = $user->delete();
}


die(json_encode($data));

?>