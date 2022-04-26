<?php

class Users {
    private $id = 0;
    private $email = null;

    public function setId(int $id) :void 
    {
        $this->id = $id;
    }
    public function getId() :int 
    {
        return $this->id;
    }

    public function setEmail(string $email) :void {
        $this->email = $email;
    }
    public function getEmail() :string {
        return $this->email;
    }
    
    public function connection(){
        return new PDO('mysql:host=localhost;dbname=ipj_databse', 'root', '');
    }

    public function create() :array
    {
        $con = $this->connection();
        $smtmt = $con->prepare("INSERT INTO users (id, email) VALUES (:id, :email)");
        $smtmt->bindValue(':_id', $this->getId(), \PDO::PARAM_INT);
        $smtmt->bindValue(':_email', $this->getEmail(), \PDO::PARAM_STR);

        if($smtmt->$execute()){
            $this->setId($con->lastInsertId());
            return $this->read();
        }
        return [];
    }

    public function read() :array
    {
        $con = $this->connection();
        if($this->getId() === 0)
        {
            $smtmt = $con->prepare("SELECT * FROM users ");
            if($smtmt->$execute()){
               return $smtmt->fetchAll(\PDO::FETCH_ASSOC);
            }
        }
        else if($this-getId() > 0)
        {
            $smtmt = $con->prepare("SELECT * FROM users WHERE id = :_id");
            $smtmt->bindValue(':_id', $this->getId(), \PDO::PARAM_INT);
            if($smtmt->$execute())
            {
               return $smtmt->fetchAll(\PDO::FETCH_ASSOC);
            }
        }       
        return [];
    }

    public function update() :array
    {
        $con = $this->connection();
        $smtmt = $con->prepare("UPDATE users (email) VALUES (:_email) WHERE id = :_id");
        $smtmt->bindValue(':_id', $this->getId(), \PDO::PARAM_INT);
        $smtmt->bindValue(':_email', $this->getEmail(), \PDO::PARAM_STR);

        if($smtmt->$execute()){
            return $this->read();
        }
        return [];
    }
    public function delete() :array
    {
        $personal = $this-> read();
        $con = $this->connection();
        $smtmt = $con->prepare("DELETE from users WHERE id = :_id");
        $smtmt->bindValue(':_id', $this->getId(), \PDO::PARAM_INT);

        if($smtmt->$execute()){
            return $personal;
        }
        return [];
    }
}
?>