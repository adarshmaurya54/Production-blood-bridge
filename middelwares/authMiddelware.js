const JWT = require("jsonwebtoken")


module.exports = async (req, res, next) => {
    try{
        const token = req.headers['authorization'].split(" ")[1];
        JWT.verify(token, process.env.JWT_SECRET, (err, decode) => {
            if(err){
                return res.status(401).send({
                    success: false,
                    message: "auth failed auth"
                })
            }else{
                req.body.userId = decode.userId;
                next();
            }
        })
    }catch(err){
        console.log(err);
        return res.status(401).send({
            success: false,
            message: 'Auth failed',
            err
        })
    }
}