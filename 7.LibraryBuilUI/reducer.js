const init = {
    cars: ['BMW']
}

export default function reducer(state = init, action, args){
    switch (action) {
        case 'ADD':
            const [newCars] = args
            return {
                ...state,
                cars: [...state.cars, newCars]
            }

        default:
            return state
    }
}