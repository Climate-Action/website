import PropTypes from 'prop-types'
import React from 'react'
import MailChimpForm from '../MailChimpForm'
import styles from './Mailchimp.module.css'

export default function Mailchimp(props) {
  const { heading, subtitle, actionUrl } = props

  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
        {actionUrl && (
          <MailChimpForm
            action={actionUrl}
            fields={[
              {
                name: 'NAME',
                placeholder: 'Name',
                type: 'text',
                className: styles.field,
                required: false,
              },
              {
                name: 'EMAIL',
                placeholder: 'Email',
                type: 'email',
                className: styles.field,
                required: true,
              },
              {
                name: 'ABOUT',
                placeholder: 'Write something about yourself, and your aspirations',
                type: 'textarea',
                className: styles.textarea,
                required: true,
              },
            ]}
            buttonClassName={styles.button}
            styles={{
              sendingMsg: {
                color: '#0652DD',
              },
              successMsg: {
                color: 'var(--green)',
              },
              duplicateMsg: {
                color: '#EE5A24',
              },
              errorMsg: {
                color: 'red',
              },
            }}
            messages={{
              sending: 'Sending...',
              success:
                'Thank you for becoming a founding participant! An email with further instructions has been sent.',
              error: 'An unexpected internal error has occurred.',
              empty: 'You must write an e-mail.',
              duplicate: "You've already registered",
              button: 'Register',
            }}
            className={styles.form}
          />
        )}
      </div>
    </section>
  )
}

Mailchimp.propTypes = {
  heading: PropTypes.string,
  subtitle: PropTypes.string,
  actionUrl: PropTypes.string,
}
