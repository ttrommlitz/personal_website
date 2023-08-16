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
        <h1 className="animate__animated animate__slideInLeft">Hi there! I'm Tyler!</h1>
        <img className="intro-image animate__animated animate__slideInLeft animate__delay-1s" src="ci-image.png" alt="computer" />
      </div>
      <div id="introSectionTwo" className="intro-section-2">
        <img className="intro-image animate__animated animate__slideInRight animate__delay-1s" src="collaboration.png" alt="people" />
        <h3 className="animate__animated animate__slideInRight animate__delay-2s">Languages, Tools, and Technologies</h3>
        <div className="Icon-container animate__animated animate__slideInRight animate__delay-2s">
          {getIcons().map(icon => {
            return <img className="icons" src={`icons/${icon}.png`} alt="programming-icon"/>
          })}
        </div>
      </div>
    </div>
  )
}

export default Body