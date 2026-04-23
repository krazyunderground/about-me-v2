import{ssr as r,ssrHydrationKey as t,escape as c,createComponent as n,mergeProps as g}from"solid-js/web";import{useMDXComponents as s}from"solid-mdx";import l from"acronym";var m=["<h2","><strong>","</strong></h2>"];const d=()=>r(m,t(),c(l("krazy")));var a=["<br",">"];function i(o){const e={em:"em",p:"p",strong:"strong",...s(),...o.components};return[n(d,{}),`
`,n(e.p,{get children(){return["You've found my ",n(e.em,{children:"about me"})," / ",n(e.em,{children:"portfolio"})," page, so let's get straight to the point shall we?"]}}),`
`,n(e.p,{get children(){return["• My username is ",n(e.strong,{children:"Krazyunderground"}),", but most people call me ",n(e.strong,{children:"Krazy"}),r(a,t()),`
• I am 19 and my birthday is November 30th`,r(a,t()),`
• I am a `,n(e.strong,{children:"Programmer"})," and ",n(e.strong,{children:"IT Technician"}),". I can use many languages, but my favourite language is C#",r(a,t()),`
• I am now a `,n(e.strong,{children:"Degree Apprentice"})," studying ",n(e.strong,{children:"Digital and Technological Solutions"}),r(a,t()),`
• My hobbies include `,n(e.strong,{children:"Warhammer 40K"}),", ",n(e.strong,{children:"Photography"}),", ",n(e.strong,{children:"Guitar"})," and ",n(e.strong,{children:"Video Games"})," among other things! (feel free to ask)",r(a,t()),`
• My favourite colours are grey, black, and `,n(e.strong,{children:"red"}),r(a,t())]}})]}function h(o={}){const{wrapper:e}={...s(),...o.components};return e?n(e,g(o,{get children(){return n(i,o)}})):i(o)}function f(){return n(h,{})}export{f as default};
