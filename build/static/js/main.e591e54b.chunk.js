(this["webpackJsonpmknews-frontend"]=this["webpackJsonpmknews-frontend"]||[]).push([[0],{163:function(e,t,a){e.exports=a(274)},168:function(e,t,a){},176:function(e,t){},178:function(e,t){},212:function(e,t){},213:function(e,t){},273:function(e,t,a){},274:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(19),s=a.n(r),l=(a(168),a(13)),c=a(14),i=a(16),u=a(15),m=a(12),h=a(17),p=a(22),d=a(41),f=a(151),b=a.n(f),g=a(162),k=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).mapSuggestionsToValues=function(e){return e.map((function(e){return{value:e.displayText,label:e.query}}))},a.handleChange=function(e){null!==e&&""!==e.value&&(a.setState({inputValue:e}),a.props.history.push({pathname:"/search",search:"?q=".concat(e.value)}))},a.getOptions=function(e,t){if(!e)return t([]);fetch("https://api.cognitive.microsoft.com/bing/v7.0/Suggestions?mkt=en-US&q=".concat(e),{headers:{"Ocp-Apim-Subscription-Key":"6bc53ba1cace4e538e0d641921cb52ed"}}).then((function(e){return e.json()})).then((function(e){var n=e.suggestionGroups[0].searchSuggestions;t(a.mapSuggestionsToValues(n))}))},a.state={inputValue:null},a.getOptions=a.getOptions.bind(Object(m.a)(a)),a.handleChange=a.handleChange.bind(Object(m.a)(a)),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.location===e.location||this.props.location.pathname.includes("search")||this.setState({inputValue:null})}},{key:"render",value:function(){return o.a.createElement("div",{style:{flex:"0 0 16em"}},o.a.createElement(g.a,{value:this.state.inputValue,isClearable:!0,isSearchable:!0,placeholder:"Enter Keyword ..",loadOptions:this.getOptions,onChange:this.handleChange,noOptionsMessage:function(){return"No Match"}}))}}]),t}(n.Component),E=Object(d.g)(k),S=a(290),w=a(289),v=a(23),O=a(43),y=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={checked:!0},a.handleChange=a.handleChange.bind(Object(m.a)(a)),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){var t=this;this.setState({checked:e},(function(){localStorage.setItem("newsSource",t.state.checked?"guardian":"nytimes"),window.location.reload(!0)}))}},{key:"componentDidMount",value:function(){if(null!==localStorage.getItem("newsSource")){var e="nytimes"!==localStorage.getItem("newsSource");this.setState({checked:e})}else localStorage.setItem("newsSource",this.state.checked?"guardian":"nytimes")}},{key:"componentDidUpdate",value:function(){v.a.rebuild()}},{key:"render",value:function(){return o.a.createElement(S.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark"},o.a.createElement(E,null),o.a.createElement(S.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),o.a.createElement(S.a.Collapse,{id:"responsive-navbar-nav"},o.a.createElement(w.a,{className:"mr-auto"},o.a.createElement(w.a.Link,{as:p.b,to:"/home",activeClassName:"active"},"Home"),o.a.createElement(w.a.Link,{as:p.b,to:"/world",activeClassName:"active"},"World"),o.a.createElement(w.a.Link,{as:p.b,to:"/politics",activeClassName:"active"},"Politics"),o.a.createElement(w.a.Link,{as:p.b,to:"/business",activeClassName:"active"},"Business"),o.a.createElement(w.a.Link,{as:p.b,to:"/technology",activeClassName:"active"},"Technology"),o.a.createElement(w.a.Link,{as:p.b,to:"/sports",activeClassName:"active"},"Sports")),o.a.createElement(w.a,{style:{fontSize:"1.25rem"}},o.a.createElement(w.a.Link,{as:p.b,to:"/favorites",onClick:function(){v.a.hide()}},window.location.pathname.includes("/favorites")?o.a.createElement(O.a,{color:"#fff","data-tip":"fa-tip","data-for":"bookmark-tooltip-nav1"}):o.a.createElement(O.d,{color:"#fff","data-tip":"fa-reg-tip","data-for":"bookmark-tooltip-nav2"})),o.a.createElement(v.a,{id:"bookmark-tooltip-nav1",place:"bottom",type:"dark",effect:"solid",className:"p-1 font-weight-bold"},o.a.createElement("span",null,"Bookmark")),o.a.createElement(v.a,{id:"bookmark-tooltip-nav2",place:"bottom",type:"dark",effect:"solid",className:"p-1 font-weight-bold"},o.a.createElement("span",null,"Bookmark")),this.props.showSwitch?o.a.createElement(o.a.Fragment,null,o.a.createElement(w.a.Link,{disabled:"true"},"NYTimes"),o.a.createElement(w.a.Link,null,o.a.createElement(b.a,{onChange:this.handleChange,checked:this.state.checked,onColor:"#4a98e9",offColor:"#ddd",uncheckedIcon:!1,checkedIcon:!1,height:30,width:60,handleDiameter:30})),o.a.createElement(w.a.Link,{disabled:"true"},"Guardian")):null)))}}]),t}(n.Component),j=a(79),N=a.n(j),I=a(291),C=a(277),x=a(278),M=a(279),B=a(280),D=a(288),F=a(281),P=a(282),T=a(283),z=a(284),_=a(285),L=a(286),J=a(287),A=a(67),U=a(50),H=a.n(U),q=a(51),V=a.n(q),R=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).getSection=function(e){switch(e){case"world":return"primary";case"politics":return"secondary";case"business":return"success";case"technology":return"danger";case"sport":case"sports":return"warning";default:return"info"}},a.state={showShareModal:!1},a.showModal=a.showModal.bind(Object(m.a)(a)),a.closeModal=a.closeModal.bind(Object(m.a)(a)),a.defaultImage=a.defaultImage.bind(Object(m.a)(a)),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"showModal",value:function(e){e.preventDefault(),e.stopPropagation(),e.nativeEvent.stopImmediatePropagation(),this.setState((function(e){return{showShareModal:!e.showShareModal}}))}},{key:"closeModal",value:function(){this.setState((function(e){return{showShareModal:!e.showShareModal}}))}},{key:"defaultImage",value:function(){return"nytimes"===localStorage.getItem("newsSource")?V.a:"guardian"===localStorage.getItem("newsSource")?H.a:void 0}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(p.b,{to:"/article?q=".concat(this.props.article.id),style:{textDecoration:"none",color:"inherit",outline:"none"}},o.a.createElement(I.a,{className:"m-2 shadow m-sm-3"},o.a.createElement(C.a,null,o.a.createElement(x.a,{sm:3,className:"mx-4 mx-sm-0"},o.a.createElement(M.a,{className:"img-thumbnail img-fluid my-sm-4 ml-sm-4 mt-4 mb-n3",src:""===this.props.article.image?this.defaultImage():this.props.article.image})),o.a.createElement(x.a,{sm:9},o.a.createElement(I.a.Body,null,o.a.createElement(I.a.Title,{className:"font-italic font-weight-bold",style:{lineHeight:1.5}},this.props.article.title,o.a.createElement(A.b,{style:{cursor:"pointer"},onClick:this.showModal})),o.a.createElement(N.a,{line:3,truncateText:"...",element:"p",text:this.props.article.description}),o.a.createElement(C.a,null,o.a.createElement(x.a,{className:"mr-auto font-italic font-weight-normal"},o.a.createElement("span",null,this.props.article.date)),o.a.createElement(x.a,{className:"text-right"},o.a.createElement(B.a,{variant:this.getSection(this.props.article.section)},this.props.article.section.toUpperCase())))))))),o.a.createElement(D.a,{show:this.state.showShareModal,onHide:this.closeModal},o.a.createElement(D.a.Header,{closeButton:!0},o.a.createElement(D.a.Title,{className:"h5",style:{lineHeight:1.1,wordBreak:"break-all"}},this.props.article.title)),o.a.createElement(D.a.Body,null,o.a.createElement(F.a,null,o.a.createElement(C.a,{className:"justify-content-center h5"},"Share Via"),o.a.createElement(C.a,{className:"justify-content-around"},o.a.createElement(P.a,{url:this.props.article.url,quote:"#CSCI_571_NewsApp"},o.a.createElement(T.a,{size:60,round:!0})),o.a.createElement(z.a,{url:this.props.article.url,hashtags:["CSCI_571_NewsApp"]},o.a.createElement(_.a,{size:60,round:!0})),o.a.createElement(L.a,{url:this.props.article.url,subject:"#CSCI_571_NewsApp"},o.a.createElement(J.a,{size:60,round:!0})))))))}}]),t}(n.Component),$=a(159),W=a(6),G=a(160),K=a.n(G);function Y(){var e=Object($.a)(["\n  display: block;\n  margin: auto;\n"]);return Y=function(){return e},e}var Q=Object(W.css)(Y()),X=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={loading:!0},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(F.a,{fluid:!0,className:"d-flex flex-column justify-content-center align-items-center",style:{height:"100vh"}},o.a.createElement(C.a,null,o.a.createElement(K.a,{css:Q,size:50,color:"#2d4eca",loading:this.state.loading})),o.a.createElement(C.a,null,o.a.createElement("h4",{style:{textAlign:"center"}},"Loading...")))}}]),t}(o.a.Component),Z=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={news:[],loading:!0,newsSource:"guardian"},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;null!==localStorage.getItem("newsSource")&&(this.setState({newsSource:localStorage.getItem("newsSource")},(function(){fetch("/newsapi/v1.0/".concat(e.state.newsSource).concat("/sport"===e.props.tab?"nytimes"===e.state.newsSource?"/sports":"/sport":e.props.tab)).then((function(e){return e.json()})).then((function(t){return e.setState({news:t,loading:!1})}))})),this.props.displaySwitchOrNot(this.props.location.pathname))}},{key:"componentDidUpdate",value:function(e){var t=this;this.props.tab!==e.tab&&(this.setState({loading:!0}),fetch("/newsapi/v1.0/".concat(this.state.newsSource).concat("/sport"===this.props.tab?"nytimes"===this.state.newsSource?"/sports":"/sport":this.props.tab)).then((function(e){return e.json()})).then((function(e){return t.setState({news:e,loading:!1})})))}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,this.state.loading?o.a.createElement(X,null):o.a.createElement(F.a,{fluid:!0},this.state.news.map((function(e,t){return o.a.createElement(C.a,{key:t},o.a.createElement(x.a,null,o.a.createElement(R,{article:e})))}))))}}]),t}(n.Component),ee=a(81),te=a(38),ae=(a(271),a(161)),ne=a.n(ae),oe=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.removeCommentBox=ne()("5645200709910528-proj",{className:"commentbox",tlcParam:"tlc"})}},{key:"componentWillUnmount",value:function(){this.removeCommentBox()}},{key:"render",value:function(){return o.a.createElement("div",{className:"commentbox",id:this.props.id})}}]),t}(n.Component),re=Object(te.b)({enter:"zoomIn",exit:"zoomOut",duration:800,appendPosition:!1}),se=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={articleInfo:void 0,loading:!0,showFullDescription:!1,source:void 0,bookmarked:!1},a.showFullDesc=a.showFullDesc.bind(Object(m.a)(a)),a.closeFullDesc=a.closeFullDesc.bind(Object(m.a)(a)),a.defaultImage=a.defaultImage.bind(Object(m.a)(a)),a.addBookmark=a.addBookmark.bind(Object(m.a)(a)),a.deleteBookmark=a.deleteBookmark.bind(Object(m.a)(a)),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"showFullDesc",value:function(){this.setState({showFullDescription:!0},(function(){ee.scroller.scrollTo("bottomRef",{smooth:!0,duration:800})}))}},{key:"closeFullDesc",value:function(){ee.animateScroll.scrollToTop({smooth:!0,duration:800}),this.setState({showFullDescription:!1})}},{key:"addBookmark",value:function(){var e=this;v.a.hide(),this.setState({bookmarked:!0},(function(){var t=null==JSON.parse(localStorage.getItem("bookmarks"))?[]:JSON.parse(localStorage.getItem("bookmarks")),a={};a.id=e.state.articleInfo.id,a.title=e.state.articleInfo.title,a.image=e.state.articleInfo.image,a.url=e.state.articleInfo.url,a.date=e.state.articleInfo.date,a.source=localStorage.getItem("newsSource"),a.section=e.state.articleInfo.section,t.push(a),localStorage.setItem("bookmarks",JSON.stringify(t)),Object(te.c)("Saving - ".concat(e.state.articleInfo.title),{transition:re,autoClose:3e3})}))}},{key:"deleteBookmark",value:function(){var e=this;v.a.hide(),this.setState({bookmarked:!1},(function(){var t=JSON.parse(localStorage.getItem("bookmarks"));t.splice(t.findIndex((function(t){return t.id===e.state.articleInfo.id})),1),localStorage.setItem("bookmarks",JSON.stringify(t)),Object(te.c)("Removing - ".concat(e.state.articleInfo.title),{transition:re,autoClose:3e3})}))}},{key:"componentDidMount",value:function(){var e=this;this.setState({source:localStorage.getItem("newsSource")},(function(){var t=new URLSearchParams(e.props.location.search),a=t.has("source")?t.get("source"):e.state.source;fetch("/newsapi/v1.0/".concat(a,"/articles/").concat(t.get("q"))).then((function(e){return e.json()})).then((function(t){return e.setState({articleInfo:t,loading:!1},(function(){e.setState({bookmarked:null!==localStorage.getItem("bookmarks")&&-1!==JSON.parse(localStorage.getItem("bookmarks")).findIndex((function(t){return t.url===e.state.articleInfo.url}))})}))})),e.props.displaySwitchOrNot(e.props.location.pathname)}))}},{key:"componentDidUpdate",value:function(){v.a.rebuild()}},{key:"defaultImage",value:function(){return"nytimes"===this.state.source?V.a:"guardian"===this.state.source?H.a:void 0}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(te.a,{position:"top-center",autoClose:3e3,hideProgressBar:!0,closeOnClick:!0,draggable:!0}),this.state.loading?o.a.createElement(X,null):o.a.createElement(o.a.Fragment,null,o.a.createElement(I.a,{className:"m-3 shadow"},o.a.createElement(I.a.Body,null,o.a.createElement(I.a.Title,{className:"font-italic",style:{fontSize:"2rem"}},this.state.articleInfo.title),o.a.createElement(I.a.Subtitle,null,o.a.createElement(C.a,{style:{lineHeight:1.5}},o.a.createElement(x.a,{sm:2,xs:5,className:"font-italic"},this.state.articleInfo.date),o.a.createElement(x.a,{sm:{span:2,offset:7},xs:5,className:"text-right"},o.a.createElement(P.a,{url:this.state.articleInfo.url,quote:"#CSCI_571_NewsApp","data-tip":!0,"data-for":"facebook-tooltip"},o.a.createElement(T.a,{size:30,round:!0})),o.a.createElement(v.a,{id:"facebook-tooltip",place:"top",type:"dark",effect:"solid",className:"p-1 font-weight-bold"},o.a.createElement("span",null,"Facebook")),o.a.createElement(z.a,{url:this.state.articleInfo.url,hashtags:["CSCI_571_NewsApp"],"data-tip":!0,"data-for":"twitter-tooltip"},o.a.createElement(_.a,{size:30,round:!0})),o.a.createElement(v.a,{id:"twitter-tooltip",place:"top",type:"dark",effect:"solid",className:"p-1 font-weight-bold"},o.a.createElement("span",null,"Twitter")),o.a.createElement(L.a,{url:this.state.articleInfo.url,subject:"#CSCI_571_NewsApp","data-tip":!0,"data-for":"email-tooltip"},o.a.createElement(J.a,{size:30,round:!0})),o.a.createElement(v.a,{id:"email-tooltip",place:"top",type:"dark",effect:"solid",className:"p-1 font-weight-bold"},o.a.createElement("span",null,"Email"))),o.a.createElement(x.a,{sm:1,xs:2,className:"text-right"},this.state.bookmarked?o.a.createElement(O.a,{className:"ml-auto",color:"#dd143c",fontSize:"1.5rem",cursor:"pointer",onClick:this.deleteBookmark,"data-tip":"fa-detail-tooltip","data-for":"bookmark-tooltip-detail1"}):o.a.createElement(O.d,{className:"ml-auto",color:"#dd143c",fontSize:"1.5rem",cursor:"pointer",onClick:this.addBookmark,"data-tip":"ref-detail-tooltip","data-for":"bookmark-tooltip-detail2"}),o.a.createElement(v.a,{id:"bookmark-tooltip-detail1",place:"top",type:"dark",effect:"solid",className:"p-1 font-weight-bold"},o.a.createElement("span",null,"Bookmark")),o.a.createElement(v.a,{id:"bookmark-tooltip-detail2",place:"top",type:"dark",effect:"solid",className:"p-1 font-weight-bold"},o.a.createElement("span",null,"Bookmark"))))),o.a.createElement(I.a.Img,{src:""===this.state.articleInfo.image?this.defaultImage():this.state.articleInfo.image,className:"mt-2"}),o.a.createElement(I.a.Text,{className:"my-2"},""===this.state.articleInfo.description||null===this.state.articleInfo.description.match(/\S.*?\."?(?=\s|$)/g)?this.state.articleInfo.description:this.state.articleInfo.description.match(/\S.*?\."?(?=\s|$)/g).slice(0,4).join(" ")),this.state.showFullDescription?o.a.createElement(o.a.Fragment,null,o.a.createElement(ee.Element,{name:"bottomRef",className:"element"}),o.a.createElement(I.a.Text,null,""===this.state.articleInfo.description?this.state.articleInfo.description:this.state.articleInfo.description.match(/\S.*?\."?(?=\s|$)/g).slice(4).join(" "))):null,null!==this.state.articleInfo.description.match(/\S.*?\."?(?=\s|$)/g)&&this.state.articleInfo.description.match(/\S.*?\."?(?=\s|$)/g).length>4?this.state.showFullDescription?o.a.createElement(C.a,null,o.a.createElement(x.a,{sm:{span:1,offset:11},className:"text-right"},o.a.createElement(O.c,{cursor:"pointer",onClick:this.closeFullDesc}))):o.a.createElement(C.a,null,o.a.createElement(x.a,{sm:{span:1,offset:11},className:"text-right"},o.a.createElement(O.b,{cursor:"pointer",onClick:this.showFullDesc}))):null)),o.a.createElement(oe,{id:this.state.articleInfo.id})))}}]),t}(n.Component),le=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={showShareModal:!1},a.closeModal=a.closeModal.bind(Object(m.a)(a)),a.openModal=a.openModal.bind(Object(m.a)(a)),a.defaultImage=a.defaultImage.bind(Object(m.a)(a)),a.getSection=a.getSection.bind(Object(m.a)(a)),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"closeModal",value:function(){this.setState((function(e){return{showShareModal:!e.showShareModal}}))}},{key:"openModal",value:function(e){e.preventDefault(),e.stopPropagation(),e.nativeEvent.stopImmediatePropagation(),this.setState((function(e){return{showShareModal:!e.showShareModal}}))}},{key:"defaultImage",value:function(e){return"nytimes"===e?V.a:"guardian"===e?H.a:void 0}},{key:"getSection",value:function(e){switch(e){case"world":return"primary";case"politics":return"secondary";case"business":return"success";case"technology":return"danger";case"sport":return"warning";case"guardian":return"light";case"nytimes":return"dark";default:return"info"}}},{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(p.b,{to:"/article?q=".concat(this.props.article.id).concat(this.props.article.hasOwnProperty("source")?"&source="+this.props.article.source:""),style:{textDecoration:"none",color:"inherit",outline:"none"}},o.a.createElement(I.a,{className:"m-2 shadow mb-sm-5 mt-sm-0"},o.a.createElement(I.a.Body,null,o.a.createElement(I.a.Subtitle,{className:"font-weight-bold font-italic",style:{lineHeight:1.5}},o.a.createElement(N.a,{line:2,truncateText:"...",element:"div",textElement:"div",text:this.props.article.title,containerClassName:"small-article-card-title-truncate"}),o.a.createElement(A.b,{style:{cursor:"pointer"},onClick:this.openModal}),this.props.article.hasOwnProperty("source")?o.a.createElement(A.a,{style:{cursor:"pointer"},onClick:function(t){e.props.deleteBookmark(e.props.article.id,t)}}):null),o.a.createElement(I.a.Img,{src:""===this.props.article.image?this.defaultImage(localStorage.getItem("newsSource")):this.props.article.image,className:"img-thumbnail my-2"}),o.a.createElement(C.a,{className:"badge-time-row"},o.a.createElement(x.a,{className:"mr-auto font-italic font-weight-normal pr-0"},this.props.article.date),o.a.createElement(x.a,{className:this.props.article.hasOwnProperty("source")?"d-flex justify-content-end":"text-right"},o.a.createElement(B.a,{variant:this.getSection(this.props.article.section)},this.props.article.section.toUpperCase()),this.props.article.hasOwnProperty("source")?o.a.createElement(B.a,{variant:this.getSection(this.props.article.source),className:"ml-1"},this.props.article.source.toUpperCase()):null))))),o.a.createElement(D.a,{show:this.state.showShareModal,onHide:this.closeModal},o.a.createElement(D.a.Header,{closeButton:!0},o.a.createElement(C.a,null,this.props.article.hasOwnProperty("source")?o.a.createElement(D.a.Title,{className:"col-sm-12 col-12"},this.props.article.source.toUpperCase()):null,o.a.createElement(D.a.Title,{className:"h5 col-sm-12 col-12",style:{lineHeight:1.1,wordBreak:"break-all"}},this.props.article.title))),o.a.createElement(D.a.Body,null,o.a.createElement(F.a,null,o.a.createElement(C.a,{className:"justify-content-center h5"},"Share Via"),o.a.createElement(C.a,{className:"justify-content-around"},o.a.createElement(P.a,{url:this.props.article.url,quote:"#CSCI_571_NewsApp"},o.a.createElement(T.a,{size:60,round:!0})),o.a.createElement(z.a,{url:this.props.article.url,hashtags:["CSCI_571_NewsApp"]},o.a.createElement(_.a,{size:60,round:!0})),o.a.createElement(L.a,{url:this.props.article.url,subject:"#CSCI_571_NewsApp"},o.a.createElement(J.a,{size:60,round:!0})))))))}}]),t}(n.Component),ce=Object(te.b)({enter:"zoomIn",exit:"zoomOut",duration:750,appendPosition:!1}),ie=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={bookmarks:[]},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"deleteBookmark",value:function(e,t){t.preventDefault(),t.stopPropagation(),t.nativeEvent.stopImmediatePropagation();var a=JSON.parse(localStorage.getItem("bookmarks")),n=a.findIndex((function(t){return t.id===e}));Object(te.c)("Removing - ".concat(a[n].title),{transition:ce,autoClose:3e3}),a.splice(n,1),localStorage.setItem("bookmarks",JSON.stringify(a)),this.setState({bookmarks:JSON.parse(localStorage.getItem("bookmarks"))})}},{key:"componentDidMount",value:function(){this.setState({bookmarks:null===JSON.parse(localStorage.getItem("bookmarks"))?[]:JSON.parse(localStorage.getItem("bookmarks"))}),this.props.displaySwitchOrNot(this.props.location.pathname)}},{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(te.a,{position:"top-center",autoClose:3e3,hideProgressBar:!0,closeOnClick:!0,draggable:!0}),o.a.createElement(F.a,{fluid:!0},0===this.state.bookmarks.length?o.a.createElement(C.a,{className:"h3 mt-2 justify-content-center"},"You have no saved articles"):o.a.createElement(C.a,{className:"h3 pl-3 mt-2"},"Favorites"),o.a.createElement(C.a,null,this.state.bookmarks.map((function(t,a){return o.a.createElement(x.a,{key:a,sm:3},o.a.createElement(le,{article:t,deleteBookmark:e.deleteBookmark.bind(e)}))})))))}}]),t}(n.Component),ue=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={source:void 0,resultsList:[],loading:!0},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({source:localStorage.getItem("newsSource")},(function(){fetch("/newsapi/v1.0/".concat(e.state.source,"/search/").concat(e.props.location.search.substring(3))).then((function(e){return e.json()})).then((function(t){return e.setState({resultsList:t,loading:!1})}))})),this.props.displaySwitchOrNot(this.props.location.pathname)}},{key:"componentDidUpdate",value:function(e){var t=this;this.props.location.search!==e.location.search&&this.setState({loading:!0},(function(){fetch("/newsapi/v1.0/".concat(t.state.source,"/search/").concat(t.props.location.search.substring(3))).then((function(e){return e.json()})).then((function(e){return t.setState({resultsList:e,loading:!1})}))}))}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,this.state.loading?o.a.createElement(X,null):o.a.createElement(F.a,{fluid:!0},o.a.createElement(C.a,{className:"h3 pl-3 mt-2"},"Results"),o.a.createElement(C.a,null,this.state.resultsList.map((function(e,t){return o.a.createElement(x.a,{key:t,sm:3},o.a.createElement(le,{article:e}))})))))}}]),t}(n.Component),me=(a(272),a(273),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).state={showSwitch:!0},e.checkPathname=e.checkPathname.bind(Object(m.a)(e)),e.displaySwitchOrNot=e.displaySwitchOrNot.bind(Object(m.a)(e)),e}return Object(h.a)(t,e),Object(c.a)(t,[{key:"displaySwitchOrNot",value:function(e){this.setState({showSwitch:this.checkPathname(e)})}},{key:"checkPathname",value:function(e){return!(e.includes("search")||e.includes("favorites")||e.includes("article"))}},{key:"render",value:function(){var e=this;return o.a.createElement(p.a,null,o.a.createElement("div",{className:"App"},o.a.createElement(y,{showSwitch:this.state.showSwitch}),o.a.createElement(d.d,null,o.a.createElement(d.b,{path:"/home",render:function(t){return o.a.createElement(Z,Object.assign({},t,{tab:"",displaySwitchOrNot:e.displaySwitchOrNot}))}}),o.a.createElement(d.b,{path:"/world",render:function(t){return o.a.createElement(Z,Object.assign({},t,{tab:"/world",displaySwitchOrNot:e.displaySwitchOrNot}))}}),o.a.createElement(d.b,{path:"/politics",render:function(t){return o.a.createElement(Z,Object.assign({},t,{tab:"/politics",displaySwitchOrNot:e.displaySwitchOrNot}))}}),o.a.createElement(d.b,{path:"/business",render:function(t){return o.a.createElement(Z,Object.assign({},t,{tab:"/business",displaySwitchOrNot:e.displaySwitchOrNot}))}}),o.a.createElement(d.b,{path:"/technology",render:function(t){return o.a.createElement(Z,Object.assign({},t,{tab:"/technology",displaySwitchOrNot:e.displaySwitchOrNot}))}}),o.a.createElement(d.b,{path:"/sports",render:function(t){return o.a.createElement(Z,Object.assign({},t,{tab:"/sport",displaySwitchOrNot:e.displaySwitchOrNot}))}}),o.a.createElement(d.b,{path:"/article",render:function(t){return o.a.createElement(se,Object.assign({},t,{displaySwitchOrNot:e.displaySwitchOrNot}))}}),o.a.createElement(d.b,{path:"/favorites",render:function(t){return o.a.createElement(ie,Object.assign({},t,{displaySwitchOrNot:e.displaySwitchOrNot}))}}),o.a.createElement(d.b,{path:"/search",render:function(t){return o.a.createElement(ue,Object.assign({},t,{displaySwitchOrNot:e.displaySwitchOrNot}))}}),o.a.createElement(d.a,{to:"/home"}))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(me,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},50:function(e,t,a){e.exports=a.p+"static/media/guardiandefault.eada8aa2.png"},51:function(e,t,a){e.exports=a.p+"static/media/nytimesdefault.af311d87.jpg"}},[[163,1,2]]]);
//# sourceMappingURL=main.e591e54b.chunk.js.map