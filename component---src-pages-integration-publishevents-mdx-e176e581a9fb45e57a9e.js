"use strict";(self.webpackChunkmas_playbook=self.webpackChunkmas_playbook||[]).push([[4488],{5294:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return l},default:function(){return c}});var A=a(3366),n=(a(7294),a(4983)),i=a(4295),r=["components"],l={},s={_frontmatter:l},o=i.Z;function c(e){var t=e.components,a=(0,A.Z)(e,r);return(0,n.kt)(o,Object.assign({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Publish Channels provide the outbound integration backbone of Maximo. They can be\nevent enabled such that when some Mbo’s change their state (ie they get added, updated or\ndeleted) these channels can trap those events and publish a message to the outbound JMS\nqueues. We can also do some offline exports using the channel from the Integration External systems application or from cron jobs invoking the export api of the channel.\nThe messages then get picked up from those queues and get pushed to their final\ndestination (using the endpoint/handler framework). Publish channels support the below script points:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Script Point"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Purpose"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Event Filters"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Used for smart filtering of publish channel events")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"External Exits"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Used for data transformation of outbound messages from Maximo format (",(0,n.kt)("inlineCode",{parentName:"td"},"irData"),") to external format ",(0,n.kt)("inlineCode",{parentName:"td"},"erData"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"User Exit (Before External Exit)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Used data updation without structural change to the Maximo format message (",(0,n.kt)("inlineCode",{parentName:"td"},"irData"),").")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"User Exit (After External Exit)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Used data transaformation from the output of the External Exit to target external format.")))),(0,n.kt)("h2",null,"Event Filters for Publish Channels"),(0,n.kt)("p",null,"Often we have the need to filter the events such that we want the channel to publish the\nmessage only when a certain state condition is met. This used to get achieved by writing event\nfilter classes in java. With 76 this thing can be scripted. To create a Filter script, use the “Script For Integration” -> “Publish Channel” -> “Event Filter” option in the scripting application. "),(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1131px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"70.1388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAOABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAECAwX/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAHelWwEH//EABcQAAMBAAAAAAAAAAAAAAAAAAEQEQD/2gAIAQEAAQUCCLt3/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFBABAAAAAAAAAAAAAAAAAAAAIP/aAAgBAQAGPwJf/8QAGhAAAwEAAwAAAAAAAAAAAAAAAAERIRBBcf/aAAgBAQABPyHhVwTfZfRQun//2gAMAwEAAgADAAAAEJMP/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPxA//8QAGxAAAgIDAQAAAAAAAAAAAAAAAREAcRAhQVH/2gAIAQEAAT8QBA3igUb2CfJeBDEofZ//2Q==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Event Filter",title:"Event Filter",src:"/static/1ab1d972352fe7a9d99feaa6e562bf4b/d5e06/evenfilter.jpg",srcSet:["/static/1ab1d972352fe7a9d99feaa6e562bf4b/69549/evenfilter.jpg 288w","/static/1ab1d972352fe7a9d99feaa6e562bf4b/473e3/evenfilter.jpg 576w","/static/1ab1d972352fe7a9d99feaa6e562bf4b/d5e06/evenfilter.jpg 1131w"],sizes:"(max-width: 1131px) 100vw, 1131px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,n.kt)("p",null,"Below is an example of such a filter script on the MXASSETInterface publish channel."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'if service.getMbo().isModified("status") and service.getMbo().getString("status")=="BROKEN":\n  evalresult = False\nevalresult = True\n')),(0,n.kt)("p",null,"Note that the evalresult being set to False will indicate the event to be published. So effectively\nthis script will filter all events that did not change the status to APPR for the workorder. You\nmight wonder that this could have been done using a channel rule or channel exit class. That is\ndefinitely possible for simplistic rules, although this comes a steep price. The rules get\nevaluated after the event has been serialized and then passed to the exit layer for evaluation.\nBy that time these rules get evaluated you already paid the price of serialization. So why do that\ncostly process when you can skip it before any processing has been done?"),(0,n.kt)("p",null,"Note that the event filters apply to event based publish channels. Publish channels that are\nused to export data cannot leverage these filters."),(0,n.kt)("p",null,"Also note that there is a bug which causes the “mbo” variable to be not accessible directly here.\nYou will have to use the service.getMbo() to get access to the event Mbo here. We will fix this\nbug in the 7609 release of Maximo."),(0,n.kt)("h2",null,"Exits for Publish Channels"),(0,n.kt)("p",null,"As explained above, there are 3 exit points for publish channel that can be scripted.\nThe purpose is mostly for data transformation, but it is not limited to that.\nOne can conceivably use the exit to make some direct calls to external services and then skip the rest of the Publish channel processing.\nBelow is a table that lists some of the implict variables that the publish channel scripts will have:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Variable"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Purpose"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"erData"),(0,n.kt)("td",{parentName:"tr",align:"left"},"an instance of psdi.iface.mic.StructureData used to hold the external document. The value of this variable is set to null for External Exits and Before User Exits in the channel.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"irData"),(0,n.kt)("td",{parentName:"tr",align:"left"},"an instance of psdi.iface.mic.StructureData used to hold the internal (maximo format) document.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ifaceType"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The interface type name.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ifaceName"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The channel name.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"osName"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The Object Structure name.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"messageType"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The message type which can have values like Sync/Publish.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"extSystem"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The external system name.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"userInfo"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The UserInfo object representing the authentocated user that invoked this service.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"conn"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The jdbc Connection object.")))),(0,n.kt)("p",null,"Below is a screenshot of the Integration Script Wizard for Publish Channel exits."),(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1119px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"68.40277777777779%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAOABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAECBf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAe9cUIP/xAAXEAADAQAAAAAAAAAAAAAAAAAAARAR/9oACAEBAAEFAlGabP/EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABQQAQAAAAAAAAAAAAAAAAAAACD/2gAIAQEABj8CX//EABoQAAICAwAAAAAAAAAAAAAAAAARECFRYYH/2gAIAQEAAT8hgzo6E2N5P//aAAwDAQACAAMAAAAQw8//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAbEAEAAgIDAAAAAAAAAAAAAAABABEhMRBBYf/aAAgBAQABPxAUOt8IYMVA9se0hF3H/9k=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Event Filter",title:"Event Filter",src:"/static/19a831155a274a7cd7378e8a5930a986/8467a/pubchannelexit.jpg",srcSet:["/static/19a831155a274a7cd7378e8a5930a986/69549/pubchannelexit.jpg 288w","/static/19a831155a274a7cd7378e8a5930a986/473e3/pubchannelexit.jpg 576w","/static/19a831155a274a7cd7378e8a5930a986/8467a/pubchannelexit.jpg 1119w"],sizes:"(max-width: 1119px) 100vw, 1119px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,n.kt)("p",null,"We are going to provide an example script that changes the description of operating assets on outbound transactions.\nIn this scenario, the MXASSET object structure provides ",(0,n.kt)("inlineCode",{parentName:"p"},"irData")," (instance of psdi.iface.mic.StructureData)\nto the MXASSET publish channel (MXASSETINTERFACE) for processing. An automation script is configured to run on the\nexternal exit class of the publish channel. The script checks the status of the asset in the ",(0,n.kt)("inlineCode",{parentName:"p"},"irData "),"element.\nIf the asset is in operating status, the script inserts a value in the description field and prints a message to the log file.\nThe erData element is then constructed and is forwarded to the external system. If this is done as an external exit - the name of the script would be PUBLISH.MXASSETINTERFACE.EXTEXIT.OUT."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'if irData.getCurrentData("STATUS") == \'OPERATING\' :\n  irData.setCurrentData("DESCRIPTION","hello")\n  service.log("MYASSET description change")\n')))}c.isMDXComponent=!0},4295:function(e,t,a){a.d(t,{Z:function(){return k}});var A=a(7294),n=a(8650),i=a.n(n),r=a(5444),l=a(6949),s=a(3293),o=a(5900),c=a.n(o),d=function(e){var t,a=e.title,n=e.theme,i=e.tabs,r=void 0===i?[]:i;return A.createElement("div",{className:c()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=r.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===n,t))},A.createElement("div",{className:"bx--grid"},A.createElement("div",{className:"bx--row"},A.createElement("div",{className:"bx--col-lg-12"},A.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},h=function(e){var t=e.relativePagePath,a=e.repository,n=(0,r.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,l=i.baseUrl,s=i.subDirectory,o=l+"/edit/"+i.branch+s+"/src/pages"+t;return l?A.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},A.createElement("div",{className:"bx--col"},A.createElement("a",{className:"EditLink-module--link--IDrl1",href:o},"Edit this page on GitHub"))):null},p=a(4275),m=a(1721),g=function(e){function t(){return e.apply(this,arguments)||this}return(0,m.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,l=n.split("/").filter(Boolean).slice(-1)[0],s=a.map((function(e){var t,a=i()(e,{lower:!0,strict:!0}),s=a===l,o=new RegExp(l+"/?(#.*)?$"),d=n.replace(o,a);return A.createElement("li",{key:e,className:c()((t={},t["PageTabs-module--selected-item--aBB0K"]=s,t),"PageTabs-module--list-item--024o6")},A.createElement(r.Link,{className:"PageTabs-module--link--Kz-7R",to:""+d},e))}));return A.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},A.createElement("div",{className:"bx--grid"},A.createElement("div",{className:"bx--row"},A.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},A.createElement("nav",{"aria-label":t},A.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(A.Component),u=g,f=a(2881),b=a(6958),E=a(36),N=function(e){var t=e.date,a=new Date(t);return t?A.createElement(E.X2,{className:"last-modified-date-module--row--XJoYQ"},A.createElement(E.sg,null,A.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},k=function(e){var t=e.pageContext,a=e.children,n=e.location,o=e.Title,c=t.frontmatter,m=void 0===c?{}:c,g=t.relativePagePath,E=t.titleType,k=m.tabs,v=m.title,x=m.theme,y=m.description,B=m.keywords,w=m.date,P=(0,b.Z)().interiorTheme,Q=(0,r.useStaticQuery)("2456312558").site.pathPrefix,j=Q?n.pathname.replace(Q,""):n.pathname,T=k?j.split("/").filter(Boolean).slice(-1)[0]||i()(k[0],{lower:!0}):"",D=x||P;return A.createElement(s.Z,{tabs:k,homepage:!1,theme:D,pageTitle:v,pageDescription:y,pageKeywords:B,titleType:E},A.createElement(d,{title:o?A.createElement(o,null):v,label:"label",tabs:k,theme:D}),k&&A.createElement(u,{title:v,slug:j,tabs:k,currentTab:T}),A.createElement(f.Z,{padded:!0},a,A.createElement(h,{relativePagePath:g}),A.createElement(N,{date:w})),A.createElement(p.Z,{pageContext:t,location:n,slug:j,tabs:k,currentTab:T}),A.createElement(l.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-integration-publishevents-mdx-e176e581a9fb45e57a9e.js.map