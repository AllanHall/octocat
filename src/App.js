import React, { Component } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import CatCell from './components/CatCell'

const cats = [
  {
    number: '#3',
    name: 'Octobi Wan Catnobi',
    firstImage: 'https://octodex.github.com/images/octobiwan.jpg',
    secondImage: 'https://github.com/cameronmcefee.png'
  },
  {
    number: '#86',
    name: 'Stormtroopocat',
    firstImage: 'https://octodex.github.com/images/stormtroopocat.png',
    secondImage: 'https://github.com/jeejkang.png'
  },
  {
    number: '#68',
    name: 'Doctocat Brown',
    firstImage: 'https://octodex.github.com/images/doctocat-brown.jpg',
    secondImage: 'https://github.com/jonrohan.png'
  },
  {
    number: '#56',
    name: 'Octocat De Los Muertos',
    firstImage: 'https://octodex.github.com/images/octocat-de-los-muertos.jpg',
    secondImage: 'https://github.com/cameronmcefee.png'
  },
  {
    number: '#105',
    name: 'Dunetocat',
    firstImage: 'https://octodex.github.com/images/dunetocat.png',
    secondImage: 'https://github.com/JohnCreek.png'
  },
  {
    number: '#102',
    name: 'Daftpunktocat-Thomas',
    firstImage: 'https://octodex.github.com/images/daftpunktocat-thomas.gif',
    innerImageUrl: 'https://github.com/jeejkang.png'
  },
  {
    number: '#78',
    name: 'Heisencat',
    firstImage: 'https://octodex.github.com/images/heisencat.png',
    secondImage: 'https://github.com/jonrohan.png'
  },
  {
    number: '#143',
    name: 'Boxertocat',
    firstImage: 'https://octodex.github.com/images/boxertocat_octodex.jpg',
    secondImage: 'https://github.com/rubyjazzy.png'
  },
  {
    number: '#136',
    name: 'Justicetocat',
    firstImage: 'https://octodex.github.com/images/justicetocat.jpg',
    secondImage: 'https://github.com/heyhayhay.png'
  },
  {
    number: '#120',
    name: 'Gobble-o-tron',
    firstImage: 'https://octodex.github.com/images/gobbleotron.gif',
    secondImage: 'https://github.com/JohnCreek.png'
  },
  {
    number: '#36',
    name: 'X-tocat',
    firstImage: 'https://octodex.github.com/images/xtocat.jpg',
    secondImage: 'https://github.com/cameronmcefee.png'
  },
  {
    number: '#114',
    name: 'Saritocat',
    firstImage: 'https://octodex.github.com/images/saritocat.png',
    secondImage: 'https://github.com/JohnCreek.png'
  },
  {
    number: '#109',
    name: 'Yaktocat',
    firstImage: 'https://octodex.github.com/images/yaktocat.png',
    secondImage: 'https://github.com/jeejkang.png'
  },
  {
    number: '#105',
    name: 'Dunetocat',
    firstImage: 'https://octodex.github.com/images/dunetocat.png',
    secondImage: 'https://github.com/JohnCreek.png'
  },
  {
    number: '#25',
    name: 'IronCat',
    firstImage: 'https://octodex.github.com/images/ironcat.jpg',
    secondImage: 'https://github.com/cameronmcefee.png'
  },
  {
    number: '#83',
    name: 'Murakamicat',
    firstImage: 'https://octodex.github.com/images/murakamicat.png',
    secondImage: 'https://github.com/billyroh.png'
  }
]
class App extends Component {
  render() {
    return (
      <>
        <Nav />
        <div className="container">
          <section className="main-body">
            {cats.map(cat => {
              return (
                <CatCell
                  key={cat.name}
                  number={cat.number}
                  name={cat.name}
                  firstImage={cat.firstImage}
                  secondImage={cat.secondImage}
                />
              )
            })}
          </section>
        </div>
        <Footer />
      </>
    )
  }
}

export default App
