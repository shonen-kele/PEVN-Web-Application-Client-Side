//controllers are used for declaring all the end points
import {db} from '@/models/index.js'
import jwt from 'jsonwebtoken'
function jwtSignUser(userInstance){
    const ONE_WEEK = 60 * 60 * 24 * 7
    return jwt.sign(userInstance, process.env.JWT_SECRET,{
        expiresIn: ONE_WEEK
    })
}

export async function register (body){
    let userInstance = await db.sequelize.models.User.findOne
    ({where:{email:body.email}})

    if(userInstance == null){
        await db.sequelize.models.User.create(body)
        userInstance = await db.sequelize.models.User.findOne({where:{email:body.email}})
        const userJson = userInstance.toJSON()
        return {
            message:'The user has signed up',
            token: jwtSignUser(userJson),
            email: userInstance.email
        }
    } else{
        console.log("The user has already signed up")
        return {errorMessage:'The user has already signed up'}
    }
}
export async function login (body){
    const userInstance = await db.sequelize.models.User.findOne({where:{email:body.email}})
    
    if (userInstance === null) {
        return {errorMessage:'The email is not in the database'}
    }

    const isPasswordValid = await userInstance.comparePassword(body.password)

    if (!isPasswordValid) {
        return{errorMessage:'The password was incorrect'}
    } else {
        const userJson = userInstance.toJSON()
        return {
            message:'You have successfully logged in',
            token: jwtSignUser(userJson),
            email: userInstance.email
        }
    }
}
export async function deleteAccount(body){
    const userInstance = await db.sequelize.models.User.findOne({where:{email:body.email}})
    const isPasswordValid = await userInstance.comparePassword(body.password)
    if (isPasswordValid) {
        return {errorMessage:'You have entered the wrong password'}
    } else {
        userInstance.destroy()
        return {message:'Your account was successfully deleted'}
    }
}
