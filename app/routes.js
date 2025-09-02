const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.post('/set-user-group', (req, res) => {
  const group = req.body.userGroup
  console.log('Selected user group:', group)

  // Save the selected group to session
  req.session.data['userGroup'] = group

  // Redirect based on group
  if (group === 'group1' || group === 'group2') {
    res.redirect('/schools-listLD')
  } else if (group === 'group3' || group === 'group4' || group === 'group5') {
    res.redirect('/school-opt-in')
  } else {
    res.redirect('/error')
  }
})

router.get('/schools-listLD', (req, res) => {
  const group = req.session.data['userGroup']
  res.render('schools-listLD', { group })
})

module.exports = router


router.post('/account-answer', function (req, res) {
  const answer = req.body.haveAccount;

  if (answer === 'yes' || answer === 'no') {
    res.redirect('/account_type');
  } else {
    res.redirect('/'); // fallback
  }
});
router.post('/account-answer', function (req, res) {
  const answer = req.body.haveAccount;
  req.session.data['haveAccount'] = answer;
  res.redirect('/account_type');
});
