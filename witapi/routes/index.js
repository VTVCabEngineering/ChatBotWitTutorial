const router = require('express').Router()
const getEntitiesInfo = require('./entities/getEntities')

/* http://localhost:4000/v1/getEntitiesInfo 
   Method: POST */
router.post('/getEntitiesInfo', getEntitiesInfo)

module.exports = router