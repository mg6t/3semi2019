import glob
print("<html><body><ul>")
for f in glob.glob("g*"):
    print("<li>")
    print(f)
    print("<a href='"+f+"/index.html'>実行</a>")
    print("<a href='"+f+"/sketch.js'>ソースコード</a>")
    print("</li>")
print("</ul></body></html>")
