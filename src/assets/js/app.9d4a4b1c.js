(function(t){function e(e){for(var i,a,s=e[0],c=e[1],u=e[2],f=0,p=[];f<s.length;f++)a=s[f],n[a]&&p.push(n[a][0]),n[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],i=!0,s=1;s<r.length;s++){var c=r[s];0!==n[c]&&(i=!1)}i&&(o.splice(e--,1),t=a(a.s=r[0]))}return t}var i={},n={app:0},o=[];function a(e){if(i[e])return i[e].exports;var r=i[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=i,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(r,i,function(e){return t[e]}.bind(null,i));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/elections-grid/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"0c5b":function(t,e,r){"use strict";var i=r("0f86"),n=r.n(i);n.a},"0f86":function(t,e,r){},"1f6b":function(t,e,r){"use strict";var i=r("f295"),n=r.n(i);n.a},"3fa7":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("097d");var i=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container-fluid",attrs:{id:"app"}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-md-10 mx-auto"},[r("GridBase")],1)])])},o=[],a=(r("ac4d"),r("8a81"),r("ac6a"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-md-12 mx-auto",attrs:{role:"grid-base"}},[t.bshowProfile?[r("div",{staticClass:"profile no-gutters"},[r("div",{staticClass:"col"},[t.profileFeatured?r("ProfileBase",{attrs:{"profile-data":t.profileFeatured},on:{goBack:t.goBack}}):t._e()],1)])]:[r("div",{key:"1",staticClass:"row no-gutters"},t._l(t.profilesData,function(e,i){return r("div",{key:"profile-"+i,staticClass:"col-4"},[r("ProfileGrid",{attrs:{"profile-data":e},on:{showProfile:t.showProfile}})],1)}))]],2)])}),s=[],c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{role:"profile-base"}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("div",{staticClass:"card"},[r("div",{staticClass:"icon-close icon float",on:{click:function(e){t.$emit("goBack")}}}),t.videoProfile?[r("VuePlyr",{attrs:{options:t.playerOptions}},[r("div",{staticClass:"plyr__video-embed player-custom-style"},[r("iframe",{attrs:{src:t.videoProfile,allowtransparency:"",allow:"autoplay"}})])])]:[r("img",{staticClass:"card-img-top",attrs:{src:"data/2018-elections/"+t.profileData.Profile_Image,alt:"Card image cap"},on:{click:function(e){t.$emit("goBack")}}})],r("div",{staticClass:"card-body"},[t.audioProfile?r("VuePlyr",{attrs:{options:t.playerOptions}},[r("audio",[r("source",{attrs:{src:t.audioProfile,type:"audio/mp3"}})])]):t._e(),r("h2",{staticClass:"card-title"},[t._v(t._s(t.profileData.Name)+", "+t._s(t.profileData.Age)+" ")]),r("div",{staticClass:"card-text pointer",on:{click:function(e){t.$emit("goBack")}}},[r("h5",{staticClass:"candidate"},[r("span",[t._v(" "+t._s(t.profileData.Location)+" ")]),t._v(" - "),r("span",[t._v(" "+t._s(t.profileData.Party_Affiliation)+" ")])]),r("p",[t._v("\n              "+t._s(t.profileData.Quote)+"\n            ")]),r("div",{staticClass:"d-flex dlex-wrap align-items-center justify-content-end"},[t.profileData.Website?r("a",{attrs:{href:t.profileData.Website,target:"_blank"}},[t._v("\n                Website\n              ")]):t._e(),t.profileData.Twitter_handle?r("a",{staticClass:"icon-twitter-inverted share-icon m-1 pointer",attrs:{href:"https://twitter.com/"+t.profileData.Twitter_handle,target:"_blank"}}):t._e()]),r("div",{staticClass:"float-left ml-2 icon-arrow-left pulse"})])],1)],2)])])])},u=[],l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._t("default")],2)},f=[],p=r("4fb8"),d=r.n(p),h={name:"VuePlyr",props:{options:{type:Object,required:!1,default:function(){return{hideYouTubeDOMError:!0}}},emit:{type:Array,required:!1,default:function(){return[]}}},data:function(){return{player:{}}},mounted:function(){var t=this;this.player=new d.a(this.$el.firstChild,this.options),this.$emit("player",this.player),this.emit.forEach(function(e){t.player.on(e,t.emitPlayerEvent)})},beforeDestroy:function(){try{this.player.destroy()}catch(t){this.options.hideYouTubeDOMError&&"The YouTube player is not attached to the DOM."===t.message||console.error(t)}},methods:{emitPlayerEvent:function(t){this.$emit(t.type,t)}}},m=h,v=(r("0c5b"),r("2877")),g=Object(v["a"])(m,l,f,!1,null,"5a42a14d",null);g.options.__file="VuePlyr.vue";var b=g.exports,y={name:"ProfileBase",components:{VuePlyr:b},props:{profileData:{type:Object,require:!0,default:null}},data:function(){return{startData:"HELLO"}},computed:{videoProfile:function(){var t=this.profileData.Video_Profile;return""!==t&&t},audioProfile:function(){var t=this.profileData.Audio_Profile;return""!==t&&t},playerOptions:function(){return{hideYouTubeDOMError:!0,iconUrl:"/elections-grid/plyr.svg",volume:1,fullscreen:!1,controls:["play-large","play","progress","current-time","mute","volume","pip","airplay"]}}}},w=y,_=(r("d2fd"),Object(v["a"])(w,c,u,!1,null,"f7f60486",null));_.options.__file="ProfileBase.vue";var P=_.exports,x=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{role:"profile-grid"}},[r("div",{staticClass:"square pointer",style:t.profileImage,on:{click:function(e){return e.stopPropagation(),t.profileClicked(e)}}},[r("div",{staticClass:"info p-2",style:t.backgroundColor},[r("div",{staticClass:"head"},[r("h4",[r("strong",[t._v(t._s(t.profileData.Name)+" ")])])]),r("div",[r("p",[t._v("\n          "+t._s(t.profileData.Age)+", "+t._s(t.profileData.Location)+"\n        ")]),r("div",{staticClass:"float-right ml-2 icon-arrow-right pulse"})])])])])},O=[],C=(r("28a5"),{name:"ProfileGrid",props:{profileData:{type:Object,require:!0,default:null}},data:function(){return{clicked:!1}},computed:{profileImage:function(){return{"background-image":"url(data/2018-elections/".concat(this.profileData.Profile_Image,")")}},backgroundColor:function(){return{"background-color":this.profileData.Background_Color}},partyColor:function(){return this.profileData.Party_Affiliation.trim().toLowerCase().split(" ").join("-")}},methods:{profileClicked:function(){this.$emit("showProfile",this.profileData)}}}),D=C,T=(r("1f6b"),Object(v["a"])(D,x,O,!1,null,"636baec0",null));T.options.__file="ProfileGrid.vue";var k=T.exports,j={name:"GridBase",components:{ProfileBase:P,ProfileGrid:k},data:function(){return{bshowProfile:!1,profileFeatured:null}},computed:{isLoading:function(){return this.$store.state.isLoading},profilesData:function(){return this.$store.state.gridData}},methods:{tweetMessage:function(){var t="https://www.youthradio.org/",e="Tweet Something : ".concat(t),r="https://twitter.com/intent/tweet?text=".concat(encodeURIComponent(e));window.open(r,"pop","width=600, height=400, scrollbars=no")},facebookThis:function(){var t="https://www.youthradio.org/",e="Facebook Something",r="https://www.facebook.com/sharer/sharer.php?u=".concat(t,"&t=").concat(e);window.open(r,"_blank")},showProfile:function(t){this.bshowProfile=!0,this.profileFeatured=t},goBack:function(){this.bshowProfile=!1}}},q=j,A=(r("7d7c"),Object(v["a"])(q,a,s,!1,null,"6178bf9b",null));A.options.__file="GridBase.vue";var $=A.exports,B=r("6dd8"),E={name:"App",components:{GridBase:$},data:function(){return{}},created:function(){this.$store.dispatch("fetchData")},mounted:function(){var t=this.$root.$el,e=new B["a"](function(t){var e=!0,r=!1,i=void 0;try{for(var n,o=t[Symbol.iterator]();!(e=(n=o.next()).done);e=!0){var a=n.value,s=a.contentRect.height,c="elementHeight:"+s;parent.postMessage(c,"*")}}catch(u){r=!0,i=u}finally{try{e||null==o.return||o.return()}finally{if(r)throw i}}});e.observe(t)},methods:{}},L=E,R=(r("5c0b"),Object(v["a"])(L,n,o,!1,null,null,null));R.options.__file="App.vue";var M=R.exports,S=(r("55dd"),r("96cf"),r("1da1")),I=r("2f62"),G=r("462d");i["a"].use(I["a"]);var z={isLoading:!1,gridData:null},V={fetchData:function(t){var e=t.commit;e("CSV_DATA")}},Y={CSV_DATA:function(){var t=Object(S["a"])(regeneratorRuntime.mark(function t(e){var r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.next=3,fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vQ8jaIrggREOVzl4qLtNIqy-1G6FBzgC5HZmungz19B6kMDTvhm-eD_1ZXK7u87R5f2tX_E0nRyIYPY/pub?gid=2139654937&single=true&output=csv").then(function(t){return t.text()}).then(function(t){return Object(G["a"])(t)}).then(function(t){return delete t.columns,t});case 3:r=t.sent,e.gridData=r.sort(function(){return.5-Math.random()}),e.isLoading=!1;case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),FAKE_DATA:function(){var t=Object(S["a"])(regeneratorRuntime.mark(function t(e){var i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:e.isLoading=!0,i=r("915f"),e.quizData=i.data.quiz,e.isLoading=!1;case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),MAKE_GQL_QUERY:function(){var t=Object(S["a"])(regeneratorRuntime.mark(function t(e,r){var i,n,o,a,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return i=r.url,n=r.query,e.isLoading=!0,o=function(){var t=Object(S["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch(i,{headers:{"Content-Type":"application/json"},referrer:"no-referrer",method:"POST",body:JSON.stringify({query:n})});case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),t.next=5,o();case 5:return a=t.sent,t.next=8,a.json();case 8:s=t.sent,e.quizData=s.data.quiz,e.isLoading=!1;case 11:case"end":return t.stop()}},t,this)}));return function(e,r){return t.apply(this,arguments)}}()},N=new I["a"].Store({mutations:Y,state:z,actions:V});i["a"].config.productionTip=!1,new i["a"]({store:N,render:function(t){return t(M)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";var i=r("5e27"),n=r.n(i);n.a},"5e27":function(t,e,r){},"7d7c":function(t,e,r){"use strict";var i=r("3fa7"),n=r.n(i);n.a},"915f":function(t){t.exports={data:{quiz:{id:"5b930f393f9082129af6bc74",description:"This is a new Quiz 2",featureImage:"http://news.uic.edu/files/2014/10/vote-button.jpeg",questions:[{id:"5b930f923f9082129af6bc75",questionOrder:1,questionText:"Who is the President?",featureImage:"http://econintersect.com/images/2013/8/97056712ztemp.png",options:[{id:"5b930fd83f9082129af6bc76",optionText:"Obama",resultText:"no, we wish",correctOption:!1},{id:"5b930fe73f9082129af6bc77",optionText:"Trump",resultText:"Yes, Unfortunately",correctOption:!0}]},{id:"5b970f24f294861365341c5c",questionOrder:2,questionText:"what is usa capital ?",featureImage:"https://i.imgur.com/M17RJ06.jpg",options:[{id:"5b970f70f294861365341c5d",optionText:"Washington, DC",resultText:"Yes, bordering the states of Maryland and Virginia.",correctOption:!0},{id:"5b970fa7f294861365341c5e",optionText:"Washington, CA",resultText:"No, this is washington in Nevada County",correctOption:!1},{id:"5b970feff294861365341c5f",optionText:"Oakland, CA",resultText:"No, Oakland no, it would be nice!",correctOption:!1}]},{id:"5b9710adf294861365341c60",questionOrder:3,questionText:"What are the main political parties",featureImage:"https://www.prgn.com/wp-content/uploads/2018/04/politics.jpg",options:[{id:"5b971126f294861365341c61",optionText:"Libertarian Party",resultText:"No, but they're big",correctOption:!1},{id:"5b97114ff294861365341c62",optionText:"Democratic Party and Republican Party",resultText:"Yes, they're the big ones",correctOption:!0},{id:"5b97117ef294861365341c63",optionText:"Green Party",resultText:"No, they're the 2nd minor with big numbers",correctOption:!1}]}]}}}},d2fd:function(t,e,r){"use strict";var i=r("fd56"),n=r.n(i);n.a},f295:function(t,e,r){},fd56:function(t,e,r){}});
//# sourceMappingURL=app.9d4a4b1c.js.map