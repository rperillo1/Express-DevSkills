const skills = [
    { id: 125223, skill: 'HTML', done: true },
    { id: 127904, skill: 'JavaScript', done: true },
    { id: 139608, skill: 'Django', done: false }
];

module.exports = {
    getAll,
    getOne,
    findIndex,
    update,
    create,
    deleteOne
}

function getAll() {
    return skills;
}

function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id));
}

function findIndex(id) {
    return skills.findIndex(skill => skill.id === parseInt(id)) + 1;
}

function update(id, skill) {
    const skillObj = skills.find(s => s.id === parseInt(id));
    Object.assign(skillObj, skill);
}


function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);
}

function deleteOne(id) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
}