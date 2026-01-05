# System Architecture

## Overview
This is a full-stack Task Manager application:

Frontend (React + TypeScript)
  ↕  REST API
Backend (Node.js + Express + TypeScript)
  ↕  Database (Postgres or MongoDB)

## Key Principles
- Separation of concerns
- Type safety throughout
- Feature-based development

## Folder Structure

### Backend

src/
├── controllers/
├── models/
├── routes/
├── services/
├── middleware/
└── config/

### Frontend

src/
├── api/
├── components/
├── pages/
├── hooks/
├── types/
└── utils/