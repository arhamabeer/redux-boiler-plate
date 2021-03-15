

const set_name = (data) => {
    return (dispatch) => {
        dispatch({
            type: 'setname',
            data: data
        })
    }

}
const set_school = (data) => {
    return (dispatch) => {
        dispatch({
            type: 'setschool',
            data: data
        })
    }

}
const set_job = (data) => {
    return (dispatch) => {
        dispatch({
            type: 'setjob',
            data: data
        })
    }

}

export {
    set_name,
    set_school,
    set_job
}