const express = require('express')
const router = express.Router()
const {getAllTasks, createTask,getSingleTask, deleteTask, updateTask, getNotExpired,getExpired,EditTask,deleteAll,deleteExpired} = require('../controllers/taskControllers')



//smart way


// router.route('/').get(getAllTasks)
// router.route('/').post(createTask)
// router.route('/:id').get(getSingleTask)
// router.route('/:id').delete(deleteTask)
// router.route('/:id').patch(updateTask)


//conventional Way

router.get('/', getAllTasks)
router.post('/', createTask)
router.get('/:id', getSingleTask)
router.get('/filter/expired',getExpired)
router.get('/filter/notexpired',getNotExpired)
router.delete('/filter/expired',getExpired)
router.delete('/:id', deleteTask)
router.delete('/filter/expired=true',deleteExpired)
router.delete('/', deleteAll)
router.patch('/:id', updateTask)
router.put('/:id', EditTask)




module.exports = router