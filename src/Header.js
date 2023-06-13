import logo from './react.svg';

const getLinks = () => {
  return [
    {
      title: 'About',
      source: ''
    },
    {
      title: 'Skills',
      source: ''
    },
    {
      title: 'Experience and Projects',
      source: ''
    },
    {
      title: 'Download Resume',
      source: 'Resume.pdf',
      download: 'resume'
    }
  ]
}

const Header  = () => {
  return (
  <header className="App-header">
    <div className="Img-container">
      <p className="Built-with">Built with</p>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
    <div className="Links-container">
    { getLinks().map(link => {
      return <a className="App-link" href={link.source} download={link.download}>{link.title}</a>
    }) }
    </div>
  </header>
  )
}
export default Header