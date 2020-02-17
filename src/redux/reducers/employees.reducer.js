function genNewId(employees) {
    let greatestId = 0;

    console.log('genNewId:', employees);

    for(let employeeItem of employees) {
        console.log('genNewId:', employeeItem);
        if (employeeItem.id != null && employeeItem.id > greatestId) {
            greatestId = employeeItem.id;
        }
    };
    console.log('genNewId:', greatestId);

    greatestId += 1;

    return greatestId;
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
  