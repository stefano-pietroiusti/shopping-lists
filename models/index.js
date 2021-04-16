let shoppingList = [
  { id:'monday', title: 'Monday Shopping List', products: [{ title: 'Milk', 'isChecked': false}]},
  { id:'tuesday', title: 'Tuesday Shopping List', products: [{ title: 'Bananas', 'isChecked': false}]}
];

exports.getLists = () => {
  //to async await backend query using the db service
  return shoppingList;
};

exports.getListById = (id) => {
    //to async await backend query using the db service
  return shoppingList.find(x => x.id === id);
};
