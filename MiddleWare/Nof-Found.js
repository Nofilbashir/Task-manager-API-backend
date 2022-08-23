const NotFound =(req, res)=>{
    // res.status(404).send('ROUTE NOT FOUND')
    res.sendFile('NoTFound.html', {root: __dirname })
}

module.exports = NotFound