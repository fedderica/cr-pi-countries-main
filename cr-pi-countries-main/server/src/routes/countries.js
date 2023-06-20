const { Router } = require('express');
const { Country, Activity } = require('../db');
const { getUserHandler2, getUserHandlerId2 } = require('../handlers/UserHandlerCountries');


const router = Router();

router.get('/', getUserHandler2);
router.get('/:id', getUserHandlerId2);
module.exports = router;