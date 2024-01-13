import urllib.parse
import urllib.request

url = 'https://codeforces.com'
with urllib.request.urlopen(url) as response: #GET
    content = response.read()

print(content)
