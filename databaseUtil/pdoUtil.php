<?php

class PDOUtil {

    private static $instance = null;
    private $connection;

    private function __construct() {
        REQUIRE_once "creds.php";

        $dsn = "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=" . DB_CHARSET . ";";
        $options = [
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES   => false
        ];

        try {
            $this->connection = new PDO($dsn, DB_USERNAME, DB_PASSWORD, $options);
        } catch(\PDOException $e) {
            die(json_encode(array("error"=>$e->getMessage())));
        }//end try catch
    }//end constructor

    public static function createPDOUtil() {
        if (self::$instance == null) {
            self::$instance = new PDOUtil();
        }//end if

        return self::$instance;
    }//end method

    public function query($sql, $variables) {
        $statement = null;

        try {
            if (count($variables) == 0) {
                $statement = $this->connection->query ($sql);
            } else {
                $statement = $this->connection->prepare($sql);
                $statement->execute($variables);
            }//end else
        } catch(\PDOException $e) {
            die(json_encode(array("error"=>$e->getMessage())));
        }//end try catch

        return $statement->fetchAll(PDO::FETCH_ASSOC);
    }//end method

    public function getLastInsertedID() {
        return $this->connection->lastInsertId();
    }//end method

    public function close() {
        $this->connection = null;
        self::$instance = null;
    }//end method

}//end class

?>