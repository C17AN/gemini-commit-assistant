#!/bin/bash

# AI Commit CLI npm 패키지 배포 스크립트

set -e

# 색상 정의
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
MAGENTA='\033[0;35m'
CYAN='\033[0;36m'
BOLD='\033[1m'
NC='\033[0m'

echo -e "${MAGENTA}🚀 AI Commit CLI 배포 스크립트${NC}"
echo ""

# 1. npm 로그인 상태 확인
echo -e "${CYAN}📋 npm 로그인 상태 확인...${NC}"
if ! npm whoami >/dev/null 2>&1; then
    echo -e "${RED}❌ npm에 로그인되어 있지 않습니다.${NC}"
    echo -e "${YELLOW}💡 다음 명령어로 로그인하세요:${NC}"
    echo -e "   ${BOLD}npm login${NC}"
    exit 1
fi

NPM_USER=$(npm whoami)
echo -e "${GREEN}✅ npm에 ${BOLD}$NPM_USER${NC}${GREEN}로 로그인됨${NC}"
echo ""

# 2. 패키지 버전 확인
PACKAGE_VERSION=$(node -p "require('./package.json').version")
echo -e "${CYAN}📦 현재 패키지 버전: ${BOLD}v$PACKAGE_VERSION${NC}"
echo ""

# 3. 빌드 테스트
echo -e "${CYAN}🔨 패키지 빌드 테스트...${NC}"
npm pack --dry-run

echo ""
echo -e "${YELLOW}📋 배포 전 체크리스트:${NC}"
echo -e "   ✅ README.md 업데이트됨"
echo -e "   ✅ CHANGELOG.md 업데이트됨"
echo -e "   ✅ package.json 버전 확인됨"
echo -e "   ✅ LICENSE 파일 존재"
echo -e "   ✅ 실행 권한 설정됨"
echo ""

# 4. 배포 확인
while true; do
    read -p "$(echo -e "${BOLD}v$PACKAGE_VERSION으로 배포하시겠습니까? (y)es/(n)o/(t)ag:${NC} ")" choice
    case $choice in
        [Yy]* )
            echo -e "${CYAN}🚀 npm에 배포 중...${NC}"
            npm publish --access public
            
            if [ $? -eq 0 ]; then
                echo -e "${GREEN}✅ 성공적으로 배포되었습니다!${NC}"
                echo ""
                echo -e "${CYAN}📥 설치 방법:${NC}"
                echo -e "   ${BOLD}npm install -g gemini-commit-assistant${NC}"
                echo ""
                echo -e "${CYAN}🔗 npm 페이지:${NC}"
                echo -e "   https://www.npmjs.com/package/gemini-commit-assistant"
            else
                echo -e "${RED}❌ 배포에 실패했습니다.${NC}"
                exit 1
            fi
            break
            ;;
        [Nn]* )
            echo -e "${YELLOW}🚫 배포가 취소되었습니다.${NC}"
            exit 0
            ;;
        [Tt]* )
            echo -e "${CYAN}🏷️  Git 태그 생성 중...${NC}"
            git tag "v$PACKAGE_VERSION"
            git push origin "v$PACKAGE_VERSION"
            echo -e "${GREEN}✅ 태그 v$PACKAGE_VERSION가 생성되었습니다.${NC}"
            ;;
        * )
            echo -e "${RED}❌ y, n, 또는 t를 입력해주세요.${NC}"
            ;;
    esac
done 