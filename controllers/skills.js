const Skill = require('../models/skill');

module.exports = {
  index,
  show, 
  new: newSkill, 
  create, 
  delete: deleteSkill, 
  edit,
  update
};

function update(req, res) {
  req.body.done = !!req.body.done;
  Skill.update(req.params.id, req.body);
  res.redirect(`/skills/${req.params.id}`);
}

function edit(req, res) {
  const skill= skill.getOne(req.params.id);
  res.render('skills/edit', { skill });
}

function deleteSkill(req, res) {
  Skill.deleteOne(req.params.somethingcrazy);
  // When data has been changed, we redirect (POST, PUT, DELETE requests)
  res.redirect('/skills');  // Provide the PATH, not a template when redirecting
}

function create(req, res) {
  // console.log(req.body);
 Skill.create(req.body);
  res.redirect('/skills'); 
}

function newSkill(req, res) {
  res.render('skills/new');
}

function show(req, res) {
  // Access all route params using req.params (object)
  const skill = Skill.getOne(req.params.id);
  res.render('skills/show', { skill });
}

// controller action <--> controller function
function index(req, res) {
  const skills = Skill.getAll();
  res.render('skills/index', { skills });
}