const express = require('express')
const router = express.Router()

router.post('/set-user-group', function (req, res) {
  const group = req.body.userGroup;
  console.log('Selected user group:', group); // Debug: check terminal output
  // Store selection in session
  req.session.data.userGroup = group;
  // Redirect based on group
  if (group === 'group1' || group === 'group2') {
    return res.redirect('/schools-listLD');
  }
  if (group === 'group3' || group === 'group4' || group === 'group5') {
    return res.redirect('/school-opt-in');
  }
  // Fallback if somehow nothing matches
  return res.redirect('/error');
});

router.get('/schools-listLD', function (req, res) {
  const group = req.session.data.userGroup;
  res.render('schools-listLD', {
    group: group
  });
});



// Add your routes here - above the module.exports line

module.exports = router
