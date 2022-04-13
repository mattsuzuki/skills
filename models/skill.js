const skills = [
    {id: 321, skill: 'Controller', done: true},
    {id: 123, skill: 'Model', done: false},
    {id: 213, skill: 'Viewe', done: false}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
  };
  
  function update(id, skill) {
    id = parseInt(id);
    const updatedSkill = skills.find((skill) => skill.id === id);
    Object.assign(updatedSkill, skill);
  }
  
  function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex((skill) => skill.id === id);
    skills.splice(idx, 1);
  }
  
  function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);
  }
  
  function getOne(id) {
    id = parseInt(id);
    return skills.find((skill) => skill.id === id);
  }
  
  function getAll() {
    return skills;
  }