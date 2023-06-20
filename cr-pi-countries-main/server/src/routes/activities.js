const { Router } = require('express');
const { Activity, Country } = require('../db'); 


const router = Router();

router.get('/', getUserHandler);

router.post('/', postUserHandler);

module.exports = router;