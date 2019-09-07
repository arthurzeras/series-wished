import FS from 'fs'

const series = require('../../__mocks__/series.json')

export default {
  list (req, res) {
    res.status(200).send({ data: series })
  },
  create (req, res) {
    const { title } = req.body

    if (series.filter(serie => serie.title.toLowerCase() === title.toLowerCase()).length) {
      res.status(400).send({ message: 'Essa série já existe' })
      return
    }

    const payload = { id: series.length + 1, title }

    series.push(payload)

    FS.writeFileSync('__mocks__/series.json', JSON.stringify(series))

    res.status(200).send({
      data: payload,
      message: 'Cadastro realizado com sucesso'
    })
  },
  find (req, res) {
    const { id } = req.params

    const serie = series.filter(serie => +serie.id === +id)[0]

    if (!serie) {
      res.status(400).send({ message: 'Nenhuma série com este id foi encontrada' })
      return
    }

    res.status(200).send({ data: serie })
  },
  update (req, res) {
    const { title } = req.body

    if (series.filter(serie => serie.title.toLowerCase() === title.toLowerCase()).length) {
      res.status(400).send({ message: 'Essa série já existe' })
      return
    }

    const payload = series.map(serie => {
      if (+serie.id === +req.params.id) {
        serie.title = title
      }

      return serie
    })

    FS.writeFileSync('__mocks__/series.json', JSON.stringify(payload))

    res.status(200).send({
      message: 'Série atualizada com sucesso'
    })
  },
  delete (req, res) {
    series.splice(series.indexOf(series.filter(serie => +serie.id === +req.params.id)[0]), 1)

    FS.writeFileSync('__mocks__/series.json', JSON.stringify(series))

    res.status(200).send({
      message: 'Série deletada com sucesso'
    })
  }
}
