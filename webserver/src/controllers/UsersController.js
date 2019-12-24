import FS from 'fs'

const series = require('../../__mocks__/series.json')
const relations = require('../../__mocks__/relations.json')

function filterByType (userId, type) {
  return relations
    .filter(item => (+item.userId === +userId && item.type === type))
    .map(item => {
      const serie = series.filter(serie => serie.id === item.serieId)[0]

      serie.watched = type === 'watched'
      serie.watchlist = type === 'watchlist'

      return serie
    })
}

function addDataOnRelations ({ serieId, userId, type }) {
  let payload = []

  const alreadyHas = relations.filter(rel => (
    +rel.serieId === +serieId && +rel.userId === +userId && rel.type === type
  )).length

  if (alreadyHas) {
    return false
  }

  const dataInInverted = relations.filter(rel => (
    +rel.serieId === +serieId && +rel.userId === +userId && rel.type !== type
  ))

  if (dataInInverted.length) {
    payload = relations.map(rel => {
      if (+rel.serieId === +serieId && +rel.userId === +userId) {
        rel.type = type
      }

      return rel
    })
  } else {
    relations.push({
      type,
      userId,
      serieId,
      id: relations.length + 1
    })

    payload = relations
  }

  FS.writeFileSync('__mocks__/relations.json', JSON.stringify(payload))

  return true
}

export default {
  watchlist (req, res) {
    res.status(200).send({ data: filterByType(req.params.id, 'watchlist') })
  },
  watchedlist (req, res) {
    res.status(200).send({ data: filterByType(req.params.id, 'watched') })
  },
  watchlistUserLogged (req, res) {
    res.status(200).send({ data: filterByType(req.data.id, 'watchlist') })
  },
  watchedlistUserLogged (req, res) {
    res.status(200).send({ data: filterByType(req.data.id, 'watched') })
  },
  addSerieWatchlist (req, res) {
    const { serieId } = req.body
    const { id: userId } = req.data

    const payload = {
      userId,
      serieId,
      type: 'watchlist'
    }

    if (addDataOnRelations(payload)) {
      res.status(200).send({
        message: 'Série adicionada na watchlist'
      })
    } else {
      res.status(400).send({
        message: 'A série já está na watchlist'
      })
    }
  },
  removeSerieWatchlist (req, res) {
    const { id } = req.params
    const rel = relations.filter(rel => +rel.serieId === +id && rel.userId === req.data.id)[0]

    if (!rel) {
      res.status(400).send({
        message: 'A série não está na sua watchlist'
      })

      return
    }

    relations.splice(relations.indexOf(rel), 1)

    FS.writeFileSync('__mocks__/relations.json', JSON.stringify(relations))

    res.status(200).send({
      message: 'Série removida da watchlist'
    })
  },
  addSerieWatchedlist (req, res) {
    const { serieId } = req.body
    const { id: userId } = req.data

    const payload = {
      userId,
      serieId,
      type: 'watched'
    }

    if (addDataOnRelations(payload)) {
      res.status(200).send({
        message: 'Série adicionada lista de já assistidas'
      })
    } else {
      res.status(400).send({
        message: 'A série já está lista de já assistidas'
      })
    }
  },
  removeSerieWatchedlist (req, res) {
    const { id } = req.params
    const rel = relations.filter(rel => +rel.serieId === +id && rel.userId === req.data.id)[0]

    if (!rel) {
      res.status(400).send({
        message: 'A série não está na sua lista de já assistidas'
      })

      return
    }

    relations.splice(relations.indexOf(rel), 1)

    FS.writeFileSync('__mocks__/relations.json', JSON.stringify(relations))

    res.status(200).send({
      message: 'Série removida da lista de já assistidas'
    })
  }
}
