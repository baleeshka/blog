Области хранения данных:

-   база данных на json-server
-   BFF
-   Redux Store

Сущности приложения:

-   Пользователь: БД (список пользователей), BFF(сессия текущего), Стор(отображение в браузере)
-   Роль пользователя: БД(список ролей), BFF(сессия пользователя с ролью), стор(использование на клиенте)
-   Статься: БД(список статей), стор(отображение в браузере)
-   Комментарий: БД(список комментариев), стор(отображение в браузере)

Таблицы БД:

-   Пользователи - users: id \ login \ password \ registered_at \ role_id
-   Роли - role: id \ name
-   Статья - posts: id \ title \ image_url \ content \ published_at
-   Комментарии - comments: id \ author_id \ post_id \ content

Схема состояния на BFF:

-   сессия текущего пользователя: login \ password \ role

Схема для Redux Store:

-   user: id \ login \ role_id
-   posts: массив post: id \ title \ imageUrl \ publishedAt \ commentsCount
-   post: id \ title \ imageUrl \ content \ publishedAt \ comments: массив comment: id \ author \ content \ publishedAt
-   users: массив user: id \ login \ registeredAt \ role
