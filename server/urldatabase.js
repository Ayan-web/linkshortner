const { MongoClient } = require('mongodb')
const { nanoid } = require('nanoid')
const crypto = require('crypto')

require('dotenv').config()

//create client 

/**
 * 
 * @param {String} url - string url to shorten
 * @returns hash of url
 */
exports.pushLink = async function (url)
{
    // const client = new MongoClient(`mongodb://localhost:27017/`,{
	const client = new MongoClient(process.env.MONGODB_URI,{
        usenewurlparser: true,
        useunifiedtopology: true,
        keepalive:1
    })

    const db = client.db('test')
    const hash = crypto.createHash('sha256').update(url).digest('hex')
    const uniqueId = nanoid(10)
    try{
	await client.connect()
        await db.collection('links').insertOne({_id:hash,uniqueId:uniqueId,url:url})
    }
    catch(err){
        if(err.code===11000)
        {
            const link = await db.collection('links').findOne({_id:hash})
            return link.uniqueId
        }
    }
    finally{
        client.close()
    }
    return uniqueId
}

/**
 * 
 * @param {String} uniqueId - short url i.e the shorten url 
 * @returns redirect url 
 */
exports.get = async function (uniqueId)
{
    const client = new MongoClient(process.env.MONGODB_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        keepAlive:1
    })

    await client.connect()
    const db = client.db('test')
    const link = await db.collection('links').findOne({uniqueId:uniqueId})
    client.close()
    return link.url
}
