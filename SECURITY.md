# Security Policy

## Supported Versions

We release patches for security vulnerabilities in the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

The team at Stadt Geschichte Basel and KleioLab GmbH take security bugs seriously. We appreciate your efforts to responsibly disclose your findings, and will make every effort to acknowledge your contributions.

### How to Report a Security Vulnerability?

**Please do not report security vulnerabilities through public GitHub issues.**

Instead, please report them via one of the following methods:

1. **Email**: Send an email to [info@kleiolab.ch](mailto:info@kleiolab.ch)
2. **GitHub Security Advisory**: Use GitHub's private vulnerability reporting feature at:
   [https://github.com/Stadt-Geschichte-Basel/juedisches-milieu-basel/security/advisories/new](https://github.com/Stadt-Geschichte-Basel/juedisches-milieu-basel/security/advisories/new)

### What to Include in Your Report

Please include the following information in your report:

- Type of issue (e.g., buffer overflow, SQL injection, cross-site scripting, etc.)
- Full paths of source file(s) related to the manifestation of the issue
- The location of the affected source code (tag/branch/commit or direct URL)
- Any special configuration required to reproduce the issue
- Step-by-step instructions to reproduce the issue
- Proof-of-concept or exploit code (if possible)
- Impact of the issue, including how an attacker might exploit it

### Response Timeline

You can expect the following timeline for security issues:

- **Initial Response**: Within 48 hours, we will acknowledge receipt of your vulnerability report
- **Assessment**: Within 5 business days, we will provide an initial assessment of the report
- **Fix Development**: We will work on a fix with priority based on severity
- **Disclosure**: Once a fix is ready, we will coordinate disclosure timing with you

### Public Disclosure

We practice coordinated disclosure:

- We will notify you when we have fixed the vulnerability
- We ask that you wait for our fix to be released before publicly disclosing the vulnerability
- We will credit you in the release notes (unless you prefer to remain anonymous)

## Security Best Practices for Contributors

If you're contributing to this project, please follow these security guidelines:

### Code Review

- All code changes must be reviewed before merging
- Security-sensitive code requires additional scrutiny
- Use static analysis tools to identify potential issues

### Dependencies

- Keep dependencies up to date
- Review security advisories for dependencies regularly
- Use `npm audit` to check for known vulnerabilities
- Avoid adding unnecessary dependencies

### Secrets Management

- Never commit secrets, API keys, or credentials to the repository
- Use environment variables for sensitive configuration
- Review code for accidentally committed secrets before pushing

### Input Validation

- Validate and sanitize all user inputs
- Use parameterized queries for database operations
- Implement proper error handling that doesn't leak sensitive information

### Authentication & Authorization

- Implement proper authentication mechanisms
- Follow the principle of least privilege
- Use secure session management

### Data Protection

- Encrypt sensitive data in transit (HTTPS)
- Follow data protection regulations (GDPR, etc.)
- Implement proper access controls

## Security Tools

We use the following tools to maintain security:

- **npm audit**: Regular dependency vulnerability scanning
- **GitHub Dependabot**: Automated dependency updates and security alerts
- **GitHub CodeQL**: Static code analysis for security vulnerabilities

## Known Security Considerations

This application is designed for public access and contains historical educational content. Currently, there are no known security vulnerabilities.

## Preferred Languages

We prefer all communications to be in English or German.

## Additional Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [GitHub Security Documentation](https://docs.github.com/en/code-security)
- [Node.js Security Best Practices](https://nodejs.org/en/docs/guides/security/)

---

Thank you for helping keep Das Jüdische Basel Puzzle App and its users safe!
