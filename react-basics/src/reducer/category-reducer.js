
export default (state = [], { type, payload }) => {
    switch (type) {
        case 'CATEGORY_CREATE':
            return [...state, payload]; // (1) make a copy, (2) append to the array
        case 'CATEGORY_UPDATE':
            return state.map((currentCategory) => {
                return currentCategory.id === payload.id ? payload : currentCategory;
            });
        case 'CATEGORY_REMOVE':
            return state.filter(currentCategory => currentCategory.id !== payload.id);
        default:
            return state;
    }
};
