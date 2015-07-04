<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="">
  <meta name="author" content="">

  <title>QQat - Application under construction</title>

  <!-- Main stylesheet -->
  <link rel="stylesheet" type="text/css" href="/static/css/welcome.css" />

  <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
  <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
  <![endif]-->
</head>
<body>
  <div class="header fancy-background">
    <div id="header-icon" class="text-center">
      <a id="scrollToContent" href="#">
        <h1>
          <i class="fa fa-chevron-circle-down"></i>
        </h1>
      </a>
    </div>
  </div>
  <div id="content" class="header">
    <div class="text-vertical-center">
      <h1>Welcome to QQat</h1>
      <h3>A personnal end-to-end OTR encrypted chat, reliable, sexy and soft.</h3>
      <h3><small>This website is under construction</small></h3>
      <h2>
        <ul class="list-inline">
          <li>
            <a href="https://github.com/QQorp/QQat" class="btn btn-default btn-lg">
              <span class="fa-stack fa-lg">
                <i class="fa fa-square fa-stack-2x"></i>
                <i class="fa fa-github fa-stack-1x fa-inverse"></i>
              </span>
              Github
            </a>
          </li>
          <li>
            <a href="https://circleci.com/gh/QQorp/QQat" class="btn btn-default btn-lg">
              <span class="fa-stack fa-lg">
                <i class="fa fa-square fa-stack-2x"></i>
                <i class="fa fa-terminal fa-stack-1x fa-inverse"></i>
              </span>
              CircleCI
            </a>
          </li>
        </ul>
      </h2>
      <small>Page served by : {{.Hostname}}</small>
  </div>
  </div>

  <!-- Main Script -->
  <script src="/static/js/welcome.bundle.js"></script>
</body>
</html>
