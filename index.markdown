---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---

<!--# Jay's AI Research Journey에 오신 것을 환영합니다-->

> **"인생은 전체는 되는 대로, 하루하루는 성실하게"**

뒤늦게 교사에서 개발자로 전환하며 발견한  
**하이브리드 프롬프트 전략**과 **AI 도구 분석** 연구를 공유합니다.

<!-- 카테고리 네비게이션 추가 -->
{% include category-nav.html %}

## 🔬 주요 연구 영역

<div class="categories-grid">
  {% for category_item in site.categories %}
    {% assign category_name = category_item[0] %}
    {% assign posts = category_item[1] %}
    
    <div class="category-card">
      {% if category_name == 'research' %}
        <h3>🔬 AI 도구 분석</h3>
        <p>하이브리드 프롬프트 전략과 AI 활용에 대한 심층 분석</p>
      {% elsif category_name == 'career-journey' %}
        <h3>🚀 전환자 여정</h3>
        <p>뒤늦게 시작한 개발자의 길, 전환 과정에서 마주한 성장 이야기</p>
      {% elsif category_name == 'philosophy' %}
        <h3>💭 딴 짓 철학</h3>
        <p>딴 짓에서 발견한 사소한 기쁨과 재미있음의 가치</p>
      {% elsif category_name == 'learning' %}
        <h3>📚 학습 일기</h3>
        <p>익숙한 길을 벗어나 프롬프트 한 줄에서 배우며, AI를 새롭게 보는 시각</p>
      {% endif %}
      
      <div class="category-posts">
        <a href="/category/{{ category_name }}/" class="view-all">
          전체 보기 ({{ posts.size }}개 글)
        </a>
        
        {% for post in posts limit:3 %}
          <div class="recent-post">
            <a href="{{ post.url }}">{{ post.title }}</a>
            <time>{{ post.date | date: "%m월 %d일" }}</time>
          </div>
        {% endfor %}
      </div>
    </div>
  {% endfor %}
</div>

---

*"되는 대로 흘러가되, 성실하게 기록하는 연구자"*
