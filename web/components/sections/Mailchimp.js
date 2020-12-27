import PropTypes from 'prop-types'
import React from 'react'
import MailChimpForm from '../atoms/MailChimpForm'
import styles from './Mailchimp.module.css'
import ThemeStyle from '../atoms/Theme'
import SimpleBlockContent from '../atoms/SimpleBlockContent'

export default function Mailchimp(props) {
  const { text, actionUrl, theme } = props

  return (
    <section className={`${styles.root} ${ThemeStyle(theme)}`}>
      <div className={styles.container}>
        <SimpleBlockContent blocks={text} />
        {actionUrl && (
          <MailChimpForm
            action={
              process.env.NEXT_PUBLIC_MAILCHIMP_URL || '/.netlify/functions/handleParticipate'
            }
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
                placeholder: 'Tell us more about you: your country and profession.',
                type: 'textarea',
                className: styles.textarea,
                required: false,
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
  text: PropTypes.array,
  actionUrl: PropTypes.string,
  theme: PropTypes.object,
}
