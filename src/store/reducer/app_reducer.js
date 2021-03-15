
const INITIAL_STATE = {
    app_name: 'AAA Application',
    app_code: 'aaa04091999'
}


export default (state = INITIAL_STATE, action) => {
    console.log('app_reducer=> ', action)

    switch (action.type) {
        case ('setname'):
            return ({
                ...state, app_name: action.data
            })
    }

    return state
}