# Pipenv
1. pip install pipenv
   - RU: pipenv - это менеджер пакетов для Python, который обеспечивает изоляцию проекта и управление зависимостями.
2. pipenv install (this creates 2 files: Pipfile and Pipfile.lock)
   - RU: pipenv install (это создает 2 файла: Pipfile и Pipfile.lock)
3. pipenv shell (activate virtual environment)
If this does not work, so, just create a python file with extension .py and choose proper venv below VSCode
   - RU: Если это не работает, просто создайте файл python с расширением .py и выберите соответствующее venv ниже в VSCode
4. pipenv install django
5. django-admin --version (to check if it is installed)
   - RU: django-admin --version (чтобы проверить, установлен ли Django)
6. django-admin startproject name-of-site
7. cd name-of-site
8. python manage.py startapp name-of-app

When we created an app, that app will have its own folder with the following files:
   - admin.py
   - apps.py
   - models.py
   - tests.py
   - views.py
   - urls.py
   - migrations (folder)
    - __init__.py