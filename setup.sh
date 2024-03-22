ln --symbolic serv.conf /etc/nginx/sites-enabled/serv.conf

cd myapp
npm run build
cd ../beflix_website
python3 manage.py collectstatic
gunicorn bedflix_website.wsgi -D
systemctl restart nginx