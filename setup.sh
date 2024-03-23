
cd myapp
npm run build
cd ../beflix_website
python3 manage.py collectstatic
gunicorn --bind unix:/tmp/gunicorn.sock bedflix_website.wsgi -D
systemctl restart nginx