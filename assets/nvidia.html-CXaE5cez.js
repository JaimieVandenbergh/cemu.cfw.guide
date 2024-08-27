import{_ as i,r as n,o as a,c as s,b as e,d as t,e as c,a as l}from"./app-BnGocD8_.js";const r="/assets/images/nvidia-gpu-settings.png",d={},u={class:"custom-container tip"},h=e("p",{class:"custom-container-title"},"TIP",-1),p={href:"https://www.nvidia.com/Download/index.aspx",target:"_blank",rel:"noopener noreferrer"},g=l('<div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>OpenGL 4.1 to 4.4 will work, however you may experience graphical issues.</p></div><h2 id="gpu-settings" tabindex="-1"><a class="header-anchor" href="#gpu-settings" aria-hidden="true">#</a> GPU Settings</h2><ol><li>Open NVIDIA Control Panel <ul><li>You can access this by right clicking on your Desktop</li></ul></li><li>Make sure you are on the <code>Manage 3D Settings</code> section <ul><li>This is the default section when opening the control panel</li></ul></li><li>Go to the <code>Program Settings</code> tab</li><li>In &quot;1. Select a program to customise&quot; click <code>Add</code> -&gt; <code>Browse</code></li><li>Navigate to your Cemu folder and select the Cemu executable</li><li>Set &quot;Triple Buffering&quot; to <code>On</code></li><li>If you have a compatible display, enable G-Sync</li></ol><p><img src="'+r+'" alt="A screenshot of NVIDIA Settings"></p><h2 id="cemu-settings" tabindex="-1"><a class="header-anchor" href="#cemu-settings" aria-hidden="true">#</a> Cemu Settings</h2><ol><li>Open the Cemu main menu</li><li>Click <code>Options</code> -&gt; <code>General settings</code> on the top bar</li><li>Navigate to the <code>Graphics</code> tab</li><li>Set &quot;VSync&quot; to <code>Off</code></li><li>Navigate to the <code>Audio</code> tab</li><li>Under <code>General</code>, change &quot;API&quot; to <code>XAudio2</code></li></ol><hr><p>Cemu should now be running the fastest it can on OpenGL.</p>',8);function m(_,f){const o=n("ExternalLinkIcon");return a(),s("div",null,[e("div",u,[h,e("p",null,[t("Ensure you are running the "),e("a",p,[t("latest drivers"),c(o)]),t(" and that your GPU supports OpenGL 4.5+.")])]),g])}const b=i(d,[["render",m],["__file","nvidia.html.vue"]]);export{b as default};
