import React from 'react'
import { FaCopyright } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="mt-1 pt-4 border-top border-dark border-3">
      <div className="text-center pb-4">
        <div className="d-flex justify-content-center align-items-center gap-2">
          <FaCopyright size={18} color='#f80505' />
          <span className="text-danger fw-bold">2026</span>
          <span className="text-white">Aminat Adetunji</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
