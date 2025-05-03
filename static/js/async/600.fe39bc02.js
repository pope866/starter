"use strict";
(self.webpackChunkbot = self.webpackChunkbot || []).push([
  ["600"],
  {
    80664: function (e, a, s) {
      s.r(a), s.d(a, { default: () => l });
      var i = s(85893);
      s(67294);
      let l = (0, s(96877).Pi)(() =>
        (0, i.jsx)("div", {
          className: "trading-view",
          children: (0, i.jsx)("div", {
            className: "trading-view__content",
            children: (0, i.jsx)("iframe", {
              src: "https://charts.deriv.com/deriv",
              className: "trading-view__iframe",
              title: "Trading View",
              allow: "fullscreen",
              sandbox:
                "allow-same-origin allow-scripts allow-popups allow-forms",
            }),
          }),
        })
      );
    },
  },
]);
