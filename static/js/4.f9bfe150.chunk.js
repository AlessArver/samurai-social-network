(this["webpackJsonpreact.1"]=this["webpackJsonpreact.1"]||[]).push([[4],{219:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},220:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return a}))},221:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function a(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function o(t){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){return!e||"object"!==o(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function c(t){return function(){var e,n=r(t);if(a()){var o=r(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return u(this,e)}}n.d(e,"a",(function(){return c}))},222:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.d(e,"a",(function(){return a}))},223:function(t,e,n){"use strict";n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return f})),n.d(e,"c",(function(){return p}));var r=n(3),a=n(228),o=n(0),u=n.n(o),c=n(224),i=n(103),s=function(t){var e=t.input,n=t.meta,o=n.touched,i=n.error,s=t.el,l=Object(a.a)(t,["input","meta","el"]),f=o&&i;return u.a.createElement("div",{className:"".concat(c.form," ").concat(f?c.error:"")},u.a.createElement(s,Object(r.a)(Object(r.a)({},e),l)),f&&u.a.createElement("small",null,i))},l=function(t){return u.a.createElement(s,Object.assign({},t,{el:"textarea"}))},f=function(t){return u.a.createElement(s,Object.assign({},t,{el:"input"}))},p=function(t,e,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return u.a.createElement(u.a.Fragment,null,u.a.createElement(i.a,Object.assign({name:t,placeholder:e,validate:n,component:r},a))," ",o)}},224:function(t,e,n){t.exports={form:"forms_form__tHqmU",error:"forms_error__2xJFm",formError:"forms_formError__3e95j"}},225:function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return o}));var r=function(t){return t?void 0:"Field is required"},a=function(t){return function(e){return e&&e.length>t?"Max characters: ".concat(t):void 0}},o=function(t){return function(e){return e&&e.length<t?"Min characters: ".concat(t):void 0}}},227:function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var r=n(219),a=n(220),o=n(222),u=n(221),c=n(5),i=n(0),s=n.n(i),l=n(26),f=function(t){return{isAuth:t.auth.isAuth}},p=function(t){var e=function(e){Object(o.a)(i,e);var n=Object(u.a)(i);function i(){return Object(r.a)(this,i),n.apply(this,arguments)}return Object(a.a)(i,[{key:"render",value:function(){return this.props.isAuth?s.a.createElement(t,this.props):s.a.createElement(c.a,{to:"/login"})}}]),i}(s.a.Component);return Object(l.b)(f)(e)}},234:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(54);function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,a=!1,o=void 0;try{for(var u,c=t[Symbol.iterator]();!(r=(u=c.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(i){a=!0,o=i}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}}(t,e)||Object(r.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},290:function(t,e,n){t.exports={bigImageWrapper:"ProfileInfo_bigImageWrapper__3TAxq",smallImage:"ProfileInfo_smallImage__3VggN",descriptionBlock:"ProfileInfo_descriptionBlock__2kh2A"}},291:function(t,e,n){},292:function(t,e,n){t.exports={newPost:"Posts_newPost___GXBB",posts:"Posts_posts__jtVvg"}},293:function(t,e,n){t.exports={newPost:"Post_newPost__mNv8s",post:"Post_post__3Tosk",avatarWrapper:"Post_avatarWrapper__MOuM1",postText:"Post_postText__2iDx6",buttons:"Post_buttons__2PX-B"}},297:function(t,e,n){"use strict";n.r(e);var r=n(219),a=n(220),o=n(222),u=n(221),c=n(0),i=n.n(c),s=n(5),l=n(26),f=n(53),p=n(290),m=n(42),b=n(234),d=(n(291),n(223)),h=function(t){var e=Object(c.useState)(!1),n=Object(b.a)(e,2),r=n[0],a=n[1],o=Object(c.useState)(t.status),u=Object(b.a)(o,2),s=u[0],l=u[1];return i.a.createElement(i.a.Fragment,null,r?i.a.createElement("input",{onChange:function(t){return l(t.currentTarget.value)},autoFocus:!0,onBlur:function(){a(!1),t.updateStatus(s)},value:s}):i.a.createElement("div",null,i.a.createElement("span",{onDoubleClick:function(){return a(!0)}},t.status||"No status")))},E=function(t){var e=t.profile,n=t.status,r=t.updateStatus;return e?i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:p.bigImageWrapper},i.a.createElement("img",{src:e.photos.large||"https://cdn2.hubspot.net/hubfs/2221797/cumulus2.jpg",alt:"big image"})),i.a.createElement("div",{className:p.descriptionBlock},i.a.createElement("img",{src:e.photos.small||"https://data.whicdn.com/images/331901362/original.jpg",className:p.smallImage}),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("a",{href:e.contacts.github},"GitHub")),i.a.createElement("li",null,i.a.createElement("a",{href:e.contacts.vk},"VK")),i.a.createElement("li",null,i.a.createElement("a",{href:e.contacts.facebook},"Facebook")),i.a.createElement("li",null,i.a.createElement("a",{href:e.contacts.twitter},"Twitter")),i.a.createElement("li",null,i.a.createElement("a",{href:e.contacts.instagram},"Instagram")),i.a.createElement("li",null,i.a.createElement("a",{href:e.contacts.youtube},"Youtube")),i.a.createElement("li",null,i.a.createElement("a",{href:e.contacts.mainLink},"Link"))),i.a.createElement("div",null,e.fullName),i.a.createElement("div",null,e.aboutMe),i.a.createElement("div",null,e.lookingForAJobDescription),i.a.createElement(h,{status:n,updateStatus:r}))):i.a.createElement(m.a,null)},g=n(24),v=n(292),y=n(103),_=n(104),j=n(225),O=n(293),P=function(t){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:O.post},i.a.createElement("div",{className:"avatar-wrapper"},i.a.createElement("img",{src:"https://data.whicdn.com/images/331901362/original.jpg"})),i.a.createElement("p",{className:O.postText},t.text),i.a.createElement("div",{className:O.buttons},i.a.createElement("div",null,"like ",i.a.createElement("span",null,t.likesCount)))))},S=Object(j.a)(250),k=Object(_.a)({form:"profilePost"})((function(t){return i.a.createElement("form",{onSubmit:t.handleSubmit},i.a.createElement(y.a,{name:"post",className:v.newPost,placeholder:"Your minds",validate:[j.c,S],component:d.b}),i.a.createElement("button",null,"Submit"))})),w=i.a.memo((function(t){var e=Object(g.a)(t.posts).map((function(t){return i.a.createElement(P,{text:t.text,likesCount:t.likesCount,key:t.id})})).reverse();return i.a.createElement(i.a.Fragment,null,i.a.createElement(k,{onSubmit:function(e){t.addPost(e.post)}}),i.a.createElement("div",{className:v.posts},e))})),x=Object(l.b)((function(t){return{posts:t.profilePage.posts}}),{addPost:f.a})(w),I=function(t){return i.a.createElement(i.a.Fragment,null,i.a.createElement(E,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),i.a.createElement(x,null))},N=n(227),A=n(17),F=function(t){Object(o.a)(n,t);var e=Object(u.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var t=this.props.match.params.id;!t&&this.props.isAuth&&(t=this.props.userId),t||this.props.isAuth||this.props.history.push("/login"),this.props.getProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return i.a.createElement(I,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),n}(i.a.Component);e.default=Object(A.d)(Object(l.b)((function(t){return{userId:t.auth.id,isAuth:t.auth.isAuth,profile:t.profilePage.profile,status:t.profilePage.status}}),{getProfile:f.c,getStatus:f.d,updateStatus:f.e}),s.f,N.a)(F)}}]);
//# sourceMappingURL=4.f9bfe150.chunk.js.map