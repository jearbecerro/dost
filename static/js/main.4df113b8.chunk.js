(this["webpackJsonpdost-rstw"]=this["webpackJsonpdost-rstw"]||[]).push([[0],{331:function(e,t,a){},332:function(e,t,a){},333:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a(45),n=a.n(s),i=a(50),r=a(5),l=a(37),o=a(338),d=a(344),j=a(98),b=a(349),h=a(49),u=a(70),m=a.n(u),p=a(207),x=a.p+"static/media/logo.38e469ac.png",O=a.p+"static/media/bg.458245de.png",g=a.p+"static/media/qrcodescanner.d5d525b0.png",f=a.p+"static/media/registration.623364bb.png",y=(a.p,a.p+"static/media/vendor.d5264610.png"),v=a.p+"static/media/cms.751be93b.png",N=a.p+"static/media/dashboard.21842bb4.png",S=a.p+"static/media/attendance.24ec6cd3.png",w=a.p+"static/media/activity.5a24655c.png",k=a.p+"static/media/log.c7c6ea0c.png",C=a(28),I=a(44),A=a(194),F=a.n(A),_=a(206),M=a(336),T=a(337),P=a(340),R=a(345),E=a(339),L=a(81),z=a(14),q=a(15),D=a(195),Y=a.n(D).a.create({baseURL:"https://ap-southeast-1.aws.data.mongodb-api.com/app/rstw-2022-zcbne/endpoint",headers:{"Content-type":"application/json"}}),G=new(function(){function e(){Object(z.a)(this,e)}return Object(q.a)(e,[{key:"add",value:function(e){return Y.post("/insert",e)}},{key:"get",value:function(e){return Y.post("/get",e)}},{key:"update",value:function(e){return Y.post("/update",e)}},{key:"login",value:function(e,t){return Y.post("/login",{username:e,password:t})}}]),e}()),B=a(6);function V(e){var t=e.account,a=Object(c.useState)(!1),s=Object(r.a)(a,2),n=s[0],i=s[1];function l(){return(l=Object(I.a)(Object(C.a)().mark((function e(a){var c,s;return Object(C.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(alert(JSON.stringify(a.data)),!1!==n){e.next=17;break}return e.prev=2,console.log(a.data),i(!0),c=JSON.parse(a.data),s=c.First_Name,e.next=9,G.add({db:"RSTW",col:"appeared",data:{exhibitor:t._id,date:m()().format("MM/DD/YYYY"),time:m()().format("hh:mm a"),appeared:a.data,unique:"".concat(t._id,"-").concat(m()().format("MM/DD/YYYY"),"-").concat(c._id)}}).then((function(e){var t=e.data;null===t.res.insertedId?_.a.warn({description:"".concat(s," ").concat(t.msg.toLowerCase())}):_.a.success({message:"Scanned & Saved Successfully!",description:"".concat(s," appeared in your booth.")}),setTimeout((function(){i(!1)}),3e3)})).catch((function(e){i(!1),_.a.error({message:"Server Error",description:e.message})}));case 9:e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),_.a.error({message:"Invalid QRCode!"}),setTimeout((function(){i(!1)}),3e3);case 15:e.next=18;break;case 17:console.log("still processing");case 18:case"end":return e.stop()}}),e,null,[[2,11]])})))).apply(this,arguments)}var o=Object(c.useState)(null),d=Object(r.a)(o,2),j=d[0],b=d[1];function h(){return(h=Object(I.a)(Object(C.a)().mark((function e(){return Object(C.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.get({db:"RSTW",col:"appeared",query:{exhibitor:"test"}}).then((function(e){console.log(e.data),b(e.data)})).catch((function(e){console.log(e.message),b(null)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(c.useEffect)((function(){!function(){h.apply(this,arguments)}()}),[]);var u=[{width:"15%",title:"DATE APPEARED",render:function(e){return Object(B.jsx)(M.a,{style:{fontSize:13},children:m()("".concat(e.date," ").concat(e.time)).format("MMMM DD, YYYY @ hh:MM A")})},key:"date"},{title:"NAME",render:function(e){return function(e){return Object(B.jsx)(B.Fragment,{children:"".concat(e.First_Name," ").concat(e.Last_Name)})}(JSON.parse(e.appeared))}},{title:"FIRM/INSTITUTION",render:function(e){return Object(B.jsx)(B.Fragment,{children:JSON.parse(e.appeared)["Name_of_Firm/Institution"]})}},{title:"SECTOR",render:function(e){return Object(B.jsx)(B.Fragment,{children:JSON.parse(e.appeared).SECTOR})}}];return Object(B.jsxs)(T.a,{gutter:[24,1],children:[Object(B.jsx)(M.a,{xs:24,children:!1===n&&Object(B.jsx)("center",{children:Object(B.jsx)(F.a,{className:"some-classname",onDecode:function(e){return l.apply(this,arguments)},onScannerLoad:function(e){console.log(e)},constraints:{audio:!1,video:{width:L.isMobile?.8*window.innerWidth:500,height:L.isMobile?.4*window.innerHeight:500,facingMode:"environment"}},captureSize:{width:1280,height:720}})})}),Object(B.jsx)(M.a,{xs:24,children:Object(B.jsx)(P.a,{style:{},className:"mt-5",children:Object(B.jsxs)(R.a.Ribbon,{text:null!==j?j.length:"",color:"red",children:[Object(B.jsx)("b",{children:"Visitors Logs"}),Object(B.jsx)("hr",{}),Object(B.jsx)(E.a,{size:"small",filterDropdown:!0,className:"ant-list-box table-responsive bg-white",sorter:!0,loading:null===j,columns:u,dataSource:j,scroll:null,pagination:{pageSize:100,position:["bottomLeft"]}})]})})}),Object(B.jsx)(M.a,{})]})}var W=a(122),J=a(342),U=a(204),H=a(343),Q=a(105),Z=a(352),K=a(18),X=a(20),$=a(199),ee=a.n($),te=a.p+"static/media/styles.f501f6f3.cssm",ae=function(e){Object(K.a)(a,e);var t=Object(X.a)(a);function a(){var e;Object(z.a)(this,a);for(var c=arguments.length,s=new Array(c),n=0;n<c;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).sigPad={},e.clear=function(){e.sigPad.clear(),e.props.seteSign(null)},e.save=function(){e.sigPad.isEmpty()?e.props.seteSign(null):(e.props.seteSign(e.sigPad.getTrimmedCanvas().toDataURL("image/png")),e.props.setshowSignPad(!1),e.sigPad.clear())},e}return Object(q.a)(a,[{key:"render",value:function(){var e=this;return Object(B.jsxs)("div",{className:te.container,children:[Object(B.jsxs)(T.a,{gutter:[24,0],children:[Object(B.jsx)(M.a,{xs:12,children:Object(B.jsx)(h.a,{type:"link",onClick:this.clear,children:Object(B.jsx)("span",{className:"text-danger",children:"CLEAR"})})}),Object(B.jsx)(M.a,{xs:12,className:"d-flex justify-content-end",children:Object(B.jsx)(h.a,{type:"link",onClick:this.save,children:Object(B.jsx)("span",{className:"text-success",children:"SAVE"})})})]}),Object(B.jsx)("center",{children:Object(B.jsx)("small",{className:"text-muted",children:"Provide your signature to proceed"})}),Object(B.jsx)(M.a,{xs:24,styles:{width:window.innerWidth,height:window.innerHeight},children:Object(B.jsx)(ee.a,{canvasProps:{width:window.innerWidth,height:window.innerHeight},ref:function(t){e.sigPad=t}})})]})}}]),a}(c.Component),ce=ae,se=a(200),ne=W.a.Option;function ie(){var e=J.a.useForm(),t=Object(r.a)(e,1)[0],a=Object(c.useState)(!1),s=Object(r.a)(a,2),n=s[0],i=s[1],l=Object(c.useState)(null),o=Object(r.a)(l,2),d=o[0],j=o[1],u=Object(c.useState)(!1),m=Object(r.a)(u,2),p=m[0],O=m[1],g=Object(c.useState)("{}}"),f=Object(r.a)(g,2),y=f[0],v=f[1],N=Object(c.useState)(""),S=Object(r.a)(N,2),w=S[0],k=S[1],A=Object(c.useState)("yourQrCode"),F=Object(r.a)(A,2),R=F[0],E=F[1];function z(e,t){var a=e.type;return"text"===a||"email"===a||"number"===a?Object(B.jsx)(U.a,{type:a,placeholder:t.replaceAll("_"," "),style:{}}):"select"===a?Object(B.jsx)(W.a,{placeholder:t,allowClear:!0,style:{width:"100%",color:"black",backgroundColor:"transparent"},onSelect:function(e){console.log(e)},children:e.options.map((function(e,t){return Object(B.jsx)(ne,{value:e,children:Object(B.jsx)(T.a,{gutter:[24,0],children:Object(B.jsx)(M.a,{md:24,children:e})})},t)}))}):Object(B.jsx)(B.Fragment,{})}function q(){return(q=Object(I.a)(Object(C.a)().mark((function e(t){var a,c,s,n;return Object(C.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!1===K&&_.a.warn({message:"Data Privacy Policy",description:"Please accept our consent to data privacy!"}),!K){e.next=12;break}return a=Array.from(t.First_Name)[0],c=""===t.Middle_Name||void 0===t.Middle_Name?"":Array.from(t.Middle_Name)[0],s=t.Last_Name,n="".concat(a+c+s).toLowerCase(),k(n),t.account={username:n,password:"caragarstw2022"},t.isAdmin=!1,e.next=12,G.add({db:"RSTW",col:"clients",data:t}).then((function(e){var a=e.data;E("".concat(t.First_Name," ").concat(""===t.Middle_Name||void 0===t.Middle_Name?"":Array.from(t.Middle_Name)[0],". ").concat(t.Last_Name," ").concat(t.Suffix)),"Already Registered!"===a.msg?(delete a.res.account.password,console.log(a.res),O(!0),v(JSON.stringify(a.res)),_.a.info({message:a.msg,description:"Here is your QR Code."})):(t._id=a.res.insertedId,delete t.account.password,console.log(t),v(JSON.stringify(t)),O(!0),_.a.success({message:"Successfully Registered!",description:"Please save your qrcode for the event!"}))})).catch((function(e){_.a.error({message:"Server Error",description:e.message})}));case 12:e.next=18;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0.message),_.a.error({message:"System Error",description:e.t0.message});case 18:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}function D(){E("yourQRcode"),k(""),j(null),t.resetFields(),v("N/A")}var Y=Object(c.useState)(!1),V=Object(r.a)(Y,2),K=V[0],X=V[1];return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(H.a,{open:n,closable:!1,footer:null,children:Object(B.jsx)(M.a,{xs:24,children:Object(B.jsxs)(P.a.Grid,{bordered:!0,style:{borderSize:5,width:"100%",height:400,padding:0},children:[Object(B.jsx)(ce,{seteSign:j,setshowSignPad:i}),Object(B.jsx)("hr",{})]})})}),Object(B.jsx)(H.a,{open:p,title:Object(B.jsx)(B.Fragment,{children:Object(B.jsx)("center",{children:Object(B.jsxs)(h.a,{type:"link",className:"text-primary",onClick:function(){!function(){var e=document.getElementById("qrcode");if(e){var t=e.toDataURL("image/png").replace("image/png","image/octet-stream"),a=document.createElement("a");a.href=t,a.download="".concat(R,".png"),document.body.appendChild(a),a.click(),document.body.removeChild(a)}}(),O(!1),D()},children:[Object(B.jsx)(Z.a,{})," DOWNLOAD"]})})}),footer:Object(B.jsx)("center",{children:Object(B.jsxs)("small",{style:{textAlign:"left"},children:[Object(B.jsx)("br",{}),"Username: ",Object(B.jsx)("b",{children:w})," ",Object(B.jsx)("br",{}),"Password: ",Object(B.jsx)("b",{children:"caragarstw2022"})]})}),closable:!1,children:Object(B.jsx)("center",{children:Object(B.jsx)(se.QRCode,{id:"qrcode",value:y,qrStyle:"squares",size:L.isDesktop?300:150,bgColor:"#FFFFFF",fgColor:"#000000",logoImage:x,logoWidth:L.isMobile?50:100,logoOpacity:.3})})}),Object(B.jsx)(P.a,{style:{marginTop:20},className:"",title:Object(B.jsxs)("center",{children:[Object(B.jsx)("h4",{children:"REGISTRATION"}),Object(B.jsx)("small",{children:"Ignore if you're already registered."})," ",Object(B.jsx)("br",{})]}),actions:[Object(B.jsxs)("center",{children:[Object(B.jsx)(b.a,{placement:"top",title:"Are you sure you want to clear the form?",onConfirm:function(){D()},okText:"Yes",cancelText:"No",children:Object(B.jsx)(h.a,{type:"danger",style:{marginRight:20},children:"CLEAR"})}),Object(B.jsx)(h.a,{type:"primary",onClick:function(){t.submit()},children:"REGISTER"})]})],children:Object(B.jsx)(J.a,{form:t,initialValues:{First_Name:"",Middle_Name:"",Last_Name:"",Suffix:"","Sex/Gender":"",Age_Group:"",Phone:"",Occupation:"",Name_of_Firm:"",Address:"",Email_Address:"",Sector:""},onFinish:function(e){!function(e){q.apply(this,arguments)}(e)},onFinishFailed:function(e){_.a.warning({message:"Please fill in the form completely and correctly!"})},layout:"vertical",children:Object(B.jsxs)(T.a,{gutter:[20,5],className:"ml-5 mr-5",children:[function(e){var t=Object.keys(e),a=Object.values(e);return t.map((function(e,t){return Object(B.jsx)(M.a,{xs:24,lg:12,children:Object(B.jsx)(J.a.Item,{label:Object(B.jsx)("p",{style:{margin:0,color:"black",fontWeight:"",fontSize:15},children:e.replaceAll("_"," ")}),name:e,tooltip:void 0!==a[t].tooltip?a[t].tooltip:a[t].required?"Put `n/a` if not applicable.":null,rules:[{required:a[t].required,message:"".concat(e.replaceAll("_"," ")," is required!")}],children:z(a[t],e.replaceAll("_"," "))})})}))}({First_Name:{type:"text",value:"",placeholder:"",size:24,options:[],required:!0},Middle_Name:{type:"text",value:"",placeholder:"",size:24,options:[],required:!1},Last_Name:{type:"text",value:"",placeholder:"",size:24,options:[],required:!0},Suffix:{type:"text",value:"",placeholder:"",size:24,options:[],required:!1},"Sex/Gender":{type:"select",value:"",placeholder:"",size:24,options:["Male","Female"],required:!0},Age_Group:{type:"select",value:"",placeholder:"",size:24,options:["20 or below","21-30","31-40","41-50","51-60","61-70","71-100"],required:!0},Phone:{type:"text",value:"",placeholder:"",size:24,options:[],required:!0},Occupation:{type:"text",value:"",placeholder:"",size:24,options:[],required:!0,tooltip:"Put student if you are or n/a if not applicable."},"Name_of_Firm/Institution":{type:"text",value:"",placeholder:"",size:24,options:[],required:!0,tooltip:"A business name, school if student or just put n/a if not applicable."},Address:{type:"text",value:"",placeholder:"",size:24,options:[],required:!0,tooltip:"Your home or business address"},Email_Address:{type:"text",value:"",placeholder:"",size:24,options:[],required:!0},Sector:{type:"select",value:"",placeholder:"",size:24,options:["Association","Cooperative","Individual/Not in Education, Employment or Training","Government","LGU","NGO","OFW","Private (Sole Proprietor, Entrepreneur, MSME)","Student","Others"],required:!0},"Are you an exhibitor at the event?":{type:"select",value:"No",placeholder:"",size:24,options:["Yes","No"],required:!0}}),Object(B.jsxs)(M.a,{xs:24,lg:12,hidden:!0,children:[Object(B.jsx)(h.a,{type:"link",onClick:function(){i(!0)},children:null===d?"Set eSignature":"Change eSignature"}),null!==d&&Object(B.jsx)("center",{children:Object(B.jsx)("img",{alt:"\ud83d\udeab",style:{padding:20},src:d})}),Object(B.jsx)("hr",{})]}),Object(B.jsx)(M.a,{xs:24,children:Object(B.jsx)(Q.a,{value:K,onChange:function(){X(!K)},children:Object(B.jsx)("p",{className:"text-muted",style:{textAlign:"justify"},children:"DATA PRIVACY CONSENT: \n                    By filling-out this form, you agree with the Data Privacy Policy of the Department of Science & Technology Regional Office XIII (DOST XIII) and the National Privacy Commission (NPC). \n                    Both personal and non-personal information may be collected from you for using this form. \n                    Rest assured that these data shall be kept safe and secured, and will not be shared with anyone except to designated personnel who will process the needed information only for facilitating smooth participation and distribution of materials for such event. \n                    The collective information derived from this event will be useful for the improvement of implementing similar activities in the future."})})})]})})})]})}var re=a(341),le=a.p+"static/media/logos.7717ee4f.png";var oe=function(){var e=o.a.Footer;return Object(B.jsx)(e,{style:{background:"#fafafa"},children:Object(B.jsxs)(T.a,{className:"just",style:{float:"center"},children:[Object(B.jsx)(M.a,{xs:24,children:Object(B.jsxs)("div",{className:"copyright",children:["\xa9 ",m()().format("YYYY")," RSTW, |",Object(B.jsx)("a",{href:"https://caraga.dost.gov.ph",className:"font-weight-bold",target:"_blank",rel:"noreferrer",children:"DOST Caraga"}),Object(B.jsx)("img",{src:le,width:"10%"})]})}),Object(B.jsx)(M.a,{xs:24,md:12,lg:12,hidden:!0,children:Object(B.jsxs)("div",{className:"footer-menu",children:[Object(B.jsx)(T.a,{}),Object(B.jsx)("ul",{children:Object(B.jsx)("li",{className:"nav-item"})})]})})]})})},de=a.p+"static/media/signup-sub.c1d02918.png",je=re.a.Title,be=o.a.Content;function he(e){var t=e.setaccount,a=Object(l.g)(),c=function(){var e=Object(I.a)(Object(C.a)().mark((function e(c){var s,n,i;return Object(C.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=c.Username,n=c.Password,i=c.remember,console.log(i),e.next=6,G.login(s,n).then((function(e){var c=e.data;null!==c?(delete c.account.password,t(c),!0===i&&localStorage.setItem("account",JSON.stringify(c)),a.push("/")):_.a.warning({message:"Invalid Account!",description:"Please check your account and try again."})})).catch((function(e){_.a.error({message:e.message})}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)("div",{className:"",children:Object(B.jsxs)(be,{className:"p-0",style:{marginTop:60},children:[Object(B.jsx)("div",{className:"sign-up-header",children:Object(B.jsxs)("div",{className:"content",style:{marginTop:-90},children:[Object(B.jsx)(je,{children:Object(B.jsx)("img",{src:O,alt:"RSTW 2022"})}),Object(B.jsx)("p",{className:"text-lg",children:Object(B.jsx)("img",{src:de,alt:"Kabalikat sa Maunlad at Matatag na Kinabukasan"})})]})}),Object(B.jsxs)(P.a,{className:"card-signup header-solid h-full ant-card pt-0",title:Object(B.jsx)("h5",{children:"Sign In"}),bordered:"false",children:[Object(B.jsx)("div",{className:"sign-up-gateways mb-5",children:Object(B.jsx)("img",{src:le,alt:"Science for the people",width:"90%"})}),Object(B.jsxs)(J.a,{name:"basic",initialValues:{remeber:!1},onFinish:c,onFinishFailed:function(e){console.log("Failed:",e)},className:"row-col",children:[Object(B.jsx)(J.a.Item,{name:"Username",rules:[{required:!0,message:"Please input your username!"}],children:Object(B.jsx)(U.a,{placeholder:"Username"})}),Object(B.jsx)(J.a.Item,{name:"Password",rules:[{required:!0,message:"Please input your password!"}],children:Object(B.jsx)(U.a.Password,{placeholder:"Password",style:{paddingTop:0,paddingBottom:0}})}),Object(B.jsx)(J.a.Item,{name:"remember",valuePropName:"checked",children:Object(B.jsx)(Q.a,{children:"Remember me"})}),Object(B.jsx)(J.a.Item,{children:Object(B.jsx)(h.a,{style:{width:"100%"},type:"primary",htmlType:"submit",children:"SIGN IN"})})]}),Object(B.jsxs)("p",{className:"font-semibold text-muted text-center",children:[" ",Object(B.jsx)(i.b,{to:"/Activities",className:"font-bold text-dark",children:"View Activities"})]})]})]})}),Object(B.jsx)("center",{children:Object(B.jsx)(oe,{})})]})}var ue=a(346),me=a(152),pe=a(347),xe=a(350),Oe=a(351),ge=a(353),fe=a(354),ye=a(355),ve=a.p+"static/media/login-bg.79718d7e.png";var Ne=function(e){var t=e.account,a=(e.setaccount,[Object(B.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(B.jsx)("path",{d:"M13.5858 3.58579C14.3668 2.80474 15.6332 2.80474 16.4142 3.58579C17.1953 4.36683 17.1953 5.63316 16.4142 6.41421L15.6213 7.20711L12.7929 4.37868L13.5858 3.58579Z",className:"fill-gray-7"}),Object(B.jsx)("path",{d:"M11.3787 5.79289L3 14.1716V17H5.82842L14.2071 8.62132L11.3787 5.79289Z",className:"fill-gray-7"})]},0)]),s=[{title:"Gegacit Rhum (GR)",avatar:x,description:"Authentic Rum from Gegacit, Siargao Island . . . ."}],n="".concat(t.First_Name," ").concat(""===t.Middle_Name||void 0===t.Middle_Name?"":Array.from(t.Middle_Name)[0]," ").concat(t.Last_Name," ").concat(t.Suffix),i=Object(c.useState)(!0),l=Object(r.a)(i,2),o=l[0],j=l[1];return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)("div",{className:"profile-nav-bg",style:{backgroundImage:"url("+ve+")"}}),Object(B.jsxs)("div",{className:"profile-bg",children:[Object(B.jsx)(P.a,{className:"card-profile-head",bodyStyle:{display:"none"},title:Object(B.jsxs)(T.a,{justify:"space-between",align:"middle",gutter:[24,0],children:[Object(B.jsx)(M.a,{span:24,md:12,className:"col-info",children:Object(B.jsxs)(ue.a.Group,{children:[Object(B.jsx)(ue.a,{size:74,shape:"square",src:x}),Object(B.jsx)("div",{className:"avatar-info",children:"Yes"===t["Are you an exhibitor at the event?"]?Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)("h4",{className:"font-semibold m-0",children:t["Name_of_Firm/Institution"]}),Object(B.jsx)("p",{children:n})]}):Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)("h4",{className:"font-semibold m-0",children:n}),Object(B.jsxs)("p",{children:[t["Name_of_Firm/Institution"]," - ",t.Sector]})]})})]})}),Object(B.jsx)(M.a,{span:24,md:12,style:{display:"flex",alignItems:"center",justifyContent:"flex-end"},children:Object(B.jsxs)(me.a.Group,{defaultValue:"a",children:[Object(B.jsx)(me.a.Button,{value:"a",children:"OVERVIEW"}),Object(B.jsx)(me.a.Button,{value:"b",children:"TEAMS"}),Object(B.jsx)(me.a.Button,{value:"c",children:"PROJECTS"})]})})]})}),Object(B.jsx)(M.a,{xs:24,className:"m-5 p-5",children:Object(B.jsxs)(T.a,{gutter:[24,10],children:[Object(B.jsx)(M.a,{span:24,md:14,className:"mb-24",children:Object(B.jsxs)(P.a,{bordered:!1,title:Object(B.jsx)("h6",{className:"font-semibold m-0",children:"Profile Information"}),className:"header-solid h-full card-profile-information",extra:Object(B.jsx)(h.a,{type:"link",children:a}),bodyStyle:{paddingTop:0,paddingBottom:16},children:[Object(B.jsx)("p",{className:"text-dark",children:t["Are you an exhibitor at the event?"]&&Object(B.jsx)("p",{})}),Object(B.jsx)("hr",{className:"my-25"}),Object(B.jsxs)(pe.b,{title:n,children:[Object.keys(t).map((function(e,a){return Object(B.jsx)(B.Fragment,{children:!["_id","account","isAdmin","Are you an exhibitor at the event?"].includes(e)&&Object(B.jsx)(pe.b.Item,{label:e.replaceAll("_"," "),span:3,children:t[e]},a)})})),Object(B.jsxs)(pe.b.Item,{label:"Social",span:3,children:[Object(B.jsx)("a",{href:"/",target:"_blank",className:"mx-5 px-5",children:Object(B.jsx)(ge.a,{style:{color:"red"}})}),Object(B.jsx)("a",{href:"/",target:"_blank",className:"mx-5 px-5",children:Object(B.jsx)(fe.a,{style:{color:"#344e86"}})}),Object(B.jsx)("a",{href:"/",target:"_blank",className:"mx-5 px-5",children:Object(B.jsx)(ye.a,{style:{color:"#e1306c"}})}),Object(B.jsx)("span",{style:{cursor:"pointer"},onClick:function(){j(!0)},className:"text-muted",children:"set social links"}),Object(B.jsx)(d.a,{open:o,onClose:function(){j(!1)},title:Object(B.jsx)("b",{children:Object(B.jsx)("small",{children:"Set Social Links"})}),children:Object(B.jsxs)(T.a,{gutter:[24,5],children:[Object(B.jsx)(M.a,{xs:24,children:Object(B.jsx)(U.a,{size:"small",placeholder:"https://youtube.com/yourchannel",prefix:Object(B.jsx)(ge.a,{style:{color:"red",marginRight:10}})})}),Object(B.jsx)(M.a,{xs:24,children:Object(B.jsx)(U.a,{size:"small",placeholder:"https://facebook.com/yourchannel",prefix:Object(B.jsx)(fe.a,{style:{color:"#344e86",marginRight:10}})})}),Object(B.jsx)(M.a,{xs:24,children:Object(B.jsx)(U.a,{size:"small",placeholder:"https://instagram.com/yourchannel",prefix:Object(B.jsx)(ye.a,{style:{color:"#e1306c",marginRight:10}})})}),Object(B.jsx)(M.a,{xs:24,children:Object(B.jsx)(h.a,{style:{float:"right"},type:"primary",children:"SET"})})]})})]})]})]})}),Object(B.jsx)(M.a,{span:24,md:10,className:"mb-24",children:Object(B.jsx)(P.a,{bordered:!1,className:"header-solid h-full",title:Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)("h6",{className:"font-semibold m-0",children:"CMS"}),Object(B.jsx)("small",{children:"Show your product by adding image link for a slideshow"})]}),children:Object(B.jsxs)("ul",{className:"list settings-list",children:[Object(B.jsx)("li",{children:Object(B.jsx)("h6",{className:"list-header text-sm text-muted",children:"ACCOUNT"})}),Object(B.jsxs)("li",{children:[Object(B.jsx)(xe.a,{defaultChecked:!0}),Object(B.jsx)("span",{children:"Email me when someone follows me"})]}),Object(B.jsxs)("li",{children:[Object(B.jsx)(xe.a,{}),Object(B.jsx)("span",{children:"Email me when someone answers me"})]}),Object(B.jsxs)("li",{children:[Object(B.jsx)(xe.a,{defaultChecked:!0}),Object(B.jsx)("span",{children:"Email me when someone mentions me"})]}),Object(B.jsx)("li",{children:Object(B.jsx)("h6",{className:"list-header text-sm text-muted m-0",children:"APPLICATION"})}),Object(B.jsxs)("li",{children:[Object(B.jsx)(xe.a,{defaultChecked:!0}),Object(B.jsx)("span",{children:"New launches and projects"})]}),Object(B.jsxs)("li",{children:[Object(B.jsx)(xe.a,{defaultChecked:!0}),Object(B.jsx)("span",{children:"Monthly product updates"})]}),Object(B.jsxs)("li",{children:[Object(B.jsx)(xe.a,{defaultChecked:!0}),Object(B.jsx)("span",{children:"Subscribe to newsletter"})]})]})})}),Object(B.jsx)(M.a,{span:24,md:17,className:"mb-24",children:Object(B.jsx)(P.a,{bordered:!1,title:Object(B.jsx)("h6",{className:"font-semibold m-0",children:"My Products"}),className:"header-solid h-full",bodyStyle:{paddingTop:0,paddingBottom:16},children:Object(B.jsx)(Oe.b,{itemLayout:"horizontal",dataSource:s,split:!1,className:"conversations-list",renderItem:function(e){return Object(B.jsx)(Oe.b.Item,{actions:[Object(B.jsx)(h.a,{type:"link",children:"VIEW"})],children:Object(B.jsx)(Oe.b.Item.Meta,{avatar:Object(B.jsx)(ue.a,{shape:"square",size:48,src:e.avatar}),title:e.title,description:e.description})})}})})}),Object(B.jsx)(M.a,{span:24,md:7,className:"mb-24",children:Object(B.jsx)(P.a,{bordered:!1,title:Object(B.jsx)("h6",{className:"font-semibold m-0",children:"Logs of My Booth Appearances"}),className:"header-solid h-full",bodyStyle:{paddingTop:0,paddingBottom:16},children:Object(B.jsx)(Oe.b,{itemLayout:"horizontal",dataSource:s,split:!1,className:"conversations-list",renderItem:function(e){return Object(B.jsx)(Oe.b.Item,{actions:[Object(B.jsx)(h.a,{type:"link",children:"VIEW"})],children:Object(B.jsx)(Oe.b.Item.Meta,{title:e.title,description:e.description})})}})})})]})})]})]})};function Se(e,t){var a=[{label:"Registration",link:"/dost/",icon:f,element:Object(B.jsx)(ie,{})},{label:"Activities",link:"/dost/Activities",icon:w,element:Object(B.jsx)(B.Fragment,{})},{label:"Sign In",link:"/dost/Sign-In",notInSidebar:!0,icon:null,element:Object(B.jsx)(he,{setaccount:t})}],c=[{label:"My Profile",link:"/dost/",icon:y,element:Object(B.jsx)(Ne,{account:e,setaccount:t})},{label:"Activities",link:"/dost/Activities",icon:w,element:Object(B.jsx)(B.Fragment,{})},{label:"QR Code Scanner",link:"/dost/QR-Code-Scanner",icon:g,element:Object(B.jsx)(V,{account:e,setaccount:t})},{label:"Logs",link:"/dost/Logs",icon:k,element:Object(B.jsx)(B.Fragment,{children:"Logs"})}],s=[{label:"Dashboard",link:"/dost/",icon:N,element:Object(B.jsx)(B.Fragment,{children:"Dashboard"})},{label:"Activities",link:"/dost/Activities",icon:w,element:Object(B.jsx)(B.Fragment,{})},{label:"Attendance",link:"/dost/attendance",icon:S,element:Object(B.jsx)(B.Fragment,{children:"Attendance"})},{label:"Exhibitors",link:"/dost/Exhibitors",icon:y,element:Object(B.jsx)(B.Fragment,{children:"Exhibitors List"})},{label:"CMS",link:"/dost/CMS",icon:v,element:Object(B.jsx)(B.Fragment,{children:"CMS"})}];return null!==e&&void 0!==e?e.isAdmin?s:c:a}var we=function(e){var t,a=e.color,c=e.account,s=e.setaccount,n=e.setVisible,r=(Object(l.h)().pathname,Object(l.g)());return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)("div",{className:"",children:Object(B.jsxs)("center",{children:[Object(B.jsx)(i.c,{to:"/",children:Object(B.jsx)("img",{src:x,alt:"",width:"55%"})}),Object(B.jsx)("br",{}),Object(B.jsx)("b",{className:"",children:"DOST Caraga"}),Object(B.jsx)("br",{}),Object(B.jsx)("img",{src:O,width:"80%"})]})}),Object(B.jsx)("hr",{}),Object(B.jsxs)(j.a,{theme:"light",mode:"inline",children:[(t=Se(c,n),t.map((function(e,t){return void 0===e.notInSidebar&&Object(B.jsx)(j.a.Item,{children:Object(B.jsxs)(i.c,{to:e.link,onClick:function(){n(!1)},children:[Object(B.jsx)("span",{className:"icon",style:{background:""},children:Object(B.jsx)("img",{src:null===e.icon?x:e.icon})}),Object(B.jsx)("span",{className:"label",children:e.label})]})},t)}))),Object(B.jsx)(j.a.Item,{children:null!==c&&Object(B.jsx)(b.a,{placement:"topLeft",icon:Object(B.jsx)(p.a,{style:{color:"skyblue"}}),title:"Are you sure to signout",onConfirm:function(){localStorage.removeItem("account"),s(null),r.push("/")},okText:"Yes",cancelText:"No",children:Object(B.jsx)(h.a,{style:{float:"right"},type:"link",children:Object(B.jsx)("b",{className:"text-muted",children:"Sign Out?"})})})})]}),Object(B.jsx)("div",{className:"aside-footer",hidden:!0,children:Object(B.jsxs)("div",{className:"footer-box",style:{background:a},children:[Object(B.jsx)("span",{className:"icon",style:{color:a},children:"?"}),Object(B.jsx)("h6",{children:"Need Help?"}),Object(B.jsx)("p",{children:"Please check our docs"}),Object(B.jsx)(h.a,{type:"primary",className:"ant-btn-sm ant-btn-block",children:Object(B.jsx)("a",{href:"https://caraga.dost.gov.ph",className:"",target:"_blank",rel:"noreferrer",children:"DOCUMENTATION"})})]})})]})},ke=a(348),Ce=[Object(B.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(B.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM12 7C12 8.10457 11.1046 9 10 9C8.89543 9 8 8.10457 8 7C8 5.89543 8.89543 5 10 5C11.1046 5 12 5.89543 12 7ZM9.99993 11C7.98239 11 6.24394 12.195 5.45374 13.9157C6.55403 15.192 8.18265 16 9.99998 16C11.8173 16 13.4459 15.1921 14.5462 13.9158C13.756 12.195 12.0175 11 9.99993 11Z",fill:"#111827"})},0)],Ie=[Object(B.jsx)("svg",{width:"20",height:"20",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:Object(B.jsx)("path",{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"})},0)];var Ae=function(e){e.name,e.subName;var t=e.onPress,a=e.account;return Object(c.useEffect)((function(){return window.scrollTo(0,0)})),Object(B.jsx)(B.Fragment,{children:Object(B.jsxs)(T.a,{gutter:[24,0],children:[Object(B.jsx)(M.a,{span:24,md:6,children:Object(B.jsx)(ke.a,{children:Object(B.jsx)(ke.a.Item,{children:Object(B.jsx)(i.c,{to:"/",children:Object(B.jsx)("img",{src:O,width:"35%"})})})})}),Object(B.jsxs)(M.a,{span:24,md:18,className:"header-control",children:[Object(B.jsx)(h.a,{type:"link",className:"",onClick:function(){return t()},children:Ie}),null===a?Object(B.jsxs)(i.b,{to:"/Sign-In",className:"btn-sign-in",children:[Ce,Object(B.jsx)("span",{children:"Sign in"})]}):Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)("img",{src:le,width:L.isDesktop?"15%":"35%"})," ",Object(B.jsx)("b",{style:{marginRight:15},children:a.exhibitor}),"  "]})]})]})})},Fe=o.a.Header,_e=o.a.Content,Me=o.a.Sider;var Te=function(e){var t=e.children,a=e.account,s=e.setaccount,n=Object(c.useState)(!1),i=Object(r.a)(n,2),j=i[0],b=i[1],h=Object(c.useState)("#28C1F0"),u=Object(r.a)(h,2),m=u[0],p=u[1],x=Object(c.useState)("transparent"),O=Object(r.a)(x,2),g=O[0],f=O[1],y=Object(c.useState)(!0),v=Object(r.a)(y,2),N=(v[0],v[1]),S=Object(l.h)().pathname;return S=S.replace("/",""),Object(B.jsxs)(o.a,{className:"layout-dashboard",children:[Object(B.jsx)(d.a,{title:!1,placement:"left",closable:!1,onClose:function(){return b(!1)},visible:j,width:250,className:"drawer-sidebar",children:Object(B.jsx)(o.a,{className:"layout-dashboard",children:Object(B.jsx)(Me,{trigger:null,width:250,theme:"light",className:"sider-primary ant-layout-sider-primary",style:{background:g},children:Object(B.jsx)(we,{color:m,account:a,setaccount:s,setVisible:b})})})},"left"),Object(B.jsx)(Fe,{className:"ant-header-fixed",children:Object(B.jsx)(Ae,{onPress:function(){return b(!j)},name:S,subName:S,handleSidenavColor:function(e){return p(e)},handleSidenavType:function(e){return f(e)},handleFixedNavbar:function(e){return N(e)},account:a})}),Object(B.jsx)(_e,{className:"content-ant",children:t})]})};a(330),a(331),a(332);function Pe(){var e=localStorage.getItem("account"),t=Object(c.useState)(!1),a=Object(r.a)(t,2),s=(a[0],a[1],Object(c.useState)(void 0!==e||null!==e?JSON.parse(e):null)),n=Object(r.a)(s,2),i=n[0],o=n[1],d=Object(l.h)();return Object(B.jsx)("div",{className:"App",children:Object(B.jsx)(l.d,{children:Object(B.jsxs)(Te,{account:i,setaccount:o,children:[Se(i,o).map((function(e,t){return Object(B.jsx)(l.b,{exact:!0,path:e.link,component:function(){return e.element}},t)})),Object(B.jsx)(l.a,{from:"*",to:null!==i?d.pathname:"/"})]})})})}n.a.render(Object(B.jsx)(i.a,{children:Object(B.jsx)(Pe,{})}),document.getElementById("root"))}},[[333,1,2]]]);