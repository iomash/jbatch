# jBatch

jBatch makes integrating web components a breeze. Web components are shipped as commands which you can call from within a webpage. Think of jBatch as the command line interface for the web.

Here's an example how you integrate Google Analytics, highlight source code and embed a Disqus forum with jBatch:

```
<script type="text/jbatch">
ga create UA-12345678-1
ga send pageview
highlight pre>code
disqus myWebsite --appendTo body
</script>
```
