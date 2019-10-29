(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{Ayh0:function(e,t,a){"use strict";a.r(t);var r=a("ke3Z"),s=a("5fFP"),o={data:function(){return{id:null,fieldsets:[],creatingFieldset:!1,form:new r.a({name:"",handle:"",description:"",type:"collection",fieldset:null,sidebar:"1",quicklink:"1",icon:"",route:"",template:"",categorizable:"1",creditable:"1",publishable:"1",revision_control:"1",seoable:"1",status:"1"})}},methods:{submit:function(){this.form.patch("/api/matrices/"+this.id).then((function(e){toast("Matrix successfully updated","success"),s.a.dispatch("navigation/fetchAdminNavigation")})).catch((function(e){toast(e.response.data.message,"failed")}))}},beforeRouteEnter:function(e,t,a){axios.all([axios.get("/api/matrices/"+e.params.matrix),axios.get("/api/fieldsets")]).then(axios.spread((function(e,t){a((function(a){a.fieldsets=_.map(t.data.data,(function(e){return{label:e.name,value:e.id}})),a.fieldsets.unshift({label:"None",value:null}),a.id=e.data.data.id,a.form.name=e.data.data.name,a.form.handle=e.data.data.handle,a.form.description=e.data.data.description,a.form.type=e.data.data.type,a.form.fieldset=e.data.data.fieldset&&e.data.data.fieldset.id?e.data.data.fieldset.id:null,a.form.sidebar=e.data.data.sidebar?"1":"0",a.form.quicklink=e.data.data.quicklink?"1":"0",a.form.icon=e.data.data.icon,a.form.route=e.data.data.route,a.form.template=e.data.data.template,a.form.revision_control=e.data.data.revision_control?"1":"0",a.form.categorizable=e.data.data.categorizable?"1":"0",a.form.creditable=e.data.data.creditable?"1":"0",a.form.publishable=e.data.data.publishable?"1":"0",a.form.seoable=e.data.data.seoable?"1":"0",a.form.status=e.data.data.status?"1":"0"}))})))}},i=a("KHd+"),l=Object(i.a)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("portal",{attrs:{to:"title"}},[a("app-title",{attrs:{icon:"chart-network"}},[e._v("Edit Matrix")])],1),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"content-container"},[a("form",{on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[a("p-card",[a("div",{staticClass:"row"},[a("div",{staticClass:"col xxl:text-right w-full xxl:w-1/3"},[a("div",{staticClass:"xxl:mr-10 xxl:mb-0 mb-6"},[a("h3",[e._v("General")]),e._v(" "),a("p",{staticClass:"text-sm"},[e._v("What will this matrix be called and what will it manage?")])])]),e._v(" "),a("div",{staticClass:"col w-full xxl:w-2/3"},[a("p-input",{attrs:{name:"name",label:"Name",help:"What this matrix will be called.",autocomplete:"off",autofocus:"",required:"","has-error":e.form.errors.has("name"),"error-message":e.form.errors.get("name")},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),e._v(" "),a("p-slug",{attrs:{name:"handle",label:"Handle",help:"A developer-friendly variant of the matrix's name.",autocomplete:"off",required:"",delimiter:"_",watch:e.form.name,"has-error":e.form.errors.has("handle"),"error-message":e.form.errors.get("handle")},model:{value:e.form.handle,callback:function(t){e.$set(e.form,"handle",t)},expression:"form.handle"}}),e._v(" "),a("p-input",{attrs:{name:"description",label:"Description",help:"Give a short description of what this matrix will manage and store.",autocomplete:"off",required:"","has-error":e.form.errors.has("description"),"error-message":e.form.errors.get("description")},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}}),e._v(" "),a("p-select",{attrs:{name:"type",label:"Type",help:"What type of matrix will this be? Only change this if you know what you're doing as it may result in data loss.",options:[{label:"Collection",value:"collection"},{label:"Page",value:"page"}],"has-error":e.form.errors.has("type"),"error-message":e.form.errors.get("type")},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}}),e._v(" "),a("p-select",{attrs:{name:"fieldset",label:"Fieldset",help:"What fieldset would you like to attach?",options:e.fieldsets,"has-error":e.form.errors.has("fieldset"),"error-message":e.form.errors.get("fieldset")},model:{value:e.form.fieldset,callback:function(t){e.$set(e.form,"fieldset",t)},expression:"form.fieldset"}})],1)]),e._v(" "),a("hr"),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col xxl:text-right w-full xxl:w-1/3"},[a("div",{staticClass:"xxl:mr-10 xxl:mb-0 mb-6"},[a("h3",[e._v("Customize")]),e._v(" "),a("p",{staticClass:"text-sm"},[e._v("Customize how your matrix will be found and displayed within the admin control panel.")])])]),e._v(" "),a("div",{staticClass:"col w-full xxl:w-2/3"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col w-full xxl:w-1/2 mb-6"},[a("p-select",{attrs:{name:"sidebar",label:"Show in Sidebar",help:"Do you want this matrix to be shown in the sidebar?",options:[{label:"Show",value:"1"},{label:"Hide",value:"0"}],"has-error":e.form.errors.has("sidebar"),"error-message":e.form.errors.get("sidebar")},model:{value:e.form.sidebar,callback:function(t){e.$set(e.form,"sidebar",t)},expression:"form.sidebar"}})],1),e._v(" "),a("div",{staticClass:"col w-full xxl:w-1/2 mb-6"},[a("p-select",{attrs:{name:"quicklink",label:"Show as Quicklink",help:"Do you want this matrix to be shown as a quicklink on the dashboard?",options:[{label:"Show",value:"1"},{label:"Hide",value:"0"}],"has-error":e.form.errors.has("quicklink"),"error-message":e.form.errors.get("quicklink")},model:{value:e.form.quicklink,callback:function(t){e.$set(e.form,"quicklink",t)},expression:"form.quicklink"}})],1),e._v(" "),a("div",{staticClass:"col w-full"},[a("icon-picker",{attrs:{name:"icon",label:"Icon",placeholder:"Search icons...",help:"Choose an icon that best represents your matrix.","has-error":e.form.errors.has("icon"),"error-message":e.form.errors.get("icon"),required:""},model:{value:e.form.icon,callback:function(t){e.$set(e.form,"icon",t)},expression:"form.icon"}})],1)])])]),e._v(" "),a("hr"),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col xxl:text-right w-full xxl:w-1/3"},[a("div",{staticClass:"xxl:mr-10 xxl:mb-0 mb-6"},[a("h3",[e._v("Route")]),e._v(" "),a("p",{staticClass:"text-sm"},[e._v("If your matrix will be accessible from the frontend, you may define its route and template here.")])])]),e._v(" "),a("div",{staticClass:"col w-full xxl:w-2/3"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col w-full xxl:w-1/2 xxl:mb-0 mb-6"},[a("p-input",{attrs:{name:"route",label:"Route",help:"When the URI matches this pattern...",autocomplete:"off",monospaced:"","has-error":e.form.errors.has("route"),"error-message":e.form.errors.get("route")},model:{value:e.form.route,callback:function(t){e.$set(e.form,"route",t)},expression:"form.route"}})],1),e._v(" "),a("div",{staticClass:"col w-full xxl:w-1/2"},[a("p-input",{attrs:{name:"template",label:"Template",help:"Render this template",autocomplete:"off","has-error":e.form.errors.has("template"),"error-message":e.form.errors.get("template"),monospaced:""},model:{value:e.form.template,callback:function(t){e.$set(e.form,"template",t)},expression:"form.template"}})],1)])])])])],1)]),e._v(" "),a("div",{staticClass:"side-container"},[a("form",{on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[a("p-card",[a("div",{staticClass:"row"},[a("div",{staticClass:"col w-full"},[a("p-select",{attrs:{name:"status",label:"Status",options:[{label:"Enabled",value:"1"},{label:"Disabled",value:"0"}]},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}})],1)]),e._v(" "),a("portal",{attrs:{to:"actions"}},[a("router-link",{staticClass:"button mr-3",attrs:{to:{name:"matrices"}}},[e._v("Go Back")]),e._v(" "),a("button",{staticClass:"button button--primary",attrs:{type:"submit"},on:{click:function(t){return t.preventDefault(),e.submit(t)}}},[e._v("Save Matrix")])],1)],1)],1)])])],1)}),[],!1,null,null,null);t.default=l.exports},ke3Z:function(e,t,a){"use strict";function r(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.errors={}}var t,a,s;return t=e,(a=[{key:"has",value:function(e){return this.errors.hasOwnProperty(e)}},{key:"any",value:function(){return Object.keys(this.errors).length>0}},{key:"get",value:function(e){if(this.errors[e])return this.errors[e][0]}},{key:"record",value:function(e){this.errors=e.errors}},{key:"clear",value:function(e){e?delete this.errors[e]:this.errors={}}}])&&r(t.prototype,a),s&&r(t,s),e}();function o(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}a.d(t,"a",(function(){return i}));var i=function(){function e(t){for(var a in function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.errors=new s,this.originalData=t,t)this[a]=t[a]}var t,a,r;return t=e,(a=[{key:"set",value:function(e,t){this.data[e]=t}},{key:"get",value:function(e){return this.data[e]}},{key:"reset",value:function(){for(var e in this.originalData)this[e]=this.originalData[e];this.errors.clear()}},{key:"data",value:function(){var e={};for(var t in this.originalData)e[t]=this[t];return e}},{key:"post",value:function(e){return this.submit("post",e)}},{key:"patch",value:function(e){return this.submit("patch",e)}},{key:"put",value:function(e){return this.submit("put",e)}},{key:"delete",value:function(e){return this.submit("delete",e)}},{key:"submit",value:function(e,t){var a=this;return new Promise((function(r,s){axios[e](t,a.data()).then((function(e){a.onSuccess(e.data),r(e.data)})).catch((function(e){a.onFailure(e.response.data),s(e.response.data)}))}))}},{key:"onSuccess",value:function(e){}},{key:"onFailure",value:function(e){this.errors.record(e)}}])&&o(t.prototype,a),r&&o(t,r),e}()}}]);