import{_ as h}from"./async-BqLaikz3.js";import{_ as u,r as a,o as d,c,b as e,d as t,e as n,w as o,a as p}from"./app-BnGocD8_.js";const m={},g=p('<h2 id="required-reading" tabindex="-1"><a class="header-anchor" href="#required-reading" aria-hidden="true">#</a> Required Reading</h2><p>For the best performance, we&#39;ll be using the Vulkan graphics API. This tends to run faster than OpenGL and allows us to use features such as asynchronous shader compilation.</p><h3 id="asynchronous-shader-compilation" tabindex="-1"><a class="header-anchor" href="#asynchronous-shader-compilation" aria-hidden="true">#</a> Asynchronous Shader Compilation</h3><p>When running games in Cemu, graphical shaders need to be re-compiled to work on a desktop GPU. This can take some time, which causes small stutters in the game every time a new one is sent to the emulator.</p><p>Doing this asynchronously allows the emulator to run the process in the background. This means that when the shader is first called, it skips being rendered to the screen, and is instead stored for the next time it&#39;s used, providing a much smoother experience.</p><p>The video below shows loading Breath of the Wild for the first time using asynchronous shader compilation. After these shaders have been recompiled and cached, they won&#39;t need to be converted again, so the graphical glitches stop.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>You may need to update your graphics drivers to use this feature. Currently, this feature does not work on macOS at all.</p></div><img src="'+h+'" alt="A gif of asynchronous shader compilation, showing various items in Breath of the Wild popping in when the shader finishes compiling." style="width:100%;"><p><em>Asynchronous shader compilation in an older, slower Cemu version. More recent builds can do this in under 1/10th of a second, depending on the CPU.</em></p><h3 id="importing-shader-caches" tabindex="-1"><a class="header-anchor" href="#importing-shader-caches" aria-hidden="true">#</a> Importing shader caches</h3><p>Asynchronous shader compilation goes a long way to speed up running games for the first time, however we can also simply download the shaders needed to run each game from the internet. If another user has previously compiled the shaders, they can upload them for other users to import into Cemu.</p><p>If you&#39;re using OpenGL, you will only need to download the shader cache. If you&#39;re using Vulkan, you will need to download both the shader cache and pipeline cache. Shader caches work on each game regardless of its region, while pipeline caches are locked to the region of the game that they were generated on.</p><h3 id="vsync-matching" tabindex="-1"><a class="header-anchor" href="#vsync-matching" aria-hidden="true">#</a> VSync Matching</h3><p>Vulkan also allows us to use a new experimental VSync technique which allows Cemu to use the game&#39;s built-in frame-pacing instead. This avoids tearing and reduces input latency compared to previous methods.</p>',14),_={class:"custom-container tip"},f=e("p",{class:"custom-container-title"},"TIP",-1),y=e("h2",{id:"cemu-settings",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#cemu-settings","aria-hidden":"true"},"#"),t(" Cemu Settings")],-1),b=e("li",null,"Open the Cemu main menu",-1),w=e("li",null,[t("Click "),e("code",null,"Options"),t(" -> "),e("code",null,"General settings"),t(" on the top bar")],-1),v=e("li",null,[t("Navigate to the "),e("code",null,"Graphics"),t(" tab")],-1),k=e("code",null,"Vulkan",-1),C=e("li",null,'Ensure that your "Graphics Device" is set to use your most powerful GPU if your device has dual graphics',-1),x=e("ol",{start:"6"},[e("li",null,[t('Set "VSync" to '),e("code",null,"Match emulated display (Experimental)"),e("ul",null,[e("li",null,[t("If you use a display with variable refresh rate (G-SYNC), set this to "),e("code",null,"Off"),t(" instead")]),e("li",null,"This feature is experimental and may cause issues")])]),e("li",null,[t("Enable "),e("code",null,"Async shader compiler")]),e("li",null,[t("Navigate to the "),e("code",null,"Audio"),t(" tab")]),e("li",null,[t("Under "),e("code",null,"General"),t(', change "API" to '),e("code",null,"XAudio2")])],-1),V=e("ol",{start:"6"},[e("li",null,[t('Set "VSync" to '),e("code",null,"Double buffering")]),e("li",null,[t("Navigate to the "),e("code",null,"Audio"),t(" tab")]),e("li",null,[t("Under "),e("code",null,"General"),t(', change "API" to '),e("code",null,"Cubeb")]),e("li",null,[t("Under "),e("code",null,"TV"),t(', set "Device" to your primary audio output device')]),e("li",null,'Set "Volume" to 100%'),e("li",null,[t("Under "),e("code",null,"Gamepad"),t(', set "Device" to your primary audio output device')]),e("li",null,'Set "Volume" to 100%'),e("li",null,"Close the Settings window"),e("li",null,'At the top of your display, click "Debug"'),e("li",null,`Disable "Accurate barriers (Vulkan)" if it's enabled`)],-1),G=e("ol",{start:"6"},[e("li",null,[t('Set "VSync" to '),e("code",null,"Double buffering")]),e("li",null,[t("Navigate to the "),e("code",null,"Audio"),t(" tab")]),e("li",null,[t("Under "),e("code",null,"General"),t(', change "API" to '),e("code",null,"Cubeb")])],-1),S=e("h2",{id:"importing-shader-caches-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#importing-shader-caches-1","aria-hidden":"true"},"#"),t(" Importing shader caches")],-1),A={href:"https://chriztr.github.io/cemu_shader_and_pipeline_caches/",target:"_blank",rel:"noopener noreferrer"},I=e("li",null,"Scroll down to the game and region that you want to download",-1),T=e("li",null,[t("Click the download icon ( "),e("i",{class:"fas fa-download"}),t(" ) "),e("ul",null,[e("li",null,'Alternatively, click the "Download all" button near the top of the page')])],-1),P=e("li",null,[t("Extract the contents of the "),e("code",null,".zip"),t(" file to your Cemu folder")],-1),O=e("li",null,"Repeat this for every game needed",-1),U=e("hr",null,null,-1),D=e("p",null,"Cemu should now be running the fastest it can, with a huge increase in performance for some users.",-1);function N(z,E){const l=a("router-link"),i=a("Tab"),s=a("Tabs"),r=a("ExternalLinkIcon");return d(),c("div",null,[g,e("div",_,[f,e("p",null,[t("Ensure you are running the latest drivers and that your GPU supports Vulkan. If your GPU doesn't support Vulkan, follow the "),n(l,{to:"/optimizing-cemu-(opengl)"},{default:o(()=>[t("OpenGL Guide")]),_:1}),t(".")])]),y,e("ol",null,[b,w,v,e("li",null,[t('Change the "Graphics API" to '),k,t(" if it is not already "),e("ul",null,[e("li",null,[t("If this doesn't appear, or you have problems using Vulkan, read the "),n(l,{to:"/optimizing-cemu-(opengl)"},{default:o(()=>[t("OpenGL Optimization Guide")]),_:1})])])]),C]),n(s,{tabs:""},{default:o(()=>[n(i,{tab:"",name:"Windows",default:!0},{default:o(()=>[x]),_:1}),n(i,{tab:"",name:"macOS"},{default:o(()=>[V]),_:1}),n(i,{tab:"",name:"Linux"},{default:o(()=>[G]),_:1})]),_:1}),S,e("ol",null,[e("li",null,[t("Open "),e("a",A,[t("chriztr.github.io/cemu_shader_and_pipeline_caches"),n(r)]),t(" in your browser")]),I,T,P,O]),U,D])}const q=u(m,[["render",N],["__file","optimizing-cemu.html.vue"]]);export{q as default};