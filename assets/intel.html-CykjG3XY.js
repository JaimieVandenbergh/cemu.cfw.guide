import{_ as r,r as i,o as a,c as s,b as t,d as e,e as n,a as c}from"./app-BnGocD8_.js";const l={},d={class:"custom-container tip"},u=t("p",{class:"custom-container-title"},"TIP",-1),h={href:"https://downloadcenter.intel.com/product/80939/Graphics-Drivers",target:"_blank",rel:"noopener noreferrer"},p={href:"https://www.intel.com/content/www/us/en/support/articles/000005524/graphics-drivers.html",target:"_blank",rel:"noopener noreferrer"},m=c('<div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>OpenGL 4.1 to 4.4 will work, however you may experience graphical issues.</p></div><h2 id="cemu-settings" tabindex="-1"><a class="header-anchor" href="#cemu-settings" aria-hidden="true">#</a> Cemu Settings</h2><ol><li>Open the Cemu main menu</li><li>Click <code>Options</code> -&gt; <code>General settings</code> on the top bar</li><li>Navigate to the <code>Graphics</code> tab</li><li>Set &quot;VSync&quot; to <code>On</code></li><li>Navigate to the <code>Audio</code> tab</li><li>Under <code>General</code>, change &quot;API&quot; to <code>XAudio2</code></li></ol><h2 id="shortcuts-and-drivers" tabindex="-1"><a class="header-anchor" href="#shortcuts-and-drivers" aria-hidden="true">#</a> Shortcuts and Drivers</h2><ol><li>Ensure you are running in maximum performance mode.</li><li>If a game isn&#39;t working, consider creating a shortcut to Cemu and add <code>-legacy</code> to the target <ul><li>This may cause other games to stop working</li></ul></li><li>If it still doesn&#39;t work, update your iGPU driver.</li><li>If the issue still persists, it&#39;s likely that game won&#39;t work for your iGPU, or it is too old to run</li></ol><hr><p>Cemu should now be running the fastest it can on OpenGL.</p>',7);function _(g,f){const o=i("ExternalLinkIcon");return a(),s("div",null,[t("div",d,[u,t("p",null,[e("Ensure you are running the "),t("a",h,[e("latest drivers"),n(o)]),e(" and that your iGPU supports "),t("a",p,[e("OpenGL 4.5+"),n(o)]),e(".")])]),m])}const v=r(l,[["render",_],["__file","intel.html.vue"]]);export{v as default};
