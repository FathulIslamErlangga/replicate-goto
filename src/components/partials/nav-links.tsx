import NavLink from '../elements/nav-link'

export default function NavLinks() {
  return (
    <ul className='hidden gap-10 lg:flex'>
      <NavLink>Beranda</NavLink>
      <NavLink dropdown>Gabung jadi Mitra</NavLink>
      <NavLink>GoCorp</NavLink>
      <NavLink>karir</NavLink>
      <NavLink dropdown>perusahaan</NavLink>
      <NavLink>Product</NavLink>
      <NavLink>Blog</NavLink>
      <NavLink>Bantuan</NavLink>
      <NavLink dropdown>ID</NavLink>
    </ul>
  )
}
