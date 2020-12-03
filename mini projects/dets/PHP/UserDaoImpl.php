<?php
  include_once 'User.php';
  include_once 'UserDao.php';
  include_once 'UserDaoImpl.php';
  include_once 'JdbcUtil.php';

  class UserDaoImpl implements UserDao {
    function getProfile($id) {
      $connection = JdbcUtil::getConnection();

      $sql = "select * from tbluser where ID = ?";
      $statement = $connection->prepare($sql);

      $statement->bind_param('i', $id);

      $user = null;
      if($statement->execute()) {
        $statement->bind_result($id, $fullName, $email, $mobileNumber, $password, $regDate);
        if($statement->fetch()) {
          $user = new User($id, $fullName, $email, $mobileNumber, $password, $regDate);
        }
      }

      $connection->close();
      return $user;
    }
    function updateProfile($user) {
        $id = $user->getId();
        $fullName = $user->getFullName();
        $mobileNumber = $user->getMobileNumber();

        
        $connection = JdbcUtil::getConnection();
        $sql = 'update tbluser set FullName = ?, MobileNumber = ? where ID = ?';

        $statement = $connection->prepare($sql);
        $statement->bind_param('sii', $fullName, $mobileNumber, $id);

        $statement->execute();

        print_r($statement);
        $connection->close();
    }

    function resetPassword($user) {
      $id = $user->getId();
      $password = $user->getPassword();

      $connection = JdbcUtil::getConnection();
      $sql = 'update tbluser set Password = ? where ID = ?';

      $statement = $connection->prepare($sql);
      $statement->bind_param('si', $password, $id);

      $statement->execute();

      $connection->close();
    }
  }

?>