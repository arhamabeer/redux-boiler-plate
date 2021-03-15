
const INITIAL_STATE = {
    user_name: 'arham',
    user_school: ['fj', 'falcon', 'gdc', 'fuuast'],
    user_job: ''
}


export default (state = INITIAL_STATE, action) => {
    console.log('auth_reducer=> ', action.data)

    switch (action.type) {
        case ('setschool'):
            return ({
                ...state,
                user_school: [...state.user_school, action.data]
            })
        case ('setjob'):
            return ({
                ...state,
                user_job: action.data
            })
    }

    return state
}