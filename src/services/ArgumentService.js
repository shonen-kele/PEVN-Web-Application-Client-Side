import Api from '@/services/Api.js';

export default{
    createArgument(ArgumentInputs){
        return Api().post('/createArgument',ArgumentInputs)
    },
    destroyArgument(ArgumentInputs){
        return Api().post('/destroyArgument',ArgumentInputs)
    },
    displayPersonalArguments(ArgumentInputs){
        return Api().post('/displayPersonalArguments',ArgumentInputs)
    }
}