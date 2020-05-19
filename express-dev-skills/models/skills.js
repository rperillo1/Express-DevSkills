const skills = [
    { id: 125223, skill: 'HTML', done: true },
    { id: 127904, skill: 'JavaScript', done: true },
    { id: 139608, skill: 'Django', done: false }
];

module.exports = {
    getAll,
    getOne
}

function getAll(){
    return skills;
}

function getOne(id){
    return skills.find(skill => skill.id === parseInt(id));
}