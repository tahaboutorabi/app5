webpackJsonp([64],{1068:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=n(3244),i=(n.n(l),n(3247)),c=n.n(i),s=n(0),u=n.n(s),p=n(3248),f=(n.n(p),function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}()),d=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),f(t,[{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement("div",{className:"isoContent"},u.a.createElement("h2",null,"Back to top with Gray"),u.a.createElement(c.a,null),"Scroll down to see the bottom-right",u.a.createElement("strong",{style:{color:"rgba(64, 64, 64, 0.6)"}}," gray "),"button."),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement("div",{className:"isoContent"},u.a.createElement("h2",null,"Back to top with Blue"),u.a.createElement(c.a,null,u.a.createElement("div",{className:"ant-back-top-inner"},"UP")),"Scroll down to see the bottom-right",u.a.createElement("strong",{style:{color:"#1088e9"}}," blue "),"button."))}}]),t}(s.Component);t.default=d},2634:function(e,t,n){"use strict";function o(e,t){if("undefined"===typeof window)return 0;var n=t?"pageYOffset":"pageXOffset",o=t?"scrollTop":"scrollLeft",r=e===window,a=r?e[n]:e[o];return r&&"number"!==typeof a&&(a=window.document.documentElement[o]),a}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o,e.exports=t.default},3244:function(e,t,n){"use strict";n(35),n(3245)},3245:function(e,t,n){var o=n(3246);"string"===typeof o&&(o=[[e.i,o,""]]);var r={};r.transform=void 0;n(1030)(o,r);o.locals&&(e.exports=o.locals)},3246:function(e,t,n){t=e.exports=n(1029)(void 0),t.push([e.i,"/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable declaration-bang-space-before */\n/* stylelint-disable declaration-bang-space-before */\n.ant-back-top {\n  z-index: 10;\n  position: fixed;\n  right: 100px;\n  bottom: 50px;\n  height: 40px;\n  width: 40px;\n  cursor: pointer;\n}\n.ant-back-top-content {\n  height: 40px;\n  width: 40px;\n  border-radius: 20px;\n  background-color: rgba(64, 64, 64, 0.4);\n  color: #fff;\n  text-align: center;\n  -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  -o-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n.ant-back-top-content:hover {\n  background-color: rgba(64, 64, 64, 0.6);\n  -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  -o-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n.ant-back-top-icon {\n  font-size: 20px;\n  margin-top: 10px;\n}\n",""])},3247:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(){}function a(){return window}Object.defineProperty(t,"__esModule",{value:!0});var l=n(2),i=o(l),c=n(9),s=o(c),u=n(12),p=o(u),f=n(10),d=o(f),b=n(11),m=o(b),h=n(0),v=o(h),g=n(99),A=o(g),y=n(102),k=o(y),w=n(17),x=o(w),E=n(84),C=o(E),_=n(46),B=o(_),O=n(2634),T=o(O),S=n(435),j=o(S),z=(0,j.default)(),N=function(e,t,n,o){var r=n-t;return e/=o/2,e<1?r/2*e*e*e+t:r/2*((e-=2)*e*e+2)+t},P=function(e){function t(e){(0,s.default)(this,t);var n=(0,d.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.getCurrentScrollTop=function(){var e=n.props.target||a,t=e();return t===window?window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop:t.scrollTop},n.scrollToTop=function(e){var t=n.getCurrentScrollTop(),o=Date.now();z(function e(){var r=Date.now(),a=r-o;n.setScrollTop(N(a,t,0,450)),a<450&&z(e)}),(n.props.onClick||r)(e)},n.handleScroll=function(){var e=n.props,t=e.visibilityHeight,o=e.target,r=void 0===o?a:o,l=(0,T.default)(r(),!0);n.setState({visible:l>t})},n.state={visible:!1},n}return(0,m.default)(t,e),(0,p.default)(t,[{key:"setScrollTop",value:function(e){var t=this.props.target||a,n=t();n===window?(document.body.scrollTop=e,document.documentElement.scrollTop=e):n.scrollTop=e}},{key:"componentDidMount",value:function(){var e=this.props.target||a;this.scrollEvent=(0,k.default)(e(),"scroll",this.handleScroll),this.handleScroll()}},{key:"componentWillUnmount",value:function(){this.scrollEvent&&this.scrollEvent.remove()}},{key:"render",value:function(){var e=this.props,t=e.prefixCls,n=void 0===t?"ant-back-top":t,o=e.className,r=void 0===o?"":o,a=e.children,l=(0,x.default)(n,r),c=v.default.createElement("div",{className:n+"-content"},v.default.createElement(B.default,{className:n+"-icon",type:"to-top"})),s=(0,C.default)(this.props,["prefixCls","className","children","visibilityHeight"]),u=this.state.visible?v.default.createElement("div",(0,i.default)({},s,{className:l,onClick:this.scrollToTop}),a||c):null;return v.default.createElement(A.default,{component:"",transitionName:"fade"},u)}}]),t}(v.default.Component);t.default=P,P.defaultProps={visibilityHeight:400},e.exports=t.default},3248:function(e,t,n){var o=n(3249);"string"===typeof o&&(o=[[e.i,o,""]]);var r={};r.transform=void 0;n(1030)(o,r);o.locals&&(e.exports=o.locals)},3249:function(e,t,n){t=e.exports=n(1029)(!0),t.push([e.i,"#components-back-top-demo-custom .ant-back-top{bottom:100px}#components-back-top-demo-custom .ant-back-top-inner{height:40px;width:40px;line-height:40px;border-radius:4px;background-color:#1088e9;color:#fff;text-align:center;font-size:20px}","",{version:3,sources:["/Users/tarex/redq/DASHBOARD/newdashapp/src/containers/Navigation/backtotop.css"],names:[],mappings:"AAAA,+CACE,YAAc,CACf,AACD,qDACE,YAAa,AACb,WAAY,AACZ,iBAAkB,AAClB,kBAAmB,AACnB,yBAA0B,AAC1B,WAAY,AACZ,kBAAmB,AACnB,cAAgB,CACjB",file:"backtotop.css",sourcesContent:["#components-back-top-demo-custom .ant-back-top {\n  bottom: 100px;\n}\n#components-back-top-demo-custom .ant-back-top-inner {\n  height: 40px;\n  width: 40px;\n  line-height: 40px;\n  border-radius: 4px;\n  background-color: #1088e9;\n  color: #fff;\n  text-align: center;\n  font-size: 20px;\n}\n"],sourceRoot:""}])}});