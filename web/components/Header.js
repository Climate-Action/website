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

    return (
      <div className={styles.root} data-show-nav={showNav}>
        <Logo title={title} logo={logo} />
        <nav className={styles.nav}>
          <ul className={styles.navItems}>
            {navItems &&
              navItems.map(item => {
                const { slug, title, _id } = item
                const isActive =
                  router.pathname === '/LandingPage' && router.query.slug === slug.current
                return (
                  <li key={_id} className={styles.navItem}>
                    <a href={`/${slug.current}`} data-is-active={isActive ? 'true' : 'false'}>
                      {title}
                    </a>
                  </li>
                )
              })}
          </ul>
        </nav>
      </div>
    )
  }
}

export default withRouter(Header)
