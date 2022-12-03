import { createSlice,current } from '@reduxjs/toolkit';

const initialState={
	clients: [
	{
		id: 101,
		fio: {
			family: "Иванов",
			name: "Иван",
			patronymic: "Иванович"
		},
		balance: 200,
		workingMode: 1
	},
	{
		id: 102,
		fio: {
			family: "Сидоров",
			name: "Сидор",
			patronymic: "Сидорович"
		},
		balance: 250,
		workingMode: 1
	},
	{
		id: 103,
		fio: {
			family: "Петров",
			name: "Петр",
			patronymic: "Петрович"
		},
		balance: 180,
		workingMode: 1
	},
	{
		id: 104,
		fio: {
			family: "Григорьев",
			name: "Григорий",
			patronymic: "Григорьевич"
		},
		balance: -220,
		workingMode: 1
	},
],  // how many apples we have
}
export const clientsSlice = createSlice({
  name: 'clients',
  initialState,
  reducers: {

	showActive: (state,action)=>{
		state.clients.forEach((c, i) => {
			if (c.balance < 0) {
				c.workingMode = 0;
			}
		});
	},

	showAll: (state,action)=>{
		state.clients.forEach((c, i) => {		
				c.workingMode = 1;
		});
	},

	showBlocked: (state,action)=>{
		state.clients.forEach((c, i) => {
			if (c.balance > 0) {
				c.workingMode = 0;
			}
		});
	},

	removeClient:(state,action) => {
		state.clients = state.clients.filter((c)=>(c.id!==action.payload))
	},

	editOldClient:(state,action) =>{
		const index = state.clients.findIndex(object => object.id === action.payload.id);
		
		if (index === -1) {
			state.clients.push(action.payload);
		} else {
			state.clients.forEach((c, i) => {
				if (c.id == action.payload.id){
					c.fio.name = action.payload.fio.name;
					c.fio.family = action.payload.fio.family;
					c.fio.patronymic = action.payload.fio.patronymic;
					c.balance = action.payload.balance;
				}
			});
		}
		},
  },
});

// Redux Toolkit creates actions automatically, here they are:
export const {showActive, showAll, showBlocked, removeClient,editOldClient} = clientsSlice.actions;

// Redux Toolkit creates reducer automatically, here it is:
export default clientsSlice.reducer;
// Redux Toolkit does some magic under hood wrapping the functions 
// in the "reducers" list using Immer.js library
