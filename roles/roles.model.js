const knex = require('knex');
const knexConfig = {
    client: 'sqlite3', 
    useNullAsDefault: true,
    connection: {
      filename: './data/rolex.db3', 
    },
  };
  
  const db = knex(knexConfig);

module.exports = {
find,
findBYId,
//add,
// update,
 remove
};

function find(){
    return db('roles')
}

function findBYId(id){
    return db('roles') 
      .where({id})
      .first();
}

// function add(role){
//     const [id] =  db('roles').insert(roles);

//     return findById(id);
// }

// function update(id, changes){
//     return db('roles')
//     .where({ id })
//     .update(changes, '*');
// }

function remove(id){
    return db('roles')
    .where({ id })
    .del();
}