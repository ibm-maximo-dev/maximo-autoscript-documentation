"use strict";(self.webpackChunkmas_playbook=self.webpackChunkmas_playbook||[]).push([[7912],{1767:function(t,e,a){a.r(e),a.d(e,{_frontmatter:function(){return o},default:function(){return g}});var n=a(3366),r=(a(7294),a(4983)),i=a(4295),l=["components"],o={},s={_frontmatter:o},p=i.Z;function g(t){var e=t.components,a=(0,n.Z)(t,l);return(0,r.kt)(p,Object.assign({},s,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Information on most of the implicit variables can be found: ",(0,r.kt)("a",{parentName:"p",href:"/maximo-app-framework/maximo-autoscript-documentation/introduction/components"},"Core Components")," & ",(0,r.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/maximo-manage/8.2.0?topic=scripts-implicit-variables"},"Manage Documentation"),".\nOne of the most common ones you’ll utilize is service. This page will go slightly deeper in explaining what the service variable can do."),(0,r.kt)("h2",null,"“Service” Variable"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"service")," object is an implicit object available in all the scripts. For\nmost of the script points it’s called ",(0,r.kt)("inlineCode",{parentName:"p"},"service"),". As you go through this doc, you will see that the\nMIF Object Structure scripts are not directly referring to this variable as ",(0,r.kt)("inlineCode",{parentName:"p"},"service"),". Instead they\nrefer to it as ",(0,r.kt)("inlineCode",{parentName:"p"},"ctx")," (which is an extended version of the “service” object) in callback method input parameter.  "),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"service")," object helps us make some of the common tasks simple from an automation\nscript. For example the tasks like throwing an error or adding a warning or invoking workflows,\nMIF invoke channels, logging, HTTP calls etc become much easier leveraging the ",(0,r.kt)("inlineCode",{parentName:"p"},"service")," var. And it’s not just\neasy to use, it’s also the better way to use. For example if you want to throw real\ntime errors, rather than setting the errorkey and errorgrp variables, you should just use the\nservice.error(grp,key) or service.error(grp,key,params) apis to achieve that. It’s also leveraged to\ninvoke library scripts as you will see in the next few sections. We will also have examples on\nhow to invoke a MIF Invoke Channel to integrate to some rest apis using the\nservice.invokeChannel(channelname) api.\nBelow is a list of built-in functions that ",(0,r.kt)("inlineCode",{parentName:"p"},"service")," object supports."),(0,r.kt)("p",null,"The first few are for json handling:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Function"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Request"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Response"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"jsonToString"),(0,r.kt)("td",{parentName:"tr",align:"left"},"com.ibm.json.java.JSONObject"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Used for converting a json object to string.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"jsonarrayToString"),(0,r.kt)("td",{parentName:"tr",align:"left"},"com.ibm.json.java.JSONArray"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Used for converting a json array to string.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"tojsonarray"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"com.ibm.json.java.JSONArray"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Converts a string to a JSON array.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"tojsonobject"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"com.ibm.json.java.JSONObject"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Converts a string to a JSON object.")))),(0,r.kt)("p",null,"The next ones are classic UI interactions:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Function"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Request"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Response"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"closeDialog"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NA"),(0,r.kt)("td",{parentName:"tr",align:"left"},"void"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Closes a classic UI dialog when the script is executed in context of an action launch point. A sample invocation would be ",(0,r.kt)("inlineCode",{parentName:"td"},"service.closeDialog()"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openURL"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String (url to open), boolean (whether to open in a new window)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"void"),(0,r.kt)("td",{parentName:"tr",align:"left"},"opens a url specified in the input string parameter. A sample invocation would be ",(0,r.kt)("inlineCode",{parentName:"td"},'service.openURL("weather.com", False)'))))),(0,r.kt)("p",null,"The next ones are for HTTP calls and MIF endpoint invocations:  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Function"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Request"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Response"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"httpget"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"invokes HTTP GET on the specified url (input string parameter) and returns the response as a String. Do not use this if the GET response type would be anything but a string or null. A sample usage would be ",(0,r.kt)("inlineCode",{parentName:"td"},'respData = service.httpget("some url")'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"httppost"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String (url), String (POST data)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"invokes HTTP POST on the specified url (input string parameter) with POST data as a string and returns the response as a String. Do not use this if the POST response type would be anything but a string or null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"httpget"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String (url),String (user),String (password)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"invokes HTTP GET on the specified url (input string parameter) for BASIC auth user and password. Returns the response as a String. Do not use this if the GET response type would be anything but a string or null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"httppost"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String (url),String (user),String (password), String (POST data)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"invokes HTTP POST on the specified url (input string parameter) for BASIC auth user and password with POST data as a string and returns the response as a String. Do not use this if the POST response type would be anything but a string or null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"httppostasjson"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String (url),String (user),String (password), com.ibm.json.java.JSONArtifact (POST Data)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"com.ibm.json.java.JSONArtifact"),(0,r.kt)("td",{parentName:"tr",align:"left"},"invokes HTTP POST on the specified url (input string parameter) for BASIC auth user and password with POST data as a byte[]. Returns the response as a json. Do not use this if the response type would be anything but a json or null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"httppostasbytes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String (url),String (user),String (password), byte[] (POST data)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"byte[]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"invokes HTTP POST on the specified url (input string parameter) for BASIC auth user and password with POST data as a byte[] and returns the response as a byte[] or null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"httpgetasjson"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String (url),String (user),String (headers), String (password)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"com.ibm.json.java.JSONArtifact"),(0,r.kt)("td",{parentName:"tr",align:"left"},"invokes HTTP GET on the specified url (input string parameter) for BASIC auth user and password. The format for ",(0,r.kt)("inlineCode",{parentName:"td"},"headers")," being ",(0,r.kt)("inlineCode",{parentName:"td"},"header1:val1,header2:val2"),". Returns the response as a json. Do not use this if the response type would be anything but a json or null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"httpgetasbytes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String (url),String (user),String (password)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"byte[]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"invokes HTTP GET on the specified url (input string parameter) for BASIC auth user and password. Returns the response as a String. Do not use this if the GET response type would be anything but a string or null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"invokeEndpoint"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String (endpoint),Map<String,String> (metadata),String (data)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"invokes any MIF endpoint with the given name and metadata and String data. The response is a String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"invokeEndpoint"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String (endpoint),Map<String,String> (metadata),byte[] (data)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"byte[]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"invokes any MIF endpoint with the given name and metadata and byte[] data. The response is a byte[]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"invokeChannel"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String (channel name)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"void"),(0,r.kt)("td",{parentName:"tr",align:"left"},"invokes a MIF Invokechannel with the given name. This leverages the ",(0,r.kt)("inlineCode",{parentName:"td"},"mbo")," in context of the script and that ",(0,r.kt)("inlineCode",{parentName:"td"},"mbo")," is used as the channel mbo.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"raiseSkipTransaction"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NA"),(0,r.kt)("td",{parentName:"tr",align:"left"},"void"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Throws the MXException with group “iface” and key “SKIP_TRANSACTION”. Leveraged by MIF framework to skip processing certain inbound and outbound messages.")))),(0,r.kt)("p",null,"The next few are for logging.These ones should be used for real time logging leveraging the logger for this script:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Function"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Request"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Response"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"log"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String (log message)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"void"),(0,r.kt)("td",{parentName:"tr",align:"left"},"logs the message at DEBUG or INFO based on the setting on that script. A sample usage would look like ",(0,r.kt)("inlineCode",{parentName:"td"},'service.log("setting the replacementcost..")'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"log_debug"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String (logMsg)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"void"),(0,r.kt)("td",{parentName:"tr",align:"left"},"script logger logging at DEBUG")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"log_debug"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String (logMsg), Throwable (error)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"void"),(0,r.kt)("td",{parentName:"tr",align:"left"},"script logger logging at DEBUG")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"log_info"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String (logMsg)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"void"),(0,r.kt)("td",{parentName:"tr",align:"left"},"script logger logging at INFO")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"log_info"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String (logMsg), Throwable (error)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"void"),(0,r.kt)("td",{parentName:"tr",align:"left"},"script logger logging at INFO")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"log_warn"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String (logMsg)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"void"),(0,r.kt)("td",{parentName:"tr",align:"left"},"script logger logging at WARN")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"log_warn"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String (logMsg), Throwable (error)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"void"),(0,r.kt)("td",{parentName:"tr",align:"left"},"script logger logging at WARN")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"log_error"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String (logMsg)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"void"),(0,r.kt)("td",{parentName:"tr",align:"left"},"script logger logging at ERROR")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"log_error"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String (logMsg), Throwable (error)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"void"),(0,r.kt)("td",{parentName:"tr",align:"left"},"script logger logging at ERROR")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"log_fatal"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String (logMsg)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"void"),(0,r.kt)("td",{parentName:"tr",align:"left"},"script logger logging at FATAL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"log_fatal"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String (logMsg), Throwable (error)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"void"),(0,r.kt)("td",{parentName:"tr",align:"left"},"script logger logging at FATAL")))),(0,r.kt)("p",null,"Real time Errors and warnings:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Function"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Request"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Response"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"error"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String (group), String (key)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"void"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Throws MXException with the error group and key (input parameters).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"error"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String (group), String (key), String[] (params)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"void"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Throws MXException with the error group and key and params(input parameters)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"setWarning"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String (group), String (key), String[] (params)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"void"),(0,r.kt)("td",{parentName:"tr",align:"left"},"sets warning to the mboset in context ",(0,r.kt)("inlineCode",{parentName:"td"},"mbo.getThisMboSet()"),". This is leveraged by REST apis and classic UI framework to show warnings.")))),(0,r.kt)("p",null,"Next few are for YNC interactions. We will discuss YNC with scripting in details later.\nThis is just to introduce the utility functions available in ",(0,r.kt)("inlineCode",{parentName:"p"},"service")," for enabling YNC cutomizations using scripting."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Function"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Request"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Response"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"yncerror"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String (group), String (key)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"void"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Throws MXApplicationYesNoCancelException with the error group and key (input parameters).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"yncerror"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String (group), String (key), String[] (params)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"void"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Throws MXApplicationYesNoCancelException with the error group and key and params(input parameters)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"yncuserinput"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String (group), String (key), String[] (params)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"provides the script code the input option (yes/no/cencel etc) chosen by the end user. This would be leveraged by the script code to provide business logic for the specific input.")))),(0,r.kt)("p",null,"The next few are for library scripts which we will discuss in details later:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Function"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Request"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Response"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"invokeScript"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String (script name), Map<String,String> context"),(0,r.kt)("td",{parentName:"tr",align:"left"},"void"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Invokes a script with the given name and passes in the context specified in input.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"invokeScript"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String (script name)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Map<String,Object>"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Invokes a script with the given name. Returns the context of the invoked script as a java Map object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"invokeScript"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String (script name), String (function name), Object[] (function arguments)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Object"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Invokes a function inside the target script with the specified arguments. The call returns the response of the function call (if any) as an object")))))}g.isMDXComponent=!0},4295:function(t,e,a){a.d(e,{Z:function(){return y}});var n=a(7294),r=a(8650),i=a.n(r),l=a(5444),o=a(6949),s=a(3293),p=a(5900),g=a.n(p),d=function(t){var e,a=t.title,r=t.theme,i=t.tabs,l=void 0===i?[]:i;return n.createElement("div",{className:g()("PageHeader-module--page-header--NqfPe",(e={},e["PageHeader-module--with-tabs--vbQ-W"]=l.length,e["PageHeader-module--dark-mode--WCeH8"]="dark"===r,e))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},m=function(t){var e=t.relativePagePath,a=t.repository,r=(0,l.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||r,o=i.baseUrl,s=i.subDirectory,p=o+"/edit/"+i.branch+s+"/src/pages"+e;return o?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:p},"Edit this page on GitHub"))):null},k=a(4275),N=a(1721),c=function(t){function e(){return t.apply(this,arguments)||this}return(0,N.Z)(e,t),e.prototype.render=function(){var t=this.props,e=t.title,a=t.tabs,r=t.slug,o=r.split("/").filter(Boolean).slice(-1)[0],s=a.map((function(t){var e,a=i()(t,{lower:!0,strict:!0}),s=a===o,p=new RegExp(o+"/?(#.*)?$"),d=r.replace(p,a);return n.createElement("li",{key:t,className:g()((e={},e["PageTabs-module--selected-item--aBB0K"]=s,e),"PageTabs-module--list-item--024o6")},n.createElement(l.Link,{className:"PageTabs-module--link--Kz-7R",to:""+d},t))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},e}(n.Component),f=c,h=a(2881),u=a(6958),b=a(36),v=function(t){var e=t.date,a=new Date(e);return e?n.createElement(b.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(b.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},y=function(t){var e=t.pageContext,a=t.children,r=t.location,p=t.Title,g=e.frontmatter,N=void 0===g?{}:g,c=e.relativePagePath,b=e.titleType,y=N.tabs,S=N.title,w=N.theme,T=N.description,E=N.keywords,j=N.date,x=(0,u.Z)().interiorTheme,C=(0,l.useStaticQuery)("2456312558").site.pathPrefix,P=C?r.pathname.replace(C,""):r.pathname,O=y?P.split("/").filter(Boolean).slice(-1)[0]||i()(y[0],{lower:!0}):"",R=w||x;return n.createElement(s.Z,{tabs:y,homepage:!1,theme:R,pageTitle:S,pageDescription:T,pageKeywords:E,titleType:b},n.createElement(d,{title:p?n.createElement(p,null):S,label:"label",tabs:y,theme:R}),y&&n.createElement(f,{title:S,slug:P,tabs:y,currentTab:O}),n.createElement(h.Z,{padded:!0},a,n.createElement(m,{relativePagePath:c}),n.createElement(v,{date:j})),n.createElement(k.Z,{pageContext:e,location:r,slug:P,tabs:y,currentTab:O}),n.createElement(o.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-coreconcepts-servicevariable-mdx-35a6d1d2ceed2f8a1b4c.js.map