import Joi from 'joi'


export function createArgumentPolicy(body){
    const titleTemplate = Joi.string().max(100).min(1)
    const argumentTemplate =  Joi.string().max(5000).min(50)
    const {titleError} = titleTemplate.validate(body.title)
    const {argumentError} = argumentTemplate.validate(body.argument)

    if(titleError){
        console.log('There was a title error')
        return {
            errorMessage:'The title is too long or too short',
            error: true
        }
    } else if (argumentError){
        console.log('There was an argument error')
        return{
            error: true,
            errorMessage:`The argument was either too long or too short 
            <br/>
            The argument must be at least 50 characters short or 5000 characters long.`
        }
    } else {return false}
}