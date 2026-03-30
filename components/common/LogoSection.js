const LogoSection = () => {
  const logos = [
    { name: 'TCS', image: '/assets/tcs.jpg' },
    { name: 'EY', image: '/assets/ey.png' },
    { name: 'Atkins', image: '/assets/atkins.jpg' },
    { name: 'Cynosure', image: '/assets/cynosure.jpg' },
    { name: 'Adani', image: '/assets/adani.png' },
    { name: 'Emaar', image: '/assets/emaar.png' },
    { name: 'Labindia', image: '/assets/labindia.png' },
    { name: 'LT', image: '/assets/lt.png' },
    { name: 'Salesforce', image: '/assets/salesforce.png' },
    { name: 'Schneider', image: '/assets/schneider.png' },
    { name: 'Mastercard', image: '/assets/mastercard.png' },
    { name: 'denkall', image: '/assets/denkall.png' },
    { name: 'Mudon', image: '/assets/mudon.jpg' },
    { name: 'Claramont', image: '/assets/claramont.jpg' },
    { name: 'gulf islamic', image: '/assets/gulf islamic.jpg' },
    { name: 'jacobs', image: '/assets/jacobs.png' },
    { name: 'jmbaxi', image: '/assets/jmbaxi.png' },
    { name: 'natash', image: '/assets/natash.png' },
    { name: 'orchid', image: '/assets/orchid.png' },
    { name: 'peninsula', image: '/assets/peninsula.png' },
    { name: 'skillbind', image: '/assets/skillbind.png' },
    { name: 'westbridge', image: '/assets/westbridge.png' },
    { name: 'Mastercard', image: '/assets/mastercard.png' },
    { name: 'denkall', image: '/assets/denkall.png' },
    { name: 'Mudon', image: '/assets/mudon.jpg' },
  ]

  return (
    <section className="logo-section">
      <div className="logo-slider">
        <div className="logo-track">
          {logos.map((logo, index) => (
            <div key={index} className="logo-item">
              <div className="logo-container">
                {logo.image ? (
                  <img src={logo.image} alt={logo.name} className="logo-image" />
                ) : (
                  <div className="logo-placeholder" style={{ backgroundColor: logo.color }}>
                    <span className="logo-text">{logo.name}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
          {/* Duplicate logos for continuous scroll */}
          {logos.map((logo, index) => (
            <div key={`duplicate-${index}`} className="logo-item">
              <div className="logo-container">
                {logo.image ? (
                  <img src={logo.image} alt={logo.name} className="logo-image" />
                ) : (
                  <div className="logo-placeholder" style={{ backgroundColor: logo.color }}>
                    <span className="logo-text">{logo.name}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LogoSection
