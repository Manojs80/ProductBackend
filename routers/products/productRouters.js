const { addProduct, getallProduct, deleteProduct, updateProduct, getProductById } = require('../../controllers/productcontrollers');
const asyncHandler = require('../../utils/asyncHandler');
const multer = require('multer');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null,'uploads/')
    }, 
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null,  uniqueSuffix + file.originalname)  
   }
   });
  
  const upload = multer({ storage: storage });
  


const router = require('express').Router();
//router.post('/',asyncHandler(addProduct))
 router.post('/', upload.single('image') ,asyncHandler(addProduct))
router.get('/',asyncHandler(getallProduct))
router.delete('/:id',asyncHandler(deleteProduct))
router.put('/:id', upload.single('image') ,asyncHandler(updateProduct))
router.get('/:id',asyncHandler(getProductById))







module.exports = router