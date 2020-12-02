<?php
  interface ExpenseDao{
    function addExpense($expense);
    function editExpense($expense);
    function deleteExpense($id);
  }
?>