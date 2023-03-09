import Api from '@/services/Api.js';

export default{
    createArgument(ArgumentInputs){
        return Api().post('/createArgument',ArgumentInputs)
    },
    destroyArgument(ArgumentInputs){
        return Api().delete('/destroyArgument',ArgumentInputs)
    }
}