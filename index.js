'use strict';

module.exports = function img_lazy_plugin(md, options) {
  var config = options || {
    useLoading: true,
    selector: 'lazy'
  };
  var defaultImageRenderer = md.renderer.rules.image || function (tokens, idx, options, env, self) {
    return self.renderToken(tokens, idx, options);
  };

  md.renderer.rules.image = function (tokens, idx, options, env, self) {
    var token = tokens[idx];
    var aIndex = token.attrIndex('src');
    var srcValue = token.attrGet('src');

    config.useLoading && token.attrPush(['loading', 'lazy']);
    token.attrPush(['class', config.selector]);
    token.attrPush(['data-src', srcValue]);
    token.attrs.splice(aIndex, 1);

    return defaultImageRenderer(tokens, idx, options, env, self);
  };
};
