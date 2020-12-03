<?php
  interface UserDao {
    function getProfile($id);
    function updateProfile($user);
  }
?>