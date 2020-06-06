const getTableData = (req, res, db) => {
  db.select('*').from('inventaires')
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
  const { id, date_deb, date_fin, typemvt, qtemvt, pumvt, designation  } = req.body
  const added = new Date()
  db('inventaires').insert({ id, date_deb, date_fin, typemvt, qtemvt, pumvt, designation })
    .returning('*')
    .then(item => {
      res.json(item)
    })
    .catch(err => res.status(400).json({dbError: 'db error'}))
}

const putTableData = (req, res, db) => {
  const { id, date_deb, date_fin, typemvt, qtemvt, pumvt, designation } = req.body
  db('inventaires').where({id}).update({ id, date_deb, date_fin, typemvt, qtemvt, pumvt, designation })
    .returning('*')
    .then(item => {
      res.json(item)
    })
    .catch(err => res.status(400).json({dbError: 'db error'}))
}

const deleteTableData = (req, res, db) => {
  const { id } = req.body
  db('inventaires').where({id}).del()
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