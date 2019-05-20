import React, { Component } from 'react'
import NavBar from './components/NavBar'
import Cats from './components/Cats'
import Footer from './components/Footer'

const cats = [
  {
    number: '#3',
    name: 'Octobi Wan Catnobi',
    outerImageUrl: 'https://octodex.github.com/images/octobiwan.jpg',
    innerImageUrl: 'https://github.com/cameronmcefee.png'
  },
  {
    number: '#86',
    name: 'Stormtroopocat',
    outerImageUrl: 'https://octodex.github.com/images/stormtroopocat.png',
    innerImageUrl: 'https://github.com/jeejkang.png'
  },
  {
    number: '#68',
    name: 'Doctocat Brown',
    outerImageUrl: 'https://octodex.github.com/images/doctocat-brown.jpg',
    innerImageUrl: 'https://github.com/jonrohan.png'
  },
  {
    number: '#56',
    name: 'Octocat De Los Muertos',
    outerImageUrl:
      'https://octodex.github.com/images/octocat-de-los-muertos.jpg2222',
    innerImageUrl: 'https://github.com/cameronmcefee.png'
  },
  {
    number: '#105',
    name: 'Dunetocat',
    outerImageUrl: 'https://octodex.github.com/images/dunetocat.png',
    innerImageUrl: 'https://github.com/JohnCreek.png'
  },
  {
    number: '#102',
    name: 'Daftpunktocat-Thomas',
    outerImageUrl: 'https://octodex.github.com/images/daftpunktocat-thomas.gif',
    innerImageUrl: 'https://github.com/jeejkang.png'
  },
  {
    number: '#78',
    name: 'Heisencat',
    outerImageUrl: 'https://octodex.github.com/images/heisencat.png',
    innerImageUrl: 'https://github.com/jonrohan.png'
  },
  {
    number: '#143',
    name: 'Boxertocat',
    outerImageUrl: 'https://octodex.github.com/images/boxertocat_octodex.jpg',
    innerImageUrl: 'https://github.com/rubyjazzy.png'
  },
  {
    number: '#136',
    name: 'Justicetocat',
    outerImageUrl: 'https://octodex.github.com/images/justicetocat.jpg',
    innerImageUrl: 'https://github.com/heyhayhay.png'
  },
  {
    number: '#120',
    name: 'Gobble-o-tron',
    outerImageUrl: 'https://octodex.github.com/images/gobbleotron.gif',
    innerImageUrl: 'https://github.com/JohnCreek.png'
  },
  {
    number: '#36',
    name: 'X-tocat',
    outerImageUrl: 'https://octodex.github.com/images/xtocat.jpg',
    innerImageUrl: 'https://github.com/cameronmcefee.png'
  },
  {
    number: '#114',
    name: 'Saritocat',
    outerImageUrl: 'https://octodex.github.com/images/saritocat.png',
    innerImageUrl: 'https://github.com/JohnCreek.png'
  },
  {
    number: '#109',
    name: 'Yaktocat',
    outerImageUrl: 'https://octodex.github.com/images/yaktocat.png',
    innerImageUrl: 'https://github.com/jeejkang.png'
  },
  {
    number: '#105',
    name: 'Dunetocat',
    outerImageUrl: 'https://octodex.github.com/images/dunetocat.png',
    innerImageUrl: 'https://github.com/JohnCreek.png'
  },
  {
    number: '#25',
    name: 'IronCat',
    outerImageUrl: 'https://octodex.github.com/images/ironcat.jpg',
    innerImageUrl: 'https://github.com/cameronmcefee.png'
  },
  {
    number: '#83',
    name: 'Murakamicat',
    outerImageUrl: 'https://octodex.github.com/images/murakamicat.png',
    innerImageUrl: 'https://github.com/billyroh.png'
  }
]

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <main>
          <div className="outer-image">
            <img
              className="image-area"
              src={cats.map(cat => {
                return <Cats key={cat.name} outerImageUrl={cat.outerImageUrl} />
              })}
            />
            <section className="caption">
              <p>
                {cats.map(cat => {
                  return <Cats key={cat.name} number={cat.number} />
                })}
              </p>
              <div className="name-pic">
                <p>
                  the
                  <em>
                    {cats.map(cat => {
                      return <Cats key={cat.name} name={cat.name} />
                    })}
                  </em>
                  by
                </p>
                <img
                  src={cats.map(cat => {
                    return (
                      <Cats key={cat.name} innerImageUrl={cat.innerImageUrl} />
                    )
                  })}
                />
                })}
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </>
    )
  }
}

export default App
