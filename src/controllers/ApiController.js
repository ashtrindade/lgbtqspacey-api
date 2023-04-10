const { extract } = require('@extractus/feed-extractor')

class ApiController {
  static recentPosts = async (req, res) => {
    try {
      const rss = await extract('https://lgbtqspacey.com/feed', {
        getExtraEntryFields: (feedEntry) => ({
          id: '',
          category: feedEntry.category[0] || '',
        }),
      })
      res.status(200).json(rss)
    } catch (error) {
      res.status(500).send(error.message)
      console.log(error)
    }
  }

  static categoryAcessibilidade = async (req, res) => {
    try {
      const rss = await extract('https://lgbtqspacey.com/category/acessibilidade/feed/', {
        getExtraEntryFields: (feedEntry) => ({
          id: '',
          category: feedEntry.category[0] || '',
        }),
      })
      res.status(200).json(rss)
    } catch (error) {
      res.status(500).send(error.message)
      console.log(error)
    }
  }

  static categoryAnuncio = async (req, res) => {
    try {
      const rss = await extract('https://lgbtqspacey.com/category/anuncio/feed/', {
        getExtraEntryFields: (feedEntry) => ({
          id: '',
          category: feedEntry.category[0] || '',
        }),
      })
      res.status(200).json(rss)
    } catch (error) {
      res.status(500).send(error.message)
      console.log(error)
    }
  }

  static categoryArromanticidade = async (req, res) => {
    try {
      const rss = await extract('https://lgbtqspacey.com/category/arromanticidade/feed/', {
        getExtraEntryFields: (feedEntry) => ({
          id: '',
          category: feedEntry.category[0] || '',
        }),
      })
      res.status(200).json(rss)
    } catch (error) {
      res.status(500).send(error.message)
      console.log(error)
    }
  }

  static categoryAssexualidade = async (req, res) => {
    try {
      const rss = await extract('https://lgbtqspacey.com/category/assexualidade/feed/', {
        getExtraEntryFields: (feedEntry) => ({
          id: '',
          category: feedEntry.category[0] || '',
        }),
      })
      res.status(200).json(rss)
    } catch (error) {
      res.status(500).send(error.message)
      console.log(error)
    }
  }

  static categoryAtracao = async (req, res) => {
    try {
      const rss = await extract('https://lgbtqspacey.com/category/atracao/feed/', {
        getExtraEntryFields: (feedEntry) => ({
          id: '',
          category: feedEntry.category[0] || '',
        }),
      })
      res.status(200).json(rss)
    } catch (error) {
      res.status(500).send(error.message)
      console.log(error)
    }
  }

  static categoryFeminismo = async (req, res) => {
    try {
      const rss = await extract('https://lgbtqspacey.com/category/feminismo/feed/', {
        getExtraEntryFields: (feedEntry) => ({
          id: '',
          category: feedEntry.category[0] || '',
        }),
      })
      res.status(200).json(rss)
    } catch (error) {
      res.status(500).send(error.message)
      console.log(error)
    }
  }

  static categoryGenero = async (req, res) => {
    try {
      const rss = await extract('https://lgbtqspacey.com/category/genero/feed/', {
        getExtraEntryFields: (feedEntry) => ({
          id: '',
          category: feedEntry.category[0] || '',
        }),
      })
      res.status(200).json(rss)
    } catch (error) {
      res.status(500).send(error.message)
      console.log(error)
    }
  }

  static categoryGuias = async (req, res) => {
    try {
      const rss = await extract('https://lgbtqspacey.com/category/guias/feed/', {
        getExtraEntryFields: (feedEntry) => ({
          id: '',
          category: feedEntry.category[0] || '',
        }),
      })
      res.status(200).json(rss)
    } catch (error) {
      res.status(500).send(error.message)
      console.log(error)
    }
  }

  static categoryHistoria = async (req, res) => {
    try {
      const rss = await extract('https://lgbtqspacey.com/category/historia/feed/', {
        getExtraEntryFields: (feedEntry) => ({
          id: '',
          category: feedEntry.category[0] || '',
        }),
      })
      res.status(200).json(rss)
    } catch (error) {
      res.status(500).send(error.message)
      console.log(error)
    }
  }

  static categoryNeurodivergencia = async (req, res) => {
    try {
      const rss = await extract('https://lgbtqspacey.com/category/neurodivergencia/feed/', {
        getExtraEntryFields: (feedEntry) => ({
          id: '',
          category: feedEntry.category[0] || '',
        }),
      })
      res.status(200).json(rss)
    } catch (error) {
      res.status(500).send(error.message)
      console.log(error)
    }
  }

  static categoryRaca = async (req, res) => {
    try {
      const rss = await extract('https://lgbtqspacey.com/category/raca/feed/', {
        getExtraEntryFields: (feedEntry) => ({
          id: '',
          category: feedEntry.category[0] || '',
        }),
      })
      res.status(200).json(rss)
    } catch (error) {
      res.status(500).send(error.message)
      console.log(error)
    }
  }

  static categoryResenhas = async (req, res) => {
    try {
      const rss = await extract('https://lgbtqspacey.com/category/resenhas/feed/', {
        getExtraEntryFields: (feedEntry) => ({
          id: '',
          category: feedEntry.category[0] || '',
        }),
      })
      res.status(200).json(rss)
    } catch (error) {
      res.status(500).send(error.message)
      console.log(error)
    }
  }

  static categorySexualidade = async (req, res) => {
    try {
      const rss = await extract('https://lgbtqspacey.com/category/sexualidade/feed/', {
        getExtraEntryFields: (feedEntry) => ({
          id: '',
          category: feedEntry.category[0] || '',
        }),
      })
      res.status(200).json(rss)
    } catch (error) {
      res.status(500).send(error.message)
      console.log(error)
    }
  }

  static categorySociedade = async (req, res) => {
    try {
      const rss = await extract('https://lgbtqspacey.com/category/sociedade/feed/', {
        getExtraEntryFields: (feedEntry) => ({
          id: '',
          category: feedEntry.category[0] || '',
        }),
      })
      res.status(200).json(rss)
    } catch (error) {
      res.status(500).send(error.message)
      console.log(error)
    }
  }

  static categorySpaceyIndica = async (req, res) => {
    try {
      const rss = await extract('https://lgbtqspacey.com/category/spacey-indica/feed/', {
        getExtraEntryFields: (feedEntry) => ({
          id: '',
          category: feedEntry.category[0] || '',
        }),
      })
      res.status(200).json(rss)
    } catch (error) {
      res.status(500).send(error.message)
      console.log(error)
    }
  }
}

module.exports = ApiController
