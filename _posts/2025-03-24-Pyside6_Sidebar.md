---
layout: single
title: "[PySide6] 위젯 총정리"
categories:
  - docs
  - PySide6
  - Widget
tag: [python, pyside6]
author_profile: false
sidebar:
  nav: "counts"
# search: false
# redirect_from:
#   - /coding/first-posting
use_math: true
---

# 👑 PySide6 위젯

## 🍒1. 레이아웃 (Layouts)

위젯을 자동으로 정렬하는 컨테이너입니다.

| 위젯                  | 설명                                  |
| --------------------- | ------------------------------------- |
| **Vertical Layout**   | 위젯을 **수직으로** 정렬              |
| **Horizontal Layout** | 위젯을 **수평으로** 정렬              |
| **Grid Layout**       | **그리드(행/열 구조)** 로 정렬        |
| **Form Layout**       | 라벨과 입력 필드를 **폼 형태**로 정렬 |

## 🍒 간격 조절 (Spacers)

위젯 간의 간격을 조정하는 요소입니다.

| 위젯                  | 설명             |
| --------------------- | ---------------- |
| **Horizontal Spacer** | 가로 공간을 조정 |
| **Vertical Spacer**   | 세로 공간을 조정 |

## 🍒버튼 (Buttons)

사용자의 클릭 이벤트를 처리하는 버튼 위젯입니다.

| 위젯                    | 설명                                         |
| ----------------------- | -------------------------------------------- |
| **Push Button**         | 일반적인 클릭 버튼                           |
| **Tool Button**         | 툴바에서 사용되는 작은 버튼                  |
| **Radio Button**        | **단일 선택**이 가능한 라디오 버튼           |
| **Check Box**           | **다중 선택**이 가능한 체크 박스             |
| **Command Link Button** | 링크 스타일 버튼 (Windows UI에서 사용)       |
| **Dialog Button Box**   | 대화 상자에서 "확인 / 취소" 버튼을 자동 배치 |

## 🍒모델 기반 항목 뷰 (Item Views - Model-Based)

모델 데이터를 기반으로 항목을 표시하는 위젯입니다.

| 위젯            | 설명                               |
| --------------- | ---------------------------------- |
| **List View**   | 모델을 기반으로 리스트 형태로 표시 |
| **Tree View**   | 계층 구조(트리 구조)로 항목을 표시 |
| **Table View**  | 테이블 형태로 데이터 표시          |
| **Column View** | 컬럼 구조로 데이터 표시            |
| **Undo View**   | 실행 취소(Undo) 항목을 보여주는 뷰 |

## 🍒 항목 기반 위젯 (Item Widgets - Item-Based)

모델을 사용하지 않고 직접 항목을 추가하는 위젯입니다.

| 위젯             | 설명                       |
| ---------------- | -------------------------- |
| **List Widget**  | 리스트 항목을 직접 추가    |
| **Tree Widget**  | 트리 구조 항목을 직접 추가 |
| **Table Widget** | 테이블 항목을 직접 추가    |

## 🍒 컨테이너 (Containers)

여러 위젯을 포함하는 컨테이너 역할을 합니다.

| 위젯               | 설명                               |
| ------------------ | ---------------------------------- |
| **Group Box**      | 여러 위젯을 그룹으로 묶음          |
| **Scroll Area**    | 스크롤 가능한 컨테이너             |
| **Tool Box**       | 여러 탭을 포함하는 툴박스          |
| **Tab Widget**     | 여러 탭을 가진 컨테이너            |
| **Stacked Widget** | 하나의 화면에서 여러 페이지를 전환 |
| **Frame**          | 사각형 프레임을 제공               |
| **Widget**         | 기본적인 위젯 컨테이너             |
| **MDI Area**       | 멀티 문서 인터페이스 (MDI) 지원    |

## 🍒 입력 위젯 (Input Widgets)

사용자가 데이터를 입력할 수 있는 위젯입니다.

| 위젯                      | 설명                                 |
| ------------------------- | ------------------------------------ |
| **Combo Box**             | 드롭다운 목록에서 선택               |
| **Font Combo Box**        | 폰트 선택 드롭다운                   |
| **Line Edit**             | 한 줄 텍스트 입력 필드               |
| **Text Edit**             | 여러 줄 텍스트 입력 필드 (서식 지원) |
| **Plain Text Edit**       | 여러 줄 텍스트 입력 필드 (서식 없음) |
| **Spin Box**              | 숫자 입력 (정수)                     |
| **Double Spin Box**       | 숫자 입력 (실수)                     |
| **Time Edit**             | 시간 입력 필드                       |
| **Date Edit**             | 날짜 입력 필드                       |
| **Date/Time Edit**        | 날짜와 시간 입력 필드                |
| **Dial**                  | 다이얼 형태의 입력 컨트롤            |
| **Horizontal Scroll Bar** | 가로 스크롤 바                       |
| **Vertical Scroll Bar**   | 세로 스크롤 바                       |
| **Horizontal Slider**     | 가로 슬라이더 (값 조정)              |
| **Vertical Slider**       | 세로 슬라이더 (값 조정)              |
| **Key Sequence Edit**     | 키보드 단축키 입력                   |

## 🍒 표시 위젯 (Display Widgets)

정보를 출력하는 역할을 하는 위젯입니다.

| 위젯                | 설명                                      |
| ------------------- | ----------------------------------------- |
| **Label**           | 텍스트 또는 이미지 표시                   |
| **Text Browser**    | 텍스트를 표시하는 위젯 (HTML 렌더링 가능) |
| **Graphics View**   | 2D 그래픽을 표시                          |
| **Calendar Widget** | 캘린더 UI 제공                            |
| **LCD Number**      | 숫자를 LCD 스타일로 표시                  |
| **Progress Bar**    | 진행 상태 표시 바                         |
| **Horizontal Line** | 가로 구분선                               |
| **Vertical Line**   | 세로 구분선                               |
| **OpenGL Widget**   | OpenGL을 사용하는 3D 그래픽 렌더링        |
| **QQuickWidget**    | QML 기반 UI를 임베딩                      |
| **QWebEngineView**  | 웹 페이지를 표시하는 위젯 (Chromium 기반) |
