import re

f = open('all.txt','r')
ls = f.readlines()
ls = map(lambda x:x.replace('\n','') , ls)


def onetime(ls):
	for n,line in enumerate(ls[:]):
		if line.startswith('"') and line.endswith('"') and ls[n -1].endswith('"'):
			ls[n] = ''
			ls[n - 1] = ls[n-1][:-1] + line[1:]
	return ls 

def removeBlank(ls):
	_ = ls[:]
	ls = []
	for line in _:
		if line:
			ls.append(line)
	return ls

ls = onetime(ls)
ls = removeBlank(ls)
ls = onetime(ls)
ls = removeBlank(ls)
ls = onetime(ls)
ls = removeBlank(ls)
ls = onetime(ls)
ls = removeBlank(ls)



a = []
a.append("It is tiny")
a.append("It is very small")
a.append("It is small")
a.append("It is large")
a.append("It is very large")
a.append("It is giant")

str = '''a.push(/^%s/);
b.push(%s);'''


for n,line in enumerate(ls):
	if line.startswith('#'):
		continue
	for reg in a:
		if re.search(reg, line):
			if ls[n+1].startswith('msgstr'):
				han = ls[n+1].replace('msgstr ','')
				if reg.count('(.*)') == 1:
					han = re.sub('\(%.+\)','($1)',han)
				if not han.endswith('."') and not han.endswith('?"') and not han.endswith('!"'):
					han = han[:-1] + '."'
				print str%(reg, han)
				print 