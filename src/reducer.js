export const initialState = {
    user : null,
    playlist : [],
    playing : false,
    item : null,
    token_ : null
}

const reducer = (state, action) => {
    console.log(action)
    switch(action.type) {
        case "SET_USER" :
            return {
                ...state,
                user : action.user
            }
        case "SET_TOKEN" :
            return {
                ...state,
                token_ : action.token_
            }   
        default :
            return state
    }
}

export default reducer