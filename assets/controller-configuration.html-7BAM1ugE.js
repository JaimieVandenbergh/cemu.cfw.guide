import{_ as o,o as e,c as t,a as n}from"./app-BnGocD8_.js";const l={},r=n('<p>In this section we will be configuring controller inputs and motion controls for Cemu.</p><p>Motion control support can vary between controllers. Nintendo Switch, Dualshock 4 and DualSense controllers all have support for motion controls. Using the SDL controller API, this will be automatically detected.</p><p>Other controllers, such as Xbox controllers, do not support motion controls and will require alternative methods to enable them. Regular buttons should still work, however.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Cemuhook was previously required for motion controls, however Cemu now natively supports motion controls using the SDL controller API. If you have used Cemuhook in the past for motion controls, make sure to change <code>Options</code> -&gt; <code>GamePad motion source</code> to &quot;Default&quot;.</p></div><h2 id="instructions" tabindex="-1"><a class="header-anchor" href="#instructions" aria-hidden="true">#</a> Instructions</h2><ol><li>Open the Cemu application</li><li>On the top bar, go to <code>Options</code> -&gt; <code>Input settings</code></li><li>Change <code>Emulated controller</code> to &quot;Wii U GamePad&quot;</li><li>Click on the <code>Controller</code> field</li><li>Set <code>API</code> to &quot;SDLController&quot;</li><li>Set <code>Controller</code> to your desired controller <ul><li>If no controller appears after connecting it to your computer, try changing your controller API</li></ul></li><li>Proceed to map all your controller button inputs</li><li>If you would like to add another controller input, press the <code>+</code> button next to the <code>Controller</code> field <ul><li>This has many uses, such as using two Nintendo Switch Joy-Con&#39;s, or using a phone for motion input</li></ul></li><li>To enable motion controls or rumble, click <code>Settings</code> and change the corresponding settings</li><li>At the top, enter in a controller profile name, e.g. &quot;GamePad Controller&quot;</li><li>Click <code>Save</code></li></ol>',6),i=[r];function c(s,a){return e(),t("div",null,i)}const d=o(l,[["render",c],["__file","controller-configuration.html.vue"]]);export{d as default};
