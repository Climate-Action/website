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
import headerText from './objects/headerText'
import header from './objects/header'
import step from './objects/step'
import signUpSteps from './documents/signUpSteps'
import sortBy from './helpers/sortBy'
import modulePadding from './helpers/modulePadding'
import moduleWidth from './helpers/moduleWidth'
import theme from './helpers/theme'

// Hive specific
import tool from './documents/tool'
import countryPicker from './helpers/countryPicker'
import person from './documents/person'
import personType from './helpers/personType'
import company from './documents/company'
import companyType from './helpers/companyType'
import toolType from './helpers/toolType'
import dataType from './helpers/dataType'
import data from './documents/data'
import result from './documents/result'

// Page sections
import hero from './objects/hero'
import callToAction from './objects/callToAction'
import splitView from './objects/splitView'
import imageTextCta from './objects/imageTextCta'
import imageSection from './objects/imageSection'
import mailchimp from './objects/mailchimp'
import textSection from './objects/textSection'
import toolList from './objects/toolList'
import participantList from './objects/participantList'
import companyList from './objects/companyList'
import dataList from './objects/dataList'
import largeTextSection from './objects/largeTextSection'
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
    signUpSteps,

    // config
    person,
    personType,
    company,
    companyType,
    dataType,
    toolType,
    // object
    countryPicker,
    cta,
    callToAction,
    modulePadding,
    moduleWidth,
    theme,
    splitView,
    imageTextCta,
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
    headerText,
    siteConfig,
    textSection,
    toolList,
    participantList,
    companyList,
    largeTextSection,
    dataList,
    signUp,
    step,
    sortBy,
  ]),
})
