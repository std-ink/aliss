webpackJsonp([1],{"+ipi":function(t,e){},"/dBH":function(t,e){},"6H9L":function(t,e){},"85CS":function(t,e){},Axok:function(t,e){},"G/2H":function(t,e,a){t.exports=a.p+"static/img/loading.e528a98.gif"},GhAf:function(t,e){},JnWh:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),s=a("mtWM"),r=a.n(s),i=a("lbHh"),o=a.n(i),l={login:"https://aliss-app.herokuapp.com/api/v1/auth",logout:"https://aliss-app.herokuapp.com/api/v1/user/logout",authToken:"https://aliss-app.herokuapp.com/api/v1/user",getBanks:"https://aliss-app.herokuapp.com/api/v1/fa/banks",postFaData:"https://aliss-app.herokuapp.com/api/v1/fa/fadata",getAccounts:"https://aliss-app.herokuapp.com/api/v1/fa/accounts?category=1"},d={data:function(){return{apiUrls:l}}},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))]),t._v(" "),a("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),a("br"),t._v(" "),a("li",[a("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var c=a("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App test"}}},u,!1,function(t){a("mZqF")},"data-v-3842e666",null).exports,v={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"modal"}},[a("div",{staticClass:"modal-mask"},[a("div",{staticClass:"modal-wrapper"},[a("div",{staticClass:"modal-container"},[a("div",{staticClass:"modal-header"},[t._t("header",[t._v("\n              default header\n          ")])],2),t._v(" "),a("div",{staticClass:"modal-body"},[t._t("body",[t._v("\n              default body\n          ")])],2),t._v(" "),a("div",{staticClass:"modal-footer"},[a("div",{directives:[{name:"show",rawName:"v-show",value:1==this.mtypeIn,expression:"this.mtypeIn == 1"}],staticClass:"mtype1"},[a("div",{staticClass:"buttonBase fainputButton",staticStyle:{float:"left",margin:"10px",width:"80px"},on:{click:t.clickYes}},[t._v("Yes")]),t._v(" "),a("div",{staticClass:"buttonBase fainputButton",staticStyle:{float:"left",margin:"10px",width:"80px"},on:{click:t.clickNo}},[t._v("No")])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:2==this.mtypeIn,expression:"this.mtypeIn == 2"}],staticClass:"mtype2"},[a("div",{staticClass:"buttonBase fainputButton",staticStyle:{float:"left",margin:"10px",width:"80px"},on:{click:t.clickOk}},[t._v("OK")])])])])])])])},staticRenderFns:[]};var m=a("VU/8")({name:"Modal",props:["mtypeIn"],methods:{clickYes:function(){this.$emit("modal-yes-event")},clickNo:function(){this.$emit("modal-no-event")},clickOk:function(){this.$emit("modal-ok-event")}}},v,!1,function(t){a("lFpd")},"data-v-340d866d",null).exports,p={name:"TitleHeader",mixins:[d],props:["userName"],components:{Modal:m},data:function(){return{showModal:!1}},methods:{clickToggle:function(){this.$emit("toggle-clicked-event")},singOut:function(){this.showModal=!0},confirmYes:function(){var t=o.a.get("token");r.a.get(this.apiUrls.logout,{headers:{Authorization:t}}),o.a.remove("token"),this.showModal=!1,location.reload()},confirmNo:function(){this.showModal=!1}}},h={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("header",{staticStyle:{overflow:"hidden"}},[a("div",{attrs:{id:"headerTitle"}},[a("div",{attrs:{id:"mnavToggle"},on:{click:t.clickToggle}},[t._m(0)]),t._v(" "),a("h1",[t._v("aliss")])]),t._v(" "),a("div",{attrs:{id:"headerUser"}},[a("p",[a("span",{attrs:{id:"userIcon"}},[t._v("●")]),t._v(" "+t._s(t.userName))]),t._v(" "),a("p",[a("a",{attrs:{href:"#"},on:{click:t.singOut}},[t._v("Sign Out")])])]),t._v(" "),t._m(1)]),t._v(" "),a("Modal",{directives:[{name:"show",rawName:"v-show",value:t.showModal,expression:"showModal"}],attrs:{mtypeIn:1},on:{"modal-yes-event":t.confirmYes,"modal-no-event":t.confirmNo}},[a("p",{attrs:{slot:"header"},slot:"header"},[t._v("aliss Confirmation")]),t._v(" "),a("template",{slot:"body"},[t._v("\n            alissからサインアウトしますか？\n        ")])],2)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("span"),this._v(" "),e("span"),this._v(" "),e("span")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"subTitle"}},[a("span",{staticStyle:{color:"#f16272"}},[t._v("A")]),t._v("ctivity and\n            "),a("span",{staticStyle:{color:"#f16272"}},[t._v("LI")]),t._v("felog\n            "),a("span",{staticStyle:{color:"#f16272"}},[t._v("S")]),t._v("tored\n            "),a("span",{staticStyle:{color:"#f16272"}},[t._v("S")]),t._v("ervice\n        ")])}]};var f=a("VU/8")(p,h,!1,function(t){a("JnWh")},"data-v-1899bf7e",null).exports,_={name:"SideMenu",data:function(){return{title:"test",menuList:[{id:1,pageName:"Portal",url:location.pathname+"?pId=portal",layer:"1",select:!1,del:!1},{id:7,pageName:"Financial Accountings",url:null,layer:"1",select:!1,del:!1},{id:8,pageName:"家計簿入力",url:location.pathname+"?pId=fa01",layer:"2",select:!1,del:!1},{id:9,pageName:"Bank間振替",url:null,layer:"2",select:!1,del:!1},{id:10,pageName:"月次締処理",url:null,layer:"2",select:!1,del:!1},{id:14,pageName:"WishList",url:null,layer:"2",select:!1,del:!1},{id:11,pageName:"Bank設定",url:null,layer:"2",select:!1,del:!1},{id:12,pageName:"Account階層設定",url:null,layer:"2",select:!1,del:!1},{id:13,pageName:"残高照会",url:null,layer:"2",select:!1,del:!1},{id:2,pageName:"User Management",url:null,layer:"1",select:!1,del:!1},{id:3,pageName:"個人設定",url:null,layer:"2",select:!1,del:!1},{id:4,pageName:"UM設定(Admin)",url:null,layer:"2",select:!1,del:!1},{id:5,pageName:"Role設定(Admin)",url:null,layer:"2",select:!1,del:!1},{id:6,pageName:"Auth設定(Admin)",url:null,layer:"2",select:!1,del:!1}]}}},g={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"menu","data-v-sidemenu":""}},t._l(t.menuList,function(e,n){return a("span",{key:n},[1==e.layer&&e.select&&!e.del?a("h1",{staticClass:"selected",attrs:{"data-v-sidemenu":""}},[t._v("\n            "+t._s(e.pageName)+"\n        ")]):t._e(),t._v(" "),1!=e.layer||e.select||e.del?t._e():a("h1",{attrs:{"data-v-sidemenu":""}},[null!=e.url?[null!=e.url?a("a",{attrs:{href:e.url}},[t._v("\n                    "+t._s(e.pageName)+"\n                ")]):t._e()]:[t._v("\n                "+t._s(e.pageName)+"\n            ")]],2),t._v(" "),2==e.layer&&e.select&&!e.del?a("h2",{staticClass:"selected",attrs:{"data-v-sidemenu":""}},[t._v("\n            "+t._s(e.pageName)+"\n        ")]):t._e(),t._v(" "),2!=e.layer||e.select||e.del?t._e():a("h2",{attrs:{"data-v-sidemenu":""}},[null!=e.url?[null!=e.url?a("a",{attrs:{href:e.url}},[t._v("\n                    "+t._s(e.pageName)+"\n                ")]):t._e()]:[t._v("\n                "+t._s(e.pageName)+"\n            ")]],2)])}))},staticRenderFns:[]};var y=a("VU/8")(_,g,!1,function(t){a("rIsq")},"data-v-02a534d0",null).exports,k={name:"SideMenu",data:function(){return{title:"test",menuList:[{id:1,pageName:"Portal",url:location.pathname+"?pId=portal",layer:"1",select:!1,del:!1},{id:7,pageName:"Financial Accountings",url:null,layer:"1",select:!1,del:!1},{id:8,pageName:"家計簿入力",url:location.pathname+"?pId=fa01",layer:"2",select:!1,del:!1},{id:9,pageName:"Bank間振替",url:null,layer:"2",select:!1,del:!1},{id:10,pageName:"月次締処理",url:location.pathname+"?pId=fa03",layer:"2",select:!1,del:!1},{id:14,pageName:"WishList",url:null,layer:"2",select:!1,del:!1},{id:11,pageName:"Bank設定",url:null,layer:"2",select:!1,del:!1},{id:12,pageName:"Account階層設定",url:null,layer:"2",select:!1,del:!1},{id:13,pageName:"残高照会",url:null,layer:"2",select:!1,del:!1},{id:2,pageName:"User Management",url:null,layer:"1",select:!1,del:!1},{id:3,pageName:"個人設定",url:null,layer:"2",select:!1,del:!1},{id:4,pageName:"UM設定(Admin)",url:null,layer:"2",select:!1,del:!1},{id:5,pageName:"Role設定(Admin)",url:null,layer:"2",select:!1,del:!1},{id:6,pageName:"Auth設定(Admin)",url:null,layer:"2",select:!1,del:!1}]}},methods:{closeMenu:function(){this.$emit("menu-close-event")}}},b={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"sidef"}},[a("div",{staticStyle:{position:"fixed","z-index":"9998",top:"0",left:"0",width:"200%",height:"100%","background-color":"rgba(0, 0, 0, .5)",display:"table"}},[a("div",{attrs:{id:"menu","data-v-sidemenuF":""}},[a("div",{staticClass:"buttonBase",staticStyle:{margin:"20px 0px"},on:{click:t.closeMenu}},[t._v("Close")]),t._v(" "),t._l(t.menuList,function(e,n){return a("span",{key:n},[1==e.layer&&e.select&&!e.del?a("h1",{staticClass:"selected",attrs:{"data-v-sidemenuF":""}},[t._v("\n                    "+t._s(e.pageName)+"\n                ")]):t._e(),t._v(" "),1!=e.layer||e.select||e.del?t._e():a("h1",{attrs:{"data-v-sidemenuF":""}},[null!=e.url?[null!=e.url?a("a",{attrs:{href:e.url}},[t._v("\n                            "+t._s(e.pageName)+"\n                        ")]):t._e()]:[t._v("\n                        "+t._s(e.pageName)+"\n                    ")]],2),t._v(" "),2==e.layer&&e.select&&!e.del?a("h2",{staticClass:"selected",attrs:{"data-v-sidemenuF":""}},[t._v("\n                    "+t._s(e.pageName)+"\n                ")]):t._e(),t._v(" "),2!=e.layer||e.select||e.del?t._e():a("h2",{attrs:{"data-v-sidemenuF":""}},[null!=e.url?[null!=e.url?a("a",{attrs:{href:e.url}},[t._v("\n                            "+t._s(e.pageName)+"\n                        ")]):t._e()]:[t._v("\n                        "+t._s(e.pageName)+"\n                    ")]],2)])})],2)])])},staticRenderFns:[]};var w=a("VU/8")(k,b,!1,function(t){a("b516")},"data-v-21d6c939",null).exports,N={render:function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{attrs:{"data-v-footer":""}},[e("p",[this._v(this._s(this.footerTitle)+" ver "+this._s(this.version))])])},staticRenderFns:[]};var x=a("VU/8")({name:"FooterComp",data:function(){return{footerTitle:"aliss WEB Suite",version:"1.0.0"}}},N,!1,function(t){a("yaDz")},"data-v-fb9a77a6",null).exports,I={render:function(){var t=this.$createElement,e=this._self._c||t;return e("section",{attrs:{"data-v-portal":""}},[e("div",{attrs:{id:"appTitle","data-v-portal":""}},[this._v(this._s(this.appTitle))])])},staticRenderFns:[]};var C=a("VU/8")({name:"Portal",data:function(){return{welcomeMsg:"Welcome to",appTitle:"aliss"}}},I,!1,function(t){a("+ipi")},"data-v-2eec41f9",null).exports,M=a("mvHQ"),A=a.n(M),H=a("woOf"),F=a.n(H),E={render:function(){var t=this.$createElement;return(this._self._c||t)("p",{attrs:{"data-v-viewheader":""}},[this._v(this._s(this.moduleName)+" / "+this._s(this.viewName))])},staticRenderFns:[]};var B=a("VU/8")({name:"ViewHeader",props:["moduleName","viewName"]},E,!1,function(t){a("aApf")},"data-v-0a652be8",null).exports,$={name:"FAheader",mixins:[d],props:["header"],data:function(){return{bankId:[{id:"",name:"",balance:0,year:0,period:0,default:!1}]}},created:function(){var t=o.a.get("token");if(null!=t){var e=this;r.a.get(this.apiUrls.getBanks,{headers:{Authorization:t}}).then(function(t){if(200==t.status&&"S"==t.data.status)for(var a=0;a<t.data.data.length;a++){var n=F()({},e.bankId[0]);n.id=t.data.data[a].id,n.name=t.data.data[a].name,n.balance=t.data.data[a].balance,n.year=t.data.data[a].currentYear,n.period=t.data.data[a].currentPeriod,n.default=t.data.data[a].default,e.bankId.push(n),n.default&&(e.header.bank=n.id,e.header.balance=n.balance),e.$emit("header-bank-change-event",e.header.bank)}}).catch(function(t){})}},methods:{changeBank:function(){this.$emit("header-bank-change-event",this.header.bank);for(var t=0;t<this.bankId.length;t++)if(this.bankId[t].id==this.header.bank)return void(this.header.balance=this.bankId[t].balance)}}},T={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("div",{staticClass:"entry",attrs:{"data-v-faheader":""}},[a("form",{attrs:{"data-v-faheader":""}},[a("div",{staticClass:"entryInputBlock",attrs:{"data-v-faheader":""}},[a("p",{attrs:{"data-v-faheader":""}},[t._v("年")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.header.year,expression:"header.year"}],attrs:{type:"number",name:"year","data-v-faheader":""},domProps:{value:t.header.year},on:{input:function(e){e.target.composing||t.$set(t.header,"year",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"entryInputBlock",attrs:{"data-v-faheader":""}},[a("p",{attrs:{"data-v-faheader":""}},[t._v("月")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.header.month,expression:"header.month"}],attrs:{type:"number",name:"month","data-v-faheader":""},domProps:{value:t.header.month},on:{input:function(e){e.target.composing||t.$set(t.header,"month",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"entryInputBlock",attrs:{"data-v-faheader":""}},[a("p",{attrs:{"data-v-faheader":""}},[t._v("日")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.header.day,expression:"header.day"}],attrs:{type:"number",name:"day","data-v-faheader":""},domProps:{value:t.header.day},on:{input:function(e){e.target.composing||t.$set(t.header,"day",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"entryInputBlock",attrs:{"data-v-faheader":""}},[a("p",{attrs:{"data-v-faheader":""}},[t._v("口座ID")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.header.bank,expression:"header.bank"}],staticStyle:{width:"120px"},attrs:{name:"bank"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.header,"bank",e.target.multiple?a:a[0])},t.changeBank]}},t._l(t.bankId,function(e,n){return a("option",{key:n,domProps:{value:e.id}},[t._v("\n                        "+t._s(e.name)+"\n                    ")])}))])])])])},staticRenderFns:[]};var S=a("VU/8")($,T,!1,function(t){a("6H9L")},"data-v-4b507d8a",null).exports,P={name:"FAentry",props:["index","entry","accId"],data:function(){return{}},methods:{selectAccount:function(){for(var t=0;t<this.accId.length;t++)if(this.accId[t].id==this.entry.accId)return 1==this.accId[t].type?void(this.entry.entryAgg=-1):void(this.entry.entryAgg=1)},delEntry:function(){this.$emit("entry-del-event",this.index)}},computed:{entryTotal:function(){var t=Number(this.entry.value)-Number(this.entry.discount)+Number(this.entry.ext),e={index:0,total:0};return e.index=this.index,e.total=t*this.entry.entryAgg,this.$emit("entry-input-event",e),t}}},U={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"faentry"}},[a("div",{staticClass:"entry",attrs:{"data-v-faentry":""}},[a("form",{attrs:{"data-v-faentry":""}},[a("div",{staticClass:"entryInputBlock",attrs:{"data-v-faentry":""}},[a("p",{attrs:{"data-v-faentry":""}},[t._v("科目")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.entry.accId,expression:"entry.accId"}],attrs:{name:"accInput"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.entry,"accId",e.target.multiple?a:a[0])},t.selectAccount]}},t._l(t.accId,function(e,n){return a("option",{key:n,domProps:{value:e.id}},[t._v(t._s(e.id)+"："+t._s(e.name))])}))]),t._v(" "),a("div",{staticClass:"entryInputBlock",attrs:{"data-v-faentry":""}},[a("p",{attrs:{"data-v-faentry":""}},[t._v("内容・内訳")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.entry.entryTxt,expression:"entry.entryTxt"}],attrs:{type:"text",name:"entryTxtInput"},domProps:{value:t.entry.entryTxt},on:{input:function(e){e.target.composing||t.$set(t.entry,"entryTxt",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"entryInputBlock",attrs:{"data-v-faentry":""}},[a("p",{attrs:{"data-v-faentry":""}},[t._v("金額")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.entry.value,expression:"entry.value"}],attrs:{type:"number",name:"valueInput"},domProps:{value:t.entry.value},on:{input:function(e){e.target.composing||t.$set(t.entry,"value",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"entryInputBlock",attrs:{"data-v-faentry":""}},[a("p",{attrs:{"data-v-faentry":""}},[t._v("値引額")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.entry.discount,expression:"entry.discount"}],attrs:{type:"number",name:"discountInput"},domProps:{value:t.entry.discount},on:{input:function(e){e.target.composing||t.$set(t.entry,"discount",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"entryInputBlock",attrs:{"data-v-faentry":""}},[a("p",{attrs:{"data-v-faentry":""}},[t._v("税・手数料等")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.entry.ext,expression:"entry.ext"}],attrs:{type:"number",name:"extInput"},domProps:{value:t.entry.ext},on:{input:function(e){e.target.composing||t.$set(t.entry,"ext",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"entryInputBlock",attrs:{"data-v-faentry":""}},[a("p",{attrs:{"data-v-faentry":""}},[t._v("備考")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.entry.remarks,expression:"entry.remarks"}],attrs:{type:"text",name:"remarksInput"},domProps:{value:t.entry.remarks},on:{input:function(e){e.target.composing||t.$set(t.entry,"remarks",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"entryTotal",attrs:{"data-v-faentry":""}},[a("p",{attrs:{"data-v-faentry":""}},[t._v("明細小計："+t._s(t.entryTotal))]),t._v(" "),a("div",{staticClass:"buttonBase faentryButton",attrs:{"data-v-faentry":""},on:{click:t.delEntry}},[t._v("明細削除")])])])])},staticRenderFns:[]};var L=a("VU/8")(P,U,!1,function(t){a("GhAf")},"data-v-e4f8e756",null).exports,D={render:function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"loading"}},[e("div",{staticClass:"loading-mask"},[e("div",{staticClass:"loading-wrapper"},[e("div",{staticClass:"loading-container"},[e("img",{attrs:{src:a("G/2H")}})])])])])},staticRenderFns:[]};var R=a("VU/8")({name:"Loading"},D,!1,function(t){a("xDfQ")},"data-v-2cbe3e5e",null).exports,V={name:"FAinput",mixins:[d],components:{ViewHeader:B,FAentry:L,FAheader:S,Modal:m,Loading:R},created:function(){var t=new Date;this.faHeader.year=t.getFullYear(),this.faHeader.month=t.getMonth()+1,this.faHeader.day=t.getDate();var e=o.a.get("token");if(null!=e){var a=this;r.a.get(this.apiUrls.getAccounts,{headers:{Authorization:e}}).then(function(t){if(200==t.status&&"S"==t.data.status){for(var e=0;e<t.data.data.length;e++){var n=F()({},a.accId[0]);n.id=t.data.data[e].accid,n.name=t.data.data[e].name,n.type=t.data.data[e].accType,a.accId.push(n)}a.accId.shift()}}).catch(function(t){})}},data:function(){return{moduleName:"FA",viewName:"家計簿入力",faHeader:{year:null,month:null,day:null,bank:"",balance:10},faEntrys:[{accId:"",entryTxt:"",value:null,discount:null,ext:null,remarks:"",entrySum:null,entryAgg:null},{accId:"",entryTxt:"",value:null,discount:null,ext:null,remarks:"",entrySum:null,entryAgg:null}],faHvalue:{hExt:null,hDiscount:null,hComment:""},accId:[{id:"",name:"",type:null}],confirmModal:!1,completeModal:!1,errorModal:!1,loading:!1,errorCode:""}},computed:{total:function(){for(var t=0,e=1;e<this.faEntrys.length;e++)t+=this.faEntrys[e].entrySum;return t=t-Number(this.faHvalue.hExt)+Number(this.faHvalue.hDiscount),t},afterBalance:function(){return this.faHeader.balance+this.total}},methods:{entryUpdate:function(t){this.faEntrys[t.index].entrySum=t.total},addEntry:function(){var t=F()({},this.faEntrys[0]);this.faEntrys.push(t)},delEntry:function(t){this.$delete(this.faEntrys,t)},registor:function(){this.confirmModal=!0},confirmYes:function(){this.confirmModal=!1,this.loading=!0,this.callPostFaData()},confirmNo:function(){this.confirmModal=!1},callPostFaData:function(){var t={header:{year:Number(this.faHeader.year),month:Number(this.faHeader.month),day:Number(this.faHeader.day),bank:this.faHeader.bank,hExt:Number(this.faHvalue.hExt),hDiscount:Number(this.faHvalue.hDiscount),hComment:this.faHvalue.hComment,hTotal:this.total},entries:this.faEntrys};console.log(A()(t));var e=this,a=o.a.get("token");null!=a&&r.a.post(this.apiUrls.postFaData,{header:{year:Number(this.faHeader.year),month:Number(this.faHeader.month),day:Number(this.faHeader.day),bank:this.faHeader.bank,hExt:Number(this.faHvalue.hExt),hDiscount:Number(this.faHvalue.hDiscount),hComment:this.faHvalue.hComment,hTotal:this.total},entries:this.faEntrys},{headers:{Authorization:a}}).then(function(t){if(e.loading=!1,200==t.status)return"S"==t.data.status?void(e.completeModal=!0):(e.errorCode=t.data.code,void(e.errorModal=!0));e.errorModal=!0}).catch(function(t){e.loading=!1,e.errorModal=!0})},postModal:function(){this.completeModal=!1,location.reload(),window.scrollTo(0,0)},postErrorModal:function(){this.errorModal=!1}}},W={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{"data-v-fainput":""}},[a("ViewHeader",{attrs:{moduleName:t.moduleName,viewName:t.viewName}}),t._v(" "),a("FAheader",{attrs:{header:t.faHeader}}),t._v(" "),a("div",{staticClass:"buttonBase fainputButton",attrs:{"data-v-fainput":""}},[t._v("最新情報に更新")]),t._v(" "),t._l(t.faEntrys,function(e,n){return n>0?a("FAentry",{key:n,attrs:{index:n,entry:e,accId:t.accId},on:{"entry-input-event":t.entryUpdate,"entry-del-event":t.delEntry}}):t._e()}),t._v(" "),a("div",{staticClass:"buttonBase fainputButton",attrs:{"data-v-fainput":""},on:{click:t.addEntry}},[t._v("明細追加")]),t._v(" "),a("section",[a("div",{staticClass:"entry",attrs:{"data-v-fainput":""}},[a("form",{attrs:{"data-v-fainput":""}},[a("div",{staticClass:"entryInputBlock",attrs:{"data-v-fainput":""}},[a("p",{staticClass:"formLabel",attrs:{"data-v-fainput":""}},[t._v("外税・手数料等")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.faHvalue.hExt,expression:"faHvalue.hExt"}],attrs:{type:"number",name:"hExtInput"},domProps:{value:t.faHvalue.hExt},on:{input:function(e){e.target.composing||t.$set(t.faHvalue,"hExt",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"entryInputBlock",attrs:{"data-v-fainput":""}},[a("p",{staticClass:"formLabel",attrs:{"data-v-fainput":""}},[t._v("値引額")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.faHvalue.hDiscount,expression:"faHvalue.hDiscount"}],attrs:{type:"number",name:"hDiscountInput"},domProps:{value:t.faHvalue.hDiscount},on:{input:function(e){e.target.composing||t.$set(t.faHvalue,"hDiscount",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"entryInputBlock",attrs:{"data-v-fainput":""}},[a("p",{staticClass:"formLabel",attrs:{"data-v-fainput":""}},[t._v("コメント")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.faHvalue.hComment,expression:"faHvalue.hComment"}],staticClass:"commentInput",attrs:{type:"text",name:"hCommentInput","data-v-fainput":""},domProps:{value:t.faHvalue.hComment},on:{input:function(e){e.target.composing||t.$set(t.faHvalue,"hComment",e.target.value)}}})])])])]),t._v(" "),a("section",[a("div",{staticClass:"entry",attrs:{"data-v-fainput":""}},[a("table",{attrs:{"data-v-fainput":""}},[a("tr",[a("td",[t._v("伝票合計金額：")]),a("td",[t._v(t._s(t.total))])]),t._v(" "),a("tr",[a("td",[t._v("現残高：")]),a("td",[t._v(t._s(t.faHeader.balance))])]),t._v(" "),a("tr",[a("td",[t._v("登録後残高：")]),a("td",[t._v(t._s(t.afterBalance))])])])])]),t._v(" "),a("div",{staticClass:"buttonBase fainputButton",attrs:{"data-v-fainput":""},on:{click:t.registor}},[t._v("登録")]),t._v(" "),a("Modal",{directives:[{name:"show",rawName:"v-show",value:t.confirmModal,expression:"confirmModal"}],attrs:{mtypeIn:1},on:{"modal-yes-event":t.confirmYes,"modal-no-event":t.confirmNo}},[a("p",{attrs:{slot:"header"},slot:"header"},[t._v("aliss Confirmation")]),t._v(" "),a("template",{slot:"body"},[a("table",{attrs:{"data-v-fainput":""}},[a("p",[t._v("伝票を登録しますか？")]),t._v(" "),a("tr",[a("td",[t._v("伝票合計金額：")]),a("td",[t._v(t._s(t.total))])]),t._v(" "),a("tr",[a("td",[t._v("現残高：")]),a("td",[t._v(t._s(t.faHeader.balance))])]),t._v(" "),a("tr",[a("td",[t._v("登録後残高：")]),a("td",[t._v(t._s(t.afterBalance))])])])])],2),t._v(" "),a("Modal",{directives:[{name:"show",rawName:"v-show",value:t.completeModal,expression:"completeModal"}],attrs:{mtypeIn:2},on:{"modal-ok-event":t.postModal}},[a("p",{attrs:{slot:"header"},slot:"header"},[t._v("aliss Confirmation")]),t._v(" "),a("template",{slot:"body"},[t._v("\n            家計簿に登録しました。\n        ")])],2),t._v(" "),a("Modal",{directives:[{name:"show",rawName:"v-show",value:t.errorModal,expression:"errorModal"}],attrs:{mtypeIn:2},on:{"modal-ok-event":t.postErrorModal}},[a("p",{attrs:{slot:"header"},slot:"header"},[t._v("aliss Confirmation")]),t._v(" "),a("template",{slot:"body"},[a("p",[t._v("家計簿に登録に失敗しました。")]),t._v(" "),a("p",[t._v("(コード："+t._s(t.errorCode)+")")])])],2),t._v(" "),a("Loading",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}]})],2)},staticRenderFns:[]};var O=a("VU/8")(V,W,!1,function(t){a("/dBH")},"data-v-6286bb44",null).exports,j={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"entry",attrs:{"data-v-facloseinput":""}},[a("form",{attrs:{"data-v-facloseinput":""}},[a("div",{staticClass:"entryInputBlock",attrs:{"data-v-facloseinput":""}},[a("p",{attrs:{"data-v-faentry":""}},[t._v("指定月")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.period,expression:"period"}],attrs:{type:"text",name:"periodInput"},domProps:{value:t.period},on:{input:function(e){e.target.composing||(t.period=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"entryInputBlock",attrs:{"data-v-facloseinput":""}},[a("p",{attrs:{"data-v-faentry":""}},[t._v("状態")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.status,expression:"status"}],attrs:{type:"text",name:"status",readonly:""},domProps:{value:t.status},on:{input:function(e){e.target.composing||(t.status=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"entrySummary",attrs:{"data-v-facloseinput":""}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],staticClass:"buttonBase compButton",attrs:{"data-v-facloseinput":""},on:{click:t.executeClose}},[t._v("締め処理実行")]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.enableRepoen,expression:"enableRepoen"}],staticClass:"buttonBase compButton",attrs:{"data-v-facloseinput":""},on:{click:t.reOpen}},[t._v("再オープン")]),t._v(" "),a("div",{staticClass:"buttonBase compButton",attrs:{"data-v-facloseinput":""},on:{click:t.refreshData}},[t._v("最新情報に更新")])])])},staticRenderFns:[]};var Y={name:"FAclose",mixins:[d],components:{ViewHeader:B,FAheader:S,FAcloseInput:a("VU/8")({name:"FAcloseInput",props:["bid"],data:function(){return{period:null,status:null,isOpen:!1,enableRepoen:!1}},created:function(){this.period="2018/09",this.status="Open",this.isOpen=!0,this.enableRepoen=!1},methods:{executeClose:function(){},reOpen:function(){},refreshData:function(){}}},j,!1,function(t){a("Axok")},"data-v-c2e8d830",null).exports,Modal:m,Loading:R},created:function(){var t=new Date;this.faHeader.year=t.getFullYear(),this.faHeader.month=t.getMonth()+1,this.faHeader.day=t.getDate()},data:function(){return{moduleName:"FA",viewName:"月次締め処理",faHeader:{year:null,month:null,day:null,bank:"",balance:10},bid:0}},methods:{changeBank:function(t){this.bid=t}}},q={render:function(){var t=this.$createElement,e=this._self._c||t;return e("section",{attrs:{"data-v-faclose":""}},[e("ViewHeader",{attrs:{moduleName:this.moduleName,viewName:this.viewName}}),this._v(" "),e("FAheader",{attrs:{header:this.faHeader},on:{"header-bank-change-event":this.changeBank}}),this._v(" "),e("FAcloseInput",{attrs:{bid:this.bid}})],1)},staticRenderFns:[]},z=a("VU/8")(Y,q,!1,null,null,null).exports,G={name:"Login",mixins:[d],components:{Modal:m,Loading:R},data:function(){return{loginId:"",passWord:"",showModal:!1,modalMsg:"",loading:!1,devAPI:!0}},created:function(){null!=this.apiUrls.login.match(/localhost/)?this.devAPI=!0:this.devAPI=!1},methods:{login:function(){this.loading=!0;var t=this;r.a.post(this.apiUrls.login,{userId:this.loginId,password:this.passWord}).then(function(e){if(200==e.status)return t.loading=!1,o.a.set("token",e.data.token,{expires:.5}),location.reload(),void window.scrollTo(0,0);t.loading=!1,t.modalMsg="Login ID、パスワードが正しくありません。",t.showModal=!0}).catch(function(e){t.loading=!1,t.modalMsg="alissサービスに接続できません。<br>時間をおいてから再度お試しください。",t.showModal=!0})},loginModalOk:function(){this.showModal=!1}}},J={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login-mask",attrs:{"data-v-login":""}},[a("div",{staticClass:"form-wrapper",attrs:{"data-v-login":""}},[a("h1",{attrs:{"data-v-login":""}},[t._v("Sign In")]),t._v(" "),a("form",{attrs:{"data-v-login":""}},[a("div",{staticClass:"form-item",attrs:{"data-v-login":""}},[a("label",{attrs:{for:"id"}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.loginId,expression:"loginId"}],attrs:{type:"text",name:"id",required:"required",placeholder:"Login ID","data-v-login":""},domProps:{value:t.loginId},on:{input:function(e){e.target.composing||(t.loginId=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-item",attrs:{"data-v-login":""}},[a("label",{attrs:{for:"password"}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.passWord,expression:"passWord"}],attrs:{type:"password",name:"password",required:"required",placeholder:"Password","data-v-login":""},domProps:{value:t.passWord},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.login(e):null},input:function(e){e.target.composing||(t.passWord=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"button-panel",attrs:{"data-v-login":""}},[a("input",{staticClass:"button",attrs:{type:"button",title:"Sign In",value:"Sign In","data-v-login":""},on:{click:t.login}})])]),t._v(" "),a("div",{staticClass:"form-footer",attrs:{"data-v-login":""}},[a("p",[t._v("aliss WEB Suite")]),t._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:t.devAPI,expression:"devAPI"}]},[t._v("Connect to dev APIs")])])]),t._v(" "),a("Modal",{directives:[{name:"show",rawName:"v-show",value:t.showModal,expression:"showModal"}],attrs:{mtypeIn:2},on:{"modal-ok-event":t.loginModalOk}},[a("p",{attrs:{slot:"header"},slot:"header"},[t._v("aliss Confirmation")]),t._v(" "),a("template",{slot:"body"},[a("p",{domProps:{innerHTML:t._s(t.modalMsg)}})])],2),t._v(" "),a("Loading",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}]})],1)},staticRenderFns:[]};var Q={name:"App",mixins:[d],components:{HelloWorld:c,TitleHeader:f,SideMenu:y,SideMenuF:w,FooterComp:x,Portal:C,Login:a("VU/8")(G,J,!1,function(t){a("XSLW")},"data-v-41b8b86c",null).exports,Modal:m,Loading:R,FAinput:O,FAclose:z},data:function(){return{pageId:{portal:!1,fa01:!1,fa03:!1},side:!1,login:!0,loading:!1,showModal:!1,modalMsg:"",userInfo:{userId:"",name:""}}},methods:{clickToggle:function(){this.side=!0},closeToggle:function(){this.side=!1},appModalOk:function(){this.showModal=!1}},created:function(){for(var t in this.pageId)this.pageId[t]=!1;var e=o.a.get("token");if(null!=e){this.loading=!0;var a=this;r.a.get(this.apiUrls.authToken,{headers:{Authorization:e}}).then(function(t){return 200!=t.status?(a.loading=!1,void(a.login=!1)):"S"!=t.data.status?(a.loading=!1,void(a.login=!1)):(a.login=!0,a.loading=!1,a.userInfo.userId=t.data.data.userId,void(a.userInfo.name=t.data.data.name))}).catch(function(t){a.modalMsg="alissサービスに接続できません。<br>時間をおいてから再度お試しください。",a.showModal=!0,a.loading=!1,a.login=!1});var n=new URLSearchParams(window.location.search).get("pId");null!=this.pageId[n]?this.pageId[n]=!0:this.pageId.portal=!0}else this.login=!1}},X={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("SideMenuF",{directives:[{name:"show",rawName:"v-show",value:t.side,expression:"side"}],on:{"menu-close-event":t.closeToggle}}),t._v(" "),a("TitleHeader",{attrs:{userName:t.userInfo.name},on:{"toggle-clicked-event":t.clickToggle}}),t._v(" "),a("div",{attrs:{id:"mainView"}},[a("div",{attrs:{id:"mainComp"}},[this.pageId.portal?a("Portal"):t._e(),t._v(" "),this.pageId.fa01?a("FAinput"):t._e(),t._v(" "),this.pageId.fa03?a("FAclose"):t._e()],1),t._v(" "),a("FooterComp")],1),t._v(" "),a("Login",{directives:[{name:"show",rawName:"v-show",value:!this.login,expression:"!this.login"}]}),t._v(" "),a("Modal",{directives:[{name:"show",rawName:"v-show",value:t.showModal,expression:"showModal"}],attrs:{mtypeIn:2},on:{"modal-ok-event":t.appModalOk}},[a("p",{attrs:{slot:"header"},slot:"header"},[t._v("aliss Confirmation")]),t._v(" "),a("template",{slot:"body"},[a("p",{domProps:{innerHTML:t._s(t.modalMsg)}})])],2),t._v(" "),a("Loading",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}]})],1)},staticRenderFns:[]};var Z=a("VU/8")(Q,X,!1,function(t){a("85CS")},null,null).exports;n.a.config.productionTip=!1,new n.a({el:"#app",components:{App:Z},template:"<App/>"})},XSLW:function(t,e){},aApf:function(t,e){},b516:function(t,e){},lFpd:function(t,e){},mZqF:function(t,e){},rIsq:function(t,e){},xDfQ:function(t,e){},yaDz:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.f1a35ee0735bc873eb03.js.map