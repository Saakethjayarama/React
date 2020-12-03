<?php
  interface UserDao {
    function getProfile($id);
    function updateProfile($user);
    function resetPassword($user);
  }
?>