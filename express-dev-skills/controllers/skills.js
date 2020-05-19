let skillsDB = require('../models/skills')

function index(req, res) {
    res.render('skills/index', {
        skills: skillsDB.getAll()
    });
};

function show(req, res) {
    res.render('skills/show', {
        skill: skillsDB.getOne(req.params.id)
    });
};

module.exports = {
    index,
    show
}