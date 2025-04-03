---
layout: single
title: "[버전 관리 기초] Git과 VSCode로 협업과 코드 관리 시작하기"
categories:
  - docs
  - Git
  - Git
tag: [Git, VSCode, Version Control, Collaboration]
author_profile: false
sidebar:
  nav: "counts"
use_math: true
---

# 🏆 Git과 VSCode로 시작하는 버전 관리와 협업

## 🗂️ Git 기초: 버전 관리의 시작

### 📌 Git이란?

Git은 소스 코드를 관리하기 위한 분산 버전 관리 시스템(DVCS)으로, 2005년 리누스 토르발즈(Linus Torvalds)가 리눅스 커널 개발을 위해 만들었습니다. Git은 로컬과 원격 저장소를 통해 변경 사항을 추적하며, 여러 개발자가 동시에 작업할 수 있도록 지원합니다.

- Git의 주요 특징:
  - 분산 구조: 모든 개발자가 전체 저장소의 복사본을 가짐.
  - 빠른 속도: 로컬에서 대부분의 작업을 수행하므로 속도가 빠름.
  - 브랜치와 병합: 브랜치를 통해 독립적인 작업을 수행하고, 병합으로 통합 가능.

### 📌 Git 설치와 초기 설정

Git을 사용하기 위해 먼저 설치와 초기 설정을 해야 합니다.

- Git 설치:

  - Windows, macOS, Linux에서 Git을 설치할 수 있습니다.
  - 공식 웹사이트(git-scm.com)에서 다운로드 후 설치.
  - 설치 확인:
    ```bash
    git --version
    ```
    설치가 완료되었다면 Git 버전이 출력됩니다(예: `git version 2.39.2`).

- Git 초기 설정:
  Git을 처음 사용할 때 사용자 정보를 설정해야 합니다. 이는 커밋 기록에 사용됩니다.
  ```bash
  git config --global user.name "Your Name"
  git config --global user.email "your.email@example.com"
  ```
  - `user.name`: 커밋에 기록될 이름.
  - `user.email`: 커밋에 기록될 이메일.
  - 설정 확인:
    ```bash
    git config --global --list
    ```

## 🗂️ Git 기본 워크플로우: 변경 사항 관리하기

### 📋 Git 저장소 초기화와 첫 커밋

Git을 사용해 프로젝트를 관리하려면 먼저 저장소를 초기화해야 합니다.

- 저장소 초기화:

  ```bash
  mkdir my-project
  cd my-project
  git init
  ```

  `git init` 명령어는 현재 디렉토리에 `.git` 폴더를 생성하며, Git 저장소를 초기화합니다.

- 파일 추가 및 커밋:
  1. 파일 생성:
     ```bash
     echo "# My Project" > README.md
     ```
  2. 변경 사항 스테이징:
     ```bash
     git add README.md
     ```
     `git add`는 변경 사항을 스테이징 영역에 추가합니다.
  3. 커밋:
     ```bash
     git commit -m "Initial commit"
     ```
     `git commit`은 스테이징된 변경 사항을 저장소에 기록합니다. `-m` 플래그로 커밋 메시지를 작성합니다.

### 📋 변경 사항 추적과 상태 확인

Git은 파일의 변경 사항을 추적하며, 현재 상태를 확인할 수 있는 명령어를 제공합니다.

- 상태 확인:

  ```bash
  git status
  ```

  현재 작업 중인 파일의 상태(변경됨, 스테이징됨, 커밋 필요 등)를 확인합니다.

- 변경 내역 확인:
  ```bash
  git log
  ```
  커밋 히스토리를 확인합니다. 각 커밋의 해시, 작성자, 날짜, 메시지가 표시됩니다.

## 🗂️ 원격 저장소와 협업: GitHub와 연동하기

### 🌍 원격 저장소 설정과 Push

GitHub와 같은 원격 저장소를 사용하면 팀원 간 협업이 가능합니다.

- GitHub에서 저장소 생성:

  1. GitHub에 로그인 후 새로운 저장소를 생성합니다(예: `my-project`).
  2. 저장소 URL을 복사합니다(예: `https://github.com/username/my-project.git`).

- 원격 저장소 연결:

  ```bash
  git remote add origin https://github.com/username/my-project.git
  ```

  `origin`은 원격 저장소의 별칭입니다.

- 변경 사항 Push:
  ```bash
  git push -u origin main
  ```
  - `git push`: 로컬 저장소의 변경 사항을 원격 저장소로 전송.
  - `-u origin main`: 기본 브랜치를 `main`으로 설정.

### 🌍 Pull과 협업

팀원과 협업할 때는 원격 저장소의 변경 사항을 로컬로 가져와야 합니다.

- 변경 사항 Pull:

  ```bash
  git pull origin main
  ```

  원격 저장소의 변경 사항을 로컬로 가져옵니다.

- 충돌 해결:
  동일한 파일을 여러 사람이 수정하면 충돌이 발생할 수 있습니다. 충돌이 발생하면 Git이 충돌 부분을 표시하며, 수동으로 수정 후 커밋해야 합니다.

## 🗂️ VSCode에서 Git 활용하기

### 🖥️ VSCode와 Git 통합

VSCode는 Git과의 통합이 뛰어나며, GUI를 통해 Git 명령어를 쉽게 실행할 수 있습니다.

- VSCode에서 Git 초기화:

  1. VSCode에서 프로젝트 폴더를 엽니다.
  2. 왼쪽 사이드바에서 소스 제어 아이콘(분기 모양)을 클릭합니다.
  3. "저장소 초기화" 버튼을 클릭하여 `git init`을 실행합니다.

- 변경 사항 스테이징 및 커밋:

  1. 변경된 파일이 소스 제어 탭에 표시됩니다.
  2. 파일 옆의 `+` 버튼을 클릭하여 스테이징(`git add`).
  3. 상단 입력란에 커밋 메시지를 작성하고, 체크 표시 버튼을 눌러 커밋(`git commit`).

- Push와 Pull:
  1. 소스 제어 탭의 "..." 메뉴에서 "Push"를 선택하여 변경 사항을 원격 저장소로 전송.
  2. "Pull"을 선택하여 원격 저장소의 변경 사항을 가져옵니다.

### 🖥️ 유용한 VSCode 확장 프로그램

Git 작업을 더 편리하게 만들어주는 VSCode 확장 프로그램을 설치해보세요.

- GitLens:

  - 커밋 히스토리와 변경 사항을 상세히 확인 가능.
  - 설치: VSCode 확장 마켓플레이스에서 "GitLens" 검색 후 설치.

- Git Graph:
  - 브랜치와 커밋 히스토리를 시각적으로 표시.
  - 설치: "Git Graph" 검색 후 설치.

## 🗂️ 실습: Git과 VSCode로 간단한 프로젝트 관리

간단한 프로젝트를 만들어 Git과 VSCode로 관리하는 실습을 진행해봅시다.

### 📝 프로젝트 설정

1. 프로젝트 폴더 생성 및 초기화:

   ```bash
   mkdir my-project
   cd my-project
   git init
   ```

2. 간단한 파일 생성:

   ```bash
   echo "console.log('Hello, Git!');" > app.js
   ```

3. VSCode에서 프로젝트 열기:
   ```bash
   code .
   ```

### 📝 Git 워크플로우 실습

1. 변경 사항 스테이징 및 커밋:

   - VSCode 소스 제어 탭에서 `app.js` 파일을 스테이징(`+` 버튼).
   - 커밋 메시지 작성(예: "Add initial app.js") 후 커밋.

2. 원격 저장소 연결 및 Push:

   - GitHub에서 새로운 저장소를 생성.
   - VSCode 터미널에서 원격 저장소 연결:
     ```bash
     git remote add origin https://github.com/username/my-project.git
     ```
   - 변경 사항 Push:
     ```bash
     git push -u origin main
     ```

3. 변경 후 추가 커밋:
   - `app.js` 파일 수정:
     ```javascript
     console.log("Hello, Git and VSCode!");
     ```
   - 변경 사항 스테이징 및 커밋(메시지: "Update app.js message").
   - 다시 Push.
