'use strict';

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  const data = {
    layout: 'layout-student'
  };
  res.render('students/diana/index', data);
});

module.exports = router;
