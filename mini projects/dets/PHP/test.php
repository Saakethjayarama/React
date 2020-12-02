<?php
  include_once 'Expense.php';
  include_once 'ExpenseDao.php';
  include_once 'ExpenseDaoImpl.php';

  
  $edi = new ExpenseDaoImpl();
  
  $expense = new Expense(37, 5, date('2020-08-12'), 'Pencillu', '20', null);
  print_r(json_encode($expense->toArray()));
  echo $edi->deleteExpense(37);
?>