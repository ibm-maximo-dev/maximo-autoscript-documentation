"use strict";(self.webpackChunkmas_playbook=self.webpackChunkmas_playbook||[]).push([[9983],{3529:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return i},default:function(){return c}});var A=a(3366),n=(a(7294),a(4983)),o=a(4295),r=["components"],i={},l={_frontmatter:i},s=o.Z;function c(e){var t=e.components,a=(0,A.Z)(e,r);return(0,n.kt)(s,Object.assign({},l,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The role automation script feature requires Manage 8.2.0 or Maximo 7.6.1.3. Roles play an important part in Workflow and Communication Templates. Roles often resolve to a specific person or email based on data in the record, such as the supervisor on the Work Order. In those cases, this functionality is not needed."),(0,n.kt)("p",null,"You would use this functionality when the scenario becomes more complicated, such as if you want to check the person’s supervisor hierarchy until you get to someone with sufficient approval limits that can approve the PO. When you only need to return a single value, you could create a non-persistent attribute and populate that attribute using an Attribute launch point. However, that would require an outage for the database configuration and would not support returning more than a single value. This is where the Role Automation Script comes in."),(0,n.kt)("p",null,"To create a role-based Automation Script, create a role with Custom class type and the value as “com.ibm.tivoli.maximo.script.ScriptCustomRole”. "),(0,n.kt)("p",null,(0,n.kt)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"694px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"60.06944444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAMABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAEF/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAB3LKAf//EABQQAQAAAAAAAAAAAAAAAAAAACD/2gAIAQEAAQUCX//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABQQAQAAAAAAAAAAAAAAAAAAACD/2gAIAQEABj8CX//EABQQAQAAAAAAAAAAAAAAAAAAACD/2gAIAQEAAT8hX//aAAwDAQACAAMAAAAQ4A//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAZEAADAAMAAAAAAAAAAAAAAAABECEAYYH/2gAIAQEAAT8QAncm0YX/AP/Z')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Role Definition",title:"Role Definition",src:"/maximo-autoscript-documentation/static/483763bef4616f67bafa13ccc2431e7d/4191f/roledefinition.jpg",srcSet:["/maximo-autoscript-documentation/static/483763bef4616f67bafa13ccc2431e7d/69549/roledefinition.jpg 288w","/maximo-autoscript-documentation/static/483763bef4616f67bafa13ccc2431e7d/473e3/roledefinition.jpg 576w","/maximo-autoscript-documentation/static/483763bef4616f67bafa13ccc2431e7d/4191f/roledefinition.jpg 694w"],sizes:"(max-width: 694px) 100vw, 694px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")," "),(0,n.kt)("p",null,"The name of the role, which is EMXROLE in this example, will be utilized in defining the automation script. The script is created without a launch point in the name format MAXROLE.ROLENAME. For example, in this case MAXROLE.EMXROLE."),(0,n.kt)("h4",null,"IMPORTANT: Ensure that you enable the ability to invoke script functions. This is disabled by default and the script will not execute without this. You cannot change this after creation, so you will need to delete and recreate the automation script if you forgot to enable it."),(0,n.kt)("p",null,(0,n.kt)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"29.51388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAGABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAMF/8QAFAEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAAB3oCNwH//xAAXEAEBAQEAAAAAAAAAAAAAAAABAAID/9oACAEBAAEFAo6ju//EABURAQEAAAAAAAAAAAAAAAAAAAEQ/9oACAEDAQE/AWf/xAAXEQADAQAAAAAAAAAAAAAAAAABAhEQ/9oACAECAQE/AVFuf//EABcQAAMBAAAAAAAAAAAAAAAAAAAQERL/2gAIAQEABj8CMxf/xAAYEAADAQEAAAAAAAAAAAAAAAAAAREhMf/aAAgBAQABPyFcJu1r00//2gAMAwEAAgADAAAAEIwv/8QAFhEBAQEAAAAAAAAAAAAAAAAAARAR/9oACAEDAQE/EEiZP//EABYRAQEBAAAAAAAAAAAAAAAAAAEQEf/aAAgBAgEBPxABqf/EABkQAAMBAQEAAAAAAAAAAAAAAAABESFR8f/aAAgBAQABPxB08ErKoqTPCpw//9k=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Role Script Creation",title:"Role Script Creation",src:"/maximo-autoscript-documentation/static/6b258457c1b529856ed5784be3af8155/2e753/rolescriptcreate.jpg",srcSet:["/maximo-autoscript-documentation/static/6b258457c1b529856ed5784be3af8155/69549/rolescriptcreate.jpg 288w","/maximo-autoscript-documentation/static/6b258457c1b529856ed5784be3af8155/473e3/rolescriptcreate.jpg 576w","/maximo-autoscript-documentation/static/6b258457c1b529856ed5784be3af8155/2e753/rolescriptcreate.jpg 1152w","/maximo-autoscript-documentation/static/6b258457c1b529856ed5784be3af8155/99d21/rolescriptcreate.jpg 1370w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")," "),(0,n.kt)("p",null,"There are two functions that you can declare in your script that will be invoked. You can declare evalToEmail or evalToPerson functions. Those functions will be passed as a variable that will expose the methods from the ScriptRoleContext. ScriptRoleContext extends ScriptService so all of those methods are available as well."),(0,n.kt)("h2",null,"Public methods available in ScriptRoleContext"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Method name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameters (Type)"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"getMaxRole"),(0,n.kt)("td",{parentName:"tr",align:"left"},"None"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Returns the MAXROLE Mbo. This class exposes a variety of methods that can be utilized such as getPerson(personid) to get a person MBO.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"addEmailId"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Email (String)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Adds a new email address to the array to be sent.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"getEmailIds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"None"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Returns the string array of the emails that have been added.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"setPersonOrGroupMbo"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Mbo (Mbo)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Sets either a Person MBO or PersonGroup MBO.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"getPersonOrGroupMbo"),(0,n.kt)("td",{parentName:"tr",align:"left"},"None"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Returns the Person or PersonGroup MBO that has been set.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"getMbo"),(0,n.kt)("td",{parentName:"tr",align:"left"},"None"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Comes from ScriptService but will be commonly used. This returns the MBO record (IE WORKORDER) for resolving.")))),(0,n.kt)("h2",null,"Example script"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'def evalToPerson(ctx):\n    # This method comes from the ScriptService \n    mbo=ctx.getMbo()\n\n    personGroup=None\n    if mbo.getString("SITEID")=="BEDFORD":\n        personSet=mbo.getMboSet("$EMXPERSONGROUP","PERSONGROUP","persongroup=\'TIER1\'")\n        personGroup=personSet.moveFirst()\n    else:\n        personSet=mbo.getMboSet("$EMXPERSONGROUP","PERSONGROUP","persongroup=\'TIER2\'")\n        personGroup=personSet.moveFirst()\n\n    # This comes from the ScriptRoleContext\n    ctx.setPersonOrGroupMbo(personGroup)\n')))}c.isMDXComponent=!0},4295:function(e,t,a){a.d(t,{Z:function(){return k}});var A=a(7294),n=a(8650),o=a.n(n),r=a(5444),i=a(6949),l=a(3293),s=a(5900),c=a.n(s),m=function(e){var t,a=e.title,n=e.theme,o=e.tabs,r=void 0===o?[]:o;return A.createElement("div",{className:c()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=r.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===n,t))},A.createElement("div",{className:"bx--grid"},A.createElement("div",{className:"bx--row"},A.createElement("div",{className:"bx--col-lg-12"},A.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},p=function(e){var t=e.relativePagePath,a=e.repository,n=(0,r.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||n,i=o.baseUrl,l=o.subDirectory,s=i+"/edit/"+o.branch+l+"/src/pages"+t;return i?A.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},A.createElement("div",{className:"bx--col"},A.createElement("a",{className:"EditLink-module--link--IDrl1",href:s},"Edit this page on GitHub"))):null},d=a(4275),u=a(1721),g=function(e){function t(){return e.apply(this,arguments)||this}return(0,u.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,i=n.split("/").filter(Boolean).slice(-1)[0],l=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),l=a===i,s=new RegExp(i+"/?(#.*)?$"),m=n.replace(s,a);return A.createElement("li",{key:e,className:c()((t={},t["PageTabs-module--selected-item--aBB0K"]=l,t),"PageTabs-module--list-item--024o6")},A.createElement(r.Link,{className:"PageTabs-module--link--Kz-7R",to:""+m},e))}));return A.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},A.createElement("div",{className:"bx--grid"},A.createElement("div",{className:"bx--row"},A.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},A.createElement("nav",{"aria-label":t},A.createElement("ul",{className:"PageTabs-module--list--xLqxG"},l))))))},t}(A.Component),h=g,E=a(2881),b=a(6958),f=a(36),N=function(e){var t=e.date,a=new Date(t);return t?A.createElement(f.X2,{className:"last-modified-date-module--row--XJoYQ"},A.createElement(f.sg,null,A.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},k=function(e){var t=e.pageContext,a=e.children,n=e.location,s=e.Title,c=t.frontmatter,u=void 0===c?{}:c,g=t.relativePagePath,f=t.titleType,k=u.tabs,Q=u.title,x=u.theme,B=u.description,y=u.keywords,w=u.date,v=(0,b.Z)().interiorTheme,R=(0,r.useStaticQuery)("2456312558").site.pathPrefix,P=R?n.pathname.replace(R,""):n.pathname,j=k?P.split("/").filter(Boolean).slice(-1)[0]||o()(k[0],{lower:!0}):"",C=x||v;return A.createElement(l.Z,{tabs:k,homepage:!1,theme:C,pageTitle:Q,pageDescription:B,pageKeywords:y,titleType:f},A.createElement(m,{title:s?A.createElement(s,null):Q,label:"label",tabs:k,theme:C}),k&&A.createElement(h,{title:Q,slug:P,tabs:k,currentTab:j}),A.createElement(E.Z,{padded:!0},a,A.createElement(p,{relativePagePath:g}),A.createElement(N,{date:w})),A.createElement(d.Z,{pageContext:t,location:n,slug:P,tabs:k,currentTab:j}),A.createElement(i.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-otherlaunch-rolelaunch-mdx-7bc19e920d281d206a2c.js.map