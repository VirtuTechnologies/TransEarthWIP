




<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>highcharts.com/js/themes/grid.js at master · highslide-software/highcharts.com · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <meta property="fb:app_id" content="1401488693436528"/>

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="highslide-software/highcharts.com" name="twitter:title" /><meta content="highcharts.com - Highcharts JS, the JavaScript charting framework" name="twitter:description" /><meta content="https://2.gravatar.com/avatar/53236b147144d5a13ed9b1f07bfdbe8f?d=https%3A%2F%2Fidenticons.github.com%2F2161110ce75c1f0e535d8aaec26bebe8.png&amp;r=x&amp;s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://2.gravatar.com/avatar/53236b147144d5a13ed9b1f07bfdbe8f?d=https%3A%2F%2Fidenticons.github.com%2F2161110ce75c1f0e535d8aaec26bebe8.png&amp;r=x&amp;s=400" property="og:image" /><meta content="highslide-software/highcharts.com" property="og:title" /><meta content="https://github.com/highslide-software/highcharts.com" property="og:url" /><meta content="highcharts.com - Highcharts JS, the JavaScript charting framework" property="og:description" />

    <meta name="hostname" content="github-fe140-cp1-prd.iad.github.net">
    <meta name="ruby" content="ruby 2.1.0p0-github-tcmalloc (87c9373a41) [x86_64-linux]">
    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    <link rel="xhr-socket" href="/_sockets" />


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="CB63C1BD:109D:7F6419:5302F793" name="octolytics-dimension-request_id" />
    

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="JRJ+QM6Y9HoHuFvxj2Q60BJyzkvF7KYcDlyT3EtbD/w=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-7155069f3ef445db5fc6503a1ff3eec8cf0a450d.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-2ae3f4e67c9611aa6523df2bae070c14626217b6.css" media="all" rel="stylesheet" type="text/css" />
    
    


      <script src="https://github.global.ssl.fastly.net/assets/frameworks-693e11922dcacc3a7408a911fe1647da4febd3bd.js" type="text/javascript"></script>
      <script async="async" src="https://github.global.ssl.fastly.net/assets/github-7d6d16ceddadd41e4c0b6d2ebc549550e945f813.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="2bd2904ac7465273c5e51f06069a9020">

        <link data-pjax-transient rel='permalink' href='/highslide-software/highcharts.com/blob/c97bef29d36af4cf27a4ce713eabc32e9c3c66e4/js/themes/grid.js'>

  <meta name="description" content="highcharts.com - Highcharts JS, the JavaScript charting framework" />

  <meta content="227836" name="octolytics-dimension-user_id" /><meta content="highslide-software" name="octolytics-dimension-user_login" /><meta content="715547" name="octolytics-dimension-repository_id" /><meta content="highslide-software/highcharts.com" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="715547" name="octolytics-dimension-repository_network_root_id" /><meta content="highslide-software/highcharts.com" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/highslide-software/highcharts.com/commits/master.atom" rel="alternate" title="Recent Commits to highcharts.com:master" type="application/atom+xml" />

  </head>


  <body class="logged_out  env-production windows vis-public page-blob tipsy-tooltips">
    <div class="wrapper">
      
      
      
      


      
      <div class="header header-logged-out">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions">
        <a class="button primary" href="/join">Sign up</a>
      <a class="button signin" href="/login?return_to=%2Fhighslide-software%2Fhighcharts.com%2Fblob%2Fmaster%2Fjs%2Fthemes%2Fgrid.js">Sign in</a>
    </div>

    <div class="command-bar js-command-bar  in-repository">

      <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
        <li class="features"><a href="/features">Features</a></li>
          <li class="enterprise"><a href="https://enterprise.github.com/">Enterprise</a></li>
          <li class="blog"><a href="/blog">Blog</a></li>
      </ul>
        <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    
      data-repo="highslide-software/highcharts.com"
      data-branch="master"
      data-sha="b2dadcf5c3417d2356295cddcb4d89b952a42c7c"
  >

    <input type="hidden" name="nwo" value="highslide-software/highcharts.com" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="octicon help tooltipped downwards" aria-label="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
    </div>

  </div>
</div>




          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">


  <li>
    <a href="/login?return_to=%2Fhighslide-software%2Fhighcharts.com"
    class="minibutton with-count js-toggler-target star-button tooltipped upwards"
    aria-label="You must be signed in to use this feature" rel="nofollow">
    <span class="octicon octicon-star"></span>Star
  </a>

    <a class="social-count js-social-count" href="/highslide-software/highcharts.com/stargazers">
      1,552
    </a>

  </li>

    <li>
      <a href="/login?return_to=%2Fhighslide-software%2Fhighcharts.com"
        class="minibutton with-count js-toggler-target fork-button tooltipped upwards"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-git-branch"></span>Fork
      </a>
      <a href="/highslide-software/highcharts.com/network" class="social-count">
        608
      </a>
    </li>
</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author">
            <a href="/highslide-software" class="url fn" itemprop="url" rel="author"><span itemprop="title">highslide-software</span></a>
          </span>
          <span class="repohead-name-divider">/</span>
          <strong><a href="/highslide-software/highcharts.com" class="js-current-repository js-repo-home-link">highcharts.com</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      

      <div class="repository-with-sidebar repo-container new-discussion-timeline js-new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped leftwards" aria-label="Code">
        <a href="/highslide-software/highcharts.com" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /highslide-software/highcharts.com">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped leftwards" aria-label="Issues">
          <a href="/highslide-software/highcharts.com/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /highslide-software/highcharts.com/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>594</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped leftwards" aria-label="Pull Requests">
        <a href="/highslide-software/highcharts.com/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /highslide-software/highcharts.com/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>29</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped leftwards" aria-label="Wiki">
          <a href="/highslide-software/highcharts.com/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_wiki /highslide-software/highcharts.com/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped leftwards" aria-label="Pulse">
        <a href="/highslide-software/highcharts.com/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /highslide-software/highcharts.com/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" aria-label="Graphs">
        <a href="/highslide-software/highcharts.com/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /highslide-software/highcharts.com/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" aria-label="Network">
        <a href="/highslide-software/highcharts.com/network" aria-label="Network" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-selected-links="repo_network /highslide-software/highcharts.com/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/highslide-software/highcharts.com.git" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/highslide-software/highcharts.com.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/highslide-software/highcharts.com" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/highslide-software/highcharts.com" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="octicon help tooltipped upwards" aria-label="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>


  <a href="http://windows.github.com" class="minibutton sidebar-button">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

                <a href="/highslide-software/highcharts.com/archive/master.zip"
                   class="minibutton sidebar-button"
                   title="Download this repository as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:ad93963a67719a0edc025a03a340fcf1 -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/highslide-software/highcharts.com/find/master" data-pjax data-hotkey="t" class="js-show-file-finder" style="display:none">Show File Finder</a>

<div class="file-navigation">
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    role="button" aria-label="Switch branches or tags" tabindex="0">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/highslide-software/highcharts.com/blob/android2/js/themes/grid.js"
                 data-name="android2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="android2">android2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/highslide-software/highcharts.com/blob/dev-irregular-data/js/themes/grid.js"
                 data-name="dev-irregular-data"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="dev-irregular-data">dev-irregular-data</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/highslide-software/highcharts.com/blob/entity-hotfix/js/themes/grid.js"
                 data-name="entity-hotfix"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="entity-hotfix">entity-hotfix</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/highslide-software/highcharts.com/blob/feature-async-download/js/themes/grid.js"
                 data-name="feature-async-download"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="feature-async-download">feature-async-download</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/highslide-software/highcharts.com/blob/feature-based/js/themes/grid.js"
                 data-name="feature-based"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="feature-based">feature-based</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/highslide-software/highcharts.com/blob/highcharts-3D/js/themes/grid.js"
                 data-name="highcharts-3D"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="highcharts-3D">highcharts-3D</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/highslide-software/highcharts.com/blob/issue-475/js/themes/grid.js"
                 data-name="issue-475"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="issue-475">issue-475</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/highslide-software/highcharts.com/blob/justified-data-labels/js/themes/grid.js"
                 data-name="justified-data-labels"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="justified-data-labels">justified-data-labels</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/highslide-software/highcharts.com/blob/master/js/themes/grid.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/highslide-software/highcharts.com/blob/native-adapter/js/themes/grid.js"
                 data-name="native-adapter"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="native-adapter">native-adapter</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/highslide-software/highcharts.com/blob/nonproto/js/themes/grid.js"
                 data-name="nonproto"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="nonproto">nonproto</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/highslide-software/highcharts.com/blob/nosegments/js/themes/grid.js"
                 data-name="nosegments"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="nosegments">nosegments</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/highslide-software/highcharts.com/blob/radial/js/themes/grid.js"
                 data-name="radial"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="radial">radial</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/highslide-software/highcharts.com/blob/rambera/js/themes/grid.js"
                 data-name="rambera"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="rambera">rambera</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/highslide-software/highcharts.com/blob/v2.1.7-fixes/js/themes/grid.js"
                 data-name="v2.1.7-fixes"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.1.7-fixes">v2.1.7-fixes</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/highslide-software/highcharts.com/tree/v3.0Beta/js/themes/grid.js"
                 data-name="v3.0Beta"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v3.0Beta">v3.0Beta</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/highslide-software/highcharts.com/tree/v3.0.9/js/themes/grid.js"
                 data-name="v3.0.9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v3.0.9">v3.0.9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/highslide-software/highcharts.com/tree/v3.0.8/js/themes/grid.js"
                 data-name="v3.0.8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v3.0.8">v3.0.8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/highslide-software/highcharts.com/tree/v3.0.7/js/themes/grid.js"
                 data-name="v3.0.7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v3.0.7">v3.0.7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/highslide-software/highcharts.com/tree/v3.0.6/js/themes/grid.js"
                 data-name="v3.0.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v3.0.6">v3.0.6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/highslide-software/highcharts.com/tree/v3.0.5/js/themes/grid.js"
                 data-name="v3.0.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v3.0.5">v3.0.5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/highslide-software/highcharts.com/tree/v3.0.4/js/themes/grid.js"
                 data-name="v3.0.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v3.0.4">v3.0.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/highslide-software/highcharts.com/tree/v3.0.3/js/themes/grid.js"
                 data-name="v3.0.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v3.0.3">v3.0.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/highslide-software/highcharts.com/tree/v3.0.2/js/themes/grid.js"
                 data-name="v3.0.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v3.0.2">v3.0.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/highslide-software/highcharts.com/tree/v3.0.1/js/themes/grid.js"
                 data-name="v3.0.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v3.0.1">v3.0.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/highslide-software/highcharts.com/tree/v3.0.0/js/themes/grid.js"
                 data-name="v3.0.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v3.0.0">v3.0.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/highslide-software/highcharts.com/tree/v2.3Beta/js/themes/grid.js"
                 data-name="v2.3Beta"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.3Beta">v2.3Beta</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/highslide-software/highcharts.com/tree/v2.3.5/js/themes/grid.js"
                 data-name="v2.3.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.3.5">v2.3.5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/highslide-software/highcharts.com/tree/v2.3.3/js/themes/grid.js"
                 data-name="v2.3.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.3.3">v2.3.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/highslide-software/highcharts.com/tree/v2.3.2/js/themes/grid.js"
                 data-name="v2.3.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.3.2">v2.3.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/highslide-software/highcharts.com/tree/v2.3.1/js/themes/grid.js"
                 data-name="v2.3.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.3.1">v2.3.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/highslide-software/highcharts.com/tree/v2.3.0/js/themes/grid.js"
                 data-name="v2.3.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.3.0">v2.3.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/highslide-software/highcharts.com/tree/v2.2.5/js/themes/grid.js"
                 data-name="v2.2.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.2.5">v2.2.5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/highslide-software/highcharts.com/tree/v2.2.4/js/themes/grid.js"
                 data-name="v2.2.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.2.4">v2.2.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/highslide-software/highcharts.com/tree/v2.2.3/js/themes/grid.js"
                 data-name="v2.2.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.2.3">v2.2.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/highslide-software/highcharts.com/tree/v2.2.2/js/themes/grid.js"
                 data-name="v2.2.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.2.2">v2.2.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/highslide-software/highcharts.com/tree/v2.2.1/js/themes/grid.js"
                 data-name="v2.2.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.2.1">v2.2.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/highslide-software/highcharts.com/tree/v2.2.0/js/themes/grid.js"
                 data-name="v2.2.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.2.0">v2.2.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/highslide-software/highcharts.com/tree/v2.1.9/js/themes/grid.js"
                 data-name="v2.1.9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.1.9">v2.1.9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/highslide-software/highcharts.com/tree/v2.1.8/js/themes/grid.js"
                 data-name="v2.1.8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.1.8">v2.1.8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/highslide-software/highcharts.com/tree/v2.1.7/js/themes/grid.js"
                 data-name="v2.1.7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.1.7">v2.1.7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/highslide-software/highcharts.com/tree/v2.1.6/js/themes/grid.js"
                 data-name="v2.1.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.1.6">v2.1.6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/highslide-software/highcharts.com/tree/v2.1.5/js/themes/grid.js"
                 data-name="v2.1.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.1.5">v2.1.5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/highslide-software/highcharts.com/tree/v2.1.4/js/themes/grid.js"
                 data-name="v2.1.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.1.4">v2.1.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/highslide-software/highcharts.com/tree/v2.1.3/js/themes/grid.js"
                 data-name="v2.1.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.1.3">v2.1.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/highslide-software/highcharts.com/tree/v2.1.2/js/themes/grid.js"
                 data-name="v2.1.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.1.2">v2.1.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/highslide-software/highcharts.com/tree/v2.1.1/js/themes/grid.js"
                 data-name="v2.1.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.1.1">v2.1.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/highslide-software/highcharts.com/tree/v2.1.0/js/themes/grid.js"
                 data-name="v2.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.1.0">v2.1.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/highslide-software/highcharts.com/tree/v2.0.5/js/themes/grid.js"
                 data-name="v2.0.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.0.5">v2.0.5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/highslide-software/highcharts.com/tree/v2.0.4/js/themes/grid.js"
                 data-name="v2.0.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.0.4">v2.0.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/highslide-software/highcharts.com/tree/v2.0.3/js/themes/grid.js"
                 data-name="v2.0.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.0.3">v2.0.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/highslide-software/highcharts.com/tree/v2.0.2/js/themes/grid.js"
                 data-name="v2.0.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.0.2">v2.0.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/highslide-software/highcharts.com/tree/highstock-v1.3.9/js/themes/grid.js"
                 data-name="highstock-v1.3.9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="highstock-v1.3.9">highstock-v1.3.9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/highslide-software/highcharts.com/tree/highstock-v1.3.8/js/themes/grid.js"
                 data-name="highstock-v1.3.8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="highstock-v1.3.8">highstock-v1.3.8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/highslide-software/highcharts.com/tree/highstock-v1.3.7/js/themes/grid.js"
                 data-name="highstock-v1.3.7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="highstock-v1.3.7">highstock-v1.3.7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/highslide-software/highcharts.com/tree/highstock-v1.3.6/js/themes/grid.js"
                 data-name="highstock-v1.3.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="highstock-v1.3.6">highstock-v1.3.6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/highslide-software/highcharts.com/tree/highstock-v1.3.5/js/themes/grid.js"
                 data-name="highstock-v1.3.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="highstock-v1.3.5">highstock-v1.3.5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/highslide-software/highcharts.com/tree/highstock-v1.3.4/js/themes/grid.js"
                 data-name="highstock-v1.3.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="highstock-v1.3.4">highstock-v1.3.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/highslide-software/highcharts.com/tree/highstock-v1.3.3/js/themes/grid.js"
                 data-name="highstock-v1.3.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="highstock-v1.3.3">highstock-v1.3.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/highslide-software/highcharts.com/tree/highstock-v1.3.2/js/themes/grid.js"
                 data-name="highstock-v1.3.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="highstock-v1.3.2">highstock-v1.3.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/highslide-software/highcharts.com/tree/highstock-v1.3.1/js/themes/grid.js"
                 data-name="highstock-v1.3.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="highstock-v1.3.1">highstock-v1.3.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/highslide-software/highcharts.com/tree/highstock-v1.3.0/js/themes/grid.js"
                 data-name="highstock-v1.3.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="highstock-v1.3.0">highstock-v1.3.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/highslide-software/highcharts.com/tree/highstock-v1.2.5/js/themes/grid.js"
                 data-name="highstock-v1.2.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="highstock-v1.2.5">highstock-v1.2.5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/highslide-software/highcharts.com/tree/highstock-v1.2.4/js/themes/grid.js"
                 data-name="highstock-v1.2.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="highstock-v1.2.4">highstock-v1.2.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/highslide-software/highcharts.com/tree/highstock-v1.2.3/js/themes/grid.js"
                 data-name="highstock-v1.2.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="highstock-v1.2.3">highstock-v1.2.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/highslide-software/highcharts.com/tree/highstock-v1.2.2/js/themes/grid.js"
                 data-name="highstock-v1.2.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="highstock-v1.2.2">highstock-v1.2.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/highslide-software/highcharts.com/tree/highstock-v1.2.1/js/themes/grid.js"
                 data-name="highstock-v1.2.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="highstock-v1.2.1">highstock-v1.2.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/highslide-software/highcharts.com/tree/highstock-v1.2.0/js/themes/grid.js"
                 data-name="highstock-v1.2.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="highstock-v1.2.0">highstock-v1.2.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/highslide-software/highcharts.com/tree/highstock-v1.1.6/js/themes/grid.js"
                 data-name="highstock-v1.1.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="highstock-v1.1.6">highstock-v1.1.6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/highslide-software/highcharts.com/tree/highstock-v1.1.5/js/themes/grid.js"
                 data-name="highstock-v1.1.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="highstock-v1.1.5">highstock-v1.1.5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/highslide-software/highcharts.com/tree/highstock-v1.1.4/js/themes/grid.js"
                 data-name="highstock-v1.1.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="highstock-v1.1.4">highstock-v1.1.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/highslide-software/highcharts.com/tree/highstock-v1.1.3/js/themes/grid.js"
                 data-name="highstock-v1.1.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="highstock-v1.1.3">highstock-v1.1.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/highslide-software/highcharts.com/tree/highstock-v1.1.2/js/themes/grid.js"
                 data-name="highstock-v1.1.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="highstock-v1.1.2">highstock-v1.1.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/highslide-software/highcharts.com/tree/highstock-v1.1.1/js/themes/grid.js"
                 data-name="highstock-v1.1.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="highstock-v1.1.1">highstock-v1.1.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/highslide-software/highcharts.com/tree/highstock-v1.1.0/js/themes/grid.js"
                 data-name="highstock-v1.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="highstock-v1.1.0">highstock-v1.1.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/highslide-software/highcharts.com/tree/highstock-v1.0.2/js/themes/grid.js"
                 data-name="highstock-v1.0.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="highstock-v1.0.2">highstock-v1.0.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/highslide-software/highcharts.com/tree/highstock-v1.0.1/js/themes/grid.js"
                 data-name="highstock-v1.0.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="highstock-v1.0.1">highstock-v1.0.1</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/highslide-software/highcharts.com" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">highcharts.com</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/highslide-software/highcharts.com/tree/master/js" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">js</span></a></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/highslide-software/highcharts.com/tree/master/js/themes" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">themes</span></a></span><span class="separator"> / </span><strong class="final-path">grid.js</strong> <span class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="js/themes/grid.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


  <div class="commit commit-loader file-history-tease js-deferred-content" data-url="/highslide-software/highcharts.com/contributors/master/js/themes/grid.js">
    Fetching contributors…

    <div class="participation">
      <p class="loader-loading"><img alt="Octocat-spinner-32-eaf2f5" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32-EAF2F5.gif" width="16" /></p>
      <p class="loader-error">Cannot retrieve contributors at this time</p>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
        <span class="meta-divider"></span>
          <span>104 lines (98 sloc)</span>
          <span class="meta-divider"></span>
        <span>1.794 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
            <a class="minibutton tooltipped leftwards"
               href="http://windows.github.com" aria-label="Open this file in GitHub for Windows">
                <span class="octicon octicon-device-desktop"></span> Open
            </a>
              <a class="minibutton disabled tooltipped leftwards" href="#"
                 aria-label="You must be signed in to make or propose changes">Edit</a>
          <a href="/highslide-software/highcharts.com/raw/master/js/themes/grid.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/highslide-software/highcharts.com/blame/master/js/themes/grid.js" class="button minibutton js-update-url-with-hash">Blame</a>
          <a href="/highslide-software/highcharts.com/commits/master/js/themes/grid.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
          <a class="minibutton danger disabled empty-icon tooltipped leftwards" href="#"
             aria-label="You must be signed in to make or propose changes">
          Delete
        </a>
      </div><!-- /.actions -->
    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
        <table class="file-code file-diff tab-size-8">
          <tr class="file-code-line">
            <td class="blob-line-nums">
              <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>

            </td>
            <td class="blob-line-code"><div class="code-body highlight"><pre><div class='line' id='LC1'><span class="cm">/**</span></div><div class='line' id='LC2'><span class="cm"> * Grid theme for Highcharts JS</span></div><div class='line' id='LC3'><span class="cm"> * @author Torstein Honsi</span></div><div class='line' id='LC4'><span class="cm"> */</span></div><div class='line' id='LC5'><br/></div><div class='line' id='LC6'><span class="nx">Highcharts</span><span class="p">.</span><span class="nx">theme</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC7'>	<span class="nx">colors</span><span class="o">:</span> <span class="p">[</span><span class="s1">&#39;#058DC7&#39;</span><span class="p">,</span> <span class="s1">&#39;#50B432&#39;</span><span class="p">,</span> <span class="s1">&#39;#ED561B&#39;</span><span class="p">,</span> <span class="s1">&#39;#DDDF00&#39;</span><span class="p">,</span> <span class="s1">&#39;#24CBE5&#39;</span><span class="p">,</span> <span class="s1">&#39;#64E572&#39;</span><span class="p">,</span> <span class="s1">&#39;#FF9655&#39;</span><span class="p">,</span> <span class="s1">&#39;#FFF263&#39;</span><span class="p">,</span> <span class="s1">&#39;#6AF9C4&#39;</span><span class="p">],</span></div><div class='line' id='LC8'>	<span class="nx">chart</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC9'>		<span class="nx">backgroundColor</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC10'>			<span class="nx">linearGradient</span><span class="o">:</span> <span class="p">{</span> <span class="nx">x1</span><span class="o">:</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">y1</span><span class="o">:</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">x2</span><span class="o">:</span> <span class="mi">1</span><span class="p">,</span> <span class="nx">y2</span><span class="o">:</span> <span class="mi">1</span> <span class="p">},</span></div><div class='line' id='LC11'>			<span class="nx">stops</span><span class="o">:</span> <span class="p">[</span></div><div class='line' id='LC12'>				<span class="p">[</span><span class="mi">0</span><span class="p">,</span> <span class="s1">&#39;rgb(255, 255, 255)&#39;</span><span class="p">],</span></div><div class='line' id='LC13'>				<span class="p">[</span><span class="mi">1</span><span class="p">,</span> <span class="s1">&#39;rgb(240, 240, 255)&#39;</span><span class="p">]</span></div><div class='line' id='LC14'>			<span class="p">]</span></div><div class='line' id='LC15'>		<span class="p">},</span></div><div class='line' id='LC16'>		<span class="nx">borderWidth</span><span class="o">:</span> <span class="mi">2</span><span class="p">,</span></div><div class='line' id='LC17'>		<span class="nx">plotBackgroundColor</span><span class="o">:</span> <span class="s1">&#39;rgba(255, 255, 255, .9)&#39;</span><span class="p">,</span></div><div class='line' id='LC18'>		<span class="nx">plotShadow</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></div><div class='line' id='LC19'>		<span class="nx">plotBorderWidth</span><span class="o">:</span> <span class="mi">1</span></div><div class='line' id='LC20'>	<span class="p">},</span></div><div class='line' id='LC21'>	<span class="nx">title</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC22'>		<span class="nx">style</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC23'>			<span class="nx">color</span><span class="o">:</span> <span class="s1">&#39;#000&#39;</span><span class="p">,</span></div><div class='line' id='LC24'>			<span class="nx">font</span><span class="o">:</span> <span class="s1">&#39;bold 16px &quot;Trebuchet MS&quot;, Verdana, sans-serif&#39;</span></div><div class='line' id='LC25'>		<span class="p">}</span></div><div class='line' id='LC26'>	<span class="p">},</span></div><div class='line' id='LC27'>	<span class="nx">subtitle</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC28'>		<span class="nx">style</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC29'>			<span class="nx">color</span><span class="o">:</span> <span class="s1">&#39;#666666&#39;</span><span class="p">,</span></div><div class='line' id='LC30'>			<span class="nx">font</span><span class="o">:</span> <span class="s1">&#39;bold 12px &quot;Trebuchet MS&quot;, Verdana, sans-serif&#39;</span></div><div class='line' id='LC31'>		<span class="p">}</span></div><div class='line' id='LC32'>	<span class="p">},</span></div><div class='line' id='LC33'>	<span class="nx">xAxis</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC34'>		<span class="nx">gridLineWidth</span><span class="o">:</span> <span class="mi">1</span><span class="p">,</span></div><div class='line' id='LC35'>		<span class="nx">lineColor</span><span class="o">:</span> <span class="s1">&#39;#000&#39;</span><span class="p">,</span></div><div class='line' id='LC36'>		<span class="nx">tickColor</span><span class="o">:</span> <span class="s1">&#39;#000&#39;</span><span class="p">,</span></div><div class='line' id='LC37'>		<span class="nx">labels</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC38'>			<span class="nx">style</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC39'>				<span class="nx">color</span><span class="o">:</span> <span class="s1">&#39;#000&#39;</span><span class="p">,</span></div><div class='line' id='LC40'>				<span class="nx">font</span><span class="o">:</span> <span class="s1">&#39;11px Trebuchet MS, Verdana, sans-serif&#39;</span></div><div class='line' id='LC41'>			<span class="p">}</span></div><div class='line' id='LC42'>		<span class="p">},</span></div><div class='line' id='LC43'>		<span class="nx">title</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC44'>			<span class="nx">style</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC45'>				<span class="nx">color</span><span class="o">:</span> <span class="s1">&#39;#333&#39;</span><span class="p">,</span></div><div class='line' id='LC46'>				<span class="nx">fontWeight</span><span class="o">:</span> <span class="s1">&#39;bold&#39;</span><span class="p">,</span></div><div class='line' id='LC47'>				<span class="nx">fontSize</span><span class="o">:</span> <span class="s1">&#39;12px&#39;</span><span class="p">,</span></div><div class='line' id='LC48'>				<span class="nx">fontFamily</span><span class="o">:</span> <span class="s1">&#39;Trebuchet MS, Verdana, sans-serif&#39;</span></div><div class='line' id='LC49'><br/></div><div class='line' id='LC50'>			<span class="p">}</span></div><div class='line' id='LC51'>		<span class="p">}</span></div><div class='line' id='LC52'>	<span class="p">},</span></div><div class='line' id='LC53'>	<span class="nx">yAxis</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC54'>		<span class="nx">minorTickInterval</span><span class="o">:</span> <span class="s1">&#39;auto&#39;</span><span class="p">,</span></div><div class='line' id='LC55'>		<span class="nx">lineColor</span><span class="o">:</span> <span class="s1">&#39;#000&#39;</span><span class="p">,</span></div><div class='line' id='LC56'>		<span class="nx">lineWidth</span><span class="o">:</span> <span class="mi">1</span><span class="p">,</span></div><div class='line' id='LC57'>		<span class="nx">tickWidth</span><span class="o">:</span> <span class="mi">1</span><span class="p">,</span></div><div class='line' id='LC58'>		<span class="nx">tickColor</span><span class="o">:</span> <span class="s1">&#39;#000&#39;</span><span class="p">,</span></div><div class='line' id='LC59'>		<span class="nx">labels</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC60'>			<span class="nx">style</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC61'>				<span class="nx">color</span><span class="o">:</span> <span class="s1">&#39;#000&#39;</span><span class="p">,</span></div><div class='line' id='LC62'>				<span class="nx">font</span><span class="o">:</span> <span class="s1">&#39;11px Trebuchet MS, Verdana, sans-serif&#39;</span></div><div class='line' id='LC63'>			<span class="p">}</span></div><div class='line' id='LC64'>		<span class="p">},</span></div><div class='line' id='LC65'>		<span class="nx">title</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC66'>			<span class="nx">style</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC67'>				<span class="nx">color</span><span class="o">:</span> <span class="s1">&#39;#333&#39;</span><span class="p">,</span></div><div class='line' id='LC68'>				<span class="nx">fontWeight</span><span class="o">:</span> <span class="s1">&#39;bold&#39;</span><span class="p">,</span></div><div class='line' id='LC69'>				<span class="nx">fontSize</span><span class="o">:</span> <span class="s1">&#39;12px&#39;</span><span class="p">,</span></div><div class='line' id='LC70'>				<span class="nx">fontFamily</span><span class="o">:</span> <span class="s1">&#39;Trebuchet MS, Verdana, sans-serif&#39;</span></div><div class='line' id='LC71'>			<span class="p">}</span></div><div class='line' id='LC72'>		<span class="p">}</span></div><div class='line' id='LC73'>	<span class="p">},</span></div><div class='line' id='LC74'>	<span class="nx">legend</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC75'>		<span class="nx">itemStyle</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC76'>			<span class="nx">font</span><span class="o">:</span> <span class="s1">&#39;9pt Trebuchet MS, Verdana, sans-serif&#39;</span><span class="p">,</span></div><div class='line' id='LC77'>			<span class="nx">color</span><span class="o">:</span> <span class="s1">&#39;black&#39;</span></div><div class='line' id='LC78'><br/></div><div class='line' id='LC79'>		<span class="p">},</span></div><div class='line' id='LC80'>		<span class="nx">itemHoverStyle</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC81'>			<span class="nx">color</span><span class="o">:</span> <span class="s1">&#39;#039&#39;</span></div><div class='line' id='LC82'>		<span class="p">},</span></div><div class='line' id='LC83'>		<span class="nx">itemHiddenStyle</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC84'>			<span class="nx">color</span><span class="o">:</span> <span class="s1">&#39;gray&#39;</span></div><div class='line' id='LC85'>		<span class="p">}</span></div><div class='line' id='LC86'>	<span class="p">},</span></div><div class='line' id='LC87'>	<span class="nx">labels</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC88'>		<span class="nx">style</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC89'>			<span class="nx">color</span><span class="o">:</span> <span class="s1">&#39;#99b&#39;</span></div><div class='line' id='LC90'>		<span class="p">}</span></div><div class='line' id='LC91'>	<span class="p">},</span></div><div class='line' id='LC92'><br/></div><div class='line' id='LC93'>	<span class="nx">navigation</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC94'>		<span class="nx">buttonOptions</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC95'>			<span class="nx">theme</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC96'>				<span class="nx">stroke</span><span class="o">:</span> <span class="s1">&#39;#CCCCCC&#39;</span></div><div class='line' id='LC97'>			<span class="p">}</span></div><div class='line' id='LC98'>		<span class="p">}</span></div><div class='line' id='LC99'>	<span class="p">}</span></div><div class='line' id='LC100'><span class="p">};</span></div><div class='line' id='LC101'><br/></div><div class='line' id='LC102'><span class="c1">// Apply the theme</span></div><div class='line' id='LC103'><span class="kd">var</span> <span class="nx">highchartsOptions</span> <span class="o">=</span> <span class="nx">Highcharts</span><span class="p">.</span><span class="nx">setOptions</span><span class="p">(</span><span class="nx">Highcharts</span><span class="p">.</span><span class="nx">theme</span><span class="p">);</span></div></pre></div></td>
          </tr>
        </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.05055s from github-fe140-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close js-ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

  </body>
</html>

