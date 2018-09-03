// //import selectExpensesTotal from '../selectors/expenses-total';
// import React from 'react';

const expenses1 = [{
    id: 'ex1',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount: 50000,
    createdAt: 0
    }, {
    id: 'ex2',
    description: 'feb Rent',
    note: 'This was the final payment for that address',
    amount: 5000
    
    }, {
    id: 'ex3',
    description: 'march Rent',
    note: 'This was the final payment for that address',
    amount: 500
    
    }
]
//createdAt: momment(0).subtract(10, 'days'),valueOf();
const selectExpensesTotal = () => {
    return expenses1.map((expense) => expense.amount
            ).reduce((sum, value) => sum + value,0);
};

const total = selectExpensesTotal();
console.log(total);

//const arr = [{amount: 1, name: 'xyz'}, {amount: 2, name: 'abc'}];
 //console.log(expenses1.map((i) => i.amount).reduce((sum, value) => sum + value),0)


