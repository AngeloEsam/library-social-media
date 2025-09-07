# 📱 Social Media & Book Management Backend

A **Node.js + Express + MongoDB** backend with **Socket.io** for real-time notifications.  
Supports **users, posts, comments, books, ratings, authors, and notifications** with authentication and role-based access.

---

## 🚀 Features

- **Authentication & Authorization**
  - User register, login, logout
  - Google authentication
  - Password reset & update
  - Role management (user ↔ admin)

- **User Management**
  - Profile update (photo & cover)
  - Follow / Unfollow system
  - Who to follow (suggestions)
  - User statistics (login & registration)
  - Upload & update profile photos

- **Posts & Interactions**
  - Create, update, delete posts
  - Like, dislike, save & unsave posts
  - Pagination for feed
  - Upload post images

- **Comments**
  - Add, update, delete comments
  - Like / Unlike comments
  - Fetch comments per post

- **Books & Authors**
  - Add, update, delete books (with PDF & cover upload)
  - Favorite / Unfavorite books
  - Search by title or category
  - Manage categories
  - CRUD authors with search support

- **Ratings**
  - Add ratings & reviews
  - Fetch first 5 or all reviews
  - Delete reviews

- **Notifications (with Socket.io)**
  - Real-time notifications via WebSocket
  - Mark all notifications as read
  - Delete single notification
  - Create notifications via API

- **File Handling**
  - Upload PDFs, covers, images
  - Static file serving:
    - `/bookImage`
    - `/userImages`
    - `/postImages`

---

## 🛠️ API Endpoints

### 🔐 Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST   | /users/register | Register new user |
| POST   | /users/login | Login user |
| POST   | /users/logout | Logout user |
| POST   | /users/google/auth | Google login |
| POST   | /users/forgotPassword | Forgot password |
| POST   | /users/resetPassword/:token | Reset password |
| POST   | /users/updatePassword | Update password |
| PUT    | /users/changepassword | Change password |
| PUT    | /users/updatename | Update username |
| PUT    | /users/updateProfile | Update profile (photo & cover) |

---

### 👤 Users
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | /users/ | Get all users |
| GET    | /users/single/:id | Get single user |
| GET    | /users/profile | Get current profile |
| PATCH  | /users/photo/:id | Update profile photo |
| PATCH  | /users/up/:userId | Upgrade user to admin |
| PATCH  | /users/down/:userId | Downgrade admin to user |
| POST   | /users/follow/:userId/:followUserId | Follow a user |
| POST   | /users/unfollow/:userId/:unfollowUserId | Unfollow a user |
| GET    | /users/random/user/whoToFollow/timeline | Suggested users |
| GET    | /users/login/login-statistics | Login statistics |
| GET    | /users/register/registerWeek/registration-statistics | Registration statistics |
| DELETE | /users/:id | Delete user |
| PATCH  | /users/:id | Update user |

---

### 📝 Posts
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST   | /posts/ | Create post (with image) |
| GET    | /posts/ | Get all posts |
| GET    | /posts/pagination | Get paginated posts |
| GET    | /posts/:id | Get posts by user |
| GET    | /posts/single/:id | Get single post |
| POST   | /posts/like/:userId/:postId | Like post |
| POST   | /posts/dislike/:userId/:postId | Dislike post |
| POST   | /posts/save/:userId/:postId | Save post |
| POST   | /posts/unsave/:userId/:postId | Unsave post |
| PATCH  | /posts/:id | Update post |
| DELETE | /posts/:id | Delete post |

---

### 💬 Comments
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST   | /comments/ | Create comment |
| GET    | /comments/ | Get all comments |
| GET    | /comments/post/:postId | Get comments for a post |
| PUT    | /comments/:commentId | Update comment |
| DELETE | /comments/:commentId | Delete comment |
| POST   | /comments/like/:commentId | Like comment |
| POST   | /comments/unlike/:commentId | Unlike comment |

---

### 📚 Books
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | /books/ | Get all books |
| GET    | /books/categories | Get all categories |
| GET    | /books/searchCategory | Search books by category |
| GET    | /books/searchTitle | Search books by title |
| GET    | /books/single/:id | Get single book |
| POST   | /books/ | Add book (PDF + cover upload) |
| PUT    | /books/:id | Update book |
| DELETE | /books/:id | Delete book |
| POST   | /books/addFavoriteBook/:userId/:bookId | Add to favorites |
| POST   | /books/removeFavoriteBook/:userId/:bookId | Remove from favorites |

---

### ✍️ Authors
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | /authors/ | Get all authors |
| GET    | /authors/:authorId | Get single author |
| POST   | /authors/ | Create author |
| PATCH  | /authors/:authorId | Update author |
| DELETE | /authors/:authorId | Delete author |

---

### ⭐ Ratings
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST   | /ratings/:userId/:bookId | Add rating/review |
| GET    | /ratings/:id/reviews/first-five | Get first 5 reviews |
| GET    | /ratings/:id/reviews/all | Get all reviews |
| DELETE | /ratings/:userId/:reviewId | Delete review |

---

### 🔔 Notifications
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | /notifications/:userId | Get user notifications |
| PUT    | /notifications/read-all/:userId | Mark all as read |
| POST   | /notifications/create | Create notification |
| DELETE | /notifications/:userId/:notificationId | Delete notification |

---

## ⚙️ Getting Started

### 📥 Clone repo
```bash
git clone https://github.com/AngeloEsam/library-social-media.git
cd library-social-media
