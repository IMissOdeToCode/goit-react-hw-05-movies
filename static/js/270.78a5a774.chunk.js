"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[270],{217:function(e,t,n){n.d(t,{Z:function(){return l}});var i=n(87),s=n(689),r="MovieItem_movieItem__+5IiU",o=n(184),a=function(e){var t=e.movie,n=t.title,a=t.id,c=(0,s.TH)();return(0,o.jsx)(i.rU,{to:"/movies/".concat(a),state:{from:c},children:(0,o.jsx)("li",{className:r,children:n})})},c="MovieList_movieListContainer__Rv+1M",u="MovieList_movieList__uFrOZ",l=function(e){var t=e.movies.map((function(e){return(0,o.jsx)(a,{movie:e},e.id)}));return(0,o.jsx)("div",{className:c,children:(0,o.jsx)("ul",{className:u,children:t})})}},270:function(e,t,n){n.r(t);var i=n(439),s=n(791),r=n(399),o=n(217),a=n(184);t.default=function(){var e=(0,s.useState)([]),t=(0,i.Z)(e,2),n=t[0],c=t[1],u=(0,s.useState)(null),l=(0,i.Z)(u,2),m=l[0],f=l[1];return(0,s.useEffect)((function(){(0,r.Df)().then((function(e){if(200!==e.status)return console.log("STATUS NOT 200"),f(new Error("some err message"));c(e.data.results)})).catch((function(e){f(e)})).finally()}),[]),m&&console.log(m.message),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h1",{children:"Trending today:"}),(0,a.jsx)(o.Z,{movies:n})]})}}}]);
//# sourceMappingURL=270.78a5a774.chunk.js.map