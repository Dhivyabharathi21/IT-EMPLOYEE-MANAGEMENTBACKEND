var express=require("express")
var router=express.Router()

const emplpoydetail =require('../Controller/controller')
const emproduct=require('../Controller/productcontroller')

router.post('/empldetail',emplpoydetail.empregister)
router.get('/viewemp',emplpoydetail.viewemp)
router.get('/findid/:id',emplpoydetail.empmentfindid)
router.post('/emplogin',emplpoydetail.emplogin)

router.post('/empform',emproduct.empform)
router.get('/viewform',emproduct.viewform)
router.get('/editfind/:id',emproduct.editfind)
router.post('/delete/:id',emproduct.findbyidanddelete)
router.post('/update/:empid',emproduct.findbyidandupdate)


module.exports=router  