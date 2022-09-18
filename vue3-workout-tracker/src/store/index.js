import { reactive } from "vue";


const state = reactive({
    //create a new vaule of state.
    user: null
})

const methods = {
    setUser(payload) {
        //if there is a user logged in it will set the payload to true. if there is none logged in it will be false.
        state.user = payload ? payload.user : null
    }
}


export default {
    state,
    methods
}