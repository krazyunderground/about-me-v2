import{ssr as d,ssrHydrationKey as h,ssrStyle as l,escape as s,createComponent as t,mergeProps as g}from"solid-js/web";import{useMDXComponents as c}from"solid-mdx";import{createSignal as u,onMount as p,onCleanup as m}from"solid-js";var f=["<div",' style="','"><div style="','"><iframe mozallowfullscreen="true" allow="autoplay; fullscreen" src="./petalpatch/petalpatch.html" style="border:0 none;" name="Petal Patch" scrolling="no" msallowfullscreen="true" allowfullscreen allowtransparency="true" frameborder="0" height="','" width="','"></iframe></div></div>'];const r=1280,i=720,w=()=>{const[n,e]=u(1),a=()=>{};return p(()=>{typeof window<"u"&&window.addEventListener("resize",a)}),m(()=>{typeof window<"u"&&window.removeEventListener("resize",a)}),d(f,h(),l(`width:100%; max-width:${r}px; margin:0 auto; height:${i*n()}px; overflow:hidden;`),l(`width:${r}px; height:${i}px; transform:scale(${n()}); transform-origin:top left;`),`${s(i,!0)}px`,`${s(r,!0)}px`)};function o(n){const e={h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...c(),...n.components};return[t(e.h1,{children:"PETAL PATCH"}),`
`,t(w,{}),`
`,t(e.p,{get children(){return t(e.strong,{children:"A browser-based plant genetics game where you explore procedurally-generated plants."})}}),`
`,t(e.h2,{children:"What is it?"}),`
`,t(e.p,{children:"PetalPatch is an interactive genetics simulator. You start with a small collection of starter plants, each with unique genetics. Cross-breed them to create offspring, watch them grow through distinct life stages—from tiny seed to full bloom—and discover how small genetic changes lead to dramatically different plant forms."}),`
`,t(e.p,{get children(){return["Every plant is entirely procedural: no two are exactly alike. Growth is governed by ",t(e.strong,{children:"L-system grammars"})," (formal rules that expand iteratively), meaning plant structure is data-driven and emergent rather than hand-drawn. Combine that with carefully tuned randomness, and you get plants that feel alive and surprising."]}}),`
`,t(e.h2,{children:"How It Works (Technical)"}),`
`,t(e.p,{get children(){return["Each plant is defined by a ",t(e.strong,{children:"genome"})," containing:"]}}),`
`,t(e.ul,{get children(){return[`
`,t(e.li,{get children(){return[t(e.strong,{children:"Axiom"}),": starting symbol string"]}}),`
`,t(e.li,{get children(){return[t(e.strong,{children:"Production rules"}),': grammar transformations (e.g., "F → F[+F][-F]")']}}),`
`,t(e.li,{get children(){return[t(e.strong,{children:"Parameters"}),": branch angles, segment lengths, leaf size, bloom probability"]}}),`
`]}}),`
`,t(e.p,{get children(){return[t(e.strong,{children:"Breeding"})," blends two parent genomes: axioms splice, rules mix (unique parent rules included with probability), parameters interpolate, and mutations add variation. Offspring are never exact clones—even crossing identical genomes twice yields visibly different plants."]}}),`
`,t(e.p,{get children(){return[t(e.strong,{children:"Growth"})," is stage-based (Seed → Sprout → Sapling → Juvenile → Mature → Blooming), with each stage expanding the L-system grammar to add more branches, leaves, and petals. Rendering uses turtle graphics: each symbol in the expanded string is a drawing command (forward, turn, branch, etc.)."]}}),`
`,t(e.p,{get children(){return[t(e.strong,{children:"The visual result"}),": plants with rich structure—varying branch density, leaf placement, and bloom patterns—all emerging from compact, genetic rules."]}}),`
`,t(e.h2,{children:"Built With"}),`
`,t(e.p,{children:"Godot 4.6 (GDScript), L-system parsing, procedural noise (FastNoiseLite), and persistent JSON save files."}),`
`,t(e.hr,{}),`
`,t(e.p,{children:"Start with a single starter variety. Breed it with itself or others. See what evolves."})]}function y(n={}){const{wrapper:e}={...c(),...n.components};return e?t(e,g(n,{get children(){return t(o,n)}})):o(n)}function P(){return t(y,{})}export{P as default};
