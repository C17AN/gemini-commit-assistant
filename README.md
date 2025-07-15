# gemini-commit-assistant

🤖 **AI 기반 Git 커밋 메시지 자동 생성기**

Google Gemini API를 사용하여 변경사항을 분석하고 적절한 커밋 메시지를 자동으로 생성해주는 CLI 도구입니다.

## ✨ 특징

- 🧠 **AI 기반 분석**: Gemini API로 변경사항을 지능적으로 분석
- 📝 **일관된 형식**: Conventional Commits 스타일 적용
- 🎯 **정확한 분류**: feat, fix, chore, refactor 등 자동 분류
- 🛡️ **안정적 폴백**: AI 실패 시 스마트 분석으로 대체
- 💬 **인터랙티브**: 메시지 편집 및 커스터마이징 옵션

## 📦 설치

### 1. 전역 설치 (권장)

```bash
npm install -g gemini-commit-assistant
```

### 2. 프로젝트별 설치

```bash
npm install --save-dev gemini-commit-assistant
```

### 3. 사전 요구사항

```bash
# Google Gemini CLI 설치
npm install -g @google/gemini-cli

# API 키 설정
gemini config set apiKey YOUR_GEMINI_API_KEY
```

> 💡 API 키는 [Google AI Studio](https://ai.google.dev/)에서 무료로 발급받을 수 있습니다.

## 🚀 사용법

### 1. Git alias 설정 (원클릭 설정)

```bash
# git ai-commit 명령어 활성화
ai-commit --setup
```

### 2. 기본 사용

```bash
# 변경사항을 staging하고 AI 커밋 메시지 생성
git add .
ai-commit

# 또는 짧은 명령어 사용
aic

# Git alias 사용 (--setup 실행 후)
git ai-commit
```

### 옵션

실행 후 다음 옵션들을 선택할 수 있습니다:

- **y**: AI 생성 메시지로 커밋
- **e**: 메시지 편집 후 커밋
- **c**: 커스텀 메시지 입력
- **n**: 취소

### 생성되는 커밋 메시지 형식

```
feat: 사용자 인증 시스템 구현


src/auth/login.ts: JWT 기반 로그인 로직 구현


src/components/LoginForm.vue: 로그인 폼 컴포넌트 추가


docs/auth.md: 인증 시스템 사용법 문서 작성
```

## 🔧 고급 설정

### 프로젝트 scripts에 추가

`package.json`에 스크립트를 추가하여 더 쉽게 사용할 수 있습니다:

```json
{
  "scripts": {
    "commit": "ai-commit",
    "c": "ai-commit"
  }
}
```

### Git alias 설정

```bash
git config --global alias.aic '!ai-commit'
```

이제 `git aic` 명령으로 사용할 수 있습니다.

## 🛠️ 문제 해결

### Gemini CLI가 설치되지 않은 경우

스크립트가 자동으로 설치 가이드를 제공합니다:

```bash
❌ Gemini CLI가 설치되어 있지 않습니다.

🔧 설치 방법:
   1. Node.js가 설치되어 있는지 확인:
      node --version

   2. Gemini CLI 설치:
      npm install -g @google/gemini-cli

   3. Gemini API 키 설정:
      gemini config set apiKey YOUR_API_KEY
```

### API 키 문제

API 키 관련 오류 발생 시:

1. Google AI Studio에서 API 키 발급: https://ai.google.dev/
2. API 키 설정: `gemini config set apiKey YOUR_API_KEY`
3. 설정 확인: `gemini config list`

### 네트워크 문제

- 인터넷 연결 확인
- 방화벽 설정 확인
- 프록시 설정이 있다면 환경변수 설정

## 📝 라이선스

MIT License

## 🤝 기여하기

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 지원

- 이슈 리포트: [GitHub Issues](https://github.com/realm/gemini-commit-assistant/issues)
- 기능 요청: [GitHub Discussions](https://github.com/realm/gemini-commit-assistant/discussions)

---

Made with ❤️ by C17AN
