---
layout: single
title: "[Python] 표준 라이브러리"
categories:
  - docs
  - Python
  - Basic
tag: [Python, Jupyter Notebook, Anaconda, Data Analysis]
author_profile: false
sidebar:
  nav: "counts"
use_math: true
---

# 👑 <font color='plum' face='BMJUAOTF' size='10'>Standard Library</font>

출처:<br>
[위키독스 - 점프투파이썬](https://wikidocs.net/book/1){: .btn .btn--success}<br>
[점프투파이썬 2024년 통합 버전 유튜브 강의](https://www.youtube.com/watch?v=ftQZo7XaTOA&t=27768s){: .btn .btn--danger}

## 🍓 <font color='skyblue' face='BMJUAOTF' size='7'>datetime.date</font>

```python
import datetime
```

```python
# D-Day 계산
day1 = datetime.date(2025, 1, 16)
day2 = datetime.date(2025, 4, 2)

diff = day2 - day1

diff.days
```

    76

```python
# 요일 탐색 1 - 월요일: 0, 화요일: 1, ... 일요일: 6
day = datetime.date(2025, 4, 2)
day.weekday()
```

    2

```python
# 요일 탐색 2 - 월요일: 1, 화요일: 2, ... 일요일: 7
day.isoweekday()
```

    3

## 🍓 <font color='skyblue' face='BMJUAOTF' size='7'>time</font>

```python
import time
```

### 🥝 <font color='plum' face='BMJUAOTF' size='5'>time.time</font>

```python
# 1970.01.01 기준으로 지난 시간을 초 단위로 리턴
time.time()
```

    1743660394.813034

### 🥝 <font color='plum' face='BMJUAOTF' size='5'>time.localtime</font>

```python
# time.time()이 리턴한 실수값을 사용해서 연, 월, 일, 시...의 형태로 변환
time.localtime(time.time())
```

    time.struct_time(tm_year=2025, tm_mon=4, tm_mday=3, tm_hour=15, tm_min=6, tm_sec=34, tm_wday=3, tm_yday=93, tm_isdst=0)

### 🥝 <font color='plum' face='BMJUAOTF' size='5'>time.asctime</font>

```python
# time.localtime에서 리턴된 튜플 형태의 값을 인수로 받아서 알아보기 쉬운 형태로 리턴
# 요일 월 일 시간 연 순서
time.asctime(time.localtime(time.time()))
```

    'Thu Apr  3 15:06:34 2025'

### 🥝 <font color='plum' face='BMJUAOTF' size='5'>time.ctime</font>

```python
# time.asctime(time.localtime(time.time()))의 간소화
time.ctime()
```

    'Thu Apr  3 15:06:34 2025'

### 🥝 <font color='plum' face='BMJUAOTF' size='5'>time.strftime</font>

```python
time.strftime("포맷코드", time.localtime(time.time()))
```

<font color='plum' face='BMJUAOTF' size='5'>포맷코드 예시 표</font>

![format_code]({{ site.url }}/images/python/time_format_code.png)

### 🥝 <font color='plum' face='BMJUAOTF' size='5'>time.sleep</font>

```python
# 일정한 시간 간격을 두고 루프를 실행
for i in range(10):
    print(i)
    time.sleep(1)
```

    0
    1
    2
    3
    4
    5
    6
    7
    8
    9

### 🥝 <font color='gray' face='BMJUAOTF' size='4'>인수 없이 time 함수 사용</font>

```python
print(time.localtime(), '\n')
print(time.asctime(), '\n')
print(time.strftime('%c'), '\n')
```

    time.struct_time(tm_year=2025, tm_mon=4, tm_mday=3, tm_hour=15, tm_min=6, tm_sec=44, tm_wday=3, tm_yday=93, tm_isdst=0)

    Thu Apr  3 15:06:44 2025

    Thu Apr  3 15:06:44 2025

## 🍓 <font color='skyblue' face='BMJUAOTF' size='7'>math</font>

```python
import math
```

### 🥝 <font color='plum' face='BMJUAOTF' size='5'>math.gcd</font>

```python
# 최대 공약수
math.gcd(60, 100, 80)
```

    20

### 🥝 <font color='plum' face='BMJUAOTF' size='5'>math.lcm</font>

```python
# 최소 공배수
math.lcm(15, 25)
```

    75

## 🍓 <font color='skyblue' face='BMJUAOTF' size='7'>random</font>

```python
import random
```

### 🥝 <font color='plum' face='BMJUAOTF' size='5'>random.random</font>

```python
# 0.0 ~ 1.0 사이의 실수 중 난수 값을 리턴
random.random()
```

    0.7596320963850833

### 🥝 <font color='plum' face='BMJUAOTF' size='5'>random.randint</font>

```python
# 1 ~ 10 사이의 정수 중 난수 값을 리턴
random.randint(1, 10)
```

    1

```python
# 1 ~ 55 사이의 정수 중 난수 값을 리턴
random.randint(1, 55)
```

    5

```python
def random_pop(data):
    number = random.randint(0, len(data)-1)
    return data.pop(number)


if __name__ == "__main__":
    data = [1, 2, 3, 4, 5]
    while data:
        print(random_pop(data))
```

    1
    4
    2
    5
    3

### 🥝 <font color='plum' face='BMJUAOTF' size='5'>random.choice</font>

```python
# 입력으로 받은 리스트에서 무작위로 하나를 선택하여 리턴
def random_pop(data):
    number = random.choice(data)
    data.remove(number)
    return number


if __name__ == "__main__":
    data = [1, 2, 3, 4, 5]
    while data:
        print(random_pop(data))
```

    2
    4
    3
    5
    1

### 🥝 <font color='plum' face='BMJUAOTF' size='5'>random.sample</font>

```python
# 리스트의 항목을 무작위로 섞음
# 두 번째 파라미터는 무작위로 추출할 원소의 개수
data = [1, 2, 3, 4, 5]
random.sample(data, len(data))
```

    [4, 2, 1, 5, 3]

## 🍓 <font color='skyblue' face='BMJUAOTF' size='7'>itertools</font>

```python
import itertools
```

### 🥝 <font color='plum' face='BMJUAOTF' size='5'>itertools.zip_longest</font>

```python
# zip함수와 동일하게 작용하지만 반복 가능 객체의 길이가 다르면 fillvalue로 설정한 값을 짧은 객체에 채울 수 있다.

students = ['한민서', '황지민', '이영철', '이광수', '김승민']
snacks = ['사탕', '초컬릿', '젤리']

# zip
result = zip(students, snacks)
print(f"zip 결과:\n {list(result)}", '\n')

# itertools.zip_longest
result = itertools.zip_longest(students, snacks, fillvalue='허니버터칩')
print(f"itertools.zip_longest 함수 결과:\n {list(result)}")
```

    zip 결과:
     [('한민서', '사탕'), ('황지민', '초컬릿'), ('이영철', '젤리')]

    itertools.zip_longest 함수 결과:
     [('한민서', '사탕'), ('황지민', '초컬릿'), ('이영철', '젤리'), ('이광수', '허니버터칩'), ('김승민', '허니버터칩')]

### 🥝 <font color='plum' face='BMJUAOTF' size='5'>itertools.permutations</font>

```python
# 반복 가능 객체 중에서 r개를 선택한 순열을 이터레이터로 리턴
# 1, 2, 3 이라는 숫자중 2개 순열
list(itertools.permutations(['1', '2', '3'], 2))
```

    [('1', '2'), ('1', '3'), ('2', '1'), ('2', '3'), ('3', '1'), ('3', '2')]

### 🥝 <font color='plum' face='BMJUAOTF' size='5'>itertools.combinations</font>

```python
# 반복 가능 객체 중에서 r개를 선택한 조합을 이터레이터로 리턴
# 로또
lotto = itertools.combinations(range(1, 46), 6)

for num in lotto:
    print(num)
    break
```

    (1, 2, 3, 4, 5, 6)

```python
# 이터레이터의 개수만 출력
len(list(lotto))
```

    8145059

### 🥝 <font color='plum' face='BMJUAOTF' size='5'>itertools.combinations_with_replacement</font>

```python
# 중복을 허용하는 조합
len(list(itertools.combinations_with_replacement(range(1, 46), 6)))
```

    15890700

## 🍓 <font color='skyblue' face='BMJUAOTF' size='7'>functools</font>

```python
import functools
```

### 🥝 <font color='plum' face='BMJUAOTF' size='5'>functools.reduce</font>

```python
# 함수를 이터레이블의 요소에 차례대로 누적 적용하여 객체를 하나의 값으로 줄이는 함수

# add
def add(data):
    result = 0
    for i in data:
        result += i
    return result


data = [1, 2, 3, 4, 5]
result = add(data)
print(f"add 함수 결과:\n {result}\n")


# functools.reduce
data = [1, 2, 3, 4, 5]
result = functools.reduce(lambda x, y: x + y, data)  # 계산 과정 ((((1+2)+3)+4)+5)
print(f'functools.reduce 결과:\n {result}')
```

    add 함수 결과:
     15

    functools.reduce 결과:
     15

```python
# functools.reduce를 활용한 최대값 구하기
num_list = [3, 2, 8, 1, 6, 7]
max_num = functools.reduce(lambda x, y: x if x > y else y, num_list)
print(f"num_list의 최대값: {max_num}")
```

    num_list의 최대값: 8

```python
# functools.reduce를 활용한 최소값 구하기
num_list = [3, 2, 8, 1, 6, 7]
min_num = functools.reduce(lambda x, y: x if x < y else y, num_list)
print(f"num_list의 최소값: {min_num}")
```

    num_list의 최소값: 1

## 🍓 <font color='skyblue' face='BMJUAOTF' size='7'>operator</font>

### 🥝 <font color='plum' face='BMJUAOTF' size='5'>operator.itemgetter</font>

```python
# sorted와 같은 함수의 key 매개변수에 적용
# 다양한 기준으로 정렬을 돕는 모듈
from operator import itemgetter

students = [
    ("jane", 22, 'A'),
    ("dave", 32, 'B'),
    ("sally", 17, 'B'),
]

# 리스트 내의 튜플의 두 번째 요소를 기준으로 정렬
result = sorted(students, key=itemgetter(1), reverse=True)
print(result)
```

    [('dave', 32, 'B'), ('jane', 22, 'A'), ('sally', 17, 'B')]

```python
students = [
    {"name": "jane", "age": 22, "grade": 'A'},
    {"name": "dave", "age": 32, "grade": 'B'},
    {"name": "sally", "age": 17, "grade": 'B'},
]

# 딕셔너리의 키값을 기준으로 정렬
result = sorted(students, key=itemgetter('age'), reverse=True)
print(result)
```

    [{'name': 'dave', 'age': 32, 'grade': 'B'}, {'name': 'jane', 'age': 22, 'grade': 'A'}, {'name': 'sally', 'age': 17, 'grade': 'B'}]

### 🥝 <font color='plum' face='BMJUAOTF' size='5'>operator.attrgetter</font>

```python
# 리스트의 요소가 튜플이 아니라 클래스의 객체일때 사용
from operator import attrgetter

class Student:
    def __init__(self, name, age, grade):
        self.name = name
        self.age = age
        self.grade = grade

    def __repr__(self):
        return f"Student(name='{self.name}', age={self.age}, grade='{self.grade}')"

    def __str__(self):
        return f"{self.name} ({self.age}, {self.grade})"


students = [
    Student('jane', 22, 'A'),
    Student('dave', 32, 'B'),
    Student('sally', 17, 'B'),
]


result = sorted(students, key=attrgetter('age'))

for student in result:
    print(student)
```

    sally (17, B)
    jane (22, A)
    dave (32, B)

## 🍓 <font color='skyblue' face='BMJUAOTF' size='7'>shutil</font>

```python
# 파일을 복사하거나 이동할 때 사용하는 모듈
import shutil

shutil.copy("/Users/woojinchoe/Desktop/personal/study/test3.md", "/Users/woojinchoe/Desktop/personal/study/test3.md.bak")
```

    '/Users/woojinchoe/Desktop/personal/study/test3.md.bak'

## 🍓 <font color='skyblue' face='BMJUAOTF' size='7'>glob</font>

```python
# 디렉터리 안의 파일들을 읽어서 리턴
# 메타 문자를 써서 원하는 파일만 읽어 들이기도 가능
import glob

files = glob.glob("/Users/woojinchoe/Desktop/PM/docs/*.pdf")
for file in files:
    print(file)
```

    /Users/woojinchoe/Desktop/PM/docs/Section_11_의사결정.pdf
    /Users/woojinchoe/Desktop/PM/docs/Section_02.pdf
    /Users/woojinchoe/Desktop/PM/docs/Section_14_앞으로의_활용.pdf
    /Users/woojinchoe/Desktop/PM/docs/Section_12_데이터_문화_만들기.pdf
    /Users/woojinchoe/Desktop/PM/docs/Section_03.pdf
    /Users/woojinchoe/Desktop/PM/docs/Section_01.pdf
    /Users/woojinchoe/Desktop/PM/docs/Section_10_실험설계.pdf
    /Users/woojinchoe/Desktop/PM/docs/Section_08_데이터_레포트.pdf
    /Users/woojinchoe/Desktop/PM/docs/00_강의자료.pdf
    /Users/woojinchoe/Desktop/PM/docs/Section_05_지표분석.pdf
    /Users/woojinchoe/Desktop/PM/docs/Section_04_문제정의.pdf
    /Users/woojinchoe/Desktop/PM/docs/Section_05_결제율_전환_프로젝트.pdf
    /Users/woojinchoe/Desktop/PM/docs/Section_09_매트릭_하이라키.pdf
    /Users/woojinchoe/Desktop/PM/docs/Section_13_Case_Study.pdf
    /Users/woojinchoe/Desktop/PM/docs/Section_06_데이터_로그_설계.pdf
    /Users/woojinchoe/Desktop/PM/docs/Section_07_프로젝트_회고.pdf

## 🍓 <font color='skyblue' face='BMJUAOTF' size='7'>pickle</font>

```python
# 객체의 형태를 그대로 유지하면서 파일에 저장하고 불러올 수 있게 하는 모듈
# dump 함수를 사용하여 딕셔너리 객체인 data를 그대로 파일에 저장
import pickle

f = open('test.txt', 'wb')
data = {1: 'python', 2: 'you need'}
pickle.dump(data, f)
f.close()
```

```python
f = open('/Users/woojinchoe/Desktop/personal/study/test.txt', 'rb')
data = pickle.load(f)
print(data)
```

    {1: 'python', 2: 'you need'}

## 🍓 <font color='skyblue' face='BMJUAOTF' size='7'>os</font>

```python
import os
```

### 🥝 <font color='plum' face='BMJUAOTF' size='5'>os.environ</font>

```python
# 현재 시스템의 환경 변수값을 리턴
os.environ
```

    environ{'COMMAND_MODE': 'unix2003',
            'CPPFLAGS': '-I/opt/homebrew/opt/libomp/include',
            'ELECTRON_NO_ATTACH_CONSOLE': '1',
            'HOME': '/Users/woojinchoe',
            'HOMEBREW_CELLAR': '/opt/homebrew/Cellar',
            'HOMEBREW_PREFIX': '/opt/homebrew',
            'HOMEBREW_REPOSITORY': '/opt/homebrew',
            'INFOPATH': '/opt/homebrew/share/info:',
            'LANG': 'ko_KR.UTF-8',
            'LDFLAGS': '-L/opt/homebrew/opt/libomp/lib',
            'LESS': '-R',
            'LOGNAME': 'woojinchoe',
            'LSCOLORS': 'Gxfxcxdxbxegedabagacad',
            'LS_COLORS': 'di=1;36:ln=35:so=32:pi=33:ex=31:bd=34;46:cd=34;43:su=30;41:sg=30;46:tw=30;42:ow=30;43',
            'MallocNanoZone': '0',
            'OLDPWD': '/Users/woojinchoe/Desktop',
            'ORIGINAL_XDG_CURRENT_DESKTOP': 'undefined',
            'P9K_SSH': '0',
            'P9K_TTY': 'old',
            'PAGER': 'cat',
            'PATH': '/Users/woojinchoe/Desktop/personal/bin:/Users/woojinchoe/Desktop/personal/bin:/Users/woojinchoe/.npm-global/bin:/Users/woojinchoe/.rbenv/shims:/opt/homebrew/Cellar/pyenv-virtualenv/1.2.4/shims:/Users/woojinchoe/.pyenv/shims:/opt/homebrew/opt/libomp/bin:/Applications/Visual Studio Code.app/Contents/Resources/app/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/Library/Frameworks/Python.framework/Versions/3.12/bin:/Library/Frameworks/Python.framework/Versions/3.11/bin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/Library/Apple/usr/bin:/Users/woojinchoe/.cargo/bin',
            'PWD': '/',
            'PYENV_SHELL': 'zsh',
            'PYENV_VIRTUALENV_INIT': '1',
            'RBENV_SHELL': 'zsh',
            'SHELL': '/bin/zsh',
            'SHLVL': '2',
            'SSH_AUTH_SOCK': '/private/tmp/com.apple.launchd.j1HfbuG37t/Listeners',
            'TERM': 'xterm-color',
            'TERM_PROGRAM': 'Apple_Terminal',
            'TERM_PROGRAM_VERSION': '455',
            'TERM_SESSION_ID': 'B68FAEDD-A41C-4997-AFE8-351EDDB3E88C',
            'TMPDIR': '/var/folders/j6/vc6mjcjd2yqghkgbv6fptp0r0000gn/T/',
            'USER': 'woojinchoe',
            'VIRTUAL_ENV': '/Users/woojinchoe/Desktop/personal',
            'VIRTUAL_ENV_PROMPT': 'personal',
            'VSCODE_CLI': '1',
            'VSCODE_CODE_CACHE_PATH': '/Users/woojinchoe/Library/Application Support/Code/CachedData/ddc367ed5c8936efe395cffeec279b04ffd7db78',
            'VSCODE_CRASH_REPORTER_PROCESS_TYPE': 'extensionHost',
            'VSCODE_CWD': '/Users/woojinchoe/Desktop/personal/study',
            'VSCODE_ESM_ENTRYPOINT': 'vs/workbench/api/node/extensionHostProcess',
            'VSCODE_HANDLES_UNCAUGHT_ERRORS': 'true',
            'VSCODE_IPC_HOOK': '/Users/woojinchoe/Library/Application Support/Code/1.98-main.sock',
            'VSCODE_NLS_CONFIG': '{"userLocale":"ko","osLocale":"ko-kr","resolvedLanguage":"ko","defaultMessagesFile":"/Applications/Visual Studio Code.app/Contents/Resources/app/out/nls.messages.json","languagePack":{"translationsConfigFile":"/Users/woojinchoe/Library/Application Support/Code/clp/3c2addebdd9489ab038744b445159f2d.ko/tcf.json","messagesFile":"/Users/woojinchoe/Library/Application Support/Code/clp/3c2addebdd9489ab038744b445159f2d.ko/ddc367ed5c8936efe395cffeec279b04ffd7db78/nls.messages.json","corruptMarkerFile":"/Users/woojinchoe/Library/Application Support/Code/clp/3c2addebdd9489ab038744b445159f2d.ko/corrupted.info"},"locale":"ko","availableLanguages":{"*":"ko"},"_languagePackId":"3c2addebdd9489ab038744b445159f2d.ko","_languagePackSupport":true,"_translationsConfigFile":"/Users/woojinchoe/Library/Application Support/Code/clp/3c2addebdd9489ab038744b445159f2d.ko/tcf.json","_cacheRoot":"/Users/woojinchoe/Library/Application Support/Code/clp/3c2addebdd9489ab038744b445159f2d.ko","_resolvedLanguagePackCoreLocation":"/Users/woojinchoe/Library/Application Support/Code/clp/3c2addebdd9489ab038744b445159f2d.ko/ddc367ed5c8936efe395cffeec279b04ffd7db78","_corruptedFile":"/Users/woojinchoe/Library/Application Support/Code/clp/3c2addebdd9489ab038744b445159f2d.ko/corrupted.info"}',
            'VSCODE_PID': '13986',
            'XPC_FLAGS': '0x0',
            'XPC_SERVICE_NAME': 'application.com.microsoft.VSCode.7773225.7773231.4A681DC5-5CCF-4850-94DF-BA198B720AA2',
            'ZSH': '/Users/woojinchoe/.oh-my-zsh',
            '_P9K_SSH_TTY': '/dev/ttys000',
            '_P9K_TTY': '/dev/ttys000',
            '__CFBundleIdentifier': 'com.microsoft.VSCode',
            '__CF_USER_TEXT_ENCODING': '0x1F5:0x3:0x33',
            'ELECTRON_RUN_AS_NODE': '1',
            'NODE_TLS_REJECT_UNAUTHORIZED': 'undefined',
            'VSCODE_L10N_BUNDLE_LOCATION': 'file:///Users/woojinchoe/.vscode/extensions/ms-ceintl.vscode-language-pack-ko-1.98.2025031209/translations/extensions/vscode.markdown-language-features.i18n.json',
            'PYTHONUNBUFFERED': '1',
            'PYTHONIOENCODING': 'utf-8',
            'PS1': '(personal) ',
            '_': '/Users/woojinchoe/Desktop/personal/bin/python',
            'PYDEVD_IPYTHON_COMPATIBLE_DEBUGGING': '1',
            'PYTHON_FROZEN_MODULES': 'on',
            'PYDEVD_USE_FRAME_EVAL': 'NO',
            'CLICOLOR': '1',
            'FORCE_COLOR': '1',
            'CLICOLOR_FORCE': '1',
            'GIT_PAGER': 'cat',
            'MPLBACKEND': 'module://matplotlib_inline.backend_inline'}

```python
# PATH만 호출
os.environ['PATH']
```

    '/Users/woojinchoe/Desktop/personal/bin:/Users/woojinchoe/Desktop/personal/bin:/Users/woojinchoe/.npm-global/bin:/Users/woojinchoe/.rbenv/shims:/opt/homebrew/Cellar/pyenv-virtualenv/1.2.4/shims:/Users/woojinchoe/.pyenv/shims:/opt/homebrew/opt/libomp/bin:/Applications/Visual Studio Code.app/Contents/Resources/app/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/Library/Frameworks/Python.framework/Versions/3.12/bin:/Library/Frameworks/Python.framework/Versions/3.11/bin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/Library/Apple/usr/bin:/Users/woojinchoe/.cargo/bin'

### 🥝 <font color='plum' face='BMJUAOTF' size='5'>os.chdir</font>

```python
# 디렉터리 위치 변경
os.chdir("/Users/woojinchoe/Desktop/personal/study")
```

### 🥝 <font color='plum' face='BMJUAOTF' size='5'>os.getcwd</font>

```python
# 현재 디렉터리 위치 리턴
os.getcwd()
```

    '/Users/woojinchoe/Desktop/personal/study'

### 🥝 <font color='plum' face='BMJUAOTF' size='5'>os.system</font>

```python
# 시스템 자체의 프로그램이나 명령어를 파이썬에서 호출
os.system("dir")
```

    sh: dir: command not found





    32512

### 🥝 <font color='plum' face='BMJUAOTF' size='5'>유용한 os 관련 함수</font>

<table>
    <tr>
        <th>함수</th>
        <th>설명</th>
    </tr>
    <tr>
        <td>os.mkdir(디렉터리)</td>
        <td>디렉터리 생성</td>
    </tr>
    <tr>
        <td>os.rmkdir(디렉터리)</td>
        <td>디렉터리 삭제 (단, 디렉터리가 비어있을 때만 가능)</td>
    </tr>
    <tr>
        <td>os.remove(파일)</td>
        <td>파일 삭제</td>
    </tr>
    <tr>
        <td>os.rename(src, dst)</td>
        <td>src라는 이름의 파일을 dst라는 이름으로 변경</td>
    </tr>
</table>

## 🍓 <font color='skyblue' face='BMJUAOTF' size='7'>zipfile</font>

```python
import zipfile
```

```python
# 여러개의 파일을 zip형식으로 합치거나 해제할 때 사용
# 합체
with zipfile.ZipFile('mytext.zip', 'w') as myzip:
    myzip.write('a.txt')
    myzip.write('b.txt')
    myzip.write('c.txt')

# 해제
with zipfile.ZipFile('mytext.zip') as myzip:
    myzip.extractall()

# 특정 파일만 하체
with zipfile.ZipFile('mytext.zip') as myzip:
    myzip.extract('a.txt')

# 압축하여 묶기
with zipfile.ZipFile('mytext.zip', 'w', compression=zipfile.ZIP_LZMA, compresslevel=9) as myzip:
    pass
```

### 🥝 <font color='plum' face='BMJUAOTF' size='5'>compression 종류</font>

<pre>
<font color='white' face='BMJUAOTF' size='4'>
• <font color='orange' face='BMJUAOTF' size='4'>ZIP_STORED</font>: 압축하지 않고 파일을 zip으로만 묶는다. (속도 빠름)
• <font color='orange' face='BMJUAOTF' size='4'>ZIP_DEFLATED</font>: 일반적인 zip 압축으로 속도가 빠르고 압축률은 낮다. (호환성이 좋음)
• <font color='orange' face='BMJUAOTF' size='4'>ZIP_BZIP2</font>: bzip2 압축으로 압축률이 높고 속도가 느리다.
• <font color='orange' face='BMJUAOTF' size='4'>ZIP_LZMA</font>: lzma 압축으로 압축률이 높고 속도가 느리다. (7zip과 동일한 알고리즘)

<font color='gray' face='BMJUAOTF' size='4'>※ compressionlevel은 압축 수준을 의미하는 숫자값으로 1~9까지 설정가능하고 1은 속도가 빠르지만 압축률이 낮고 9는 속도는 가장 느리지만 압축률이 높다. ※</font>
</font>
</pre>

## 🍓 <font color='skyblue' face='BMJUAOTF' size='7'>threading</font>

```python
import time

def long_task():
    for i in range(5):
        time.sleep(1)
        print(f"working{i}\n")


print("Start")

for i in range(5):
    long_task()


print("END")
```

    Start
    working0

    working1

    working2

    working3

    working4

    working0

    working1

    working2

    working3

    working4

    working0

    working1

    working2

    working3

    working4

    working0

    working1

    working2

    working3

    working4

    working0

    working1

    working2

    working3

    working4

    END

```python
import time
import threading


def long_task():
    for i in range(5):
        time.sleep(1)
        print(f"working:{i}\n")


print("Start")

threads = []
for i in range(5):
    t = threading.Thread(target=long_task)
    threads.append(t)

for t in threads:
    t.start()


print("End")
```

    Start
    End


    working:0
    working:0

    working:0


    working:0

    working:0

    working:1
    working:1

    working:1

    working:1

    working:1


    working:2
    working:2

    working:2


    working:2

    working:2

    working:3
    working:3

    working:3


    working:3

    working:3

    working:4

    working:4

    working:4

    working:4

    working:4

```python
import time
import threading


def long_task():
    for i in range(5):
        time.sleep(1)
        print(f"working:{i}\n")


print("Start")

threads = []
for i in range(5):
    t = threading.Thread(target=long_task)  # 스레드 생성
    threads.append(t)

for t in threads:
    t.start()  # 스레드 실행

for t in threads:
    t.join()  # 스레드가 종료될때까지 기다림


print("End")
```

    Start
    working:0

    working:0

    working:0

    working:0

    working:0

    working:1
    working:1

    working:1


    working:1

    working:1

    working:2

    working:2

    working:2

    working:2

    working:2

    working:3

    working:3

    working:3

    working:3

    working:3

    working:4

    working:4

    working:4

    working:4

    working:4

    End

```python
threads
```

    [<Thread(Thread-370 (long_task), stopped 6256308224)>,
     <Thread(Thread-371 (long_task), stopped 6273134592)>,
     <Thread(Thread-372 (long_task), stopped 6289960960)>,
     <Thread(Thread-373 (long_task), stopped 6306787328)>,
     <Thread(Thread-374 (long_task), stopped 12901707776)>]

## 🍓 <font color='skyblue' face='BMJUAOTF' size='7'>traceback</font>

```python
import traceback
```

```python
# 프로그램 실행 중 발생한 오류를 추적
def a():
    return 1/0

def b():
    a()

def main():
    try:
        b()
    except:
        print("오류 발생")
        print(traceback.format_exc())

main()
```

    오류 발생
    Traceback (most recent call last):
      File "/var/folders/j6/vc6mjcjd2yqghkgbv6fptp0r0000gn/T/ipykernel_15500/3165344080.py", line 10, in main
        b()
      File "/var/folders/j6/vc6mjcjd2yqghkgbv6fptp0r0000gn/T/ipykernel_15500/3165344080.py", line 6, in b
        a()
      File "/var/folders/j6/vc6mjcjd2yqghkgbv6fptp0r0000gn/T/ipykernel_15500/3165344080.py", line 3, in a
        return 1/0
               ~^~
    ZeroDivisionError: division by zero

## 🍓 <font color='skyblue' face='BMJUAOTF' size='7'>json</font>

```python
import json
```

### 🥝 <font color='plum' face='BMJUAOTF' size='5'>json.load</font>

```python
# JSON 데이터를 쉽게 처리
with open('myinfo.json') as f:
    data = json.load(f)


type(data)
```

    dict

```python
data
```

    {'name': '홍길동', 'birth': '0525', 'age': 30}

### 🥝 <font color='plum' face='BMJUAOTF' size='5'>json.dump</font>

```python
# 딕셔너리 자료형을 json파일로 생성
data = {'name': '홍길동', 'birth': '0525', 'age': 30}
with open('myinfo.json', 'w') as f:
    json.dump(data, f)
```

```python
# 파이썬 자료형을 JSON 문자열로 만드는 방법
d = {'name': '홍길동', 'birth': '0525', 'age': 30}
json_data = json.dumps(d)
json_data
```

    '{"name": "\\ud64d\\uae38\\ub3d9", "birth": "0525", "age": 30}'

```python
# json 문자열을 딕셔너리로 변환
json.loads(json_data)
```

    {'name': '홍길동', 'birth': '0525', 'age': 30}

```python
# 한글 문자열로 저장
d = {'name': '홍길동', 'birth': '0525', 'age': 30}
json_data = json.dumps(d, ensure_ascii=False)
json_data
```

    '{"name": "홍길동", "birth": "0525", "age": 30}'

```python
# json 문자열 정렬
d = {'name': '홍길동', 'birth': '0525', 'age': 30}
print(json.dumps(d, indent=2, ensure_ascii=False))
```

    {
      "name": "홍길동",
      "birth": "0525",
      "age": 30
    }

## 🍓 <font color='skyblue' face='BMJUAOTF' size='7'>urllib</font>

```python
# URL을 읽고 분석
import ssl  # SSL 인증서 검증 실패 시 문제를 회피하기 위한 라이브러리
import urllib.request

context = ssl._create_unverified_context  # SSL 인증서 검증을 비활성화 하는 Context 생성

def get_wikidocs(page):
    resource = f'https://wikidocs.net/{page}'
    with urllib.request.urlopen(resource, context=context) as s:
        with open(f'wikidocs_{page}.html', 'wb') as f:
            f.write(s.read())
```

## 🍓 <font color='skyblue' face='BMJUAOTF' size='7'>webbrowser</font>

```python
# 시스템 브라우저를 호출할 때 사용
import webbrowser

# 새 창으로 웹페이지를 열기
webbrowser.open_new('http://python.org')

# 기존에 열려있는 창으로 웹페이지 열기
webbrowser.open("http://python.org")
```

    True
