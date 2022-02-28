"use strict";(self.webpackChunkmas_playbook=self.webpackChunkmas_playbook||[]).push([[8046],{5631:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return r},default:function(){return p}});var n=a(3366),o=(a(7294),a(4983)),i=a(4295),s=["components"],r={},l={_frontmatter:r},c=i.Z;function p(e){var t=e.components,a=(0,n.Z)(e,s);return(0,o.kt)(c,Object.assign({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",null,"Scripting Best Practices"),(0,o.kt)("p",null,"Scripting allows users to extend maximo business logic using Python/JS or for that matter any other JSR 223 compliant scripting language. All the script code gets compiled to Java bytecode and are cached as part of Maximo runtime caches. So when the script is invoked – it’s the cached bytecode that is executed by the JVM using the JSR 223 bridge. Since the scripting code executes in the same thread as other Maximo business logic (written in Java), a poorly written script code can impact the performance of the system negatively. We have listed below a few common mistakes that we have seen. In general we need to follow the Maximo Performance guidelines as scripting in the end is equivalent to Maximo custom code. "),(0,o.kt)("h3",null,"Choosing the right launch point and event"),(0,o.kt)("p",null,"Launchpoints are script trigger points. Often choosing the right launch point can help avoid certain performance issues in scripting. For example, in Maximo 75 release of scripting, there was no support for attribute value initialization. This led many script developers to use the Object Launch point (OLP) Init event to initialize the Mbo attribute values. Though functionally there was not problem with that approach – it potentially can lead to performance issues when selecting a bunch of Mbo’s (in list tab or APIs/MIF, Escalations). The OLP init event script gets executed for every mbo that is selected in the MboSet – even though the attribute whose value was getting initialized by the script was not even used/shown. This can be avoided by changing the Object launch point to attribute launch point – Initialize Value event. A sample script code for that is shown below (thisvalue is the current attribute init value)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"if priority is not None:\n   thisvalue=2*priority\n")),(0,o.kt)("p",null,"The Mbo framework will invoke this script only when this attribute is referred to by the code or the UI. "),(0,o.kt)("p",null,"Another example of Launch point choice comes up in the Integration skipping events use case. Often, we would use the user exit scripting to determine if we need to skip an outbound integration message. However, at this point the system has already entailed the cost of serializing the Mbo’s. Instead we should use the Publish Channel Event Filter scripting which gets invoked right when the event is triggered and way before any serialization of Mbos happen. A sample script below shows the Event Filter scripting which works with the Mbo’s."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'if service.getMbo().getString("status")=="APPR":\n  evalresult=False\nevalresult=True\n')),(0,o.kt)("h3",null,"Avoid costly Object init events if invoked from list tab"),(0,o.kt)("p",null,"Often you may want to do costly Object init scripts only when the object is initialized from the main tab (UI) and not from the list tab. This is because in such cases the sample code below helps."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from psdi.common.context import UIContext\nif UIContext.getCurrentContext() is not None and UIContext.isFromListTab()==False:\n    ..costly initlization..\n")),(0,o.kt)("h3",null,"Watch out for conflicting launch point event scripts"),(0,o.kt)("p",null,"Scripting framework would allow attaching multiple scripts to the same launch point event. This poses a problem if the script code expects to execute in certain order after or before certain other script in the same launch point event. Since the Maximo event topic is an un-ordered map, the events get fired without a fixed order. This can potentially cause issues if the order dependency is not managed properly. One should evaluate the reason to attach multiple scripts for the same launch point event – and evaluate if it makes more sense to combine them into one script. The other option is to make sure there is no dependency between the scripts. "),(0,o.kt)("h3",null,"Avoid calling save in middle of a transaction"),(0,o.kt)("p",null,"This is a common coding pattern we see in scripts that can cause problems to Maximo transactions and event firing.\nIdeally when a maximo transaction is in progress, the script should try to be part of that encompassing transaction. The mbos created/updated by a script are automatically part of the encompassing transaction as long as those were created from the script launch point mbo/related mbo. If we create a Mbo using the MXServer.getMXServer().getMboSet(“…”) api would be outside the encompassing transaction uness they are added explicitly to the encompassing transaction like below"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"mbo.getMXTransaction().add(<newly created a mboset>)\n")),(0,o.kt)("h3",null,"Calling MboSet.count() many times"),(0,o.kt)("p",null,"We see a common programing mistake in the scripts where we are checking the count of a MboSet multiple times. Note that the count() call ends up firing a sql every time its called. So an optimal approach would be to invoke it once and store the value in a var and reusing that var for subsequent code flow. An example is shown below\n",(0,o.kt)("strong",{parentName:"p"},"Good code:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"cnt = mboset.count()\nif cnt<=1:\n  service.log(“skipping this as count is “+cnt)\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Bad code:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"if mboset.count()<=1:\n  service.log(“skipping this as count is “+mboset.count())\n")),(0,o.kt)("h3",null,"Closing the MboSet"),(0,o.kt)("p",null,"Maximo Mbo framework would always release the MboSets created after a transaction is complete. That is true as long as all the MboSet’s were created as a related set to launch point mbo or any related Mbo to the launch point mbo. If however the MboSet is created using the MXServer.getMXServer().getMboSet(..) api, the script code is responsible for closing and clearing that MboSet up. We suggest a try finally block to do that (a sample shown below)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"try:\n  ..some code..\nfinally:\n  mboset.cleanup()\n")),(0,o.kt)("p",null,"If this is not done, it tends to start building up and may result in OOM errors. "),(0,o.kt)("h3",null,"Avoid the Mozilla Compatibility Script for Nashorn"),(0,o.kt)("p",null,"Moving from Rhino (Java 7) to Nashorn (Java 8) is recommended for performance reasons. Nashorn performs better in Java 8 compared to Rhino. Leveraging the Mozilla compatibility script with Nashorn will give poor performance in Java 8. "),(0,o.kt)("h3",null,"Check if logging in enabled before logging"),(0,o.kt)("p",null,"We often see logging done inside the script without checking the log level. A sample below shows how that can impact performance"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'service.log("count of mbos "+mboset.count())\n')),(0,o.kt)("p",null,"Now this unfortunately would result in mboset.count() getting called – even though the script logging is diabled."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from psdi.util.logging import MXLoggerFactory\nlogger = MXLoggerFactory.getLogger("maximo.script");\ndebugEnabled = logger.isDebugEnabled()\n\nif debugEnabled:\n  service.log("count of mbos "+mboset.count())\n')),(0,o.kt)("p",null,"Starting 7612, we will add a function in the “service” variable that will allow one to check this easily like below"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"if service.isLoggingEnabled():\n  service.log(“count of mbos “+mboset.count())\n")))}p.isMDXComponent=!0},4295:function(e,t,a){a.d(t,{Z:function(){return y}});var n=a(7294),o=a(8650),i=a.n(o),s=a(5444),r=a(6949),l=a(3293),c=a(5900),p=a.n(c),h=function(e){var t,a=e.title,o=e.theme,i=e.tabs,s=void 0===i?[]:i;return n.createElement("div",{className:p()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=s.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===o,t))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},u=function(e){var t=e.relativePagePath,a=e.repository,o=(0,s.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||o,r=i.baseUrl,l=i.subDirectory,c=r+"/edit/"+i.branch+l+"/src/pages"+t;return r?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},m=a(4275),d=a(1721),g=function(e){function t(){return e.apply(this,arguments)||this}return(0,d.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,o=e.slug,r=o.split("/").filter(Boolean).slice(-1)[0],l=a.map((function(e){var t,a=i()(e,{lower:!0,strict:!0}),l=a===r,c=new RegExp(r+"/?(#.*)?$"),h=o.replace(c,a);return n.createElement("li",{key:e,className:p()((t={},t["PageTabs-module--selected-item--aBB0K"]=l,t),"PageTabs-module--list-item--024o6")},n.createElement(s.Link,{className:"PageTabs-module--link--Kz-7R",to:""+h},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},l))))))},t}(n.Component),b=g,f=a(2881),v=a(6958),w=a(36),k=function(e){var t=e.date,a=new Date(t);return t?n.createElement(w.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(w.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},y=function(e){var t=e.pageContext,a=e.children,o=e.location,c=e.Title,p=t.frontmatter,d=void 0===p?{}:p,g=t.relativePagePath,w=t.titleType,y=d.tabs,N=d.title,x=d.theme,M=d.description,E=d.keywords,S=d.date,P=(0,v.Z)().interiorTheme,T=(0,s.useStaticQuery)("2456312558").site.pathPrefix,C=T?o.pathname.replace(T,""):o.pathname,I=y?C.split("/").filter(Boolean).slice(-1)[0]||i()(y[0],{lower:!0}):"",L=x||P;return n.createElement(l.Z,{tabs:y,homepage:!1,theme:L,pageTitle:N,pageDescription:M,pageKeywords:E,titleType:w},n.createElement(h,{title:c?n.createElement(c,null):N,label:"label",tabs:y,theme:L}),y&&n.createElement(b,{title:N,slug:C,tabs:y,currentTab:I}),n.createElement(f.Z,{padded:!0},a,n.createElement(u,{relativePagePath:g}),n.createElement(k,{date:S})),n.createElement(m.Z,{pageContext:t,location:o,slug:C,tabs:y,currentTab:I}),n.createElement(r.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-bestpractice-overview-mdx-bc56177752e8a7c96543.js.map