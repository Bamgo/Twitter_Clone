(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{49:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),r=n(32),s=n.n(r),i=n(9),u=n(23),o=n(6),l=n(10),j=n.n(l),b=n(17),d=n(22);n(40),n(51),n(52);d.a.initializeApp({apiKey:"AIzaSyAt-y0Xz0391EFffcykbixpsc4L1boKkg0",authDomain:"nwitter-24a59.firebaseapp.com",projectId:"nwitter-24a59",storageBucket:"nwitter-24a59.appspot.com",messagingSenderId:"945751254484",appId:"1:945751254484:web:22ae199b382e838446e241"});var p=d.a,f=d.a.auth(),O=d.a.firestore(),h=d.a.storage(),m=d.a,x=n(12),v=n(24),g=n(1),y=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(i.a)(r,2),u=s[0],o=s[1],l=Object(a.useState)(!0),d=Object(i.a)(l,2),p=d[0],O=d[1],h=Object(a.useState)(""),m=Object(i.a)(h,2),x=m[0],v=m[1],y=function(e){var t=e.target,n=t.name,a=t.value;"email"===n?c(a):"password"===n&&o(a)},w=function(){var e=Object(b.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!p){e.next=8;break}return e.next=5,f.createUserWithEmailAndPassword(n,u);case 5:a=e.sent,e.next=11;break;case 8:return e.next=10,f.signInWithEmailAndPassword(n,u);case 10:a=e.sent;case 11:console.log(a),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),v(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("form",{onSubmit:w,className:"container",children:[Object(g.jsx)("input",{name:"email",type:"email",placeholder:"Email",required:!0,value:n,onChange:y,className:"authInput"}),Object(g.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:u,className:"authInput",onChange:y}),Object(g.jsx)("input",{type:"submit",className:"authInput authSubmit",value:p?"Create Account":"Sign In"}),x&&Object(g.jsx)("span",{className:"authError",children:x})]}),Object(g.jsx)("span",{onClick:function(){return O((function(e){return!e}))},className:"authSwitch",children:p?"Sign In":"Create Account"})]})},w=function(){var e=function(){var e=Object(b.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(n=t.target.name)?a=new p.auth.GoogleAuthProvider:"github"===n&&(a=new p.auth.GithubAuthProvider),e.next=4,f.signInWithPopup(a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)("div",{className:"authContainer",children:[Object(g.jsx)(x.a,{icon:v.c,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),Object(g.jsx)(y,{}),Object(g.jsxs)("div",{className:"authBtns",children:[Object(g.jsxs)("button",{onClick:e,name:"google",className:"authBtn",children:["Continue with Google ",Object(g.jsx)(x.a,{icon:v.b})]}),Object(g.jsxs)("button",{onClick:e,name:"github",className:"authBtn",children:["Continue with Github ",Object(g.jsx)(x.a,{icon:v.a})]})]})]})},N=n(34),k=n(19),S=function(e){var t=e.nweetObj,n=e.isOwner,c=Object(a.useState)(!1),r=Object(i.a)(c,2),s=r[0],u=r[1],o=Object(a.useState)(t.text),l=Object(i.a)(o,2),d=l[0],p=l[1],f=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete this nweet?")){e.next=6;break}return e.next=4,O.doc("nweets/".concat(t.id)).delete();case 4:return e.next=6,h.refFromURL(t.attachmentUrl).delete();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){return u((function(e){return!e}))},v=function(){var e=Object(b.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,O.doc("nweets/".concat(t.id)).update({text:d});case 3:u(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsx)("div",{className:"nweet",children:s?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("form",{onSubmit:v,className:"container nweetEdit",children:[Object(g.jsx)("input",{type:"text",placeholder:"Edit your nweet",value:d,required:!0,autoFocus:!0,onChange:function(e){var t=e.target.value;p(t)},className:"formInput"}),Object(g.jsx)("input",{type:"submit",value:"Update Nweet",className:"formBtn"})]}),Object(g.jsx)("span",{onClick:m,className:"formBtn cancelBtn",children:"Cancel"})]}):Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("h4",{children:t.text}),t.attachmentUrl&&Object(g.jsx)("img",{src:t.attachmentUrl}),n&&Object(g.jsxs)("div",{class:"nweet__actions",children:[Object(g.jsx)("span",{onClick:f,children:Object(g.jsx)(x.a,{icon:k.d})}),Object(g.jsx)("span",{onClick:m,children:Object(g.jsx)(x.a,{icon:k.a})})]})]})})},I=n(54),C=function(e){var t=e.userObj,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],s=c[1],u=Object(a.useState)(""),o=Object(i.a)(u,2),l=o[0],d=o[1],p=function(){var e=Object(b.a)(j.a.mark((function e(n){var a,c,i,u;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==r){e.next=2;break}return e.abrupt("return");case 2:if(n.preventDefault(),a="",""===l){e.next=12;break}return c=h.ref().child("".concat(t.uid,"/").concat(Object(I.a)())),e.next=8,c.putString(l,"data_url");case 8:return i=e.sent,e.next=11,i.ref.getDownloadURL();case 11:a=e.sent;case 12:return u={text:r,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:a},e.next=15,O.collection("nweets").add(u);case 15:s(""),d("");case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)("form",{onSubmit:p,className:"factoryForm",children:[Object(g.jsxs)("div",{className:"factoryInput__container",children:[Object(g.jsx)("input",{className:"factoryInput__input",value:r,onChange:function(e){var t=e.target.value;s(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),Object(g.jsx)("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})]}),Object(g.jsxs)("label",{for:"attach-file",className:"factoryInput__label",children:[Object(g.jsx)("span",{children:"Add photos"}),Object(g.jsx)(x.a,{icon:k.b})]}),Object(g.jsx)("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){var t=e.currentTarget.result;d(t)},n.readAsDataURL(t)},style:{opacity:0}}),l&&Object(g.jsxs)("div",{className:"factoryForm__attachment",children:[Object(g.jsx)("img",{src:l,style:{backgroundImage:l}}),Object(g.jsxs)("div",{className:"factoryForm__clear",onClick:function(){return d("")},children:[Object(g.jsx)("span",{children:"Remove"}),Object(g.jsx)(x.a,{icon:k.c})]})]})]})},A=function(e){var t=e.userObj,n=Object(a.useState)([]),c=Object(i.a)(n,2),r=c[0],s=c[1];return Object(a.useEffect)((function(){O.collection("nweets").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(N.a)({id:e.id},e.data())}));s(t)}))}),[]),Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)(C,{userObj:t}),Object(g.jsx)("div",{style:{marginTop:30},children:r.map((function(e){return Object(g.jsx)(S,{nweetObj:e,isOwner:e.creatorId===t.uid},e.id)}))})]})},F=function(e){var t=e.refreshUser,n=e.userObj,c=Object(o.f)(),r=Object(a.useState)(n.displayName),s=Object(i.a)(r,2),u=s[0],l=s[1],d=function(){var e=Object(b.a)(j.a.mark((function e(a){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),n.displayName===u){e.next=5;break}return e.next=4,n.updateProfile({displayName:u});case 4:t();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)("div",{className:"container",children:[Object(g.jsxs)("form",{onSubmit:d,className:"profileForm",children:[Object(g.jsx)("input",{onChange:function(e){var t=e.target.value;l(t)},type:"text",autoFocus:!0,placeholder:"Display name",value:u,className:"formInput"}),Object(g.jsx)("input",{type:"submit",value:"Update Profile",className:"formBtn",style:{marginTop:10}})]}),Object(g.jsx)("span",{className:"formBtn cancelBtn logOut",onClick:function(){f.signOut(),c.push("/")},children:"Log Out"})]})},U=function(e){var t=e.userObj;return Object(g.jsx)("nav",{children:Object(g.jsxs)("ul",{stle:{display:"flex",justifyContent:"center",marginTop:50},children:[Object(g.jsx)("li",{children:Object(g.jsx)(u.b,{to:"/",style:{marginRight:10},children:Object(g.jsx)(x.a,{icon:v.c,color:"#04AAFF",size:"2x"})})}),Object(g.jsx)("li",{children:Object(g.jsxs)(u.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12},children:[Object(g.jsx)(x.a,{icon:k.e,color:"#04AAFF",size:"2x"}),Object(g.jsx)("span",{style:{marginTop:10},children:t.displayName?"".concat(t.displayName,"\uc758 Profile"):"Profile"})]})})]})})},_=function(e){var t=e.refreshUser,n=e.isLoggedIn,a=e.userObj;return Object(g.jsxs)(u.a,{children:[n&&Object(g.jsx)(U,{userObj:a}),Object(g.jsx)(o.c,{children:n?Object(g.jsxs)("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"},children:[Object(g.jsx)(o.a,{exact:!0,path:"/",children:Object(g.jsx)(A,{userObj:a})}),Object(g.jsx)(o.a,{exact:!0,path:"/profile",children:Object(g.jsx)(F,{userObj:a,refreshUser:t})})]}):Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(o.a,{exact:!0,path:"/",children:Object(g.jsx)(w,{})})})})]})};var P=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(null),u=Object(i.a)(s,2),o=u[0],l=u[1];return Object(a.useEffect)((function(){f.onAuthStateChanged((function(e){l(e?{displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}}:null),r(!0)}))}),[]),Object(g.jsx)(c.a.Fragment,{children:n?Object(g.jsx)(_,{refreshUser:function(){var e=f.currentUser;l({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})},isLoggedIn:Boolean(o),userObj:o}):"Initializing..."})};n(49);console.log(m),s.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(P,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.c1126775.chunk.js.map