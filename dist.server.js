const express = require('express'),
    config = require('./config/index')
    app = express()
    port = process.env.PORT || config.build.port
    apiRoutes = express.Router()
    axios = require('axios')

apiRoutes.get('/api/news/latest', function (req, res) {
    const url = 'http://news-at.zhihu.com/api/4/news/latest'
    axios.get(url, {
        headers: {
            host: 'news-at.zhihu.com'
        }
    }).then((response) =>{
        res.json(response.data)
    }).catch((e) => {
        console.log(e)
    })
})

app.use(express.static('./dist'))
module.exports = app.listen(port, function (err) {
    if(err){
        console.log(err)
        return
    }
    console.log('Listening at http://localhost:'+port)
})
