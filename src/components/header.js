import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: '#233a85'
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0, textAlign: 'center' }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            justifyContent: 'center'
            
          }}
        >
          <span style={{width: '100%'}}> <span className="prem"> Premium</span> <span className="prem"> Quality</span> </span> 
          <span className="ov">OV </span> <span style={{paddingLeft: '15px',fontFamily:'Great Vibes', fontSize: 38, color: '#fdc228'}}> (Finder)</span>
        </Link>
        <p style={{color: '#fff', fontSize: 20, marginTop: 10}}>Just say OV</p>
      </h1>
    </div>
  </div>
)

export default Header
