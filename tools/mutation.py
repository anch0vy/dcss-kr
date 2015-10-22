import re
import requests
import json
from bs4 import BeautifulSoup as BS
headers = {
    'if-none-match': 'W/',
    'accept-encoding': 'gzip, deflate, sdch',
    'accept-language': 'ko-KR,ko;q=0.8,en-US;q=0.6,en;q=0.4',
    'upgrade-insecure-requests': '1',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36',
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'cache-control': 'max-age=0',
    'cookie': '__cfduid=d6224a85612f751635d83723716a8a2ff1444564752; __cfuid=jO6fQZBd79hppEjKJV80GA%3D%3D; __utmt=1; __utma=227837826.421071613.1444564754.1444880368.1444886506.12; __utmb=227837826.20.10.1444886506; __utmc=227837826; __utmz=227837826.1444880368.11.6.utmcsr=google|utmccn=(organic)|utmcmd=organic|utmctr=(not%20provided)',
}

res = requests.get('https://namu.wiki/edit/%EB%8D%98%EC%A0%84%20%ED%81%AC%EB%A1%A4/%EB%8F%8C%EC%97%B0%EB%B3%80%EC%9D%B4', headers=headers)
mon = BS(res.text,"html.parser").textarea
mons = mon.text.split('\n')[38:]

def line_pre(x):
    if x.startswith('>'):
        x = x[1:]
    x = x.strip().lstrip()
    x = re.sub(r'\[{2}((.*)\|(.*))\]{2}',r'\3',x)
    x = re.sub(r'http.*?png\?width=.*','',x)
    x = re.sub(r'http.*?png','',x)
    x = re.sub(r'\[\[(.*)\]\]',r'\1',x)
    x = re.sub(r'\[(.*?)\]',r'(\1)',x)
    x = re.sub(r"'''(.*?)'''",r'\1',x)
    x = re.sub(r'~~(.*?)~~','',x)
    x = re.sub(r'--(.*?)--','',x)
    x = re.sub(r'<.*?>','',x)
    x = re.sub(r'^\|\|$','',x)
    x = re.sub(r'^=*$','',x)
    x = re.sub(r'^={3,} (.*?) \((.*?)\) ={3,}$',r'\1%%\2',x)
    x = re.sub(r'={2,}[^=]*={2,}','',x)
#     tmp = re.sub(r'^\|(\|.*\|)\|$',r'%table%\1',x)
#     if '%table%' in tmp:
#         tmp = tmp.replace('%table%','')
#         tmps = tmp.split('|')
#         ret = []
#         for tmp in tmps:
#             tmp = tmp.strip().lstrip()
#             if tmp:
#                 ret.append('<td>%s</td>'%tmp)
#         tmp = ''.join(ret)
#         x = '<table style="border: 1px solid #fff"><tr>%s</tr></table>'%tmp

    x = x.strip().lstrip()
    return x



_mons = map(line_pre,mons)
mons = []
for line in _mons:
    if line:
        mons.append(line)

mondic = {}
eng,han = '',''
desc = []
for line in _mons:
#     print line
    if '%%' in line:
        if eng:
            eng = eng.lower().replace(' ','')
            mondic[eng] = desc
        han,eng = line.split('%%')
        desc = []
    else:
        if line != '':
            line = line.replace('. ','.\n')
            lines = line.split('\n')
            desc.extend(lines)
json.dumps(mondic,open('mutation.json','w'))