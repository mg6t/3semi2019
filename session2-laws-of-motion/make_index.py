import glob
print("<html><body><ul>")
for f in sorted(glob.glob("g*")):
    print("<li>")
    print(f)
    print("<a href='"+f+"/index.html'>実行</a>")
    for j in sorted(glob.glob(f+"/*.js")):
        jj = j.split("/")[1]
        print("<a href='"+j+"'>"+jj+"</a>")
    print("</li>")
print("</ul></body></html>")
