import { Request, Response, NextFunction } from "express";
const jwt = require('jsonwebtoken')

export const checkAuth = (req: Request, res: Response, next: NextFunction) => {
    let { access_token } = req.headers
    
        if (!access_token) return res.status(400).json({msg: 'No Token provide'})

        jwt.verify(access_token, process.env.SECRET_KEY, (err: any, log: any) => {
            if(err) return res.status(400).json({msg: 'Unauthorized access'})
            
            req.user = log.user_id
            next()
        })
}