"use strict";(self.webpackChunkmas_playbook=self.webpackChunkmas_playbook||[]).push([[3100],{2794:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return l},default:function(){return d}});var n=a(3366),r=(a(7294),a(4983)),s=a(4295),i=["components"],l={},o={_frontmatter:l},p=s.Z;function d(e){var t=e.components,a=(0,n.Z)(e,i);return(0,r.kt)(p,Object.assign({},o,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We can write MIF endpoint handlers using automation script. For example say we want to write\na handler for sending emails. This is something that is not there out of the box in Maximo. The\nsteps to do for this would be:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"1.Use the Add/Modify handlers action from the endpoint application to add a new handler. We are going to name it SCRIPT and we are going to set the class name to be com.ibm.tivoli.maximo.script.ScriptRouterHandler. Note that this handler is there OOTB in any maximo 7612 onwards."),(0,r.kt)("li",{parentName:"ol"},"2.We are now going to create a new endpoint for that handler Endpoints app."),(0,r.kt)("li",{parentName:"ol"},"3.We set the handler to be SCRIPT."),(0,r.kt)("li",{parentName:"ol"},"4.We need to set the “script” property to the name of the script that we are going to write. For example say we name the script “emailme”."),(0,r.kt)("li",{parentName:"ol"},"5.We now got to create a script named “emailme”.")),(0,r.kt)("p",null,"Below table shows the implicit variables specific to these endpoint scripts."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Variable"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Purpose"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"requestData"),(0,r.kt)("td",{parentName:"tr",align:"left"},"byte[] data for endpoints.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"requestDataS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String data for endpoints. Note if the byte[] cannot be converted to String - this variable is not set")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"responseData"),(0,r.kt)("td",{parentName:"tr",align:"left"},"This is a OUT implicit variable. The endpoint script code can set it to store the response from the actual endpoint call. This can be set as a String or a byte[].")))),(0,r.kt)("p",null,"All endpoint ",(0,r.kt)("inlineCode",{parentName:"p"},"metaData")," content is set as variables to the script. This would imply that in case of Publish Channel endpoints - all JMS/Kafka messages headers will be set as variables in the script.\nThis would imply that variables like ",(0,r.kt)("inlineCode",{parentName:"p"},"destination")," would be available and set to the external system name for that endpoint script. "),(0,r.kt)("p",null,"The script code can be as simple as"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from psdi.server import MXServer\nfrom java.lang import String\n\nMXServer.getMXServer().sendEMail( to,from,subject, String(requestData))\n")),(0,r.kt)("p",null,"Note in here, we can define the from and to as literal variables in the script and then set the\nemail addresses there. We can also define another literal variable called subject to define a\nstatic subject for the email like “Email from Maximo”. We can make it more dynamic and fancy\nby getting the ",(0,r.kt)("inlineCode",{parentName:"p"},"to")," email from the data etc."),(0,r.kt)("p",null,"Another example below show cases how to write a custom web service handler that uses WS-Security UserNameToken -\nwhich is not supported out of the box in MIF WebService Handler. The script code below leverages the JAXWSClient utility to set WS-Security UserNameToken."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from org.jdom import Element\nfrom org.jdom import Namespace\nfrom psdi.iface.webservices import JAXWSClient\nfrom java.util import HashMap\nfrom java.util import ArrayList\nfrom psdi.iface.util import XMLUtils\nfrom javax.xml.namespace import QName\n\nns = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"\n\nsecQName = QName(ns, "Security")\nsec = Element("Security",ns)\n\nwsu = Namespace.getNamespace("wsu","http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd")\nsec.addNamespaceDeclaration(wsu)\nunt = Element("UsernameToken", ns)\nsec.addContent(unt)\nunt.setAttribute("Id", "UsernameToken-61F4CA1CC16641CEA914170628622665", wsu)\nun = Element("Username", ns)\nun.setText("testusermaximo")\nunt.addContent(un)\n        \npwd = Element("Password", ns)\nunt.addContent(pwd)\npwd.setAttribute("Type","http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText")\npwd.setText("WinterTime15")\ncl = JAXWSClient()\n\nlist = ArrayList()\nlist.add(XMLUtils.convertElementToString(sec))\nsoapHeaders = HashMap()\nsoapHeaders.put(secQName, list)\n\nlist = ArrayList()\nlist.add("d2lsc29uOndpbHNvbg==")\nhttpHeaders = HashMap()\nhttpHeaders.put("maxauth", list)\n\n\nresponseData = cl.invoke(requestData, "test", "http://host:port/meaweb/services/SYSTEM", "urn:action", "SOAP11", None, None, None, httpHeaders, 10000, 10000, soapHeaders, None)\n')),(0,r.kt)("p",null,"As apparent from above, the code leverages the jdom library that ships with Maximo Manage to create the security header.\nThe script code above hard codes the user/password, but that can be script literal variables.\nSame goes with the urls to invoke (like in this case /meaweb/services/SYSTEM) and other input parameters to the cl.invoke(..) call.\nThe code shows how to add the soap headers as well as http headers as an example."),(0,r.kt)("h2",null,"HTTP Handler Exit"),(0,r.kt)("p",null,"HTTP handler provides an exit that can be leveraged to intercept and modify the request and response.\nThe HTTPEXIT property of the handler endpoint can be set to a value like script:{script name} to register a scripted exit for the http endpoint.\nBelow we provide the set of callback functions that such a script will support."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Script Http Handler Exit methods"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Purpose"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"urlProps(req)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Used for adding query params to a configured url. The req object is the implemented by ",(0,r.kt)("inlineCode",{parentName:"td"},"psdi.iface.router. ScriptHTTPReq"),". Use the api ",(0,r.kt)("inlineCode",{parentName:"td"},"req.addUrlProp(propname,propvalue)")," to set the URL query parameters.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"getUrl(req)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Used for setting the url for http call. Use the api ",(0,r.kt)("inlineCode",{parentName:"td"},"req.setUrl(url)")," to set the new URL.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"headerProps(req)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Used for setting request headers for the http call. Use the api ",(0,r.kt)("inlineCode",{parentName:"td"},"req.addHeader(propname,propvalue)")," to set the http request headers.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"processResponse(resp)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Used for processing http response. The resp object is implemented by ",(0,r.kt)("inlineCode",{parentName:"td"},"psdi.iface.router.ScriptHTTPResp"),". Use the api resp.setError(java.util.Exception) to mark the response for Error and the Error message. We can use the resp.getData() to get the response data and analyze that in the script.")))),(0,r.kt)("h3",null,"ScriptHTTPReq details"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"ScriptHTTPReq methods"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Purpose"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"getData()"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Used to get byte[] data that has been passed to the endpoint.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"getSData()"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Used to get String data that has been passed to the endpoint.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"getMetaData()"),(0,r.kt)("td",{parentName:"tr",align:"left"},"used for getting the metadata ",(0,r.kt)("inlineCode",{parentName:"td"},"java.util.Map")," object that was passed in to the endpoint. This contains some of the jms/kafka message headers.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"getEndPointName())"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Used for getting the endpoint name (string).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"setURL(String url)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"sets the url to be called. This override the url if that is set in the endpoint configuration")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"getURL()"),(0,r.kt)("td",{parentName:"tr",align:"left"},"return the url (string) to be invoked.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"addHeader(String name, String value)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"add an http header/value pair to the request.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"getHeaderProps()"),(0,r.kt)("td",{parentName:"tr",align:"left"},"get the http header/value ",(0,r.kt)("inlineCode",{parentName:"td"},"java.util.Map")," for the request.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"addUrlProp(String name, String value)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"add an http url query param/value pair to the request.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"getUrlProps()"),(0,r.kt)("td",{parentName:"tr",align:"left"},"get the http query param/value ",(0,r.kt)("inlineCode",{parentName:"td"},"java.util.Map")," for the request.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"addFormProp(String name, String value)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"add an http form param/value pair to the request.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"getFormProps()"),(0,r.kt)("td",{parentName:"tr",align:"left"},"get the http form param/value ",(0,r.kt)("inlineCode",{parentName:"td"},"java.util.Map")," for the request.")))),(0,r.kt)("h3",null,"ScriptHTTPResp details"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"ScriptHTTPResp methods"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Purpose"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"getData()"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Used to get byte[] data response.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"getMetaData()"),(0,r.kt)("td",{parentName:"tr",align:"left"},"used for getting the metadata ",(0,r.kt)("inlineCode",{parentName:"td"},"java.util.Map")," object that was passed in to the endpoint. This contains some of the jms/kafka message headers.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"getEndPointName)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Used for getting the endpoint name (string).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"geResponseMsg()"),(0,r.kt)("td",{parentName:"tr",align:"left"},"returns the response status message from the http call")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"getResponseCode()"),(0,r.kt)("td",{parentName:"tr",align:"left"},"return the http response code.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"setError(Exception e)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"sets the error ( ",(0,r.kt)("inlineCode",{parentName:"td"},"java.lang.Exception instance"),") by analyzing the http response.")))),(0,r.kt)("h2",null,"Web Service Handler Exit"),(0,r.kt)("p",null,"Similar to HTTP Handler, Web Service handler also provides an exit that can be leveraged to intercept and modify the SOAP request and response.\nThe WSEXIT property of the handler endpoint can be set to a value like script:{script name} to register a scripted exit for the web service endpoint.\nBelow we provide the set of callback functions that such a script will support."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Script Web Service Handler Exit methods"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Purpose"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"responseOk(resp)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Used for analyzing an good response from the external web service. The resp object is implemented by the ",(0,r.kt)("inlineCode",{parentName:"td"},"psdi.iface.router.ScriptSOAPResp")," object. This can be leveraged to either do some processing with the response or set an error")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"responseError(resp)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Used for analyzing (and taking action if needed) an error response from the external web service. The resp object is implemented by the ",(0,r.kt)("inlineCode",{parentName:"td"},"psdi.iface.router.ScriptSOAPResp")," object.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"setupHeaders(req)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Used for setting request soap headers for the soap call. The req object is implemented by the ",(0,r.kt)("inlineCode",{parentName:"td"},"psdi.iface.router.ScriptSOAPReq")," object.")))),(0,r.kt)("h3",null,"ScriptSOAPReq details"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"ScriptSOAPReq methods"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Purpose"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"getData()"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Used to get byte[] data that has been passed to the endpoint.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"getMetaData()"),(0,r.kt)("td",{parentName:"tr",align:"left"},"used for getting the metadata ",(0,r.kt)("inlineCode",{parentName:"td"},"java.util.Map")," object that was passed in to the endpoint. This contains some of the jms/kafka message headers.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"getEndPointName())"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Used for getting the endpoint name (string).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"setURL(String url)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"sets the url to be called. This override the url if that is set in the endpoint configuration")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"getURL()"),(0,r.kt)("td",{parentName:"tr",align:"left"},"return the url (string) to be invoked.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"addHeader(String ns, String name, String value)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"add s soap header/value pair to the request. ",(0,r.kt)("inlineCode",{parentName:"td"},"ns")," specifies the namespace for the header element. An example below shows the usage.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"getHeaderProps()"),(0,r.kt)("td",{parentName:"tr",align:"left"},"get the soap header/value ",(0,r.kt)("inlineCode",{parentName:"td"},"Map<QName,List<String>>")," for the request.")))),(0,r.kt)("h3",null,"ScriptSOAPResp details"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"ScriptSOAPResp methods"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Purpose"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"getData()"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Used to get byte[] data response.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"getMetaData()"),(0,r.kt)("td",{parentName:"tr",align:"left"},"used for getting the metadata ",(0,r.kt)("inlineCode",{parentName:"td"},"java.util.Map")," object that was passed in to the endpoint. This contains some of the jms/kafka message headers.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"getEndPointName)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Used for getting the endpoint name (string).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"setError(Exception e)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"sets the error ( ",(0,r.kt)("inlineCode",{parentName:"td"},"java.lang.Exception instance"),") by analyzing the soap response.")))),(0,r.kt)("p",null,"A sample code below shows how a WS Security header can be set using the setupHeaders."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from org.jdom import Element\nfrom org.jdom import Namespace\n\nfrom java.util import HashMap\nfrom java.util import ArrayList\nfrom psdi.iface.util import XMLUtils\nfrom javax.xml.namespace import QName\n\ndef setupHeaders(req):\n\n    ns = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"\n\n    secQName = QName(ns, "Security")\n    sec = Element("Security",ns)\n\n    wsu = Namespace.getNamespace("wsu","http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd")\n    sec.addNamespaceDeclaration(wsu)\n    unt = Element("UsernameToken", ns)\n    sec.addContent(unt)\n    unt.setAttribute("Id", "UsernameToken-61F4CA1CC16641CEA914170628622665", wsu)\n    un = Element("Username", ns)\n    un.setText("testusermaximo")\n    unt.addContent(un)\n            \n    pwd = Element("Password", ns)\n    unt.addContent(pwd)\n    pwd.setAttribute("Type","http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText")\n    pwd.setText("WinterTime15")\n\n    headerVal = XMLUtils.convertElementToString(sec)\n    req.addHeader(ns, "Security", headerVal)\n')))}d.isMDXComponent=!0},4295:function(e,t,a){a.d(t,{Z:function(){return v}});var n=a(7294),r=a(8650),s=a.n(r),i=a(5444),l=a(6949),o=a(3293),p=a(5900),d=a.n(p),m=function(e){var t,a=e.title,r=e.theme,s=e.tabs,i=void 0===s?[]:s;return n.createElement("div",{className:d()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=i.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===r,t))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},h=function(e){var t=e.relativePagePath,a=e.repository,r=(0,i.useStaticQuery)("1364590287").site.siteMetadata.repository,s=a||r,l=s.baseUrl,o=s.subDirectory,p=l+"/edit/"+s.branch+o+"/src/pages"+t;return l?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:p},"Edit this page on GitHub"))):null},c=a(4275),g=a(1721),u=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,r=e.slug,l=r.split("/").filter(Boolean).slice(-1)[0],o=a.map((function(e){var t,a=s()(e,{lower:!0,strict:!0}),o=a===l,p=new RegExp(l+"/?(#.*)?$"),m=r.replace(p,a);return n.createElement("li",{key:e,className:d()((t={},t["PageTabs-module--selected-item--aBB0K"]=o,t),"PageTabs-module--list-item--024o6")},n.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:""+m},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},o))))))},t}(n.Component),k=u,N=a(2881),f=a(6958),b=a(36),y=function(e){var t=e.date,a=new Date(t);return t?n.createElement(b.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(b.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},v=function(e){var t=e.pageContext,a=e.children,r=e.location,p=e.Title,d=t.frontmatter,g=void 0===d?{}:d,u=t.relativePagePath,b=t.titleType,v=g.tabs,w=g.title,T=g.theme,S=g.description,E=g.keywords,x=g.date,P=(0,f.Z)().interiorTheme,C=(0,i.useStaticQuery)("2456312558").site.pathPrefix,U=C?r.pathname.replace(C,""):r.pathname,H=v?U.split("/").filter(Boolean).slice(-1)[0]||s()(v[0],{lower:!0}):"",j=T||P;return n.createElement(o.Z,{tabs:v,homepage:!1,theme:j,pageTitle:w,pageDescription:S,pageKeywords:E,titleType:b},n.createElement(m,{title:p?n.createElement(p,null):w,label:"label",tabs:v,theme:j}),v&&n.createElement(k,{title:w,slug:U,tabs:v,currentTab:H}),n.createElement(N.Z,{padded:!0},a,n.createElement(h,{relativePagePath:u}),n.createElement(y,{date:x})),n.createElement(c.Z,{pageContext:t,location:r,slug:U,tabs:v,currentTab:H}),n.createElement(l.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-integration-endpointhandler-mdx-4d62e9801bd7908ba80c.js.map