webpackJsonp([0x623bdfc73907],{206:function(e,t){(function(t){"use strict";var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};e.exports={siteMetadata:{url:"https://geordielad.github.io/",title:"Blog by Robin Cottiss",subtitle:"Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu.",copyright:"© All rights reserved.",disqusShortname:"",menu:[{label:"Articles",path:"/"},{label:"About me",path:"/about/"},{label:"Contact me",path:"/contact/"}],author:{name:"Robin Cottiss",email:"rcottiss@tableau.com",telegram:"#",twitter:"@geordielad",github:"geordielad",rss:"#",vk:"#"}},plugins:[{resolve:"gatsby-source-filesystem",options:{path:t+"/src/pages",name:"pages"}},{resolve:"gatsby-plugin-feed",options:{query:"\n          {\n            site {\n              siteMetadata {\n                url\n                title\n                subtitle\n              }\n            }\n          }\n        ",feeds:[{serialize:function(e){var t=e.query,r=t.site,a=t.allMarkdownRemark;return a.edges.map(function(e){return n({},e.node.frontmatter,{description:e.node.frontmatter.description,date:e.node.frontmatter.date,url:r.siteMetadata.url+e.node.fields.slug,guid:r.siteMetadata.url+e.node.fields.slug,custom_elements:[{"content:encoded":e.node.html}]})})},query:'\n              {\n                allMarkdownRemark(\n                  limit: 1000,\n                  sort: { order: DESC, fields: [frontmatter___date] },\n                  filter: { frontmatter: { layout: { eq: "post" }, draft: { ne: true } } }\n                ) {\n                  edges {\n                    node {\n                      html\n                      fields {\n                        slug\n                      }\n                      frontmatter {\n                        title\n                        date\n                        layout\n                        draft\n                        description\n                      }\n                    }\n                  }\n                }\n              }\n            ',output:"/rss.xml"}]}},{resolve:"gatsby-transformer-remark",options:{plugins:[{resolve:"gatsby-remark-graph",options:{language:"mermaid",theme:"default"}},{resolve:"gatsby-remark-images",options:{maxWidth:960}},{resolve:"gatsby-remark-responsive-iframe",options:{wrapperStyle:"margin-bottom: 1.0725rem"}},"gatsby-remark-prismjs","gatsby-remark-copy-linked-files","gatsby-remark-smartypants"]}},"gatsby-transformer-sharp","gatsby-plugin-sharp",{resolve:"gatsby-plugin-google-analytics",options:{trackingId:""}},{resolve:"gatsby-plugin-google-fonts",options:{fonts:["roboto:400,400i,500,700"]}},{resolve:"gatsby-plugin-sitemap",options:{query:'\n            {\n              site {\n                siteMetadata {\n                  url\n                }\n              }\n              allSitePage(\n                filter: {\n                  path: { regex: "/^(?!/404/|/404.html|/dev-404-page/)/" }\n                }\n              ) {\n                edges {\n                  node {\n                    path\n                  }\n                }\n              }\n          }',output:"/sitemap.xml",serialize:function(e){var t=e.site,n=e.allSitePage;return n.edges.map(function(e){return{url:t.siteMetadata.url+e.node.path,changefreq:"daily",priority:.7}})}}},"gatsby-plugin-offline","gatsby-plugin-catch-links","gatsby-plugin-react-helmet","gatsby-plugin-postcss-sass"]}}).call(t,"/")},462:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function u(e,t){var n=t.onNewComment,r=t.language,a=l(t,["onNewComment","language"]);for(var o in a)e.page[o]=a[o];e.language=r,n&&(e.callbacks={onNewComment:[n]})}Object.defineProperty(t,"__esModule",{value:!0});var f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),d=n(2),p=r(d),m=n(9),g=r(m),y=["shortname","identifier","title","url","category_id","onNewComment","language"],h=!1,b=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),c(t,[{key:"componentDidMount",value:function(){this.loadDisqus()}},{key:"componentDidUpdate",value:function(){this.loadDisqus()}},{key:"shouldComponentUpdate",value:function(e,t){return e.identifier!==this.props.identifier}},{key:"render",value:function(){var e=this,t=Object.keys(this.props).reduce(function(t,n){return y.some(function(e){return e===n})?t:f({},t,a({},n,e.props[n]))},{});return p.default.createElement("div",t,p.default.createElement("div",{id:"disqus_thread"}))}},{key:"addDisqusScript",value:function(){if(!h){var e=this.disqus=document.createElement("script"),t=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0];e.async=!0,e.type="text/javascript",e.src="//"+this.props.shortname+".disqus.com/embed.js",t.appendChild(e),h=!0}}},{key:"loadDisqus",value:function(){var e=this,t={};y.forEach(function(n){"shortname"!==n&&e.props[n]&&(t[n]=e.props[n])}),"undefined"!=typeof DISQUS?DISQUS.reset({reload:!0,config:function(){u(this,t),this.page.url=this.page.url.replace(/#/,"")+"#!newthread"}}):(window.disqus_config=function(){u(this,t)},this.addDisqusScript())}}]),t}(p.default.Component);b.displayName="DisqusThread",b.propTypes={id:g.default.string,shortname:g.default.string.isRequired,identifier:g.default.string,title:g.default.string,url:g.default.string,category_id:g.default.string,onNewComment:g.default.func,language:g.default.string},b.defaultProps={url:"undefined"==typeof window?null:window.location.href},t.default=b},463:function(e,t,n){"use strict";e.exports=n(462)},208:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=n(2),l=r(s),u=n(463),f=r(u),c=n(206),d=r(c),p=function(e){function t(n){a(this,t);var r=o(this,e.call(this,n));return r.state={toasts:[]},r.notifyAboutComment=r.notifyAboutComment.bind(r),r.onSnackbarDismiss=r.onSnackbarDismiss.bind(r),r}return i(t,e),t.prototype.onSnackbarDismiss=function(){var e=this.state.toasts,t=e.slice(1);this.setState({toasts:t})},t.prototype.notifyAboutComment=function(){var e=this.state.toasts.slice();e.push({text:"New comment available!!"}),this.setState({toasts:e})},t.prototype.render=function(){var e=this.props.postNode;if(!d.default.siteMetadata.disqusShortname)return null;var t=e.frontmatter,n=d.default.siteMetadata.url+e.fields.slug;return l.default.createElement(f.default,{shortname:d.default.siteMetadata.disqusShortname,identifier:t.title,title:t.title,url:n,category_id:t.category_id,onNewComment:this.notifyAboutComment})},t}(s.Component);t.default=p,e.exports=t.default},212:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=n(2),l=r(s),u=n(18),f=r(u),c=n(69),d=r(c),p=n(208),m=r(p);n(455);var g=function(e){function t(){return a(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata,t=e.subtitle,n=e.author,r=this.props.data.markdownRemark,a=r.fields.tagSlugs,o=l.default.createElement("div",null,l.default.createElement(f.default,{className:"post-single__home-button",to:"/"},"All Articles")),i=l.default.createElement("div",{className:"post-single__tags"},l.default.createElement("ul",{className:"post-single__tags-list"},a&&a.map(function(e,t){return l.default.createElement("li",{className:"post-single__tags-list-item",key:e},l.default.createElement(f.default,{to:e,className:"post-single__tags-list-item-link"},r.frontmatter.tags[t]))}))),s=l.default.createElement("div",null,l.default.createElement(m.default,{postNode:r}));return l.default.createElement("div",null,o,l.default.createElement("div",{className:"post-single"},l.default.createElement("div",{className:"post-single__inner"},l.default.createElement("h1",{className:"post-single__title"},r.frontmatter.title),l.default.createElement("div",{className:"post-single__body",dangerouslySetInnerHTML:{__html:r.html}}),l.default.createElement("div",{className:"post-single__date"},l.default.createElement("em",null,"Published ",(0,d.default)(r.frontmatter.date).format("D MMM YYYY")))),l.default.createElement("div",{className:"post-single__footer"},i,l.default.createElement("hr",null),l.default.createElement("p",{className:"post-single__footer-text"},t,l.default.createElement("a",{href:n.twitter,target:"_blank",rel:"noopener noreferrer"},l.default.createElement("br",null)," ",l.default.createElement("strong",null,n.name)," on Twitter")),s)))},t}(l.default.Component);t.default=g,e.exports=t.default},455:function(e,t){},221:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var s=n(2),l=r(s),u=n(23),f=r(u),c=n(212),d=r(c),p=function(e){function t(){return a(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata,t=e.title,n=e.subtitle,r=this.props.data.markdownRemark,a=r.frontmatter,o=a.title,i=a.description,s=null!==i?i:n;return l.default.createElement("div",null,l.default.createElement(f.default,null,l.default.createElement("title",null,o+" - "+t),l.default.createElement("meta",{name:"description",content:s})),l.default.createElement(d.default,this.props))},t}(l.default.Component);t.default=p;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-post-template-jsx-337d340c76e6f34e0fae.js.map