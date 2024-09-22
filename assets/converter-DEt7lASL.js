import{_ as T,c as w,o as v,a as y,b as s,F as L,d as i,e as x,f as A,h as H,m as I,q as U}from"./index-DsxU11VB.js";const R={class:"processor"},q=["innerHTML"],F={__name:"converter",props:{source:{type:HTMLElement},filename:{default(){return window.location.host.replace(/:/,"_")}},hideInstructions:{default(){return!1}}},setup(u){const c=u;function m(t){for(var e=[],l=document.styleSheets,a=0;a<l.length;a++)for(var r=l[a].rules||l[a].cssRules,o=0;o<r.length;o++){var n=r[o];t.matches(n.selectorText)&&e.push(n.style)}return e}const b=t=>{for(var e=[],l=document.styleSheets,a=0;a<l.length;a++)for(var r=l[a].rules||l[a].cssRules,o=0;o<r.length;o++){var n=r[o];(n.type==CSSRule.FONT_FACE_RULE||n.media&&n.media.mediaText)&&e.push(n.cssText)}return e},h=(t,e=!1)=>{var l=e?t:t.cloneNode(!0);t=e||t;for(var a=m(t),r="",o=0;o<a.length;o++){const d=a[o];for(var n=0;n<d.length;n++){var g=d[n],C=d.getPropertyValue(g);r+=g+": "+C+"; "}}r&&l.setAttribute("style",r);for(var f=l.children,n=0;n<f.length;n++)h(f[n],t.children[n]);return l},p=()=>{let t=`<style type="text/css">${b(c.source).join(`
`)}</style>`;return t+=h(c.source).innerHTML,t=t.replace(/ data-v-[a-z0-9]+=""/g,""),`<meta charset="UTF-8"><body>${t}</body>`},k=()=>{navigator.clipboard.writeText(p()).then(function(){console.log("HTML-Inhalt erfolgreich in die Zwischenablage kopiert.")}).catch(function(t){console.error("Fehler beim Kopieren des HTML-Inhalts: ",t)}),alert("HTMl was copied to clipboard!")},S=async()=>{let t="";for(const[r,o]of Object.entries({"Content-Transfer-Encoding":"quoted-printable","Content-Type":`text/html;\r
	charset=utf-8`,"Message-Id":"<C0E8D3F3-07A7-4F40-97AB-225D4DC44627>","Mime-Version":"1.0 (Mac OS X Mail 15.0 \\(3693.20.0.1.32\\))"}))t+=H(r,o+`\r
`);t+=I(`\r
`),t+=U(p());const e=new Blob([t.replace(/\r\n/g,`
`)],{type:"text/html"}),l=document.createElement("a"),a=window.URL.createObjectURL(e);l.href=a,l.download=`${c.filename}.mailsignature`,document.body.appendChild(l),l.click(),window.URL.revokeObjectURL(a),document.body.removeChild(l)},M=w(t=>`&lt;dict&gt;
    &lt;key&gt;SignatureIsRich&lt;/key&gt;
    &lt;true/&gt;
    &lt;key&gt;SignatureName&lt;/key&gt;
    &lt;string&gt;<span class="highlight">${c.filename}</span>&lt;/string&gt;
    &lt;key&gt;SignatureUniqueId&lt;/key&gt;
    &lt;string&gt;<span class="highlight">${c.filename}</span>&lt;/string&gt;
&lt;/dict&gt;
`);return(t,e)=>(v(),y("div",R,[s("button",{type:"button",onClick:S},"Download .mailsignature"),s("button",{type:"button",onClick:k},"Copy HTML Code"),u.hideInstructions?A("",!0):(v(),y(L,{key:0},[e[5]||(e[5]=s("h1",null,"Installation Instructions for Apple Mail Signature",-1)),s("ol",null,[e[1]||(e[1]=s("li",null,"Close Apple Mail.",-1)),e[2]||(e[2]=s("li",null,[i("Place this file in "),s("code",null,[i("/Users/"),s("span",{class:"highlight"},"<User>"),i("/Library/Mail/V"),s("span",{class:"highlight"},"<VersionNumber>"),i("/MailData/Signatures")]),i(".")],-1)),e[3]||(e[3]=s("li",null,[i("Open the file "),s("code",null,"AllSignatures.plist"),i(" in the same folder.")],-1)),s("li",null,[e[0]||(e[0]=i("Add the following value at the end of the array (before </array>): ")),s("pre",null,[s("code",{innerHTML:M.value},null,8,q)])]),e[4]||(e[4]=x('<li data-v-760937cc>Save the <code data-v-760937cc>AllSignatures.plist</code> file, close it, and lock it via the file&#39;s information dialog (select the file → <span class="key" data-v-760937cc>cmd</span> + <span class="key" data-v-760937cc>i</span> → check the &quot;Locked&quot; checkbox).</li><li data-v-760937cc>Open Apple Mail.</li><li data-v-760937cc>Unlock the <code data-v-760937cc>AllSignatures.plist</code> file.</li><li data-v-760937cc>You will find the signature in the Apple Mail settings under &quot;Signatures,&quot; where you can assign it to your account and possibly set it as the default.</li>',4))])],64))]))}},_=T(F,[["__scopeId","data-v-760937cc"]]);export{_ as default};
