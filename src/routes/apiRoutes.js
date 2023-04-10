const express = require('express')
const ApiController = require('../controllers/ApiController')

const router = express.Router()

router.get('/feed', ApiController.recentPosts)
router.get('/category/acessibilidade', ApiController.categoryAcessibilidade)
router.get('/category/anuncio', ApiController.categoryAnuncio)
router.get('/category/arromanticidade', ApiController.categoryArromanticidade)
router.get('/category/assexualidade', ApiController.categoryAssexualidade)
router.get('/category/atracao', ApiController.categoryAtracao)
router.get('/category/feminismo', ApiController.categoryFeminismo)
router.get('/category/genero', ApiController.categoryGenero)
router.get('/category/guias', ApiController.categoryGuias)
router.get('/category/historia', ApiController.categoryHistoria)
router.get('/category/neurodivergencia', ApiController.categoryNeurodivergencia)
router.get('/category/raca', ApiController.categoryRaca)
router.get('/category/resenhas', ApiController.categoryResenhas)
router.get('/category/sexualidade', ApiController.categorySexualidade)
router.get('/category/sociedade', ApiController.categorySociedade)
router.get('/category/spacey-indica', ApiController.categorySpaceyIndica)

module.exports = router
