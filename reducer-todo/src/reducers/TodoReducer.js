export const initialState = [
    {
        todo: 'Dummy',
        completed: false,
        id: Date.now()
    },
    {
        todo: 'Dummy',
        completed: true,
        id: Date.now()
    }
];

export const TodoReducer = (state, action) => {
    switch(action.type) {
        case 'TOGGLE_COMPLETED':
            return  {
                ...state,
                completed: !state.completed
            };
        default:
            return state;
    }
};