<?php
  include_once 'JdbcUtil.php';
  include_once 'ExpenseDao.php';

  class ExpenseDaoImpl implements ExpenseDao{
    function addExpense($expense) {

      $userId = $expense->getUserId();
      $expenseDate = $expense->getExpenseDate();
      $expenseItem = $expense->getExpenseItem();
      $expenseCost = $expense->getExpenseCost();

      $connection = JdbcUtil::getConnection();

      $sql = 'insert into tblexpense(UserId, ExpenseDate, ExpenseItem, ExpenseCost) values (?,?,?,?)';
      $statement = $connection->prepare($sql);

      $statement->bind_param('isss', $userId, $expenseDate, $expenseItem, $expenseCost);

      $n = '';
      if($statement->execute()) {
        $n = $connection->insert_id;
      }

      $connection->close();
      return $n;

    }

    function editExpense($expense) {
      
      $id = $expense->getId();
      $expenseDate = $expense->getExpenseDate();
      $expenseItem = $expense->getExpenseItem();
      $expenseCost = $expense->getExpenseCost();

      $connection = JdbcUtil::getConnection();

      $sql = 'update tblexpense set ExpenseDate = ?, ExpenseItem = ?, ExpenseCost = ? where ID = ?';
      $statement = $connection->prepare($sql);

      $statement->bind_param('sssi', $expenseDate, $expenseItem, $expenseCost, $id);

      $statement->execute();
      $connection->close();

    }

    function deleteExpense($id) {
      $connection = JdbcUtil::getConnection();

      $sql = 'delete from tblexpense where id = ?';
      $statement = $connection->prepare($sql);
      $statement->bind_param('i', $id);

      $statement->execute();
      print_r($statement);
      $connection->close();
    }

  }
?>