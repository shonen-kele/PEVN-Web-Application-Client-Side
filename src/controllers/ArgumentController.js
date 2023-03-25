import {db} from '@/models/index.js'

export async function createArgument(body){

    //Returning the count of arguments under a particular user
    const argumentCount = await db.sequelize.models.Argument.count({
        where:{email:body.email}
    })
    const argumentInstance = await db.sequelize.models.Argument.findOne({where:{
        title:body.title,
        email:body.email
    }})
    console.log('The argument instance is ' + argumentInstance)

    if(argumentInstance == null){
        await db.sequelize.models.Argument.create({
            email: body.email,
            title: body.title,
            argument: body.argument,
            argumentIndex: argumentCount+1
        })
        return {message:'You have entered the argeument'}
    } else {
        return {errorMessage:'You have already entered this argument'}
    }
}
export async function destroyArgument(body){
    const argumentInstance = await db.sequelize.models.Argument.findOne
    ({where:{
        id:body.id
    }})
    if(argumentInstance == null){
        return {errorMessage:'The argument does not exist'}
    } else {
        await argumentInstance.destroy()
        return {message:'The argument was destroyed'}
    }
}
export async function displayPersonalArguments(body){
    const argumentInstances = await db.sequelize.models.Argument.findAll({where:{email:body.email}})
    
    if(argumentInstances.length == 0){
        console.log('Here')
        return {errorMessage:'You have made no argument'}
    } else{
        return {arguments:argumentInstances}
    }
}
export async function editArgument(body){
    const argumentInstance = await db.sequelize.models.Argument.findOne({where:{id:body.id}})
    if(argumentInstance){
        await argumentInstance.update({title:body.title})
        await argumentInstance.update({argument:body.argument})
        return {error:false}
    } else {
        return {error:true}
    }
}
export async function displayArguments(offset){
    console.log('offset is ' + offset)
    const {rows} = await db.sequelize.models.Argument.findAndCountAll({
        limit:30,
        offset: offset
    })
    return {arguments:rows}
}
export async function getArgument(id){
    const argumentInstance = await db.sequelize.models.Argument.findOne({
        where:{id:id}
    })
    if(argumentInstance){
        return {
            argumentId: argumentInstance.id,
            argumentBody: argumentInstance.argument,
            argumentTitle: argumentInstance.title
        }
    } else {
        return {errorMessage:`The argument with id ${id} does not exist or there was an internal error`}
    }
}
