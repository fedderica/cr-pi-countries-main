const { Router } = require('express');
const { Activity, Country } = require('../db'); 
const { getUserHandler, postUserHandler } = require('../handlers/getUserHandler');


const router = Router();

router.get('/', getUserHandler);

router.post('/', postUserHandler);

module.exports = router;