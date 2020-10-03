let n=document.createElement("style");n.innerHTML="",document.head.appendChild(n);import{S as a,i as s,s as t,c as p,a as o,m as e,t as c,b as l,d as u,g as i,h as k,j as r,k as d,l as m,n as g,o as f,p as b,N as v,q as h,r as C,Y as $}from"./index.6b674a45.js";import"./Button.f0f995b5.js";import"./index.77bc22b8.js";import{C as M,P as y}from"./Preview.da06bf80.js";import"./ChevronDown16.5983f6dc.js";import"./Loading.1494bed2.js";import"./Column.6ef18044.js";import"./Content.7baad37e.js";import"./store.4e2c42a1.js";function x(n){let a,s,t,p,o,e,c,l,u,$,M,y,x,w,B,E,T,S,z,j,H,L,D,_,U,I,P,O,A,R,q,N,V,Y;return{c(){a=i("div"),s=i("ul"),t=i("li"),p=i("a"),o=k("Usage"),e=r(),c=i("ul"),l=i("li"),u=i("a"),$=k("Default (transactional)"),M=r(),y=i("li"),x=i("a"),w=k("Danger modal"),B=r(),E=i("li"),T=i("a"),S=k("Passive modal"),z=r(),j=i("li"),H=i("a"),L=k("Extra-small size"),D=r(),_=i("li"),U=i("a"),I=k("Small size"),P=r(),O=i("li"),A=i("a"),R=k("Large size"),q=r(),N=i("li"),V=i("a"),Y=k("Prevent close on outside click"),this.h()},l(n){a=d(n,"DIV",{slot:!0});var i=m(a);s=d(i,"UL",{class:!0});var k=m(s);t=d(k,"LI",{class:!0});var r=m(t);p=d(r,"A",{class:!0,href:!0});var v=m(p);o=g(v,"Usage"),v.forEach(f),e=b(r),c=d(r,"UL",{class:!0});var h=m(c);l=d(h,"LI",{class:!0});var C=m(l);u=d(C,"A",{class:!0,href:!0});var F=m(u);$=g(F,"Default (transactional)"),F.forEach(f),C.forEach(f),M=b(h),y=d(h,"LI",{class:!0});var G=m(y);x=d(G,"A",{class:!0,href:!0});var J=m(x);w=g(J,"Danger modal"),J.forEach(f),G.forEach(f),B=b(h),E=d(h,"LI",{class:!0});var K=m(E);T=d(K,"A",{class:!0,href:!0});var Q=m(T);S=g(Q,"Passive modal"),Q.forEach(f),K.forEach(f),z=b(h),j=d(h,"LI",{class:!0});var W=m(j);H=d(W,"A",{class:!0,href:!0});var X=m(H);L=g(X,"Extra-small size"),X.forEach(f),W.forEach(f),D=b(h),_=d(h,"LI",{class:!0});var Z=m(_);U=d(Z,"A",{class:!0,href:!0});var nn=m(U);I=g(nn,"Small size"),nn.forEach(f),Z.forEach(f),P=b(h),O=d(h,"LI",{class:!0});var an=m(O);A=d(an,"A",{class:!0,href:!0});var sn=m(A);R=g(sn,"Large size"),sn.forEach(f),an.forEach(f),q=b(h),N=d(h,"LI",{class:!0});var tn=m(N);V=d(tn,"A",{class:!0,href:!0});var pn=m(V);Y=g(pn,"Prevent close on outside click"),pn.forEach(f),tn.forEach(f),h.forEach(f),r.forEach(f),k.forEach(f),i.forEach(f),this.h()},h(){v(p,"class","bx--link"),v(p,"href","#usage"),v(u,"class","bx--link"),v(u,"href","#default-transactional"),v(l,"class","bx--list__item"),v(x,"class","bx--link"),v(x,"href","#danger-modal"),v(y,"class","bx--list__item"),v(T,"class","bx--link"),v(T,"href","#passive-modal"),v(E,"class","bx--list__item"),v(H,"class","bx--link"),v(H,"href","#extra-small-size"),v(j,"class","bx--list__item"),v(U,"class","bx--link"),v(U,"href","#small-size"),v(_,"class","bx--list__item"),v(A,"class","bx--link"),v(A,"href","#large-size"),v(O,"class","bx--list__item"),v(V,"class","bx--link"),v(V,"href","#prevent-close-on-outside-click"),v(N,"class","bx--list__item"),v(c,"class","bx--list--unordered bx--list--nested"),v(t,"class","bx--list__item"),v(s,"class","bx--list--unordered"),v(a,"slot","aside")},m(n,i){h(n,a,i),C(a,s),C(s,t),C(t,p),C(p,o),C(t,e),C(t,c),C(c,l),C(l,u),C(u,$),C(c,M),C(c,y),C(y,x),C(x,w),C(c,B),C(c,E),C(E,T),C(T,S),C(c,z),C(c,j),C(j,H),C(H,L),C(c,D),C(c,_),C(_,U),C(U,I),C(c,P),C(c,O),C(O,A),C(A,R),C(c,q),C(c,N),C(N,V),C(V,Y)},d(n){n&&f(a)}}}function w(n){let a,s,t,M,x,w,B,E,T,S,z,j,H,L,D,_,U,I,P,O,A,R,q,N,V,Y,F,G,J,K,Q,W,X,Z,nn,an,sn,tn,pn,on,en;return M=new y({props:{framed:!0,src:"/framed/Modal/Modal",codeRaw:'<script>\n  import { Button, Modal } from "carbon-components-svelte";\n\n  let open = false;\n<\/script>\n\n<Button on:click={() => (open = true)}>Create database</Button>\n\n<Modal\n  bind:open\n  modalHeading="Create database"\n  primaryButtonText="Confirm"\n  secondaryButtonText="Cancel"\n  on:click:button--secondary={() => (open = false)}\n  on:open\n  on:close\n  on:submit\n>\n  <p>Create a new Cloudant database in the US South region.</p>\n</Modal>\n',code:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> Modal <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"carbon-components-svelte"</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">let</span> open <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>open <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Create database<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Modal</span>\n  <span class="token attr-name"><span class="token namespace">bind:</span>open</span>\n  <span class="token attr-name">modalHeading</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Create database<span class="token punctuation">"</span></span>\n  <span class="token attr-name">primaryButtonText</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Confirm<span class="token punctuation">"</span></span>\n  <span class="token attr-name">secondaryButtonText</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Cancel<span class="token punctuation">"</span></span>\n  <span class="token attr-name"><span class="token namespace">on:</span><span class="token namespace">click:</span>button--secondary=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>open <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n  <span class="token attr-name"><span class="token namespace">on:</span>open</span>\n  <span class="token attr-name"><span class="token namespace">on:</span>close</span>\n  <span class="token attr-name"><span class="token namespace">on:</span>submit</span>\n<span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Create a new Cloudant database in the US South region.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Modal</span><span class="token punctuation">></span></span>\n'}}),T=new y({props:{framed:!0,src:"/framed/Modal/DangerModal",codeRaw:'<script>\n  import { Button, Modal } from "carbon-components-svelte";\n\n  let open = false;\n<\/script>\n\n<Button kind="danger" on:click={() => (open = true)}>Delete all</Button>\n\n<Modal\n  danger\n  bind:open\n  modalHeading="Delete all instances"\n  primaryButtonText="Delete"\n  secondaryButtonText="Cancel"\n  on:click:button--secondary={() => (open = false)}\n  on:open\n  on:close\n  on:submit\n>\n  <p>This is a permanent action and cannot be undone.</p>\n</Modal>\n',code:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> Modal <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"carbon-components-svelte"</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">let</span> open <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">kind</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>danger<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>open <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Delete all<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Modal</span>\n  <span class="token attr-name">danger</span>\n  <span class="token attr-name"><span class="token namespace">bind:</span>open</span>\n  <span class="token attr-name">modalHeading</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Delete all instances<span class="token punctuation">"</span></span>\n  <span class="token attr-name">primaryButtonText</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Delete<span class="token punctuation">"</span></span>\n  <span class="token attr-name">secondaryButtonText</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Cancel<span class="token punctuation">"</span></span>\n  <span class="token attr-name"><span class="token namespace">on:</span><span class="token namespace">click:</span>button--secondary=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>open <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n  <span class="token attr-name"><span class="token namespace">on:</span>open</span>\n  <span class="token attr-name"><span class="token namespace">on:</span>close</span>\n  <span class="token attr-name"><span class="token namespace">on:</span>submit</span>\n<span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>This is a permanent action and cannot be undone.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Modal</span><span class="token punctuation">></span></span>\n'}}),L=new y({props:{framed:!0,src:"/framed/Modal/PassiveModal",codeRaw:'<script>\n  import { Button, Modal } from "carbon-components-svelte";\n\n  let open = false;\n<\/script>\n\n<Button kind="tertiary" on:click={() => (open = true)}>Learn more</Button>\n\n<Modal passiveModal bind:open modalHeading="IBM Cloudant" on:open on:close>\n  <p>\n    IBM Cloudant is a distributed, secure database with global availability and\n    zero vendor lock-in used to build web and mobile apps at scale.\n  </p>\n</Modal>\n',code:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> Modal <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"carbon-components-svelte"</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">let</span> open <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">kind</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>tertiary<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>open <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Learn more<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Modal</span> <span class="token attr-name">passiveModal</span> <span class="token attr-name"><span class="token namespace">bind:</span>open</span> <span class="token attr-name">modalHeading</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>IBM Cloudant<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">on:</span>open</span> <span class="token attr-name"><span class="token namespace">on:</span>close</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>\n    IBM Cloudant is a distributed, secure database with global availability and\n    zero vendor lock-in used to build web and mobile apps at scale.\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Modal</span><span class="token punctuation">></span></span>\n'}}),P=new y({props:{framed:!0,src:"/framed/Modal/ModalExtraSmall",codeRaw:'<script>\n  import { Modal } from "carbon-components-svelte";\n<\/script>\n\n<Modal\n  size="xs"\n  open\n  modalHeading="Create database"\n  primaryButtonText="Confirm"\n  secondaryButtonText="Cancel"\n  on:click:button--secondary\n  on:open\n  on:close\n  on:submit\n>\n  <p>Create a new Cloudant database in the US South region.</p>\n</Modal>\n',code:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> Modal <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"carbon-components-svelte"</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Modal</span>\n  <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>xs<span class="token punctuation">"</span></span>\n  <span class="token attr-name">open</span>\n  <span class="token attr-name">modalHeading</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Create database<span class="token punctuation">"</span></span>\n  <span class="token attr-name">primaryButtonText</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Confirm<span class="token punctuation">"</span></span>\n  <span class="token attr-name">secondaryButtonText</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Cancel<span class="token punctuation">"</span></span>\n  <span class="token attr-name"><span class="token namespace">on:</span><span class="token namespace">click:</span>button--secondary</span>\n  <span class="token attr-name"><span class="token namespace">on:</span>open</span>\n  <span class="token attr-name"><span class="token namespace">on:</span>close</span>\n  <span class="token attr-name"><span class="token namespace">on:</span>submit</span>\n<span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Create a new Cloudant database in the US South region.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Modal</span><span class="token punctuation">></span></span>\n'}}),N=new y({props:{framed:!0,src:"/framed/Modal/ModalSmall",codeRaw:'<script>\n  import { Modal } from "carbon-components-svelte";\n<\/script>\n\n<Modal\n  size="sm"\n  open\n  modalHeading="Create database"\n  primaryButtonText="Confirm"\n  secondaryButtonText="Cancel"\n  on:click:button--secondary\n  on:open\n  on:close\n  on:submit\n>\n  <p>Create a new Cloudant database in the US South region.</p>\n</Modal>\n',code:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> Modal <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"carbon-components-svelte"</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Modal</span>\n  <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sm<span class="token punctuation">"</span></span>\n  <span class="token attr-name">open</span>\n  <span class="token attr-name">modalHeading</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Create database<span class="token punctuation">"</span></span>\n  <span class="token attr-name">primaryButtonText</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Confirm<span class="token punctuation">"</span></span>\n  <span class="token attr-name">secondaryButtonText</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Cancel<span class="token punctuation">"</span></span>\n  <span class="token attr-name"><span class="token namespace">on:</span><span class="token namespace">click:</span>button--secondary</span>\n  <span class="token attr-name"><span class="token namespace">on:</span>open</span>\n  <span class="token attr-name"><span class="token namespace">on:</span>close</span>\n  <span class="token attr-name"><span class="token namespace">on:</span>submit</span>\n<span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Create a new Cloudant database in the US South region.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Modal</span><span class="token punctuation">></span></span>\n'}}),J=new y({props:{framed:!0,src:"/framed/Modal/ModalLarge",codeRaw:'<script>\n  import { Modal } from "carbon-components-svelte";\n<\/script>\n\n<Modal\n  size="lg"\n  open\n  modalHeading="Create database"\n  primaryButtonText="Confirm"\n  secondaryButtonText="Cancel"\n  on:click:button--secondary\n  on:open\n  on:close\n  on:submit\n>\n  <p>Create a new Cloudant database in the US South region.</p>\n</Modal>\n',code:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> Modal <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"carbon-components-svelte"</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Modal</span>\n  <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span>\n  <span class="token attr-name">open</span>\n  <span class="token attr-name">modalHeading</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Create database<span class="token punctuation">"</span></span>\n  <span class="token attr-name">primaryButtonText</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Confirm<span class="token punctuation">"</span></span>\n  <span class="token attr-name">secondaryButtonText</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Cancel<span class="token punctuation">"</span></span>\n  <span class="token attr-name"><span class="token namespace">on:</span><span class="token namespace">click:</span>button--secondary</span>\n  <span class="token attr-name"><span class="token namespace">on:</span>open</span>\n  <span class="token attr-name"><span class="token namespace">on:</span>close</span>\n  <span class="token attr-name"><span class="token namespace">on:</span>submit</span>\n<span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Create a new Cloudant database in the US South region.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Modal</span><span class="token punctuation">></span></span>\n'}}),pn=new y({props:{framed:!0,src:"/framed/Modal/ModalPreventOutsideClick",codeRaw:'<script>\n  import { Modal } from "carbon-components-svelte";\n<\/script>\n\n<Modal\n  preventCloseOnClickOutside\n  open\n  modalHeading="Create database"\n  primaryButtonText="Confirm"\n  secondaryButtonText="Cancel"\n  on:click:button--secondary\n  on:open\n  on:close\n  on:submit\n>\n  <p>Create a new Cloudant database in the US South region.</p>\n</Modal>\n',code:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> Modal <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"carbon-components-svelte"</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Modal</span>\n  <span class="token attr-name">preventCloseOnClickOutside</span>\n  <span class="token attr-name">open</span>\n  <span class="token attr-name">modalHeading</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Create database<span class="token punctuation">"</span></span>\n  <span class="token attr-name">primaryButtonText</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Confirm<span class="token punctuation">"</span></span>\n  <span class="token attr-name">secondaryButtonText</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Cancel<span class="token punctuation">"</span></span>\n  <span class="token attr-name"><span class="token namespace">on:</span><span class="token namespace">click:</span>button--secondary</span>\n  <span class="token attr-name"><span class="token namespace">on:</span>open</span>\n  <span class="token attr-name"><span class="token namespace">on:</span>close</span>\n  <span class="token attr-name"><span class="token namespace">on:</span>submit</span>\n<span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Create a new Cloudant database in the US South region.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Modal</span><span class="token punctuation">></span></span>\n'}}),{c(){a=i("h3"),s=k("Default (transactional)"),t=r(),p(M.$$.fragment),x=r(),w=i("h3"),B=k("Danger modal"),E=r(),p(T.$$.fragment),S=r(),z=i("h3"),j=k("Passive modal"),H=r(),p(L.$$.fragment),D=r(),_=i("h3"),U=k("Extra-small size"),I=r(),p(P.$$.fragment),O=r(),A=i("h3"),R=k("Small size"),q=r(),p(N.$$.fragment),V=r(),Y=i("h3"),F=k("Large size"),G=r(),p(J.$$.fragment),K=r(),Q=i("h3"),W=k("Prevent close on outside click"),X=r(),Z=i("p"),nn=i("code"),an=k("preventCloseOnClickOutside"),sn=k(" prevents the modal from being closed when clicking outside of an open modal. This prop is intended to be used for transactional modals."),tn=r(),p(pn.$$.fragment),on=r(),this.h()},l(n){a=d(n,"H3",{id:!0});var p=m(a);s=g(p,"Default (transactional)"),p.forEach(f),t=b(n),o(M.$$.fragment,n),x=b(n),w=d(n,"H3",{id:!0});var e=m(w);B=g(e,"Danger modal"),e.forEach(f),E=b(n),o(T.$$.fragment,n),S=b(n),z=d(n,"H3",{id:!0});var c=m(z);j=g(c,"Passive modal"),c.forEach(f),H=b(n),o(L.$$.fragment,n),D=b(n),_=d(n,"H3",{id:!0});var l=m(_);U=g(l,"Extra-small size"),l.forEach(f),I=b(n),o(P.$$.fragment,n),O=b(n),A=d(n,"H3",{id:!0});var u=m(A);R=g(u,"Small size"),u.forEach(f),q=b(n),o(N.$$.fragment,n),V=b(n),Y=d(n,"H3",{id:!0});var i=m(Y);F=g(i,"Large size"),i.forEach(f),G=b(n),o(J.$$.fragment,n),K=b(n),Q=d(n,"H3",{id:!0});var k=m(Q);W=g(k,"Prevent close on outside click"),k.forEach(f),X=b(n),Z=d(n,"P",{});var r=m(Z);nn=d(r,"CODE",{});var v=m(nn);an=g(v,"preventCloseOnClickOutside"),v.forEach(f),sn=g(r," prevents the modal from being closed when clicking outside of an open modal. This prop is intended to be used for transactional modals."),r.forEach(f),tn=b(n),o(pn.$$.fragment,n),on=b(n),this.h()},h(){v(a,"id","default-transactional"),v(w,"id","danger-modal"),v(z,"id","passive-modal"),v(_,"id","extra-small-size"),v(A,"id","small-size"),v(Y,"id","large-size"),v(Q,"id","prevent-close-on-outside-click")},m(n,p){h(n,a,p),C(a,s),h(n,t,p),e(M,n,p),h(n,x,p),h(n,w,p),C(w,B),h(n,E,p),e(T,n,p),h(n,S,p),h(n,z,p),C(z,j),h(n,H,p),e(L,n,p),h(n,D,p),h(n,_,p),C(_,U),h(n,I,p),e(P,n,p),h(n,O,p),h(n,A,p),C(A,R),h(n,q,p),e(N,n,p),h(n,V,p),h(n,Y,p),C(Y,F),h(n,G,p),e(J,n,p),h(n,K,p),h(n,Q,p),C(Q,W),h(n,X,p),h(n,Z,p),C(Z,nn),C(nn,an),C(Z,sn),h(n,tn,p),e(pn,n,p),h(n,on,p),en=!0},p:$,i(n){en||(c(M.$$.fragment,n),c(T.$$.fragment,n),c(L.$$.fragment,n),c(P.$$.fragment,n),c(N.$$.fragment,n),c(J.$$.fragment,n),c(pn.$$.fragment,n),en=!0)},o(n){l(M.$$.fragment,n),l(T.$$.fragment,n),l(L.$$.fragment,n),l(P.$$.fragment,n),l(N.$$.fragment,n),l(J.$$.fragment,n),l(pn.$$.fragment,n),en=!1},d(n){n&&f(a),n&&f(t),u(M,n),n&&f(x),n&&f(w),n&&f(E),u(T,n),n&&f(S),n&&f(z),n&&f(H),u(L,n),n&&f(D),n&&f(_),n&&f(I),u(P,n),n&&f(O),n&&f(A),n&&f(q),u(N,n),n&&f(V),n&&f(Y),n&&f(G),u(J,n),n&&f(K),n&&f(Q),n&&f(X),n&&f(Z),n&&f(tn),u(pn,n),n&&f(on)}}}function B(n){let a,s;return a=new M({props:{$$slots:{default:[w],aside:[x]},$$scope:{ctx:n}}}),{c(){p(a.$$.fragment)},l(n){o(a.$$.fragment,n)},m(n,t){e(a,n,t),s=!0},p(n,[s]){const t={};1&s&&(t.$$scope={dirty:s,ctx:n}),a.$set(t)},i(n){s||(c(a.$$.fragment,n),s=!0)},o(n){l(a.$$.fragment,n),s=!1},d(n){u(a,n)}}}export default class extends a{constructor(n){super(),s(this,n,null,B,t,{})}}