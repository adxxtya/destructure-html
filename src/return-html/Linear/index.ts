export function getContentBetweenTags(
  html: string,
  openingTag: string
): string {
  let openingTagCount = 0;
  let closingTagCount = 0;
  const openingTagElement = openingTag.split(" ")[0].substring(1); // Extract the opening tag element from the provided openingTag parameter
  const openingTagStart = `<${openingTagElement}`;
  const openingTagEnd = `</${openingTagElement}`;

  let startIndex = html.indexOf(openingTagStart);

  if (startIndex === -1) {
    throw new Error("Opening tag not found in HTML data.");
  }

  for (let i = startIndex; i < html.length; i++) {
    if (html.substring(i, i + openingTagStart.length) === openingTagStart) {
      openingTagCount++;
    } else if (html.substring(i, i + openingTagEnd.length) === openingTagEnd) {
      closingTagCount++;
      if (closingTagCount === openingTagCount) {
        const endIndex = i + openingTagEnd.length;
        return html.substring(startIndex, endIndex);
      }
    }
  }

  throw new Error("Closing tag not found in HTML data.");
}

export function getContentInBetweenTags(
  html: string,
  openingTag: string,
  closingTag: string
): string {
  const openingTagElement = openingTag.split(" ")[0].substring(1); // Extract the opening tag element from the provided openingTag parameter
  const openingTagStart = `<${openingTagElement}`;
  const closingTagElement = closingTag.substring(2, closingTag.length - 1); // Extract the closing tag element from the provided closingTag parameter
  const closingTagEnd = `</${closingTagElement}`;

  const startIndex = html.indexOf(openingTagStart);

  if (startIndex === -1) {
    throw new Error("Opening tag not found in HTML data.");
  }

  let openingTagCount = 0;
  let closingTagCount = 0;
  let endIndex = -1;

  for (let i = startIndex; i < html.length; i++) {
    if (html.substring(i, i + openingTagStart.length) === openingTagStart) {
      openingTagCount++;
    } else if (html.substring(i, i + closingTagEnd.length) === closingTagEnd) {
      closingTagCount++;
      if (closingTagCount === openingTagCount) {
        endIndex = i + closingTagEnd.length;
        break;
      }
    }
  }

  if (endIndex === -1) {
    throw new Error("Closing tag not found in HTML data.");
  }

  return html.substring(startIndex, endIndex);
}

export function getContentById(html: string, id: string): string {
  const idIndex = html.indexOf(`id="${id}"`);

  if (idIndex === -1) {
    throw new Error(`Element with ID "${id}" not found in HTML data.`);
  }

  const openingTagStartIndex = html.lastIndexOf("<", idIndex);
  const openingTagEndIndex = html.indexOf(">", openingTagStartIndex);

  if (openingTagStartIndex === -1 || openingTagEndIndex === -1) {
    throw new Error(
      `Opening tag for element with ID "${id}" not found in HTML data.`
    );
  }

  const openingTag = html.substring(
    openingTagStartIndex,
    openingTagEndIndex + 1
  );

  const closingTagStartIndex = html.indexOf("</", openingTagEndIndex);
  const closingTagEndIndex = html.indexOf(">", closingTagStartIndex);

  if (closingTagStartIndex === -1 || closingTagEndIndex === -1) {
    throw new Error(
      `Closing tag for element with ID "${id}" not found in HTML data.`
    );
  }

  const closingTag = html.substring(
    closingTagStartIndex,
    closingTagEndIndex + 1
  );

  return getContentInBetweenTags(html, openingTag, closingTag);
}

const html = `<section class="responsive flow">
<div class="rdiv">
<a itemprop="relatedLink" href="https://www.peakpx.com/en/search?q=genshin+impact" rel="tag" class="rtags">Genshin Impact</a>
<a itemprop="relatedLink" href="https://www.peakpx.com/en/search?q=video+game" rel="tag" class="rtags">Video Game</a>
<a itemprop="relatedLink" href="https://www.peakpx.com/en/search?q=zhongli+%28genshin+impact%29" rel="tag" class="rtags">Zhongli (Genshin Impact)</a>
<a itemprop="relatedLink" href="https://www.peakpx.com/en/search?q=lumine+%28genshin+impact%29" rel="tag" class="rtags">Lumine (Genshin Impact)</a>
<a itemprop="relatedLink" href="https://www.peakpx.com/en/search?q=paimon+%28genshin+impact%29" rel="tag" class="rtags">Paimon (Genshin Impact)</a>
<a itemprop="relatedLink" href="https://www.peakpx.com/en/search?q=keqing+%28genshin+impact%29" rel="tag" class="rtags">Keqing (Genshin Impact)</a>
<a itemprop="relatedLink" href="https://www.peakpx.com/en/search?q=xiao+%28genshin+impact%29" rel="tag" class="rtags">Xiao (Genshin Impact)</a>
<a itemprop="relatedLink" href="https://www.peakpx.com/en/search?q=amber+%28genshin+impact%29" rel="tag" class="rtags">Amber (Genshin Impact)</a>
<a itemprop="relatedLink" href="https://www.peakpx.com/en/search?q=jean+%28genshin+impact%29" rel="tag" class="rtags">Jean (Genshin Impact)</a>
<a itemprop="relatedLink" href="https://www.peakpx.com/en/search?q=ningguang+%28genshin+impact%29" rel="tag" class="rtags">Ningguang (Genshin Impact)</a>
<a itemprop="relatedLink" href="https://www.peakpx.com/en/search?q=ganyu+%28genshin+impact%29" rel="tag" class="rtags">Ganyu (Genshin Impact)</a>
<a itemprop="relatedLink" href="https://www.peakpx.com/en/search?q=diluc+%28genshin+impact%29" rel="tag" class="rtags">Diluc (Genshin Impact)</a>
<a itemprop="relatedLink" href="https://www.peakpx.com/en/search?q=klee+%28genshin+impact%29" rel="tag" class="rtags">Klee (Genshin Impact)</a>
<a itemprop="relatedLink" href="https://www.peakpx.com/en/search?q=xiangling+%28genshin+impact%29" rel="tag" class="rtags">Xiangling (Genshin Impact)</a>
<a itemprop="relatedLink" href="https://www.peakpx.com/en/search?q=inazuma+%28genshin+impact%29" rel="tag" class="rtags">Inazuma (Genshin Impact)</a>
</div>
<ul itemscope="" itemtype="http://schema.org/ImageGallery" id="list_ul" align="middle" style="width: 1054px; height: 5652px;">
<li class="grid list_ads ad316" style="position: absolute; margin: 0px; top: 0px; left: 0px;">
<div>
<ul></ul>
<ul></ul>
<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-2606419576769320" data-ad-slot="6755779896" data-ad-format="auto"></ins>
<script>
        			(adsbygoogle = window.adsbygoogle || []).push({});
        		</script>
</div>
</li>
<li itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject" class="grid" style="position: absolute; margin: 0px; top: 0px; left: 358px;">
<span class="res">5326x3294px</span>
<figure>
<meta itemprop="keywords" content="Video Game, Genshin Impact, Amber (Genshin Impact), Barbara (Genshin Impact), Diluc (Genshin Impact), Klee (Genshin Impact), Lumine (Genshin Impact), Noelle (Genshin Impact), Paimon (Genshin Impact), Venti (Genshin Impact), HD wallpaper">
<link itemprop="contentUrl" href="https://w0.peakpx.com/wallpaper/437/137/HD-wallpaper-video-game-genshin-impact-amber-genshin-impact-barbara-genshin-impact-diluc-genshin-impact-klee-genshin-impact-lumine-genshin-impact-noelle-genshin-impact-paimon-genshin-impact.jpg">
<a itemprop="url" href="https://www.peakpx.com/en/hd-wallpaper-desktop-nlkqi" target="_blank">
<img itemprop="thumbnail" alt="Video Game, Genshin Impact, Amber (Genshin Impact), Barbara (Genshin Impact), Diluc (Genshin Impact), Klee (Genshin Impact), Lumine (Genshin Impact), Noelle (Genshin Impact), Paimon (Genshin Impact), Venti (Genshin Impact), HD wallpaper" title="Video Game, Genshin Impact, Amber (Genshin Impact), Barbara (Genshin Impact), Diluc (Genshin Impact), Klee (Genshin Impact), Lumine (Genshin Impact), Noelle (Genshin Impact), Paimon (Genshin Impact), Venti (Genshin Impact), HD wallpaper" src="https://w0.peakpx.com/wallpaper/437/137/HD-wallpaper-video-game-genshin-impact-amber-genshin-impact-barbara-genshin-impact-diluc-genshin-impact-klee-genshin-impact-lumine-genshin-impact-noelle-genshin-impact-paimon-genshin-impact-thumbnail.jpg" data-src="https://w0.peakpx.com/wallpaper/437/137/HD-wallpaper-video-game-genshin-impact-amber-genshin-impact-barbara-genshin-impact-diluc-genshin-impact-klee-genshin-impact-lumine-genshin-impact-noelle-genshin-impact-paimon-genshin-impact-thumbnail.jpg" class="lazy lst_img loaded" data-srcset="https://w0.peakpx.com/wallpaper/437/137/HD-wallpaper-video-game-genshin-impact-amber-genshin-impact-barbara-genshin-impact-diluc-genshin-impact-klee-genshin-impact-lumine-genshin-impact-noelle-genshin-impact-paimon-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/437/137/HD-wallpaper-video-game-genshin-impact-amber-genshin-impact-barbara-genshin-impact-diluc-genshin-impact-klee-genshin-impact-lumine-genshin-impact-noelle-genshin-impact-paimon-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/437/137/HD-wallpaper-video-game-genshin-impact-amber-genshin-impact-barbara-genshin-impact-diluc-genshin-impact-klee-genshin-impact-lumine-genshin-impact-noelle-genshin-impact-paimon-genshin-impact.jpg 4x" srcset="https://w0.peakpx.com/wallpaper/437/137/HD-wallpaper-video-game-genshin-impact-amber-genshin-impact-barbara-genshin-impact-diluc-genshin-impact-klee-genshin-impact-lumine-genshin-impact-noelle-genshin-impact-paimon-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/437/137/HD-wallpaper-video-game-genshin-impact-amber-genshin-impact-barbara-genshin-impact-diluc-genshin-impact-klee-genshin-impact-lumine-genshin-impact-noelle-genshin-impact-paimon-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/437/137/HD-wallpaper-video-game-genshin-impact-amber-genshin-impact-barbara-genshin-impact-diluc-genshin-impact-klee-genshin-impact-lumine-genshin-impact-noelle-genshin-impact-paimon-genshin-impact.jpg 4x" data-was-processed="true" width="338" height="209">
</a>
<figcaption itemprop="caption description" class="title overflow">Video Game, Genshin Impact, Amber (Genshin Impact), Barbara (Genshin Impact), Diluc (Genshin Impact), Klee (Genshin Impact), Lumine (Genshin Impact), Noelle (Genshin Impact), Paimon (Genshin Impact), Venti (Genshin Impact), HD wallpaper</figcaption>
</figure>
</li>
<li class="grid list_ads ad316" style="position: absolute; margin: 0px; top: 0px; left: 716px;">
<div>
<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-2606419576769320" data-ad-slot="6755779896" data-ad-format="auto"></ins>
<script>
        			(adsbygoogle = window.adsbygoogle || []).push({});
        		</script>
</div>
</li>
<li itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject" class="grid" style="position: absolute; margin: 0px; top: 230px; left: 358px;">
<span class="res">2000x1549px</span>
<figure>
<meta itemprop="keywords" content="Video Game, Genshin Impact, Xiao (Genshin Impact), HD wallpaper">
<link itemprop="contentUrl" href="https://w0.peakpx.com/wallpaper/531/631/HD-wallpaper-video-game-genshin-impact-xiao-genshin-impact.jpg">
<a itemprop="url" href="https://www.peakpx.com/en/hd-wallpaper-desktop-ahdna" target="_blank">
<img itemprop="thumbnail" alt="Video Game, Genshin Impact, Xiao (Genshin Impact), HD wallpaper" title="Video Game, Genshin Impact, Xiao (Genshin Impact), HD wallpaper" src="https://w0.peakpx.com/wallpaper/531/631/HD-wallpaper-video-game-genshin-impact-xiao-genshin-impact-thumbnail.jpg" data-src="https://w0.peakpx.com/wallpaper/531/631/HD-wallpaper-video-game-genshin-impact-xiao-genshin-impact-thumbnail.jpg" class="lazy lst_img loaded" data-srcset="https://w0.peakpx.com/wallpaper/531/631/HD-wallpaper-video-game-genshin-impact-xiao-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/531/631/HD-wallpaper-video-game-genshin-impact-xiao-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/531/631/HD-wallpaper-video-game-genshin-impact-xiao-genshin-impact.jpg 4x" srcset="https://w0.peakpx.com/wallpaper/531/631/HD-wallpaper-video-game-genshin-impact-xiao-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/531/631/HD-wallpaper-video-game-genshin-impact-xiao-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/531/631/HD-wallpaper-video-game-genshin-impact-xiao-genshin-impact.jpg 4x" data-was-processed="true" width="338" height="262">
</a>
<figcaption itemprop="caption description" class="title overflow">Video Game, Genshin Impact, Xiao (Genshin Impact), HD wallpaper</figcaption>
</figure>
</li>
<li itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject" class="grid" style="position: absolute; margin: 0px; top: 300px; left: 0px;">
<span class="res">3840x2160px</span>
<figure>
<meta itemprop="keywords" content="Video Game, Genshin Impact, Jean (Genshin Impact), HD wallpaper">
<link itemprop="contentUrl" href="https://w0.peakpx.com/wallpaper/471/215/HD-wallpaper-video-game-genshin-impact-jean-genshin-impact.jpg">
<a itemprop="url" href="https://www.peakpx.com/en/hd-wallpaper-desktop-aswel" target="_blank">
<img itemprop="thumbnail" alt="Video Game, Genshin Impact, Jean (Genshin Impact), HD wallpaper" title="Video Game, Genshin Impact, Jean (Genshin Impact), HD wallpaper" src="https://w0.peakpx.com/wallpaper/471/215/HD-wallpaper-video-game-genshin-impact-jean-genshin-impact-thumbnail.jpg" data-src="https://w0.peakpx.com/wallpaper/471/215/HD-wallpaper-video-game-genshin-impact-jean-genshin-impact-thumbnail.jpg" class="lazy lst_img loaded" data-srcset="https://w0.peakpx.com/wallpaper/471/215/HD-wallpaper-video-game-genshin-impact-jean-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/471/215/HD-wallpaper-video-game-genshin-impact-jean-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/471/215/HD-wallpaper-video-game-genshin-impact-jean-genshin-impact.jpg 4x" srcset="https://w0.peakpx.com/wallpaper/471/215/HD-wallpaper-video-game-genshin-impact-jean-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/471/215/HD-wallpaper-video-game-genshin-impact-jean-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/471/215/HD-wallpaper-video-game-genshin-impact-jean-genshin-impact.jpg 4x" data-was-processed="true" width="338" height="190">
</a>
<figcaption itemprop="caption description" class="title overflow">Video Game, Genshin Impact, Jean (Genshin Impact), HD wallpaper</figcaption>
</figure>
</li>
<li itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject" class="grid" style="position: absolute; margin: 0px; top: 300px; left: 716px;">
<span class="res">5000x3623px</span>
<figure>
<meta itemprop="keywords" content="Video Game, Genshin Impact, Amber (Genshin Impact), Barbara (Genshin Impact), Lumine (Genshin Impact), Paimon (Genshin Impact), Xiangling (Genshin Impact), HD wallpaper">
<link itemprop="contentUrl" href="https://w0.peakpx.com/wallpaper/255/247/HD-wallpaper-video-game-genshin-impact-amber-genshin-impact-barbara-genshin-impact-lumine-genshin-impact-paimon-genshin-impact-xiangling-genshin-impact.jpg">
<a itemprop="url" href="https://www.peakpx.com/en/hd-wallpaper-desktop-grrjg" target="_blank">
<img itemprop="thumbnail" alt="Video Game, Genshin Impact, Amber (Genshin Impact), Barbara (Genshin Impact), Lumine (Genshin Impact), Paimon (Genshin Impact), Xiangling (Genshin Impact), HD wallpaper" title="Video Game, Genshin Impact, Amber (Genshin Impact), Barbara (Genshin Impact), Lumine (Genshin Impact), Paimon (Genshin Impact), Xiangling (Genshin Impact), HD wallpaper" src="https://w0.peakpx.com/wallpaper/255/247/HD-wallpaper-video-game-genshin-impact-amber-genshin-impact-barbara-genshin-impact-lumine-genshin-impact-paimon-genshin-impact-xiangling-genshin-impact-thumbnail.jpg" data-src="https://w0.peakpx.com/wallpaper/255/247/HD-wallpaper-video-game-genshin-impact-amber-genshin-impact-barbara-genshin-impact-lumine-genshin-impact-paimon-genshin-impact-xiangling-genshin-impact-thumbnail.jpg" class="lazy lst_img loaded" data-srcset="https://w0.peakpx.com/wallpaper/255/247/HD-wallpaper-video-game-genshin-impact-amber-genshin-impact-barbara-genshin-impact-lumine-genshin-impact-paimon-genshin-impact-xiangling-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/255/247/HD-wallpaper-video-game-genshin-impact-amber-genshin-impact-barbara-genshin-impact-lumine-genshin-impact-paimon-genshin-impact-xiangling-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/255/247/HD-wallpaper-video-game-genshin-impact-amber-genshin-impact-barbara-genshin-impact-lumine-genshin-impact-paimon-genshin-impact-xiangling-genshin-impact.jpg 4x" srcset="https://w0.peakpx.com/wallpaper/255/247/HD-wallpaper-video-game-genshin-impact-amber-genshin-impact-barbara-genshin-impact-lumine-genshin-impact-paimon-genshin-impact-xiangling-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/255/247/HD-wallpaper-video-game-genshin-impact-amber-genshin-impact-barbara-genshin-impact-lumine-genshin-impact-paimon-genshin-impact-xiangling-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/255/247/HD-wallpaper-video-game-genshin-impact-amber-genshin-impact-barbara-genshin-impact-lumine-genshin-impact-paimon-genshin-impact-xiangling-genshin-impact.jpg 4x" data-was-processed="true" width="338" height="245">
</a>
<figcaption itemprop="caption description" class="title overflow">Video Game, Genshin Impact, Amber (Genshin Impact), Barbara (Genshin Impact), Lumine (Genshin Impact), Paimon (Genshin Impact), Xiangling (Genshin Impact), HD wallpaper</figcaption>
</figure>
</li>
<li itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject" class="grid" style="position: absolute; margin: 0px; top: 511px; left: 0px;">
<span class="res">3848x2107px</span>
<figure>
<meta itemprop="keywords" content="Video Game, Genshin Impact, Diluc (Genshin Impact), Fischl (Genshin Impact), HD wallpaper">
<link itemprop="contentUrl" href="https://w0.peakpx.com/wallpaper/937/33/HD-wallpaper-video-game-genshin-impact-diluc-genshin-impact-fischl-genshin-impact.jpg">
<a itemprop="url" href="https://www.peakpx.com/en/hd-wallpaper-desktop-gxkeq" target="_blank">
<img itemprop="thumbnail" alt="Video Game, Genshin Impact, Diluc (Genshin Impact), Fischl (Genshin Impact), HD wallpaper" title="Video Game, Genshin Impact, Diluc (Genshin Impact), Fischl (Genshin Impact), HD wallpaper" src="https://w0.peakpx.com/wallpaper/937/33/HD-wallpaper-video-game-genshin-impact-diluc-genshin-impact-fischl-genshin-impact-thumbnail.jpg" data-src="https://w0.peakpx.com/wallpaper/937/33/HD-wallpaper-video-game-genshin-impact-diluc-genshin-impact-fischl-genshin-impact-thumbnail.jpg" class="lazy lst_img loaded" data-srcset="https://w0.peakpx.com/wallpaper/937/33/HD-wallpaper-video-game-genshin-impact-diluc-genshin-impact-fischl-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/937/33/HD-wallpaper-video-game-genshin-impact-diluc-genshin-impact-fischl-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/937/33/HD-wallpaper-video-game-genshin-impact-diluc-genshin-impact-fischl-genshin-impact.jpg 4x" srcset="https://w0.peakpx.com/wallpaper/937/33/HD-wallpaper-video-game-genshin-impact-diluc-genshin-impact-fischl-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/937/33/HD-wallpaper-video-game-genshin-impact-diluc-genshin-impact-fischl-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/937/33/HD-wallpaper-video-game-genshin-impact-diluc-genshin-impact-fischl-genshin-impact.jpg 4x" data-was-processed="true" width="338" height="185">
</a>
<figcaption itemprop="caption description" class="title overflow">Video Game, Genshin Impact, Diluc (Genshin Impact), Fischl (Genshin Impact), HD wallpaper</figcaption>
</figure>
</li>
<li itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject" class="grid" style="position: absolute; margin: 0px; top: 513px; left: 358px;">
<span class="res">2105x1265px</span>
<figure>
<meta itemprop="keywords" content="Video Game, Genshin Impact, Scaramouche (Genshin Impact), HD wallpaper">
<link itemprop="contentUrl" href="https://w0.peakpx.com/wallpaper/198/206/HD-wallpaper-video-game-genshin-impact-scaramouche-genshin-impact.jpg">
<a itemprop="url" href="https://www.peakpx.com/en/hd-wallpaper-desktop-eotbe" target="_blank">
<img itemprop="thumbnail" alt="Video Game, Genshin Impact, Scaramouche (Genshin Impact), HD wallpaper" title="Video Game, Genshin Impact, Scaramouche (Genshin Impact), HD wallpaper" src="https://w0.peakpx.com/wallpaper/198/206/HD-wallpaper-video-game-genshin-impact-scaramouche-genshin-impact-thumbnail.jpg" data-src="https://w0.peakpx.com/wallpaper/198/206/HD-wallpaper-video-game-genshin-impact-scaramouche-genshin-impact-thumbnail.jpg" class="lazy lst_img loaded" data-srcset="https://w0.peakpx.com/wallpaper/198/206/HD-wallpaper-video-game-genshin-impact-scaramouche-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/198/206/HD-wallpaper-video-game-genshin-impact-scaramouche-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/198/206/HD-wallpaper-video-game-genshin-impact-scaramouche-genshin-impact.jpg 4x" srcset="https://w0.peakpx.com/wallpaper/198/206/HD-wallpaper-video-game-genshin-impact-scaramouche-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/198/206/HD-wallpaper-video-game-genshin-impact-scaramouche-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/198/206/HD-wallpaper-video-game-genshin-impact-scaramouche-genshin-impact.jpg 4x" data-was-processed="true" width="338" height="203">
</a>
<figcaption itemprop="caption description" class="title overflow">Video Game, Genshin Impact, Scaramouche (Genshin Impact), HD wallpaper</figcaption>
</figure>
</li>
<li itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject" class="grid" style="position: absolute; margin: 0px; top: 566px; left: 716px;">
<span class="res">2489x1400px</span>
<figure>
<meta itemprop="keywords" content="Video Game, Genshin Impact, Tartaglia (Genshin Impact), Zhongli (Genshin Impact), HD wallpaper">
<link itemprop="contentUrl" href="https://w0.peakpx.com/wallpaper/524/548/HD-wallpaper-video-game-genshin-impact-tartaglia-genshin-impact-zhongli-genshin-impact.jpg">
<a itemprop="url" href="https://www.peakpx.com/en/hd-wallpaper-desktop-awetb" target="_blank">
<img itemprop="thumbnail" alt="Video Game, Genshin Impact, Tartaglia (Genshin Impact), Zhongli (Genshin Impact), HD wallpaper" title="Video Game, Genshin Impact, Tartaglia (Genshin Impact), Zhongli (Genshin Impact), HD wallpaper" src="https://w0.peakpx.com/wallpaper/524/548/HD-wallpaper-video-game-genshin-impact-tartaglia-genshin-impact-zhongli-genshin-impact-thumbnail.jpg" data-src="https://w0.peakpx.com/wallpaper/524/548/HD-wallpaper-video-game-genshin-impact-tartaglia-genshin-impact-zhongli-genshin-impact-thumbnail.jpg" class="lazy lst_img loaded" data-srcset="https://w0.peakpx.com/wallpaper/524/548/HD-wallpaper-video-game-genshin-impact-tartaglia-genshin-impact-zhongli-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/524/548/HD-wallpaper-video-game-genshin-impact-tartaglia-genshin-impact-zhongli-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/524/548/HD-wallpaper-video-game-genshin-impact-tartaglia-genshin-impact-zhongli-genshin-impact.jpg 4x" srcset="https://w0.peakpx.com/wallpaper/524/548/HD-wallpaper-video-game-genshin-impact-tartaglia-genshin-impact-zhongli-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/524/548/HD-wallpaper-video-game-genshin-impact-tartaglia-genshin-impact-zhongli-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/524/548/HD-wallpaper-video-game-genshin-impact-tartaglia-genshin-impact-zhongli-genshin-impact.jpg 4x" data-was-processed="true" width="338" height="190">
</a>
<figcaption itemprop="caption description" class="title overflow">Video Game, Genshin Impact, Tartaglia (Genshin Impact), Zhongli (Genshin Impact), HD wallpaper</figcaption>
</figure>
</li>
<li itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject" class="grid" style="position: absolute; margin: 0px; top: 717px; left: 0px;">
<span class="res">8756x4728px</span>
<figure>
<meta itemprop="keywords" content="Video Game, Genshin Impact, Chongyun (Genshin Impact), Guoba (Genshin Impact), Hu Tao, Keqing (Genshin Impact), Lumine (Genshin Impact), Paimon (Genshin Impact), Scenery, Xiangling (Genshin Impact), Xingqiu (Genshin Impact), Yun Jin (Genshin Impact), Zhongli (Genshin Impact), HD wallpaper">
<link itemprop="contentUrl" href="https://w0.peakpx.com/wallpaper/752/1012/HD-wallpaper-video-game-genshin-impact-chongyun-genshin-impact-guoba-genshin-impact.jpg">
<a itemprop="url" href="https://www.peakpx.com/en/hd-wallpaper-desktop-egqiy" target="_blank">
<img itemprop="thumbnail" alt="Video Game, Genshin Impact, Chongyun (Genshin Impact) , Guoba (Genshin Impact) , Hu Tao , Keqing (Genshin Impact) , Lumine (Genshin Impact) , Paimon (Genshin Impact) , Scenery , Xiangling (Genshin Impact) , Xingqiu (Genshin Impact) , Yun Jin (Genshin Impact) , Zhongli (Genshin Impact), HD wallpaper" title="Video Game, Genshin Impact, Chongyun (Genshin Impact) , Guoba (Genshin Impact) , Hu Tao , Keqing (Genshin Impact) , Lumine (Genshin Impact) , Paimon (Genshin Impact) , Scenery , Xiangling (Genshin Impact) , Xingqiu (Genshin Impact) , Yun Jin (Genshin Impact) , Zhongli (Genshin Impact), HD wallpaper" src="https://w0.peakpx.com/wallpaper/752/1012/HD-wallpaper-video-game-genshin-impact-chongyun-genshin-impact-guoba-genshin-impact-thumbnail.jpg" data-src="https://w0.peakpx.com/wallpaper/752/1012/HD-wallpaper-video-game-genshin-impact-chongyun-genshin-impact-guoba-genshin-impact-thumbnail.jpg" class="lazy lst_img loaded" data-srcset="https://w0.peakpx.com/wallpaper/752/1012/HD-wallpaper-video-game-genshin-impact-chongyun-genshin-impact-guoba-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/752/1012/HD-wallpaper-video-game-genshin-impact-chongyun-genshin-impact-guoba-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/752/1012/HD-wallpaper-video-game-genshin-impact-chongyun-genshin-impact-guoba-genshin-impact.jpg 4x" srcset="https://w0.peakpx.com/wallpaper/752/1012/HD-wallpaper-video-game-genshin-impact-chongyun-genshin-impact-guoba-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/752/1012/HD-wallpaper-video-game-genshin-impact-chongyun-genshin-impact-guoba-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/752/1012/HD-wallpaper-video-game-genshin-impact-chongyun-genshin-impact-guoba-genshin-impact.jpg 4x" data-was-processed="true" width="338" height="183">
</a>
<figcaption itemprop="caption description" class="title overflow">Video Game, Genshin Impact, Chongyun (Genshin Impact) , Guoba (Genshin Impact) , Hu Tao , Keqing (Genshin Impact) , Lumine (Genshin Impact) , Paimon (Genshin Impact) , Scenery , Xiangling (Genshin Impact) , Xingqiu (Genshin Impact) , Yun Jin (Genshin Impact) , Zhongli (Genshin Impact), HD wallpaper</figcaption>
</figure>
</li>
<li itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject" class="grid" style="position: absolute; margin: 0px; top: 737px; left: 358px;">
<span class="res">1968x1377px</span>
<figure>
<meta itemprop="keywords" content="Video Game, Genshin Impact, Baal (Genshin Impact), HD wallpaper">
<link itemprop="contentUrl" href="https://w0.peakpx.com/wallpaper/812/541/HD-wallpaper-video-game-genshin-impact-baal-genshin-impact.jpg">
<a itemprop="url" href="https://www.peakpx.com/en/hd-wallpaper-desktop-vllzq" target="_blank">
<img itemprop="thumbnail" alt="Video Game, Genshin Impact, Baal (Genshin Impact), HD wallpaper" title="Video Game, Genshin Impact, Baal (Genshin Impact), HD wallpaper" src="https://w0.peakpx.com/wallpaper/812/541/HD-wallpaper-video-game-genshin-impact-baal-genshin-impact-thumbnail.jpg" data-src="https://w0.peakpx.com/wallpaper/812/541/HD-wallpaper-video-game-genshin-impact-baal-genshin-impact-thumbnail.jpg" class="lazy lst_img loaded" data-srcset="https://w0.peakpx.com/wallpaper/812/541/HD-wallpaper-video-game-genshin-impact-baal-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/812/541/HD-wallpaper-video-game-genshin-impact-baal-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/812/541/HD-wallpaper-video-game-genshin-impact-baal-genshin-impact.jpg 4x" srcset="https://w0.peakpx.com/wallpaper/812/541/HD-wallpaper-video-game-genshin-impact-baal-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/812/541/HD-wallpaper-video-game-genshin-impact-baal-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/812/541/HD-wallpaper-video-game-genshin-impact-baal-genshin-impact.jpg 4x" data-was-processed="true" width="338" height="236">
</a>
<figcaption itemprop="caption description" class="title overflow">Video Game, Genshin Impact, Baal (Genshin Impact), HD wallpaper</figcaption>
</figure>
</li>
<li itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject" class="grid" style="position: absolute; margin: 0px; top: 777px; left: 716px;">
<span class="res">3508x2480px</span>
<figure>
<meta itemprop="keywords" content="Video Game, Genshin Impact, HD wallpaper">
<link itemprop="contentUrl" href="https://w0.peakpx.com/wallpaper/360/883/HD-wallpaper-video-game-genshin-impact-baal-raiden-shogun-genshin-impact.jpg">
<a itemprop="url" href="https://www.peakpx.com/en/hd-wallpaper-desktop-entlx" target="_blank">
<img itemprop="thumbnail" alt="Video Game, Genshin Impact, Baal Raiden Shogun (Genshin Impact), HD wallpaper" title="Video Game, Genshin Impact, Baal Raiden Shogun (Genshin Impact), HD wallpaper" src="https://w0.peakpx.com/wallpaper/360/883/HD-wallpaper-video-game-genshin-impact-baal-raiden-shogun-genshin-impact-thumbnail.jpg" data-src="https://w0.peakpx.com/wallpaper/360/883/HD-wallpaper-video-game-genshin-impact-baal-raiden-shogun-genshin-impact-thumbnail.jpg" class="lazy lst_img loaded" data-srcset="https://w0.peakpx.com/wallpaper/360/883/HD-wallpaper-video-game-genshin-impact-baal-raiden-shogun-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/360/883/HD-wallpaper-video-game-genshin-impact-baal-raiden-shogun-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/360/883/HD-wallpaper-video-game-genshin-impact-baal-raiden-shogun-genshin-impact.jpg 4x" srcset="https://w0.peakpx.com/wallpaper/360/883/HD-wallpaper-video-game-genshin-impact-baal-raiden-shogun-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/360/883/HD-wallpaper-video-game-genshin-impact-baal-raiden-shogun-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/360/883/HD-wallpaper-video-game-genshin-impact-baal-raiden-shogun-genshin-impact.jpg 4x" data-was-processed="true" width="338" height="239">
</a>
<figcaption itemprop="caption description" class="title overflow">Video Game, Genshin Impact, Baal Raiden Shogun (Genshin Impact), HD wallpaper</figcaption>
</figure>
</li>
<li itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject" class="grid" style="position: absolute; margin: 0px; top: 921px; left: 0px;">
<span class="res">2048x1152px</span>
<figure>
<meta itemprop="keywords" content="Video Game, Genshin Impact, Sangonomiya Kokomi, HD wallpaper">
<link itemprop="contentUrl" href="https://w0.peakpx.com/wallpaper/536/97/HD-wallpaper-video-game-genshin-impact-baal-raiden-shogun-genshin-impact-sangonomiya-kokomi.jpg">
<a itemprop="url" href="https://www.peakpx.com/en/hd-wallpaper-desktop-exiib" target="_blank">
<img itemprop="thumbnail" alt="Video Game, Genshin Impact, Baal Raiden Shogun (Genshin Impact) , Sangonomiya Kokomi, HD wallpaper" title="Video Game, Genshin Impact, Baal Raiden Shogun (Genshin Impact) , Sangonomiya Kokomi, HD wallpaper" src="https://w0.peakpx.com/wallpaper/536/97/HD-wallpaper-video-game-genshin-impact-baal-raiden-shogun-genshin-impact-sangonomiya-kokomi-thumbnail.jpg" data-src="https://w0.peakpx.com/wallpaper/536/97/HD-wallpaper-video-game-genshin-impact-baal-raiden-shogun-genshin-impact-sangonomiya-kokomi-thumbnail.jpg" class="lazy lst_img loaded" data-srcset="https://w0.peakpx.com/wallpaper/536/97/HD-wallpaper-video-game-genshin-impact-baal-raiden-shogun-genshin-impact-sangonomiya-kokomi.jpg 2x,https://w0.peakpx.com/wallpaper/536/97/HD-wallpaper-video-game-genshin-impact-baal-raiden-shogun-genshin-impact-sangonomiya-kokomi.jpg 3x,https://w0.peakpx.com/wallpaper/536/97/HD-wallpaper-video-game-genshin-impact-baal-raiden-shogun-genshin-impact-sangonomiya-kokomi.jpg 4x" srcset="https://w0.peakpx.com/wallpaper/536/97/HD-wallpaper-video-game-genshin-impact-baal-raiden-shogun-genshin-impact-sangonomiya-kokomi.jpg 2x,https://w0.peakpx.com/wallpaper/536/97/HD-wallpaper-video-game-genshin-impact-baal-raiden-shogun-genshin-impact-sangonomiya-kokomi.jpg 3x,https://w0.peakpx.com/wallpaper/536/97/HD-wallpaper-video-game-genshin-impact-baal-raiden-shogun-genshin-impact-sangonomiya-kokomi.jpg 4x" data-was-processed="true" width="338" height="190">
</a>
<figcaption itemprop="caption description" class="title overflow">Video Game, Genshin Impact, Baal Raiden Shogun (Genshin Impact) , Sangonomiya Kokomi, HD wallpaper</figcaption>
</figure>
</li>
<li itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject" class="grid" style="position: absolute; margin: 0px; top: 994px; left: 358px;">
<span class="res">3000x2121px</span>
<figure>
<meta itemprop="keywords" content="Video Game, Genshin Impact, Klee (Genshin Impact), Paimon (Genshin Impact), Qiqi (Genshin Impact), HD wallpaper">
<link itemprop="contentUrl" href="https://w0.peakpx.com/wallpaper/210/462/HD-wallpaper-video-game-genshin-impact-klee-genshin-impact-paimon-genshin-impact-qiqi-genshin-impact.jpg">
<a itemprop="url" href="https://www.peakpx.com/en/hd-wallpaper-desktop-ggdqh" target="_blank">
<img itemprop="thumbnail" alt="Video Game, Genshin Impact, Klee (Genshin Impact), Paimon (Genshin Impact), Qiqi (Genshin Impact), HD wallpaper" title="Video Game, Genshin Impact, Klee (Genshin Impact), Paimon (Genshin Impact), Qiqi (Genshin Impact), HD wallpaper" src="https://w0.peakpx.com/wallpaper/210/462/HD-wallpaper-video-game-genshin-impact-klee-genshin-impact-paimon-genshin-impact-qiqi-genshin-impact-thumbnail.jpg" data-src="https://w0.peakpx.com/wallpaper/210/462/HD-wallpaper-video-game-genshin-impact-klee-genshin-impact-paimon-genshin-impact-qiqi-genshin-impact-thumbnail.jpg" class="lazy lst_img loaded" data-srcset="https://w0.peakpx.com/wallpaper/210/462/HD-wallpaper-video-game-genshin-impact-klee-genshin-impact-paimon-genshin-impact-qiqi-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/210/462/HD-wallpaper-video-game-genshin-impact-klee-genshin-impact-paimon-genshin-impact-qiqi-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/210/462/HD-wallpaper-video-game-genshin-impact-klee-genshin-impact-paimon-genshin-impact-qiqi-genshin-impact.jpg 4x" srcset="https://w0.peakpx.com/wallpaper/210/462/HD-wallpaper-video-game-genshin-impact-klee-genshin-impact-paimon-genshin-impact-qiqi-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/210/462/HD-wallpaper-video-game-genshin-impact-klee-genshin-impact-paimon-genshin-impact-qiqi-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/210/462/HD-wallpaper-video-game-genshin-impact-klee-genshin-impact-paimon-genshin-impact-qiqi-genshin-impact.jpg 4x" data-was-processed="true" width="338" height="239">
</a>
<figcaption itemprop="caption description" class="title overflow">Video Game, Genshin Impact, Klee (Genshin Impact), Paimon (Genshin Impact), Qiqi (Genshin Impact), HD wallpaper</figcaption>
</figure>
</li>
<li itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject" class="grid" style="position: absolute; margin: 0px; top: 1037px; left: 716px;">
<span class="res">3119x2132px</span>
<figure>
<meta itemprop="keywords" content="Video Game, Genshin Impact, Boy, Zhongli (Genshin Impact), HD wallpaper">
<link itemprop="contentUrl" href="https://w0.peakpx.com/wallpaper/675/196/HD-wallpaper-video-game-genshin-impact-boy-zhongli-genshin-impact.jpg">
<a itemprop="url" href="https://www.peakpx.com/en/hd-wallpaper-desktop-gxkzq" target="_blank">
<img itemprop="thumbnail" alt="Video Game, Genshin Impact, Boy, Zhongli (Genshin Impact), HD wallpaper" title="Video Game, Genshin Impact, Boy, Zhongli (Genshin Impact), HD wallpaper" src="https://w0.peakpx.com/wallpaper/675/196/HD-wallpaper-video-game-genshin-impact-boy-zhongli-genshin-impact-thumbnail.jpg" data-src="https://w0.peakpx.com/wallpaper/675/196/HD-wallpaper-video-game-genshin-impact-boy-zhongli-genshin-impact-thumbnail.jpg" class="lazy lst_img loaded" data-srcset="https://w0.peakpx.com/wallpaper/675/196/HD-wallpaper-video-game-genshin-impact-boy-zhongli-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/675/196/HD-wallpaper-video-game-genshin-impact-boy-zhongli-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/675/196/HD-wallpaper-video-game-genshin-impact-boy-zhongli-genshin-impact.jpg 4x" srcset="https://w0.peakpx.com/wallpaper/675/196/HD-wallpaper-video-game-genshin-impact-boy-zhongli-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/675/196/HD-wallpaper-video-game-genshin-impact-boy-zhongli-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/675/196/HD-wallpaper-video-game-genshin-impact-boy-zhongli-genshin-impact.jpg 4x" data-was-processed="true" width="338" height="231">
</a>
<figcaption itemprop="caption description" class="title overflow">Video Game, Genshin Impact, Boy, Zhongli (Genshin Impact), HD wallpaper</figcaption>
</figure>
</li>
<li itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject" class="grid" style="position: absolute; margin: 0px; top: 1132px; left: 0px;">
<span class="res">2400x1125px</span>
<figure>
<meta itemprop="keywords" content="Video Game, Genshin Impact, Ganyu (Genshin Impact), Xiao (Genshin Impact), Zhongli (Genshin Impact), HD wallpaper">
<link itemprop="contentUrl" href="https://w0.peakpx.com/wallpaper/776/985/HD-wallpaper-video-game-genshin-impact-ganyu-genshin-impact-xiao-genshin-impact-zhongli-genshin-impact.jpg">
<a itemprop="url" href="https://www.peakpx.com/en/hd-wallpaper-desktop-aujud" target="_blank">
<img itemprop="thumbnail" alt="Video Game, Genshin Impact, Ganyu (Genshin Impact), Xiao (Genshin Impact), Zhongli (Genshin Impact), HD wallpaper" title="Video Game, Genshin Impact, Ganyu (Genshin Impact), Xiao (Genshin Impact), Zhongli (Genshin Impact), HD wallpaper" src="https://w0.peakpx.com/wallpaper/776/985/HD-wallpaper-video-game-genshin-impact-ganyu-genshin-impact-xiao-genshin-impact-zhongli-genshin-impact-thumbnail.jpg" data-src="https://w0.peakpx.com/wallpaper/776/985/HD-wallpaper-video-game-genshin-impact-ganyu-genshin-impact-xiao-genshin-impact-zhongli-genshin-impact-thumbnail.jpg" class="lazy lst_img loaded" data-srcset="https://w0.peakpx.com/wallpaper/776/985/HD-wallpaper-video-game-genshin-impact-ganyu-genshin-impact-xiao-genshin-impact-zhongli-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/776/985/HD-wallpaper-video-game-genshin-impact-ganyu-genshin-impact-xiao-genshin-impact-zhongli-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/776/985/HD-wallpaper-video-game-genshin-impact-ganyu-genshin-impact-xiao-genshin-impact-zhongli-genshin-impact.jpg 4x" srcset="https://w0.peakpx.com/wallpaper/776/985/HD-wallpaper-video-game-genshin-impact-ganyu-genshin-impact-xiao-genshin-impact-zhongli-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/776/985/HD-wallpaper-video-game-genshin-impact-ganyu-genshin-impact-xiao-genshin-impact-zhongli-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/776/985/HD-wallpaper-video-game-genshin-impact-ganyu-genshin-impact-xiao-genshin-impact-zhongli-genshin-impact.jpg 4x" data-was-processed="true" width="338" height="158">
</a>
<figcaption itemprop="caption description" class="title overflow">Video Game, Genshin Impact, Ganyu (Genshin Impact), Xiao (Genshin Impact), Zhongli (Genshin Impact), HD wallpaper</figcaption>
</figure>
</li>
<li itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject" class="grid" style="position: absolute; margin: 0px; top: 1254px; left: 358px;">
<span class="res">5000x2812px</span>
<figure>
<meta itemprop="keywords" content="Video Game, Genshin Impact, HD wallpaper">
<link itemprop="contentUrl" href="https://w0.peakpx.com/wallpaper/198/964/HD-wallpaper-video-game-genshin-impact-yae-miko-guuji-genshin-impact.jpg">
<a itemprop="url" href="https://www.peakpx.com/en/hd-wallpaper-desktop-egsme" target="_blank">
<img itemprop="thumbnail" alt="Video Game, Genshin Impact, Yae Miko Guuji (Genshin Impact), HD wallpaper" title="Video Game, Genshin Impact, Yae Miko Guuji (Genshin Impact), HD wallpaper" src="https://w0.peakpx.com/wallpaper/198/964/HD-wallpaper-video-game-genshin-impact-yae-miko-guuji-genshin-impact-thumbnail.jpg" data-src="https://w0.peakpx.com/wallpaper/198/964/HD-wallpaper-video-game-genshin-impact-yae-miko-guuji-genshin-impact-thumbnail.jpg" class="lazy lst_img loaded" data-srcset="https://w0.peakpx.com/wallpaper/198/964/HD-wallpaper-video-game-genshin-impact-yae-miko-guuji-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/198/964/HD-wallpaper-video-game-genshin-impact-yae-miko-guuji-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/198/964/HD-wallpaper-video-game-genshin-impact-yae-miko-guuji-genshin-impact.jpg 4x" srcset="https://w0.peakpx.com/wallpaper/198/964/HD-wallpaper-video-game-genshin-impact-yae-miko-guuji-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/198/964/HD-wallpaper-video-game-genshin-impact-yae-miko-guuji-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/198/964/HD-wallpaper-video-game-genshin-impact-yae-miko-guuji-genshin-impact.jpg 4x" data-was-processed="true" width="338" height="190">
</a>
<figcaption itemprop="caption description" class="title overflow">Video Game, Genshin Impact, Yae Miko Guuji (Genshin Impact), HD wallpaper</figcaption>
</figure>
</li>
<li itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject" class="grid" style="position: absolute; margin: 0px; top: 1289px; left: 716px;">
<span class="res">4096x2177px</span>
<figure>
<meta itemprop="keywords" content="Video Game, Genshin Impact, Kamisato Ayaka (Genshin Impact), HD wallpaper">
<link itemprop="contentUrl" href="https://w0.peakpx.com/wallpaper/987/654/HD-wallpaper-video-game-genshin-impact-kamisato-ayaka-genshin-impact.jpg">
<a itemprop="url" href="https://www.peakpx.com/en/hd-wallpaper-desktop-ekesc" target="_blank">
<img itemprop="thumbnail" alt="Video Game, Genshin Impact, Kamisato Ayaka (Genshin Impact), HD wallpaper" title="Video Game, Genshin Impact, Kamisato Ayaka (Genshin Impact), HD wallpaper" src="https://w0.peakpx.com/wallpaper/987/654/HD-wallpaper-video-game-genshin-impact-kamisato-ayaka-genshin-impact-thumbnail.jpg" data-src="https://w0.peakpx.com/wallpaper/987/654/HD-wallpaper-video-game-genshin-impact-kamisato-ayaka-genshin-impact-thumbnail.jpg" class="lazy lst_img loaded" data-srcset="https://w0.peakpx.com/wallpaper/987/654/HD-wallpaper-video-game-genshin-impact-kamisato-ayaka-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/987/654/HD-wallpaper-video-game-genshin-impact-kamisato-ayaka-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/987/654/HD-wallpaper-video-game-genshin-impact-kamisato-ayaka-genshin-impact.jpg 4x" srcset="https://w0.peakpx.com/wallpaper/987/654/HD-wallpaper-video-game-genshin-impact-kamisato-ayaka-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/987/654/HD-wallpaper-video-game-genshin-impact-kamisato-ayaka-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/987/654/HD-wallpaper-video-game-genshin-impact-kamisato-ayaka-genshin-impact.jpg 4x" data-was-processed="true" width="338" height="180">
</a>
<figcaption itemprop="caption description" class="title overflow">Video Game, Genshin Impact, Kamisato Ayaka (Genshin Impact), HD wallpaper</figcaption>
</figure>
</li>
<li itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject" class="grid" style="position: absolute; margin: 0px; top: 1311px; left: 0px;">
<span class="res">7000x5000px</span>
<figure>
<meta itemprop="keywords" content="Video Game, Genshin Impact, Green Eyes, Grey Hair, Noelle (Genshin Impact), Sword, HD wallpaper">
<link itemprop="contentUrl" href="https://w0.peakpx.com/wallpaper/370/365/HD-wallpaper-video-game-genshin-impact-green-eyes-grey-hair-noelle-genshin-impact-sword.jpg">
<a itemprop="url" href="https://www.peakpx.com/en/hd-wallpaper-desktop-nubre" target="_blank">
<img itemprop="thumbnail" alt="Video Game, Genshin Impact, Green Eyes, Grey Hair, Noelle (Genshin Impact), Sword, HD wallpaper" title="Video Game, Genshin Impact, Green Eyes, Grey Hair, Noelle (Genshin Impact), Sword, HD wallpaper" src="https://w0.peakpx.com/wallpaper/370/365/HD-wallpaper-video-game-genshin-impact-green-eyes-grey-hair-noelle-genshin-impact-sword-thumbnail.jpg" data-src="https://w0.peakpx.com/wallpaper/370/365/HD-wallpaper-video-game-genshin-impact-green-eyes-grey-hair-noelle-genshin-impact-sword-thumbnail.jpg" class="lazy lst_img loaded" data-srcset="https://w0.peakpx.com/wallpaper/370/365/HD-wallpaper-video-game-genshin-impact-green-eyes-grey-hair-noelle-genshin-impact-sword.jpg 2x,https://w0.peakpx.com/wallpaper/370/365/HD-wallpaper-video-game-genshin-impact-green-eyes-grey-hair-noelle-genshin-impact-sword.jpg 3x,https://w0.peakpx.com/wallpaper/370/365/HD-wallpaper-video-game-genshin-impact-green-eyes-grey-hair-noelle-genshin-impact-sword.jpg 4x" srcset="https://w0.peakpx.com/wallpaper/370/365/HD-wallpaper-video-game-genshin-impact-green-eyes-grey-hair-noelle-genshin-impact-sword.jpg 2x,https://w0.peakpx.com/wallpaper/370/365/HD-wallpaper-video-game-genshin-impact-green-eyes-grey-hair-noelle-genshin-impact-sword.jpg 3x,https://w0.peakpx.com/wallpaper/370/365/HD-wallpaper-video-game-genshin-impact-green-eyes-grey-hair-noelle-genshin-impact-sword.jpg 4x" data-was-processed="true" width="338" height="241">
</a>
<figcaption itemprop="caption description" class="title overflow">Video Game, Genshin Impact, Green Eyes, Grey Hair, Noelle (Genshin Impact), Sword, HD wallpaper</figcaption>
</figure>
</li>
<li itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject" class="grid" style="position: absolute; margin: 0px; top: 1465px; left: 358px;">
<span class="res">3877x2164px</span>
<figure>
<meta itemprop="keywords" content="Video Game, Genshin Impact, Amber (Genshin Impact), Jean (Genshin Impact), Lumine (Genshin Impact), HD wallpaper">
<link itemprop="contentUrl" href="https://w0.peakpx.com/wallpaper/726/603/HD-wallpaper-video-game-genshin-impact-amber-genshin-impact-jean-genshin-impact-lumine-genshin-impact.jpg">
<a itemprop="url" href="https://www.peakpx.com/en/hd-wallpaper-desktop-gxkjl" target="_blank">
<img itemprop="thumbnail" alt="Video Game, Genshin Impact, Amber (Genshin Impact), Jean (Genshin Impact), Lumine (Genshin Impact), HD wallpaper" title="Video Game, Genshin Impact, Amber (Genshin Impact), Jean (Genshin Impact), Lumine (Genshin Impact), HD wallpaper" src="https://w0.peakpx.com/wallpaper/726/603/HD-wallpaper-video-game-genshin-impact-amber-genshin-impact-jean-genshin-impact-lumine-genshin-impact-thumbnail.jpg" data-src="https://w0.peakpx.com/wallpaper/726/603/HD-wallpaper-video-game-genshin-impact-amber-genshin-impact-jean-genshin-impact-lumine-genshin-impact-thumbnail.jpg" class="lazy lst_img loaded" data-srcset="https://w0.peakpx.com/wallpaper/726/603/HD-wallpaper-video-game-genshin-impact-amber-genshin-impact-jean-genshin-impact-lumine-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/726/603/HD-wallpaper-video-game-genshin-impact-amber-genshin-impact-jean-genshin-impact-lumine-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/726/603/HD-wallpaper-video-game-genshin-impact-amber-genshin-impact-jean-genshin-impact-lumine-genshin-impact.jpg 4x" srcset="https://w0.peakpx.com/wallpaper/726/603/HD-wallpaper-video-game-genshin-impact-amber-genshin-impact-jean-genshin-impact-lumine-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/726/603/HD-wallpaper-video-game-genshin-impact-amber-genshin-impact-jean-genshin-impact-lumine-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/726/603/HD-wallpaper-video-game-genshin-impact-amber-genshin-impact-jean-genshin-impact-lumine-genshin-impact.jpg 4x" data-was-processed="true" width="338" height="189">
</a>
<figcaption itemprop="caption description" class="title overflow">Video Game, Genshin Impact, Amber (Genshin Impact), Jean (Genshin Impact), Lumine (Genshin Impact), HD wallpaper</figcaption>
</figure>
</li>
<li itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject" class="grid" style="position: absolute; margin: 0px; top: 1490px; left: 716px;">
<span class="res">5288x2905px</span>
<figure>
<meta itemprop="keywords" content="Video Game, Genshin Impact, HD wallpaper">
<link itemprop="contentUrl" href="https://w0.peakpx.com/wallpaper/606/923/HD-wallpaper-video-game-genshin-impact-yae-miko-guuji-genshin-impact.jpg">
<a itemprop="url" href="https://www.peakpx.com/en/hd-wallpaper-desktop-eghjh" target="_blank">
<img itemprop="thumbnail" alt="Video Game, Genshin Impact, Yae Miko Guuji (Genshin Impact), HD wallpaper" title="Video Game, Genshin Impact, Yae Miko Guuji (Genshin Impact), HD wallpaper" src="https://w0.peakpx.com/wallpaper/606/923/HD-wallpaper-video-game-genshin-impact-yae-miko-guuji-genshin-impact-thumbnail.jpg" data-src="https://w0.peakpx.com/wallpaper/606/923/HD-wallpaper-video-game-genshin-impact-yae-miko-guuji-genshin-impact-thumbnail.jpg" class="lazy lst_img loaded" data-srcset="https://w0.peakpx.com/wallpaper/606/923/HD-wallpaper-video-game-genshin-impact-yae-miko-guuji-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/606/923/HD-wallpaper-video-game-genshin-impact-yae-miko-guuji-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/606/923/HD-wallpaper-video-game-genshin-impact-yae-miko-guuji-genshin-impact.jpg 4x" srcset="https://w0.peakpx.com/wallpaper/606/923/HD-wallpaper-video-game-genshin-impact-yae-miko-guuji-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/606/923/HD-wallpaper-video-game-genshin-impact-yae-miko-guuji-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/606/923/HD-wallpaper-video-game-genshin-impact-yae-miko-guuji-genshin-impact.jpg 4x" data-was-processed="true" width="338" height="186">
</a>
<figcaption itemprop="caption description" class="title overflow">Video Game, Genshin Impact, Yae Miko Guuji (Genshin Impact), HD wallpaper</figcaption>
</figure>
</li>
<li itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject" class="grid" style="position: absolute; margin: 0px; top: 1573px; left: 0px;">
<span class="res">5760x3240px</span>
<figure>
<meta itemprop="keywords" content="Video Game, Genshin Impact, Diluc (Genshin Impact), Kaeya (Genshin Impact), HD wallpaper">
<link itemprop="contentUrl" href="https://w0.peakpx.com/wallpaper/69/146/HD-wallpaper-video-game-genshin-impact-diluc-genshin-impact-kaeya-genshin-impact.jpg">
<a itemprop="url" href="https://www.peakpx.com/en/hd-wallpaper-desktop-aqxaf" target="_blank">
<img itemprop="thumbnail" alt="Video Game, Genshin Impact, Diluc (Genshin Impact), Kaeya (Genshin Impact), HD wallpaper" title="Video Game, Genshin Impact, Diluc (Genshin Impact), Kaeya (Genshin Impact), HD wallpaper" src="https://w0.peakpx.com/wallpaper/69/146/HD-wallpaper-video-game-genshin-impact-diluc-genshin-impact-kaeya-genshin-impact-thumbnail.jpg" data-src="https://w0.peakpx.com/wallpaper/69/146/HD-wallpaper-video-game-genshin-impact-diluc-genshin-impact-kaeya-genshin-impact-thumbnail.jpg" class="lazy lst_img loaded" data-srcset="https://w0.peakpx.com/wallpaper/69/146/HD-wallpaper-video-game-genshin-impact-diluc-genshin-impact-kaeya-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/69/146/HD-wallpaper-video-game-genshin-impact-diluc-genshin-impact-kaeya-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/69/146/HD-wallpaper-video-game-genshin-impact-diluc-genshin-impact-kaeya-genshin-impact.jpg 4x" srcset="https://w0.peakpx.com/wallpaper/69/146/HD-wallpaper-video-game-genshin-impact-diluc-genshin-impact-kaeya-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/69/146/HD-wallpaper-video-game-genshin-impact-diluc-genshin-impact-kaeya-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/69/146/HD-wallpaper-video-game-genshin-impact-diluc-genshin-impact-kaeya-genshin-impact.jpg 4x" data-was-processed="true" width="338" height="190">
</a>
<figcaption itemprop="caption description" class="title overflow">Video Game, Genshin Impact, Diluc (Genshin Impact), Kaeya (Genshin Impact), HD wallpaper</figcaption>
</figure>
</li>
<li itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject" class="grid" style="position: absolute; margin: 0px; top: 1675px; left: 358px;">
<span class="res">2047x1192px</span>
<figure>
<meta itemprop="keywords" content="Video Game, Genshin Impact, HD wallpaper">
<link itemprop="contentUrl" href="https://w0.peakpx.com/wallpaper/266/262/HD-wallpaper-video-game-genshin-impact-baal-raiden-shogun-genshin-impact.jpg">
<a itemprop="url" href="https://www.peakpx.com/en/hd-wallpaper-desktop-eoylz" target="_blank">
<img itemprop="thumbnail" alt="Video Game, Genshin Impact, Baal Raiden Shogun (Genshin Impact), HD wallpaper" title="Video Game, Genshin Impact, Baal Raiden Shogun (Genshin Impact), HD wallpaper" src="https://w0.peakpx.com/wallpaper/266/262/HD-wallpaper-video-game-genshin-impact-baal-raiden-shogun-genshin-impact-thumbnail.jpg" data-src="https://w0.peakpx.com/wallpaper/266/262/HD-wallpaper-video-game-genshin-impact-baal-raiden-shogun-genshin-impact-thumbnail.jpg" class="lazy lst_img loaded" data-srcset="https://w0.peakpx.com/wallpaper/266/262/HD-wallpaper-video-game-genshin-impact-baal-raiden-shogun-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/266/262/HD-wallpaper-video-game-genshin-impact-baal-raiden-shogun-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/266/262/HD-wallpaper-video-game-genshin-impact-baal-raiden-shogun-genshin-impact.jpg 4x" srcset="https://w0.peakpx.com/wallpaper/266/262/HD-wallpaper-video-game-genshin-impact-baal-raiden-shogun-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/266/262/HD-wallpaper-video-game-genshin-impact-baal-raiden-shogun-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/266/262/HD-wallpaper-video-game-genshin-impact-baal-raiden-shogun-genshin-impact.jpg 4x" data-was-processed="true" width="338" height="197">
</a>
<figcaption itemprop="caption description" class="title overflow">Video Game, Genshin Impact, Baal Raiden Shogun (Genshin Impact), HD wallpaper</figcaption>
</figure>
</li>
<li itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject" class="grid" style="position: absolute; margin: 0px; top: 1697px; left: 716px;">
<span class="res">2400x1978px</span>
<figure>
<meta itemprop="keywords" content="Video Game, Genshin Impact, Xiao (Genshin Impact), HD wallpaper">
<link itemprop="contentUrl" href="https://w0.peakpx.com/wallpaper/576/916/HD-wallpaper-video-game-genshin-impact-xiao-genshin-impact.jpg">
<a itemprop="url" href="https://www.peakpx.com/en/hd-wallpaper-desktop-ahnsi" target="_blank">
<img itemprop="thumbnail" alt="Video Game, Genshin Impact, Xiao (Genshin Impact), HD wallpaper" title="Video Game, Genshin Impact, Xiao (Genshin Impact), HD wallpaper" src="https://w0.peakpx.com/wallpaper/576/916/HD-wallpaper-video-game-genshin-impact-xiao-genshin-impact-thumbnail.jpg" data-src="https://w0.peakpx.com/wallpaper/576/916/HD-wallpaper-video-game-genshin-impact-xiao-genshin-impact-thumbnail.jpg" class="lazy lst_img loaded" data-srcset="https://w0.peakpx.com/wallpaper/576/916/HD-wallpaper-video-game-genshin-impact-xiao-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/576/916/HD-wallpaper-video-game-genshin-impact-xiao-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/576/916/HD-wallpaper-video-game-genshin-impact-xiao-genshin-impact.jpg 4x" srcset="https://w0.peakpx.com/wallpaper/576/916/HD-wallpaper-video-game-genshin-impact-xiao-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/576/916/HD-wallpaper-video-game-genshin-impact-xiao-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/576/916/HD-wallpaper-video-game-genshin-impact-xiao-genshin-impact.jpg 4x" data-was-processed="true" width="338" height="279">
</a>
<figcaption itemprop="caption description" class="title overflow">Video Game, Genshin Impact, Xiao (Genshin Impact), HD wallpaper</figcaption>
</figure>
</li>
<li itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject" class="grid" style="position: absolute; margin: 0px; top: 1784px; left: 0px;">
<span class="res">2824x1517px</span>
<figure>
<meta itemprop="keywords" content="Video Game, Genshin Impact, Kaedehara Kazuha (Genshin Impact), HD wallpaper">
<link itemprop="contentUrl" href="https://w0.peakpx.com/wallpaper/479/1011/HD-wallpaper-video-game-genshin-impact-kaedehara-kazuha-genshin-impact.jpg">
<a itemprop="url" href="https://www.peakpx.com/en/hd-wallpaper-desktop-effmg" target="_blank">
<img itemprop="thumbnail" alt="Video Game, Genshin Impact, Kaedehara Kazuha (Genshin Impact), HD wallpaper" title="Video Game, Genshin Impact, Kaedehara Kazuha (Genshin Impact), HD wallpaper" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQYV2NgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII=" data-src="https://w0.peakpx.com/wallpaper/479/1011/HD-wallpaper-video-game-genshin-impact-kaedehara-kazuha-genshin-impact-thumbnail.jpg" class="lazy lst_img" data-srcset="https://w0.peakpx.com/wallpaper/479/1011/HD-wallpaper-video-game-genshin-impact-kaedehara-kazuha-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/479/1011/HD-wallpaper-video-game-genshin-impact-kaedehara-kazuha-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/479/1011/HD-wallpaper-video-game-genshin-impact-kaedehara-kazuha-genshin-impact.jpg 4x" width="338" height="182">
</a>
<figcaption itemprop="caption description" class="title overflow">Video Game, Genshin Impact, Kaedehara Kazuha (Genshin Impact), HD wallpaper</figcaption>
</figure>
</li>
<li itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject" class="grid" style="position: absolute; margin: 0px; top: 1893px; left: 358px;">
<span class="res">2560x1440px</span>
<figure>
<meta itemprop="keywords" content="HD wallpaper">
<link itemprop="contentUrl" href="https://w0.peakpx.com/wallpaper/345/306/HD-wallpaper-purple-eyes-scaramouche-genshin-impact.jpg">
<a itemprop="url" href="https://www.peakpx.com/en/hd-wallpaper-desktop-ekyzr" target="_blank">
<img itemprop="thumbnail" alt="Purple Eyes Scaramouche Genshin Impact, HD wallpaper" title="Purple Eyes Scaramouche Genshin Impact, HD wallpaper" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQYV2NgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII=" data-src="https://w0.peakpx.com/wallpaper/345/306/HD-wallpaper-purple-eyes-scaramouche-genshin-impact-thumbnail.jpg" class="lazy lst_img" data-srcset="https://w0.peakpx.com/wallpaper/345/306/HD-wallpaper-purple-eyes-scaramouche-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/345/306/HD-wallpaper-purple-eyes-scaramouche-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/345/306/HD-wallpaper-purple-eyes-scaramouche-genshin-impact.jpg 4x" width="338" height="190">
</a>
<figcaption itemprop="caption description" class="title overflow">Purple Eyes Scaramouche Genshin Impact, HD wallpaper</figcaption>
</figure>
</li>
<li itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject" class="grid" style="position: absolute; margin: 0px; top: 1987px; left: 0px;">
<span class="res">5000x2812px</span>
<figure>
<meta itemprop="keywords" content="Video Game, Genshin Impact, Ningguang (Genshin Impact), HD wallpaper">
<link itemprop="contentUrl" href="https://w0.peakpx.com/wallpaper/285/701/HD-wallpaper-video-game-genshin-impact-ningguang-genshin-impact.jpg">
<a itemprop="url" href="https://www.peakpx.com/en/hd-wallpaper-desktop-avbgt" target="_blank">
<img itemprop="thumbnail" alt="Video Game, Genshin Impact, Ningguang (Genshin Impact), HD wallpaper" title="Video Game, Genshin Impact, Ningguang (Genshin Impact), HD wallpaper" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQYV2NgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII=" data-src="https://w0.peakpx.com/wallpaper/285/701/HD-wallpaper-video-game-genshin-impact-ningguang-genshin-impact-thumbnail.jpg" class="lazy lst_img" data-srcset="https://w0.peakpx.com/wallpaper/285/701/HD-wallpaper-video-game-genshin-impact-ningguang-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/285/701/HD-wallpaper-video-game-genshin-impact-ningguang-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/285/701/HD-wallpaper-video-game-genshin-impact-ningguang-genshin-impact.jpg 4x" width="338" height="190">
</a>
<figcaption itemprop="caption description" class="title overflow">Video Game, Genshin Impact, Ningguang (Genshin Impact), HD wallpaper</figcaption>
</figure>
</li>
<li itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject" class="grid" style="position: absolute; margin: 0px; top: 1997px; left: 716px;">
<span class="res">4500x2531px</span>
<figure>
<meta itemprop="keywords" content="Video Game, Genshin Impact, Kamisato Ayato, Thoma (Genshin Impact), HD wallpaper">
<link itemprop="contentUrl" href="https://w0.peakpx.com/wallpaper/351/243/HD-wallpaper-video-game-genshin-impact-kamisato-ayato-thoma-genshin-impact.jpg">
<a itemprop="url" href="https://www.peakpx.com/en/hd-wallpaper-desktop-eodxy" target="_blank">
<img itemprop="thumbnail" alt="Video Game, Genshin Impact, Kamisato Ayato , Thoma (Genshin Impact), HD wallpaper" title="Video Game, Genshin Impact, Kamisato Ayato , Thoma (Genshin Impact), HD wallpaper" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQYV2NgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII=" data-src="https://w0.peakpx.com/wallpaper/351/243/HD-wallpaper-video-game-genshin-impact-kamisato-ayato-thoma-genshin-impact-thumbnail.jpg" class="lazy lst_img" data-srcset="https://w0.peakpx.com/wallpaper/351/243/HD-wallpaper-video-game-genshin-impact-kamisato-ayato-thoma-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/351/243/HD-wallpaper-video-game-genshin-impact-kamisato-ayato-thoma-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/351/243/HD-wallpaper-video-game-genshin-impact-kamisato-ayato-thoma-genshin-impact.jpg 4x" width="338" height="190">
</a>
<figcaption itemprop="caption description" class="title overflow">Video Game, Genshin Impact, Kamisato Ayato , Thoma (Genshin Impact), HD wallpaper</figcaption>
</figure>
</li>
<li itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject" class="grid" style="position: absolute; margin: 0px; top: 2104px; left: 358px;">
<span class="res">4690x3798px</span>
<figure>
<meta itemprop="keywords" content="Video Game, Genshin Impact, Amber (Genshin Impact), Keqing (Genshin Impact), Lumine (Genshin Impact), HD wallpaper">
<link itemprop="contentUrl" href="https://w0.peakpx.com/wallpaper/317/1/HD-wallpaper-video-game-genshin-impact-amber-genshin-impact-keqing-genshin-impact-lumine-genshin-impact.jpg">
<a itemprop="url" href="https://www.peakpx.com/en/hd-wallpaper-desktop-gxaao" target="_blank">
<img itemprop="thumbnail" alt="Video Game, Genshin Impact, Amber (Genshin Impact), Keqing (Genshin Impact), Lumine (Genshin Impact), HD wallpaper" title="Video Game, Genshin Impact, Amber (Genshin Impact), Keqing (Genshin Impact), Lumine (Genshin Impact), HD wallpaper" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQYV2NgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII=" data-src="https://w0.peakpx.com/wallpaper/317/1/HD-wallpaper-video-game-genshin-impact-amber-genshin-impact-keqing-genshin-impact-lumine-genshin-impact-thumbnail.jpg" class="lazy lst_img" data-srcset="https://w0.peakpx.com/wallpaper/317/1/HD-wallpaper-video-game-genshin-impact-amber-genshin-impact-keqing-genshin-impact-lumine-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/317/1/HD-wallpaper-video-game-genshin-impact-amber-genshin-impact-keqing-genshin-impact-lumine-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/317/1/HD-wallpaper-video-game-genshin-impact-amber-genshin-impact-keqing-genshin-impact-lumine-genshin-impact.jpg 4x" width="338" height="274">
</a>
<figcaption itemprop="caption description" class="title overflow">Video Game, Genshin Impact, Amber (Genshin Impact), Keqing (Genshin Impact), Lumine (Genshin Impact), HD wallpaper</figcaption>
</figure>
</li>
<li itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject" class="grid" style="position: absolute; margin: 0px; top: 2198px; left: 0px;">
<span class="res">1980x1401px</span>
<figure>
<meta itemprop="keywords" content="Video Game, Genshin Impact, Keqing (Genshin Impact), HD wallpaper">
<link itemprop="contentUrl" href="https://w0.peakpx.com/wallpaper/673/905/HD-wallpaper-video-game-genshin-impact-keqing-genshin-impact.jpg">
<a itemprop="url" href="https://www.peakpx.com/en/hd-wallpaper-desktop-ajeem" target="_blank">
<img itemprop="thumbnail" alt="Video Game, Genshin Impact, Keqing (Genshin Impact), HD wallpaper" title="Video Game, Genshin Impact, Keqing (Genshin Impact), HD wallpaper" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQYV2NgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII=" data-src="https://w0.peakpx.com/wallpaper/673/905/HD-wallpaper-video-game-genshin-impact-keqing-genshin-impact-thumbnail.jpg" class="lazy lst_img" data-srcset="https://w0.peakpx.com/wallpaper/673/905/HD-wallpaper-video-game-genshin-impact-keqing-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/673/905/HD-wallpaper-video-game-genshin-impact-keqing-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/673/905/HD-wallpaper-video-game-genshin-impact-keqing-genshin-impact.jpg 4x" width="338" height="239">
</a>
<figcaption itemprop="caption description" class="title overflow">Video Game, Genshin Impact, Keqing (Genshin Impact), HD wallpaper</figcaption>
</figure>
</li>
<li itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject" class="grid" style="position: absolute; margin: 0px; top: 2208px; left: 716px;">
<span class="res">3840x2160px</span>
<figure>
<meta itemprop="keywords" content="Video Game, Genshin Impact, Aether (Genshin Impact), Lumine (Genshin Impact), Paimon (Genshin Impact), Slime (Genshin impact), Venti (Genshin Impact), Zhongli (Genshin Impact), HD wallpaper">
<link itemprop="contentUrl" href="https://w0.peakpx.com/wallpaper/14/403/HD-wallpaper-video-game-genshin-impact-aether-genshin-impact-baal-raiden-shogun-genshin-impact.jpg">
<a itemprop="url" href="https://www.peakpx.com/en/hd-wallpaper-desktop-egwjo" target="_blank">
<img itemprop="thumbnail" alt="Video Game, Genshin Impact, Aether (Genshin Impact) , Baal Raiden Shogun (Genshin Impact) , Lumine (Genshin Impact) , Paimon (Genshin Impact) , Slime (Genshin impact) , Venti (Genshin Impact) , Zhongli (Genshin Impact), HD wallpaper" title="Video Game, Genshin Impact, Aether (Genshin Impact) , Baal Raiden Shogun (Genshin Impact) , Lumine (Genshin Impact) , Paimon (Genshin Impact) , Slime (Genshin impact) , Venti (Genshin Impact) , Zhongli (Genshin Impact), HD wallpaper" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQYV2NgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII=" data-src="https://w0.peakpx.com/wallpaper/14/403/HD-wallpaper-video-game-genshin-impact-aether-genshin-impact-baal-raiden-shogun-genshin-impact-thumbnail.jpg" class="lazy lst_img" data-srcset="https://w0.peakpx.com/wallpaper/14/403/HD-wallpaper-video-game-genshin-impact-aether-genshin-impact-baal-raiden-shogun-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/14/403/HD-wallpaper-video-game-genshin-impact-aether-genshin-impact-baal-raiden-shogun-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/14/403/HD-wallpaper-video-game-genshin-impact-aether-genshin-impact-baal-raiden-shogun-genshin-impact.jpg 4x" width="338" height="190">
</a>
<figcaption itemprop="caption description" class="title overflow">Video Game, Genshin Impact, Aether (Genshin Impact) , Baal Raiden Shogun (Genshin Impact) , Lumine (Genshin Impact) , Paimon (Genshin Impact) , Slime (Genshin impact) , Venti (Genshin Impact) , Zhongli (Genshin Impact), HD wallpaper</figcaption>
</figure>
</li>
<li itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject" class="grid" style="position: absolute; margin: 0px; top: 2399px; left: 358px;">
<span class="res">4067x2183px</span>
<figure>
<meta itemprop="keywords" content="Video Game, Genshin Impact, Ganyu (Genshin Impact), Keqing (Genshin Impact), Ningguang (Genshin Impact), Qiqi (Genshin Impact), Xiao (Genshin Impact), Zhongli (Genshin Impact), HD wallpaper">
<link itemprop="contentUrl" href="https://w0.peakpx.com/wallpaper/101/354/HD-wallpaper-video-game-genshin-impact-ganyu-genshin-impact-keqing-genshin-impact-ningguang-genshin-impact-qiqi-genshin-impact-xiao-genshin-impact-zhongli-genshin-impact.jpg">
<a itemprop="url" href="https://www.peakpx.com/en/hd-wallpaper-desktop-avbpo" target="_blank">
<img itemprop="thumbnail" alt="Video Game, Genshin Impact, Ganyu (Genshin Impact), Keqing (Genshin Impact), Ningguang (Genshin Impact), Qiqi (Genshin Impact), Xiao (Genshin Impact), Zhongli (Genshin Impact), HD wallpaper" title="Video Game, Genshin Impact, Ganyu (Genshin Impact), Keqing (Genshin Impact), Ningguang (Genshin Impact), Qiqi (Genshin Impact), Xiao (Genshin Impact), Zhongli (Genshin Impact), HD wallpaper" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQYV2NgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII=" data-src="https://w0.peakpx.com/wallpaper/101/354/HD-wallpaper-video-game-genshin-impact-ganyu-genshin-impact-keqing-genshin-impact-ningguang-genshin-impact-qiqi-genshin-impact-xiao-genshin-impact-zhongli-genshin-impact-thumbnail.jpg" class="lazy lst_img" data-srcset="https://w0.peakpx.com/wallpaper/101/354/HD-wallpaper-video-game-genshin-impact-ganyu-genshin-impact-keqing-genshin-impact-ningguang-genshin-impact-qiqi-genshin-impact-xiao-genshin-impact-zhongli-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/101/354/HD-wallpaper-video-game-genshin-impact-ganyu-genshin-impact-keqing-genshin-impact-ningguang-genshin-impact-qiqi-genshin-impact-xiao-genshin-impact-zhongli-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/101/354/HD-wallpaper-video-game-genshin-impact-ganyu-genshin-impact-keqing-genshin-impact-ningguang-genshin-impact-qiqi-genshin-impact-xiao-genshin-impact-zhongli-genshin-impact.jpg 4x" width="338" height="181">
</a>
<figcaption itemprop="caption description" class="title overflow">Video Game, Genshin Impact, Ganyu (Genshin Impact), Keqing (Genshin Impact), Ningguang (Genshin Impact), Qiqi (Genshin Impact), Xiao (Genshin Impact), Zhongli (Genshin Impact), HD wallpaper</figcaption>
</figure>
</li>
<li itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject" class="grid" style="position: absolute; margin: 0px; top: 2419px; left: 716px;">
<span class="res">2160x1080px</span>
<figure>
<meta itemprop="keywords" content="Video Game, Genshin Impact, Beidou (Genshin Impact), HD wallpaper">
<link itemprop="contentUrl" href="https://w0.peakpx.com/wallpaper/274/301/HD-wallpaper-video-game-genshin-impact-beidou-genshin-impact.jpg">
<a itemprop="url" href="https://www.peakpx.com/en/hd-wallpaper-desktop-krhou" target="_blank">
<img itemprop="thumbnail" alt="Video Game, Genshin Impact, Beidou (Genshin Impact), HD wallpaper" title="Video Game, Genshin Impact, Beidou (Genshin Impact), HD wallpaper" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQYV2NgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII=" data-src="https://w0.peakpx.com/wallpaper/274/301/HD-wallpaper-video-game-genshin-impact-beidou-genshin-impact-thumbnail.jpg" class="lazy lst_img" data-srcset="https://w0.peakpx.com/wallpaper/274/301/HD-wallpaper-video-game-genshin-impact-beidou-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/274/301/HD-wallpaper-video-game-genshin-impact-beidou-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/274/301/HD-wallpaper-video-game-genshin-impact-beidou-genshin-impact.jpg 4x" width="338" height="169">
</a>
<figcaption itemprop="caption description" class="title overflow">Video Game, Genshin Impact, Beidou (Genshin Impact), HD wallpaper</figcaption>
</figure>
</li>
<li itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject" class="grid" style="position: absolute; margin: 0px; top: 2458px; left: 0px;">
<span class="res">3567x2026px</span>
<figure>
<meta itemprop="keywords" content="Video Game, Genshin Impact, Zhongli (Genshin Impact), HD wallpaper">
<link itemprop="contentUrl" href="https://w0.peakpx.com/wallpaper/164/1010/HD-wallpaper-video-game-genshin-impact-zhongli-genshin-impact.jpg">
<a itemprop="url" href="https://www.peakpx.com/en/hd-wallpaper-desktop-ajeea" target="_blank">
<img itemprop="thumbnail" alt="Video Game, Genshin Impact, Zhongli (Genshin Impact), HD wallpaper" title="Video Game, Genshin Impact, Zhongli (Genshin Impact), HD wallpaper" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQYV2NgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII=" data-src="https://w0.peakpx.com/wallpaper/164/1010/HD-wallpaper-video-game-genshin-impact-zhongli-genshin-impact-thumbnail.jpg" class="lazy lst_img" data-srcset="https://w0.peakpx.com/wallpaper/164/1010/HD-wallpaper-video-game-genshin-impact-zhongli-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/164/1010/HD-wallpaper-video-game-genshin-impact-zhongli-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/164/1010/HD-wallpaper-video-game-genshin-impact-zhongli-genshin-impact.jpg 4x" width="338" height="192">
</a>
<figcaption itemprop="caption description" class="title overflow">Video Game, Genshin Impact, Zhongli (Genshin Impact), HD wallpaper</figcaption>
</figure>
</li>
<li itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject" class="grid" style="position: absolute; margin: 0px; top: 2601px; left: 358px;">
<span class="res">4315x2893px</span>
<figure>
<meta itemprop="keywords" content="Video Game, Genshin Impact, Xiao (Genshin Impact), HD wallpaper">
<link itemprop="contentUrl" href="https://w0.peakpx.com/wallpaper/692/360/HD-wallpaper-video-game-genshin-impact-xiao-genshin-impact.jpg">
<a itemprop="url" href="https://www.peakpx.com/en/hd-wallpaper-desktop-ahtgz" target="_blank">
<img itemprop="thumbnail" alt="Video Game, Genshin Impact, Xiao (Genshin Impact), HD wallpaper" title="Video Game, Genshin Impact, Xiao (Genshin Impact), HD wallpaper" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQYV2NgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII=" data-src="https://w0.peakpx.com/wallpaper/692/360/HD-wallpaper-video-game-genshin-impact-xiao-genshin-impact-thumbnail.jpg" class="lazy lst_img" data-srcset="https://w0.peakpx.com/wallpaper/692/360/HD-wallpaper-video-game-genshin-impact-xiao-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/692/360/HD-wallpaper-video-game-genshin-impact-xiao-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/692/360/HD-wallpaper-video-game-genshin-impact-xiao-genshin-impact.jpg 4x" width="338" height="227">
</a>
<figcaption itemprop="caption description" class="title overflow">Video Game, Genshin Impact, Xiao (Genshin Impact), HD wallpaper</figcaption>
</figure>
</li>
<li itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject" class="grid" style="position: absolute; margin: 0px; top: 2609px; left: 716px;">
<span class="res">3178x1637px</span>
<figure>
<meta itemprop="keywords" content="Video Game, Genshin Impact, Scaramouche (Genshin Impact), HD wallpaper">
<link itemprop="contentUrl" href="https://w0.peakpx.com/wallpaper/886/70/HD-wallpaper-video-game-genshin-impact-scaramouche-genshin-impact.jpg">
<a itemprop="url" href="https://www.peakpx.com/en/hd-wallpaper-desktop-eoiwt" target="_blank">
<img itemprop="thumbnail" alt="Video Game, Genshin Impact, Scaramouche (Genshin Impact), HD wallpaper" title="Video Game, Genshin Impact, Scaramouche (Genshin Impact), HD wallpaper" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQYV2NgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII=" data-src="https://w0.peakpx.com/wallpaper/886/70/HD-wallpaper-video-game-genshin-impact-scaramouche-genshin-impact-thumbnail.jpg" class="lazy lst_img" data-srcset="https://w0.peakpx.com/wallpaper/886/70/HD-wallpaper-video-game-genshin-impact-scaramouche-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/886/70/HD-wallpaper-video-game-genshin-impact-scaramouche-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/886/70/HD-wallpaper-video-game-genshin-impact-scaramouche-genshin-impact.jpg 4x" width="338" height="174">
</a>
<figcaption itemprop="caption description" class="title overflow">Video Game, Genshin Impact, Scaramouche (Genshin Impact), HD wallpaper</figcaption>
</figure>
</li>
<li itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject" class="grid" style="position: absolute; margin: 0px; top: 2671px; left: 0px;">
<span class="res">6000x3300px</span>
<figure>
<meta itemprop="keywords" content="Video Game, Genshin Impact, Library, Lisa (Genshin Impact), Night, HD wallpaper">
<link itemprop="contentUrl" href="https://w0.peakpx.com/wallpaper/494/657/HD-wallpaper-video-game-genshin-impact-library-lisa-genshin-impact-night.jpg">
<a itemprop="url" href="https://www.peakpx.com/en/hd-wallpaper-desktop-ggdqx" target="_blank">
<img itemprop="thumbnail" alt="Video Game, Genshin Impact, Library, Lisa (Genshin Impact), Night, HD wallpaper" title="Video Game, Genshin Impact, Library, Lisa (Genshin Impact), Night, HD wallpaper" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQYV2NgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII=" data-src="https://w0.peakpx.com/wallpaper/494/657/HD-wallpaper-video-game-genshin-impact-library-lisa-genshin-impact-night-thumbnail.jpg" class="lazy lst_img" data-srcset="https://w0.peakpx.com/wallpaper/494/657/HD-wallpaper-video-game-genshin-impact-library-lisa-genshin-impact-night.jpg 2x,https://w0.peakpx.com/wallpaper/494/657/HD-wallpaper-video-game-genshin-impact-library-lisa-genshin-impact-night.jpg 3x,https://w0.peakpx.com/wallpaper/494/657/HD-wallpaper-video-game-genshin-impact-library-lisa-genshin-impact-night.jpg 4x" width="338" height="186">
</a>
<figcaption itemprop="caption description" class="title overflow">Video Game, Genshin Impact, Library, Lisa (Genshin Impact), Night, HD wallpaper</figcaption>
</figure>
</li>
<li itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject" class="grid" style="position: absolute; margin: 0px; top: 2804px; left: 716px;">
<span class="res">4724x2657px</span>
<figure>
<meta itemprop="keywords" content="Video Game, Genshin Impact, Chongyun (Genshin Impact), Ganyu (Genshin Impact), Hu Tao, Keqing (Genshin Impact), Lumine (Genshin Impact), Ningguang (Genshin Impact), Paimon (Genshin Impact), Qiqi (Genshin Impact), Tartaglia (Genshin Impact), Xiangling (Genshin Impact), Xiao (Genshin Impact), Xingqiu (Genshin Impact), Zhongli (Genshin Impact), Xinyan (Genshin Impact), Yaoyao (Genshin Impact), HD wallpaper">
<link itemprop="contentUrl" href="https://w0.peakpx.com/wallpaper/1022/380/HD-wallpaper-video-game-genshin-impact-chongyun-genshin-impact-ganyu-genshin-impact-hu-tao-keqing-genshin-impact-lumine-genshin-impact-ningguang-genshin-impact-paimon-genshin-impact-qiqi-genshin.jpg">
<a itemprop="url" href="https://www.peakpx.com/en/hd-wallpaper-desktop-vmhen" target="_blank">
<img itemprop="thumbnail" alt="Video Game, Genshin Impact, Chongyun (Genshin Impact), Ganyu (Genshin Impact), Hu Tao, Keqing (Genshin Impact), Lumine (Genshin Impact), Ningguang (Genshin Impact), Paimon (Genshin Impact), Qiqi (Genshin Impact), Tartaglia (Genshin Impact), Xiangling (Genshin Impact), Xiao (Genshin Impact), Xingqiu (Genshin Impact), Zhongli (Genshin Impact), Xinyan (Genshin Impact), Yaoyao (Genshin Impact), HD wallpaper" title="Video Game, Genshin Impact, Chongyun (Genshin Impact), Ganyu (Genshin Impact), Hu Tao, Keqing (Genshin Impact), Lumine (Genshin Impact), Ningguang (Genshin Impact), Paimon (Genshin Impact), Qiqi (Genshin Impact), Tartaglia (Genshin Impact), Xiangling (Genshin Impact), Xiao (Genshin Impact), Xingqiu (Genshin Impact), Zhongli (Genshin Impact), Xinyan (Genshin Impact), Yaoyao (Genshin Impact), HD wallpaper" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQYV2NgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII=" data-src="https://w0.peakpx.com/wallpaper/1022/380/HD-wallpaper-video-game-genshin-impact-chongyun-genshin-impact-ganyu-genshin-impact-hu-tao-keqing-genshin-impact-lumine-genshin-impact-ningguang-genshin-impact-paimon-genshin-impact-qiqi-genshin-thumbnail.jpg" class="lazy lst_img" data-srcset="https://w0.peakpx.com/wallpaper/1022/380/HD-wallpaper-video-game-genshin-impact-chongyun-genshin-impact-ganyu-genshin-impact-hu-tao-keqing-genshin-impact-lumine-genshin-impact-ningguang-genshin-impact-paimon-genshin-impact-qiqi-genshin.jpg 2x,https://w0.peakpx.com/wallpaper/1022/380/HD-wallpaper-video-game-genshin-impact-chongyun-genshin-impact-ganyu-genshin-impact-hu-tao-keqing-genshin-impact-lumine-genshin-impact-ningguang-genshin-impact-paimon-genshin-impact-qiqi-genshin.jpg 3x,https://w0.peakpx.com/wallpaper/1022/380/HD-wallpaper-video-game-genshin-impact-chongyun-genshin-impact-ganyu-genshin-impact-hu-tao-keqing-genshin-impact-lumine-genshin-impact-ningguang-genshin-impact-paimon-genshin-impact-qiqi-genshin.jpg 4x" width="338" height="190">
</a>
<figcaption itemprop="caption description" class="title overflow">Video Game, Genshin Impact, Chongyun (Genshin Impact), Ganyu (Genshin Impact), Hu Tao, Keqing (Genshin Impact), Lumine (Genshin Impact), Ningguang (Genshin Impact), Paimon (Genshin Impact), Qiqi (Genshin Impact), Tartaglia (Genshin Impact), Xiangling (Genshin Impact), Xiao (Genshin Impact), Xingqiu (Genshin Impact), Zhongli (Genshin Impact), Xinyan (Genshin Impact), Yaoyao (Genshin Impact), HD wallpaper</figcaption>
</figure>
</li>
<li itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject" class="grid" style="position: absolute; margin: 0px; top: 2849px; left: 358px;">
<span class="res">2560x1440px</span>
<figure>
<meta itemprop="keywords" content="Video Game, Genshin Impact, HD wallpaper">
<link itemprop="contentUrl" href="https://w0.peakpx.com/wallpaper/153/504/HD-wallpaper-video-game-genshin-impact-baal-raiden-shogun-genshin-impact.jpg">
<a itemprop="url" href="https://www.peakpx.com/en/hd-wallpaper-desktop-egwas" target="_blank">
<img itemprop="thumbnail" alt="Video Game, Genshin Impact, Baal Raiden Shogun (Genshin Impact), HD wallpaper" title="Video Game, Genshin Impact, Baal Raiden Shogun (Genshin Impact), HD wallpaper" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQYV2NgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII=" data-src="https://w0.peakpx.com/wallpaper/153/504/HD-wallpaper-video-game-genshin-impact-baal-raiden-shogun-genshin-impact-thumbnail.jpg" class="lazy lst_img" data-srcset="https://w0.peakpx.com/wallpaper/153/504/HD-wallpaper-video-game-genshin-impact-baal-raiden-shogun-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/153/504/HD-wallpaper-video-game-genshin-impact-baal-raiden-shogun-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/153/504/HD-wallpaper-video-game-genshin-impact-baal-raiden-shogun-genshin-impact.jpg 4x" width="338" height="190">
</a>
<figcaption itemprop="caption description" class="title overflow">Video Game, Genshin Impact, Baal Raiden Shogun (Genshin Impact), HD wallpaper</figcaption>
</figure>
</li>
<li itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject" class="grid" style="position: absolute; margin: 0px; top: 2878px; left: 0px;">
<span class="res">2000x1089px</span>
<figure>
<meta itemprop="keywords" content="Video Game, Genshin Impact, Inazuma (Genshin Impact), HD wallpaper">
<link itemprop="contentUrl" href="https://w0.peakpx.com/wallpaper/598/792/HD-wallpaper-video-game-genshin-impact-inazuma-genshin-impact.jpg">
<a itemprop="url" href="https://www.peakpx.com/en/hd-wallpaper-desktop-vcziv" target="_blank">
<img itemprop="thumbnail" alt="Video Game, Genshin Impact, Inazuma (Genshin Impact), HD wallpaper" title="Video Game, Genshin Impact, Inazuma (Genshin Impact), HD wallpaper" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQYV2NgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII=" data-src="https://w0.peakpx.com/wallpaper/598/792/HD-wallpaper-video-game-genshin-impact-inazuma-genshin-impact-thumbnail.jpg" class="lazy lst_img" data-srcset="https://w0.peakpx.com/wallpaper/598/792/HD-wallpaper-video-game-genshin-impact-inazuma-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/598/792/HD-wallpaper-video-game-genshin-impact-inazuma-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/598/792/HD-wallpaper-video-game-genshin-impact-inazuma-genshin-impact.jpg 4x" width="338" height="184">
</a>
<figcaption itemprop="caption description" class="title overflow">Video Game, Genshin Impact, Inazuma (Genshin Impact), HD wallpaper</figcaption>
</figure>
</li>
<li itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject" class="grid" style="position: absolute; margin: 0px; top: 3015px; left: 716px;">
<span class="res">1920x1080px</span>
<figure>
<meta itemprop="keywords" content="Video Game, Genshin Impact, Xiao (Genshin Impact), HD wallpaper">
<link itemprop="contentUrl" href="https://w0.peakpx.com/wallpaper/778/591/HD-wallpaper-video-game-genshin-impact-xiao-genshin-impact.jpg">
<a itemprop="url" href="https://www.peakpx.com/en/hd-wallpaper-desktop-ahohi" target="_blank">
<img itemprop="thumbnail" alt="Video Game, Genshin Impact, Xiao (Genshin Impact), HD wallpaper" title="Video Game, Genshin Impact, Xiao (Genshin Impact), HD wallpaper" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQYV2NgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII=" data-src="https://w0.peakpx.com/wallpaper/778/591/HD-wallpaper-video-game-genshin-impact-xiao-genshin-impact-thumbnail.jpg" class="lazy lst_img" data-srcset="https://w0.peakpx.com/wallpaper/778/591/HD-wallpaper-video-game-genshin-impact-xiao-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/778/591/HD-wallpaper-video-game-genshin-impact-xiao-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/778/591/HD-wallpaper-video-game-genshin-impact-xiao-genshin-impact.jpg 4x" width="338" height="190">
</a>
<figcaption itemprop="caption description" class="title overflow">Video Game, Genshin Impact, Xiao (Genshin Impact), HD wallpaper</figcaption>
</figure>
</li>
<li itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject" class="grid" style="position: absolute; margin: 0px; top: 3060px; left: 358px;">
<span class="res">2490x2006px</span>
<figure>
<meta itemprop="keywords" content="Video Game, Genshin Impact, Girl, Lumine (Genshin Impact), HD wallpaper">
<link itemprop="contentUrl" href="https://w0.peakpx.com/wallpaper/1/685/HD-wallpaper-video-game-genshin-impact-girl-lumine-genshin-impact.jpg">
<a itemprop="url" href="https://www.peakpx.com/en/hd-wallpaper-desktop-gxkmz" target="_blank">
<img itemprop="thumbnail" alt="Video Game, Genshin Impact, Girl, Lumine (Genshin Impact), HD wallpaper" title="Video Game, Genshin Impact, Girl, Lumine (Genshin Impact), HD wallpaper" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQYV2NgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII=" data-src="https://w0.peakpx.com/wallpaper/1/685/HD-wallpaper-video-game-genshin-impact-girl-lumine-genshin-impact-thumbnail.jpg" class="lazy lst_img" data-srcset="https://w0.peakpx.com/wallpaper/1/685/HD-wallpaper-video-game-genshin-impact-girl-lumine-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/1/685/HD-wallpaper-video-game-genshin-impact-girl-lumine-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/1/685/HD-wallpaper-video-game-genshin-impact-girl-lumine-genshin-impact.jpg 4x" width="338" height="272">
</a>
<figcaption itemprop="caption description" class="title overflow">Video Game, Genshin Impact, Girl, Lumine (Genshin Impact), HD wallpaper</figcaption>
</figure>
</li>
<li itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject" class="grid" style="position: absolute; margin: 0px; top: 3083px; left: 0px;">
<span class="res">3376x2048px</span>
<figure>
<meta itemprop="keywords" content="Video Game, Genshin Impact, HD wallpaper">
<link itemprop="contentUrl" href="https://w0.peakpx.com/wallpaper/69/1020/HD-wallpaper-video-game-genshin-impact-yae-miko-guuji-genshin-impact.jpg">
<a itemprop="url" href="https://www.peakpx.com/en/hd-wallpaper-desktop-egfei" target="_blank">
<img itemprop="thumbnail" alt="Video Game, Genshin Impact, Yae Miko Guuji (Genshin Impact), HD wallpaper" title="Video Game, Genshin Impact, Yae Miko Guuji (Genshin Impact), HD wallpaper" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQYV2NgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII=" data-src="https://w0.peakpx.com/wallpaper/69/1020/HD-wallpaper-video-game-genshin-impact-yae-miko-guuji-genshin-impact-thumbnail.jpg" class="lazy lst_img" data-srcset="https://w0.peakpx.com/wallpaper/69/1020/HD-wallpaper-video-game-genshin-impact-yae-miko-guuji-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/69/1020/HD-wallpaper-video-game-genshin-impact-yae-miko-guuji-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/69/1020/HD-wallpaper-video-game-genshin-impact-yae-miko-guuji-genshin-impact.jpg 4x" width="338" height="205">
</a>
<figcaption itemprop="caption description" class="title overflow">Video Game, Genshin Impact, Yae Miko Guuji (Genshin Impact), HD wallpaper</figcaption>
</figure>
</li>
<li itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject" class="grid" style="position: absolute; margin: 0px; top: 3226px; left: 716px;">
<span class="res">5760x3402px</span>
<figure>
<meta itemprop="keywords" content="Video Game, Genshin Impact, HD wallpaper">
<link itemprop="contentUrl" href="https://w0.peakpx.com/wallpaper/825/699/HD-wallpaper-video-game-genshin-impact-baal-raiden-shogun-genshin-impact.jpg">
<a itemprop="url" href="https://www.peakpx.com/en/hd-wallpaper-desktop-eourt" target="_blank">
<img itemprop="thumbnail" alt="Video Game, Genshin Impact, Baal Raiden Shogun (Genshin Impact), HD wallpaper" title="Video Game, Genshin Impact, Baal Raiden Shogun (Genshin Impact), HD wallpaper" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQYV2NgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII=" data-src="https://w0.peakpx.com/wallpaper/825/699/HD-wallpaper-video-game-genshin-impact-baal-raiden-shogun-genshin-impact-thumbnail.jpg" class="lazy lst_img" data-srcset="https://w0.peakpx.com/wallpaper/825/699/HD-wallpaper-video-game-genshin-impact-baal-raiden-shogun-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/825/699/HD-wallpaper-video-game-genshin-impact-baal-raiden-shogun-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/825/699/HD-wallpaper-video-game-genshin-impact-baal-raiden-shogun-genshin-impact.jpg 4x" width="338" height="200">
</a>
<figcaption itemprop="caption description" class="title overflow">Video Game, Genshin Impact, Baal Raiden Shogun (Genshin Impact), HD wallpaper</figcaption>
</figure>
</li>
<li itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject" class="grid" style="position: absolute; margin: 0px; top: 3309px; left: 0px;">
<span class="res">4092x2893px</span>
<figure>
<meta itemprop="keywords" content="Video Game, Genshin Impact, Diluc (Genshin Impact), HD wallpaper">
<link itemprop="contentUrl" href="https://w0.peakpx.com/wallpaper/65/232/HD-wallpaper-video-game-genshin-impact-diluc-genshin-impact.jpg">
<a itemprop="url" href="https://www.peakpx.com/en/hd-wallpaper-desktop-auujh" target="_blank">
<img itemprop="thumbnail" alt="Video Game, Genshin Impact, Diluc (Genshin Impact), HD wallpaper" title="Video Game, Genshin Impact, Diluc (Genshin Impact), HD wallpaper" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQYV2NgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII=" data-src="https://w0.peakpx.com/wallpaper/65/232/HD-wallpaper-video-game-genshin-impact-diluc-genshin-impact-thumbnail.jpg" class="lazy lst_img" data-srcset="https://w0.peakpx.com/wallpaper/65/232/HD-wallpaper-video-game-genshin-impact-diluc-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/65/232/HD-wallpaper-video-game-genshin-impact-diluc-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/65/232/HD-wallpaper-video-game-genshin-impact-diluc-genshin-impact.jpg 4x" width="338" height="239">
</a>
<figcaption itemprop="caption description" class="title overflow">Video Game, Genshin Impact, Diluc (Genshin Impact), HD wallpaper</figcaption>
</figure>
</li>
<li itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject" class="grid" style="position: absolute; margin: 0px; top: 3353px; left: 358px;">
<span class="res">3600x2500px</span>
<figure>
<meta itemprop="keywords" content="Video Game, Genshin Impact, Keqing (Genshin Impact), HD wallpaper">
<link itemprop="contentUrl" href="https://w0.peakpx.com/wallpaper/865/495/HD-wallpaper-video-game-genshin-impact-keqing-genshin-impact.jpg">
<a itemprop="url" href="https://www.peakpx.com/en/hd-wallpaper-desktop-nbjlo" target="_blank">
<img itemprop="thumbnail" alt="Video Game, Genshin Impact, Keqing (Genshin Impact), HD wallpaper" title="Video Game, Genshin Impact, Keqing (Genshin Impact), HD wallpaper" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQYV2NgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII=" data-src="https://w0.peakpx.com/wallpaper/865/495/HD-wallpaper-video-game-genshin-impact-keqing-genshin-impact-thumbnail.jpg" class="lazy lst_img" data-srcset="https://w0.peakpx.com/wallpaper/865/495/HD-wallpaper-video-game-genshin-impact-keqing-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/865/495/HD-wallpaper-video-game-genshin-impact-keqing-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/865/495/HD-wallpaper-video-game-genshin-impact-keqing-genshin-impact.jpg 4x" width="338" height="235">
</a>
<figcaption itemprop="caption description" class="title overflow">Video Game, Genshin Impact, Keqing (Genshin Impact), HD wallpaper</figcaption>
</figure>
</li>
<li itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject" class="grid" style="position: absolute; margin: 0px; top: 3447px; left: 716px;">
<span class="res">1920x1170px</span>
<figure>
<meta itemprop="keywords" content="Video Game, Genshin Impact, HD wallpaper">
<link itemprop="contentUrl" href="https://w0.peakpx.com/wallpaper/182/285/HD-wallpaper-video-game-genshin-impact-yae-miko-guuji-genshin-impact.jpg">
<a itemprop="url" href="https://www.peakpx.com/en/hd-wallpaper-desktop-eozzn" target="_blank">
<img itemprop="thumbnail" alt="Video Game, Genshin Impact, Yae Miko Guuji (Genshin Impact), HD wallpaper" title="Video Game, Genshin Impact, Yae Miko Guuji (Genshin Impact), HD wallpaper" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQYV2NgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII=" data-src="https://w0.peakpx.com/wallpaper/182/285/HD-wallpaper-video-game-genshin-impact-yae-miko-guuji-genshin-impact-thumbnail.jpg" class="lazy lst_img" data-srcset="https://w0.peakpx.com/wallpaper/182/285/HD-wallpaper-video-game-genshin-impact-yae-miko-guuji-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/182/285/HD-wallpaper-video-game-genshin-impact-yae-miko-guuji-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/182/285/HD-wallpaper-video-game-genshin-impact-yae-miko-guuji-genshin-impact.jpg 4x" width="338" height="206">
</a>
<figcaption itemprop="caption description" class="title overflow">Video Game, Genshin Impact, Yae Miko Guuji (Genshin Impact), HD wallpaper</figcaption>
</figure>
</li>
<li itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject" class="grid" style="position: absolute; margin: 0px; top: 3569px; left: 0px;">
<span class="res">2560x1440px</span>
<figure>
<meta itemprop="keywords" content="Video Game, Genshin Impact, Arataki Itto, Gorou (Genshin Impact), HD wallpaper">
<link itemprop="contentUrl" href="https://w0.peakpx.com/wallpaper/828/680/HD-wallpaper-video-game-genshin-impact-arataki-itto-gorou-genshin-impact.jpg">
<a itemprop="url" href="https://www.peakpx.com/en/hd-wallpaper-desktop-eorva" target="_blank">
<img itemprop="thumbnail" alt="Video Game, Genshin Impact, Arataki Itto , Gorou (Genshin Impact), HD wallpaper" title="Video Game, Genshin Impact, Arataki Itto , Gorou (Genshin Impact), HD wallpaper" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQYV2NgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII=" data-src="https://w0.peakpx.com/wallpaper/828/680/HD-wallpaper-video-game-genshin-impact-arataki-itto-gorou-genshin-impact-thumbnail.jpg" class="lazy lst_img" data-srcset="https://w0.peakpx.com/wallpaper/828/680/HD-wallpaper-video-game-genshin-impact-arataki-itto-gorou-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/828/680/HD-wallpaper-video-game-genshin-impact-arataki-itto-gorou-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/828/680/HD-wallpaper-video-game-genshin-impact-arataki-itto-gorou-genshin-impact.jpg 4x" width="338" height="190">
</a>
<figcaption itemprop="caption description" class="title overflow">Video Game, Genshin Impact, Arataki Itto , Gorou (Genshin Impact), HD wallpaper</figcaption>
</figure>
</li>
<li itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject" class="grid" style="position: absolute; margin: 0px; top: 3609px; left: 358px;">
<span class="res">2000x1160px</span>
<figure>
<meta itemprop="keywords" content="Video Game, Genshin Impact, Inazuma (Genshin Impact), HD wallpaper">
<link itemprop="contentUrl" href="https://w0.peakpx.com/wallpaper/820/667/HD-wallpaper-video-game-genshin-impact-inazuma-genshin-impact.jpg">
<a itemprop="url" href="https://www.peakpx.com/en/hd-wallpaper-desktop-vczip" target="_blank">
<img itemprop="thumbnail" alt="Video Game, Genshin Impact, Inazuma (Genshin Impact), HD wallpaper" title="Video Game, Genshin Impact, Inazuma (Genshin Impact), HD wallpaper" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQYV2NgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII=" data-src="https://w0.peakpx.com/wallpaper/820/667/HD-wallpaper-video-game-genshin-impact-inazuma-genshin-impact-thumbnail.jpg" class="lazy lst_img" data-srcset="https://w0.peakpx.com/wallpaper/820/667/HD-wallpaper-video-game-genshin-impact-inazuma-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/820/667/HD-wallpaper-video-game-genshin-impact-inazuma-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/820/667/HD-wallpaper-video-game-genshin-impact-inazuma-genshin-impact.jpg 4x" width="338" height="196">
</a>
<figcaption itemprop="caption description" class="title overflow">Video Game, Genshin Impact, Inazuma (Genshin Impact), HD wallpaper</figcaption>
</figure>
</li>
<li itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject" class="grid" style="position: absolute; margin: 0px; top: 3674px; left: 716px;">
<span class="res">2500x1349px</span>
<figure>
<meta itemprop="keywords" content="Video Game, Genshin Impact, Kamisato Ayaka (Genshin Impact), HD wallpaper">
<link itemprop="contentUrl" href="https://w0.peakpx.com/wallpaper/196/210/HD-wallpaper-video-game-genshin-impact-kamisato-ayaka-genshin-impact.jpg">
<a itemprop="url" href="https://www.peakpx.com/en/hd-wallpaper-desktop-vybxp" target="_blank">
<img itemprop="thumbnail" alt="Video Game, Genshin Impact, Kamisato Ayaka (Genshin Impact), HD wallpaper" title="Video Game, Genshin Impact, Kamisato Ayaka (Genshin Impact), HD wallpaper" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQYV2NgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII=" data-src="https://w0.peakpx.com/wallpaper/196/210/HD-wallpaper-video-game-genshin-impact-kamisato-ayaka-genshin-impact-thumbnail.jpg" class="lazy lst_img" data-srcset="https://w0.peakpx.com/wallpaper/196/210/HD-wallpaper-video-game-genshin-impact-kamisato-ayaka-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/196/210/HD-wallpaper-video-game-genshin-impact-kamisato-ayaka-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/196/210/HD-wallpaper-video-game-genshin-impact-kamisato-ayaka-genshin-impact.jpg 4x" width="338" height="182">
</a>
<figcaption itemprop="caption description" class="title overflow">Video Game, Genshin Impact, Kamisato Ayaka (Genshin Impact), HD wallpaper</figcaption>
</figure>
</li>
<li itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject" class="grid" style="position: absolute; margin: 0px; top: 3780px; left: 0px;">
<span class="res">3840x2160px</span>
<figure>
<meta itemprop="keywords" content="Video Game, Genshin Impact, Kazuha (Genshin Impact), HD wallpaper">
<link itemprop="contentUrl" href="https://w0.peakpx.com/wallpaper/921/82/HD-wallpaper-video-game-genshin-impact-kazuha-genshin-impact.jpg">
<a itemprop="url" href="https://www.peakpx.com/en/hd-wallpaper-desktop-vlkef" target="_blank">
<img itemprop="thumbnail" alt="Video Game, Genshin Impact, Kazuha (Genshin Impact), HD wallpaper" title="Video Game, Genshin Impact, Kazuha (Genshin Impact), HD wallpaper" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQYV2NgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII=" data-src="https://w0.peakpx.com/wallpaper/921/82/HD-wallpaper-video-game-genshin-impact-kazuha-genshin-impact-thumbnail.jpg" class="lazy lst_img" data-srcset="https://w0.peakpx.com/wallpaper/921/82/HD-wallpaper-video-game-genshin-impact-kazuha-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/921/82/HD-wallpaper-video-game-genshin-impact-kazuha-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/921/82/HD-wallpaper-video-game-genshin-impact-kazuha-genshin-impact.jpg 4x" width="338" height="190">
</a>
<figcaption itemprop="caption description" class="title overflow">Video Game, Genshin Impact, Kazuha (Genshin Impact), HD wallpaper</figcaption>
</figure>
</li>
<li itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject" class="grid" style="position: absolute; margin: 0px; top: 3826px; left: 358px;">
<span class="res">2048x1152px</span>
<figure>
<meta itemprop="keywords" content="Video Game, Genshin Impact, Aether (Genshin Impact), Albedo (Genshin Impact), Kamisato Ayato, Paimon (Genshin Impact), HD wallpaper">
<link itemprop="contentUrl" href="https://w0.peakpx.com/wallpaper/809/956/HD-wallpaper-video-game-genshin-impact-aether-genshin-impact-albedo-genshin-impact.jpg">
<a itemprop="url" href="https://www.peakpx.com/en/hd-wallpaper-desktop-eobds" target="_blank">
<img itemprop="thumbnail" alt="Video Game, Genshin Impact, Aether (Genshin Impact) , Albedo (Genshin Impact) , Kamisato Ayato , Paimon (Genshin Impact), HD wallpaper" title="Video Game, Genshin Impact, Aether (Genshin Impact) , Albedo (Genshin Impact) , Kamisato Ayato , Paimon (Genshin Impact), HD wallpaper" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQYV2NgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII=" data-src="https://w0.peakpx.com/wallpaper/809/956/HD-wallpaper-video-game-genshin-impact-aether-genshin-impact-albedo-genshin-impact-thumbnail.jpg" class="lazy lst_img" data-srcset="https://w0.peakpx.com/wallpaper/809/956/HD-wallpaper-video-game-genshin-impact-aether-genshin-impact-albedo-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/809/956/HD-wallpaper-video-game-genshin-impact-aether-genshin-impact-albedo-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/809/956/HD-wallpaper-video-game-genshin-impact-aether-genshin-impact-albedo-genshin-impact.jpg 4x" width="338" height="190">
</a>
<figcaption itemprop="caption description" class="title overflow">Video Game, Genshin Impact, Aether (Genshin Impact) , Albedo (Genshin Impact) , Kamisato Ayato , Paimon (Genshin Impact), HD wallpaper</figcaption>
</figure>
</li>
<li itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject" class="grid" style="position: absolute; margin: 0px; top: 3877px; left: 716px;">
<span class="res">4699x2643px</span>
<figure>
<meta itemprop="keywords" content="Video Game, Genshin Impact, Amber (Genshin Impact), Barbara (Genshin Impact), Jean (Genshin Impact), Lumine (Genshin Impact), Paimon (Genshin Impact), HD wallpaper">
<link itemprop="contentUrl" href="https://w0.peakpx.com/wallpaper/997/459/HD-wallpaper-video-game-genshin-impact-amber-genshin-impact-barbara-genshin-impact-jean-genshin-impact-lumine-genshin-impact-paimon-genshin-impact.jpg">
<a itemprop="url" href="https://www.peakpx.com/en/hd-wallpaper-desktop-ggdqt" target="_blank">
<img itemprop="thumbnail" alt="Video Game, Genshin Impact, Amber (Genshin Impact), Barbara (Genshin Impact), Jean (Genshin Impact), Lumine (Genshin Impact), Paimon (Genshin Impact), HD wallpaper" title="Video Game, Genshin Impact, Amber (Genshin Impact), Barbara (Genshin Impact), Jean (Genshin Impact), Lumine (Genshin Impact), Paimon (Genshin Impact), HD wallpaper" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQYV2NgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII=" data-src="https://w0.peakpx.com/wallpaper/997/459/HD-wallpaper-video-game-genshin-impact-amber-genshin-impact-barbara-genshin-impact-jean-genshin-impact-lumine-genshin-impact-paimon-genshin-impact-thumbnail.jpg" class="lazy lst_img" data-srcset="https://w0.peakpx.com/wallpaper/997/459/HD-wallpaper-video-game-genshin-impact-amber-genshin-impact-barbara-genshin-impact-jean-genshin-impact-lumine-genshin-impact-paimon-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/997/459/HD-wallpaper-video-game-genshin-impact-amber-genshin-impact-barbara-genshin-impact-jean-genshin-impact-lumine-genshin-impact-paimon-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/997/459/HD-wallpaper-video-game-genshin-impact-amber-genshin-impact-barbara-genshin-impact-jean-genshin-impact-lumine-genshin-impact-paimon-genshin-impact.jpg 4x" width="338" height="190">
</a>
<figcaption itemprop="caption description" class="title overflow">Video Game, Genshin Impact, Amber (Genshin Impact), Barbara (Genshin Impact), Jean (Genshin Impact), Lumine (Genshin Impact), Paimon (Genshin Impact), HD wallpaper</figcaption>
</figure>
</li>
<li itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject" class="grid" style="position: absolute; margin: 0px; top: 3991px; left: 0px;">
<span class="res">3840x2160px</span>
<figure>
<meta itemprop="keywords" content="HD wallpaper">
<link itemprop="contentUrl" href="https://w0.peakpx.com/wallpaper/437/41/HD-wallpaper-kaedehara-kazuha-xiao-genshin-impact.jpg">
<a itemprop="url" href="https://www.peakpx.com/en/hd-wallpaper-desktop-ekiew" target="_blank">
<img itemprop="thumbnail" alt="Kaedehara Kazuha Xiao Genshin Impact, HD wallpaper" title="Kaedehara Kazuha Xiao Genshin Impact, HD wallpaper" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQYV2NgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII=" data-src="https://w0.peakpx.com/wallpaper/437/41/HD-wallpaper-kaedehara-kazuha-xiao-genshin-impact-thumbnail.jpg" class="lazy lst_img" data-srcset="https://w0.peakpx.com/wallpaper/437/41/HD-wallpaper-kaedehara-kazuha-xiao-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/437/41/HD-wallpaper-kaedehara-kazuha-xiao-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/437/41/HD-wallpaper-kaedehara-kazuha-xiao-genshin-impact.jpg 4x" width="338" height="190">
</a>
<figcaption itemprop="caption description" class="title overflow">Kaedehara Kazuha Xiao Genshin Impact, HD wallpaper</figcaption>
</figure>
</li>
<li itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject" class="grid" style="position: absolute; margin: 0px; top: 4037px; left: 358px;">
<span class="res">5800x4000px</span>
<figure>
<meta itemprop="keywords" content="Video Game, Genshin Impact, Ayaka (Genshin Impact), HD wallpaper">
<link itemprop="contentUrl" href="https://w0.peakpx.com/wallpaper/159/523/HD-wallpaper-video-game-genshin-impact-ayaka-genshin-impact.jpg">
<a itemprop="url" href="https://www.peakpx.com/en/hd-wallpaper-desktop-vlulp" target="_blank">
<img itemprop="thumbnail" alt="Video Game, Genshin Impact, Ayaka (Genshin Impact), HD wallpaper" title="Video Game, Genshin Impact, Ayaka (Genshin Impact), HD wallpaper" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQYV2NgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII=" data-src="https://w0.peakpx.com/wallpaper/159/523/HD-wallpaper-video-game-genshin-impact-ayaka-genshin-impact-thumbnail.jpg" class="lazy lst_img" data-srcset="https://w0.peakpx.com/wallpaper/159/523/HD-wallpaper-video-game-genshin-impact-ayaka-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/159/523/HD-wallpaper-video-game-genshin-impact-ayaka-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/159/523/HD-wallpaper-video-game-genshin-impact-ayaka-genshin-impact.jpg 4x" width="338" height="233">
</a>
<figcaption itemprop="caption description" class="title overflow">Video Game, Genshin Impact, Ayaka (Genshin Impact), HD wallpaper</figcaption>
</figure>
</li>
<li itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject" class="grid" style="position: absolute; margin: 0px; top: 4088px; left: 716px;">
<span class="res">2048x1451px</span>
<figure>
<meta itemprop="keywords" content="Video Game, Genshin Impact, Zhongli (Genshin Impact), HD wallpaper">
<link itemprop="contentUrl" href="https://w0.peakpx.com/wallpaper/26/73/HD-wallpaper-video-game-genshin-impact-zhongli-genshin-impact.jpg">
<a itemprop="url" href="https://www.peakpx.com/en/hd-wallpaper-desktop-ndnes" target="_blank">
<img itemprop="thumbnail" alt="Video Game, Genshin Impact, Zhongli (Genshin Impact), HD wallpaper" title="Video Game, Genshin Impact, Zhongli (Genshin Impact), HD wallpaper" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQYV2NgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII=" data-src="https://w0.peakpx.com/wallpaper/26/73/HD-wallpaper-video-game-genshin-impact-zhongli-genshin-impact-thumbnail.jpg" class="lazy lst_img" data-srcset="https://w0.peakpx.com/wallpaper/26/73/HD-wallpaper-video-game-genshin-impact-zhongli-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/26/73/HD-wallpaper-video-game-genshin-impact-zhongli-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/26/73/HD-wallpaper-video-game-genshin-impact-zhongli-genshin-impact.jpg 4x" width="338" height="239">
</a>
<figcaption itemprop="caption description" class="title overflow">Video Game, Genshin Impact, Zhongli (Genshin Impact), HD wallpaper</figcaption>
</figure>
</li>
<li itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject" class="grid" style="position: absolute; margin: 0px; top: 4202px; left: 0px;">
<span class="res">6150x5125px</span>
<figure>
<meta itemprop="keywords" content="Video Game, Genshin Impact, Baal (Genshin Impact), HD wallpaper">
<link itemprop="contentUrl" href="https://w0.peakpx.com/wallpaper/1002/696/HD-wallpaper-video-game-genshin-impact-baal-genshin-impact.jpg">
<a itemprop="url" href="https://www.peakpx.com/en/hd-wallpaper-desktop-vspbz" target="_blank">
<img itemprop="thumbnail" alt="Video Game, Genshin Impact, Baal (Genshin Impact), HD wallpaper" title="Video Game, Genshin Impact, Baal (Genshin Impact), HD wallpaper" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQYV2NgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII=" data-src="https://w0.peakpx.com/wallpaper/1002/696/HD-wallpaper-video-game-genshin-impact-baal-genshin-impact-thumbnail.jpg" class="lazy lst_img" data-srcset="https://w0.peakpx.com/wallpaper/1002/696/HD-wallpaper-video-game-genshin-impact-baal-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/1002/696/HD-wallpaper-video-game-genshin-impact-baal-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/1002/696/HD-wallpaper-video-game-genshin-impact-baal-genshin-impact.jpg 4x" width="338" height="282">
</a>
<figcaption itemprop="caption description" class="title overflow">Video Game, Genshin Impact, Baal (Genshin Impact), HD wallpaper</figcaption>
</figure>
</li>
<li itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject" class="grid" style="position: absolute; margin: 0px; top: 4291px; left: 358px;">
<span class="res">3900x3500px</span>
<figure>
<meta itemprop="keywords" content="Video Game, Genshin Impact, HD wallpaper">
<link itemprop="contentUrl" href="https://w0.peakpx.com/wallpaper/570/827/HD-wallpaper-video-game-genshin-impact-baal-raiden-shogun-genshin-impact.jpg">
<a itemprop="url" href="https://www.peakpx.com/en/hd-wallpaper-desktop-exzby" target="_blank">
<img itemprop="thumbnail" alt="Video Game, Genshin Impact, Baal Raiden Shogun (Genshin Impact), HD wallpaper" title="Video Game, Genshin Impact, Baal Raiden Shogun (Genshin Impact), HD wallpaper" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQYV2NgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII=" data-src="https://w0.peakpx.com/wallpaper/570/827/HD-wallpaper-video-game-genshin-impact-baal-raiden-shogun-genshin-impact-thumbnail.jpg" class="lazy lst_img" data-srcset="https://w0.peakpx.com/wallpaper/570/827/HD-wallpaper-video-game-genshin-impact-baal-raiden-shogun-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/570/827/HD-wallpaper-video-game-genshin-impact-baal-raiden-shogun-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/570/827/HD-wallpaper-video-game-genshin-impact-baal-raiden-shogun-genshin-impact.jpg 4x" width="338" height="303">
</a>
<figcaption itemprop="caption description" class="title overflow">Video Game, Genshin Impact, Baal Raiden Shogun (Genshin Impact), HD wallpaper</figcaption>
</figure>
</li>
<li itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject" class="grid" style="position: absolute; margin: 0px; top: 4348px; left: 716px;">
<span class="res">2290x1908px</span>
<figure>
<meta itemprop="keywords" content="Video Game, Genshin Impact, HD wallpaper">
<link itemprop="contentUrl" href="https://w0.peakpx.com/wallpaper/439/349/HD-wallpaper-video-game-genshin-impact-baal-raiden-shogun-genshin-impact.jpg">
<a itemprop="url" href="https://www.peakpx.com/en/hd-wallpaper-desktop-vyshw" target="_blank">
<img itemprop="thumbnail" alt="Video Game, Genshin Impact, Baal Raiden Shogun (Genshin Impact), HD wallpaper" title="Video Game, Genshin Impact, Baal Raiden Shogun (Genshin Impact), HD wallpaper" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQYV2NgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII=" data-src="https://w0.peakpx.com/wallpaper/439/349/HD-wallpaper-video-game-genshin-impact-baal-raiden-shogun-genshin-impact-thumbnail.jpg" class="lazy lst_img" data-srcset="https://w0.peakpx.com/wallpaper/439/349/HD-wallpaper-video-game-genshin-impact-baal-raiden-shogun-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/439/349/HD-wallpaper-video-game-genshin-impact-baal-raiden-shogun-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/439/349/HD-wallpaper-video-game-genshin-impact-baal-raiden-shogun-genshin-impact.jpg 4x" width="338" height="282">
</a>
<figcaption itemprop="caption description" class="title overflow">Video Game, Genshin Impact, Baal Raiden Shogun (Genshin Impact), HD wallpaper</figcaption>
</figure>
</li>
<li itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject" class="grid" style="position: absolute; margin: 0px; top: 4505px; left: 0px;">
<span class="res">2098x1351px</span>
<figure>
<meta itemprop="keywords" content="Video Game, Genshin Impact, Inazuma (Genshin Impact), HD wallpaper">
<link itemprop="contentUrl" href="https://w0.peakpx.com/wallpaper/1007/979/HD-wallpaper-video-game-genshin-impact-inazuma-genshin-impact.jpg">
<a itemprop="url" href="https://www.peakpx.com/en/hd-wallpaper-desktop-vcbda" target="_blank">
<img itemprop="thumbnail" alt="Video Game, Genshin Impact, Inazuma (Genshin Impact), HD wallpaper" title="Video Game, Genshin Impact, Inazuma (Genshin Impact), HD wallpaper" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQYV2NgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII=" data-src="https://w0.peakpx.com/wallpaper/1007/979/HD-wallpaper-video-game-genshin-impact-inazuma-genshin-impact-thumbnail.jpg" class="lazy lst_img" data-srcset="https://w0.peakpx.com/wallpaper/1007/979/HD-wallpaper-video-game-genshin-impact-inazuma-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/1007/979/HD-wallpaper-video-game-genshin-impact-inazuma-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/1007/979/HD-wallpaper-video-game-genshin-impact-inazuma-genshin-impact.jpg 4x" width="338" height="218">
</a>
<figcaption itemprop="caption description" class="title overflow">Video Game, Genshin Impact, Inazuma (Genshin Impact), HD wallpaper</figcaption>
</figure>
</li>
<li itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject" class="grid" style="position: absolute; margin: 0px; top: 4615px; left: 358px;">
<span class="res">6000x3412px</span>
<figure>
<meta itemprop="keywords" content="Video Game, Genshin Impact, Kamisato Ayaka (Genshin Impact), Kamisato Ayato, HD wallpaper">
<link itemprop="contentUrl" href="https://w0.peakpx.com/wallpaper/527/1008/HD-wallpaper-video-game-genshin-impact-kamisato-ayaka-genshin-impact-kamisato-ayato.jpg">
<a itemprop="url" href="https://www.peakpx.com/en/hd-wallpaper-desktop-eobpq" target="_blank">
<img itemprop="thumbnail" alt="Video Game, Genshin Impact, Kamisato Ayaka (Genshin Impact) , Kamisato Ayato, HD wallpaper" title="Video Game, Genshin Impact, Kamisato Ayaka (Genshin Impact) , Kamisato Ayato, HD wallpaper" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQYV2NgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII=" data-src="https://w0.peakpx.com/wallpaper/527/1008/HD-wallpaper-video-game-genshin-impact-kamisato-ayaka-genshin-impact-kamisato-ayato-thumbnail.jpg" class="lazy lst_img" data-srcset="https://w0.peakpx.com/wallpaper/527/1008/HD-wallpaper-video-game-genshin-impact-kamisato-ayaka-genshin-impact-kamisato-ayato.jpg 2x,https://w0.peakpx.com/wallpaper/527/1008/HD-wallpaper-video-game-genshin-impact-kamisato-ayaka-genshin-impact-kamisato-ayato.jpg 3x,https://w0.peakpx.com/wallpaper/527/1008/HD-wallpaper-video-game-genshin-impact-kamisato-ayaka-genshin-impact-kamisato-ayato.jpg 4x" width="338" height="192">
</a>
<figcaption itemprop="caption description" class="title overflow">Video Game, Genshin Impact, Kamisato Ayaka (Genshin Impact) , Kamisato Ayato, HD wallpaper</figcaption>
</figure>
</li>
<li itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject" class="grid" style="position: absolute; margin: 0px; top: 4651px; left: 716px;">
<span class="res">2880x1440px</span>
<figure>
<meta itemprop="keywords" content="Video Game, Genshin Impact, Kazari (Genshin Impact), HD wallpaper">
<link itemprop="contentUrl" href="https://w0.peakpx.com/wallpaper/271/574/HD-wallpaper-video-game-genshin-impact-baal-raiden-shogun-genshin-impact-kazari-genshin-impact.jpg">
<a itemprop="url" href="https://www.peakpx.com/en/hd-wallpaper-desktop-eoxmn" target="_blank">
<img itemprop="thumbnail" alt="Video Game, Genshin Impact, Baal Raiden Shogun (Genshin Impact) , Kazari (Genshin Impact) , Yae Miko Guuji (Genshin Impact), HD wallpaper" title="Video Game, Genshin Impact, Baal Raiden Shogun (Genshin Impact) , Kazari (Genshin Impact) , Yae Miko Guuji (Genshin Impact), HD wallpaper" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQYV2NgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII=" data-src="https://w0.peakpx.com/wallpaper/271/574/HD-wallpaper-video-game-genshin-impact-baal-raiden-shogun-genshin-impact-kazari-genshin-impact-thumbnail.jpg" class="lazy lst_img" data-srcset="https://w0.peakpx.com/wallpaper/271/574/HD-wallpaper-video-game-genshin-impact-baal-raiden-shogun-genshin-impact-kazari-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/271/574/HD-wallpaper-video-game-genshin-impact-baal-raiden-shogun-genshin-impact-kazari-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/271/574/HD-wallpaper-video-game-genshin-impact-baal-raiden-shogun-genshin-impact-kazari-genshin-impact.jpg 4x" width="338" height="169">
</a>
<figcaption itemprop="caption description" class="title overflow">Video Game, Genshin Impact, Baal Raiden Shogun (Genshin Impact) , Kazari (Genshin Impact) , Yae Miko Guuji (Genshin Impact), HD wallpaper</figcaption>
</figure>
</li>
<li itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject" class="grid" style="position: absolute; margin: 0px; top: 4744px; left: 0px;">
<span class="res">1920x1080px</span>
<figure>
<meta itemprop="keywords" content="HD wallpaper">
<link itemprop="contentUrl" href="https://w0.peakpx.com/wallpaper/269/285/HD-wallpaper-eula-genshin-impact.jpg">
<a itemprop="url" href="https://www.peakpx.com/en/hd-wallpaper-desktop-vjvix" target="_blank">
<img itemprop="thumbnail" alt="Eula Genshin Impact, HD wallpaper" title="Eula Genshin Impact, HD wallpaper" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQYV2NgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII=" data-src="https://w0.peakpx.com/wallpaper/269/285/HD-wallpaper-eula-genshin-impact-thumbnail.jpg" class="lazy lst_img" data-srcset="https://w0.peakpx.com/wallpaper/269/285/HD-wallpaper-eula-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/269/285/HD-wallpaper-eula-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/269/285/HD-wallpaper-eula-genshin-impact.jpg 4x" width="338" height="190">
</a>
<figcaption itemprop="caption description" class="title overflow">Eula Genshin Impact, HD wallpaper</figcaption>
</figure>
</li>
<li itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject" class="grid" style="position: absolute; margin: 0px; top: 4828px; left: 358px;">
<span class="res">1920x1080px</span>
<figure>
<meta itemprop="keywords" content="Video Game, Genshin Impact, Jean (Genshin Impact), Klee (Genshin Impact), HD wallpaper">
<link itemprop="contentUrl" href="https://w0.peakpx.com/wallpaper/247/880/HD-wallpaper-video-game-genshin-impact-jean-genshin-impact-klee-genshin-impact.jpg">
<a itemprop="url" href="https://www.peakpx.com/en/hd-wallpaper-desktop-ggdqg" target="_blank">
<img itemprop="thumbnail" alt="Video Game, Genshin Impact, Jean (Genshin Impact), Klee (Genshin Impact), HD wallpaper" title="Video Game, Genshin Impact, Jean (Genshin Impact), Klee (Genshin Impact), HD wallpaper" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQYV2NgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII=" data-src="https://w0.peakpx.com/wallpaper/247/880/HD-wallpaper-video-game-genshin-impact-jean-genshin-impact-klee-genshin-impact-thumbnail.jpg" class="lazy lst_img" data-srcset="https://w0.peakpx.com/wallpaper/247/880/HD-wallpaper-video-game-genshin-impact-jean-genshin-impact-klee-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/247/880/HD-wallpaper-video-game-genshin-impact-jean-genshin-impact-klee-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/247/880/HD-wallpaper-video-game-genshin-impact-jean-genshin-impact-klee-genshin-impact.jpg 4x" width="338" height="190">
</a>
<figcaption itemprop="caption description" class="title overflow">Video Game, Genshin Impact, Jean (Genshin Impact), Klee (Genshin Impact), HD wallpaper</figcaption>
</figure>
</li>
<li itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject" class="grid" style="position: absolute; margin: 0px; top: 4841px; left: 716px;">
<span class="res">3070x2171px</span>
<figure>
<meta itemprop="keywords" content="Video Game, Genshin Impact, Blonde, Fischl (Genshin Impact), Green Eyes, Long Hair, HD wallpaper">
<link itemprop="contentUrl" href="https://w0.peakpx.com/wallpaper/159/302/HD-wallpaper-video-game-genshin-impact-blonde-fischl-genshin-impact-green-eyes-long-hair.jpg">
<a itemprop="url" href="https://www.peakpx.com/en/hd-wallpaper-desktop-nlkdz" target="_blank">
<img itemprop="thumbnail" alt="Video Game, Genshin Impact, Blonde, Fischl (Genshin Impact), Green Eyes, Long Hair, HD wallpaper" title="Video Game, Genshin Impact, Blonde, Fischl (Genshin Impact), Green Eyes, Long Hair, HD wallpaper" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQYV2NgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII=" data-src="https://w0.peakpx.com/wallpaper/159/302/HD-wallpaper-video-game-genshin-impact-blonde-fischl-genshin-impact-green-eyes-long-hair-thumbnail.jpg" class="lazy lst_img" data-srcset="https://w0.peakpx.com/wallpaper/159/302/HD-wallpaper-video-game-genshin-impact-blonde-fischl-genshin-impact-green-eyes-long-hair.jpg 2x,https://w0.peakpx.com/wallpaper/159/302/HD-wallpaper-video-game-genshin-impact-blonde-fischl-genshin-impact-green-eyes-long-hair.jpg 3x,https://w0.peakpx.com/wallpaper/159/302/HD-wallpaper-video-game-genshin-impact-blonde-fischl-genshin-impact-green-eyes-long-hair.jpg 4x" width="338" height="239">
</a>
<figcaption itemprop="caption description" class="title overflow">Video Game, Genshin Impact, Blonde, Fischl (Genshin Impact), Green Eyes, Long Hair, HD wallpaper</figcaption>
</figure>
</li>
<li itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject" class="grid" style="position: absolute; margin: 0px; top: 4955px; left: 0px;">
<span class="res">3000x2348px</span>
<figure>
<meta itemprop="keywords" content="Video Game, Genshin Impact, Paimon (Genshin Impact), HD wallpaper">
<link itemprop="contentUrl" href="https://w0.peakpx.com/wallpaper/393/577/HD-wallpaper-video-game-genshin-impact-paimon-genshin-impact.jpg">
<a itemprop="url" href="https://www.peakpx.com/en/hd-wallpaper-desktop-nysdv" target="_blank">
<img itemprop="thumbnail" alt="Video Game, Genshin Impact, Paimon (Genshin Impact), HD wallpaper" title="Video Game, Genshin Impact, Paimon (Genshin Impact), HD wallpaper" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQYV2NgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII=" data-src="https://w0.peakpx.com/wallpaper/393/577/HD-wallpaper-video-game-genshin-impact-paimon-genshin-impact-thumbnail.jpg" class="lazy lst_img" data-srcset="https://w0.peakpx.com/wallpaper/393/577/HD-wallpaper-video-game-genshin-impact-paimon-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/393/577/HD-wallpaper-video-game-genshin-impact-paimon-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/393/577/HD-wallpaper-video-game-genshin-impact-paimon-genshin-impact.jpg 4x" width="338" height="265">
</a>
<figcaption itemprop="caption description" class="title overflow">Video Game, Genshin Impact, Paimon (Genshin Impact), HD wallpaper</figcaption>
</figure>
</li>
<li itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject" class="grid" style="position: absolute; margin: 0px; top: 5039px; left: 358px;">
<span class="res">1920x1080px</span>
<figure>
<meta itemprop="keywords" content="Video Game, Genshin Impact, Ayaka (Genshin Impact), HD wallpaper">
<link itemprop="contentUrl" href="https://w0.peakpx.com/wallpaper/112/572/HD-wallpaper-video-game-genshin-impact-ayaka-genshin-impact.jpg">
<a itemprop="url" href="https://www.peakpx.com/en/hd-wallpaper-desktop-vlbay" target="_blank">
<img itemprop="thumbnail" alt="Video Game, Genshin Impact, Ayaka (Genshin Impact), HD wallpaper" title="Video Game, Genshin Impact, Ayaka (Genshin Impact), HD wallpaper" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQYV2NgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII=" data-src="https://w0.peakpx.com/wallpaper/112/572/HD-wallpaper-video-game-genshin-impact-ayaka-genshin-impact-thumbnail.jpg" class="lazy lst_img" data-srcset="https://w0.peakpx.com/wallpaper/112/572/HD-wallpaper-video-game-genshin-impact-ayaka-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/112/572/HD-wallpaper-video-game-genshin-impact-ayaka-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/112/572/HD-wallpaper-video-game-genshin-impact-ayaka-genshin-impact.jpg 4x" width="338" height="190">
</a>
<figcaption itemprop="caption description" class="title overflow">Video Game, Genshin Impact, Ayaka (Genshin Impact), HD wallpaper</figcaption>
</figure>
</li>
<li itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject" class="grid" style="position: absolute; margin: 0px; top: 5101px; left: 716px;">
<span class="res">2000x1414px</span>
<figure>
<meta itemprop="keywords" content="Anime, Genshin Impact, Keqing (Genshin Impact), HD wallpaper">
<link itemprop="contentUrl" href="https://w0.peakpx.com/wallpaper/941/651/HD-wallpaper-anime-genshin-impact-keqing-genshin-impact.jpg">
<a itemprop="url" href="https://www.peakpx.com/en/hd-wallpaper-desktop-ahkwj" target="_blank">
<img itemprop="thumbnail" alt="Anime, Genshin Impact, Keqing (Genshin Impact), HD wallpaper" title="Anime, Genshin Impact, Keqing (Genshin Impact), HD wallpaper" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQYV2NgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII=" data-src="https://w0.peakpx.com/wallpaper/941/651/HD-wallpaper-anime-genshin-impact-keqing-genshin-impact-thumbnail.jpg" class="lazy lst_img" data-srcset="https://w0.peakpx.com/wallpaper/941/651/HD-wallpaper-anime-genshin-impact-keqing-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/941/651/HD-wallpaper-anime-genshin-impact-keqing-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/941/651/HD-wallpaper-anime-genshin-impact-keqing-genshin-impact.jpg 4x" width="338" height="239">
</a>
<figcaption itemprop="caption description" class="title overflow">Anime, Genshin Impact, Keqing (Genshin Impact), HD wallpaper</figcaption>
</figure>
</li>
<li itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject" class="grid" style="position: absolute; margin: 0px; top: 5241px; left: 0px;">
<span class="res">2880x1440px</span>
<figure>
<meta itemprop="keywords" content="Video Game, Genshin Impact, Yelan (Genshin Impact), Ningguang (Genshin Impact), HD wallpaper">
<link itemprop="contentUrl" href="https://w0.peakpx.com/wallpaper/1001/259/HD-wallpaper-video-game-genshin-impact-yelan-genshin-impact-ningguang.jpg">
<a itemprop="url" href="https://www.peakpx.com/en/hd-wallpaper-desktop-epypg" target="_blank">
<img itemprop="thumbnail" alt="Video Game, Genshin Impact, Yelan (Genshin Impact) , Ningguang (Genshin Impact), HD wallpaper" title="Video Game, Genshin Impact, Yelan (Genshin Impact) , Ningguang (Genshin Impact), HD wallpaper" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQYV2NgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII=" data-src="https://w0.peakpx.com/wallpaper/1001/259/HD-wallpaper-video-game-genshin-impact-yelan-genshin-impact-ningguang-thumbnail.jpg" class="lazy lst_img" data-srcset="https://w0.peakpx.com/wallpaper/1001/259/HD-wallpaper-video-game-genshin-impact-yelan-genshin-impact-ningguang.jpg 2x,https://w0.peakpx.com/wallpaper/1001/259/HD-wallpaper-video-game-genshin-impact-yelan-genshin-impact-ningguang.jpg 3x,https://w0.peakpx.com/wallpaper/1001/259/HD-wallpaper-video-game-genshin-impact-yelan-genshin-impact-ningguang.jpg 4x" width="338" height="169">
</a>
<figcaption itemprop="caption description" class="title overflow">Video Game, Genshin Impact, Yelan (Genshin Impact) , Ningguang (Genshin Impact), HD wallpaper</figcaption>
</figure>
</li>
<li itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject" class="grid" style="position: absolute; margin: 0px; top: 5250px; left: 358px;">
<span class="res">2560x1440px</span>
<figure>
<meta itemprop="keywords" content="HD wallpaper">
<link itemprop="contentUrl" href="https://w0.peakpx.com/wallpaper/660/409/HD-wallpaper-klee-genshin-impact.jpg">
<a itemprop="url" href="https://www.peakpx.com/en/hd-wallpaper-desktop-aczcl" target="_blank">
<img itemprop="thumbnail" alt="Klee Genshin Impact, HD wallpaper" title="Klee Genshin Impact, HD wallpaper" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQYV2NgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII=" data-src="https://w0.peakpx.com/wallpaper/660/409/HD-wallpaper-klee-genshin-impact-thumbnail.jpg" class="lazy lst_img" data-srcset="https://w0.peakpx.com/wallpaper/660/409/HD-wallpaper-klee-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/660/409/HD-wallpaper-klee-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/660/409/HD-wallpaper-klee-genshin-impact.jpg 4x" width="338" height="190">
</a>
<figcaption itemprop="caption description" class="title overflow">Klee Genshin Impact, HD wallpaper</figcaption>
</figure>
</li>
<li itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject" class="grid" style="position: absolute; margin: 0px; top: 5361px; left: 716px;">
<span class="res">5000x2813px</span>
<figure>
<meta itemprop="keywords" content="Video Game, Genshin Impact, Ganyu (Genshin Impact), HD wallpaper">
<link itemprop="contentUrl" href="https://w0.peakpx.com/wallpaper/129/113/HD-wallpaper-video-game-genshin-impact-ganyu-genshin-impact.jpg">
<a itemprop="url" href="https://www.peakpx.com/en/hd-wallpaper-desktop-kppli" target="_blank">
<img itemprop="thumbnail" alt="Video Game, Genshin Impact, Ganyu (Genshin Impact), HD wallpaper" title="Video Game, Genshin Impact, Ganyu (Genshin Impact), HD wallpaper" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQYV2NgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII=" data-src="https://w0.peakpx.com/wallpaper/129/113/HD-wallpaper-video-game-genshin-impact-ganyu-genshin-impact-thumbnail.jpg" class="lazy lst_img" data-srcset="https://w0.peakpx.com/wallpaper/129/113/HD-wallpaper-video-game-genshin-impact-ganyu-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/129/113/HD-wallpaper-video-game-genshin-impact-ganyu-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/129/113/HD-wallpaper-video-game-genshin-impact-ganyu-genshin-impact.jpg 4x" width="338" height="190">
</a>
<figcaption itemprop="caption description" class="title overflow">Video Game, Genshin Impact, Ganyu (Genshin Impact), HD wallpaper</figcaption>
</figure>
</li>
<li itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject" class="grid" style="position: absolute; margin: 0px; top: 5431px; left: 0px;">
<span class="res">7000x3938px</span>
<figure>
<meta itemprop="keywords" content="Video Game, Genshin Impact, Yelan (Genshin Impact), HD wallpaper">
<link itemprop="contentUrl" href="https://w0.peakpx.com/wallpaper/94/503/HD-wallpaper-video-game-genshin-impact-yelan-genshin-impact.jpg">
<a itemprop="url" href="https://www.peakpx.com/en/hd-wallpaper-desktop-eojjt" target="_blank">
<img itemprop="thumbnail" alt="Video Game, Genshin Impact, Yelan (Genshin Impact), HD wallpaper" title="Video Game, Genshin Impact, Yelan (Genshin Impact), HD wallpaper" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQYV2NgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII=" data-src="https://w0.peakpx.com/wallpaper/94/503/HD-wallpaper-video-game-genshin-impact-yelan-genshin-impact-thumbnail.jpg" class="lazy lst_img" data-srcset="https://w0.peakpx.com/wallpaper/94/503/HD-wallpaper-video-game-genshin-impact-yelan-genshin-impact.jpg 2x,https://w0.peakpx.com/wallpaper/94/503/HD-wallpaper-video-game-genshin-impact-yelan-genshin-impact.jpg 3x,https://w0.peakpx.com/wallpaper/94/503/HD-wallpaper-video-game-genshin-impact-yelan-genshin-impact.jpg 4x" width="338" height="190">
</a>
<figcaption itemprop="caption description" class="title overflow">Video Game, Genshin Impact, Yelan (Genshin Impact), HD wallpaper</figcaption>
</figure>
</li>
</ul>
<div class="prevnext">
<a href="https://www.peakpx.com/en/search?q=genshin&amp;device=2" class="prevpage bgcolor">
<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
</a>
<a href="https://www.peakpx.com/en/search?q=genshin&amp;device=2&amp;page=3" class="nextpage bgcolor">
<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
</a>
</div>
</section>`;

const hrefValues = getContentById(html, "list_ul");

console.log(hrefValues);
