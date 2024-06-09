 document.body.insertAdjacentHTML("afterend", '<style>  #window{      display:block;      height:580px;      color: black;      width: 1105px;      min-width: 500px;      background: #f0eded;      border-radius: 5px;      -webkit-box-shadow: 0px 0px 20px rgba(0,0,0,0.75);      -moz-box-shadow: 0px 0px 20px rgba(0,0,0,0.75);     /*-webkit-transition:all 0.5s;      */      overflow: hidden;      font-family: Verdana, sans-serif;      font-weight: bold;      position: absolute;      z-index: 15;      left: 50%;      top: 50%;      transform: translate(-50%, -50%);      -ms-transform: translate(-50%, -50%);     /* for IE 9 */      -webkit-transform: translate(-50%, -50%);     /* for Safari */ } /* TOP BAR */  #topbar{      width: 100%;      height: 21px;      font-size: 16px;      font-family: "Myriad Pro", sans-serif;      text-shadow:0px 1px 0px rgba(255,255,255,0.25);      -webkit-box-shadow:0 1px 0 rgba(0,0,0,0.5);      -moz-box-shadow:0 1px 0 rgba(0,0,0,0.5); }  #topbar ul li {      float: left;      padding:0 10px;      height: 21px;      line-height: 24px; }  #topbar ul li:first-child{      font-size: 20px;      line-height: 26px;      margin-left: 5px; }  #topbar ul li:nth-child(2){      font-family: "Myriad-Semi", sans-serif; }  #topbar ul li:active{      background-image: -webkit-gradient(linear,left bottom,left top,color-stop(1, #4a82ff),color-stop(0, #0052fc));      color: #fff;      text-shadow: none; }  #toolbar{      width: 100%;      height: 25px;      background: grey;      border-radius:5px 5px 0 0;      background: #cfcfcf;     /* Old browsers */      background: -moz-linear-gradient(top, #cfcfcf 0%, #a8a8a8 100%);     /* FF3.6+ */      background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#cfcfcf), color-stop(100%,#a8a8a8));     /* Chrome,Safari4+ */      background: -webkit-linear-gradient(top, #cfcfcf 0%,#a8a8a8 100%);     /* Chrome10+,Safari5.1+ */      background: -o-linear-gradient(top, #cfcfcf 0%,#a8a8a8 100%);     /* Opera 11.10+ */      background: -ms-linear-gradient(top, #cfcfcf 0%,#a8a8a8 100%);     /* IE10+ */      background: linear-gradient(top, #cfcfcf 0%,#a8a8a8 100%);     /* W3C */      -webkit-box-shadow:0px 1px 0px rgba(255,255,255,0.5) inset,0px 1px 0px #515151;      -moz-box-shadow:0px 1px 0px rgba(255,255,255,0.5) inset,0px 1px 0px #515151;      box-shadow:0px 1px 0px rgba(255,255,255,0.5) inset,0px 1px 0px #515151; }  #toolbar .top{      float: left;      width: 100%;      height: 23px; }  #toolbar .bottom{      float: left;      width: 100%;      height: 30px; } /*-----TRAFFIC LIGHTS-----*/  #toolbar #lights{      float: left;      position:relative;      top:4px;      left:7px; }  .light{      float:left;      width:14px;      height:14px;      border-radius:14px;      -webkit-box-shadow:0px 1px 0px rgba(255,255,255,0.5),0px 0px 3px #000 inset;      -moz-box-shadow:0px 1px 0px rgba(255,255,255,0.5),0px 0px 3px #000 inset;      box-shadow:0px 1px 0px rgba(255,255,255,0.5),0px 0px 3px #000 inset;      overflow: hidden; }  #lights:hover .glyph{      opacity: 1;      cursor:default; }  .light .shine{      width: 4px;      height:3px;      border-radius:10px;     /*background-image: -webkit-gradient(radial, center center, 0, center center, 3, from(rgba(255,255,255,1)), to(rgba(255,255,255,0)));      */      background: -moz-radial-gradient(center, ellipse cover, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);     /* FF3.6+ */      background-image: -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%,rgba(255,255,255,1)), color-stop(100%,rgba(255,255,255,0)));     /* Chrome,Safari4+ */      background: -webkit-radial-gradient(center, ellipse cover, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);     /* Chrome10+,Safari5.1+ */      background: -o-radial-gradient(center, ellipse cover, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);     /* Opera 12+ */      background: -ms-radial-gradient(center, ellipse cover, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);     /* IE10+ */      background: radial-gradient(center, ellipse cover, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);     /* W3C */ }  .light .glow{      width:14px;      height:8px;      background-image: -webkit-gradient(radial, center bottom, 0, center center, 5, from(rgba(255,255,255,0.75)), to(rgba(255,255,255,0)));      background: 0px 0px -moz-radial-gradient(bottom, cover, rgba(255,255,255,0.70) 0%, rgba(255,255,255,0) 80%);     /* FF3.6+ */ } /*--RED--*/  .red{      background: #f41b16;     /* Old browsers */      background: -moz-linear-gradient(top, #f41b16 0%, #fc7471 100%);     /* FF3.6+ */      background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#f41b16), color-stop(100%,#fc7471));     /* Chrome,Safari4+ */      background: -webkit-linear-gradient(top, #f41b16 0%,#fc7471 100%);     /* Chrome10+,Safari5.1+ */      background: -o-linear-gradient(top, #f41b16 0%,#fc7471 100%);     /* Opera 11.10+ */      background: -ms-linear-gradient(top, #f41b16 0%,#fc7471 100%);     /* IE10+ */      background: linear-gradient(top, #f41b16 0%,#fc7471 100%);     /* W3C */ }  .red:active{      background: #972f2e;     /* Old browsers */      background: -moz-linear-gradient(top, #972f2e 0%, #fc7471 100%);     /* FF3.6+ */      background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#972f2e), color-stop(100%,#fc7471));     /* Chrome,Safari4+ */      background: -webkit-linear-gradient(top, #972f2e 0%,#fc7471 100%);     /* Chrome10+,Safari5.1+ */      background: -o-linear-gradient(top, #972f2e 0%,#fc7471 100%);     /* Opera 11.10+ */      background: -ms-linear-gradient(top, #972f2e 0%,#fc7471 100%);     /* IE10+ */      background: linear-gradient(top, #972f2e 0%,#fc7471 100%);     /* W3C */ }  .red .shine{      position: relative;      top: -23px;      left: 5px; }  .red .glow{      position: relative;      top: -22px; }  .red .glyph{      position: relative;      top: -6px;      left: 3px;      font-size: 14px;      font-weight: bold;      color: #9b3a36;      z-index: 50;      opacity: 0; } /*--YELLOW--*/  .yellow{      background: #f4a316;     /* Old browsers */      background: -moz-linear-gradient(left, #f4a316 0%, #fcc371 100%);     /* FF3.6+ */      background: -webkit-gradient(linear, left top, right top, color-stop(0%,#f4a316), color-stop(100%,#fcc371));     /* Chrome,Safari4+ */      background: -webkit-linear-gradient(left, #f4a316 0%,#fcc371 100%);     /* Chrome10+,Safari5.1+ */      background: -o-linear-gradient(left, #f4a316 0%,#fcc371 100%);     /* Opera 11.10+ */      background: -ms-linear-gradient(left, #f4a316 0%,#fcc371 100%);     /* IE10+ */      background: linear-gradient(left, #f4a316 0%,#fcc371 100%);     /* W3C */      margin:0px 7px; }  .yellow:active{      background: #ae4f1e;     /* Old browsers */      background: -moz-linear-gradient(top, #ae4f1e 0%, #fcc371 100%);     /* FF3.6+ */      background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#ae4f1e), color-stop(100%,#fcc371));     /* Chrome,Safari4+ */      background: -webkit-linear-gradient(top, #ae4f1e 0%,#fcc371 100%);     /* Chrome10+,Safari5.1+ */      background: -o-linear-gradient(top, #ae4f1e 0%,#fcc371 100%);     /* Opera 11.10+ */      background: -ms-linear-gradient(top, #ae4f1e 0%,#fcc371 100%);     /* IE10+ */      background: linear-gradient(top, #ae4f1e 0%,#fcc371 100%);     /* W3C */ }  .yellow .shine{      position: relative;      top: -23px;      left: 5px; }  .yellow .glow{      position: relative;      top: -22px; }  .yellow .glyph{      position: relative;      top: -7px;      left: 4px;      font-size: 24px;      color: #854322;      z-index: 50;      opacity: 0;      -webkit-transform: scaleY(1.5) scaleX(1.3); } /*--GREEN--*/  .green{      background: #4cae2e;     /* Old browsers */      background: -moz-linear-gradient(top, #4cae2e 0%, #dafc71 100%);     /* FF3.6+ */      background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#4cae2e), color-stop(100%,#dafc71));     /* Chrome,Safari4+ */      background: -webkit-linear-gradient(top, #4cae2e 0%,#dafc71 100%);     /* Chrome10+,Safari5.1+ */      background: -o-linear-gradient(top, #4cae2e 0%,#dafc71 100%);     /* Opera 11.10+ */      background: -ms-linear-gradient(top, #4cae2e 0%,#dafc71 100%);     /* IE10+ */      background: linear-gradient(top, #4cae2e 0%,#dafc71 100%);     /* W3C */ }  .green:active{      background: #48752b;     /* Old browsers */      background: -moz-linear-gradient(top, #48752b 0%, #dafc71 100%);     /* FF3.6+ */      background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#48752b), color-stop(100%,#dafc71));     /* Chrome,Safari4+ */      background: -webkit-linear-gradient(top, #48752b 0%,#dafc71 100%);     /* Chrome10+,Safari5.1+ */      background: -o-linear-gradient(top, #48752b 0%,#dafc71 100%);     /* Opera 11.10+ */      background: -ms-linear-gradient(top, #48752b 0%,#dafc71 100%);     /* IE10+ */      background: linear-gradient(top, #48752b 0%,#dafc71 100%);     /* W3C */ }  .green .shine{      position: relative;      top: -22px;      left: 5px; }  .green .glow{      position: relative;      top: -22px; }  .green .glyph{      position: relative;      top: -6px;      left: 3px;      font-size: 14px;      font-weight: bold;      color: #25571d;      z-index: 50;      opacity: 0; } /* Horrible to do this for firefox */  @-moz-document url-prefix() {      .red .glyph {          position: relative;          top: -4px;     }      .yellow .glyph {          top: -4px;          left: 3px;     }      .green .glyph{          position: relative;          top: -4px;     } } /*-----TITLE-----*/  #title{      position: relative;      top:4px;      width:40%;      text-align: center;      font-family: "Myriad Pro", sans-serif;      font-size: 14px;      text-shadow: 0px 1px 0px rgba(255,255,255,0.5);      line-height: 14px; }  .folder{      float: left;      margin-right:5px; }  .folder .tab{      width:4px;      height:2px;      background:#a4c5da;      border:1px solid #728ea3;      border-bottom: none;      border-radius:2px 2px 0px 0px;      -webkit-box-shadow:0px -1px 0px #99b5c7 inset;      margin-left: 1px;      z-index: 5000;      margin-bottom: -1px; }  .folder .body{      width: 14px;      height: 10px;      border:1px solid #6e8ba1;      background: #b8cfe0;     /* Old browsers */      background: -moz-linear-gradient(top, #b8cfe0 0%, #86adc8 100%);     /* FF3.6+ */      background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#b8cfe0), color-stop(100%,#86adc8));     /* Chrome,Safari4+ */      background: -webkit-linear-gradient(top, #b8cfe0 0%,#86adc8 100%);     /* Chrome10+,Safari5.1+ */      background: -o-linear-gradient(top, #b8cfe0 0%,#86adc8 100%);     /* Opera 11.10+ */      background: -ms-linear-gradient(top, #b8cfe0 0%,#86adc8 100%);     /* IE10+ */      background: linear-gradient(top, #b8cfe0 0%,#86adc8 100%);     /* W3C */      z-index: -50;      -webkit-box-shadow:0px 1px 0px rgba(255,255,255,0.25) inset,0px 1px 0px rgba(0,0,0,0.2);      -moz-box-shadow:0px 1px 0px rgba(255,255,255,0.25) inset,0px 1px 0px rgba(0,0,0,0.2); }  #nav{      margin: 1px 8px;      float: left; }  #view{      margin: 2px 0 0 110px;      display: inline-block; }  .control_box{      height:20px;      border-radius: 3px;      border: 1px solid #555;      background-image: -webkit-gradient(linear,left bottom,left top,color-stop(1, #fefefe),color-stop(0, #b8b8b8));      box-shadow:0px 1px 0px rgba(255,255,255,0.25); }  .control_box .control{      height:20px;      border-right: 1px solid #2e2e2e;      float: left;      text-align: center;      width: 27px; }  .control:last-child{      border-right: 0px solid !important; }  .control:active{      background: #b0afb0;      -webkit-box-shadow:0px 0px 4px #000 inset; }  .active{      background: #707070 !important;      -webkit-box-shadow:0px 3px 4px rgba(0,0,0,0.6) inset !important; }  #body {      font-family: Verdana, sans-serif;      line-height: 1em;      font-size:13px;      float: left;      width: 100%;      min-height:130px;      background:#f0eded;      padding:10px;      line-height:1.5em;      height: 40%; }  #body p {      color: #000; }  @keyframes blink {      0% {          background:rgba(99,222,0,100);     }      100% {          background:rgba(99,222,0,0);     } }  @-webkit-keyframes blink {      0% {          background:rgba(99,222,0,100);     }      100% {          background:rgba(99,222,0,0);     } }  @-moz-keyframes blink {      0% {          background:rgba(99,222,0,100);     }      100% {          background:rgba(99,222,0,0);     } }  .cursor {      background:#63de00;      display:inline-block;      width:11px;      height:19px;      margin-bottom:-3px; }  .cursor {      -webkit-animation-name: blink;      -webkit-animation-duration: 1.5s;      -webkit-animation-iteration-count: infinite;      -moz-animation-name: blink;      -moz-animation-duration: 1.5s;      -moz-animation-iteration-count: infinite; }  #body p::-webkit-selection {      background:#0b209e; }  #body p::selection {      background:#0b209e; }  #body p::-moz-selection {      background:#0b209e; }  #body p {      margin-top:5px;      margin-bottom:5px;      font-size:13px; }  #content{      float: left;      margin-top: 1px; }  #foot{      height: 23px;      width: 100%;      float: left;      background-image: -webkit-gradient(linear,left bottom,left top,color-stop(1, #cbcbcb),color-stop(0, #fff));      border-top:1px solid #515151;      border-radius:0 0 5px 5px; }  #foot .handle{      width: 11px;      height: 11px;      float: right;      margin: 6px;      overflow: hidden; }  .handle .grip{      -webkit-transform: rotate(45deg) scaley(3);      margin: 2px 0 0 2px;      color: #fff;      text-shadow: 1px 1px 0 #c6c6c6;      font-size: 14px; }  .icon{      width: 86px;      height: 100px;      margin: 20px;      float: left;      font-family: "Myriad Pro", sans-serif;      text-align: center;      font-size: 12px; }  .icon .frame{      width: 82px;      height: 82px;      border-radius: 5px;      border: 2px solid transparent; }  .icon .name{      color: #000;      padding-top: 3px;      border-radius:15px;      width: 55px;      margin: 5px 0 0 15px; }  .icon .folder{      margin:15px 0 0 6px; }  .tbl{      width: 100% }  td {      vertical-align: top;      width:50%; }  .wdb-stats, .wdb-flex-container {      display: flex;      align-items: stretch; 	 width:550px; 	 max-width:550px; 	 height: 155px; }  .wdb-stats div {      flex-grow: 1;      padding: 1px 2px; 	 white-space: nowrap; 	 overflow:hidden; }  .wdb-stats div li {      font-size: 15px;      font-weight: bold;      list-style: none; 	 white-space: nowrap; 	 overflow:hidden; }  .clearfix::after {      content: "";      clear: both;      display: table; }  .float-left {      float: left!important; }  .float-right {      float: right!important; }  .wraph{      width:550px; 	 max-width:550px;      height: 100%;      margin: 0;      padding: 0;      overflow: auto;      overflow-x: auto; }  #wdbWrapHistory {      height: 200px;      padding: 3px; }  #wdbWrapHistory {      overflow-x: auto; }  #wdbWrapHistory table {      border-collapse: collapse;      font-size: 11px!important; }  #wdbWrapHistory table thead tr th {      text-align: left;      padding: 1px;      border: 1px solid #fff; }  #wdbHistory tr {      border-bottom: 1px solid #fff;      color: #000!important; }  #wdbHistory tr:last-child {      border-bottom: 1px solid #ccc; }  #wdbHistory tr td {      all: revert;      white-space: nowrap;      padding: 1.5px;      border-right: 1px solid #fff;      border-left: 1px solid #fff; }  #wdbHistory tr td:first-child {      border-left: 1px solid #ccc; }  #wdbHistory tr td:last-child {      border-right: 1px solid #ccc; }  #wdbHistory tr td input {      all: revert; }  .btn-grad {      all: revert;      cursor: pointer;      background: #7717ff;      text-align: center;      transition: 0.5s;      background-size: 70%;      border: #ffc107;      border-radius: 3px;      font-weight: bold;      font-size: 12px; 	 color: white; }  .btn-grad:hover {      background-position: right center;      text-decoration: none; }  .btn-grad:active {      opacity: .65; }  .btn-grad:disabled {      cursor: auto;      opacity: .65;      color: #fff; }  .btn-control {      padding-top: 10px!important;      padding-bottom: 10px!important; }  #wdbMenu {      padding: 3px; }  #wdbMenu select, #wdbMenu span input[type=number] {      all: revert;      background: #fff!important;      padding: 3px 5px;      border: 1px solid #ccc;      border-radius: 0; }  #window{      color: black; }  #wdbLog {      border-spacing: 0px;      table-layout: fixed;      margin-left: auto;      margin-right: auto;      font-size: 11px;      background: #f0eded;      word-wrap: break-word;      text-align: left; }  #wdbLog, td, tr {      word-wrap: break-word;      text-align: left; }  #result {      position: relative;      padding-top: 2px;      padding-left: 20px;      padding-bottom: 10px;      height: 40px;      text-align: center;      vertical-align: middle;      font-size: 30px;      font-weight: bold;      font-family: Verdana, sans-serif; }  html {      font-family: Verdana, sans-serif;      font-weight: bold; }  .switch {      position: relative;      display: inline-block;      width: 40px;      height: 19px; }  .switch input {      opacity: 0;      width: 0;      height: 0; }  .slider {      position: absolute;      cursor: pointer;      top: 0;      left: 0;      right: 0;      bottom: 0;      background-color: #ccc;      -webkit-transition: .4s;      transition: .4s; }  .slider:before {      position: absolute;      content: "";      height: 19px;      width: 19px;      left: 0px;      bottom: 0px;      background-color: black;      -webkit-transition: .4s;      transition: .4s; }  input:checked + .slider {      background-image: linear-gradient(to right, #00E701 0%, #00E701 51%, #00E701 100%); }  input:focus + .slider {      box-shadow: 0 0 1px #2196F3; }  input:checked + .slider:before {      -webkit-transform: translateX(24px);      -ms-transform: translateX(24px);      transform: translateX(24px); } /* Rounded sliders */  .slider.round {      border-radius: 34px; }  .slider.round:before {      border-radius: 50%; }  .fastmode{      float: right;      font-weight: bold; }  td {      word-wrap: break-word;      text-align: left; }  tr {      word-wrap: break-word;      text-align: left; }  </style> <div id="window">     <div id="toolbar">         <div class="top">             <div id="lights">                 <div class="light red">                     <div class="glyph">×</div>                     <div class="shine"></div>                     <div class="glow"></div>                 </div>                 <div class="light yellow">                     <div class="glyph">-</div>                     <div class="shine"></div>                     <div class="glow"></div>                 </div>                 <div class="light green">                     <div class="glyph">+</div>                     <div class="shine"></div>                     <div class="glow"></div>                 </div>             </div>             <center>                 <div id="title"> github.com/poky1084 </div>             </center>             <div id="bubble">                 <div class="shine"></div>                 <div class="glow"></div>             </div>         </div>     </div>     <div id="body">         <table class="tbl">             <tr>                 <td>                     <div class="wdb-stats" id="wdbStats">                         <div>                             <li class="clearfix"> <span class="float-left">Balance:</span> <span class="float-right"><span id="wdbBalance">0.00000000</span></span>                             </li>                             <li class="clearfix"> <span class="float-left">Wagered:</span> <span class="float-right">(<span id="wdbPercentWagered">0.00</span>x) <span id="wdbWagered">0.00000000</span></span>                             </li>                             <li class="clearfix"> <span class="float-left">Profit:</span> <span class="float-right" id="wdbWrapPercentProfit">(<span id="wdbPercentProfit">0.00</span>%) <span id="wdbProfit">0.00000000</span></span>                             </li>                             <li class="clearfix"> <span class="float-left">W/L/T:</span> </li>                             <li class="clearfix"> <span class="float-left">H/L/Current:</span> </li>                             <li class="clearfix"> <span class="float-left">Time:</span> </li>                         </div>                         <div>                             <li class="clearfix"> <span class="float-left">MaxBet:</span> <span class="float-right"><span id="wdbHighBet">0.00000000</span></span>                             </li>                             <li class="clearfix"> <span class="float-left">MaxLose:</span> <span class="float-right"><span id="wdbHighLose">0.00000000</span></span>                             </li>                             <li class="clearfix"> <span class="float-left">MaxProfit:</span> <span class="float-right"><span id="wdbHighProfit">0.00000000</span></span>                             </li>                             <li class="clearfix"> <span class="float-right"><span id="wdbBets"><span style="">0</span> / <span style="">0</span> / 0</span>                                 </span>                             </li>                             <li class="clearfix"> <span class="float-right"><span id="wdbHighLowStreak"><span style="">0</span> / <span style="">0</span> / <span id="currentstrk">0</span></span>                                 </span>                             </li>                             <li class="clearfix"> <span class="float-right"><span id="wdbTime">0:0:0:0</span></span>                             </li>                         </div>                     </div>                 </td>                 <td>                     <div class="half" id="chartContainer" style="height: 150px; width: 540px;"></div>                 </td>             </tr>             <tr>                 <td>                     <div style="flex-grow: 1;width: 520px;">                         <div id="result"> </div>                         <div class="wraph" id="wdbWrapHistory">                             <table>                                 <thead>                                     <tr>                                         <th>Bets</th>                                         <th>Game</th>                                         <th>Amount</th>                                         <th>High</th>                                         <th>Multiplier</th>                                         <th>Profit</th>                                         <th>Payout</th>                                         <th>Target</th>                                         <th>Roll</th>                                         <th>Settings</th>                                         <th>BetID</th>                                     </tr>                                 </thead>                                 <tbody id="wdbHistory"></tbody>                             </table>                         </div>                     </div>                     <div id="wdbWrapLog">                         <table id="wdbLog" class="wraph" style="word-wrap: break-word; width: 100%; height: 170px;">                             <tr>                                 <td>‏‏‎ ‎</td>                             </tr>                             <tr>                                 <td>‏‏‎ ‎</td>                             </tr>                             <tr>                                 <td>‏‏‎ ‎</td>                             </tr>                             <tr>                                 <td>‏‏‎ ‎</td>                             </tr>                             <tr>                                 <td>‏‏‎ ‎</td>                             </tr>                             <tr>                                 <td>‏‏‎ ‎</td>                             </tr>                             <tr>                                 <td>‏‏‎ ‎</td>                             </tr>                             <tr>                                 <td>‏‏‎ ‎</td>                             </tr>                             <tr>                                 <td>‏‏‎ ‎</td>                             </tr>                         </table>                     </div>                 </td>                 <td>                     <div id="wdbMenu">                         <div style="padding: 5px 2px 5px">                             <button class="btn-grad" id="wdbSaveScriptButton">Save</button>                             <div class="fastmode"> Fast Mode:                                 <label class="switch">                                     <input id="speedChange" type="checkbox"> <span class="slider round"></span> </label>                             </div>                         </div>                     </div>                     <textarea id="editor"></textarea>                     <div id="wdbControlMenu">                         <div id="wdbMenu">                             <button id="wdbStartButton" class="btn-grad btn-control" style="width: 100px;">Start</button>                             <button id="wdbStopButton" class="btn-grad btn-control" style="width: 100px;">Stop</button>                             <select id="wdbMenuCoin" class="wdb-select">                                 <option value="btc">BTC</option>                             </select>                             <select id="gameselect" class="gameselect">                                 <option value="dice" selected="selected">dice</option>                                 <option value="limbo">limbo</option>                                 <option value="mines">mines</option>                                 <option value="keno">keno</option>                                 <option value="plinko">plinko</option>                                 <option value="wheel">wheel</option>                                 <option value="crash">crash</option>                                                            </select>                             <select id="themebot" class="themebot">                                 <option value="light" selected="selected">light</option>                                 <option value="dark">dark</option>                                 <option value="blue">blue</option>                                 <option value="black">black</option>                             </select>                             <button id="resetall" class="btn-grad">ResetAll</button>                         </div>                     </div>                 </td>             </tr>         </table>         <p> </p>         <div class="cursor"></div>     </div> </div>')
 
 
let currency = "btc"
var token = "";

var target_multi = 1.01;
var basebet = 0;
var amount = basebet;
var running = true;
var nextbet = 0;
var win = false;

var bethigh = false;
var chance = 49.5

var losestreak = 0;
var winstreak  = 0;
var highest_streak = [0];
var lowest_streak = [0];
var current_balance = 0;
var balance = 0;
var betcount = 0;
var bets = 0
var wins = 0;
var losses = 0;
var wagered = 0;
var profit_total = 0;
var highest_profit = [0];
var lowest_profit = [0];
var highest_bet = [0];
var currentstreak = 0;
var profit = 0;
var previousbet = 0;
var currentprofit = 0;
var current_profit = 0;
var game = "dice";

var lastBet = {'amount': 0, 'win': false, 'Roll': 0, 'payoutMultiplier': 0, 'chance': 0, 'target': 0, 'payout': 0, 'percent': 0, 'targetNumber': 0}

var dps = []
var chart = ''
var color = "#f72a42"

var started_bal = 0;

var condition1 = "BELOW";

dobet = function(){}

var stopped = true;
var bet_found = false;
var run_clicked = false;
var bet_placed = false;
var starting_done = false;
var cashedoutauto = false;
var bet_has_been_made = false;
var dobet_run = false;
var crash_bet_placed = false;
var slide_bet_placed = false;
var crash_game_ran = false;
var slide_game_ran = false;
var make_slide_bet = false;
let speedmode = false;

var gamelist = {}
var makecount = 0
var id = {}
var betidentifier = "identity01"
var bgChart = "#f0eded"
var betlist = []

let mines = 1
let fields = [1,2,3]
let risk = "low"
let numbers = [1,2,3,4,5,6,7,8,9]
let rows = 8
let segments = 10
let chips = [{"value":"colorBlack", "amount":0.0001}]
let multiplier_start = 1
let crash_bet_possible = true;

let kenorisk = risk
let	kenoselected = numbers
let	minecount = mines
let	fieldcount = fields
let	plinkorows = rows
let	plinkorisk = risk
let	wheelrisk = risk
let	wheelsegments = segments
let	selection = chips

let eggs = [0]
let difficulty = "easy"
let dragondifficulty = difficulty
let dragoneggs = eggs

let banker = 0
let player = 0
let tie = 0
let baccarattie = tie
let baccaratplayer = player
let baccaratbanker = banker

 function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}
 
token = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).auth).accessToken

function randomString(length) {
	var chars = '_-0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';
	var result = '';
	for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
	return result;
}

function selectElement(id, valueToSelect) {    
    let element = document.getElementById(id);
    element.value = valueToSelect;
} 


function addJs(src, cb) {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = src;
    s.onload = cb;
    document.head.appendChild(s);
}

function addCss(src, cb) {
    var s = document.createElement('link');
    s.rel = 'stylesheet';
    s.href = src;
    s.onload = cb;
    document.head.appendChild(s);
}

function getMyJS(url, callback){
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url, true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState !== 4) {
			return
		}
		if (xhr.status === 200) { 
			var s = document.createElement('script');
			s.text = xhr.responseText;
			document.body.appendChild(s);
		} else {
			console.log('Error', xhr.responseText);
		}
	};
	xhr.onload = callback;
	xhr.send();
}
addJs('https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.62.3/codemirror.min.js', () => {	
addJs('https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/mode/javascript/javascript.min.js', () => {	
addJs('https://canvasjs.com/assets/script/canvasjs.min.js', () => { addBot() })})})

var editor = ''
addCss('https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/theme/darcula.min.css', () => {})
addCss('https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/codemirror.min.css', () => {})
//addJs('https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js', () => {})

let theme = "light"

function addBot(){
	
	/* if(window.location.host.includes("stake")){
		if(document.querySelectorAll('[data-test="left-sidebar"]')[0] != null){
		document.querySelectorAll('[data-test="left-sidebar"]')[0].remove();
		document.querySelectorAll('[data-test="home-button"]')[0].remove();
		}
	}*/
  
	editor = CodeMirror.fromTextArea(document.getElementById('editor'), {
		mode: "javascript",
		lineNumbers: true,
	});
	
	editor.save();
	editor.setSize(530, 300);
	
drawChart();

if(localStorage.getItem("jscode") != null){
	editor.setValue(localStorage.getItem("jscode"));
} else {
	editor.setValue(`chance=49.5 
bethigh=true
nextbet=0.00001
basebet=nextbet

dobet = function() {   
	if (win) {     
    	nextbet=basebet   
    } else {    
    	nextbet=nextbet*2 
    } 
	log("Betting "+nextbet+" on "+chance+" chance.")
}`);
}

if(localStorage.getItem("currenc") != null){
	currency = localStorage.getItem("currenc");
	selectElement('wdbMenuCoin', currency);
	
} 

if (localStorage.getItem("gameselect") != null) {
	document.getElementById("gameselect").value = localStorage.getItem("gameselect");
	game = document.getElementById("gameselect").value;
}

if (localStorage.getItem("themebot") != null) {
	theme = localStorage.getItem("themebot");
	selectElement('themebot', theme);
	if(theme == "dark"){
		bgChart = "#383838"
		drawChart();
		document.getElementById("body").style.background="#383838";
		document.getElementById("window").style.background="#383838";
		document.getElementById("wdbLog").style.background="#383838";
		document.getElementById("window").style.color="white";
		document.getElementsByClassName("CodeMirror")[0].style.background = "white"
		document.getElementsByClassName("CodeMirror")[0].style.color = "black"				
		document.getElementById("result").style.color = "white";
						
	} else if(theme == "light") {
		bgChart = "#f0eded"
		drawChart();
		document.getElementById("body").style.background="#f0eded";
		document.getElementById("window").style.background="#f0eded";
		document.getElementById("wdbLog").style.background="#f0eded";
		document.getElementById("window").style.color="black";
		document.getElementsByClassName("CodeMirror")[0].style.background = "white"
		document.getElementsByClassName("CodeMirror")[0].style.color = "black"
		document.getElementById("result").style.color = "black";
		
	} else if(theme == "blue") {
		bgChart = "#213743"
		drawChart();
		document.getElementById("body").style.background="#213743";
		document.getElementById("window").style.background="#213743";
		document.getElementById("wdbLog").style.background="#213743";
		document.getElementById("window").style.color="white";
		document.getElementsByClassName("CodeMirror")[0].style.background = "white"
		document.getElementsByClassName("CodeMirror")[0].style.color = "black"
		document.getElementById("result").style.color = "white";
	} else if(theme == "black") {
		bgChart = "black"
		drawChart();
		document.getElementById("body").style.background="black";
		document.getElementById("window").style.background="black";
		document.getElementById("wdbLog").style.background="black";
		document.getElementById("window").style.color="#00E701";
		document.getElementsByClassName("CodeMirror")[0].style.background = "white"
		document.getElementsByClassName("CodeMirror")[0].style.color = "black"
		document.getElementById("result").style.color = "white";
	}

}

userBalances();
startScoket();
startCrash();
};

// drag and drop bot
var draggin = false
var mydiv = document.getElementById("toolbar");
var mywindow = document.getElementById('window')

function onMouseDrag({ movementX, movementY }) {
    let getContainerStyle = window.getComputedStyle(mywindow);
    let leftValue = parseInt(getContainerStyle.left);
    let topValue = parseInt(getContainerStyle.top);
	
	if(draggin){
    mywindow.style.left = `${leftValue + movementX}px`;
    mywindow.style.top = `${topValue + movementY}px`;
	}
	
}

mydiv.addEventListener("mousedown", () => {
	draggin = false
    mydiv.addEventListener("mousemove", onMouseDrag);
});
mydiv.addEventListener("mouseup", () => {
	draggin = false
    mydiv.removeEventListener("mousemove", onMouseDrag);
});

document.body.addEventListener("mouseup", () => {
	draggin = false
});



/*
var editorSave = document.getElementById("editor");
editorSave.addEventListener('input', function() {localStorage.setItem("jscode", editor.getValue()); }, false);
*/
var downloadBtn = document.getElementById("wdbSaveScriptButton");

downloadBtn.addEventListener('click', function() { downloadFile(); }, false);

var btnReset = document.getElementById("resetall");

btnReset.addEventListener('click', function() { resetAll(); }, false);

var btnStart = document.getElementById("wdbStartButton");

btnStart.addEventListener('click', function() {  start();}, false);

var btnStop = document.getElementById("wdbStopButton");
btnStop.addEventListener('click', function() {  btnStart.disabled = false; run_clicked = false; running = false; dobet = function(){} }, false);


//let websocket = ""

function startScoket(){
	
	
	
	let websocket = new WebSocket('wss://subscription-temp.' + window.location.host + '/graphql', 'graphql-transport-ws');
    
  websocket.onopen = () => {
 
    websocket.send(JSON.stringify({"type":"connection_init","payload":{"x-correlation-id":localStorage.getItem('BROWSER_ID') + "-" + randomString(21) + "-t::" + localStorage.getItem('CORRELATION_USER_ID'),"authorization":token}}));
  };

  
  websocket.onmessage = (event) => {
    
			const obj = JSON.parse(event.data);		
			if (obj.hasOwnProperty("payload")) {
				if (obj.payload.hasOwnProperty("data")) {
				if (obj.payload.data.hasOwnProperty("balanceUpdated")) {
					if(obj.payload.data.balanceUpdated.currency == currency){
						var balan = document.getElementById("wdbBalance");
						balan.innerHTML = parseFloat(obj.payload.data.balanceUpdated.amount).toFixed(8);
						current_balance = parseFloat(obj.payload.data.balanceUpdated.amount)
						balance = current_balance;
					}
				} 
				
					
			}
		}
  
 
				
  if(event.data.includes("connection_ack")){
  
		websocket.send(JSON.stringify({
		"id": "7d9d3da3-5ffd-42a5-bac4-bfcb9605c688",
		"type": "subscribe",
		"payload": {
        "variables": {},
        "extensions": {},
        "operationName": "BalanceUpdated",
        "query": "subscription BalanceUpdated {\n  balanceUpdated {\n    currency\n    amount\n    windowId\n    __typename\n  }\n}"
			}
		}));
	
  
	}
  
  }
  
  websocket.onerror = (error) => {
    
	startScoket();
	
  };

  
  websocket.onclose = (event) => {

	startScoket();
	
  };
}


function startCrash(){
	
	
	
	let websocket = new WebSocket('wss://subscription.' + window.location.host + '/graphql', 'graphql-transport-ws');
    
  websocket.onopen = () => {
 
    websocket.send(JSON.stringify({"type":"connection_init","payload":{"x-correlation-id":localStorage.getItem('BROWSER_ID') + "-" + randomString(21) + "-t::" + localStorage.getItem('CORRELATION_USER_ID'),"authorization":token}}));
  };

  
  websocket.onmessage = (event) => {
    
		const obj = JSON.parse(event.data);		
		if (obj.hasOwnProperty("payload")) {
				if (obj.payload.hasOwnProperty("data")) {
				if (obj.payload.data.hasOwnProperty("crashEventUpdate") && game == "crash") {
					if(obj.payload.data.crashEventUpdate.status == "IN_PROGRESS"){
					document.getElementById("result").innerHTML = parseFloat(obj.payload.data.crashEventUpdate.currentPoint).toFixed(2) + 'x'
					}
					
					if(obj.payload.data.crashEventUpdate.status == "CRASHED"){
					
					document.getElementById("result").innerHTML = "Crash at " + parseFloat(obj.payload.data.crashEventUpdate.crashPoint).toFixed(2) + 'x'
					
					crash_bet_possible = true
					
					if(crash_bet_placed){
						crash_bet_placed = false
						
						color = "#f72a42"
						current_profit = -parseFloat(amount);
						profit_total += -parseFloat(amount);
						wagered += parseFloat(amount);
						losses++;
						losestreak++
						winstreak = 0;
						lastBet.payoutMultiplier = 0;
						win = false;
						lastBet.win = false;
						lastBet.amount = previousbet;
						lastBet.payoutMultiplier = 0;
						
						betcount++;
						bets = betcount;
						
						var row = document.createElement("tr");
					
						
						row.style.background = "#FFC0CB";
			
						
						var tdbets = document.createElement("td");
						var tdamount = document.createElement("td");
						var tdhigh = document.createElement("td");
						var tdTargetChance = document.createElement("td");
						var tdRollChance= document.createElement("td");
						var tdProfit = document.createElement("td");
						var tdPayout = document.createElement("td");
						var tdTargetNumber = document.createElement("td");
						var tdRollNumber = document.createElement("td");
						var tdNonce = document.createElement("td");
						var tdBetID = document.createElement("td");
						
						tdbets.innerHTML = betcount;
						tdamount.innerHTML = amount.toFixed(8)
						
						var tdcheck = document.createElement("input");
						tdcheck.type = "checkbox";
						tdcheck.name = "checked";
						tdcheck.checked = "checked";
						tdcheck.id = "checked";
						
						tdhigh.appendChild(tdcheck);
						tdTargetChance.innerHTML = (0).toFixed(4) + ""
						tdRollChance.innerHTML = ""
						tdProfit.innerHTML = current_profit.toFixed(8)
						tdTargetNumber.innerHTML = ">" + target_multi.toFixed(4)
						lastBet.targetNumber = target_multi;
						tdRollNumber.innerHTML = ""
						tdNonce.innerHTML = game;
						tdBetID.innerHTML = "";
						tdPayout.innerHTML = ""
						
						
						
						row.appendChild(tdbets);
						row.appendChild(tdNonce);
						row.appendChild(tdamount);
						row.appendChild(tdhigh);
						row.appendChild(tdTargetChance);
						row.appendChild(tdProfit);
						row.appendChild(tdPayout);
						row.appendChild(tdTargetNumber);
						row.appendChild(tdRollNumber);
						row.appendChild(tdRollChance);
						row.appendChild(tdBetID);
						var table = document.getElementById("wdbHistory");							
						table.prepend(row);
		
						if (table.rows.length > 50)
						{
							table.deleteRow(table.rows.length - 1);
						}
					
						if(winstreak > losestreak){
							currentstreak = winstreak;
						} else {
							currentstreak = -losestreak;
						}
					
						if(highest_bet[highest_bet.length-1] < amount){
							highest_bet.pop();
							highest_bet.push(amount);
						}
						if(highest_profit[highest_profit.length-1] < profit_total){
							highest_profit.pop();
							highest_profit.push(profit_total);
						}
						if(lowest_profit[lowest_profit.length-1] > profit_total){
							lowest_profit.pop();
							lowest_profit.push(profit_total);
						}
						if(highest_streak[highest_streak.length-1] < currentstreak){
							highest_streak.pop();
							highest_streak.push(currentstreak);
						}
						if(lowest_streak[lowest_streak.length-1] > currentstreak){
							lowest_streak.pop();
							lowest_streak.push(currentstreak);
						}

						balance = current_balance;
						profit = profit_total;
						previousbet = amount;
						currentprofit = current_profit;
						
						
						
						updateChart();
						
						document.getElementById("wdbProfit").innerHTML = profit_total.toFixed(8);
						document.getElementById("wdbWagered").innerHTML = wagered.toFixed(8);
						document.getElementById("wdbHighProfit").innerHTML = Math.max.apply(null, highest_profit).toFixed(8);
						document.getElementById("wdbHighLose").innerHTML = Math.min.apply(null, lowest_profit).toFixed(8);
						document.getElementById("wdbHighBet").innerHTML = Math.max.apply(null, highest_bet).toFixed(8);
						document.getElementById("wdbBets").innerHTML = wins + " / " + losses + " / " + bets;
						document.getElementById("wdbHighLowStreak").innerHTML = Math.max.apply(null, highest_streak) + " / " + Math.min.apply(null, lowest_streak) + " / " + currentstreak;
						document.getElementById("wdbPercentProfit").innerHTML = (profit_total / started_bal * 100).toFixed(2);
						document.getElementById("wdbPercentWagered").innerHTML = (wagered / started_bal).toFixed(2);
						
						if(profit_total < 0){
								document.getElementById("wdbProfit").style.color = "#f72a42"
								document.getElementById("wdbPercentProfit").style.color = "#f72a42"
						} else {
							if(document.getElementById("themebot").value == "dark" || document.getElementById("themebot").value == "blue" || document.getElementById("themebot").value == "black"){
								document.getElementById("wdbProfit").style.color = "#05f711"
								document.getElementById("wdbPercentProfit").style.color = "#05f711"
							} else {
								document.getElementById("wdbProfit").style.color = "green"
								document.getElementById("wdbPercentProfit").style.color = "green"
							}
						}
						
						
						//amount = nextbet;
						
						lastBet.amount = previousbet;
						lastBet.target = target_multi;
						
						dobet();
						amount = nextbet;
						target_multi = 99 / chance;
						
					}
					
							
							if(theme == "light"){
							document.getElementById("result").style.color = "black";
							} else {
								document.getElementById("result").style.color = "white";
							}
							
				
							lastBet.crashAt = parseFloat(obj.payload.data.crashEventUpdate.crashPoint);
							
							
							var row = document.createElement("tr");
							//betcount++;
							row.style.background = "#e8e9eb";
							//win = null
							//lastBet.win = null
							
							var tdbets = document.createElement("td");
							var tdamount = document.createElement("td");
							var tdhigh = document.createElement("td");
							var tdTargetChance = document.createElement("td");
							var tdRollChance= document.createElement("td");
							var tdProfit = document.createElement("td");
							var tdPayout = document.createElement("td");
							var tdTargetNumber = document.createElement("td");
							var tdRollNumber = document.createElement("td");
							var tdNonce = document.createElement("td");
							var tdBetID = document.createElement("td");
							
							tdbets.innerHTML = ""
							tdamount.innerHTML = "CrashAt"
							
							var tdcheck = document.createElement("input");
							tdcheck.type = "checkbox";
							tdcheck.name = "checked";
							tdcheck.checked = "checked";
							tdcheck.id = "checked";
							
							tdhigh.appendChild(tdcheck);
							tdTargetChance.innerHTML = lastBet.crashAt.toFixed(4) + "";
							tdRollChance.innerHTML = ""
							tdProfit.innerHTML = ""
							tdTargetNumber.innerHTML = ""
							//lastBet.targetNumber = target_multi;
							tdRollNumber.innerHTML = lastBet.crashAt.toFixed(4) + "";
							tdNonce.innerHTML = game;
							tdBetID.innerHTML = "";
							tdPayout.innerHTML = "";
							
							
							row.appendChild(tdbets);
							row.appendChild(tdNonce);
							row.appendChild(tdamount);
							row.appendChild(tdhigh);
							row.appendChild(tdTargetChance);
							row.appendChild(tdProfit);
							row.appendChild(tdPayout);
							row.appendChild(tdTargetNumber);
							row.appendChild(tdRollNumber);
							row.appendChild(tdRollChance);
							row.appendChild(tdBetID);
							var table = document.getElementById("wdbHistory");							
							table.prepend(row);
			
							if (table.rows.length > 50)
							{
								table.deleteRow(table.rows.length - 1);
							}
					
					}
					
					if(obj.payload.data.crashEventUpdate.status == "ACCEPTING_BETS"){
						
						if(obj.payload.data.crashEventUpdate.nextRoundIn < 5000 && obj.payload.data.crashEventUpdate.nextRoundIn > 200){
								if(run_clicked){
								
									if(game == "crash" && crash_bet_possible == true){
										//crash_bet_placed = true
										crash_bet_possible = false
										crashbet(amount, target_multi);
									} 
								}	
						
						}
					}
				}
				if(obj.payload.data.hasOwnProperty("myCrashBetUpdateEvent") && game == "crash") {
					if(obj.payload.data.myCrashBetUpdateEvent.payoutType == "AUTO"){
						//CODE WIN
						color = "#05f711";
						bet_found = true;
						win = true;
						lastBet.win = true;
						lastBet.amount = parseFloat(obj.payload.data.myCrashBetUpdateEvent.amount);
						lastBet.payoutMultiplier = parseFloat(obj.payload.data.myCrashBetUpdateEvent.multiplier);
						
						//win
						winstreak++;
						wins++;
						losestreak = 0;
						betcount++;
						bets = betcount;
						if(crash_bet_placed){
							crash_bet_placed = false
						}
					
						current_profit =  parseFloat(obj.payload.data.myCrashBetUpdateEvent.payout) -  parseFloat(obj.payload.data.myCrashBetUpdateEvent.amount);
						profit_total +=  parseFloat(obj.payload.data.myCrashBetUpdateEvent.payout) -  parseFloat(obj.payload.data.myCrashBetUpdateEvent.amount);
						wagered += parseFloat(obj.payload.data.myCrashBetUpdateEvent.amount);
						
						var row = document.createElement("tr");
					
						
					
						row.style.background = "#91F190";
					
					
						var tdbets = document.createElement("td");
						var tdamount = document.createElement("td");
						var tdhigh = document.createElement("td");
						var tdTargetChance = document.createElement("td");
						var tdRollChance= document.createElement("td");
						var tdProfit = document.createElement("td");
						var tdPayout = document.createElement("td");
						var tdTargetNumber = document.createElement("td");
						var tdRollNumber = document.createElement("td");
						var tdNonce = document.createElement("td");
						var tdBetID = document.createElement("td");
						
						tdbets.innerHTML = betcount;
						tdamount.innerHTML = parseFloat(obj.payload.data.myCrashBetUpdateEvent.amount).toFixed(8)
						
						var tdcheck = document.createElement("input");
						tdcheck.type = "checkbox";
						tdcheck.name = "checked";
						tdcheck.checked = "checked";
						tdcheck.id = "checked";
						
						let gameid = "crash"
						
						tdhigh.appendChild(tdcheck);
						tdTargetChance.innerHTML = parseFloat(obj.payload.data.myCrashBetUpdateEvent.betAt).toFixed(4) + ""
						tdRollChance.innerHTML = ""
						tdProfit.innerHTML = current_profit.toFixed(8)
						tdTargetNumber.innerHTML = ">" + parseFloat(obj.payload.data.myCrashBetUpdateEvent.betAt).toFixed(4)
						//lastBet.targetNumber = obj.payload.data.crash.event.cashoutAt;
						tdRollNumber.innerHTML = ""
						tdNonce.innerHTML = gameid;
						tdBetID.innerHTML = obj.payload.data.myCrashBetUpdateEvent.betId;
						tdPayout.innerHTML = parseFloat(obj.payload.data.myCrashBetUpdateEvent.payout).toFixed(8);
						

						
						row.appendChild(tdbets);
						row.appendChild(tdNonce);
						row.appendChild(tdamount);
						row.appendChild(tdhigh);
						row.appendChild(tdTargetChance);
						row.appendChild(tdProfit);
						row.appendChild(tdPayout);
						row.appendChild(tdTargetNumber);
						row.appendChild(tdRollNumber);
						row.appendChild(tdRollChance);
						row.appendChild(tdBetID);
						
						var table = document.getElementById("wdbHistory");							
						table.prepend(row);
		
						if (table.rows.length > 50)
						{
							table.deleteRow(table.rows.length - 1);
						}
					
						if(winstreak > losestreak){
							currentstreak = winstreak;
						} else {
							currentstreak = -losestreak;
						}
					
						if(highest_bet[highest_bet.length-1] < lastBet.amount){
							highest_bet.pop();
							highest_bet.push(lastBet.amount);
						}
						if(highest_profit[highest_profit.length-1] < profit_total){
							highest_profit.pop();
							highest_profit.push(profit_total);
						}
						if(lowest_profit[lowest_profit.length-1] > profit_total){
							lowest_profit.pop();
							lowest_profit.push(profit_total);
						}
						if(highest_streak[highest_streak.length-1] < currentstreak){
							highest_streak.pop();
							highest_streak.push(currentstreak);
						}
						if(lowest_streak[lowest_streak.length-1] > currentstreak){
							lowest_streak.pop();
							lowest_streak.push(currentstreak);
						}

						balance = current_balance;
						profit = profit_total;
						previousbet = lastBet.amount;
						currentprofit = current_profit;
						
						
						
						updateChart();
						
						document.getElementById("wdbProfit").innerHTML = profit_total.toFixed(8);
						document.getElementById("wdbWagered").innerHTML = wagered.toFixed(8);
						document.getElementById("wdbHighProfit").innerHTML = Math.max.apply(null, highest_profit).toFixed(8);
						document.getElementById("wdbHighLose").innerHTML = Math.min.apply(null, lowest_profit).toFixed(8);
						document.getElementById("wdbHighBet").innerHTML = Math.max.apply(null, highest_bet).toFixed(8);
						document.getElementById("wdbBets").innerHTML = wins + " / " + losses + " / " + bets;
						document.getElementById("wdbHighLowStreak").innerHTML = Math.max.apply(null, highest_streak) + " / " + Math.min.apply(null, lowest_streak) + " / " + currentstreak;
						document.getElementById("wdbPercentProfit").innerHTML = (profit_total / started_bal * 100).toFixed(2);
						document.getElementById("wdbPercentWagered").innerHTML = (wagered / started_bal).toFixed(2);
					
					
						if(profit_total < 0){
								document.getElementById("wdbProfit").style.color = "#f72a42"
								document.getElementById("wdbPercentProfit").style.color = "#f72a42"
						} else {
								if(document.getElementById("themebot").value == "dark" || document.getElementById("themebot").value == "blue" || document.getElementById("themebot").value == "black"){
								document.getElementById("wdbProfit").style.color = "#05f711"
								document.getElementById("wdbPercentProfit").style.color = "#05f711"
							} else {
								document.getElementById("wdbProfit").style.color = "green"
								document.getElementById("wdbPercentProfit").style.color = "green"
							}
						}
						
						//amount = nextbet;
						
						lastBet.amount = previousbet;
						lastBet.target = target_multi;

						dobet();
						amount = nextbet;
						target_multi = 99 / chance;
							
						
						
						
					}
				}
				
			}
		}

  
 
				
  if(event.data.includes("connection_ack")){
  
		websocket.send(JSON.stringify({
		"id": "f8e81e79-91e3-4fe1-852f-dad313efd065",
		"type": "subscribe",
		"payload": {
        "variables": {},
        "extensions": {},
        "operationName": "CrashGameUpdate",
        "query": "subscription CrashGameUpdate {\n  crashEventUpdate {\n    status\n    elapsed\n    currentPoint\n    crashPoint\n    startedAt\n    nextRoundIn\n    crashGameId\n    __typename\n  }\n}"
			}
		}));
		
		websocket.send(JSON.stringify({
		"id": "35048850-8b3e-465b-93fb-2793748428b3",
		"type": "subscribe",
		"payload": {
			"variables": {},
			"extensions": {},
			"operationName": "CrashGameBetPayout",
			"query": "subscription CrashGameBetPayout {\n  crashBetPayoutEvent {\n    ...CrashBetPayoutEventFields\n    __typename\n  }\n}\n\nfragment CrashBetPayoutEventFields on CrashBetPayoutPayload {\n  betId\n  currency\n  amount\n  betAt\n  payout\n  multiplier\n  payoutType\n  crashGameId\n  user {\n    username\n    vipLevel\n    __typename\n  }\n  __typename\n}"
		}
	}));
		
		websocket.send(JSON.stringify({
			"id": "d6495e64-b86b-41c9-b6e9-4dbd28644161",
			"type": "subscribe",
			"payload": {
				"variables": {},
				"extensions": {},
				"operationName": "CrashMyBetUpdate",
				"query": "subscription CrashMyBetUpdate {\n  myCrashBetUpdateEvent {\n    ...CrashBetPayoutEventFields\n    __typename\n  }\n}\n\nfragment CrashBetPayoutEventFields on CrashBetPayoutPayload {\n  betId\n  currency\n  amount\n  betAt\n  payout\n  multiplier\n  payoutType\n  crashGameId\n  user {\n    username\n    vipLevel\n    __typename\n  }\n  __typename\n}"
			}
		}));
  
	}
  
  }
  
  websocket.onerror = (error) => {
    
	startCrash();
	
  };

  
  websocket.onclose = (event) => {

	startCrash();
	
  };
}


function datacrash(json){
	if(json.errors != undefined){
		crash_bet_possible = false;
		log(json.errors[0].message)
	} else {
		if(json.data.hasOwnProperty("crashPlay")){
			
			if(json.data.crashPlay.hasOwnProperty("shuffleOriginalActions")){
					let betx = json.data.crashPlay.shuffleOriginalActions[0].action.crash.betAt
					let betamt = json.data.crashPlay.amount
					crash_bet_placed = true;
					log("Crash bet placed. bet: " + betamt + " at " + betx)
			}
		}
	}
}



function crashbet(betsize, target_multi){
	
	
	var body = {
    "operationName": "CrashPlay",
    "variables": {
        "data": {
            "currency": currency.toUpperCase(),
            "amount": parseFloat(betsize).toFixed(8),
            "betAt": target_multi.toFixed(2)
        }
    },
    "query": "mutation CrashPlay($data: CrashPlayInput!) {\n  crashPlay(data: $data) {\n    id\n    amount\n    payout\n    currency\n    jackpot\n    game {\n      id\n      name\n      slug\n      edge\n      __typename\n    }\n    crashBet {\n      crashGameId\n      __typename\n    }\n    shuffleOriginalActions {\n      id\n      updatedAt\n      createdAt\n      action {\n        crash {\n          betAt\n          payout\n          multiplier\n          payoutType\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    gameSeedNonce\n    afterBalance\n    __typename\n  }\n}"
	}
	fetch('https://' +  window.location.host + '/graphql', {
		method: 'post',
		body:    JSON.stringify(body),
		headers: { 'Content-Type': 'application/json', 'X-Correlation-Id':localStorage.getItem('BROWSER_ID') + "-" + randomString(21) + "-t::" + localStorage.getItem('CORRELATION_USER_ID'), 'Authorization': "Bearer " + token},
	})
	.then(res => res.json())
	.then(json => datacrash(json))
	.catch(function(err, json) {
		//console.log(err);
		if(running == true)
		{
			setTimeout(() => {
				//crashbet(betsize, target_multi)							
			}, "2000");
			
		}
	});
	
}



function vault(e){

 var client = e;
 if(client == undefined){
	return log("Please specify vault amount.")
 }
var body = {
    "operationName": "VaultDeposit",
    "variables": {
        "data": {
            "currency": currency.toUpperCase(),
            "amount": JSON.stringify(client)
        }
    },
    "query": "mutation VaultDeposit($data: VaultDepositInput!) {\n  vaultDeposit(data: $data) {\n    id\n    type\n    currency\n    amount\n    createdAt\n    __typename\n  }\n}"
	}
	fetch('https://' +   window.location.host + '/graphql', {
		method: 'post',
		body:    JSON.stringify(body),
		headers: { 'Content-Type': 'application/json', 'X-Correlation-Id':localStorage.getItem('BROWSER_ID') + "-" + randomString(21) + "-t::" + localStorage.getItem('CORRELATION_USER_ID'), 'Authorization': "Bearer " + token},
	})
	.then(res => res.json())
	.then(json => outvault(json))
	.catch(function(err, json) {
		//console.log(err);
		setTimeout(() => {
			//initUser();							
		}, "2000");
	});
}

function outvault(json){
	if(json.errors != undefined){
		log(json.errors[0].message);
	} else {
		log("Deposited " + parseFloat(json.data.vaultDeposit.amount).toFixed(10) + " to vault.")
	}

}

function log(val){
	var table2 = document.getElementById("wdbLog");
	var row = document.createElement("tr");
	var tdtext = document.createElement("td");
	tdtext.innerHTML = val
	row.appendChild(tdtext);
	table2.prepend(row);
	
	if (table2.rows.length > 100)
	{
		table2.deleteRow(table2.rows.length - 1);
	}
}

function stop(){
	running = false;
	run_clicked = false;
	stopped = true;
	dobet = function() {}
	btnStart.disabled = false; 
}

function resetAll(){
 resetstats();
 resetChart();
 deleteTable();
 deleteLogs();
}

function deleteLogs(){
	document.getElementById("wdbLog").innerHTML = "";
	for(var i = 0; i < 10; i++){
		var table2 = document.getElementById("wdbLog");
		var row = document.createElement("tr");
		var tdtext = document.createElement("td");
		tdtext.innerHTML = "‏‏‎ ‎"
		row.appendChild(tdtext);
		table2.prepend(row)
	}
}



var gameselection = document.getElementById("gameselect");

gameselection.addEventListener('change', function(e) {  
	let gamevalue = document.getElementById("gameselect").value
    localStorage.setItem("gameselect", gamevalue);
	game = document.getElementById("gameselect").value;
	stop();
	document.getElementById("result").innerHTML = ""
	if(theme == "light"){
		document.getElementById("result").style.color = "black";
	} else {
		document.getElementById("result").style.color = "white";
	}
}, false);

var themebots = document.getElementById("themebot");

themebots.addEventListener('change', function(e) {  
	theme = document.getElementById("themebot").value
    localStorage.setItem("themebot", theme);
	if(theme == "dark"){
		bgChart = "#383838"
		drawChart();
		document.getElementById("body").style.background="#383838";
		document.getElementById("window").style.background="#383838";
		document.getElementById("wdbLog").style.background="#383838";
		document.getElementById("window").style.color="white";
		document.getElementsByClassName("CodeMirror")[0].style.background = "white"
		document.getElementsByClassName("CodeMirror")[0].style.color = "black"				
		document.getElementById("result").style.color = "white";
						
	} else if(theme == "light") {
		bgChart = "#f0eded"
		drawChart();
		document.getElementById("body").style.background="#f0eded";
		document.getElementById("window").style.background="#f0eded";
		document.getElementById("wdbLog").style.background="#f0eded";
		document.getElementById("window").style.color="black";
		document.getElementsByClassName("CodeMirror")[0].style.background = "white"
		document.getElementsByClassName("CodeMirror")[0].style.color = "black"
		document.getElementById("result").style.color = "black";
		
	} else if(theme == "blue") {
		bgChart = "#213743"
		drawChart();
		document.getElementById("body").style.background="#213743";
		document.getElementById("window").style.background="#213743";
		document.getElementById("wdbLog").style.background="#213743";
		document.getElementById("window").style.color="white";
		document.getElementsByClassName("CodeMirror")[0].style.background = "white"
		document.getElementsByClassName("CodeMirror")[0].style.color = "black"
		document.getElementById("result").style.color = "white";
	} else if(theme == "black") {
		bgChart = "black"
		drawChart();
		document.getElementById("body").style.background="black";
		document.getElementById("window").style.background="black";
		document.getElementById("wdbLog").style.background="black";
		document.getElementById("window").style.color="#00E701";
		document.getElementsByClassName("CodeMirror")[0].style.background = "white"
		document.getElementsByClassName("CodeMirror")[0].style.color = "black"
		document.getElementById("result").style.color = "white";
	}
	if(theme == "light"){
		document.getElementById("result").style.color = "black";
	} else {
		document.getElementById("result").style.color = "white";
	}
}, false);

var wdbMenuCoins = document.getElementById("wdbMenuCoin");

wdbMenuCoins.addEventListener('change', function(e) {  
	currency = document.getElementById("wdbMenuCoin").value
    localStorage.setItem("currenc", currency);
	userBalances();

}, false);

function resetstats(){
	losestreak = 0;
	winstreak  = 0;
	highest_streak = [0];
	lowest_streak = [0];
	current_balance = 0;
	betcount = 0;
	bets = 0
	wins = 0;
	losses = 0;
	wagered = 0;
	profit_total = 0;
	highest_profit = [0];
	lowest_profit = [0];
	highest_bet = [0];
	currentstreak = 0;
	profit = 0;
	currentprofit = 0;
	current_profit = 0;
	started_bal = balance;

	profit = profit_total;
	currentprofit = current_profit;
	bets = betcount;
	document.getElementById("wdbPercentProfit").innerHTML = (profit_total / started_bal * 100).toFixed(2);
	document.getElementById("wdbPercentWagered").innerHTML = (wagered / started_bal).toFixed(2);
	document.getElementById("result").innerHTML = "";
	if(theme == "light"){
		document.getElementById("result").style.color = "black";
	} else {
		document.getElementById("result").style.color = "white";
	}
	
	resetChart();
	
			document.getElementById("wdbProfit").innerHTML = profit_total.toFixed(8);
			document.getElementById("wdbWagered").innerHTML = wagered.toFixed(8);
			document.getElementById("wdbHighProfit").innerHTML = Math.max.apply(null, highest_profit).toFixed(8);
			document.getElementById("wdbHighLose").innerHTML = Math.min.apply(null, lowest_profit).toFixed(8);
			document.getElementById("wdbHighBet").innerHTML = Math.max.apply(null, highest_bet).toFixed(8);
			document.getElementById("wdbBets").innerHTML = wins + " / " + losses + " / " + bets;
			document.getElementById("wdbHighLowStreak").innerHTML = Math.max.apply(null, highest_streak) + " / " + Math.min.apply(null, lowest_streak) + " / " + currentstreak;
			document.getElementById("wdbPercentProfit").innerHTML = (profit_total / started_bal * 100).toFixed(2);
			document.getElementById("wdbPercentWagered").innerHTML = (wagered / started_bal).toFixed(2);
			
}

function deleteTable(){
		document.getElementById("wdbHistory").innerHTML = "";
}


function drawChart() {
    dps = [{ x: betcount, y: profit_total }]
    chart = new CanvasJS.Chart('chartContainer', {
        backgroundColor: bgChart,
        theme: 'light2',
        title: {
            //text: BOT_URL,
            fontColor: 'white',
            fontSize: 20
        },
        data: [{
            type: 'line',
            markerSize: 0,
            dataPoints: dps
        }]
    })
    chart.render();
}

function updateChart() {
    dps.push({
        x: betcount,
        y: profit_total,
        color: color
    })
    if (dps[dps.length - 2]) dps[dps.length - 2].lineColor = color;
    if (dps.length > 100) dps.shift();
    chart.render();
}


function resetChart() {
    betcount = 0;
    profit_total = 0;
	if(theme == "light"){
		document.getElementById("result").style.color = "black";
	} else {
		document.getElementById("result").style.color = "white";
	}
    return drawChart();
}

function resetseed(e){

 var client = e;
 if(client == undefined){
	client = randomString(10);
 }
var body = {
    "operationName": "ChangeGameSeed",
    "variables": {
        "clientSeed": client
    },
    "query": "mutation ChangeGameSeed($clientSeed: String!) {\n  gameSeedChangeAndReveal(newClientSeed: $clientSeed) {\n    ...GameSeedFields\n    __typename\n  }\n}\n\nfragment GameSeedFields on GameSeed {\n  id\n  clientSeed\n  seed\n  hashedSeed\n  status\n  currentNonce\n  createdAt\n  __typename\n}"
	}
	fetch('https://' +  window.location.host + '/graphql', {
		method: 'post',
		body:    JSON.stringify(body),
		headers: { 'Content-Type': 'application/json', 'X-Correlation-Id':localStorage.getItem('BROWSER_ID') + "-" + randomString(21) + "-t::" + localStorage.getItem('CORRELATION_USER_ID'), 'Authorization': "Bearer " + token},
	})
	.then(res => res.json())
	.then(json => outseed(json))
	.catch(function(err, json) {
		//console.log(err);
		setTimeout(() => {
			//initUser();							
		}, "2000");
	});
}

function outseed(json){
	if(json.errors != undefined){
		log(json.errors[0].message);
	} else {
		log("Seed has been reset.")
	}

}


function userBalances(){

var body = {
	"operationName": "GetMyProfile",
	"variables": {},
	"query": "query GetMyProfile {\n  me {\n    id\n    username\n    email\n    emailVerifiedAt\n    vipLevel\n    otpSentAt\n    updatedAt\n    createdAt\n    passwordUpdatedAt\n    anonymous\n    avatar\n    avatarBackground\n    linkedOauthProviders\n    verificationMethod\n    loginVerificationMethod\n    chatBanUntil\n    xp\n    language\n    intercomToken\n    currentSession {\n      id\n      ip\n      ua\n      os\n      device\n      browser\n      country\n      city\n      updatedAt\n      createdAt\n      refreshedAt\n      lastUsedAt\n      active\n      __typename\n    }\n    account {\n      id\n      balances {\n        currency\n        amount\n        __typename\n      }\n      vaultBalances {\n        currency\n        amount\n        __typename\n      }\n      __typename\n    }\n    raceInfo {\n      id\n      startingWager\n      rank\n      raceEntryId\n      __typename\n    }\n    __typename\n  }\n}"
}
		
	
	fetch('https://' +  window.location.host + '/graphql', {
		method: 'post',
		body:    JSON.stringify(body),
		headers: { 'Content-Type': 'application/json', 'X-Correlation-Id':localStorage.getItem('BROWSER_ID') + "-" + randomString(21) + "-t::" + localStorage.getItem('CORRELATION_USER_ID'), 'Authorization': 'Bearer ' + token},
	})
	.then(res => res.json())
	.then(json => outbals(json))
	.catch(function(err, json) {
		//console.log(err);
		setTimeout(() => {
			//initUser();							
		}, "2000");
	});


}

function outbals(json){

	document.getElementById("wdbMenuCoin").innerHTML = "";
	select = document.getElementById('wdbMenuCoin');
	for (var i = 0; i < json.data.me.account.vaultBalances.length; i++)
	{
		var opt = document.createElement('option');
		opt.value = json.data.me.account.vaultBalances[i].currency;
		opt.innerHTML = json.data.me.account.vaultBalances[i].currency;
		select.appendChild(opt);
		
	}
	selectElement('wdbMenuCoin', currency);
	balance = 0;
	var balanc = document.getElementById("wdbBalance");
	balanc.innerHTML = balance.toFixed(8);
	for (var i = 0; i < json.data.me.account.balances.length; i++)
	{
		if (json.data.me.account.balances[i].currency == currency)
		{
			current_balance = parseFloat(json.data.me.account.balances[i].amount);
			balance = current_balance;
			var balan = document.getElementById("wdbBalance");
			balan.innerHTML = balance.toFixed(8);
			started_bal = balance;

		}
	}
}

function LimboBet(betsize, target_multi){
	var body = {
    "operationName": "LimboPlay",
    "variables": {
        "data": {
            "amount": parseFloat(betsize).toFixed(8),
            "bet": target_multi.toFixed(2),
            "currency": currency.toUpperCase(),
            "windowId": randomString(10)
        }
    },
    "query": "mutation LimboPlay($data: LimboPlayInput!) {\n  limboPlay(data: $data) {\n    id\n    currency\n    amount\n    payout\n    afterBalance\n    shuffleOriginalActions {\n      id\n      action {\n        limbo {\n          resultRaw\n          resultValue\n          userValue\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}"
	}
	fetch('https://' +  window.location.host + '/graphql', {
		method: 'post',
		body:    JSON.stringify(body),
		headers: { 'Content-Type': 'application/json', 'X-Correlation-Id':localStorage.getItem('BROWSER_ID') + "-" + randomString(21) + "-t::" + localStorage.getItem('CORRELATION_USER_ID'), 'Authorization': "Bearer " + token},
	})
	.then(res => res.json())
	.then(json => data(json))
	.catch(function(err, json) {
		//console.log(err, json);
		if(running == true)
		{
			setTimeout(() => {
				if(running){
				LimboBet(betsize, target_multi)
				}				
			}, "1000");
			
		}
	});
	
}

function payoutMultiplierValue(condition, target, edge, maxroll) {
    let payoutM;
    if (condition == "ABOVE") {
        payoutM = (maxroll - edge) / (maxroll - target);
    } else {
        payoutM = (maxroll - edge) / target;
    }
    return parseFloat(payoutM);
}

function op(roll, condition, target) {
    const operations = {
        "ABOVE": roll > target,
        "BELOW": roll < target,
    };
    return operations[condition];
}

function DiceBet(betsize, chance, bethigh){
	
	
	var target = 49.5
	if(bethigh == false){
		target = chance
		cond = "BELOW"
	} else {
		target = 100 - chance
		cond = "ABOVE"
	}
	

	var body = {
    "operationName": "DicePlay",
    "variables": {
        "data": {
            "amount": parseFloat(betsize).toFixed(8),
            "bet": target.toFixed(2),
            "currency": currency.toUpperCase(),
            "direction": cond
        }
    },
    "query": "mutation DicePlay($data: DicePlayInput!) {\n  dicePlay(data: $data) {\n    id\n    currency\n    amount\n    payout\n    afterBalance\n    shuffleOriginalActions {\n      id\n      action {\n        dice {\n          ...DiceFields\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    updatedAt\n    createdAt\n    __typename\n  }\n}\n\nfragment DiceFields on DiceActionModel {\n  userDiceDirection\n  userValue\n  resultValue\n  resultRaw\n  __typename\n}"
	}
	fetch('https://' +  window.location.host + '/graphql', {
		method: 'post',
		body:    JSON.stringify(body),
		headers: { 'Content-Type': 'application/json','X-Correlation-Id':localStorage.getItem('BROWSER_ID') + "-" + randomString(21) + "-t::" + localStorage.getItem('CORRELATION_USER_ID'), 'Authorization': "Bearer " + token},
	})
	.then(res => res.json())
	.then(json => data(json))
	.catch(function(err, json) {
		//console.log(err, json);
		if(running == true)
		{
			setTimeout(() => {
				if(running){
				 DiceBet(betsize, chance, bethigh)		
				}				 
			}, "2000");
			
		}
	});
}

function minebet(betsize, fieldcount, minecount){
	var body = {
    "operationName": "MinesAutoBet",
    "variables": {
        "data": {
            "selected": fieldcount,
            "amount": parseFloat(betsize).toFixed(8),
            "currency": currency.toUpperCase(),
            "minesCount": minecount,
            "autoBetInfo": {
                "sessionId": randomString(10),
                "totalPnl": "0",
                "currentBetCount": 1,
                "metadata": "{\"config\":{\"betCount\":\"0\",\"onWinMode\":\"reset\",\"onLossMode\":\"reset\",\"onWinPercentage\":\"0.00\",\"onLossPercentage\":\"0.00\",\"stopOnProfit\":\"0.00\",\"stopOnLoss\":\"0.00\"}}"
            }
        }
    },
    "query": "mutation MinesAutoBet($data: MinesBetInput!) {\n  minesAuto(data: $data) {\n    ...MinesBetFields\n    __typename\n  }\n}\n\nfragment MinesBetFields on Bet {\n  id\n  amount\n  payout\n  currency\n  multiplier\n  game {\n    id\n    name\n    slug\n    edge\n    __typename\n  }\n  shuffleOriginalActions {\n    id\n    updatedAt\n    createdAt\n    action {\n      mines {\n        minesResult\n        minesCount\n        winMultiplier\n        selected\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n  gameSeedNonce\n  afterBalance\n  __typename\n}"
	}

	fetch('https://' + window.location.host + '/graphql', {
		method: 'post',
		body:    JSON.stringify(body),
		headers: { 'Content-Type': 'application/json','X-Correlation-Id':localStorage.getItem('BROWSER_ID') + "-" + randomString(21) + "-t::" + localStorage.getItem('CORRELATION_USER_ID'), 'Authorization': "Bearer " + token},
	})
	.then(res => res.json())
	.then(json => data(json))
	.catch(function(err, json) {
		//console.log(err);
		if(running == true)
		{
			setTimeout(() => {
				if(running){
				minebet(betsize, fieldcount, minecount)	
				}				
			}, "1000");
			
		}
	});
	
}

function kenobet(betsize, kenoselected, kenorisk){
	let keno_risk = "LOW_RISK"
	if(kenorisk.indexOf("low") >= 0){
		keno_risk = "LOW_RISK"
	}
	if(kenorisk.indexOf("medium") >= 0){
		keno_risk = "MEDIUM_RISK"
	}
	if(kenorisk.indexOf("high") >= 0){
		keno_risk = "HIGH_RISK"
	}
	if(kenorisk.indexOf("classic") >= 0){
		keno_risk = "CLASSIC"
	}
	var body = {
    "operationName": "KenoPlay",
    "variables": {
        "data": {
            "amount": parseFloat(betsize).toFixed(8),
            "currency": currency.toUpperCase(),
            "risk": keno_risk.toUpperCase(),
            "selected": kenoselected,
            "windowId": randomString(10),
            "autoBetInfo": {
                "sessionId": randomString(10),
                "totalPnl": "0",
                "currentBetCount": 1,
                "metadata": "{\"config\":{\"betCount\":\"0\",\"onWinMode\":\"reset\",\"onLossMode\":\"reset\",\"onWinPercentage\":\"0.00\",\"onLossPercentage\":\"0.00\",\"stopOnProfit\":\"0.00\",\"stopOnLoss\":\"0.00\"}}"
            }
        }
    },
    "query": "mutation KenoPlay($data: KenoPlayInput!) {\n  kenoPlay(data: $data) {\n    id\n    amount\n    multiplier\n    currency\n    jackpot\n    payout\n    afterBalance\n    shuffleOriginalActions {\n      id\n      action {\n        keno {\n          results\n          risk\n          multiplier\n          selected\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}"
	}	

	fetch('https://' + window.location.host + '/graphql', {
		method: 'post',
		body:    JSON.stringify(body),
		headers: { 'Content-Type': 'application/json', 'X-Correlation-Id':localStorage.getItem('BROWSER_ID') + "-" + randomString(21) + "-t::" + localStorage.getItem('CORRELATION_USER_ID'), 'Authorization': "Bearer " + token},
	})
	.then(res => res.json())
	.then(json => data(json))
	.catch(function(err, json) {
		//console.log(err);
		if(running == true)
		{
			setTimeout(() => {
				if(running){
				kenobet(betsize, kenoselected, kenorisk)	
				}				
			}, "1000");
			
		}
	});
	
}

function plinkobet(betsize, plinkorows, plinkorisk){
	let plinko_risk = "LOW_RISK"
	if(plinkorisk.indexOf("low") >= 0){
		plinko_risk = "LOW_RISK"
	}
	if(plinkorisk.indexOf("medium") >= 0){
		plinko_risk = "MEDIUM_RISK"
	}
	if(plinkorisk.indexOf("high") >= 0){
		plinko_risk = "HIGH_RISK"
	}
	
	var body = {
    "operationName": "PlinkoPlay",
    "variables": {
        "data": {
            "amount": parseFloat(betsize).toFixed(8),
            "currency": currency.toUpperCase(),
            "risk": plinko_risk,
            "rows": plinkorows,
            "windowId": randomString(10)
        }
    },
    "query": "mutation PlinkoPlay($data: PlinkoPlayInput!) {\n  plinkoPlay(data: $data) {\n    id\n    currency\n    amount\n    multiplier\n    payout\n    shuffleOriginalActions {\n      id\n      action {\n        plinko {\n          risk\n          results\n          rows\n          multiplier\n          __typename\n        }\n        __typename\n      }\n      updatedAt\n      createdAt\n      __typename\n    }\n    afterBalance\n    __typename\n  }\n}"
	}

	fetch('https://' + window.location.host + '/graphql', {
		method: 'post',
		body:    JSON.stringify(body),
		headers: { 'Content-Type': 'application/json', 'X-Correlation-Id':localStorage.getItem('BROWSER_ID') + "-" + randomString(21) + "-t::" + localStorage.getItem('CORRELATION_USER_ID'), 'Authorization': "Bearer " + token},
	})
	.then(res => res.json())
	.then(json => data(json))
	.catch(function(err, json) {
		//console.log(err);
		if(running == true)
		{
			setTimeout(() => {
				if(running){
				plinkobet(betsize, plinkorows, plinkorisk)	
				}				
			}, "1000");
			
		}
	});
	
}

function wheelbet(betsize, wheelsegments, wheelrisk){
	let wheel_segments = "TEN"
	if(wheelsegments == 10){
		wheel_segments = "TEN"
	}
	if(wheelsegments == 20){
		wheel_segments = "TWENTY"
	}
	if(wheelsegments == 30){
		wheel_segments = "THIRTY"
	}
	if(wheelsegments == 40){
		wheel_segments = "FORTY"
	}
	if(wheelsegments == 50){
		wheel_segments = "FIFTY"
	}
	
	var body = {
    "operationName": "WheelPlay",
    "variables": {
        "data": {
            "amount": parseFloat(betsize).toFixed(8),
            "currency": currency.toUpperCase(),
            "risk": wheelrisk.toUpperCase(),
            "segments": wheel_segments,
            "windowId": randomString(10)
        }
    },
    "query": "mutation WheelPlay($data: WheelPlayInput!) {\n  wheelPlay(data: $data) {\n    id\n    currency\n    amount\n    payout\n    createdAt\n    shuffleOriginalActions {\n      id\n      action {\n        wheel {\n          resultRaw\n          resultSegment\n          risk\n          segments\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    afterBalance\n    multiplier\n    __typename\n  }\n}"
	}
	fetch('https://' + window.location.host + '/graphql', {
		method: 'post',
		body:    JSON.stringify(body),
		headers: { 'Content-Type': 'application/json', 'X-Correlation-Id':localStorage.getItem('BROWSER_ID') + "-" + randomString(21) + "-t::" + localStorage.getItem('CORRELATION_USER_ID'), 'Authorization': "Bearer " + token},
	})
	.then(res => res.json())
	.then(json => data(json))
	.catch(function(err, json) {
		//console.log(err);
		if(running == true)
		{
			setTimeout(() => {
				if(running){
				wheelbet(betsize, wheelsegments, wheelrisk)	
				}				
			}, "1000");
			
		}
	});
	
}




function data(json){
	
		if(json.errors != null){
			log(json.errors[0].message)
			//return;
		}
		if(json.data.hasOwnProperty("wheelPlay"))
		{
			
			var table = document.getElementById("wdbHistory");
			var multiplierOut = json.data.wheelPlay.multiplier;
		
			
			lastBet.amount = parseFloat(json.data.wheelPlay.amount);
			lastBet.payoutMultiplier = json.data.wheelPlay.multiplier;
			lastBet.Roll = json.data.wheelPlay.shuffleOriginalActions[0].action.wheel.resultSegment;
			lastBet.payout = parseFloat(json.data.wheelPlay.payout);
			//lastBet.target = json.data.primediceRoll.state.target;
			
		
			
			if(json.data.wheelPlay.multiplier >= 1){
				win = true;
				lastBet.win = true;
				color = "#05f711"
				//win
				winstreak++;
				wins++;
				losestreak = 0;
				document.getElementById("result").innerHTML = json.data.wheelPlay.multiplier.toFixed(2) + "x"
				document.getElementById("result").style.color = color
			} else {

				win = false;
				lastBet.win = false;
				color = "#f72a42"
				losses++;
				losestreak++;
				winstreak = 0;
				document.getElementById("result").innerHTML = json.data.wheelPlay.multiplier.toFixed(2) + "x"
				document.getElementById("result").style.color = color
											
			} 
		
			current_profit = parseFloat(json.data.wheelPlay.payout) - parseFloat(json.data.wheelPlay.amount);
			profit_total += parseFloat(json.data.wheelPlay.payout) - parseFloat(json.data.wheelPlay.amount);
			wagered += parseFloat(json.data.wheelPlay.amount)
			
			var row = document.createElement("tr");
			
			var tdbets = document.createElement("td");
			var tdamount = document.createElement("td");
			var tdhigh = document.createElement("td");
			var tdTargetChance = document.createElement("td");
			var tdRollChance= document.createElement("td");
			var tdProfit = document.createElement("td");
			var tdPayout = document.createElement("td");
			var tdTargetNumber = document.createElement("td");
			var tdRollNumber = document.createElement("td");
			var tdNonce = document.createElement("td");
			var tdBetID = document.createElement("td");
			
			tdbets.innerHTML = wins + losses;
			tdamount.innerHTML = parseFloat(json.data.wheelPlay.amount).toFixed(8)
			
			var tdcheck = document.createElement("input");
			tdcheck.type = "checkbox";
			tdcheck.name = randomString(21);
			if(bethigh){
				tdcheck.checked = true;
			} else {
				tdcheck.checked = false;
			}
			tdcheck.id = randomString(21);
			
			tdhigh.appendChild(tdcheck);
			tdTargetChance.innerHTML = multiplierOut.toFixed(2) + "x"
			
			//json.data.wheelPlay.state.risk + "|" + json.data.wheelPlay.state.rows

	
			tdRollChance.innerHTML = ""
			
			tdProfit.innerHTML = current_profit.toFixed(8)
			
			let playsegments = json.data.wheelPlay.shuffleOriginalActions[0].action.wheel.segments
			let segment_wheel = 10
			if(playsegments == "TEN"){
				segment_wheel = 10
			}
			if(playsegments == "TWENTY"){
				segment_wheel = 20
			}
			if(playsegments == "THIRTY"){
				segment_wheel = 30
			}
			if(playsegments == "FORTY"){
				segment_wheel = 40
			}
			if(playsegments == "FIFTY"){
				segment_wheel = 50
			}

			let gameid = "wheel"

			tdTargetNumber.innerHTML = json.data.wheelPlay.shuffleOriginalActions[0].action.wheel.risk + "|" + segment_wheel

			tdRollNumber.innerHTML = json.data.wheelPlay.shuffleOriginalActions[0].action.wheel.resultSegment;
			tdNonce.innerHTML = gameid;
			tdBetID.innerHTML = json.data.wheelPlay.id;
			tdPayout.innerHTML = parseFloat(json.data.wheelPlay.payout).toFixed(8);
			
			row.appendChild(tdbets);
			row.appendChild(tdNonce);
			row.appendChild(tdamount);
			row.appendChild(tdhigh);
			row.appendChild(tdTargetChance);
			row.appendChild(tdProfit);
			row.appendChild(tdPayout);
			row.appendChild(tdTargetNumber);
			row.appendChild(tdRollNumber);
			row.appendChild(tdRollChance);
			row.appendChild(tdBetID);
					
			

				
			
			
					
			if(win){
				row.style.background = "#91F190";
				if(theme=="black"){
					row.style.background = "#00e701";
					row.style.color = "white";
				}
			} else {
				row.style.background = "#FFC0CB";
				if(theme=="black"){
					row.style.background = "#ed7a68";
					row.style.color = "white";
				}
			}
			
			table.prepend(row);
			
			if (table.rows.length > 50)
			{
				table.deleteRow(table.rows.length - 1);
			}
		
			
			if(winstreak > losestreak){
				currentstreak = winstreak;
			} else {
				currentstreak = -losestreak;
			}
		
			if(highest_bet[highest_bet.length-1] < parseFloat(json.data.wheelPlay.amount)){
				highest_bet.pop();
				highest_bet.push(parseFloat(json.data.wheelPlay.amount));
			}
			if(highest_profit[highest_profit.length-1] < profit_total){
				highest_profit.pop();
				highest_profit.push(profit_total);
			}
			if(lowest_profit[lowest_profit.length-1] > profit_total){
				lowest_profit.pop();
				lowest_profit.push(profit_total);
			}
			if(highest_streak[highest_streak.length-1] < currentstreak){
				highest_streak.pop();
				highest_streak.push(currentstreak);
			}
			if(lowest_streak[lowest_streak.length-1] > currentstreak){
				lowest_streak.pop();
				lowest_streak.push(currentstreak);
			}

			balance = current_balance;
			profit = profit_total;
			previousbet = parseFloat(json.data.wheelPlay.amount);
			currentprofit = current_profit;
			betcount++;
			bets = betcount;
		
			
			updateChart();
			
			
			//document.getElementById("multi").innerHTML = toFixedNo(json.data.limboBet.state.result, 2);
			document.getElementById("wdbProfit").innerHTML = profit_total.toFixed(8);
			document.getElementById("wdbWagered").innerHTML = wagered.toFixed(8);
			document.getElementById("wdbHighProfit").innerHTML = Math.max.apply(null, highest_profit).toFixed(8);
			document.getElementById("wdbHighLose").innerHTML = Math.min.apply(null, lowest_profit).toFixed(8);
			document.getElementById("wdbHighBet").innerHTML = Math.max.apply(null, highest_bet).toFixed(8);
			document.getElementById("wdbBets").innerHTML = wins + " / " + losses + " / " + bets;
			document.getElementById("wdbHighLowStreak").innerHTML = Math.max.apply(null, highest_streak) + " / " + Math.min.apply(null, lowest_streak) + " / " + currentstreak;
			document.getElementById("wdbPercentProfit").innerHTML = (profit_total / started_bal * 100).toFixed(2);
			document.getElementById("wdbPercentWagered").innerHTML = (wagered / started_bal).toFixed(2);
			
								if(profit_total < 0){
										document.getElementById("wdbProfit").style.color = "#f72a42"
										document.getElementById("wdbPercentProfit").style.color = "#f72a42"
								} else {
										if(document.getElementById("themebot").value == "dark" || document.getElementById("themebot").value == "blue" || document.getElementById("themebot").value == "black"){
										document.getElementById("wdbProfit").style.color = "#05f711"
										document.getElementById("wdbPercentProfit").style.color = "#05f711"
									} else {
										document.getElementById("wdbProfit").style.color = "green"
										document.getElementById("wdbPercentProfit").style.color = "green"
									}
								}
			
			
			lastBet.percent = (profit_total / started_bal * 100)
						
		}
		if(json.data.hasOwnProperty("plinkoPlay"))
		{
			
			var table = document.getElementById("wdbHistory");
			var multiplierOut = json.data.plinkoPlay.multiplier;
		
			
			lastBet.amount = parseFloat(json.data.plinkoPlay.amount);
			lastBet.payoutMultiplier = json.data.plinkoPlay.multiplier;
			//lastBet.Roll = json.data.plinkoPlay.state.result;
			lastBet.payout = parseFloat(json.data.plinkoPlay.payout);
			//lastBet.target = json.data.primediceRoll.state.target;
			
			let gameid = "plinko"
			
			if(multiplierOut >= 1){
				win = true;
				lastBet.win = true;
				color = "#05f711"
				//win
				winstreak++;
				wins++;
				losestreak = 0;
				document.getElementById("result").innerHTML = json.data.plinkoPlay.multiplier.toFixed(2) + "x"
				document.getElementById("result").style.color = color
			} else {

				win = false;
				lastBet.win = false;
				color = "#f72a42"
				losses++;
				losestreak++;
				winstreak = 0;
				document.getElementById("result").innerHTML = json.data.plinkoPlay.multiplier.toFixed(2) + "x"
				document.getElementById("result").style.color = color
											
			} 
		
			current_profit = parseFloat(json.data.plinkoPlay.payout) - parseFloat(json.data.plinkoPlay.amount);
			profit_total += parseFloat(json.data.plinkoPlay.payout) - parseFloat(json.data.plinkoPlay.amount);
			wagered += parseFloat(json.data.plinkoPlay.amount);
			
			var row = document.createElement("tr");
			
			var tdbets = document.createElement("td");
			var tdamount = document.createElement("td");
			var tdhigh = document.createElement("td");
			var tdTargetChance = document.createElement("td");
			var tdRollChance= document.createElement("td");
			var tdProfit = document.createElement("td");
			var tdPayout = document.createElement("td");
			var tdTargetNumber = document.createElement("td");
			var tdRollNumber = document.createElement("td");
			var tdNonce = document.createElement("td");
			var tdBetID = document.createElement("td");
			
			tdbets.innerHTML = wins + losses;
			tdamount.innerHTML = parseFloat(json.data.plinkoPlay.amount).toFixed(8)
			
			var tdcheck = document.createElement("input");
			tdcheck.type = "checkbox";
			tdcheck.name = randomString(21);
			if(bethigh){
				tdcheck.checked = true;
			} else {
				tdcheck.checked = false;
			}
			tdcheck.id = randomString(21);
			
			tdhigh.appendChild(tdcheck);
			tdTargetChance.innerHTML = multiplierOut.toFixed(2) + "x"
			
			//json.data.plinkoPlay.state.risk + "|" + json.data.plinkoPlay.state.rows

	
			tdRollChance.innerHTML = ""
			
			tdProfit.innerHTML = current_profit.toFixed(8)

			tdTargetNumber.innerHTML = json.data.plinkoPlay.shuffleOriginalActions[0].action.plinko.risk + "|" + json.data.plinkoPlay.shuffleOriginalActions[0].action.plinko.rows

			tdRollNumber.innerHTML = multiplierOut.toFixed(2)
			tdNonce.innerHTML = gameid;
			tdBetID.innerHTML = json.data.plinkoPlay.id;
			tdPayout.innerHTML = parseFloat(json.data.plinkoPlay.payout).toFixed(8);
			
			row.appendChild(tdbets);
			row.appendChild(tdNonce);
			row.appendChild(tdamount);
			row.appendChild(tdhigh);
			row.appendChild(tdTargetChance);
			row.appendChild(tdProfit);
			row.appendChild(tdPayout);
			row.appendChild(tdTargetNumber);
			row.appendChild(tdRollNumber);
			row.appendChild(tdRollChance);
			row.appendChild(tdBetID);
					
			

				
			
			
			
			if(win){
				row.style.background = "#91F190";
				if(theme=="black"){
					row.style.background = "#00e701";
					row.style.color = "white";
				}
			} else {
				row.style.background = "#FFC0CB";
				if(theme=="black"){
					row.style.background = "#ed7a68";
					row.style.color = "white";
				}
			}
			
			table.prepend(row);
			
			if (table.rows.length > 50)
			{
				table.deleteRow(table.rows.length - 1);
			}
		
			
			if(winstreak > losestreak){
				currentstreak = winstreak;
			} else {
				currentstreak = -losestreak;
			}
		
			if(highest_bet[highest_bet.length-1] < parseFloat(json.data.plinkoPlay.amount)){
				highest_bet.pop();
				highest_bet.push(parseFloat(json.data.plinkoPlay.amount));
			}
			if(highest_profit[highest_profit.length-1] < profit_total){
				highest_profit.pop();
				highest_profit.push(profit_total);
			}
			if(lowest_profit[lowest_profit.length-1] > profit_total){
				lowest_profit.pop();
				lowest_profit.push(profit_total);
			}
			if(highest_streak[highest_streak.length-1] < currentstreak){
				highest_streak.pop();
				highest_streak.push(currentstreak);
			}
			if(lowest_streak[lowest_streak.length-1] > currentstreak){
				lowest_streak.pop();
				lowest_streak.push(currentstreak);
			}

			balance = current_balance;
			profit = profit_total;
			previousbet = parseFloat(json.data.plinkoPlay.amount);
			currentprofit = current_profit;
			betcount++;
			bets = betcount;
		
			
			updateChart();
			
			
			//document.getElementById("multi").innerHTML = toFixedNo(json.data.limboBet.state.result, 2);
			document.getElementById("wdbProfit").innerHTML = profit_total.toFixed(8);
			document.getElementById("wdbWagered").innerHTML = wagered.toFixed(8);
			document.getElementById("wdbHighProfit").innerHTML = Math.max.apply(null, highest_profit).toFixed(8);
			document.getElementById("wdbHighLose").innerHTML = Math.min.apply(null, lowest_profit).toFixed(8);
			document.getElementById("wdbHighBet").innerHTML = Math.max.apply(null, highest_bet).toFixed(8);
			document.getElementById("wdbBets").innerHTML = wins + " / " + losses + " / " + bets;
			document.getElementById("wdbHighLowStreak").innerHTML = Math.max.apply(null, highest_streak) + " / " + Math.min.apply(null, lowest_streak) + " / " + currentstreak;
			document.getElementById("wdbPercentProfit").innerHTML = (profit_total / started_bal * 100).toFixed(2);
			document.getElementById("wdbPercentWagered").innerHTML = (wagered / started_bal).toFixed(2);
			
								if(profit_total < 0){
										document.getElementById("wdbProfit").style.color = "#f72a42"
										document.getElementById("wdbPercentProfit").style.color = "#f72a42"
								} else {
										if(document.getElementById("themebot").value == "dark" || document.getElementById("themebot").value == "blue" || document.getElementById("themebot").value == "black"){
										document.getElementById("wdbProfit").style.color = "#05f711"
										document.getElementById("wdbPercentProfit").style.color = "#05f711"
									} else {
										document.getElementById("wdbProfit").style.color = "green"
										document.getElementById("wdbPercentProfit").style.color = "green"
									}
								}
			
			
			lastBet.percent = (profit_total / started_bal * 100)
			
			
		}
		if(json.data.hasOwnProperty("kenoPlay"))
		{
			
			var table = document.getElementById("wdbHistory");
			var multiplierOut = json.data.kenoPlay.multiplier;
			
			lastBet.amount = parseFloat(json.data.kenoPlay.amount);
			lastBet.payoutMultiplier = json.data.kenoPlay.multiplier;
			//lastBet.Roll = json.data.kenoPlay.state.result;
			lastBet.payout = parseFloat(json.data.kenoPlay.payout);
			//lastBet.target = json.data.primediceRoll.state.target;
			
			let gameid = "keno"
			var rounds = json.data.kenoPlay.shuffleOriginalActions[0].action.keno.results;
			var kenofield =  json.data.kenoPlay.shuffleOriginalActions[0].action.keno.selected;
			//var riskkeno = json.data.kenoPlay.shuffleOriginalActions[0].action.keno.risk;
			
			var hitkeno = kenofield.filter(function(n) {
				return rounds.indexOf(n) !== -1;
			});
			
			if(json.data.kenoPlay.multiplier >= 1){
				win = true;
				lastBet.win = true;
				color = "#05f711"
				//win
				winstreak++;
				wins++;
				losestreak = 0;
				document.getElementById("result").innerHTML = json.data.kenoPlay.multiplier.toFixed(2) + "x"
				document.getElementById("result").style.color = color
			} else {

				win = false;
				lastBet.win = false;
				color = "#f72a42"
				losses++;
				losestreak++;
				winstreak = 0;
				document.getElementById("result").innerHTML = json.data.kenoPlay.multiplier.toFixed(2) + "x"
				document.getElementById("result").style.color = color
											
			} 
		
			current_profit = parseFloat(json.data.kenoPlay.payout) - parseFloat(json.data.kenoPlay.amount);
			profit_total += parseFloat(json.data.kenoPlay.payout) - parseFloat(json.data.kenoPlay.amount);
			wagered += parseFloat(json.data.kenoPlay.amount);
			
			var row = document.createElement("tr");
			
			var tdbets = document.createElement("td");
			var tdamount = document.createElement("td");
			var tdhigh = document.createElement("td");
			var tdTargetChance = document.createElement("td");
			var tdRollChance= document.createElement("td");
			var tdProfit = document.createElement("td");
			var tdPayout = document.createElement("td");
			var tdTargetNumber = document.createElement("td");
			var tdRollNumber = document.createElement("td");
			var tdNonce = document.createElement("td");
			var tdBetID = document.createElement("td");
			
			tdbets.innerHTML = wins + losses;
			tdamount.innerHTML = parseFloat(json.data.kenoPlay.amount).toFixed(8)
			
			var tdcheck = document.createElement("input");
			tdcheck.type = "checkbox";
			tdcheck.name = randomString(21);
			if(bethigh){
				tdcheck.checked = true;
			} else {
				tdcheck.checked = false;
			}
			tdcheck.id = randomString(21);
			
			tdhigh.appendChild(tdcheck);
			tdTargetChance.innerHTML = multiplierOut.toFixed(2) + "x"

			let hitnumbers = hitkeno
			if(hitnumbers == "undefined") {
				hitnumbers = ""
			} else {
				hitnumbers = hitkeno
			}
			tdRollChance.innerHTML = ""
			
			tdProfit.innerHTML = current_profit.toFixed(8)

			tdTargetNumber.innerHTML = risk + "|" + kenofield.length

			tdRollNumber.innerHTML = hitkeno.length + "x"
			tdNonce.innerHTML = gameid;
			tdBetID.innerHTML = json.data.kenoPlay.id;
			tdPayout.innerHTML = parseFloat(json.data.kenoPlay.payout).toFixed(8);
			
			row.appendChild(tdbets);
			row.appendChild(tdNonce);
			row.appendChild(tdamount);
			row.appendChild(tdhigh);
			row.appendChild(tdTargetChance);
			row.appendChild(tdProfit);
			row.appendChild(tdPayout);
			row.appendChild(tdTargetNumber);
			row.appendChild(tdRollNumber);
			row.appendChild(tdRollChance);
			row.appendChild(tdBetID);
					
			

				
			
			
			
			if(win){
				row.style.background = "#91F190";
				if(theme=="black"){
					row.style.background = "#00e701";
					row.style.color = "white";
				}
			} else {
				row.style.background = "#FFC0CB";
				if(theme=="black"){
					row.style.background = "#ed7a68";
					row.style.color = "white";
				}
			}			
			table.prepend(row);
			
			if (table.rows.length > 50)
			{
				table.deleteRow(table.rows.length - 1);
			}
		
			
			if(winstreak > losestreak){
				currentstreak = winstreak;
			} else {
				currentstreak = -losestreak;
			}
		
			if(highest_bet[highest_bet.length-1] < parseFloat(json.data.kenoPlay.amount)){
				highest_bet.pop();
				highest_bet.push(parseFloat(json.data.kenoPlay.amount));
			}
			if(highest_profit[highest_profit.length-1] < profit_total){
				highest_profit.pop();
				highest_profit.push(profit_total);
			}
			if(lowest_profit[lowest_profit.length-1] > profit_total){
				lowest_profit.pop();
				lowest_profit.push(profit_total);
			}
			if(highest_streak[highest_streak.length-1] < currentstreak){
				highest_streak.pop();
				highest_streak.push(currentstreak);
			}
			if(lowest_streak[lowest_streak.length-1] > currentstreak){
				lowest_streak.pop();
				lowest_streak.push(currentstreak);
			}

			balance = current_balance;
			profit = profit_total;
			previousbet = json.data.kenoPlay.amount;
			currentprofit = current_profit;
			betcount++;
			bets = betcount;
		
			
			updateChart();
			
			
			//document.getElementById("multi").innerHTML = toFixedNo(json.data.limboBet.state.result, 2);
			document.getElementById("wdbProfit").innerHTML = profit_total.toFixed(8);
			document.getElementById("wdbWagered").innerHTML = wagered.toFixed(8);
			document.getElementById("wdbHighProfit").innerHTML = Math.max.apply(null, highest_profit).toFixed(8);
			document.getElementById("wdbHighLose").innerHTML = Math.min.apply(null, lowest_profit).toFixed(8);
			document.getElementById("wdbHighBet").innerHTML = Math.max.apply(null, highest_bet).toFixed(8);
			document.getElementById("wdbBets").innerHTML = wins + " / " + losses + " / " + bets;
			document.getElementById("wdbHighLowStreak").innerHTML = Math.max.apply(null, highest_streak) + " / " + Math.min.apply(null, lowest_streak) + " / " + currentstreak;
			document.getElementById("wdbPercentProfit").innerHTML = (profit_total / started_bal * 100).toFixed(2);
			document.getElementById("wdbPercentWagered").innerHTML = (wagered / started_bal).toFixed(2);
			
								if(profit_total < 0){
										document.getElementById("wdbProfit").style.color = "#f72a42"
										document.getElementById("wdbPercentProfit").style.color = "#f72a42"
								} else {
										if(document.getElementById("themebot").value == "dark" || document.getElementById("themebot").value == "blue" || document.getElementById("themebot").value == "black"){
										document.getElementById("wdbProfit").style.color = "#05f711"
										document.getElementById("wdbPercentProfit").style.color = "#05f711"
									} else {
										document.getElementById("wdbProfit").style.color = "green"
										document.getElementById("wdbPercentProfit").style.color = "green"
									}
								}
			
			
			lastBet.percent = (profit_total / started_bal * 100)
					
		}
		if(json.data.hasOwnProperty("minesAuto"))
		{
			
			var table = document.getElementById("wdbHistory");
			var multiplierOut = json.data.minesAuto.multiplier;
			
			
			lastBet.amount = parseFloat(json.data.minesAuto.amount);
			lastBet.payoutMultiplier = json.data.minesAuto.multiplier;
			//lastBet.Roll = json.data.minesAuto.state.result;
			lastBet.payout = parseFloat(json.data.minesAuto.payout);
			//lastBet.target = json.data.primediceRoll.state.target;
			
			let gameid = "mines"
			var selectedfields = json.data.minesAuto.shuffleOriginalActions[0].action.mines.selected;
			var minefield =  json.data.minesAuto.shuffleOriginalActions[0].action.mines.minesResult;
			
			
			var hitmines = selectedfields.filter(function(n) {
				return minefield.indexOf(n) !== -1;
			});
			
			if(json.data.minesAuto.multiplier > 0){
				win = true;
				lastBet.win = true;
				color = "#05f711"
				//win
				winstreak++;
				wins++;
				losestreak = 0;
				document.getElementById("result").innerHTML = json.data.minesAuto.multiplier.toFixed(2) + "x"
				document.getElementById("result").style.color = color
			} else {

				win = false;
				lastBet.win = false;
				color = "#f72a42"
				losses++;
				losestreak++;
				winstreak = 0;
				document.getElementById("result").innerHTML = json.data.minesAuto.multiplier.toFixed(2) + "x"
				document.getElementById("result").style.color = color
											
			} 
		
			current_profit = parseFloat(json.data.minesAuto.payout) - parseFloat(json.data.minesAuto.amount);
			profit_total += parseFloat(json.data.minesAuto.payout) - parseFloat(json.data.minesAuto.amount);
			wagered += parseFloat(json.data.minesAuto.amount);
			
			var row = document.createElement("tr");
			
			var tdbets = document.createElement("td");
			var tdamount = document.createElement("td");
			var tdhigh = document.createElement("td");
			var tdTargetChance = document.createElement("td");
			var tdRollChance= document.createElement("td");
			var tdProfit = document.createElement("td");
			var tdPayout = document.createElement("td");
			var tdTargetNumber = document.createElement("td");
			var tdRollNumber = document.createElement("td");
			var tdNonce = document.createElement("td");
			var tdBetID = document.createElement("td");
			
			tdbets.innerHTML = wins + losses;
			tdamount.innerHTML = parseFloat(json.data.minesAuto.amount).toFixed(8)
			
			var tdcheck = document.createElement("input");
			tdcheck.type = "checkbox";
			tdcheck.name = randomString(21);
			if(bethigh){
				tdcheck.checked = true;
			} else {
				tdcheck.checked = false;
			}
			tdcheck.id = randomString(21);
			
			tdhigh.appendChild(tdcheck);
			tdTargetChance.innerHTML = multiplierOut.toFixed(2) + "x"

			tdRollChance.innerHTML = ""
			
			tdProfit.innerHTML = current_profit.toFixed(8)

			tdTargetNumber.innerHTML = minefield.length + "|" + selectedfields.length

			tdRollNumber.innerHTML = hitmines
			tdNonce.innerHTML = gameid;
			tdBetID.innerHTML = json.data.minesAuto.id;
			tdPayout.innerHTML = parseFloat(json.data.minesAuto.payout).toFixed(8);
			
			row.appendChild(tdbets);
			row.appendChild(tdNonce);
			row.appendChild(tdamount);
			row.appendChild(tdhigh);
			row.appendChild(tdTargetChance);
			row.appendChild(tdProfit);
			row.appendChild(tdPayout);
			row.appendChild(tdTargetNumber);
			row.appendChild(tdRollNumber);
			row.appendChild(tdRollChance);
			row.appendChild(tdBetID);
					
			

				
			
			
			
			if(win){
				row.style.background = "#91F190";
				if(theme=="black"){
					row.style.background = "#00e701";
					row.style.color = "white";
				}
			} else {
				row.style.background = "#FFC0CB";
				if(theme=="black"){
					row.style.background = "#ed7a68";
					row.style.color = "white";
				}
			}
			
			table.prepend(row);
			
			if (table.rows.length > 50)
			{
				table.deleteRow(table.rows.length - 1);
			}
		
			
			if(winstreak > losestreak){
				currentstreak = winstreak;
			} else {
				currentstreak = -losestreak;
			}
		
			if(highest_bet[highest_bet.length-1] < parseFloat(json.data.minesAuto.amount)){
				highest_bet.pop();
				highest_bet.push(parseFloat(json.data.minesAuto.amount));
			}
			if(highest_profit[highest_profit.length-1] < profit_total){
				highest_profit.pop();
				highest_profit.push(profit_total);
			}
			if(lowest_profit[lowest_profit.length-1] > profit_total){
				lowest_profit.pop();
				lowest_profit.push(profit_total);
			}
			if(highest_streak[highest_streak.length-1] < currentstreak){
				highest_streak.pop();
				highest_streak.push(currentstreak);
			}
			if(lowest_streak[lowest_streak.length-1] > currentstreak){
				lowest_streak.pop();
				lowest_streak.push(currentstreak);
			}

			balance = current_balance;
			profit = profit_total;
			previousbet = parseFloat(json.data.minesAuto.amount);
			currentprofit = current_profit;
			betcount++;
			bets = betcount;
		
			
			updateChart();
			
			
			//document.getElementById("multi").innerHTML = toFixedNo(json.data.limboBet.state.result, 2);
			document.getElementById("wdbProfit").innerHTML = profit_total.toFixed(8);
			document.getElementById("wdbWagered").innerHTML = wagered.toFixed(8);
			document.getElementById("wdbHighProfit").innerHTML = Math.max.apply(null, highest_profit).toFixed(8);
			document.getElementById("wdbHighLose").innerHTML = Math.min.apply(null, lowest_profit).toFixed(8);
			document.getElementById("wdbHighBet").innerHTML = Math.max.apply(null, highest_bet).toFixed(8);
			document.getElementById("wdbBets").innerHTML = wins + " / " + losses + " / " + bets;
			document.getElementById("wdbHighLowStreak").innerHTML = Math.max.apply(null, highest_streak) + " / " + Math.min.apply(null, lowest_streak) + " / " + currentstreak;
			document.getElementById("wdbPercentProfit").innerHTML = (profit_total / started_bal * 100).toFixed(2);
			document.getElementById("wdbPercentWagered").innerHTML = (wagered / started_bal).toFixed(2);
			
								if(profit_total < 0){
										document.getElementById("wdbProfit").style.color = "#f72a42"
										document.getElementById("wdbPercentProfit").style.color = "#f72a42"
								} else {
										if(document.getElementById("themebot").value == "dark" || document.getElementById("themebot").value == "blue" || document.getElementById("themebot").value == "black"){
										document.getElementById("wdbProfit").style.color = "#05f711"
										document.getElementById("wdbPercentProfit").style.color = "#05f711"
									} else {
										document.getElementById("wdbProfit").style.color = "green"
										document.getElementById("wdbPercentProfit").style.color = "green"
									}
								}
			
			
			lastBet.percent = (profit_total / started_bal * 100)
			
			
			
		}
		if(json.data.hasOwnProperty("dicePlay"))
		{
			
			var table = document.getElementById("wdbHistory");
			lastBet.amount = parseFloat(json.data.dicePlay.amount);
			
			lastBet.Roll = parseFloat(json.data.dicePlay.shuffleOriginalActions[0].action.dice.resultValue);
			lastBet.payout = parseFloat(json.data.dicePlay.payout);
			lastBet.target = parseFloat(json.data.dicePlay.shuffleOriginalActions[0].action.dice.userValue);
			
			let gameid = "dice"
			let conditionDice = json.data.dicePlay.shuffleOriginalActions[0].action.dice.userDiceDirection;
			
			if(conditionDice == "BELOW"){
				bethigh = false;
			} else {
				bethigh = true;
			}
			
			if(bethigh == false){
				lastBet.chance = lastBet.target
			} else {
				lastBet.chance = 100 - lastBet.target
			}
			
			
			let multiplierDice = payoutMultiplierValue(conditionDice, parseFloat(json.data.dicePlay.shuffleOriginalActions[0].action.dice.userValue), 1, 100) 
			
			//log(multiplierDice)
			
			lastBet.payoutMultiplier = multiplierDice
			
			if(op(parseFloat(json.data.dicePlay.shuffleOriginalActions[0].action.dice.resultValue), conditionDice, parseFloat(json.data.dicePlay.shuffleOriginalActions[0].action.dice.userValue))){
				win = true;
				lastBet.win = true;
				color = "#05f711"
				//win
				winstreak++;
				wins++;
				losestreak = 0;
				document.getElementById("result").innerHTML = lastBet.Roll.toFixed(2)
				document.getElementById("result").style.color = color	
			} else {

				win = false;
				lastBet.win = false;
				color = "#f72a42"
				losses++;
				losestreak++;
				winstreak = 0;
				lastBet.payoutMultiplier = 0;
				multiplierDice = 0
				document.getElementById("result").innerHTML = lastBet.Roll.toFixed(2)
				document.getElementById("result").style.color = color
											
			} 
		
			current_profit = parseFloat(json.data.dicePlay.payout) - parseFloat(json.data.dicePlay.amount);
			profit_total += parseFloat(json.data.dicePlay.payout) - parseFloat(json.data.dicePlay.amount);
			wagered += parseFloat(json.data.dicePlay.amount);
			
			var row = document.createElement("tr");
			
			var tdbets = document.createElement("td");
			var tdamount = document.createElement("td");
			var tdhigh = document.createElement("td");
			var tdTargetChance = document.createElement("td");
			var tdRollChance= document.createElement("td");
			var tdProfit = document.createElement("td");
			var tdPayout = document.createElement("td");
			var tdTargetNumber = document.createElement("td");
			var tdRollNumber = document.createElement("td");
			var tdNonce = document.createElement("td");
			var tdBetID = document.createElement("td");
			
			tdbets.innerHTML = wins + losses;
			tdamount.innerHTML = lastBet.amount.toFixed(8)
			
			
			var tdcheck = document.createElement("input");
			tdcheck.type = "checkbox";
			tdcheck.name = randomString(21);
			if(bethigh){
				tdcheck.checked = true;
			} else {
				tdcheck.checked = false;
			}
			tdcheck.id = randomString(21);
			
			tdhigh.appendChild(tdcheck);
			tdTargetChance.innerHTML = multiplierDice.toFixed(2) + "x"
			
			
			
			if(bethigh == false){
				//tdRollChance.innerHTML = json.data.dicePlay.state.result.toFixed(4)
			} else {
				//tdRollChance.innerHTML = (100 - json.data.dicePlay.state.result).toFixed(4)
			}
			
			tdProfit.innerHTML = current_profit.toFixed(8)
			if(bethigh){
				lastBet.targetNumber = (99 / (lastBet.chance));
				tdTargetNumber.innerHTML = ">" + (99 / (lastBet.chance)).toFixed(4)
			} else {
				lastBet.targetNumber = (99 / lastBet.chance);
				tdTargetNumber.innerHTML = ">" + (99 / lastBet.chance).toFixed(4)
			}
			tdRollNumber.innerHTML = lastBet.Roll.toFixed(2)
			tdNonce.innerHTML = gameid;
			tdBetID.innerHTML = json.data.dicePlay.id;
			tdPayout.innerHTML = lastBet.payout.toFixed(8);
			
			
			
			
			row.appendChild(tdbets);
			row.appendChild(tdNonce);
			row.appendChild(tdamount);
			row.appendChild(tdhigh);
			row.appendChild(tdTargetChance);
			row.appendChild(tdProfit);
			row.appendChild(tdPayout);
			row.appendChild(tdTargetNumber);
			row.appendChild(tdRollNumber);
			row.appendChild(tdRollChance);
			row.appendChild(tdBetID);			
					
			

				
			
			
			if(win){
				row.style.background = "#91F190";
				if(theme=="black"){
					row.style.background = "#00e701";
					row.style.color = "white";
				}
			} else {
				row.style.background = "#FFC0CB";
				if(theme=="black"){
					row.style.background = "#ed7a68";
					row.style.color = "white";
				}
			}
			
			table.prepend(row);
			
			if (table.rows.length > 50)
			{
				table.deleteRow(table.rows.length - 1);
			}
		
			
			if(winstreak > losestreak){
				currentstreak = winstreak;
			} else {
				currentstreak = -losestreak;
			}
		
			if(highest_bet[highest_bet.length-1] < parseFloat(json.data.dicePlay.amount)){
				highest_bet.pop();
				highest_bet.push(parseFloat(json.data.dicePlay.amount));
			}
			if(highest_profit[highest_profit.length-1] < profit_total){
				highest_profit.pop();
				highest_profit.push(profit_total);
			}
			if(lowest_profit[lowest_profit.length-1] > profit_total){
				lowest_profit.pop();
				lowest_profit.push(profit_total);
			}
			if(highest_streak[highest_streak.length-1] < currentstreak){
				highest_streak.pop();
				highest_streak.push(currentstreak);
			}
			if(lowest_streak[lowest_streak.length-1] > currentstreak){
				lowest_streak.pop();
				lowest_streak.push(currentstreak);
			}

			balance = current_balance;
			profit = profit_total;
			previousbet = parseFloat(json.data.dicePlay.amount);
			currentprofit = current_profit;
			betcount++;
			bets = betcount;
		
			
			updateChart();
			
			
			//document.getElementById("multi").innerHTML = toFixedNo(json.data.limboBet.state.result, 2);
			document.getElementById("wdbProfit").innerHTML = profit_total.toFixed(8);
			document.getElementById("wdbWagered").innerHTML = wagered.toFixed(8);
			document.getElementById("wdbHighProfit").innerHTML = Math.max.apply(null, highest_profit).toFixed(8);
			document.getElementById("wdbHighLose").innerHTML = Math.min.apply(null, lowest_profit).toFixed(8);
			document.getElementById("wdbHighBet").innerHTML = Math.max.apply(null, highest_bet).toFixed(8);
			document.getElementById("wdbBets").innerHTML = wins + " / " + losses + " / " + bets;
			document.getElementById("wdbHighLowStreak").innerHTML = Math.max.apply(null, highest_streak) + " / " + Math.min.apply(null, lowest_streak) + " / " + currentstreak;
			document.getElementById("wdbPercentProfit").innerHTML = (profit_total / started_bal * 100).toFixed(2);
			document.getElementById("wdbPercentWagered").innerHTML = (wagered / started_bal).toFixed(2);			
			
								if(profit_total < 0){
										document.getElementById("wdbProfit").style.color = "#f72a42"
										document.getElementById("wdbPercentProfit").style.color = "#f72a42"
								} else {
										if(document.getElementById("themebot").value == "dark" || document.getElementById("themebot").value == "blue" || document.getElementById("themebot").value == "black"){
										document.getElementById("wdbProfit").style.color = "#05f711"
										document.getElementById("wdbPercentProfit").style.color = "#05f711"
									} else {
										document.getElementById("wdbProfit").style.color = "green"
										document.getElementById("wdbPercentProfit").style.color = "green"
									}
								}
								
			
			lastBet.percent = (profit_total / started_bal * 100)
			
		}
		if(json.data.hasOwnProperty("limboPlay"))
		{
			
			var table = document.getElementById("wdbHistory");
			var multiplierOut = parseFloat(json.data.limboPlay.shuffleOriginalActions[0].action.limbo.resultValue);
			//var current_result = json.data.limboPlay.state.result.toFixed(2);
			var multiplierTarget =  parseFloat(json.data.limboPlay.shuffleOriginalActions[0].action.limbo.userValue);
			
			lastBet.amount = parseFloat(json.data.limboPlay.amount);
			lastBet.Roll = parseFloat(json.data.limboPlay.shuffleOriginalActions[0].action.limbo.resultValue);
			lastBet.chance = 99 / multiplierTarget;
			lastBet.payout = parseFloat(json.data.limboPlay.payout);
			lastBet.target = multiplierTarget;
			
			let gameid = "limbo"
			
			if(multiplierOut > multiplierTarget){
				win = true;
				lastBet.win = true;
				color = "#05f711"
				//win
				winstreak++;
				wins++;
				losestreak = 0;
				lastBet.payoutMultiplier = multiplierTarget;
				document.getElementById("result").innerHTML = multiplierOut.toFixed(2) + "x"
				document.getElementById("result").style.color = color
			} else {

				win = false;
				lastBet.win = false;
				color = "#f72a42"
				losses++;
				losestreak++;
				winstreak = 0;
				lastBet.payoutMultiplier = 0;
				document.getElementById("result").innerHTML = multiplierOut.toFixed(2) + "x"
				document.getElementById("result").style.color = color
											
			} 
		
			current_profit = parseFloat(json.data.limboPlay.payout) - parseFloat(json.data.limboPlay.amount);
			profit_total += parseFloat(json.data.limboPlay.payout) - parseFloat(json.data.limboPlay.amount);
			wagered += parseFloat(json.data.limboPlay.amount);
			
			var row = document.createElement("tr");
			
			var tdbets = document.createElement("td");
			var tdamount = document.createElement("td");
			var tdhigh = document.createElement("td");
			var tdTargetChance = document.createElement("td");
			var tdRollChance= document.createElement("td");
			var tdProfit = document.createElement("td");
			var tdPayout = document.createElement("td");
			var tdTargetNumber = document.createElement("td");
			var tdRollNumber = document.createElement("td");
			var tdNonce = document.createElement("td");
			var tdBetID = document.createElement("td");
			
			tdbets.innerHTML = wins + losses;
			tdamount.innerHTML = parseFloat(json.data.limboPlay.amount).toFixed(8)
			
			var tdcheck = document.createElement("input");
			tdcheck.type = "checkbox";
			tdcheck.name = randomString(21);
			tdcheck.checked = "checked";
			tdcheck.id = randomString(21);
			
			tdhigh.appendChild(tdcheck);
			tdTargetChance.innerHTML = lastBet.payoutMultiplier.toFixed(2) + "x"
			//tdRollChance.innerHTML = (99 / json.data.limboPlay.state.result).toFixed(4)
			tdProfit.innerHTML = current_profit.toFixed(8)
			tdTargetNumber.innerHTML = ">" + multiplierTarget.toFixed(4)
			lastBet.targetNumber = multiplierTarget;
			tdRollNumber.innerHTML = multiplierOut.toFixed(2)
			tdNonce.innerHTML = gameid;
			tdBetID.innerHTML = json.data.limboPlay.id;
			tdPayout.innerHTML = parseFloat(json.data.limboPlay.payout).toFixed(8);
			
			row.appendChild(tdbets);
			row.appendChild(tdNonce);
			row.appendChild(tdamount);
			row.appendChild(tdhigh);
			row.appendChild(tdTargetChance);
			row.appendChild(tdProfit);
			row.appendChild(tdPayout);
			row.appendChild(tdTargetNumber);
			row.appendChild(tdRollNumber);
			row.appendChild(tdRollChance);
			row.appendChild(tdBetID);	
					
			
			
			if(win){
				row.style.background = "#91F190";
				if(theme=="black"){
					row.style.background = "#00e701";
					row.style.color = "white";
				}
			} else {
				row.style.background = "#FFC0CB";
				if(theme=="black"){
					row.style.background = "#ed7a68";
					row.style.color = "white";
				}
			}
			
			table.prepend(row);
			
			if (table.rows.length > 50)
			{
				table.deleteRow(table.rows.length - 1);
			}
		
			
			if(winstreak > losestreak){
				currentstreak = winstreak;
			} else {
				currentstreak = -losestreak;
			}
		
			if(highest_bet[highest_bet.length-1] < parseFloat(json.data.limboPlay.amount)){
				highest_bet.pop();
				highest_bet.push(parseFloat(json.data.limboPlay.amount));
			}
			if(highest_profit[highest_profit.length-1] < profit_total){
				highest_profit.pop();
				highest_profit.push(profit_total);
			}
			if(lowest_profit[lowest_profit.length-1] > profit_total){
				lowest_profit.pop();
				lowest_profit.push(profit_total);
			}
			if(highest_streak[highest_streak.length-1] < currentstreak){
				highest_streak.pop();
				highest_streak.push(currentstreak);
			}
			if(lowest_streak[lowest_streak.length-1] > currentstreak){
				lowest_streak.pop();
				lowest_streak.push(currentstreak);
			}

			balance = current_balance;
			profit = profit_total;
			previousbet = parseFloat(json.data.limboPlay.amount);
			currentprofit = current_profit;
			betcount++;
			bets = betcount;
			//chance = 99 / multiplierTarget;

			
			updateChart();
			
			
			//document.getElementById("multi").innerHTML = toFixedNo(json.data.limboPlay.state.result, 2);
			document.getElementById("wdbProfit").innerHTML = profit_total.toFixed(8);
			document.getElementById("wdbWagered").innerHTML = wagered.toFixed(8);
			document.getElementById("wdbHighProfit").innerHTML = Math.max.apply(null, highest_profit).toFixed(8);
			document.getElementById("wdbHighLose").innerHTML = Math.min.apply(null, lowest_profit).toFixed(8);
			document.getElementById("wdbHighBet").innerHTML = Math.max.apply(null, highest_bet).toFixed(8);
			document.getElementById("wdbBets").innerHTML = wins + " / " + losses + " / " + bets;
			document.getElementById("wdbHighLowStreak").innerHTML = Math.max.apply(null, highest_streak) + " / " + Math.min.apply(null, lowest_streak) + " / " + currentstreak;
			document.getElementById("wdbPercentProfit").innerHTML = (profit_total / started_bal * 100).toFixed(2);
			document.getElementById("wdbPercentWagered").innerHTML = (wagered / started_bal).toFixed(2);
			
								if(profit_total < 0){
										document.getElementById("wdbProfit").style.color = "#f72a42"
										document.getElementById("wdbPercentProfit").style.color = "#f72a42"
								} else {
										if(document.getElementById("themebot").value == "dark" || document.getElementById("themebot").value == "blue" || document.getElementById("themebot").value == "black"){
										document.getElementById("wdbProfit").style.color = "#05f711"
										document.getElementById("wdbPercentProfit").style.color = "#05f711"
									} else {
										document.getElementById("wdbProfit").style.color = "green"
										document.getElementById("wdbPercentProfit").style.color = "green"
									}
								}
								
			
			lastBet.percent = (profit_total / started_bal * 100)
			
		}
		
		dobet();
		
		amount = nextbet;
		target_multi = 99 / chance;
					
		minecount = mines
		fieldcount = fields
		
		kenorisk = risk
		kenoselected = numbers

		plinkorisk = risk
		plinkorows = rows	
		
		wheelrisk = risk
		wheelsegments = segments
		
		selection = chips
		
		dragondifficulty = difficulty
		dragoneggs = eggs
		
		baccarattie = tie
		baccaratplayer = player
		baccaratbanker = banker
		
		if(running){
			if(game == "baccarat"){
			baccaratbet(baccarattie, baccaratplayer, baccaratbanker)
			} 
			if(game == "dragontower"){
			dragontowerBet(nextbet, dragondifficulty, dragoneggs)
			} 			
			if(game == "roulette"){
			roulettebet(selection)
			} 
			if(game == "wheel"){
			wheelbet(nextbet, wheelsegments, wheelrisk)
			} 		
			if(game == "plinko"){
			plinkobet(nextbet, plinkorows, plinkorisk)
			} 
			if(game == "mines"){
			minebet(nextbet, fieldcount, minecount)
			}
			if(game == "keno"){
			kenobet(nextbet, kenoselected, kenorisk)
			}
			if(game == "dice"){
			DiceBet(nextbet, chance, bethigh)
			}
			if(game == "limbo"){
			LimboBet(nextbet, target_multi);
			}
		}
	
}





function downloadFile() {

	var obj = editor.getValue();
	var filename = "JS_" + new Date(new Date().toString().split('GMT')[0]+' UTC').toISOString().split('.')[0].replace('T','-') + ".js";
	var blob = new Blob([obj], {type: 'text/plain'});
	if (window.navigator && window.navigator.msSaveOrOpenBlob) {
		window.navigator.msSaveOrOpenBlob(blob, filename);
	} else{
		var e = document.createEvent('MouseEvents'),
		a = document.createElement('a');
		a.download = filename;
		a.href = window.URL.createObjectURL(blob);
		a.dataset.downloadurl = ['text/plain', a.download, a.href].join(':');
		e.initEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
		a.dispatchEvent(e);
	}
}

function countTime() {
	startTime = new Date()
    setInterval(() => {
	if(running){
        playTime = (new Date().getTime()) - startTime;
        playDays = Math.floor(playTime / (1e3 * 6e1 * 6e1 * 24));
        playHours = Math.floor((playTime % (1e3 * 6e1 * 6e1 * 24)) / (1e3 * 6e1 * 6e1));
        playMinutes = Math.floor((playTime % (1e3 * 6e1 * 6e1)) / (1e3 * 6e1));
        playSeconds = Math.floor((playTime % (1e3 * 6e1)) / 1e3);
		document.getElementById("wdbTime").innerHTML = playDays + ":" + playHours + ":" + playMinutes + ":" + playSeconds
		}
    }, 1e3)
}

const checkbox = document.getElementById('speedChange')

checkbox.addEventListener('change', (event) => {
  if (event.currentTarget.checked) {
		speedmode = true;
  } else {
		speedmode = false;
  }
})



//setInterval(function () {localStorage.setItem("jscode", editor.getValue());}, 5000);


function start(){
		running = true; countTime(); 
		run_clicked = true;
		btnStart.disabled = true;
		dobet = function() {};		
		localStorage.setItem("jscode", editor.getValue());
		currency = document.getElementById('wdbMenuCoin').value;
		document.getElementById("result").innerHTML = "";
		if(theme == "light"){
			document.getElementById("result").style.color = "black";
		} else {
			document.getElementById("result").style.color = "white";
		}
		
		tie = 0
		banker = 0
		player = 0
		game = document.getElementById("gameselect").value;
		var evalcode = editor.getValue();
		setTimeout(evalcode + `;kenorisk = risk
	kenoselected = numbers
	minecount = mines
	fieldcount = fields
	plinkorows = rows
	plinkorisk = risk
	wheelrisk = risk
	wheelsegments = segments
	selection = chips
	dragondifficulty = difficulty
	dragoneggs = eggs
 	baccarattie = tie
	baccaratplayer = player
	baccaratbanker = banker
 

 started_bal = balance; 
 amount = nextbet;
 target_multi = 99 / chance
 //return
	var selectedGame = game;
	if(selectedGame == "dice"){
		if(speedmode == false){
			DiceBet(nextbet, chance, bethigh)
		} else {
			setTimeout(function () {
            DiceBet(nextbet, chance, bethigh)
          }, 200);

          setTimeout(function () {
            DiceBet(nextbet, chance, bethigh)
          }, 400);

		}
	} else if(selectedGame == "limbo"){
		if(speedmode == false){
			LimboBet(nextbet, 99 / chance);
		} else {
			setTimeout(function () {
            LimboBet(nextbet, 99 / chance); 
          }, 200);

          setTimeout(function () {
            LimboBet(nextbet, 99 / chance); 
          }, 400);
          
		}
	} else if(selectedGame == "mines"){
		if(speedmode == false){
			minebet(nextbet, fieldcount, minecount)
		} else {
			setTimeout(function () {
             minebet(nextbet, fieldcount, minecount)
          }, 200);

          setTimeout(function () {
             minebet(nextbet, fieldcount, minecount)
          }, 400);
          
		}
	} else if(selectedGame == "keno"){
		if(speedmode == false){
			kenobet(nextbet, kenoselected, kenorisk)
		} else {
			setTimeout(function () {
             kenobet(nextbet, kenoselected, kenorisk)
          }, 200);

          setTimeout(function () {
             kenobet(nextbet, kenoselected, kenorisk)
          }, 400);
          
		}
	} else if(selectedGame == "plinko"){
		if(speedmode == false){
			plinkobet(nextbet, plinkorows, plinkorisk)
		} else {
			setTimeout(function () {
             plinkobet(nextbet, plinkorows, plinkorisk)
          }, 200);

          setTimeout(function () {
             plinkobet(nextbet, plinkorows, plinkorisk)
          }, 400);
          
		}
	} else if(selectedGame == "wheel"){
		if(speedmode == false){
			wheelbet(nextbet, wheelsegments, wheelrisk)
		} else {
			setTimeout(function () {
             wheelbet(nextbet, wheelsegments, wheelrisk)
          }, 200);

          setTimeout(function () {
             wheelbet(nextbet, wheelsegments, wheelrisk)
          }, 400);
		}
	} else if(selectedGame == "roulette"){
		if(speedmode == false){
			roulettebet(selection)
		} else {
			setTimeout(function () {
             roulettebet(selection)
          }, 200);

          setTimeout(function () {
             roulettebet(selection)
          }, 400);
		}
	} else if(selectedGame == "dragontower"){
		if(speedmode == false){
			dragontowerBet(nextbet, dragondifficulty, dragoneggs)
		} else {
			setTimeout(function () {
             dragontowerBet(nextbet, dragondifficulty, dragoneggs)
          }, 200);

          setTimeout(function () {
             dragontowerBet(nextbet, dragondifficulty, dragoneggs)
          }, 400);
		}
	} else if(selectedGame == "baccarat"){
		if(speedmode == false){
			baccaratbet(baccarattie, baccaratplayer, baccaratbanker)
		} else {
			setTimeout(function () {
             baccaratbet(baccarattie, baccaratplayer, baccaratbanker)
          }, 200);

          setTimeout(function () {
             baccaratbet(baccarattie, baccaratplayer, baccaratbanker)
          }, 400);
		}
	} else if(selectedGame == "crash"){
		
	} else if(selectedGame == "slide"){
		
	}
		
	`, 0);
		

 
 drawChart();

}


  