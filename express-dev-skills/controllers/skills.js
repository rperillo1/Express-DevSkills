let skillsDB = require('../models/skills')

function index(req, res) {
    res.render('skills/index', {
        skills: skillsDB.getAll()
    });
};

function show(req, res) {
    res.render('skills/show', {
        skill: skillsDB.getOne(req.params.id),
        skillNum: skillsDB.findIndex(req.params.id)
    });
};

function edit(req, res) {
    const skill = skillsDB.getOne(req.params.id)
    res.render('skills/edit', { skill })
}

function update(req, res) {
    req.body.done = !!req.body.done;
    skillsDB.update(req.params.id, req.body)
    res.redirect(`/skills/${req.params.id}`);
}


function newSkill(req, res) {
    res.render('skills/new');
}

function create(req, res) {
    skillsDB.create(req.body);
    res.redirect('/skills');
}


function deleteSkill(req, res) {
    skillsDB.deleteOne(req.params.id);
    res.redirect('/skills');
}

module.exports = {
    index,
    show,
    edit,
    update,
    new: newSkill,
    create,
    delete: deleteSkill
}