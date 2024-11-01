## Movie Info & Recommandation App (YEAHFLIX)

### 목적성:

- 이 앱은 다양한 영화, tv시리즈를 상영중, 트렌드, 인기, 개봉예정, 평점이 높은 것으로 분류를 하여 원하는 컨텐츠에 대한 정보를 알 수 있고 단순 일방적인 정보전달 방식이 아닌 유저들이 앱을 적극적으로 사용할 수 있도록 다양한 방식의 추천, 검색, 로그인 및 회원가입을 할 수 있도록 제작한 영화 정보전달 및 추천 앱입니다.

- 영화의 간단한 줄거리, 트레일러, 평점, 개봉날짜, 키워드를 통해 영화 및 tv시리즈 정보를 파악할 수 있도록 했습니다. 또한 영화의 키워드를 통해 더 디테일하게 사용자의 취향에 맞는 컨텐츠를 추천 받아볼 수 있습니다.

### 기술 stack:

<div display="flex">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png" width="60px" />
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg1MndL-Xp1JcnqaB0YOqTp6zDjrwYyGKsPA&s" width="60px" /> 
</div>

- node.js, react, js, html, css, git, github

### 개발기간

| 날짜 | 개발 내용                                   |
| ---- | ------------------------------------------- |
| 7/26 | 리서치, 기획, 계획표작성                    |
| 7/27 | 전체적 컴포넌트 구성, 홈제작                |
| 7/28 | 디테일페이지 (내용, 추천, 키워드 기능 추가) |
| 7/29 | 디테일 (예고편 추가), 서치페이지 제작       |
| 7/30 | 로그인, 회원가입 페이지 제작                |
| 7/31 | tv시리즈 구성                               |
| 8/1  | 반응형, 유지보수 및 리팩토링                |
| 8/2  | 배포                                        |

### 프로젝트 기획과정 및 방향성

- 프로젝트 제작을 하기에 앞서 다양한 api를 불러와서 이용을 해여 제작을 해보고 싶다는 생각을 했습니다. 따라서 api를 제공하는 tmdb라는 사이트에서 정보탐색을 위해 오래 머무르며 고민했고 탐색과정에서 비슷한 키워드와 관련한 영화를 추천해 보면 좋겠다는 아이디어를 얻었습니다.

- 키워드는 영화의 내용도 한눈에 알수있고 동시에 추천도 받을 수 있어 유용하지 않을까하여 넣게 되었습니다. 또한 다른 영화앱에서 비슷한 배우, 장르에 대한 추천은 많이 보았기 때문에 제 영화앱에서는 좀 더 색다른 경험을 위해 키워드 관련 추천을 구성하기로 하였습니다.

- 뿐만아니라 유저 친화적인 앱을 위해서 로그인, 로그아웃 기능이 있으면 좋겠다고 생각했고 다음 프로젝트에서도 유용하게 잘 쓰일 수 있지 않을까하여 이 또한 추가하게 되었습니다.

### 프로젝트 소개 및 url

- 이 앱은 사용자가 최대한 많은 컨텐츠를 찾아 볼 수 있도록 다양한 영화와 tv시리즈의 컨텐츠를 담았습니다.

- 또한 유저가 웹사이트에서 조금 더 능동적으로 활동할 수 있도록 로그인,회원가입, 추천, 검색 시스템을 구축하였습니다. 실제와 비슷한 로그인 시스템을 만들 수 있도록 회원가입한 유저의 정보를 localStorage에 저장하여 정보가 일치하다면 로그인이 가능하도록 합니다. 또한 로그인 후 헤더의 로그인 아이콘이 로그아웃으로 바뀌며 로그아웃을 눌렀을때 localStorage에 있던 정보가 삭제 되는 특징이 있습니다.

- 이앱은 tmdb api를 기반으로 하여 만들어졌는데 추천영화 제작을 위해 다양한 api를 불러와 그러한 영화 정보를 기반으로
  제작하였습니다.

- 또한 키워드를 통해서 더 디테일하게 취향에 맞는 영화를 찾아 흥미를 느낄 수 있도록 했습니다.

- 마지막으로 반응형을 통해 pc화면의 다양한 사이즈로 이용할 수 있고 모바일에서도 감상할 수 있도록 만들었습니다.

### 프로젝트를 하며 느낀점

- 일주일이라는 기간안에 앱을 기획하고 개발 하는것이 쉽지만은 않았는데 그 과정에서 원하는 기능 구현이 맘처럼 안될때 가장 답답했던것 같습니다. 머리로는 될것같은데 막상 적어보니 오류가 뜨거나 원하는대로 화면에 표현이 잘 안되었습니다. 그래서 작업을 하지않을때도 계속 구상하거나 '이렇게 하면 될까'를 굉장히 많이 했고 생각이 나면 바로 기록을 하거나 컴퓨터를 켜서 직접해 구현해 보는것을 반복했던것 같습니다. 그 덕에 결국 문제를 해결한 경험이 여러번 있었고 그럴때마다 많은 성취감이 있었습니다. 이러한 과정이 마냥 즐거운 시간은 아니었지만 문제를 혼자 해결해 나갈 수 있다는 자신감을 얻었던것 같습니다.
  이번 프로젝트에서는 이러한 고민에 대한 해결을 스스로 해결하기 위해 많이 애를 썼고 끝까지 포기하지 않고 해결을 했다는 점에서 뿌듯했습니다.

- 또한 막히거나 궁금한 것이 있을때 검색 또는 주위의 도움을 받으면서 해결하는데 도움이 되었고 알아낸것을 일회성으로 끝내는 것이 아니라 직접 사용해 보며 익히고 메모하며 공부해 나갔던것 같습니다.

- 그리고 생각보다 앱제작 후 유저입장에서 사용했을때 불편할 수 있는사항들이 많았는데 유저가 쉽게 사용할 수 있도록 지속적으로 확인하면서 UIUX가 괜찮은지를 검토하고 수정해 나가야 한다는것을 느꼈습니다.

### 개선방안

- 이번 프로젝트에서는 문제해결에 초점을 맞추다보니 디자인은 두드러진 특징없이 심플하게 제작했던것 같습니다. 다음 프로젝트에서는 더 재미있고 역동적인 앱을 만들기 위해 많은 레퍼런스들을 참고 해야겠다는 생각이 들었습니다. 그리고 유저에게 시선이 가고 더 흥미를 느낄수 있도록 만들어봐야겠다는 생각이 들었습니다.

- 그리고 프로젝트를 시작하기에 앞서 pc뿐만 아니라 모바일 반응형 까지도 미리 처음부터 고려해서 제작하면 좋을것 같다고 느꼈습니다.

- 프로젝트를 진행하기에 앞서 구체적으로 주제, 디자인, 기능, 사용할 API, 전체적인 컨셉을 정하는것이 많이 도움 되겠다는 생각을 했습니다.

### 프로젝트를 하면서 알게된 내용

- 이번 프로젝트에서 로그인 회원가입 시스템에 굉장히 고심을 많이 했고 로그인후 헤더에 로그아웃 아이콘이 생성되는 과정에서 어려움이 있었는데, 지속적인 고민을 통해 해결했다는 점이 매우 성취감이 있었고 뿌듯했습니다. 다음 프로젝트에서는 고민과 시간을 쏟은만큼 이 부분에 대해서 조금더 수월하게 진행 할 수 있겠다는 자신감을 얻었습니다.

- 그리고 iframe을 통하여 유튜브 영상으로 예고편을 제작하고 예고편 재생 버튼과 닫기 버튼을 통해 컨트롤 할 수 있게 제작하는 과정도 많은 고심을 해 만들었기 때문에 비디오를 삽입하는 것 또한 공부가 된것같습니다.

- 마지막으로 이미지 위에 글자를 넣을때에는 이미지 위에 그라디언트나, 투명도, 블러 처리를한 막을 하나를 생성하여 글자가 잘 보이도록 구성하는 것이 좋다는것을 공부하게 되었고 잘 활용할 수 있을 것 같습니다.

### 프로젝트 진행중 칭찬 및 반성

- 칭찬: 생각보다 짧은시간안에 기획부터 개발까지 앱을 만드는것이 쉽지 않았는데 계획표에 맞춰 그래도 잘 진행했다는 생각에 뿌듯했습니다. 어렵다고 느낀 부분에 대해서도 끝까지 포기하지 않고 해결 하려고 노력하고 결국 해결을 했을때 굉장히 성취감이 느껴지는 시간이었습니다.

- 반성: 이번 프로젝트에서 문제해결에 시간을 많이 쏟아 디자인적인 부분에 공을 못들인것같아 조금 아쉽다는 생각이 들어 다음 프로젝트에서는 좀 더 개선하고 싶습니다.
