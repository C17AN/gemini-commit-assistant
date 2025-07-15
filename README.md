# 🤖 Gemini Commit Assistant

**English** | [한국어](README.ko.md)

AI-powered commit message generator using Google Gemini CLI with **Korean/English language support**.

## 📦 Installation

```bash
npm install -g gemini-commit-assistant
```

## 🚀 Usage

```bash
# Generate commit message for staged files
git add file1.js file2.js
ai-commit

# Stage all files and generate commit message
ai-commit --all

# Configure language (Korean/English)
ai-commit --configure

# Set up git alias (optional)
ai-commit --setup
git ai-commit  # Now available
```

## 🔧 Options

| Option         | Description                                      |
| -------------- | ------------------------------------------------ |
| `--all`, `-a`  | Stage all files before generating commit message |
| `--configure`  | Change language settings (Korean/English)        |
| `--setup`      | Set up git alias (`git ai-commit`)               |
| `--unsetup`    | Remove git alias                                 |
| `--help`, `-h` | Show help                                        |

## 💰 Cost Benefits

**Gemini CLI Personal Account (Recommended):**

- **60 requests/minute + 1,000 requests/day** - FREE
- 10x higher limits than API key approach
- Sustainable for entire teams

**API Key Approach:**

- Only 100 requests/day - LIMITED

## 📋 Requirements

- Node.js 16.0.0+
- Git 2.0+
- **Gemini CLI** (install: `npm install -g @google/gemini-cli`)
- **Google account** (personal account recommended)

## 🌐 Language Support

First run automatically prompts for language selection (Korean/English).
Change anytime with `ai-commit --configure`.

## 🛠️ Setup

```bash
# Install Gemini CLI
npm install -g @google/gemini-cli

# Authenticate (recommended)
gemini config set-key your-api-key

# Or login with Google account
gemini auth login
```

## 🎯 Examples

**Korean Mode:**

```bash
ai-commit
# 🤖 AI 커밋 메시지 생성기 (Gemini 기반)
# "feat: 사용자 인증 시스템 구현"
```

**English Mode:**

```bash
ai-commit
# 🤖 AI Commit CLI - AI-powered commit message generator
# "feat: Implement user authentication system"
```

## 📄 License

MIT License
