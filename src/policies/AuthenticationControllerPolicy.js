import Joi from 'joi'

export function registerPolicy (body){
    if(body.email == undefined || body.password == undefined){
        return {
            error:true,
            errorMessage:'The email or password is not defined'
        }
    }
    const template = Joi.object({
        email: Joi.string().email(),
        password:Joi.string().regex(
            new RegExp("^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{8,32}$")
        )
    })
    const {error} = template.validate(body)
    if(error){
        switch(error.details[0].context.key){
            case "email":
                console.log("The email format is not valid")
                return {error:true,errorMessage:'The email format was not valid'}
            case "password":
                console.log("The password format is not valid")
                return {
                    error:false,
                    errorMessage:`You must provide a valid password
                    <br/>
                    1. It must contain only the characters: a-z,A-Z,0-9 and special characters <br/>
                    (!@#$^&*()+=._-{}[])
                    <br/>
                    2. It must only be 8-32 characters in length`
                }
            default:
            return {error:true,}
        }
    } else {
        return {error:false}
    }
}
export function loginPolicy (body){
    if (body.email == undefined){
        return {error:true, errorMessage:'You have not entered an email'}
    }
    const email = Joi.string().email()
    const {error} = email.validate(body.email)
    if(error){
        return {error:true,errorMessage:'What you provided was not the format of an email'}
    } else {
        return {error:false}
    }
}