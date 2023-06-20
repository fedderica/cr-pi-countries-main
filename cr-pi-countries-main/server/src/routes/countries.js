const { Router } = require('express');
const { Country, Activity } = require('../db');
const { getUserHandler2 } = require ('../handlers/userHandlerCountries/getUserHandler2');
const { getUserHandlerId2 } = require ('../handlers/userHandlerCountries/getUserHandlerId2');

const router = Router();

router.get('/', getUserHandler2);
router.get('/:id', getUserHandlerId2);
module.exports = router;