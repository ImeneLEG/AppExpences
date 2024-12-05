# Expense Tracker

This is a web-based Expense Tracker application. It allows users to record and view their income and expenses, providing insights into monthly transactions, savings, earnings, and expenditures. This README includes setup instructions, details on the features implemented, and any assumptions or limitations.

## Features

- **Add Transactions:** Users can insert transactions by specifying the date, amount, description, and type (Credit for income, Debit for expense).
- **Monthly Overview:**  
  The application displays transactions grouped by month, including:
  - **Earnings:** Total income (Credits)
  - **Expenses:** Total expenditure (Debits)
  - **Savings:** Computed as (Earnings - Expenses + Previous Savings)
  - **Previous Savings:** Carried over from previous months
- **Edit & Delete Transactions:** Users can modify or remove existing transactions directly in the UI.
- **Material Design:** Uses Angular Material for a consistent and responsive UI.

## Assumptions & Limitations

- **Backend API:**  
  The frontend expects a running backend API providing the following endpoints:
  - `GET /api/Transaction/GetAll`
  - `GET /api/Transaction/GetMonthlyTransactions`
  - `POST /api/Transaction/Upsert`
  - `DELETE /api/Transaction/Delete/{id}`
  
  If the backend is not available or not returning the expected responses, the application may not function correctly.

- **JSON Responses:**  
  The frontend expects all API responses to be in JSON format. Non-JSON responses (e.g., HTML) will result in parsing errors.

- **Currency Format:**  
  The project was initially configured for the Indian Rupee symbol (₹). It has been updated to Moroccan Dirham (MAD).  
  To change currency, adjust the `NumberPipe` or use the Angular built-in `CurrencyPipe`.

## Prerequisites

- **Node.js & npm:**  
  Install [Node.js](https://nodejs.org/) (LTS version recommended) which includes npm.
- **Angular CLI:**  
Install Angular CLI globally:
  ```bash
  npm install -g @angular/cli
After that use this cmd :
   ```bash
  ng serve --proxy-config proxy.conf.json


  
