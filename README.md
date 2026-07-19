# Party Menu Application

A secure, responsive, and intuitive party menu browsing and recipe curation system built with React, Vite, TypeScript, and Plain CSS. The code has been structured in a simple, flat directory layout to ensure readability, maintainability, and ease of debugging.

---

## 🔑 Test Credentials
*   **Email**: `admin@example.com`
*   **Password**: `admin123`
*   **Sign In API Endpoint**: `https://serverless-api-teal.vercel.app/api/auth/signin`

---

## 🚀 Getting Started

Follow these steps to run the application on your local machine:

1.  **Install dependencies**:
    ```bash
    npm install
    ```
2.  **Start the development server**:
    ```bash
    npm run dev
    ```
3.  **Build for production**:
    ```bash
    npm run build
    ```

---

## 📦 Features & Functionality

1.  **User Authentication**: Secure sign-in system. Persists authentication tokens (`party_menu_token`) and user data (`party_menu_user`) in `localStorage` for session persistence.
2.  **Protected Menu Page**: Main menu browsing is guarded. Only authenticated users can access the dashboard.
3.  **Advanced Filtering**:
    *   **Category filter chips**: Filter by `Starter`, `Main`, `Sides`, and `Desert`.
    *   **Diet filter chips**: Filter by `Veg` and `Non-Veg`.
4.  **Name Search**: Filters the menu grid by dish name (case-insensitive) when the **Search** button is clicked.
5.  **Food Detail View**: Lists dish servings, custom details, and ingredients list. Features a heart toggle to Save/Unsave recipes.
6.  **Saved Recipes Manager**: Persistent recipe database saved in `localStorage` under `party_menu_saved_recipes`. Includes a quick-remove button in the list view.
7.  **404 Error Routing**: Gracefully redirects users back to the Menu (if logged in) or the Sign In page (if logged out).

---

## 📁 Flat File Architecture

To keep files easily accessible and simplify the import hierarchy, all core modules live directly under the `src/` directory:

```
src/
├── App.css                  # Consolidated layout support
├── App.tsx                  # Root router configurations and Context providers
├── AuthContext.tsx          # Authentication API calls and session storage
├── FoodCard.tsx             # Clickable recipe card component
├── FoodDetail.tsx           # Recipe specifications and ingredients lists
├── index.css                # Consolidated custom CSS theme and responsive rules
├── main.tsx                 # React app mount entrypoint
├── Menu.tsx                 # Search panel, chip filters, and recipe collection grid
├── menuData.ts              # Static recipe database array and filter query helper methods
├── NotFound.tsx             # 404 fallback page controller
├── ProtectedRoute.tsx       # Authentication guard routing component
├── SavedRecipes.tsx         # User's saved recipe grid listing
└── SavedRecipesContext.tsx  # Saves, unsaves, and updates pinned recipes in localStorage
```

---

## 💾 Local Storage Key Mapping
*   **Auth Token**: `party_menu_token`
*   **User Details**: `party_menu_user`
*   **Saved Recipe List**: `party_menu_saved_recipes`
