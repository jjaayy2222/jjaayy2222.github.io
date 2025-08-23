// Application data
const appData = {
  exampleQuestions: [
    "ChatGPT에서 더 좋은 결과를 얻으려면?",
    "회사에서 AI 도입할 때 주의사항은?", 
    "프롬프트 엔지니어링 기초부터 알고 싶어요",
    "M365 Copilot과 ChatGPT 차이점은?",
    "AI 교육 커리큘럼을 어떻게 설계해야 하나요?",
    "기업에서 AI 활용 성과를 어떻게 측정하나요?",
    "AI 도구를 팀 협업에 어떻게 활용할 수 있나요?",
    "AI 윤리와 책임감 있는 AI 사용법은?"
  ],
  knowledgeBase: {
    promptEngineering: {
      beginner: {
        coreAnswer: "프롬프트 엔지니어링은 AI에게 명확하고 구체적인 지시를 내리는 기술입니다. 좋은 프롬프트는 '역할-맥락-작업-형식'의 구조를 따르며, 구체적이고 명확한 지시일수록 더 좋은 결과를 얻을 수 있습니다.",
        practicalExample: "<strong>실무 적용 예시:</strong><br>❌ 나쁜 예: '블로그 글을 써줘'<br>✅ 좋은 예: '당신은 마케팅 전문가입니다. B2B SaaS 기업의 신제품 출시를 알리는 블로그 글을 작성해주세요. 대상 독자는 중소기업 CEO이며, 제목, 도입부, 핵심 기능 3가지, 결론을 포함해 1000자 내외로 작성해주세요.'",
        exercise: "<strong>5분 실습 과제:</strong><br>1) ChatGPT에 '이메일을 써줘'라고 입력<br>2) 다시 '당신은 고객 서비스 전문가입니다. 제품 배송 지연에 대해 고객에게 사과하는 이메일을 정중하고 친근한 톤으로 작성해주세요. 사과, 지연 사유 설명, 해결 방안, 보상 제안을 포함해주세요.'라고 입력<br>3) 두 결과를 비교해보세요",
        resources: ["OpenAI 공식 프롬프트 엔지니어링 가이드", "ChatGPT 초보자를 위한 프롬프트 작성법", "AI 도구 활용 기초 무료 강의"]
      },
      intermediate: {
        coreAnswer: "중급 프롬프트 엔지니어링은 체인 오브 쏘트(Chain-of-Thought), 퓨샷 러닝(Few-shot Learning), 페르소나 기법 등을 활용합니다. 이러한 고급 기법을 통해 더 정확하고 창의적인 결과를 얻을 수 있으며, 복잡한 업무도 단계별로 처리할 수 있습니다.",
        practicalExample: "<strong>Few-shot Learning 예시:</strong><br>'다음 패턴을 따라 회의록을 작성해주세요:<br><br>예시 1: [회의 주제: 마케팅 전략 회의] → [핵심 결정사항: 신제품 론칭 일정 확정] → [액션 아이템: 랜딩페이지 제작] → [담당자: 김OO]<br><br>예시 2: [회의 주제: 개발 스프린트 회의] → [핵심 결정사항: 우선순위 기능 선정] → [액션 아이템: API 문서 작성] → [담당자: 이OO]<br><br>이제 우리 영업팀 주간 회의록을 이 형식으로 작성해주세요.'",
        exercise: "<strong>10분 실습 과제:</strong><br>1) 체인 오브 쏘트 기법 연습: '단계별로 생각해보세요'라는 문구를 추가해 복잡한 문제 해결하기<br>2) 페르소나 기법 연습: 동일한 제품을 3가지 관점(CEO, 개발자, 고객)으로 설명하는 프롬프트 작성<br>3) 결과 비교 및 분석하기",
        resources: ["고급 프롬프트 엔지니어링 실무 가이드", "M365 Copilot 프롬프트 템플릿 라이브러리", "ChatGPT/Claude 비교 활용 가이드"]
      },
      advanced: {
        coreAnswer: "고급 프롬프트 엔지니어링은 멀티모달 프롬프팅, RAG(검색 증강 생성) 시스템 설계, 조직 내 프롬프트 라이브러리 구축 및 거버넌스를 포함합니다. 기업 차원에서 AI 활용의 일관성과 품질을 보장하는 체계적 접근이 핵심입니다.",
        practicalExample: "<strong>기업용 AI 파이프라인 예시:</strong><br>1단계: GPT-4V로 제품 이미지 분석 및 특징 추출<br>2단계: 내부 경쟁사 데이터베이스에서 관련 정보 검색<br>3단계: 분석 결과를 바탕으로 마케팅 인사이트 생성<br>4단계: PowerBI 연동을 위한 구조화된 데이터 출력<br>5단계: 자동 리포트 생성 및 이해관계자 배포",
        exercise: "<strong>15분 고급 실습:</strong><br>1) 조직의 AI 거버넌스 체계 설계: 승인 프로세스, 품질 관리, 보안 정책 포함<br>2) 부서별 프롬프트 템플릿 라이브러리 구축 계획 수립<br>3) AI 출력물 품질 평가 체크리스트 및 KPI 개발<br>4) ROI 측정을 위한 성과 지표 정의",
        resources: ["Microsoft AI Center of Excellence 구축 가이드", "Enterprise AI Governance Framework", "기업용 프롬프트 관리 솔루션 비교", "AI 도입 성과 측정 베스트 프랙티스"]
      }
    },
    aiTools: {
      comparison: {
        coreAnswer: "ChatGPT는 범용 AI 어시스턴트로 창의적 작업과 일반적인 질의응답에 강하며, M365 Copilot은 Microsoft 생태계와 완벽하게 통합되어 업무 생산성 향상에 특화되어 있습니다. Claude는 긴 문서 처리와 분석적 사고에 뛰어나며, GitHub Copilot은 코딩 작업에 최적화되어 있습니다.",
        practicalExample: "<strong>도구별 최적 활용 사례:</strong><br><strong>ChatGPT:</strong> 브레인스토밍, 카피라이팅, 학습 지원, 일반적 질의응답<br><strong>M365 Copilot:</strong> Outlook 이메일 작성, Excel 데이터 분석, PowerPoint 프레젠테이션 생성, Teams 회의 요약<br><strong>Claude:</strong> 긴 문서 분석, 법률/의료 문서 리뷰, 복잡한 추론 작업<br><strong>GitHub Copilot:</strong> 코드 자동완성, 함수 생성, 코드 리뷰, 테스트 코드 작성",
        exercise: "<strong>도구 비교 실습:</strong><br>동일한 업무(예: 제품 소개서 작성)를 서로 다른 AI 도구로 처리해보고, 각각의 결과물을 다음 기준으로 평가해보세요:<br>1) 완성도와 정확성<br>2) 창의성과 독창성<br>3) 실무 적용 가능성<br>4) 시간 효율성<br>5) 후속 편집의 용이성",
        resources: ["AI 도구별 특징 비교 매트릭스", "기업용 AI 도구 선택 가이드", "Microsoft 365 Copilot 도입 사례", "AI 도구 ROI 측정 프레임워크"]
      }
    },
    corporateAI: {
      implementation: {
        coreAnswer: "기업 AI 도입의 성공 요소는 명확한 전략 수립, 단계적 접근, 충분한 교육, 강력한 거버넌스입니다. 특히 데이터 보안, 윤리적 사용, 직원 수용성 확보가 핵심이며, 작은 파일럿 프로젝트부터 시작해 점진적으로 확대하는 것이 효과적입니다.",
        practicalExample: "<strong>3단계 AI 도입 로드맵:</strong><br><strong>1단계 (1-3개월):</strong> 파일럿 프로젝트 - 마케팅팀 ChatGPT 도입, 콘텐츠 제작 효율성 측정<br><strong>2단계 (3-6개월):</strong> 핵심 부서 확장 - 영업/고객서비스팀 AI 도구 활용, 업무 프로세스 개선<br><strong>3단계 (6-12개월):</strong> 전사 확산 - M365 Copilot 전면 도입, AI CoE 구축, 거버넌스 체계 완성",
        exercise: "<strong>AI 도입 계획 수립:</strong><br>1) 현재 조직의 AI 준비도 평가 (기술 인프라, 인력 역량, 문화적 수용성)<br>2) 6개월, 1년, 2년 단위 AI 도입 로드맵 작성<br>3) 각 단계별 위험 요소 식별 및 대응 방안 수립<br>4) 성과 측정 지표 및 ROI 계산 방법 정의<br>5) 필요 예산 및 인력 계획 수립",
        resources: ["기업 AI 도입 성공 사례집", "AI 거버넌스 체크리스트", "Microsoft AI 비즈니스 가치 계산기", "AI 윤리 가이드라인", "직원 AI 교육 프로그램 설계 가이드"]
      }
    }
  }
};

// Application state
let isGenerating = false;

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM Content Loaded');
  initializeApp();
});

function initializeApp() {
  try {
    setupEventListeners();
    updateCharCounter();
    console.log('Application initialized successfully');
  } catch (error) {
    console.error('Error initializing app:', error);
  }
}

function setupEventListeners() {
  // Question input character counter
  const questionInput = document.getElementById('question');
  if (questionInput) {
    questionInput.addEventListener('input', updateCharCounter);
  } else {
    console.error('Question input not found');
  }
  
  // Form submission
  const questionForm = document.getElementById('questionForm');
  if (questionForm) {
    questionForm.addEventListener('submit', handleFormSubmit);
  } else {
    console.error('Question form not found');
  }
  
  // Example question buttons
  const exampleButtons = document.querySelectorAll('.example-btn');
  console.log('Found example buttons:', exampleButtons.length);
  
  exampleButtons.forEach((button, index) => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Example button clicked:', index);
      
      const question = this.getAttribute('data-question');
      console.log('Question from button:', question);
      
      if (questionInput && question) {
        questionInput.value = question;
        updateCharCounter();
        questionInput.focus();
        console.log('Question input updated with:', question);
      } else {
        console.error('Failed to update question input');
      }
    });
  });
  
  // Copy answer button
  const copyAnswerBtn = document.getElementById('copyAnswerBtn');
  if (copyAnswerBtn) {
    copyAnswerBtn.addEventListener('click', copyAnswer);
  }
  
  // Clear answer button
  const clearAnswerBtn = document.getElementById('clearAnswerBtn');
  if (clearAnswerBtn) {
    clearAnswerBtn.addEventListener('click', clearAnswer);
  }
}

function updateCharCounter() {
  const questionInput = document.getElementById('question');
  const charCountElement = document.getElementById('charCount');
  
  if (!questionInput || !charCountElement) return;
  
  const charCount = questionInput.value.length;
  charCountElement.textContent = charCount;
  
  const counterElement = charCountElement.parentElement;
  if (counterElement) {
    counterElement.classList.remove('error', 'success');
    
    if (charCount < 10) {
      counterElement.classList.add('error');
    } else {
      counterElement.classList.add('success');
    }
  }
}

function validateForm() {
  const questionInput = document.getElementById('question');
  
  if (!questionInput) {
    console.error('Question input not found for validation');
    return false;
  }
  
  const question = questionInput.value.trim();
  
  if (question.length < 10) {
    showError('질문은 최소 10자 이상 입력해주세요.');
    questionInput.focus();
    return false;
  }
  
  return true;
}

function handleFormSubmit(e) {
  e.preventDefault();
  console.log('Form submitted');
  
  // Prevent multiple submissions
  if (isGenerating) {
    console.log('Already generating, ignoring submit');
    return;
  }
  
  if (!validateForm()) {
    console.log('Form validation failed');
    return;
  }
  
  const questionForm = document.getElementById('questionForm');
  const formData = new FormData(questionForm);
  const question = formData.get('question')?.trim() || '';
  const level = formData.get('level') || 'beginner';
  const specialRequest = formData.get('specialRequest')?.trim() || '';
  
  console.log('Form data:', { question, level, specialRequest });
  
  generateAnswer(question, level, specialRequest);
}

function generateAnswer(question, level, specialRequest) {
  console.log('Generating answer for:', { question, level, specialRequest });
  
  // Set generating flag
  isGenerating = true;
  
  // Show loading state
  setLoadingState(true);
  
  // Simulate API call delay and generate answer
  setTimeout(() => {
    try {
      const answer = createAnswer(question, level, specialRequest);
      console.log('Answer created:', answer);
      displayAnswer(answer);
    } catch (error) {
      console.error('Error creating answer:', error);
      showError('답변 생성 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setLoadingState(false);
      isGenerating = false;
    }
  }, 1000); // Reduced delay for testing
}

function createAnswer(question, level, specialRequest) {
  const questionLower = question.toLowerCase();
  let selectedKnowledge = null;
  
  console.log('Creating answer for question:', questionLower, 'level:', level);
  
  // Find matching knowledge base entry
  if (questionLower.includes('프롬프트') || questionLower.includes('prompt')) {
    selectedKnowledge = appData.knowledgeBase.promptEngineering[level];
    console.log('Using prompt engineering knowledge for level:', level);
  } else if (questionLower.includes('copilot') || questionLower.includes('chatgpt') || questionLower.includes('claude') || questionLower.includes('차이')) {
    selectedKnowledge = appData.knowledgeBase.aiTools.comparison;
    console.log('Using AI tools comparison knowledge');
  } else if (questionLower.includes('회사') || questionLower.includes('기업') || questionLower.includes('도입')) {
    selectedKnowledge = appData.knowledgeBase.corporateAI.implementation;
    console.log('Using corporate AI implementation knowledge');
  } else {
    // Generate generic answer based on level
    selectedKnowledge = generateGenericAnswer(question, level);
    console.log('Using generic answer for level:', level);
  }
  
  // Customize answer based on special request
  if (specialRequest) {
    selectedKnowledge = customizeAnswer(selectedKnowledge, specialRequest, level);
    console.log('Customized answer with special request:', specialRequest);
  }
  
  return selectedKnowledge;
}

function generateGenericAnswer(question, level) {
  console.log('Generating generic answer for level:', level);
  
  const answers = {
    beginner: {
      coreAnswer: `이 질문에 대해 초보자도 쉽게 이해할 수 있도록 설명드리겠습니다. AI 도구를 효과적으로 활용하기 위해서는 명확한 목표 설정과 기본 개념 이해가 중요합니다. 처음 시작하시는 분들도 쉽게 따라할 수 있는 방법부터 안내해드리겠습니다.`,
      practicalExample: "<strong>초보자 실무 예시:</strong><br>일상 업무에서 AI를 활용하는 간단한 방법들을 소개합니다:<br>• <strong>이메일 작성:</strong> '정중하고 친근한 톤으로 회의 일정 변경 안내 이메일 작성해줘'<br>• <strong>아이디어 발상:</strong> '고객 만족도 향상을 위한 서비스 개선 아이디어 10가지 제안해줘'<br>• <strong>문서 요약:</strong> '다음 회의록의 핵심 내용을 3줄로 요약해줘'",
      exercise: "<strong>5분 기초 실습:</strong><br>1) 현재 하고 계신 업무 중 하나를 선택하세요<br>2) 해당 업무에서 시간이 오래 걸리거나 반복적인 작업을 찾아보세요<br>3) 그 작업을 AI로 어떻게 개선할 수 있는지 구체적인 활용 계획을 3단계로 작성해보세요<br>4) ChatGPT나 다른 AI 도구로 실제 실행해보세요",
      resources: ["AI 도구 사용법 기초 가이드", "ChatGPT 초보자 완전 정복", "Microsoft 365 AI 기능 소개", "업무 효율성을 높이는 AI 활용 팁 모음"]
    },
    intermediate: {
      coreAnswer: `실무 중심의 접근으로 답변드리겠습니다. 이미 AI의 기본적인 활용법을 알고 계시는 분들을 위해, 더욱 효과적이고 전문적인 활용 방법을 중심으로 설명드리겠습니다. 업무 프로세스 최적화와 생산성 극대화에 초점을 맞춰보겠습니다.`,
      practicalExample: "<strong>중급자 실무 활용:</strong><br>업무 프로세스별 AI 도구 전략적 활용:<br>• <strong>기획 단계:</strong> ChatGPT로 시장 분석 및 경쟁사 리서치 자동화<br>• <strong>실행 단계:</strong> M365 Copilot으로 프로젝트 문서 생성 및 관리<br>• <strong>분석 단계:</strong> Claude로 대용량 데이터 패턴 분석<br>• <strong>보고 단계:</strong> AI로 인사이트 추출 및 시각화 데이터 생성",
      exercise: "<strong>10분 중급 실습:</strong><br>1) 현재 담당 업무의 전체 워크플로우를 단계별로 매핑하세요<br>2) 각 단계별로 가장 적합한 AI 도구를 선정하세요<br>3) AI 도입으로 예상되는 시간 절약 효과를 계산해보세요<br>4) ROI 개선 지점을 3개 이상 식별하고 구체적인 실행 계획을 수립하세요<br>5) 파일럿 테스트를 위한 1주일 실험 계획을 작성하세요",
      resources: ["중급자를 위한 AI 실무 활용 전략", "업무별 AI 도구 매핑 가이드", "AI 도입 ROI 측정 방법론", "프로덕티비티 향상 성공 사례집"]
    },
    advanced: {
      coreAnswer: `전략적이고 전문적인 관점에서 답변드리겠습니다. 개인 차원을 넘어 조직 전체의 AI 전환을 이끌어야 하는 리더들을 위한 내용입니다. 전략적 AI 도입, 거버넌스 체계 구축, 그리고 지속가능한 AI 혁신 생태계 조성에 대해 다루겠습니다.`,
      practicalExample: "<strong>조직 차원의 전략적 접근:</strong><br>AI CoE(Center of Excellence) 구축 프레임워크:<br>• <strong>거버넌스:</strong> AI 사용 정책, 윤리 가이드라인, 보안 프로토콜<br>• <strong>역량 개발:</strong> 직무별 AI 스킬 맵, 교육 커리큘럼, 인증 체계<br>• <strong>인프라:</strong> 데이터 파이프라인, API 통합, 성능 모니터링<br>• <strong>혁신 관리:</strong> 아이디어 수집, 파일럿 운영, 성과 측정",
      exercise: "<strong>15분 전략 수립 실습:</strong><br>1) 조직의 현재 AI 성숙도를 4개 영역(기술/인력/프로세스/문화)에서 평가하세요<br>2) 3년 후 목표 상태를 구체적으로 정의하세요<br>3) 단계별 전환 로드맵을 6개월 단위로 작성하세요<br>4) 각 단계별 핵심 성과지표(KPI)를 설정하세요<br>5) 위험 요소와 대응 전략을 수립하세요<br>6) 필요 투자 규모와 예상 ROI를 계산하세요",
      resources: ["Enterprise AI Strategy Playbook", "AI 거버넌스 프레임워크 구축 가이드", "디지털 트랜스포메이션 리더십", "AI CoE 설립 및 운영 매뉴얼", "조직 변화 관리 베스트 프랙티스"]
    }
  };
  
  return answers[level] || answers.beginner;
}

function customizeAnswer(baseAnswer, specialRequest, level) {
  const customized = { ...baseAnswer };
  
  // Add special request context to practical example
  if (specialRequest.includes('M365') || specialRequest.includes('마이크로소프트')) {
    customized.practicalExample += `<br><br><strong>${specialRequest} 맞춤 활용:</strong><br>M365 생태계에서의 통합 활용 - Copilot, Teams, SharePoint, Power Platform을 연계하여 ${specialRequest} 요구사항에 특화된 워크플로우를 구축해보세요.`;
  } else if (specialRequest.includes('교육') || specialRequest.includes('학습')) {
    customized.practicalExample += `<br><br><strong>교육 환경 특화:</strong><br>${specialRequest} 상황을 고려하여 학습자 맞춤형 콘텐츠 생성, 진도 관리, 평가 자동화에 AI를 적용해보세요.`;
  } else if (specialRequest.length > 0) {
    customized.practicalExample += `<br><br><strong>${specialRequest} 분야 맞춤:</strong><br>해당 영역의 특성과 요구사항을 반영한 AI 도구 활용 전략을 수립해보세요.`;
  }
  
  return customized;
}

function displayAnswer(answer) {
  console.log('Displaying answer:', answer);
  
  const coreAnswerElement = document.getElementById('coreAnswer');
  const practicalExampleElement = document.getElementById('practicalExample');
  const exerciseElement = document.getElementById('exercise');
  const resourcesElement = document.getElementById('resources');
  const answerContainer = document.getElementById('answerContainer');
  const emptyState = document.getElementById('emptyState');
  
  if (!coreAnswerElement || !practicalExampleElement || !exerciseElement || !resourcesElement) {
    console.error('Answer elements not found');
    showError('답변 표시 중 오류가 발생했습니다.');
    return;
  }
  
  // Clear any existing error messages
  clearErrors();
  
  // Populate answer sections
  coreAnswerElement.innerHTML = answer.coreAnswer;
  practicalExampleElement.innerHTML = answer.practicalExample;
  exerciseElement.innerHTML = answer.exercise;
  
  // Handle resources
  if (Array.isArray(answer.resources)) {
    const resourcesList = answer.resources.map(resource => `<li>${resource}</li>`).join('');
    resourcesElement.innerHTML = `<ul>${resourcesList}</ul>`;
  } else {
    resourcesElement.innerHTML = answer.resources;
  }
  
  // Show answer container and hide empty state
  if (emptyState) {
    emptyState.classList.add('hidden');
  }
  if (answerContainer) {
    answerContainer.classList.remove('hidden');
    
    // Scroll to answer
    setTimeout(() => {
      answerContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  }
  
  console.log('Answer displayed successfully');
}

function setLoadingState(loading) {
  const generateBtn = document.getElementById('generateBtn');
  const btnText = generateBtn?.querySelector('.btn-text');
  const btnLoading = generateBtn?.querySelector('.btn-loading');
  
  if (!generateBtn) {
    console.error('Generate button not found');
    return;
  }
  
  console.log('Setting loading state:', loading);
  
  if (loading) {
    generateBtn.classList.add('loading');
    generateBtn.disabled = true;
    if (btnText) btnText.classList.add('hidden');
    if (btnLoading) btnLoading.classList.remove('hidden');
  } else {
    generateBtn.classList.remove('loading');
    generateBtn.disabled = false;
    if (btnText) btnText.classList.remove('hidden');
    if (btnLoading) btnLoading.classList.add('hidden');
  }
}

function copyAnswer() {
  const coreAnswerElement = document.getElementById('coreAnswer');
  const practicalExampleElement = document.getElementById('practicalExample');
  const exerciseElement = document.getElementById('exercise');
  const resourcesElement = document.getElementById('resources');
  
  if (!coreAnswerElement || !practicalExampleElement || !exerciseElement || !resourcesElement) {
    console.error('Cannot copy - answer elements not found');
    return;
  }
  
  const answerText = extractAnswerText();
  
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(answerText)
      .then(() => showCopyFeedback('답변이 클립보드에 복사되었습니다!'))
      .catch(() => fallbackCopy(answerText));
  } else {
    fallbackCopy(answerText);
  }
}

function fallbackCopy(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  
  try {
    document.execCommand('copy');
    showCopyFeedback('답변이 복사되었습니다!');
  } catch (err) {
    console.error('Copy failed:', err);
    showCopyFeedback('복사에 실패했습니다. 수동으로 선택해서 복사해주세요.');
  }
  
  document.body.removeChild(textarea);
}

function extractAnswerText() {
  const coreAnswerElement = document.getElementById('coreAnswer');
  const practicalExampleElement = document.getElementById('practicalExample');
  const exerciseElement = document.getElementById('exercise');
  const resourcesElement = document.getElementById('resources');
  
  const sections = [
    { title: '💡 핵심 답변', content: coreAnswerElement?.textContent || '' },
    { title: '🎯 실무 예시', content: practicalExampleElement?.textContent || '' },
    { title: '📝 추천 실습', content: exerciseElement?.textContent || '' },
    { title: '🔗 추가 자료', content: resourcesElement?.textContent || '' }
  ];
  
  return sections.map(section => `### ${section.title}\n${section.content.trim()}\n`).join('\n');
}

function showCopyFeedback(message) {
  const feedback = document.createElement('div');
  feedback.className = 'copy-feedback';
  feedback.textContent = message;
  
  document.body.appendChild(feedback);
  
  setTimeout(() => {
    if (feedback.parentNode) {
      feedback.parentNode.removeChild(feedback);
    }
  }, 3000);
}

function clearAnswer() {
  const answerContainer = document.getElementById('answerContainer');
  const emptyState = document.getElementById('emptyState');
  const questionForm = document.getElementById('questionForm');
  
  if (answerContainer) answerContainer.classList.add('hidden');
  if (emptyState) emptyState.classList.remove('hidden');
  if (questionForm) {
    questionForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  
  clearErrors();
}

function showError(message) {
  console.error('Showing error:', message);
  
  // Clear any existing errors first
  clearErrors();
  
  const errorElement = document.createElement('div');
  errorElement.className = 'form-error';
  errorElement.style.cssText = `
    background: var(--color-error);
    color: var(--color-surface);
    padding: var(--space-12) var(--space-16);
    border-radius: var(--radius-base);
    margin-top: var(--space-8);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-medium);
    animation: fadeIn var(--duration-normal) var(--ease-standard);
  `;
  
  errorElement.textContent = message;
  
  const questionInput = document.getElementById('question');
  if (questionInput && questionInput.parentElement) {
    questionInput.parentElement.appendChild(errorElement);
  }
  
  // Auto-hide error after 5 seconds
  setTimeout(() => {
    if (errorElement.parentNode) {
      errorElement.parentNode.removeChild(errorElement);
    }
  }, 5000);
}

function clearErrors() {
  const existingErrors = document.querySelectorAll('.form-error');
  existingErrors.forEach(error => {
    if (error.parentNode) {
      error.parentNode.removeChild(error);
    }
  });
}

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
  // Ctrl/Cmd + Enter to submit form
  if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
    const questionInput = document.getElementById('question');
    const generateBtn = document.getElementById('generateBtn');
    
    if (questionInput && questionInput.value.trim() && generateBtn && !generateBtn.disabled && !isGenerating) {
      e.preventDefault();
      const questionForm = document.getElementById('questionForm');
      if (questionForm) {
        const submitEvent = new Event('submit', { cancelable: true });
        questionForm.dispatchEvent(submitEvent);
      }
    }
  }
  
  // Escape to clear answer
  if (e.key === 'Escape') {
    const answerContainer = document.getElementById('answerContainer');
    if (answerContainer && !answerContainer.classList.contains('hidden')) {
      e.preventDefault();
      clearAnswer();
    }
  }
});