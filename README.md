# TestMu SDET-2 Automation Framework

## Overview

This project is a scalable end-to-end automation framework built as part of the TestMu AI SDET-2 Quality Engineering Challenge.

The framework is designed to validate UI, API, and integration workflows using modern automation engineering practices with maintainability, scalability, and reliability as primary goals.

---

# Tech Stack

| Layer | Technology |
|-------|------------|
| UI Automation | Cypress |
| Language | JavaScript |
| API Testing | Cypress API Testing |
| Reporting | Mochawesome |
| CI/CD | GitHub Actions |
| Test Design | Page Object Model (POM) |
| Test Data | JSON Fixtures |

---

# Framework Goals

- Maintainable automation architecture
- Scalable test organization
- Reliable UI and API automation
- Reusable utilities and workflows
- Integration between UI and API layers
- CI-ready execution pipeline
- Reporting with screenshots and videos

---

# Application Under Test

UI + API Testing Platform:

https://automationexercise.com

---

# Planned Coverage

## UI Testing

- Login / Logout
- Product Search
- Cart Management
- Checkout Flow
- Form Validations

---

## API Testing

- User Creation
- Login Verification
- Product APIs
- CRUD Operations
- Negative Testing
- Response Validation
- Response Time Assertions

---

## Integration Testing

- API-created user login validation through UI
- UI-created user verification through API

---

# Framework Architecture

```text
cypress/
 ├── e2e/
 │    ├── ui/
 │    ├── api/
 │    └── integration/
 │
 ├── fixtures/
 │
 ├── pages/
 │
 └── support/
      ├── api/
      ├── utils/
      └── assertions/
```

---

# Design Principles

- Lightweight Page Object Model
- Reusable page actions
- Externalized test data
- Stable selector strategy
- Minimal hardcoded waits
- Readable and maintainable tests
- Separation of concerns

---

# Reporting

The framework integrates Mochawesome reporting with:

- HTML reports
- Failure screenshots
- Video recordings
- Execution logs

---

# CI/CD Strategy

GitHub Actions will be configured to:

- Run tests on push and pull requests
- Publish reports
- Display automated test execution results

---

# Setup Instructions

## Clone Repository

```bash
git clone <repository-url>
```

---

## Install Dependencies

```bash
npm install
```

---

## Open Cypress

```bash
npx cypress open
```

---

## Run Tests Headlessly

```bash
npx cypress run
```

---

# Author
Nandan
