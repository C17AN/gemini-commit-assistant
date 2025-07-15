# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.7] - 2024-12-19

### Changed

- 🔄 **Primary command changed from `ai-commit` to `aic`**
- 🏷️ `ai-commit` is now an alias for `aic` (backward compatibility maintained)
- 📚 Updated all documentation to reflect the new primary command
- 💡 Updated help messages and examples throughout the codebase
- 🔧 Modified git alias setup to use `git aic` instead of `git ai-commit`
- 📦 Updated postinstall messages to prioritize `aic` command

### Added

- 🌐 Smart language detection for postinstall messages (Korean/English)
- 📊 Display of Gemini CLI quota information (60 requests/minute + 1,000 requests/day)

### Fixed

- 🛠️ Improved installation experience with clearer command hierarchy

## [1.0.0] - 2024-12-19

### Added

- 🎉 Initial release of AI Commit CLI
- 🤖 AI-powered commit message generation using Google Gemini API
- 📝 Conventional Commits format support
- 🛡️ Smart fallback system when AI is unavailable
- 💬 Interactive options (edit, custom, cancel)
- 🔧 Automatic Gemini CLI installation guide
- 🌐 Comprehensive error handling for API and network issues
- 📦 Support for both global and local installation
- 🎯 Intelligent change analysis with file-specific descriptions
- ⚡ Fast processing with smart diff summarization for large changes

### Features

- **AI Analysis**: Intelligent git diff analysis using Gemini API
- **Format Control**: Automatic title/body separation with proper line breaks
- **Error Recovery**: Graceful degradation to rule-based messages
- **User Experience**: Clear installation guides and troubleshooting
- **Flexibility**: Multiple installation options and usage patterns

### Technical Details

- Node.js 16+ support
- Peer dependency on @google/gemini-cli
- Cross-platform compatibility (macOS, Linux, Windows)
- Efficient diff processing for repositories of any size
