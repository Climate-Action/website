import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { withRouter } from 'next/router'
import Svg from 'react-inlinesvg'
import styles from './Header.module.css'
import HamburgerIcon from './icons/Hamburger'
import Logo from './atoms/Logo'

class Header extends Component {
  state = { showNav: false }

  static propTypes = {
    router: PropTypes.shape({
      pathname: PropTypes.string,
      query: PropTypes.shape({
        slug: PropTypes.string,
      }),
      events: PropTypes.any,
    }),
    title: PropTypes.string,
    navItems: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        slug: PropTypes.shape({
          current: PropTypes.string,
        }).isRequired,
      }),
    ),
    logo: PropTypes.shape({
      asset: PropTypes.shape({
        url: PropTypes.string,
      }),
      logo: PropTypes.string,
    }),
  }

  componentDidMount() {
    const { router } = this.props
    router.events.on('routeChangeComplete', this.hideMenu)
  }

  componentWillUnmount() {
    const { router } = this.props
    router.events.off('routeChangeComplete', this.hideMenu)
  }

  hideMenu = () => {
    this.setState({ showNav: false })
  }

  handleMenuToggle = () => {
    const { showNav } = this.state
    this.setState({
      showNav: !showNav,
    })
  }

  render() {
    const { title = 'Missing title', navItems, router, logo } = this.props
    const { showNav } = this.state
    const [allButLast, last] = getLastItemAlone(navItems)

    return (
      <nav className={styles.root} data-show-nav={showNav}>
        <Logo title={title} logo={logo} />
        <span className={styles.list}>
          <NavItems items={allButLast} router={router} />
        </span>
        <NavItem item={last} router={router} last />
      </nav>
    )
  }
}

const NavItems = ({ items, router }) => {
  if (!items) return null
  return items.map(item => <NavItem item={item} key={item._id} router={router} />)
}

const NavItem = ({ item, router, last }) => {
  if (!item) return null
  const isActive = router.pathname === '/LandingPage' && router.query.slug === item.slug.current
  return (
    <a
      className={styles.item}
      href={`/${item.slug.current}`}
      data-is-active={isActive ? 'true' : 'false'}
      data-is-last={last ? 'true' : 'false'}
    >
      {item.title}
    </a>
  )
}

const getLastItemAlone = items => {
  // console.log(items)
  if (!items) return [[], []]

  return [items.slice(0, -1), items.slice(-1)[0]]
}

export default withRouter(Header)
