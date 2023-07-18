import '../css/Body.css'

const getIcons = () => {

  return [
    'amazonwebservices',
    'cplusplus',
    'css3',
    'docker',
    'git',
    'html5',
    'javascript',
    'linux',
    'mysql',
    'node-js',
    'python',
    'graphql',
    'vue',
    'react',
    'typescript',
    'swift',
    'atlassian',
    'heroku'
  ]
}

const Body = () => {
  return (
    <div className="introduction">
      <div className="intro-section-1">
        <h1>Hi there! I'm Tyler!</h1>
        <img className="image-1" src="devices.png" alt="computer" />
      </div>
      <div className="intro-section-2">
      <h3>Languages, Tools, and Technologies</h3>
      <div className="Icon-container">
        {getIcons().map(icon => {
          return <img className="icons" src={`icons/${icon}.png`} alt="programming-icon"/>
        })}
      </div>
      </div>
    </div>
  )
}

export default Body