"use strict";(self.webpackChunkmas_playbook=self.webpackChunkmas_playbook||[]).push([[9918],{359:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return r},default:function(){return p}});var l=a(3366),n=(a(7294),a(4983)),i=a(4295),o=["components"],r={},s={_frontmatter:r},A=i.Z;function p(e){var t=e.components,a=(0,l.Z)(e,o);return(0,n.kt)(A,Object.assign({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",null,"Debugging A Script"),(0,n.kt)("p",null,"By default all script related logging is done via the autoscript logger. Every script\ncan be configured at different log levels – DEBUG,INFO,ERROR etc. The default\nsetup for any script is at ERROR which can be changed from management\napplication or at the time of creation ","[in the 2nd step of the wizard]",".\nIf we were to just debug the script below"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"y=float(iplr)+float(olr)\nif y!=float(plr):\n  pnr=str(y)\n")),(0,n.kt)("p",null,"We can put some debug statements like "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'print "iplr="+iplr\nprint "olr="+olr\ny=float(iplr)+float(olr)\nprint "y="+y\nif y!=float(plr):\n  pnr=str(y)\n  print “pnr=”+pnr\n')),(0,n.kt)("p",null,"Next we need to make sure that the log level for the autoscript logger is set to\nthe log level of the script. For example set both of them to INFO.\nThis will result in the print statements to show up in your systemout log. If\nrequired, the log statements produced by this logger can be re-directed to a\ndedicated log file holding only script-related log statements. Note that the syntax\nof the print statement depends upon which language the script is being written\nwith. Also if the “autoscript” logger is set to ERROR level logs only, then the print\nstatements inside the automation script will not be written out to log file. "),(0,n.kt)("p",null,"As explained earlier, this way of logging is not ideal as the scripting framework would not log this in real time.\nIt will log it after the script execution completes.\nThis does not create an ideal debugging session specially for long running scripts.\nScript developers should leverage the ",(0,n.kt)("inlineCode",{parentName:"p"},"service.log")," set of apis to log real time.\nNote that recent enhancements allow the logger to be set at the individual script scope.\nAll we need to do is to create a logger with the script name and set the log level accordingly.\nIn the screen shot below, we create a logger for a script called ABCD and set the log level to INFO."),(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1146px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"58.68055555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAMABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAECAwX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAB6z0SSUH/xAAaEAABBQEAAAAAAAAAAAAAAAADAAECEBMR/9oACAEBAAEFAmGN1lBZDrtf/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAGRAAAgMBAAAAAAAAAAAAAAAAMpEAAQIg/9oACAEBAAY/AgpQMqBlcf/EABwQAAIBBQEAAAAAAAAAAAAAAAABESFhcZHh8f/aAAgBAQABPyFJK0zxguUJqYImyP/aAAwDAQACAAMAAAAQW/8A/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPxA//8QAHhAAAgIABwAAAAAAAAAAAAAAAAERITFhkaGxwfD/2gAIAQEAAT8Qdmylq0coRFAvxZGMoWhJPoFO9g//2Q==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Script Logger",title:"Script Logger",src:"/static/c86b55187510a8e390e158ac2328bc02/8e472/scriptlog.jpg",srcSet:["/static/c86b55187510a8e390e158ac2328bc02/69549/scriptlog.jpg 288w","/static/c86b55187510a8e390e158ac2328bc02/473e3/scriptlog.jpg 576w","/static/c86b55187510a8e390e158ac2328bc02/8e472/scriptlog.jpg 1146w"],sizes:"(max-width: 1146px) 100vw, 1146px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,n.kt)("p",null,"Note that the base autoscript logger is set at ERROR level.\nWe next set the script ABC log level to INFO from the scripting application. The script code is shown below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'service.log("hey there - I am in Asset "+mbo.getString("assetnum"))\n')),(0,n.kt)("p",null,"We bind this script to ASSET Init event using Object Launchpoint. When we initialize assets (say from the list table in ASSET application) we will see this log real time.\nBut other scripts would not show any logs as the logger is set for that ABCD script only."),(0,n.kt)("p",null,"Ideally one would expect some form of support for remote debugging using breakpoints from an IDE. At this point there is no support for that.\nWe are aware of remote debugging support for Nashorn js from IDE’s like IntelliJ but we have not verified those in our labs yet."),(0,n.kt)("h2",null,"Logs from Scripting Framework"),(0,n.kt)("p",null,"The scripting framework logs cover script loading, initialization, execution time\nand so forth. To see the values being passed received by script variables, set the\nautoscript logger to ‘DEBUG’, apply the logging settings and run the script\nconfiguration. Variable values should be output to the log file or system console.\nAs a general rule of thumb we can set the autoscript logger to INFO during script\ndevelopment/debugging time and set inidvidual scripts log level to INFO too\nwhich will push the script specific print statements to the log file.\nBelow is the list of log information automatically generated at the DEBUG level\nfrom the scripting framework."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Launch point name and script name that are about to be executed"),(0,n.kt)("li",{parentName:"ol"},"Script execution time (as time elapsed between start and end of script\nexecution)"),(0,n.kt)("li",{parentName:"ol"},"Application name, logged in use name, MBO name, MBO unique ID\nvalues always injected as implicit data to the script - script author may or may not\nuse these"),(0,n.kt)("li",{parentName:"ol"},"Variable values passed into the script based on variable bindings\n(variables that are sourced from MBO attribute, MAXVAR, system property or\nliteral)")),(0,n.kt)("p",null,"To redirect your scripting logs to a separate log file follow the steps below."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to Logging app."),(0,n.kt)("li",{parentName:"ol"},"Click Manage Appenders from the Select Action menu."),(0,n.kt)("li",{parentName:"ol"},"Click New Row in the Manage Appenders popup dialog."),(0,n.kt)("li",{parentName:"ol"},"Fill in Details as:",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"Appender = ScriptingOnly ","[or any appropriate name you choose]"),(0,n.kt)("li",{parentName:"ol"},"Appender Implementation Class = psdi.util.logging.MXFileAppender ","[you\ncan select this from the value list]"),(0,n.kt)("li",{parentName:"ol"},"File Name = autoscript.log ","[or any appropriate file name you choose]"),(0,n.kt)("li",{parentName:"ol"},"Accept all other defaults."))),(0,n.kt)("li",{parentName:"ol"},"Save the new appender by clicking OK."),(0,n.kt)("li",{parentName:"ol"},"Locate ‘autoscript’ logger in the Root Loggers section of the application."),(0,n.kt)("li",{parentName:"ol"},"Click the Manage Appenders icon to the right of Appenders field in the\nDetails section for ‘autoscript’ logger."),(0,n.kt)("li",{parentName:"ol"},"Select only the appender you created earlier (ScriptingOnly), and de-select\nany other appender previously associated with this logger."),(0,n.kt)("li",{parentName:"ol"},"Click OK to save the new association. From the Select Action menu click\n“Apply” for the log settings to take effect.")))}p.isMDXComponent=!0},4295:function(e,t,a){a.d(t,{Z:function(){return y}});var l=a(7294),n=a(8650),i=a.n(n),o=a(5444),r=a(6949),s=a(3293),A=a(5900),p=a.n(A),c=function(e){var t,a=e.title,n=e.theme,i=e.tabs,o=void 0===i?[]:i;return l.createElement("div",{className:p()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=o.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===n,t))},l.createElement("div",{className:"bx--grid"},l.createElement("div",{className:"bx--row"},l.createElement("div",{className:"bx--col-lg-12"},l.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},g=function(e){var t=e.relativePagePath,a=e.repository,n=(0,o.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,r=i.baseUrl,s=i.subDirectory,A=r+"/edit/"+i.branch+s+"/src/pages"+t;return r?l.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},l.createElement("div",{className:"bx--col"},l.createElement("a",{className:"EditLink-module--link--IDrl1",href:A},"Edit this page on GitHub"))):null},m=a(4275),d=a(1721),u=function(e){function t(){return e.apply(this,arguments)||this}return(0,d.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],s=a.map((function(e){var t,a=i()(e,{lower:!0,strict:!0}),s=a===r,A=new RegExp(r+"/?(#.*)?$"),c=n.replace(A,a);return l.createElement("li",{key:e,className:p()((t={},t["PageTabs-module--selected-item--aBB0K"]=s,t),"PageTabs-module--list-item--024o6")},l.createElement(o.Link,{className:"PageTabs-module--link--Kz-7R",to:""+c},e))}));return l.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},l.createElement("div",{className:"bx--grid"},l.createElement("div",{className:"bx--row"},l.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},l.createElement("nav",{"aria-label":t},l.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(l.Component),h=u,f=a(2881),b=a(6958),E=a(36),w=function(e){var t=e.date,a=new Date(t);return t?l.createElement(E.X2,{className:"last-modified-date-module--row--XJoYQ"},l.createElement(E.sg,null,l.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},y=function(e){var t=e.pageContext,a=e.children,n=e.location,A=e.Title,p=t.frontmatter,d=void 0===p?{}:p,u=t.relativePagePath,E=t.titleType,y=d.tabs,k=d.title,N=d.theme,v=d.description,B=d.keywords,x=d.date,P=(0,b.Z)().interiorTheme,j=(0,o.useStaticQuery)("2456312558").site.pathPrefix,D=j?n.pathname.replace(j,""):n.pathname,Q=y?D.split("/").filter(Boolean).slice(-1)[0]||i()(y[0],{lower:!0}):"",S=N||P;return l.createElement(s.Z,{tabs:y,homepage:!1,theme:S,pageTitle:k,pageDescription:v,pageKeywords:B,titleType:E},l.createElement(c,{title:A?l.createElement(A,null):k,label:"label",tabs:y,theme:S}),y&&l.createElement(h,{title:k,slug:D,tabs:y,currentTab:Q}),l.createElement(f.Z,{padded:!0},a,l.createElement(g,{relativePagePath:u}),l.createElement(w,{date:x})),l.createElement(m.Z,{pageContext:t,location:n,slug:D,tabs:y,currentTab:Q}),l.createElement(r.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-troubleshooting-debugscript-mdx-779e58d509515376513b.js.map