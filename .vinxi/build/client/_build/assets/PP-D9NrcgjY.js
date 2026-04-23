import{M as i}from"./index-CBPIhtCd.js";import{z as l,M as n,N as s,B as o,c as t,x as c}from"./web-CubqW7I-.js";var d=o('<div><iframe allow="autoplay; fullscreen"src=./PetalPatch/petalpatch.html name="Biggest Bird Game"scrolling=no frameborder=0 height=540px width=960px style="border:0px #000000 none">');const h=()=>(()=>{var r=l(d),e=r.firstChild;return n(e,"mozallowfullscreen",!0),n(e,"msallowfullscreen",!0),s(e,"allowFullscreen",!0),n(e,"allowtransparency",!0),r})();function a(r){const e={h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...i(),...r.components};return[t(e.h1,{children:"PETAL PATCH"}),`
`,t(h,{}),`
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
`,t(e.p,{children:"Start with a single starter variety. Breed it with itself or others. See what evolves."})]}function g(r={}){const{wrapper:e}={...i(),...r.components};return e?t(e,c(r,{get children(){return t(a,r)}})):a(r)}function p(){return t(g,{})}export{p as default};
