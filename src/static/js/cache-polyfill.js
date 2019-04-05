!(function() {
  var t = Cache.prototype.addAll,
    e = navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);
  if (e)
    var r = e[1],
      n = parseInt(e[2]);
  (t && (!e || ('Firefox' === r && 46 <= n) || ('Chrome' === r && 50 <= n))) ||
    ((Cache.prototype.addAll = function(r) {
      var n = this;
      function o(t) {
        (this.name = 'NetworkError'), (this.code = 19), (this.message = t);
      }
      return (
        (o.prototype = Object.create(Error.prototype)),
        Promise.resolve()
          .then(function() {
            if (arguments.length < 1) throw new TypeError();
            return (
              (r = r.map(function(t) {
                return t instanceof Request ? t : String(t);
              })),
              Promise.all(
                r.map(function(t) {
                  'string' == typeof t && (t = new Request(t));
                  var e = new URL(t.url).protocol;
                  if ('http:' !== e && 'https:' !== e)
                    throw new o('Invalid scheme');
                  return fetch(t.clone());
                })
              )
            );
          })
          .then(function(t) {
            if (
              t.some(function(t) {
                return !t.ok;
              })
            )
              throw new o('Incorrect response status');
            return Promise.all(
              t.map(function(t, e) {
                return n.put(r[e], t);
              })
            );
          })
          .then(function() {})
      );
    }),
    (Cache.prototype.add = function(t) {
      return this.addAll([t]);
    }));
})();
