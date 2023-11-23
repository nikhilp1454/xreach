"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[698],{6664:function(e,t,n){var r=n(7568),a=n(9815),o=n(414);t.Z=function(e){var t=e.query,n=e.queryFn,s=e.transformResponse;return(0,r.Z)((function(){var e,r,u,i,c=arguments;return(0,o.__generator)(this,(function(o){switch(o.label){case 0:for(e=c.length,r=new Array(e),u=0;u<e;u++)r[u]=c[u];return[4,n(t.apply(void 0,(0,a.Z)(r)))];case 1:return i=o.sent(),"function"===typeof s?[2,s(i)]:[2,i]}}))}))}},5975:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(7568),a=n(1799),o=n(9534),s=n(414),u=n(9669),i=n.n(u),c=n(6646),d=n(2425);function l(e){var t=e.baseUrl;return function(){var e=(0,r.Z)((function(e){var n,r,u,l,f,p,y,m,g,h,Z,S,I,b,D,q,_,A,R;return(0,s.__generator)(this,(function(s){switch(s.label){case 0:n=e.body,r=e.headers,u=(0,o.Z)(e,["body","headers"]),s.label=1;case 1:return s.trys.push([1,3,,4]),f={},l=Object.assign((f["Content-Type"]="application/json",f),r),y={},[4,i().post(t,n,(0,a.Z)((y.headers=l,y),u))];case 2:return p=s.sent(),m=p.data,g=m.data,h=m.errors,(S={}).data=g,Z=S,h&&(Z.errors=(0,d.I)(h[0])),[2,Z];case 3:return I=s.sent(),D=(null===(b=I.response)||void 0===b?void 0:b.status)||500,q={},console.log((q.error=I,q)),(A={}).body=n,A.error=I,A.status=D,A.source="api",_=A,c.Z.error(_),[2,((R={}).data=null,R.errors=[v({code:D,message:I.message})],R)];case 4:return[2]}}))}));return function(t){return e.apply(this,arguments)}}()}function v(e){var t=e.message,n=e.code;return{message:"Internal Server Error",extensions:{message:t,error:!0,code:String(n)}}}i().defaults.timeout=3e4},9698:function(e,t,n){n.d(t,{vb:function(){return A},aC:function(){return E},Cx:function(){return _},aU:function(){return U},iM:function(){return N},Io:function(){return k}});var r=n(1799),a=n(9396),o=n(7294),s=n(1163),u=n.n(s),i=n(1980),c=n(1340),d=n(8228),l=n(5945),v=n(6492),f=n(9534),p=n(828),y=n(4690),m=n(1838),g=n(6664),h=(0,n(5975).Z)({baseUrl:c.j?m.Bp.NEXT_API_PATH:m.Bp.API_URL}),Z=(0,g.Z)({queryFn:h,query:function(e){var t={queryName:"refreshToken",args:{siteId:{value:e,type:"ID"},platform:{value:"cms",type:"Platform"}},select:"token expiresAt success message user { id email role name}"};return{body:(0,y.Z)(t,!0)}},transformResponse:function(e){var t=(0,r.Z)({},e);return e.data&&(t.data=e.data.refreshToken),t}}),S=(0,g.Z)({queryFn:h,query:function(e){var t={queryName:"acceptInvitation",args:{token:{value:e,type:"String!"}},select:"user { id email role name } token message success expiresAt"};return{body:(0,y.Z)(t,!0)}},transformResponse:function(e){var t=(0,r.Z)({},e);return e.data&&(t.data=e.data.acceptInvitation),t}}),I=(0,g.Z)({queryFn:h,query:function(e){var t={queryName:"loginWith",args:{siteId:{type:"ID!",value:e.siteId},provider:{type:"String",value:e.provider},platform:{type:"Platform!",value:"cms"},passthrough:{type:"String",value:e.passthrough},source:{type:"SourceEnum",value:"PORTAL"}},select:"user {id email role name} token message success expiresAt"};return{body:(0,y.Z)(t,!0)}},transformResponse:function(e){var t=(0,r.Z)({},e);return e.data&&(t.data=e.data.loginWith),t}}),b=(0,g.Z)({queryFn:h,query:function(e){var t=e.queryKey,n=(0,p.Z)(t,2),r=n[0],a=n[1],o=a.siteId,s=a.domain,u=a.tempUser,i=a.email,c=a.siteType,d={queryName:r,args:{siteId:{type:"ID!",value:o},email:{type:"String!",value:i},domain:{type:"String!",value:s},platform:{type:"Platform!",value:"cms"},passthrough:{type:"String",value:a.passthrough},isCustomDomain:{type:"Boolean",value:!1},siteType:{type:"String!",value:c},user:{type:"TempUserInput",value:u},source:{type:"SourceEnum",value:"PORTAL"}},select:"status message success"};return{body:(0,y.Z)(d)}},transformResponse:function(e){var t=(0,r.Z)({},e);return e.data&&(t.data=e.data.sendMagicLink),t}}),D=(0,g.Z)({queryFn:h,query:function(){return{body:(0,y.Z)({queryName:"logout",args:{}},!0)}}}),q=(0,g.Z)({queryFn:h,query:function(e){var t=e.id,n=e.token,r={queryName:"updateUser",args:{id:{type:"ID!",value:t},updateUserInput:{type:"UpdateUserInput",value:(0,f.Z)(e,["id","token"])}},select:"user {name email id} token expiresAt message success"};return{body:(0,y.Z)(r,!0),headers:{authorization:"Bearer ".concat(n)}}},transformResponse:function(e){var t=(0,r.Z)({},e);return e.data&&(t.data=e.data.updateUser),t}}),_=function(e){return(0,d.D)(I,{onSuccess:function(t){var n=t.data;n&&(e.setQueryData(["auth"],n),localStorage.setItem("authData",JSON.stringify(n)),u().push(location.origin))}})},A=function(){var e=(0,l.NL)();return(0,d.D)(S,{onSuccess:function(t){var n=t.data;(null===n||void 0===n?void 0:n.success)&&e.setQueryData(["auth"],n)}})},R=function(e){return(0,d.D)(Z,{onSuccess:function(t){var n=t.data;n&&e.setQueryData(["auth"],n)}})},N=function(e){return(0,v.a)(["sendMagicLink",e],b,{enabled:!1,onSuccess:function(e){var t=e.data,n=document.querySelector(".magic-link-response");if(n){var r=(null===t||void 0===t?void 0:t.success)?"green":"red";n.style.color=r,n.textContent=null===t||void 0===t?void 0:t.message}}})},T=function(){return c.j&&JSON.parse(localStorage.getItem("authData"))||{}},E=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.skip,s=void 0!==n&&n,u=(0,l.NL)(),c=u.getQueryData(["auth"])||T(),d=R(u),v=d.mutate,f=d.isLoading,p=(0,i.W)(),y=p.data,m=p.isLoading,g=null===y||void 0===y||null===(e=y.data)||void 0===e?void 0:e.id,h=!!c.user,Z=!(null===c||void 0===c?void 0:c.expiresAt)||1e3*c.expiresAt<Date.now();return(0,o.useEffect)((function(){!s&&h&&Z&&g&&v()}),[Z,v,g,s,h]),(0,a.Z)((0,r.Z)({isTokenExpired:Z,isAuth:!!(null===c||void 0===c?void 0:c.success)},c),{isLoading:m||f})},U=function(e){return(0,d.D)(D,{onSuccess:function(t){e.invalidateQueries(["getUserMembership"]),t&&e.setQueryData(["auth"],{})}})},k=function(e){return(0,d.D)(q,{onSuccess:function(t){var n=t.data;n.success&&(e.setQueryData(["auth"],n),u().push("#"))}})}},1980:function(e,t,n){n.d(t,{W:function(){return m}});var r=n(1163),a=n(3099),o=n(5945),s=n(6492),u=n(1799),i=n(828),c=n(4690),d=n(1838),l=n(6664),v=n(1340),f=(0,n(5975).Z)({baseUrl:v.j?d.Rm.NEXT_API_PATH:d.Rm.API_URL}),p=(0,l.Z)({queryFn:f,query:function(e){var t=e.queryKey,n=(0,i.Z)(t,2),r=n[0],a=n[1],o=a.domain,s=a.customDomain,u=a.select,d=void 0===u?"":u;return{body:(0,c.Z)({queryName:r,select:"id status name domain domainType dorikSitePrefix postSlug categorySlug siteType globalStyle isURLRedirectEnabled isAnalyticsEnabled analyticsSiteId "+d,args:{domain:{value:o,type:"String!"},customDomain:{value:s,type:"Boolean!"}}})}},transformResponse:function(e){var t=(0,u.Z)({},e);return e.data&&(t.data=e.data.getSiteByDomain),t}}),y=(0,a.e)("production"),m=function(e,t){var n=(0,o.NL)(),u=(0,r.useRouter)().query.domain||d._o;a.jU&&(u&&window.localStorage.setItem("__SIMULATE_DOMAIN",u),u=window.localStorage.getItem("__SIMULATE_DOMAIN")),e=a.jU?window.location.host:n.getQueryData(["host"]);var i=y.resolveHost(e||"",u),c=i.domain,l=i.isCustomDomain;return(0,s.a)(["getSiteByDomain",{domain:c,customDomain:l,select:t}],p)}},2425:function(e,t,n){n.d(t,{I:function(){return o}});var r=n(1799),a=n(9815),o=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduce((function(e,t){return t.apply(void 0,(0,a.Z)(e))}),[e])}}((function(e){var t=e.code,n=e.extensions;return[{message:e.message,extensions:(0,r.Z)({code:t},n)}]}),(function(e){var t=e.extensions,n=e.message;return[{extensions:(0,r.Z)({message:n},t)}]}),(function(e){var t=e.extensions,n=t.code,r=t.message,a=r;return 422===Number(n)&&"[object Object]"===Object.prototype.toString.call(r)&&(a=Object.values(r).join(",")),[{extensions:{code:n,message:{404:r,500:r,422:a,BAD_USER_INPUT:"Input is not valid",INTERNAL_SERVER_ERROR:"Internal Server Error"}[n]}}]}))},6646:function(e,t,n){var r=n(2876),a=function(e,t){var n,a=e.source,o=e.error;n=function(e){e.setTag("source",a),t(e),(0,r.Tb)(o)},(0,r.e)(n)},o={info:function(e){a(e,(function(e){e.setLevel("info")}))},warn:function(e){a(e,(function(e){e.setLevel("warning")}))},error:function(e){var t=e.body,n=e.status,r=e.error;a(e,(function(e){var a,o;e.setExtra("query",t),e.setExtra("message",null===r||void 0===r||null===(a=r.response)||void 0===a||null===(o=a.data)||void 0===o?void 0:o.errors),e.setTag("status",n),e.setLevel("error")}))}};t.Z=o}}]);
//# sourceMappingURL=698-8000ed3d7937bca6.js.map