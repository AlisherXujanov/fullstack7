# TABLE OF CONTENTS

- [TABLE OF CONTENTS](#table-of-contents)
- [Installation](#installation)
- [Django \& React Authentication on JWT](#django--react-authentication-on-jwt)

# Installation

```bash
# <!-- First -->
- npm init react-app frontend

# <!-- Second -->
- pip install django
- pip install djangorestframework
- pip install django-cors-headers

# <!-- Third -->
- django-admin startproject backend
- cd backend
- python manage.py startapp ...
```

```python
INSTALLED_APPS = [
    # ...
    # 👇 Add here your installed app's
    'rest_framework',
    'corsheaders',
]

MIDDLEWARE = [
    # ...
    # 👇 Add this line here
    'corsheaders.middleware.CorsMiddleware',
    # Add above line just before this line 👇
    'django.middleware.common.CommonMiddleware',
]

# 👇 Add this line here
CORS_ORIGIN_ALLOW_ALL = True


What is Handling Cross-Origin Resource Sharing (CORS)?

When we try to make an HTTP request from a different origin 
(e.g., from the React app to the Django API), we may run into a 
CORS error. To fix this, we need to add the Django Cors Headers 
package to our Django project. This package will add the necessary 
headers to allow cross-origin requests.
```

# Django & React Authentication on JWT

`STEPS must be taken are:`
- [x] Install djangorestframework_simplejwt in your Django project and set up [JWT Authentication](DRF.md#jwt).
- [x] [Customizing JWT](DRF.md#customizing-jwt) that returns a JWT token.
- [x] [Create store](React.md#Create-store.js-file-in-root-folder) file in config folder
- [x] [Create axios](React.md#Create-axios.js-file-in-root-folder) file in config folder
- [x] [Create navbar](React.md#Create-navbar)
- [x] Create a login form in React and use axios to send a POST request to the Django login API and store jwt.
- [x] Use the stored JWT token in the Authorization header for - subsequent API requests.




- [TABLE OF CONTENTS](#table-of-contents)
