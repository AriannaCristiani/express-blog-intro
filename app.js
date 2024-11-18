const express = require('express')
const app = express()
const port = 3000

const posts = [
    {
        titolo: 'Ciambellone',
        contenuto: 'Ricetta',
        immagine: 'images/ciambellone.jpeg',
        tags: ['ricette', 'dolci', 'torta'],
    },
    {
        titolo: 'Crackers alla Barbabietola',
        contenuto: 'Ricetta',
        immagine: 'images/cracker_barbabietola.jpeg',
        tags: ['snacks', 'salutare', 'salato'],
    },
    {
        titolo: 'Pane Dolce Fritto',
        contenuto: 'Ricetta',
        immagine: 'images/pane_fritto_dolce.jpeg',
        tags: ['pane', 'dolci', 'fritti'],
    },
    {
        titolo: 'Pasta alla Barbabietola',
        contenuto: 'Ricetta',
        immagine: 'images/pasta_barbabietola.jpeg',
        tags: ['pasta', 'salutare', 'barbabietola'],
    },
    {
        titolo: 'Torta Paesana',
        contenuto: 'Ricetta',
        immagine: 'images/torta_paesana.jpeg',
        tags: ['torta', 'dolci', 'tradizione'],
    }
]

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('Server del mio Blog')

})

app.get('/bacheca', (req, res) => {
    
    let postNumber = 0

    for (let i = 0 ; i < posts.length ; i++){
        postNumber = i + 1;
    }

    res.json({
        postList: posts,
        posts: postNumber,
        })
    
})

app.listen(port, () => {
    console.log(`il server è in ascolto sulla porta: ${port}`)
})