const express = require("express");
const { getProducts, uploadproducts, getProductById, deleteProduct, editProduct, getAllSellerProducts } = require("../controller/productsController");
const upload = require("../middleware/multer");
const router = express.Router();


router.get("/get-products", getProducts)
router.get("/get-seller-product/:id" , getAllSellerProducts)
router.get('/get-products/:id', getProductById);
router.post('/upload-product', upload.fields([{ name: 'url', maxCount: 1 }, { name: 'detailUrl', maxCount: 1 }]), uploadproducts);

router.put("/edit-product/:id", editProduct)
router.delete("/delete-product/:id", deleteProduct)

module.exports = router