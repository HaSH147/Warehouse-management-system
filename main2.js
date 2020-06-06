const getTableData = (req, res, db) => {
  db.select('*').from('articles')
    .then(items => {
      if(items.length){
        res.json(items)
      } else {
        res.json({dataExists: 'false'})
      }
    })
    .catch(err => res.status(400).json({dbError: 'db error'}))
}

const postTableData = (req, res, db) => {
  const { IdArt , qteinit , qtestock , pu , categorie , designation , qtealerte , qtemin } = req.body
  const added = new Date()
  db('articles').insert({ IdArt , qteinit , qtestock , pu , categorie , designation , qtealerte , qtemin })
    .returning('*')
    .then(item => {
      res.json(item)
    })
    .catch(err => res.status(400).json({dbError: 'db error'}))
}

const putTableData = (req, res, db) => {
  const { idart , qteinit, qtestock, pu, categorie, designation, qtealerte, qtemin } = req.body
  db('articles').where({id}).update({idart , qteinit, qtestock, pu, categorie, designation, qtealerte, qtemin})
    .returning('*')
    .then(item => {
      res.json(item)
    })
    .catch(err => res.status(400).json({dbError: 'db error'}))
}

const deleteTableData = (req, res, db) => {
  const { id } = req.body
  db('articles').where({idart}).del()
    .then(() => {
      res.json({delete: 'true'})
    })
    .catch(err => res.status(400).json({dbError: 'db error'}))
}

module.exports = {
  getTableData,
  postTableData,
  putTableData,
  deleteTableData
}