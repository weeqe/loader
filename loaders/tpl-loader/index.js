const {tplReplace} = require('./utils')
const {getOptions} = require('loader-utils')

function tplLoader(source) {
    source = source.replace(/\s+/g, '')
    console.log(source)

    const {log} = getOptions(this)
    const _log = log ? `console.log('compiled the file which is form ${this.resourcePath}')` : ''

    console.log('log', log)
    return `
        export default (options) => {
            ${tplReplace.toString()}
            ${_log}
            return tplReplace('${source}', options)
        }
    `
}

// function tpl (options) {
//     console.log('options', options)
//     function tplReplace(template, replaceObj) {
//         return template.replace(/\{\{(.*?)\}\}/g, (node, key) => {
//             return replaceObj[key]
//         })
//     }
//     return tplReplace(source, options)
// }

module.exports = tplLoader