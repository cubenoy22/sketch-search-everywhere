@import 'MochaJSDelegate.js';
@import 'webView.js';
@import 'window.js';
@import 'app.js';

function onRun(context) {
  // initializing...
  App.init(context);

  var windowWidth = 480;
  var windowHeight = 360;

  openWindow(
    getWebView(
      context.plugin.urlForResourceNamed("window.html").path(),
      windowWidth,
      windowHeight
    ),
    windowWidth,
    windowHeight
  );
}
