import{ssr as i,ssrHydrationKey as l,createComponent as e,mergeProps as s}from"solid-js/web";import{useMDXComponents as a}from"solid-mdx";var o=["<div",'><iframe mozallowfullscreen="true" allow="autoplay; fullscreen" src="./PetalPatch/petalpatch.html" style="border:0px #000000 none;" name="Biggest Bird Game" scrolling="no" msallowfullscreen="true" allowfullscreen allowtransparency="true" frameborder="0" height="540px" width="960px"></iframe></div>'];const c=()=>i(o,l());function t(r){const n={h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...a(),...r.components};return[e(n.h1,{children:"PETAL PATCH"}),`
`,e(c,{}),`
`,e(n.p,{get children(){return e(n.strong,{children:"A browser-based plant genetics game where you explore procedurally-generated plants."})}}),`
`,e(n.h2,{children:"What is it?"}),`
`,e(n.p,{children:"PetalPatch is an interactive genetics simulator. You start with a small collection of starter plants, each with unique genetics. Cross-breed them to create offspring, watch them grow through distinct life stages—from tiny seed to full bloom—and discover how small genetic changes lead to dramatically different plant forms."}),`
`,e(n.p,{get children(){return["Every plant is entirely procedural: no two are exactly alike. Growth is governed by ",e(n.strong,{children:"L-system grammars"})," (formal rules that expand iteratively), meaning plant structure is data-driven and emergent rather than hand-drawn. Combine that with carefully tuned randomness, and you get plants that feel alive and surprising."]}}),`
`,e(n.h2,{children:"How It Works (Technical)"}),`
`,e(n.p,{get children(){return["Each plant is defined by a ",e(n.strong,{children:"genome"})," containing:"]}}),`
`,e(n.ul,{get children(){return[`
`,e(n.li,{get children(){return[e(n.strong,{children:"Axiom"}),": starting symbol string"]}}),`
`,e(n.li,{get children(){return[e(n.strong,{children:"Production rules"}),': grammar transformations (e.g., "F → F[+F][-F]")']}}),`
`,e(n.li,{get children(){return[e(n.strong,{children:"Parameters"}),": branch angles, segment lengths, leaf size, bloom probability"]}}),`
`]}}),`
`,e(n.p,{get children(){return[e(n.strong,{children:"Breeding"})," blends two parent genomes: axioms splice, rules mix (unique parent rules included with probability), parameters interpolate, and mutations add variation. Offspring are never exact clones—even crossing identical genomes twice yields visibly different plants."]}}),`
`,e(n.p,{get children(){return[e(n.strong,{children:"Growth"})," is stage-based (Seed → Sprout → Sapling → Juvenile → Mature → Blooming), with each stage expanding the L-system grammar to add more branches, leaves, and petals. Rendering uses turtle graphics: each symbol in the expanded string is a drawing command (forward, turn, branch, etc.)."]}}),`
`,e(n.p,{get children(){return[e(n.strong,{children:"The visual result"}),": plants with rich structure—varying branch density, leaf placement, and bloom patterns—all emerging from compact, genetic rules."]}}),`
`,e(n.h2,{children:"Built With"}),`
`,e(n.p,{children:"Godot 4.6 (GDScript), L-system parsing, procedural noise (FastNoiseLite), and persistent JSON save files."}),`
`,e(n.hr,{}),`
`,e(n.p,{children:"Start with a single starter variety. Breed it with itself or others. See what evolves."})]}function d(r={}){const{wrapper:n}={...a(),...r.components};return n?e(n,s(r,{get children(){return e(t,r)}})):t(r)}function u(){return e(d,{})}export{u as default};
