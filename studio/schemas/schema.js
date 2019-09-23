// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Document types
import page from './documents/page'
import route from './documents/route'
import siteConfig from './documents/siteConfig'

// Object types
import cta from './objects/cta'
import embedHTML from './helpers/embedHTML'
import figure from './helpers/figure'
import internalLink from './helpers/internalLink'
import link from './helpers/link'
import portableText from './helpers/portableText'
import simplePortableText from './objects/simplePortableText'
import header from './objects/header'
import step from './objects/step'
import signUpSteps from './objects/signUpSteps'
import sortBy from './helpers/sortBy'

// Hive specific
import tool from './objects/tool'
import countryPicker from './helpers/countryPicker'
import person from './objects/person'
import personType from './helpers/personType'
import toolType from './helpers/toolType'
import dataType from './helpers/dataType'
import data from './objects/data'
import result from './objects/result'

// Page sections
import hero from './objects/hero'
import imageSection from './objects/imageSection'
import mailchimp from './objects/mailchimp'
import textSection from './objects/textSection'
import toolList from './objects/toolList'
import participantList from './objects/participantList'
import dataList from './objects/dataList'
import signUp from './objects/signUp'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // items
    tool,
    data,
    result,
    page,
    // config
    person,
    personType,
    dataType,
    toolType,
    // object
    countryPicker,
    cta,
    hero,
    embedHTML,
    figure,
    imageSection,
    header,
    internalLink,
    link,
    mailchimp,
    portableText,
    route,
    simplePortableText,
    siteConfig,
    textSection,
    toolList,
    participantList,
    dataList,
    signUp,
    step,
    signUpSteps,
    sortBy,
  ]),
})
