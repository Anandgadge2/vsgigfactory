'use client'

const LogoSection = () => {
  // Individual logo styles for precise control
  const logoStyles = {
    'tcs': { maxHeight: '200px', maxWidth: '150px' },
    'ey': { maxHeight: '70px', maxWidth: '140px' },
    'atkins': { maxHeight: '65px', maxWidth: '130px' },
    'adani': { maxHeight: '75px', maxWidth: '150px' },
    'emaar': { maxHeight: '70px', maxWidth: '140px' },
    'labindia': { maxHeight: '150px', maxWidth: '120px' },
    'lt': { maxHeight: '105px', maxWidth: '130px' },
    'salesforce': { maxHeight: '100px', maxWidth: '150px' },
    'schneider': { maxHeight: '85px', maxWidth: '130px' },
    'mastercard': { maxHeight: '100px', maxWidth: '120px' },
    'denkall': { maxHeight: '250px', maxWidth: '150px' },
    'mudon': { maxHeight: '80px', maxWidth: '140px' },
    'claramont': { maxHeight: '65px', maxWidth: '130px' },
    'gulf-islamic': { maxHeight: '60px', maxWidth: '120px' },
    'jacobs': { maxHeight: '70px', maxWidth: '140px' },
    'jmbaxi': { maxHeight: '65px', maxWidth: '130px' },
    'natash': { maxHeight: '150px', maxWidth: '120px' },
    'orchid': { maxHeight: '100px', maxWidth: '140px' },
    'peninsula': { maxHeight: '105px', maxWidth: '130px' },
    'skillbind': { maxHeight: '80px', maxWidth: '120px' },
    'westbridge': { maxHeight: '100px', maxWidth: '140px' },
    'ascenders': { maxHeight: '65px', maxWidth: '130px' },
    'dh': { maxHeight: '90px', maxWidth: '120px' },
    'freespanz': { maxHeight: '80px', maxWidth: '160px' },
    'gilly': { maxHeight: '75px', maxWidth: '160px' },
    'imagegrafix': { maxHeight: '120px', maxWidth: '140px' },
    'mmoser': { maxHeight: '250px', maxWidth: '240px' },
    'oarchilos': { maxHeight: '250px', maxWidth: '230px' },
    'turnkey': { maxHeight: '80px', maxWidth: '120px' },
    'edifice': { maxHeight: '250px', maxWidth: '150px' },
    'suresh-babu-and-partners': { maxHeight: '60px', maxWidth: '120px' },
    'designworks': { maxHeight: '100px', maxWidth: '140px' },
    'tge': { maxHeight: '65px', maxWidth: '130px' },
    'gbarchitect': { maxHeight: '80px', maxWidth: '120px' },
    'sanderson': { maxHeight: '80px', maxWidth: '140px' },
    'hosmac': { maxHeight: '150px', maxWidth: '130px' },
    'cynosure': { maxHeight: '180px', maxWidth: '140px' },
    'Aesthetic': { maxHeight: '65px', maxWidth: '130px' },
    'ans': { maxHeight: '60px', maxWidth: '120px' },
    'genesis': { maxHeight: '80px', maxWidth: '140px' },
    'sk': { maxHeight: '150px', maxWidth: '130px' },
    'spa': { maxHeight: '140px', maxWidth: '100px' }
  };

  const logos = [
    { name: 'TCS', image: '/assets/tcs.jpg' },
    { name: 'EY', image: '/assets/ey.png' },
    { name: 'Atkins', image: '/assets/atkins.jpg' },
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
    { name: 'ascenders', image: '/assets/ascenders.jpg' },
    { name: 'DH', image: '/assets/DH.png' },
    { name: 'freespanz', image: '/assets/freespanz.png' },
    { name: 'gilly', image: '/assets/gilly.jpg' },
    { name: 'imagegrafix', image: '/assets/imagegrafix.png' },
    { name: 'mmoser', image: '/assets/mmoser.jpg' },
    { name: 'oarchilos', image: '/assets/oarchilos.jpg' },
    { name: 'turnkey', image: '/assets/turnkey.jpg' },
    { name: 'EDIFICE', image: '/assets/EDIFICE.png' },
    { name: 'suresh_babu_and_partners', image: '/assets/suresh_babu_and_partners_logo.jpg' },
    { name: 'Designworks', image: '/assets/Designworks.jpg' },
    { name: 'TGE', image: '/assets/TGE.png' },
    { name: 'GBArchitect', image: '/assets/GBArchitect.jpg' },
    { name: 'Sanderson', image: '/assets/Sanderson.jpg' },
    { name: 'HOSMAC', image: '/assets/HOSMAC.jpg' },
    { name: 'Cynosure', image: '/assets/cynosure1.png'},
    { name: 'Aesthetic', image: '/assets/Aesthetic.png' },
    { name: 'ans', image: '/assets/ans.png' },
    { name: 'genesis', image: '/assets/genesis.png' },
    { name: 'sk', image: '/assets/sk.png' },
    { name: 'spa', image: '/assets/spa.png'}

  ]

  return (
    <section className="hero-logo-section">
      <div className="hero-logo-slider">
        <div className="hero-logo-track">
          {logos.map((logo, index) => (
            <div key={index} className="hero-logo-item">
              <div className="hero-logo-container">
                {logo.image ? (
                  <img
                    src={logo.image}
                    alt={logo.name}
                    className={`hero-logo-image logo-${logo.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}
                    style={{
                      ...logoStyles[logo.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')],
                      width: 'auto',
                      height: 'auto',
                      objectFit: 'contain',
                      transition: 'all 0.3s ease'
                    }}
                    onError={(e) => {
                      console.warn(`Failed to load logo: ${logo.name}`);
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                    onLoad={(e) => {
                      e.target.style.display = 'block';
                    }}
                    loading="lazy"
                  />
                ) : null}
                <div className="hero-logo-placeholder" style={{ display: logo.image ? 'none' : 'flex' }}>
                  <span className="hero-logo-text">{logo.name}</span>
                </div>
              </div>
            </div>
          ))}
          {/* Duplicate logos for continuous scroll */}
          {logos.map((logo, index) => (
            <div key={`duplicate-${index}`} className="hero-logo-item">
              <div className="hero-logo-container">
                {logo.image ? (
                  <img
                    src={logo.image}
                    alt={logo.name}
                    className={`hero-logo-image logo-${logo.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}
                    style={{
                      ...logoStyles[logo.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')],
                      width: 'auto',
                      height: 'auto',
                      objectFit: 'contain',
                      transition: 'all 0.3s ease'
                    }}
                    onError={(e) => {
                      console.warn(`Failed to load logo: ${logo.name}`);
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                    onLoad={(e) => {
                      e.target.style.display = 'block';
                    }}
                    loading="lazy"
                  />
                ) : null}
                <div className="hero-logo-placeholder" style={{ display: logo.image ? 'none' : 'flex' }}>
                  <span className="hero-logo-text">{logo.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LogoSection
