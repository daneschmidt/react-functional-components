function genNewId(employees) {
    let greatestId = 0;

    employees.forEach((employeeItem) => {
        if (employeeItem.id > greatestId) {
            greatestId = employeeItem.Id;
        }
    });

    return greatestId++;
}

const employeesReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_EMPLOYEE':
            return [
                ...state,
                {
                    ...action.payload,
                    id: genNewId(state),
                }
            ];
        case 'REMOVE_EMPLOYEE':
            return state.filter((item) => {
                return item.id !== action.payload.id;
            });
        case 'CLEAR_EMPLOYEE':
            return [];
        default:
            return state;
    }
};
  
export default employeesReducer;
  