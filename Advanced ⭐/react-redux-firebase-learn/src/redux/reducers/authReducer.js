import {auth} from '../../firebase/firebase'



const INITIAL_STATE = {
    currentUser : auth.currentUser
}

const authReducer = (state = INITIAL_STATE, action) => {
    console.log(state)
    return state;
}

export default authReducer;