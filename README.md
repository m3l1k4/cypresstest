# cypresstest


unset NODE_OPTIONS
cypress open
on Windows

set NODE_OPTIONS=
cypress open
if that fails, try the following as suggested by a user on Github:

on MacOS:

clear /Users/[username]/Library/Caches/Cypress
<br/>run npm i cypress -g
<br/>run cypress open
<br/>close terminal
<br/>return back to your node.js project and run the tests

on Windows:

clear C:\Users[username]\AppData\Local\Cypress\Cache)
<br/>start a command prompt as administrator
<br/>run npm i cypress -g
<br/>run cypress open
<br/>close command prompt
<br/>return back to your node.js project and run the tests
