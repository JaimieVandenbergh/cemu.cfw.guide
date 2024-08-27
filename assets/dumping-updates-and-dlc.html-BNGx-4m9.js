import{_ as n,r as a,o as r,c as s,b as e,d as o,e as t,a as l}from"./app-BnGocD8_.js";const d={},c=l('<p>In this section, we look at how to &quot;dump&quot; (copy) your updates and DLC from your Wii U system over to your PC.</p><p>To do this, we&#39;re going to need to use a custom homebrew application to dump your updates/DLC. This is done using an exploit in the Wii U browser.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>These instructions are nearly identical to copying over digital games, however we will copy the update/DLC files to another place and install them a different way.</p></div><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>For this method, we will be copying update/DLC files over the internet using an FTP (File Transfer Protocol) server and client. This allows you to copy files over your local network directly to your computer.</p><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>This process involves accessing the Wii U internal memory! If you don&#39;t follow the instructions correctly, you could potentially cause serious damage to your console.</p></div><h2 id="requirements" tabindex="-1"><a class="header-anchor" href="#requirements" aria-hidden="true">#</a> Requirements</h2><ul><li>An SD card for homebrew and dumping</li></ul><h2 id="downloads" tabindex="-1"><a class="header-anchor" href="#downloads" aria-hidden="true">#</a> Downloads</h2>',9),h={href:"https://www.wiiubru.com/appstore/zips/mocha.zip",target:"_blank",rel:"noopener noreferrer"},u=e("ul",null,[e("li",null,"This will also work with (Coldboot) Haxchi")],-1),p=e("li",null,[o("The Mocha "),e("a",{href:"/assets/files/config.ini"},"config")],-1),f={href:"https://github.com/wiiu-env/homebrew_launcher_installer/releases/latest",target:"_blank",rel:"noopener noreferrer"},m=e("ul",null,[e("li",null,[o("You will need to download the "),e("code",null,"payload.zip"),o(" file")])],-1),y={href:"https://github.com/dimok789/homebrew_launcher/releases/tag/1.4",target:"_blank",rel:"noopener noreferrer"},w=e("ul",null,[e("li",null,[o("You will need to download the v1.4 "),e("code",null,"homebrew_launcher.v1.4.zip"),o(" release of The Homebrew Launcher")])],-1),g=e("a",{href:"/assets/files/ftpiiu_everywhere.elf"},"FTPiiU",-1),_={href:"https://github.com/FIX94/ftpiiu/releases",target:"_blank",rel:"noopener noreferrer"},b={href:"https://filezilla-project.org/download.php?show_all=1",target:"_blank",rel:"noopener noreferrer"},x=l('<h2 id="preparations" tabindex="-1"><a class="header-anchor" href="#preparations" aria-hidden="true">#</a> Preparations</h2><ol><li>Download and install FileZilla to your computer</li><li>Extract the <code>mocha.zip</code> file to the root of your SD card <ul><li>If prompted to, replace any pre-existing files</li></ul></li><li>Extract the <code>homebrew_launcher.v.1.4.zip</code> file to the root of your SD card</li><li>Copy the <code>config.ini</code> file to the <code>/wiiu/apps/mocha</code> folder on your SD card</li><li>Copy the <code>payload.elf</code> file from the <code>payload.zip</code> file to the <code>/wiiu</code> folder on your SD card</li><li>Download and move the <code>ftpiiu.elf</code> file to the <code>\\wiiu\\apps</code> folder on your SD Card</li><li>Ensure you have enough space on your PC for your game</li><li>Eject your SD card from Windows and put it into your Wii U console</li></ol><h2 id="launching-mochacfw" tabindex="-1"><a class="header-anchor" href="#launching-mochacfw" aria-hidden="true">#</a> Launching MochaCFW</h2>',3),T=e("li",null,"Turn on your Wii U console",-1),v=e("li",null,[o("Launch the internet browser and open "),e("code",null,"wiiuexploit.xyz")],-1),C=e("code",null,"Run Homebrew Launcher!",-1),F=e("li",null,"If your console freezes for more than 10 seconds, hold down the Power button for 4 seconds and reboot",-1),D={href:"https://en-americas-support.nintendo.com/app/answers/detail/a_id/1507/~/how-to-delete-the-internet-browser-history",target:"_blank",rel:"noopener noreferrer"},I=e("li",null,[o("Once in the Homebrew Launcher, launch MochaCFW "),e("ul",null,[e("li",null,"This should return you back to the Homebrew Launcher")])],-1),P=l('<h2 id="dumping-files" tabindex="-1"><a class="header-anchor" href="#dumping-files" aria-hidden="true">#</a> Dumping Files</h2><h3 id="connecting-via-ftp" tabindex="-1"><a class="header-anchor" href="#connecting-via-ftp" aria-hidden="true">#</a> Connecting via FTP</h3><ol><li>Run <code>FTPiiU Everywhere</code> from the Homebrew Launcher</li><li>On your screen you should see a line saying:<br><code>Listening for data connections at xxx.xxx.xxx.xxx:PORT</code><br> where each <code>x</code> and <code>PORT</code> is a number <ul><li>This is the IP address and port of your FTP server</li></ul></li><li>Keep this screen open on your Wii U</li><li>On your computer, open FileZilla</li><li>Enter in your IP address to the <code>Host</code> field on the top bar <ul><li>This is the <code>xxx.xxx.xxx.xxx</code> part</li></ul></li><li>Enter in your port to the <code>Port</code> field on the top bar <ul><li>This is the <code>PORT</code> part</li></ul></li><li>When warned about an insecure connection, ignore and continue</li><li>You should now see your Wii U storage displayed on the right half of the FileZilla window</li></ol><h3 id="transferring-files" tabindex="-1"><a class="header-anchor" href="#transferring-files" aria-hidden="true">#</a> Transferring Files</h3>',4),k=l("<li>If your game is stored on your Wii U internal memory, navigate to <code>storage_mlc/usr/title/</code></li><li>If your game is stored on a USB storage device, navigate to <code>storage_usb/usr/title/</code></li><li>If you want to dump an update, open the <code>0005000E</code> folder</li><li>If you want to dump DLC, open the <code>0005000C</code> folder</li><li>In this directory, you should see folders with 8 character names <ul><li>This is the last 8 digits of each game&#39;s &quot;Title ID&quot;, which allows to Wii U to uniquely identify each game by a number, instead of a name</li></ul></li>",5),L={href:"http://wiiubrew.org/wiki/Title_database#00050000:_eShop_and_disc_titles",target:"_blank",rel:"noopener noreferrer"},U=e("ul",null,[e("li",null,[o("Copy the Title ID of the game and use "),e("strong",null,"Ctrl+F"),o(" to search for it")])],-1),W=e("li",null,"Once you've found the game you want, drag and drop it to a folder on your PC on the left-side panel of FileZilla",-1),E=l('<div class="custom-container tip"><p class="custom-container-title">TIP</p><p>A lot of the data-less files will fail to transfer, but these can be ignored. To be safe, make sure to retry all failed downloads before exiting to ensure that all files that <em>should</em> be transferred have done so.</p></div><p>Your game should now begin copying over to your computer. This will take a very long time and you may want to go do something else while this is happening.</p><p>After this is finished, you can exit FileZilla and turn off your Wii U.</p><h2 id="installing-to-cemu" tabindex="-1"><a class="header-anchor" href="#installing-to-cemu" aria-hidden="true">#</a> Installing to Cemu</h2><ol><li>Open the Cemu application</li><li>On the top bar, navigate to <code>File</code> -&gt; <code>Install game update or DLC</code></li><li>Navigate to and open the folder of your update/DLC dump</li><li>Open the <code>meta</code> folder</li><li>Select the <code>meta.xml</code> file</li></ol><p>Cemu will now automatically install your update/DLC to your mlc01 storage folder. This may take some time.</p>',6);function S(O,z){const i=a("ExternalLinkIcon");return r(),s("div",null,[c,e("ul",null,[e("li",null,[o("The latest release of "),e("a",h,[o("MochaCFW"),t(i)]),u]),p,e("li",null,[o("The latest release of "),e("a",f,[o("Homebrew Launcher Installer"),t(i)]),m]),e("li",null,[o("The v1.4 release of "),e("a",y,[o("The Homebrew Launcher"),t(i)]),w]),e("li",null,[o("A modified release of "),g,o(" (FTP Server) "),e("ul",null,[e("li",null,[o("If you use (Coldboot) Haxchi, download the latest release of "),e("a",_,[o("FTPiiU"),t(i)]),o(" (FTP server)")])])]),e("li",null,[o("The latest release of "),e("a",b,[o("FileZilla"),t(i)]),o(" (FTP Client)")])]),x,e("ol",null,[T,v,e("li",null,[o("Tap "),C,e("ul",null,[F,e("li",null,[o("Once rebooted, "),e("a",D,[o("reset the browser's save data"),t(i)]),o(" and try again")])])]),I]),P,e("ol",null,[k,e("li",null,[o("You can use the full list of each game's Title ID to identify which game is which, found "),e("a",L,[o("here"),t(i)]),U]),W]),E])}const q=n(d,[["render",S],["__file","dumping-updates-and-dlc.html.vue"]]);export{q as default};
