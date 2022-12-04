import{_ as s,c as a,o as n,a as l}from"./app.af41ce5f.js";const C=JSON.parse(`{"title":"getDevice","description":"","frontmatter":{"category":"UA"},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":2,"title":"\u6587\u6863","slug":"\u6587\u6863","link":"#\u6587\u6863","children":[{"level":3,"title":"\u53C2\u6570 [ua]\uFF1A\u53EF\u9009]","slug":"\u53C2\u6570-ua-\u53EF\u9009","link":"#\u53C2\u6570-ua-\u53EF\u9009","children":[]},{"level":3,"title":"\u8FD4\u56DE\u503C\uFF1A{model: '', vendor: ''}","slug":"\u8FD4\u56DE\u503C-model-vendor","link":"#\u8FD4\u56DE\u503C-model-vendor","children":[]}]}],"relativePath":"core/getDevice/index.md"}`),p={name:"core/getDevice/index.md"},o=l(`<h1 id="getdevice" tabindex="-1">getDevice <a class="header-anchor" href="#getdevice" aria-hidden="true">#</a></h1><p>\u7528\u4E8E\u4ECE User-Agent(\u7528\u6237\u4EE3\u7406\u6570\u636E) \u4E2D\u89E3\u6790\u51FA <code>\u8BBE\u5907\u7C7B\u578B\u4E0E\u4F9B\u5E94\u5546</code>\uFF0C\u5728\u6D4F\u89C8\u5668\uFF08\u5BA2\u6237\u7AEF\uFF09\u6216 node.js\uFF08\u670D\u52A1\u5668\u7AEF\uFF09\u4E2D\u4F7F\u7528\u3002</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">getDevice</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@vmejs/core</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> browser </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getDevice</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// do something</span></span>
<span class="line"></span></code></pre></div><h2 id="\u6587\u6863" tabindex="-1">\u6587\u6863 <a class="header-anchor" href="#\u6587\u6863" aria-hidden="true">#</a></h2><h3 id="\u53C2\u6570-ua-\u53EF\u9009" tabindex="-1">\u53C2\u6570 [ua]\uFF1A\u53EF\u9009] <a class="header-anchor" href="#\u53C2\u6570-ua-\u53EF\u9009" aria-hidden="true">#</a></h3><ul><li><p>\u6D4F\u89C8\u5668\uFF08\u5BA2\u6237\u7AEF\uFF09\u4E2D\u4F7F\u7528 [ua \u53EF\u9009]</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">getDevice</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@vmejs/core</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// \u672A\u5E26\u53C2\u6570</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> browser </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getDevice</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u4F7F\u7528\u53C2\u6570</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> browser </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getDevice</span><span style="color:#A6ACCD;">(window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">navigator</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">userAgent)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div></li><li><p>node.js\uFF08\u670D\u52A1\u5668\u7AEF\uFF09\u4E2D\u4F7F\u7528 [ua \u5FC5\u4F20]</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> http </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">http</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">getDevice</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@vmejs/core</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">http</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createServer</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">req</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// get user-agent header</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">browser</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">getDevice</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">req</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">headers</span><span style="color:#F07178;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">user-agent</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// write the result as response</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">end</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">JSON</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">stringify</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">ua</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">  </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">listen</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">3000</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">127.0.0.1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div></li></ul><h3 id="\u8FD4\u56DE\u503C-model-vendor" tabindex="-1">\u8FD4\u56DE\u503C\uFF1A<code>{model: &#39;&#39;, vendor: &#39;&#39;}</code> <a class="header-anchor" href="#\u8FD4\u56DE\u503C-model-vendor" aria-hidden="true">#</a></h3><ul><li><p>device.model\uFF1A\u5E38\u89C1\u8BBE\u5907\u7C7B\u578B</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Chrome/\u5176\u5B83</span></span>
<span class="line"><span style="color:#A6ACCD;">pc</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># ios/android/\u5E73\u677F</span></span>
<span class="line"><span style="color:#A6ACCD;">mobile</span></span>
<span class="line"></span></code></pre></div></li><li><p>device.vendor\uFF1A\u5E38\u89C1\u4F9B\u5E94\u5546</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># mobile \u5E38\u89C1\u4F9B\u5E94\u5546\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">Samsung, Apple, Coogle, Huawei, Xiaomi, OPPO, Vivo</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u5176\u5B83</span></span>
<span class="line"><span style="color:#A6ACCD;">other</span></span>
<span class="line"></span></code></pre></div></li></ul>`,9),e=[o];function c(t,r,D,y,F,i){return n(),a("div",null,e)}const d=s(p,[["render",c]]);export{C as __pageData,d as default};