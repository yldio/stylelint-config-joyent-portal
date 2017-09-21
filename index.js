module.exports = {
  syntax: 'scss',
  processors: ['stylelint-processor-styled-components'],
  extends: ['stylelint-config-standard', 'stylelint-config-styled-components'],
  rules: {
    'declaration-empty-line-before': null,
    'custom-property-empty-line-before': 'always'
  }
};
