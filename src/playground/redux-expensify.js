import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//Action generator - ADD expense
const addExpense = ({
    description = '' ,
    note = '',
    amount = 0,
    createdAt = 0 
    } = {}
    ) => ({
    type: 'ADD_EXPENSE',
    expenses: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

//Remove expense section
const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

//edit expense
const editExpense = (id,updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

//edit filter texxt
const editFilter = (updates) => ({
    type: 'EDIT_FILTER',
    updates
});

//SET sort by amount
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

//SET sort by date
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

//Set start date
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

//Set end date
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});

//filter and sort
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
      const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
      const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
      const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
      return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
          return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
          return a.amount < b.amount ? 1 : -1;
        }
      });
  };
  

const expensesReducerDefaultState = [];
const filtersReducerDefaultState = {
    text: 'rent1',
    sortBy: 'date', 
    startDate: undefined,
    endDate: undefined
};

const expensesReducer = (state = expensesReducerDefaultState , action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expenses
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => id !== action.id);
        case 'EDIT_EXPENSE':{
            return state.map((expense) => {
                if(expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updates
                    }
                }
            });
        }
        default:
            return state;    
    }
};

const filtersReducer = (state = filtersReducerDefaultState , action) => {
    switch(action.type){
        case 'EDIT_FILTER':
            return {
                ...state,
                ...action.updates
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };
        default:
            return state;    
    }
};

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

// const demoStore = {
//     expenses: [{
//         id: 'user1',
//         description: 'Jan Rent',
//         note: 'final payment',
//         amount: 24000,
//         createdAt: 0
//     }],
//     filters: {
//         text: 'rent',
//         sortBy: 'amount', //date or amt
//         startDate: undefined,
//         endDate: undefined
//     }
// };
const unsubscribe = store.subscribe(() => {
    //console.log(store.getState());
    const state = store.getState();
    //console.log(state.expenses);
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});
//const expenseOne = store.dispatch(addExpense({description: 'test1', note: 'note1', amount:25, createdAt:1}));
//const expenseTwo = store.dispatch(addExpense({description: 'test2', note: 'note12', amount:252, createdAt:2}));
const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -21000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000 }));
 // store.dispatch(removeExpense({id: expenseOne.expenses.id}));
 // store.dispatch(editExpense(expenseTwo.expenses.id, {amount: 200}));
  //store.dispatch(editFilter({text: 'Updated text filter'}));
// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());


 //store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
 //store.dispatch(setEndDate(1250));

store.dispatch(sortByAmount());
 //store.dispatch(sortByDate());


//Object spread
// const obj1 = {
//     n1: 'v1',
//     n2: 'v2'
// }

// const printObj1 = (updates) => ({
//         ...obj1,
//         ...updates
// });
// console.log(printObj1({n3: 'v3'}));