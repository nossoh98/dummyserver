const express=require('express');
const { createPool } = require('mysql2/promise');
const { config } = require('./mysql.config');

const app=express();
const port=3000;
const pool = createPool(config);
app.get('/', async (req,res)=>{
    const conn = await pool.getConnection();
    const result = await conn.execute(`
    SELECT 
    userinfo.userId,
    userinfo.username,
    userinfo.follower_num,
    postinfo.postId,
    postinfo.title, 
    postinfo.view_num, 
    postinfo.like_num, 
    postinfo.summary,
    postinfo.route,
    postinfo.hashtag
    from user as userinfo JOIN post as postinfo ON userinfo.userId = postinfo.userId
    ORDER BY postinfo.view_num ASC
    `).then(r=> r[0]);
    for(let i=0; i<result.length; i++){
        if(result[i].postinfo.hashtag===null){
            result[i].postinfo.hashtag=[];
        }
    }
    res.json(result);
});

app.listen(port,()=>{
    console.log(`server start. http://localhost:${port}`);
});