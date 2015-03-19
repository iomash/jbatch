# jBatch

jBatch makes integrating web components a breeze. Web components are shipped as commands which you can call from within a webpage. Think of jBatch as the command line interface for the web.

Here's an example how you would integrate Google Analytics, highlight source code and embed Disqus with jBatch:

```
<script type="text/jbatch">
  ga create UA-12345678-1
  ga send pageview
  highlight pre>code
  disqus myWebsite --appendTo body
</script>
```

## Getting started

jBatch is a JavaScript library you need to link to. Ideally it's the last JavaScript library you will ever have to link to your webpages.

Copy and paste this `<script>` tag (to `<head>` or `<body>` - whatever you prefer):

```
<script src="//jbatch.iomash.com/1/jbatch.min.js"></script>
```

You may want to replace the number in the URL with a greater number as there are new versions released from time to time. Have a look at http://iomash.com/ to find out everything about the latest jBatch version.

Once you have linked jBatch, define batch scripts with `<script type="text/jbatch">`:

```
<script type="text/jbatch">
  echo Hello, world! | log
</script>
```

You must set the script type to "text/jbatch" (or "application/jbatch" if you prefer). This distinguishes jBatch scripts from JavaScript code.

Use a new line for every command - unless you want to concatenate commands like in the example above.

The vertical bar (`|`) is used to forward the output of a command as input to another command. Here the output of `echo` - which is "Hello, world!" - is forwarded as input to `log`. This makes `log` write "Hello, world!" to your browser's console window.

jBatch loads commands automatically. However, you can also use fully-qualified names (URLs) to refer to commands. Just make sure you don't add the file extension ".js":

```
<script type="text/jbatch">
  http://jbatch.iomash.com/1/cmd/echo Hello, world! | http://jbatch.iomash.com/1/cmd/log
</script>
```

This allows you to invoke commands which aren't part of jBatch - for example commands you developed for your own website and which are hosted on your webserver:

```
<script type="text/jbatch">
  http://example.com/myOwnCommand
</script>
```

Check out http://iomash.com/ for a complete overview on which commands are part of jBatch and can be invoked directly (without having to use a fully-qualified name).

jBatch supports nesting commands:

```
<script type="text/jbatch">
  echo (echo Hello,) (echo world!) | log
</script>
```

This example also writes "Hello, world!" to the browser's console window. "Hello," and "world!" are passed as arguments to two `echo` commands which are enclosed in parentheses. When those nested `echo` commands are invoked, they output "Hello," and "world!" which are forwarded as arguments to another `echo` command.

Last but not least, it is possible to forward batch scripts as arguments to commands:

```
<script type="text/jbatch">
  onclick html {
    echo Hello, world! | log
  }
</script>
```

This example defines a batch script with `echo Hello, world! | log` which is forwarded as the second argument - after "html" - to the `onclick` command. Every time a mouse click is registered on the webpage, the batch script is executed and "Hello, world!" is written to the browser's console window.

To define batch scripts, use curly brackets. To immediately invoke nested commands, use parentheses. To forward output as input, use vertical bars. jBatch does not support any other special characters.
