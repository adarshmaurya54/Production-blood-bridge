const userModel = require("../model/userModel");

module.exports = async (req, res, next) => {
    try {
        const user = await userModel.findById(req.body.userId);
        //check admin
        if(user?.role !== "admin"){
            return res.status(401).send({
                success: false,
                message: "Auth failed"
            })
        }else{
            next();
        }
    } catch (error) {
        console.log();
        return res.status(401).send({
            success: false,
            message: "Auth failed, ADMIN api",
            error
        })
    }
}