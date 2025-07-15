#!/usr/bin/env node

const colors = {
  reset: "\x1b[0m",
  bold: "\x1b[1m",
  dim: "\x1b[2m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  white: "\x1b[37m",
};

const { reset, bold, dim, green, cyan, yellow, blue, magenta } = colors;

// 시스템 언어 감지 (한국어 우선)
const locale = process.env.LANG || process.env.LC_ALL || "en";
const isKorean = locale.includes("ko") || locale.includes("kr");

if (isKorean) {
  console.log(`
${magenta}${bold}Gemini Commit Assistant 설치 완료!${reset}

${cyan}${bold}이제 다음과 같이 사용하실 수 있습니다:${reset}

${green}  ai-commit${reset}              ${dim}# staged 파일로 AI 커밋 메시지 생성${reset}
${green}  ai-commit --all${reset}        ${dim}# 모든 파일을 staging 후 커밋${reset}
${green}  aic${reset}                    ${dim}# 축약 명령어${reset}

${cyan}${bold}Gemini 2.5 Flash 모델로 넉넉한 사용 쿼터 제공${reset} ${dim}(60 requests/minute + 1,000 requests/day)${reset}

${yellow}${bold}시작하기 전에:${reset}
${yellow}  1.${reset} Gemini CLI 설치: ${green}npm install -g @google/gemini-cli${reset}
${yellow}  2.${reset} 인증 완료: ${green}gemini${reset} ${dim}(인증 과정 따라하기)${reset}
${yellow}  3.${reset} 첫 실행: ${green}ai-commit${reset} ${dim}(언어 선택)${reset}

${blue}${bold}추가 설정:${reset}
${blue}  • Git alias 설정:${reset} ${green}ai-commit --setup${reset}
${blue}  • 언어 변경:${reset} ${green}ai-commit --configure${reset}
${blue}  • 도움말:${reset} ${green}ai-commit --help${reset}

${magenta}${bold}자세한 사용법: https://github.com/c17an/gemini-commit-assistant${reset}
`);
} else {
  console.log(`
${magenta}${bold}Gemini Commit Assistant Installation Complete!${reset}

${cyan}${bold}Now you can use it as follows:${reset}

${green}  ai-commit${reset}              ${dim}# Generate AI commit message for staged files${reset}
${green}  ai-commit --all${reset}        ${dim}# Stage all files and commit${reset}
${green}  aic${reset}                    ${dim}# Short command${reset}

${cyan}${bold}Gemini 2.5 Flash model provides generous usage quota${reset} ${dim}(60 requests/minute + 1,000 requests/day)${reset}

${yellow}${bold}Before getting started:${reset}
${yellow}  1.${reset} Install Gemini CLI: ${green}npm install -g @google/gemini-cli${reset}
${yellow}  2.${reset} Complete authentication: ${green}gemini${reset} ${dim}(follow the authentication process)${reset}
${yellow}  3.${reset} First run: ${green}ai-commit${reset} ${dim}(select language)${reset}

${blue}${bold}Additional settings:${reset}
${blue}  • Set up Git alias:${reset} ${green}ai-commit --setup${reset}
${blue}  • Change language:${reset} ${green}ai-commit --configure${reset}
${blue}  • Show help:${reset} ${green}ai-commit --help${reset}

${magenta}${bold}Documentation: https://github.com/c17an/gemini-commit-assistant${reset}
`);
}
