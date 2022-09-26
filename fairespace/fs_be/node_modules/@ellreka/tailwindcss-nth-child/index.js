module.exports = function (array) {
  return function ({ addVariant, e }) {
    array.forEach((item) => {
      addVariant(`nth-child-${item}`, ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(
            `nth-child-${item}${separator}${className}`
          )}:nth-child(${item})`
        })
      })
    })
  }
}
