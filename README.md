# gemini-commit-assistant

🤖 **AI 기반 Git 커밋 메시지 자동 생성기**

Google Gemini CLI를 활용하여 변경사항을 분석하고 적절한 커밋 메시지를 자동으로 생성해주는 CLI 도구입니다.
높은 rate limit으로 **무료로 지속가능한 AI 커밋 생성**이 가능합니다.

## ✨ 특징

- 🧠 **AI 기반 분석**: Gemini API로 변경사항을 지능적으로 분석
- 📝 **일관된 형식**: Conventional Commits 스타일 적용
- 🎯 **정확한 분류**: feat, fix, chore, refactor 등 자동 분류
- 🛡️ **안정적 폴백**: AI 실패 시 일반 에디터로 폴백
- 💬 **인터랙티브**: 메시지 편집 및 커스터마이징 옵션
- 🆓 **무료 사용**: Gemini CLI의 높은 rate limit으로 지속가능한 무료 AI 커밋 생성

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
```

### 💰 무료 사용 한도

Google Gemini CLI는 LLM API를 직접 사용하는 것보다 훨씬 관대한 무료 사용 한도를 제공합니다:

- **🏆 개인 Google 계정 로그인 (권장)**: 분당 60개 + 일일 1,000개 요청 무료
- **Gemini API 키 사용**: 일일 100개 요청 무료 (Gemini 2.5 Pro)

### 🎯 권장 설정: 개인 계정 로그인

가장 쉽고 많은 한도를 제공하는 방법입니다:

```bash
# 1. Gemini CLI 실행
gemini

# 2. 프롬프트가 나타나면 개인 Google 계정으로 로그인
# 자동으로 분당 60개 + 일일 1,000개 요청 한도가 적용됩니다
```

> 🚀 **추천 이유**:
>
> - ✅ **10배 더 많은 무료 요청** (1,000개 vs 100개)
> - ✅ **설정이 더 간단** (API 키 발급 불필요)
> - ✅ **분당 60개 요청**으로 빠른 개발 가능

### 🔑 대안: API 키 사용

더 적은 한도이지만 API 키를 선호하는 경우:

```bash
# API 키 설정
gemini config set apiKey YOUR_GEMINI_API_KEY
```

> 💡 API 키는 [Google AI Studio](https://ai.google.dev/)에서 무료로 발급받을 수 있습니다.

## 🚀 사용법

### 1. 초기 설정 (최초 1회)

```bash
# Gemini CLI 설치
npm install -g @google/gemini-cli

# 🏆 권장: 개인 Google 계정으로 로그인
gemini
# 로그인 프롬프트가 나타나면 개인 계정으로 로그인
# 일일 1,000개 요청 + 분당 60개 요청 무료!

# Git alias 설정 (선택사항)
ai-commit --setup

# Git alias 해제 (필요시)
ai-commit --unsetup
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
# 자동 설정
ai-commit --setup

# 또는 수동 설정
git config --global alias.aic '!ai-commit'
```

이제 `git aic` 또는 `git ai-commit` 명령으로 사용할 수 있습니다.

### Git alias 해제

```bash
# 자동 해제
ai-commit --unsetup

# 또는 수동 해제
git config --global --unset alias.ai-commit
```

## 🛠️ 문제 해결

### Gemini CLI가 설치되지 않은 경우

Gemini CLI가 설치되어 있지 않으면 자동으로 일반 에디터로 폴백합니다:

```bash
⚠️  Gemini CLI가 설치되어 있지 않습니다.
🔧 일반 에디터로 커밋 메시지를 작성합니다...

📦 파일을 staging합니다...
# 에디터가 열려서 일반 git commit처럼 동작
```

**수동 설치 방법:**

```bash
# 1. Node.js가 설치되어 있는지 확인
node --version

# 2. Gemini CLI 설치
npm install -g @google/gemini-cli

# 3. 🏆 권장: 개인 Google 계정으로 로그인
gemini
# 로그인 프롬프트가 나타나면 개인 계정으로 로그인
# 일일 1,000개 요청 + 분당 60개 요청 무료!

# 4. 🔑 대안: API 키 사용 (더 적은 한도)
gemini config set apiKey YOUR_API_KEY
# 일일 100개 요청만 무료

# 5. 🏷️ Git alias 설정 (선택사항)
ai-commit --setup    # git ai-commit 명령어 활성화
ai-commit --unsetup  # git ai-commit 명령어 해제
```

### 🏆 권장: 개인 계정 로그인 사용

가장 쉽고 많은 한도를 제공하는 방법입니다:

```bash
# 1. Gemini CLI 실행
gemini

# 2. 로그인 프롬프트가 나타나면 개인 Google 계정으로 로그인
# 3. 로그인 상태 확인
gemini config list
```

> 🎯 **장점**:
>
> - 일일 1,000개 요청 + 분당 60개 요청 무료
> - API 키 발급 불필요
> - 대부분의 개발 팀에서 무료로 지속가능한 AI 커밋 생성 가능

### 🔑 대안: API 키 사용

개인 계정 로그인을 선호하지 않는 경우:

1. Google AI Studio에서 API 키 발급: https://ai.google.dev/
2. API 키 설정: `gemini config set apiKey YOUR_API_KEY`
3. 설정 확인: `gemini config list`

> ⚠️ **제한사항**: 일일 100개 요청만 무료 제공 (개인 계정 로그인의 1/10 수준)

### AI 기능 사용 불가 시 자동 폴백

**다음 경우에 자동으로 일반 에디터로 폴백됩니다:**

1. **Gemini CLI가 설치되지 않은 경우**
2. **API 키 또는 인증 문제**
3. **네트워크 연결 문제**
4. **AI 응답 실패**

```bash
⚠️  Gemini CLI 실행에 실패했습니다.
🔧 일반 에디터로 커밋 메시지를 작성합니다...

📦 파일을 staging합니다...
# 에디터가 열려서 일반 git commit처럼 동작
```

> 💡 **장점**: AI 기능을 사용할 수 없어도 일반 git commit처럼 정상적으로 동작

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
