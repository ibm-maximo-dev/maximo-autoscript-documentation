"use strict";(self.webpackChunkmas_playbook=self.webpackChunkmas_playbook||[]).push([[3335],{2720:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return m}});var r=a(3366),i=(a(7294),a(4983)),n=a(4295),o=["components"],s={},l={_frontmatter:s},c=n.Z;function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)(c,Object.assign({},l,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",null,"Overview"),(0,i.kt)("p",null,"An automation script is a piece of code that is interpreted and executed by the Maximo Manage scripting framework (at runtime) when a target event happens. The script framework can tap into various forms of events - attribute modifications, object modifications or just callbacks. These events and callbacks help script developers target the right extension points for their custom feature. The code and the associated configuration are stored in Manage database and the compiled scripts are cached at runtime. "),(0,i.kt)("p",null,"Getting into more specifics about the script itself - a script is a text file that you can edit inside Maximo or outside of Maximo ","[in your choice of editors and import back into Maximo]",". Every script has an associated attribute – scriptlanguage which helps the run-time figure out the appropriate script engine to invoke for processing the script. The value list for available script languages come from the providing script engines in the classpath. Its common for script engines to provide multiple alias or short names for the language support provided by that engine. For example the jython engine provides 2 names – jython and python – both referring to the same engine/script language. Selecting either one is fine and produces identical behavior. Most engines support script compilation which eventually converts the script to a executable bytecode ","[for the JVM]",". The ones that we support OOTB – JavaScript and Jython both support complied scripts. When the deployer is commiting the design process – in the background the framework would compile and cache the script. This process is often referred to as generating “hot” scripts which are ready to execute. Note if there is a compile failure the process will not commit and the deployer has to fix the script to proceed."))}m.isMDXComponent=!0},4295:function(e,t,a){a.d(t,{Z:function(){return x}});var r=a(7294),i=a(8650),n=a.n(i),o=a(5444),s=a(6949),l=a(3293),c=a(5900),m=a.n(c),d=function(e){var t,a=e.title,i=e.theme,n=e.tabs,o=void 0===n?[]:n;return r.createElement("div",{className:m()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=o.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===i,t))},r.createElement("div",{className:"bx--grid"},r.createElement("div",{className:"bx--row"},r.createElement("div",{className:"bx--col-lg-12"},r.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},p=function(e){var t=e.relativePagePath,a=e.repository,i=(0,o.useStaticQuery)("1364590287").site.siteMetadata.repository,n=a||i,s=n.baseUrl,l=n.subDirectory,c=s+"/edit/"+n.branch+l+"/src/pages"+t;return s?r.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},r.createElement("div",{className:"bx--col"},r.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},u=a(4275),h=a(1721),g=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,i=e.slug,s=i.split("/").filter(Boolean).slice(-1)[0],l=a.map((function(e){var t,a=n()(e,{lower:!0,strict:!0}),l=a===s,c=new RegExp(s+"/?(#.*)?$"),d=i.replace(c,a);return r.createElement("li",{key:e,className:m()((t={},t["PageTabs-module--selected-item--aBB0K"]=l,t),"PageTabs-module--list-item--024o6")},r.createElement(o.Link,{className:"PageTabs-module--link--Kz-7R",to:""+d},e))}));return r.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},r.createElement("div",{className:"bx--grid"},r.createElement("div",{className:"bx--row"},r.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},r.createElement("nav",{"aria-label":t},r.createElement("ul",{className:"PageTabs-module--list--xLqxG"},l))))))},t}(r.Component),f=g,b=a(2881),v=a(6958),E=a(36),y=function(e){var t=e.date,a=new Date(t);return t?r.createElement(E.X2,{className:"last-modified-date-module--row--XJoYQ"},r.createElement(E.sg,null,r.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},x=function(e){var t=e.pageContext,a=e.children,i=e.location,c=e.Title,m=t.frontmatter,h=void 0===m?{}:m,g=t.relativePagePath,E=t.titleType,x=h.tabs,k=h.title,w=h.theme,T=h.description,N=h.keywords,P=h.date,M=(0,v.Z)().interiorTheme,Z=(0,o.useStaticQuery)("2456312558").site.pathPrefix,C=Z?i.pathname.replace(Z,""):i.pathname,B=x?C.split("/").filter(Boolean).slice(-1)[0]||n()(x[0],{lower:!0}):"",D=w||M;return r.createElement(l.Z,{tabs:x,homepage:!1,theme:D,pageTitle:k,pageDescription:T,pageKeywords:N,titleType:E},r.createElement(d,{title:c?r.createElement(c,null):k,label:"label",tabs:x,theme:D}),x&&r.createElement(f,{title:k,slug:C,tabs:x,currentTab:B}),r.createElement(b.Z,{padded:!0},a,r.createElement(p,{relativePagePath:g}),r.createElement(y,{date:P})),r.createElement(u.Z,{pageContext:t,location:i,slug:C,tabs:x,currentTab:B}),r.createElement(s.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-introduction-whatisautoscript-mdx-37c945fe4b4ca088fa4e.js.map