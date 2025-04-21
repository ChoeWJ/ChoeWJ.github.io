var store = [{
        "title": "[위클리 페이퍼] GROUP BY vs HAVING",
        "excerpt":"👑 GROUP BY와 HAVING의 차이점 🌟 GROUP BY GROUP BY는 데이터를 지정된 열을 기준으로 그룹화하는 SQL 절 동일한 값을 가진 행들을 하나의 그룹으로 묶음 집계 함수(COUNT, SUM, AVG 등)와 함께 사용 SELECT department, COUNT(*) as employee_count FROM employees GROUP BY department; 🌟 HAVING HAVING은 그룹화된 데이터에 대한 조건을 지정하는 SQL...","categories": ["docs","SQL","Basic"],
        "tags": ["DB","SQL","weekly_paper"],
        "url": "/docs/sql/basic-grid/Weekly_Paper_GROUPBY&HAVING/",
        "teaser": null
      },{
        "title": "[위클리 페이퍼] NULL",
        "excerpt":"👑 NULL 값의 개념 NULL은 데이터베이스에서 ‘알 수 없는’ 또는 ‘적용할 수 없는’ 값을 나타내는 특수한 표시자 숫자 0이나 빈 문자열(‘‘)과는 다른 개념 NULL과 NULL을 비교하면 결과는 NULL 산술 연산에서 NULL이 포함되면 결과는 NULL 👑 NULL 값 처리 함수 🌟 ISNULL() NULL 값을 다른 지정된 값으로 대체 SELECT ISNULL(column_name, '대체값')...","categories": ["docs","SQL","Basic"],
        "tags": ["DB","SQL","weekly_paper"],
        "url": "/docs/sql/basic-grid/Weekly_Paper_NULL/",
        "teaser": null
      },{
        "title": "[웹 크롤링] find() vs find_all()",
        "excerpt":"👑 find() vs find_all() find(tag, attrs, recursive, text, **kwargs) find_all(tag, attrs, recursive, text, `limit`, **kwargs) 🌟 매개변수 tag 태그 이름인 문자열, 리스트, 딕셔너리를 넘긴다 사용 예시 # &lt;h1&gt; ~ &lt;h6&gt; 태그를 모두 탐색 soup.find_all({'h1', 'h2', 'h3', 'h4', 'h5', 'h6'}) attrs 속성으로 이루어진 파이썬 딕셔너리를 받고, 그중 하나에 일치하는 태그를 탐색...","categories": ["docs","Web_Crawling","BeautifulSoup"],
        "tags": ["python","automation","web_crawling"],
        "url": "/docs/web_crawling/beautifulsoup-grid/find_vs_findall/",
        "teaser": null
      },{
        "title": "[Machine Learning] 첫 머신러닝 모델",
        "excerpt":"👑 사이킷런(Scikit-learn)이란? 공식문서 바로가기 파이썬 기반의 머신러닝 라이브러리 다양한 머신러닝 알고리즘과 데이터 전처리, 모델 평가 기능을 제공하는 오픈소스 라이브러리 간단한 API, 높은 확장성, 강력한 성능으로 데이터 분석과 머신러닝 모델 구축에 주로 사용 💥 특징 🍒 다양한 머신러닝 알고리즘 지도 학습(Supervised Learning): 회귀(Regression),분류(Classification) 모델 비지도 학습(Unsupervised Learning): 군집화(Clustering), 차원 축소(Dimensionality Reduction)...","categories": ["docs","ML-DL","ML"],
        "tags": ["python","ML","Data"],
        "url": "/docs/ml-dl/ml-grid/make_machine_learning/",
        "teaser": null
      },{
        "title": "[Machine Learning] 사이킷런의 내장데이터",
        "excerpt":"👑 사이킷런 내장데이터 # 사이킷런 datasets 라이브러리에서 붓꽃(iris) 데이터 불러오기 from sklearn.datasets import load_iris iris_df = load_iris() # 붓꽃(iris)데이터 로드 print(type(iris_df)) # 붓꽃(iris) 데이터 타입 출력 print() # 한 칸 띄우기 print(f\"붓꽃(iris)데이터 셋의 키:\\n{iris_df.keys()}\") # 붓꽃(iris) 데이터 키값들 출력 \"\"\"출력 결과\"\"\" &lt;class 'sklearn.utils._bunch.Bunch'&gt; 붓꽃(iris)데이터 셋의 키: dict_keys(['data', 'target', 'frame', 'target_names',...","categories": ["docs","ML-DL","ML"],
        "tags": ["python","ML","Data"],
        "url": "/docs/ml-dl/ml-grid/built_in_data_type/",
        "teaser": null
      },{
        "title": "[웹 크롤링] 자식, 자손, 형제, 부모",
        "excerpt":"👑 HTML 구조 분석 🌟 자식과 자손 children() 직계 자식 요소만 반환 즉, find로 찾은 태그의 바로 아래의 태그만 포함 import requests from bs4 import BeautifulSoup url = \"https://choewj.github.io/machine_learning/built_in_data_type/\" response = requests.get(url) soup = BeautifulSoup(response.text, 'html.parser') # page__content 클래스를 가지는 &lt;section&gt; 태그의 자식 요소들만 순환 for child in soup.find('section', {\"class\":...","categories": ["docs","Web_Crawling","BeautifulSoup"],
        "tags": ["python","automation","web_crawling"],
        "url": "/docs/web_crawling/beautifulsoup-grid/crawling_method/",
        "teaser": null
      },{
        "title": "[웹 크롤링] 웹 크롤링 시작하기",
        "excerpt":"🏆 웹 크롤링 시작하기 🍋 필수 라이브러리 설치 vscode 환경 기준 pip install notebook ipyekrnel requests bs4 lxml selenium webdriver-manager scrapy pandas openpyxl 🍋 BeautifulSoup 🌼 사용 방법 soup = BeautifulSoup(markup, parser, **kwargs) markup: HTML/XML 문자열 parser: HTML/XML을 해석하는 파서 **kwargs: 추가 옵션 (ex. from_encoding) 🌼 주요 메서드 🐯 find...","categories": ["docs","Web_Crawling","BeautifulSoup"],
        "tags": ["python","automation","web_crawling"],
        "url": "/docs/web_crawling/beautifulsoup-grid/web_crawling_start/",
        "teaser": null
      },{
        "title": "[웹 크롤링] requests 라이브러리",
        "excerpt":"👑 requests 🌟 설치 pip install requests 🌟 라이브러리 임포트 import requests 🌟 GET 요청 (데이터 가져오기) url = \"https://jsonplaceholder.typicode.com/posts/1\" # API 엔드포인트 설정 response = requests.get(url) # GET 요청 보내기 print(f\"상태 코드: {response.status_code}\\n\") # HTTP 응답 상태 코드 출력 (200이면 성공) print(f\"응답 데이터: \\n{response.text}\\n\") # 응답 데이터를 문자열로 출력...","categories": ["docs","Web_Crawling","BeautifulSoup"],
        "tags": ["python","automation","web_crawling"],
        "url": "/docs/web_crawling/beautifulsoup-grid/requests_library/",
        "teaser": null
      },{
        "title": "[웹 크롤링] 자동 입력 방지 우회하기",
        "excerpt":"👑 자동 입력 방지 사이트 우회하기 (네이버) 🌞 라이브러리 임포트 import time from selenium import webdriver from selenium.webdriver.chrome.service import Service from selenium.webdriver.chrome.options import Options from webdriver_manager.chrome import ChromeDriverManager from selenium.webdriver.common.by import By from selenium.webdriver.common.keys import Keys # 크롬 옵션 설정 chrome_options = Options() chrome_options.add_experimental_option(\"detach\", True) # 브라우저 창 유지 chrome_options.add_experimental_option(\"excludeSwitches\",...","categories": ["docs","Web_Crawling","Selenium"],
        "tags": ["python","automation","web_crawling","Selenium"],
        "url": "/docs/web_crawling/selenium-grid/Bypassing_Automatic_Input_Prevention/",
        "teaser": null
      },{
        "title": "[PySide6] 위젯 총정리",
        "excerpt":"👑 PySide6 위젯 🍒1. 레이아웃 (Layouts) 위젯을 자동으로 정렬하는 컨테이너입니다. 위젯 설명 Vertical Layout 위젯을 수직으로 정렬 Horizontal Layout 위젯을 수평으로 정렬 Grid Layout 그리드(행/열 구조) 로 정렬 Form Layout 라벨과 입력 필드를 폼 형태로 정렬 🍒 간격 조절 (Spacers) 위젯 간의 간격을 조정하는 요소입니다. 위젯 설명 Horizontal Spacer 가로...","categories": ["docs","PySide6","Widget"],
        "tags": ["python","pyside6"],
        "url": "/docs/pyside6/widget-grid/Pyside6_Sidebar/",
        "teaser": null
      },{
        "title": "[웹 크롤링] Selenium Select Box 컨트롤",
        "excerpt":"👑 Select Box 컨트롤 공식문서 바로가기 🏆 Select 클래스 주요 기능 명령 설명 select_by_visible_text(text) 옵션의 텍스트로 선택 select_by_value(value) value 속성값으로 선택 select_by_index(index) 인덱스(0부터 시작)로 선택 deselect_all() 모든 선택 해제 (멀티 선택 가능할 때 사용) deselect_by_index(index) 특정 인덱스의 옵션 선택 해제 deselect_by_value(value) 특정 value의 옵션 선택 해제 deselect_by_visible_text(text) 특정 텍스트의 옵션...","categories": ["docs","Web_Crawling","Selenium"],
        "tags": ["python","automation","web_crawling","Selenium"],
        "url": "/docs/web_crawling/selenium-grid/Select_box/",
        "teaser": null
      },{
        "title": "[웹 크롤링] Selenium 입력 컨트롤",
        "excerpt":"👑 Selenium 입력 컨트롤 더 많은 컨트롤 알아보기 ☜☜☜ 클릭!!! import time import requests from bs4 import BeautifulSoup from selenium import webdriver from selenium.webdriver.chrome.service import Service from selenium.webdriver.chrome.options import Options from webdriver_manager.chrome import ChromeDriverManager from selenium.webdriver.common.by import By from selenium.webdriver.common.keys import Keys # 크롬 옵션 설정 chrome_options = Options() chrome_options.add_experimental_option(\"detach\",...","categories": ["docs","Web_Crawling","Selenium"],
        "tags": ["python","automation","web_crawling","Selenium"],
        "url": "/docs/web_crawling/selenium-grid/Selenium_Advanced_Control/",
        "teaser": null
      },{
        "title": "[웹 크롤링] Selenium으로 브라우저 조작하기",
        "excerpt":"👑 브라우저 조작하기 🍄 라이브러리 불러오기 # Selenium 라이브러리에서 웹드라이버 관련 모듈 불러오기 from selenium import webdriver # ChromeDriver 실행을 관리하는 Service 클래스 불러오기 from selenium.webdriver.chrome.service import Service # Chrome 실행 옵션을 설정하기 위한 Options 클래스 불러오기 from selenium.webdriver.chrome.options import Options # ChromeDriver를 자동으로 다운로드 및 설치하는 라이브러리 from webdriver_manager.chrome...","categories": ["docs","Web_Crawling","Selenium"],
        "tags": ["python","automation","web_crawling","Selenium"],
        "url": "/docs/web_crawling/selenium-grid/Selenium_Control/",
        "teaser": null
      },{
        "title": "[웹 크롤링] Selenium 스크롤 조작",
        "excerpt":"👑 동적페이지 스크롤 조작 💥 라이브러리 임포트 import time from selenium import webdriver from selenium.webdriver.chrome.service import Service from selenium.webdriver.chrome.options import Options from webdriver_manager.chrome import ChromeDriverManager # 크롬 옵션 설정 chrome_options = Options() chrome_options.add_experimental_option(\"detach\", True) # 브라우저 창 유지 chrome_options.add_experimental_option(\"excludeSwitches\", [\"enable-logging\"]) # ChromeDriver 실행 service = Service(ChromeDriverManager().install()) driver = webdriver.Chrome(service=service, options=chrome_options)...","categories": ["docs","Web_Crawling","Selenium"],
        "tags": ["python","automation","web_crawling","Selenium"],
        "url": "/docs/web_crawling/selenium-grid/Selenium_Scroll/",
        "teaser": null
      },{
        "title": "[웹 크롤링] Implicit Wait vs Explicit Wait",
        "excerpt":"👑 암시적 대기 vs 명시적 대기 🍑 기본 설정 라이브러리 자세히 알아보기 ☜☜☜ 사용된 라이브러리가 궁금하다면!!! import time import requests from bs4 import BeautifulSoup from selenium import webdriver from selenium.webdriver.chrome.service import Service from selenium.webdriver.chrome.options import Options from webdriver_manager.chrome import ChromeDriverManager from selenium.webdriver.common.by import By from selenium.webdriver.common.keys import Keys # 크롬...","categories": ["docs","Web_Crawling","Selenium"],
        "tags": ["python","automation","web_crawling","Selenium"],
        "url": "/docs/web_crawling/selenium-grid/Selenium_Wait/",
        "teaser": null
      },{
        "title": "[웹 크롤링] Selenium 기본 사용 템플릿",
        "excerpt":"👑 기본 설정 🎖️ 라이브러리 불러오기 # 시간 관련 기능을 제공하는 표준 라이브러리 (대기 시간 설정 등에 사용) import time # HTTP 요청을 보내는 라이브러리 (웹페이지의 HTML 데이터를 가져올 때 사용) import requests # HTML을 파싱(분석)하는 라이브러리 (BeautifulSoup 객체를 사용하여 HTML 데이터를 다룰 수 있음) from bs4 import BeautifulSoup #...","categories": ["docs","Web_Crawling","Selenium"],
        "tags": ["python","automation","web_crawling","Selenium"],
        "url": "/docs/web_crawling/selenium-grid/Selenium_basic_template/",
        "teaser": null
      },{
        "title": "[위클리 페이퍼] 논리적 모델링",
        "excerpt":"👑 논리적 모델링 (Logical Modeling) 🌟 개념적 모델링에서 논리적 데이터베이스 설계로의 전환 개념적 데이터 모델링은 기본 개념적 모델링과 상세 개념적 모델링 두 단계로 구성 기본 개념적 모델링에서는 엔티티, 애트리뷰트, UID, 릴레이션십을 추출하고, 상세 개념적 모델링에서는 정규화를 통해 기본 모델링 결과를 검증하고, M:N 관계를 1:N 관계로 해소 논리적 데이터베이스 설계는 ERD를...","categories": ["docs","SQL","Basic"],
        "tags": ["DB","weekly_paper"],
        "url": "/docs/sql/basic-grid/Weekly_Paper_Modeling/",
        "teaser": null
      },{
        "title": "[위클리 페이퍼] 데이터 베이스 정규화",
        "excerpt":"👑 정규화 정규화는 데이터베이스를 보다 잘 조직화하고 이상 현상을 방지하며 정규화를 통해 테이블 구조를 향상시키며, 데이터 입력 및 수정 과정에서 발생할 수 있는 삽입, 갱신, 삭제 이상 현상을 제거할 수 있지만, 정규화를 수행하면 조인의 횟수가 증가하여 조회 성능이 떨어질 수 있다 🌟 데이터베이스 정규화의 개념과 효과 정규화는 데이터베이스에서 이상 현상을...","categories": ["docs","SQL","Basic"],
        "tags": ["DB","weekly_paper"],
        "url": "/docs/sql/basic-grid/Weekly_Paper_Normalization/",
        "teaser": null
      },{
        "title": "[Python] 정규 표현식",
        "excerpt":"👑 정규표현식 🍑 정규 표현식의 개요 및 활용 사례 정규 표현식(Regular Expression, regex)은 특정한 패턴을 정의하여 문자열을 탐색, 검증, 추출 또는 변경할 때 사용되는 매우 강력한 도구 정규 표현식은 Python뿐만 아니라 Java, PHP, C#, Groovy, Swift, Ruby, JavaScript 등 다양한 프로그래밍 언어에서 호환됨 🍑 정규 표현식의 필요성 및 활용 사례...","categories": ["docs","Python","Regular_Expression"],
        "tags": ["Python","Regular_Expression"],
        "url": "/docs/python/regular_expression-grid/Regular_Expressions/",
        "teaser": null
      },{
        "title": "[프로덕트 데이터 분석] Y Combinator Series A 펀딩 가이드",
        "excerpt":"👑 Y Combinator Series A 펀딩 가이드 요약 원문버전 다운로드 한글번역본 다운로드 🏆 주요 내용 요약 🥑 Series A 펀딩이란? Series A는 스타트업이 초기 성장을 넘어 본격적인 확장을 위해 받는 투자입니다. 제품-시장 적합성(Product-Market Fit)을 확인하고 본격적인 성장 동력을 얻는 것이 목표입니다. 주요 참여자는 기관 투자자로서 회사의 성장 가능성과 수익성을 평가합니다....","categories": ["docs","PM","Product_Data"],
        "tags": ["PM","PO","Product_Data"],
        "url": "/docs/pm/product_data-grid/Y-Combinator-Series-A/",
        "teaser": null
      },{
        "title": "[데이터 분석을 위한 통계학] EDA - 01",
        "excerpt":"🏆 탐색적 데이터 분석 (EDA) 🍑 정형화된 데이터의 요소 🍔 수치형(numeric) 데이터: 숫자를 이용해 표현할 수 있는 데이터 연속형(continuous) 데이터: 일정 범위 안에서 어떤 값이든 취할 수 있는 데이터 (ex. 풍속, 지속시간) 유의어: 구간형, 실수형, 수치형 이산(discrete) 데이터: 횟수와 같은 정수 값만 취할 수 있는 데이터 유의어: 정수형, 횟수 🍔...","categories": ["docs","Statistics","For_Data"],
        "tags": ["python","Statistics","Selenium"],
        "url": "/docs/statistics/for_data-grid/EDA_01/",
        "teaser": null
      },{
        "title": "[프로덕트 데이터 분석] 01 제품 체크리스트",
        "excerpt":"🏆 제품 개발 시 꼭 확인해야 하는 핵심 사항 🥮시장 대안 탐색과 제품 개발 과정 제품 개발을 시작하기 전, Product Market Fit(PMF)을 달성하기 위해 사용자의 현재 제품 사용 환경과 문제점을 분석하고 기존 제품이나 서비스가 존재하는지 철저히 조사하여 자사의 제품이 제공할 수 있는 차별화된 가치를 명확하게 설정한다. 최종적으로 개발되는 제품은 기존의...","categories": ["docs","PM","Data_Literacy"],
        "tags": ["PM","Data_Literacy","Data"],
        "url": "/docs/pm/data_literacy-grid/PM_01_01/",
        "teaser": null
      },{
        "title": "[프로덕트 데이터 분석] 02 비즈니스 모델",
        "excerpt":"👑 회사 방향성과 비즈니스 모델 🍆 회사의 비즈니스 방향성과 전략 회사의 비즈니스 방향성은 과거의 맥락을 기반으로 설정해야 하고 전략과 로드맵은 명확히 구분하여 이해해야 한다. 일반적으로 계획은 예산 및 비용과 같이 통제 가능한 영역에서 구체적으로 관리되어야 하고, 반면 전략은 불확실성이 높은 미래의 목표를 달성하는 방법을 다루기 때문에 결과를 완전히 보장하지는 못한다....","categories": ["docs","PM","Data_Literacy"],
        "tags": ["PM","Data_Literacy","Data"],
        "url": "/docs/pm/data_literacy-grid/PM_01_02/",
        "teaser": null
      },{
        "title": "[프로덕트 데이터 분석] 03 조직 구조 파악",
        "excerpt":"👑 제품과 조직 구조 파악 🍓 제품의 핵심 문서 파악하기 제품을 처음 접할 때는 화면 기획서를 가장 먼저 확인해야 한다. 화면 기획서는 앱이나 웹사이트의 각 화면이 어떻게 구성되어 있는지 보여주는 문서로, 제품을 이해하는 첫 단계인데, 이를 통해 각 기능이 구현된 이유와 목적을 파악할 수 있으며, 만약 자료가 없다면 바로 문서화를...","categories": ["docs","PM","Data_Literacy"],
        "tags": ["PM","Data_Literacy","Data"],
        "url": "/docs/pm/data_literacy-grid/PM_01_03/",
        "teaser": null
      },{
        "title": "[프로덕트 데이터 분석] 04 데이터 조직 구조",
        "excerpt":"👑 데이터 조직 구조 🧄 데이터 조직 구조의 중요성과 특징 데이터 조직의 구조는 기업 내에서 데이터 활용 가능성을 좌우하는 중요한 요소이다. 데이터 조직은 CEO 직속, CTO 직속, 사업 운영 조직 내 위치 등 다양한 형태로 구성될 수 있으며, 이는 데이터 문화와 인프라 발전 수준에도 직접적인 영향을 미친다. 초기에는 데이터 팀...","categories": ["docs","PM","Data_Literacy"],
        "tags": ["PM","Data_Literacy","Data"],
        "url": "/docs/pm/data_literacy-grid/PM_01_04/",
        "teaser": null
      },{
        "title": "[프로덕트 데이터 분석] 05 데이터 문화",
        "excerpt":"👑 데이터 문화 🥦 데이터 접근성과 제품 지표 파악하기 데이터 기반 의사결정을 위해 우선 회사가 보유한 데이터를 명확히 파악해서 초기는 핵심 제품 지표부터 접근하여 점차 구체적인 데이터로 나아가야 한다. 주요 제품 지표 설명 및 중요성 DAU (Daily Active User) 일별 활성 사용자 수, 제품의 일상적 사용도 측정 WAU (Weekly Active...","categories": ["docs","PM","Data_Literacy"],
        "tags": ["PM","Data_Literacy","Data"],
        "url": "/docs/pm/data_literacy-grid/PM_01_05/",
        "teaser": null
      },{
        "title": "[프로덕트 데이터 분석] 06 데이터 인프라",
        "excerpt":"👑 데이터 인프라 🍋 데이터 인프라의 개념과 주요 요소 데이터 인프라란 데이터를 효과적으로 사용하고 저장하며 공유할 수 있도록 지원하는 소프트웨어 및 서비스를 말하는데 여기에는 SaaS 형태로 제공되는 서비스도 포함되며, 주로 다음과 같은 도구들이 사용된다. 데이터 인프라 구성 요소 주요 역할 및 예시 대시보드 (BI 플랫폼) 주요 지표 시각화 및 공유...","categories": ["docs","PM","Data_Literacy"],
        "tags": ["PM","Data_Literacy","Data"],
        "url": "/docs/pm/data_literacy-grid/PM_01_06/",
        "teaser": null
      },{
        "title": "[위클리 페이퍼] AARRR 프레임워크와 Retention 그리고 Funnel",
        "excerpt":"👑 AARRR 프레임워크와 리텐션, 퍼널 분석 AARRR 프레임워크는 사용자의 전환 여정을 총 5단계로 나누어, 각 단계에서의 행동과 성과를 분석함으로써 제품 성장 전략을 수립하는 데 활용되는 대표적인 퍼널 프레임워크 이는 500 Startups의 Dave McClure가 제안한 것으로, Acquisition → Activation → Retention → Revenue → Referral 순으로 고객을 이해하고 최적화할 수 있게...","categories": ["docs","Weekly_Papers","PM","지표분석"],
        "tags": ["PM","PO","지표분석"],
        "url": "/docs/weekly_papers/pm/%EC%A7%80%ED%91%9C%EB%B6%84%EC%84%9D-grid/Weekly_Paper_AARRR_Retention_Funnel/",
        "teaser": null
      },{
        "title": "[위클리 페이퍼] 코호트(Cohort) vs 세그먼트(Segment)",
        "excerpt":"👑 코호트(Cohort)와 세그먼트(Segment)의 차이 디지털 마케팅, CRM(Customer Relationship Management), 데이터 분석에서 고객을 그룹화하는 주요 방식으로 코호트(Cohort)와 세그먼트(Segment)가 사용되는데, 이 두 개념은 비슷해 보이지만, 분석 목적과 그룹 기준에서 본질적인 차이를 지니며, 다양한 마케팅 전략 수립과 퍼널 최적화에 활용된다. 🍓 코호트 (Cohort)란? 코호트는 특정 시점 또는 동일한 행동을 기준으로 사용자들을 그룹화한 것...","categories": ["docs","Weekly_Papers","PM","지표분석"],
        "tags": ["PM","PO","지표분석"],
        "url": "/docs/weekly_papers/pm/%EC%A7%80%ED%91%9C%EB%B6%84%EC%84%9D-grid/Weekly_Paper_Cohort_Segment/",
        "teaser": null
      },{
        "title": "[위클리 페이퍼] 고객 생애 가치 (LTV: Lifetime Value)",
        "excerpt":"👑 고객 생애 가치 (LTV: Lifetime Value) LTV(Lifetime Value)는 개별 고객이 평균적으로 기업에 가져다주는 총 수익을 나타내는 핵심 지표로, 제품 또는 서비스의 수익성 평가, 마케팅 전략 수립, 고객 세분화에 필수적인 역할을 하는데, 특히 반복 구매 또는 구독 모델을 가진 비즈니스에서 중요한 의미를 가지며, CAC(Customer Acquisition Cost)와 함께 활용하여 ROI를 측정한다....","categories": ["docs","Weekly_Papers","PM","지표분석"],
        "tags": ["PM","PO","지표분석"],
        "url": "/docs/weekly_papers/pm/%EC%A7%80%ED%91%9C%EB%B6%84%EC%84%9D-grid/Weekly_Paper_LTV/",
        "teaser": null
      },{
        "title": "[위클리 페이퍼] RFM 분석",
        "excerpt":"👑 RFM 분석 (Recency, Frequency, Monetary Value) RFM 분석은 고객의 구매 이력을 바탕으로 고객을 평가하고 세분화하는 대표적인 고객 가치 분석 방법 각각의 요소는 고객의 최근성(Recency), 빈도(Frequency), 금액(Monetary)을 의미하며, 이 세 가지 요소를 기반으로 데이터 기반의 마케팅 전략 수립이 가능하다. 🍓 각 요소 설명 Recency (최근 구매 시점): 고객이 마지막으로 구매한...","categories": ["docs","Weekly_Papers","PM","지표분석"],
        "tags": ["PM","PO","지표분석"],
        "url": "/docs/weekly_papers/pm/%EC%A7%80%ED%91%9C%EB%B6%84%EC%84%9D-grid/Weekly_Paper_RFM/",
        "teaser": null
      },{
        "title": "[위클리 페이퍼] 획득 지표",
        "excerpt":"👑 우버(Uber)모빌리티 플랫폼의 주요 획득 지표 🍓 우버(Uber)란? Uber는 실시간 차량 호출과 위치 기반 서비스를 중심으로 한 모빌리티 플랫폼으로, 고객이 앱을 설치한 이후 처음으로 차량 호출을 완료하는 순간이 핵심 Activation 지점이며, 이 경험이 향후 재사용 여부와 유료 이용 확률에 직접적인 영향을 주게 되고, 특히 Uber는 초기 이용자의 승차 경험 품질을...","categories": ["docs","Weekly_Papers","PM","지표분석"],
        "tags": ["PM","PO","지표분석"],
        "url": "/docs/weekly_papers/pm/%EC%A7%80%ED%91%9C%EB%B6%84%EC%84%9D-grid/Weekly_Paper_Requirement/",
        "teaser": null
      },{
        "title": "[버전 관리 기초] Git과 VSCode로 협업과 코드 관리 시작하기",
        "excerpt":"🏆 Git과 VSCode로 시작하는 버전 관리와 협업 🗂️ Git 기초: 버전 관리의 시작 📌 Git이란? Git은 소스 코드를 관리하기 위한 분산 버전 관리 시스템(DVCS)으로, 2005년 리누스 토르발즈(Linus Torvalds)가 리눅스 커널 개발을 위해 만들었습니다. Git은 로컬과 원격 저장소를 통해 변경 사항을 추적하며, 여러 개발자가 동시에 작업할 수 있도록 지원합니다. Git의 주요...","categories": ["docs","Git"],
        "tags": ["Git","VSCode","Version Control","Collaboration"],
        "url": "/docs/git-grid/Git(CLI)_VSCode/",
        "teaser": null
      },{
        "title": "[웹 보안 기초] OWASP Top 10과 주요 취약점 이해하기",
        "excerpt":"🏆 OWASP Top 10과 웹 보안 취약점 이해하기 🔒 OWASP Top 10이란? 🛡️ OWASP Top 10의 정의와 목적 OWASP Top 10 은 웹 애플리케이션에서 가장 흔히 발생하는 보안 취약점 10가지를 정리한 리스트입니다. OWASP는 2003년부터 이 리스트를 발표하기 시작했으며, 주기적으로 업데이트를 통해 최신 보안 위협을 반영합니다. 2025년 기준으로 최신 리스트는 2021년에...","categories": ["docs","Security"],
        "tags": ["Web Security","OWASP","SQL Injection","XSS"],
        "url": "/docs/security-grid/SQL_Injection_and_XSS/",
        "teaser": null
      },{
        "title": "[데이터 분석을 위한 통계학] 자유도(Degrees of Freedom)",
        "excerpt":"자유도란? 통계학에서 자유도(Degrees of Freedom, DoF)는 데이터 분석이나 통계적 추정에서 변수가 자유롭게 변할 수 있는 독립적인 값의 수를 의미합니다. 쉽게 말해, 어떤 제약 조건을 만족하면서도 자유롭게 선택할 수 있는 값의 개수라고 생각할 수 있습니다. 자유도 는 주로 분산, 표준편차, t-검정, 카이제곱 검정 등 통계량을 계산하거나 분포를 정의할 때 중요한 역할을...","categories": ["docs","Statistics","For_Data"],
        "tags": ["python","Statistics","Selenium"],
        "url": "/docs/statistics/for_data-grid/degrees_of_freedom/",
        "teaser": null
      },{
        "title": "[프론트엔드 기초] HTML과 CSS로 웹 페이지 구조와 스타일링 배우기",
        "excerpt":"🏆 HTML과 CSS로 시작하는 프론트엔드 개발 프론트엔드 개발은 웹사이트의 사용자 인터페이스를 설계하고 구현하는 과정으로, HTML과 CSS는 그 기초를 이루는 핵심 기술입니다. HTML은 웹 페이지의 구조를 정의하고, CSS는 그 구조에 스타일을 적용하여 시각적으로 매력적인 웹 페이지를 만듭니다. 🌐 HTML 기초: 웹 페이지의 구조 정의하기 📜 HTML과 DOCTYPE 선언 HTML (HyperText Markup...","categories": ["docs","Front","HTML_CSS"],
        "tags": ["HTML","CSS","Web Development"],
        "url": "/docs/front/html_css-grid/html_css/",
        "teaser": null
      },{
        "title": "[데이터 과학 기초] Python과 Jupyter Notebook으로 시작하는 데이터 분석 환경 구축",
        "excerpt":"🏆 Python과 Jupyter Notebook으로 데이터 분석 시작하기 🍑 데이터 분석 환경 구축: Anaconda와 Python 🍔 Anaconda란 무엇인가? Anaconda는 데이터 과학 및 머신러닝 작업을 위한 Python 배포판으로, Python과 함께 다양한 필수 라이브러리(NumPy, pandas, matplotlib 등)를 포함하고 있습니다. 또한, 패키지 관리와 가상 환경 설정을 쉽게 할 수 있는 Conda라는 패키지 매니저를 제공합니다....","categories": ["docs","Python","Basic"],
        "tags": ["Python","Jupyter Notebook","Anaconda","Data Analysis"],
        "url": "/docs/python/basic-grid/python_jupyter/",
        "teaser": null
      },{
        "title": "[데이터 분석을 위한 통계학] 변이(valiablity) 추정",
        "excerpt":"변이(valiablity) 추정 변이는 데이터 값이 얼마나 밀집해 있는지 혹은 퍼져 있는지를 나타내는 산포토(dispersion)를 나타낸다. 이를 측정하고, 줄이고, 랜덤과 구분하고 다양한 요인들을 알아보고, 변이가 있는 상황에서 결정을 내리는 등 통계의 핵심 속에는 변이가 있다. 변이 측정 측정하는 한 가지 방법은 편차들의 대표값을 추정하는 것 편차 자체의 평균을 구하는 것은 바람직하지 않지만...","categories": ["docs","Statistics","For_Data"],
        "tags": ["python","Statistics"],
        "url": "/docs/statistics/for_data-grid/variability/",
        "teaser": null
      },{
        "title": "[GitHub 활용] GitHub로 협업과 웹 배포 시작하기",
        "excerpt":"🏆 GitHub로 시작하는 협업과 웹 배포 🌍 GitHub 원격 저장소: 협업의 시작 📌 GitHub 원격 저장소란? GitHub는 Git 저장소를 호스팅하는 플랫폼으로, 원격 저장소(remote repository)를 생성하여 로컬 저장소와 연결할 수 있다. 원격 저장소를 사용하면 팀원 간 코드 공유와 협업이 가능하며, 변경 사항을 추적하고 관리할 수 있다. 원격 저장소의 주요 명령어: git...","categories": ["docs","Git"],
        "tags": ["GitHub","Collaboration","Git Remote","GitHub Pages"],
        "url": "/docs/git-grid/GitHub/",
        "teaser": null
      },{
        "title": "[프로덕트 데이터 분석] 08 데이터 활용",
        "excerpt":"👑 데이터를 올바르게 이해하고 활용하기 🌽 데이터에 대한 잘못된 오해와 올바른 이해 ✅ 흔히 데이터는 그 자체로 정답을 알려준다고 생각하지만, 데이터는 단지 힌트를 제공할 뿐 데이터에서 인사이트를 찾아내고 이를 해석하는 것은 전적으로 사람의 몫이다. 흔한 오해 ❌ 올바른 이해 ✅ 데이터에 항상 정답이 존재한다. 데이터는 답이 아닌 힌트를 줄 뿐이며,...","categories": ["docs","PM","Data_Literacy"],
        "tags": ["PM","Data_Literacy","Data"],
        "url": "/docs/pm/data_literacy-grid/PM_02_02/",
        "teaser": null
      },{
        "title": "[웹 보안 기초] SQL Injection 이해와 방어 기법",
        "excerpt":"🏆 SQL Injection 이해와 방어 기법 🔒 SQL Injection: 취약점의 이해 📌 SQL Injection이란? SQL Injection은 공격자가 웹 애플리케이션의 입력 필드를 통해 악의적인 SQL 쿼리를 삽입하여 데이터베이스를 조작하는 공격 기법이다 사용자가 입력한 데이터가 적절히 검증되지 않을 경우, 공격자는 데이터베이스의 데이터를 조회, 수정, 삭제하거나 시스템에 접근할 수 있다 사용자가 로그인 폼에...","categories": ["docs","Security"],
        "tags": ["Web Security","SQL Injection","OWASP","Database Security"],
        "url": "/docs/security-grid/Understand_SQL_Injection/",
        "teaser": null
      },{
        "title": "[데이터 과학 기초] Python 제어문과 반복문",
        "excerpt":"🏆 Python으로 시작하는 제어문과 반복문 🛠️ Python 제어문: 프로그램 흐름 제어하기 📌 제어문이란? 제어문은 프로그램의 실행 흐름을 조건에 따라 제어하는 구문이다 Python에서는 if, elif, else를 사용해 조건에 따라 다른 코드를 실행할 수 있다 기본 if 문법 x = 10 if x &gt; 0: print(\"x는 양수이다\") 조건(x &gt; 0)이 참일 경우...","categories": ["docs","Data","Python"],
        "tags": ["Python","Data Analysis"],
        "url": "/docs/data/python-grid/loop_and_control/",
        "teaser": null
      },{
        "title": "[Numpy] nd.array",
        "excerpt":"ndim 정의: 배열의 차원 수(축의 개수)를 반환하는 속성이다 용도: 배열이 1차원인지, 2차원인지, 혹은 더 높은 차원인지 확인할 때 사용 예시: import numpy as np arr_1d = np.array([1, 2, 3]) # 1차원 arr_2d = np.array([[1, 2], [3, 4]]) # 2차원 arr_3d = np.array([[[1, 2], [3, 4]]]) # 3차원 print(arr_1d.ndim) # 1...","categories": ["docs","Python","Data"],
        "tags": ["Python","Data Analysis"],
        "url": "/docs/python/data-grid/ndarray/",
        "teaser": null
      },{
        "title": "[프로덕트 데이터 분석] 09 데이터 리터러시",
        "excerpt":"👑 데이터 리터러시의 개념과 중요성 데이터 리터러시란 데이터를 읽고 이해하며, 이를 바탕으로 올바른 의사 결정을 내리는 능력을 말한다. 이는 단순한 데이터를 보는 능력을 넘어 데이터를 통해 문제를 해결하고 목표를 달성하는 것이 핵심이다. 데이터 문해력은 데이터를 해석하여 숨겨진 의미를 찾아내는 능력이다. 예를 들어 엑셀 데이터 속에서 패턴이나 인사이트를 도출하는 것이 데이터...","categories": ["docs","PM","Data_Literacy"],
        "tags": ["PM","Data_Literacy","Data"],
        "url": "/docs/pm/data_literacy-grid/PM_02_03/",
        "teaser": null
      },{
        "title": "[SQL] 정규 표현식",
        "excerpt":"1. MySQL에서 사용하는 정규표현식 MySQL은 REGEXP (또는 RLIKE) 연산자를 사용해 정규표현식을 지원합니다. MySQL 8.0.4 이후로는 ICU(International Components for Unicode) 라이브러리를 기반으로 작동하며, 이전 버전에서는 Henry Spencer의 POSIX 기반 정규표현식을 사용했습니다. 여기서는 최신 버전 기준으로 설명합니다. 주요 특징 REGEXP는 문자열 내에서 패턴이 일치하는지 확인하며, 전체 문자열이 아닌 부분 문자열에도 적용됩니다. 기본적으로...","categories": ["docs","SQL","Advanced"],
        "tags": ["DB","SQL","Advanced"],
        "url": "/docs/sql/advanced-grid/SQL_regular_expression/",
        "teaser": null
      },{
        "title": "[Learning_SQL] 🔐 Chapter_04",
        "excerpt":"필터링 4.1 조건 작성 조건은 하나 이상의 연산자와 결합된 하나 이상의 표현식으로 구성된다. 연산자 =, !=, &lt;, &gt;, like, in, between 산술 연산자 표현식의 구성 숫자 테이블 또는 뷰의 열 문자열 내장함수 서브쿼리 표현식 목록 4.2 조건 유형 4.2.1 동등 조건 equality conditions -- 2005년 6월 14일에 영화를 대여한 모든...","categories": ["docs","SQL","Learning_SQL"],
        "tags": ["SQL","Learning_SQL"],
        "url": "/docs/sql/learning_sql-grid/learning_sql_chapter_04/",
        "teaser": null
      },{
        "title": "[Learning_SQL] 🔐 Chapter_05",
        "excerpt":"Chapter 5 다중 테이블 쿼리 5.1 조인 -- 테이블 정의 확인 desc customer; desc address; 5.1.1 데카르트 곱 cross join 모든 순열을 생성 쿼리가 어떻게 두 테이블을 조인해야할지 지정하지 않았기 때문 -- cross join select concat(c.first_name, ' - ', c.last_name) customer_name, a.address from customer c join address a; 5.1.2 내부...","categories": ["docs","SQL","Learning_SQL"],
        "tags": ["SQL","Learning_SQL"],
        "url": "/docs/sql/learning_sql-grid/learning_sql_chapter_05/",
        "teaser": null
      },{
        "title": "[Learning_SQL] 🔐 Chapter_06",
        "excerpt":"Chapter 6 집합 연산자 select 1 num, 'abc' str union select 9 num, 'xyz' str; 6.1 집합 연산자 6.1.1 union 연산자 -- union all -- 최종 데이터셋의 행 수는 항상 결합되는 집합의 행 수의 총합과 같음 (중복 허용) select c.first_name, c.last_name from customer c where c.first_name like 'J%' and c.last_name...","categories": ["docs","SQL","Learning_SQL"],
        "tags": ["SQL","Learning_SQL"],
        "url": "/docs/sql/learning_sql-grid/learning_sql_chapter_06/",
        "teaser": null
      },{
        "title": "[Python] 표준 라이브러리",
        "excerpt":"👑 Standard Library 출처: 위키독스 - 점프투파이썬 점프투파이썬 2024년 통합 버전 유튜브 강의 🍓 datetime.date import datetime # D-Day 계산 day1 = datetime.date(2025, 1, 16) day2 = datetime.date(2025, 4, 2) diff = day2 - day1 diff.days 76 # 요일 탐색 1 - 월요일: 0, 화요일: 1, ... 일요일: 6 day...","categories": ["docs","Python","Basic"],
        "tags": ["Python","Jupyter Notebook","Anaconda","Data Analysis"],
        "url": "/docs/python/basic-grid/python_standard_library/",
        "teaser": null
      },{
        "title": "[프로덕트 데이터 분석] 10 문제 정의",
        "excerpt":"👑 문제 정의의 중요성과 방법 🥥 문제 정의의 중요성과 본질 문제는 현재 상황과 바라는 상황의 차이에서 발생하며, 이를 정확히 파악하는 것이 문제 해결의 첫 단계가 될 수 있다. 문제(problem)의 어원은 “앞에 튀어나온 장애물”을 의미하며, 극복해야 하는 대상이며 지속적으로 변화하고 새로운 형태로 나타나기 때문에 끊임없는 문제 탐구와 재정의가 필요하다. 🥥 문제...","categories": ["docs","PM","Data_Literacy"],
        "tags": ["PM","Data_Literacy","Data"],
        "url": "/docs/pm/data_literacy-grid/PM_03/",
        "teaser": null
      },{
        "title": "[Learning_SQL] 🔐 Chapter_08",
        "excerpt":"Chapter 8 그룹화와 집계 8.1 그룹화 개념 -- 기본 템플릿 select customer_id from customer group by customer_id; -- 집계 함수 사용 select customer_id, count(*) from rental group by customer_id; -- 정렬 select customer_id, count(*) from rental group by customer_id order by count(*) desc; -- 필터링 select customer_id, count(*) from rental...","categories": ["docs","SQL","Learning_SQL"],
        "tags": ["SQL","Learning_SQL"],
        "url": "/docs/sql/learning_sql-grid/learning-sql_chapter_08/",
        "teaser": null
      },{
        "title": "[Learning_SQL] 🔐 Chapter_07",
        "excerpt":"Chapter 7 데이터 생성, 조작, 변환 -- chapter 7에서 사용할 테이블 생성 create table string_tbl ( char_fld char(30), vchar_fld varchar(30), text_fld text ); 7.1 문자열 데이터 처리 7.1.1 문자열 생성 문자열 데이터를 테이블에 삽입할 때, 해당 열의 최대 크기를 초과하면 서버에서 예외가 발생한다 insert into string_tbl (char_fld, vchar_fld, text_fld) value...","categories": ["docs","SQL","Learning_SQL"],
        "tags": ["SQL","Learning_SQL"],
        "url": "/docs/sql/learning_sql-grid/learning_sql_chapter_07/",
        "teaser": null
      },{
        "title": "[프로덕트 데이터 분석] 12 지표 설계",
        "excerpt":"👑 지표의 구성 요소와 설계 방법 🧀 지표의 정의와 구성 요소 구성 요소 정의 예시 이벤트 행동 사용자가 서비스 내에서 수행하는 행동 구매 클릭, 페이지 방문 시간축 데이터를 집계하는 시간 단위 일별, 주별, 월별 차원 데이터를 세분화하는 속성 성별, 연령대, 국가별 집계값 데이터를 요약한 값 카운트, 평균, 합계 조건 특정...","categories": ["docs","PM","Data_Literacy"],
        "tags": ["PM","Data_Literacy","Data"],
        "url": "/docs/pm/data_literacy-grid/PM_04_02/",
        "teaser": null
      },{
        "title": "[프로덕트 데이터 분석] 13 Active User (AU)",
        "excerpt":"👑 데이터 분석의 핵심 지표 🍞 주요 지표 소개 데이터 분석 시 활용되는 주요 지표들은 다음과 같습니다. 지표 의미 AU 특정 기간 동안 서비스나 앱을 활발하게 이용한 사용자 DAU (Daily Active User) 하루 동안 한 번이라도 서비스를 이용한 액티브 사용자 수 WAU (Weekly Active User) 일주일 동안 서비스를 이용한 액티브...","categories": ["docs","PM","Data_Literacy"],
        "tags": ["PM","Data_Literacy","Data"],
        "url": "/docs/pm/data_literacy-grid/PM_04_03/",
        "teaser": null
      },{
        "title": "[프로덕트 데이터 분석] 14 Page View(PV)와 Unique View(UV)",
        "excerpt":"👑 PV와 UV의 개념과 활용 방법 🫛 PV(페이지 뷰)의 정의와 구성 요소 PV(Page View)는 특정 페이지가 조회된 총 횟수를 의미 사용자가 페이지를 방문할 때마다 카운트가 증가하며, 한 명의 사용자가 동일 페이지를 여러 번 방문하면 방문한 횟수만큼 PV가 늘어난다. 🫛 PV의 구성 요소 이벤트 행동: 웹사이트나 앱의 페이지에 접근하는 행위(‘뷰’) 시간축:...","categories": ["docs","PM","Data_Literacy"],
        "tags": ["PM","Data_Literacy","Data"],
        "url": "/docs/pm/data_literacy-grid/PM_04_04/",
        "teaser": null
      },{
        "title": "[프로덕트 데이터 분석] 15 CVR(Conversion Rate)와 CTR(Click through Rate)",
        "excerpt":"👑 전환율(CVR)과 클릭률(CTR)의 개념과 활용 🥝 전환율(CVR)의 정의와 계산법 전환율(CVR, Conversion Rate)은 특정 행동을 한 사용자가 최종적으로 전환(구매, 가입 등 원하는 행동)으로 이어진 비율을 나타내는 지표 예를 들어, 웹사이트 방문자 100명 중 5명이 제품을 구매했다면 전환율은 5%가 된다. CVR 공식 \\[\\text{CVR} = \\frac{\\text{특정 행동 후 전환된 사용자 수}}{\\text{특정 행동을 한...","categories": ["docs","PM","Data_Literacy"],
        "tags": ["PM","Data_Literacy","Data"],
        "url": "/docs/pm/data_literacy-grid/PM_04_05/",
        "teaser": null
      },{
        "title": "[프로덕트 데이터 분석] 16 Duration, Session, User Engagement",
        "excerpt":"👑 Duration Time, Session 및 User Engagement의 이해와 활용 🍗 Duration Time(체류 시간)의 정의와 중요성 Duration Time은 사용자가 특정 페이지나 이벤트에서 얼마나 머물렀는지를 나타내는 지표이다. 사용자의 관심도를 측정하는 중요한 요소이며, 일반적으로 사용자가 페이지나 앱 화면에 체류한 총 시간을 의미하게 된다. Duration Time 계산하는 방법: 이벤트 기반 Duration Time: 특정 이벤트...","categories": ["docs","PM","Data_Literacy"],
        "tags": ["PM","Data_Literacy","Data"],
        "url": "/docs/pm/data_literacy-grid/PM_04_06/",
        "teaser": null
      },{
        "title": "[프로덕트 데이터 분석] 17 AARRR vs RARRA",
        "excerpt":"👑 AARRR 모델과 RARRA 모델의 개념 및 활용 전략 🍟 퍼널 분석(Funnel Analysis): 사용자 행동 추적의 핵심 도구 퍼널 분석(Funnel Analysis)은 깔때기 모양의 구조로, 사용자가 제품 내 특정 목표(예: 구매)에 도달하는 과정을 단계별로 분석하는 방법을 말한다. 탐색 퍼널, 결제 퍼널 등 다양한 형태로 존재하며, 각 단계의 전환율을 측정하여 사용자의 이탈...","categories": ["docs","PM","Data_Literacy"],
        "tags": ["PM","Data_Literacy","Data"],
        "url": "/docs/pm/data_literacy-grid/PM_04_07/",
        "teaser": null
      },{
        "title": "[프로덕트 데이터 분석] 18 Retention",
        "excerpt":"👑 리텐션 분석의 이해와 활용 🍧 리텐션의 정의와 측정 방법 리텐션(Retention)은 사용자가 서비스와 처음 접촉한 이후 특정 기간이 지난 후에도 서비스를 지속적으로 이용하는 비율을 의미한다. 예를 들어, 신규 가입자가 1개월 뒤에도 계속 서비스를 이용하고 있다면 ‘1개월 리텐션’으로 정의할 수 있다. 🍥 리텐션의 측정 예시 사용자 가입일 1개월 후 접속 여부...","categories": ["docs","PM","Data_Literacy"],
        "tags": ["PM","Data_Literacy","Data"],
        "url": "/docs/pm/data_literacy-grid/PM_04_08/",
        "teaser": null
      },{
        "title": "[프로덕트 데이터 분석] 19 Cohort Analysis",
        "excerpt":"👑 코호트 분석 (Cohort Analysis) 🍣 코호트 분석이란? 코호트 분석(Cohort Analysis)은 특정한 기간 동안 유사한 특성(예: 가입 시기, 특정 행동 등)을 가진 사용자 집단을 나누어 시간이 지남에 따라 이들의 행동 변화를 분석하는 방법으로 주로 사용자 유지율(Retention), 참여율(Engagement), 수익성 등 다양한 지표를 시간에 따라 측정하여 서비스의 장기적 건강과 사용자 충성도를 파악할...","categories": ["docs","PM","Data_Literacy"],
        "tags": ["PM","Data_Literacy","Data"],
        "url": "/docs/pm/data_literacy-grid/PM_04_09/",
        "teaser": null
      },{
        "title": "[프로덕트 데이터 분석] 20 지표 정의 process",
        "excerpt":"👑 지표 정의 프로세스와 전략적 활용 🍤 지표 정의 프로세스와 데이터 비교 방법 지표 정의는 프로젝트의 목적, 기능 개선 여부, UX 변경 사항을 바탕으로 상황에 맞는 성과 지표를 선정하는 과정으로 주요 데이터 비교 방법으로는 전후 비교와 A/B 테스트가 있다. 전후 비교는 간단하지만 외부 요소의 영향을 배제하기 어렵기 때문에 정확성이 떨어질...","categories": ["docs","PM","Data_Literacy"],
        "tags": ["PM","Data_Literacy","Data"],
        "url": "/docs/pm/data_literacy-grid/PM_04_10/",
        "teaser": null
      },{
        "title": "[프로덕트 데이터 분석] 21 프로젝트 과정",
        "excerpt":"👑 일반적인 프로젝트 과정과 핵심 단계 🌰 현황 파악 및 문제 정의의 중요성 프로젝트의 첫 단계는 현황 파악과 문제 정의로 이 단계는 프로젝트의 성공을 좌우할 만큼 중요하므로, 충분한 시간을 투자해 철저하게 진행해야 한다. 현황을 정확하게 파악하기 위해 고객이 느끼는 불편함과 문제(페인 포인트)를 명확히 이해하고 정의하는 것이 필수적 현황 파악 시...","categories": ["docs","PM","Data_Literacy"],
        "tags": ["PM","Data_Literacy","Data"],
        "url": "/docs/pm/data_literacy-grid/PM_05_01/",
        "teaser": null
      },{
        "title": "[프로덕트 데이터 분석] 22 프로젝트 예시",
        "excerpt":"👑 전환율 개선 프로젝트의 문제 정의와 데이터 기반 의사 결정 🥜 전환율 개선을 위한 데이터 파악 전략 전환율 개선 프로젝트는 화면 기획서와 데이터 파악에서 시작된다. 결제 퍼널을 홈메뉴 페이지부터 주문 성공 페이지까지의 흐름으로 정의하며, 페이지 및 결제 전환율을 각각 확인하고 관리하며, 페이지 전환율을 우선 확인한 후 결제 전환율을 추가로 점검하는...","categories": ["docs","PM","Data_Literacy"],
        "tags": ["PM","Data_Literacy","Data"],
        "url": "/docs/pm/data_literacy-grid/PM_05_02/",
        "teaser": null
      },{
        "title": "[프로덕트 데이터 분석] 23 데이터 기반 프로젝트",
        "excerpt":"👑 데이터 기반 프로젝트 진행에서 놓치기 쉬운 핵심 단계와 개선 전략 🌮 데이터 기반 프로젝트 진행 시 놓치기 쉬운 단계들 프로젝트 진행 시 데이터가 자주 활용되는 단계는 주로 지표 설정과 문제 정의를 할 떄이다. 그러나 목표 설정 과정에서도 가설 검증을 위한 실험 설계를 진행하여 목표의 달성 가능성을 검증할 필요성이 존재한다....","categories": ["docs","PM","Data_Literacy"],
        "tags": ["PM","Data_Literacy","Data"],
        "url": "/docs/pm/data_literacy-grid/PM_05_03/",
        "teaser": null
      },{
        "title": "[프로덕트 데이터 분석] 24 데이터 로그 설계란?",
        "excerpt":"👑 효과적인 데이터 로그 설계 방법 🍨 데이터 로깅의 기본 이해 기능 출시 준비 시 데이터 저장 방법에 대한 논의는 필수!!! 데이터는 크게 데이터베이스 데이터와 사용자 행동 데이터로 나누고 특히나 사용자 행동 데이터는 주로 제품 매니저(PM) 또는 데이터 분석가가 주도하여 로깅을 설계하고 관리한다. 데이터 유형 설명 주도자 데이터베이스 데이터 사용자의...","categories": ["docs","PM","Data_Literacy"],
        "tags": ["PM","Data_Literacy","Data"],
        "url": "/docs/pm/data_literacy-grid/PM_06_01/",
        "teaser": null
      },{
        "title": "[프로덕트 데이터 분석] 25 로그 설계를 위한 데이터 기초 지식",
        "excerpt":"👑 로그 설계를 위한 데이터 기초 지식 🍡 데이터 로그의 종류 데이터 로그는 크게 서비스 로그와 사용자 행동 로그로 나눌 수 있다. 서비스 로그는 데이터베이스에 저장되어 주로 운영 데이터를 의미하며, 예시로 고객의 가입 날짜나 구매 내역 등이 있다. 사용자 행동 로그는 유저의 클릭이나 화면 이동과 같은 활동을 기록하여 분석 목적에...","categories": ["docs","PM","Data_Literacy"],
        "tags": ["PM","Data_Literacy","Data"],
        "url": "/docs/pm/data_literacy-grid/PM_06_02/",
        "teaser": null
      },{
        "title": "[프로덕트 데이터 분석] 26 데이터 로그 설계 프로세스",
        "excerpt":"👑 데이터 로그 설계 프로세스 🍟 데이터 로그 설계와 QA 프로세스 데이터 기반 프로젝트에서는 데이터 로그 설계와 QA 과정이 중요하다. 로그 설계 시 네이밍 규칙이 없다면 진행 중 정의하며, 이벤트 정의와 유저 정보 기록에 집중해야 한다. 데이터 로그 설계는 트래킹 플랜 작성 후 개발자와 협력하여 마무리하며, 이후 데이터 QA로 넘어...","categories": ["docs","PM","Data_Literacy"],
        "tags": ["PM","Data_Literacy","Data"],
        "url": "/docs/pm/data_literacy-grid/PM_06_03/",
        "teaser": null
      },{
        "title": "[프로덕트 데이터 분석] 27 Tracking Plan",
        "excerpt":"👑 데이터 트래킹 플랜의 중요성과 실전 구축 전략 🧇 트래킹 플랜이란? 트래킹 플랜은 데이터를 어떻게 기록하고 관리할지에 대한 사전 계획서를 말하는데 건물을 짓기 전의 설계도와 같은 역할을 하며, 다음과 같은 기능을 수행한다. 데이터 로그 설계의 표준화 다양한 팀 간 소통 도구 효율적인 분석 기반 제공 스프레드시트, Notion, Jira 등 다양한...","categories": ["docs","PM","Data_Literacy"],
        "tags": ["PM","Data_Literacy","Data"],
        "url": "/docs/pm/data_literacy-grid/PM_06_04/",
        "teaser": null
      }]
