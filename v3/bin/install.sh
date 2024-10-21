npm install -g sass
npm install
composer install
php -r "file_put_contents('node_modules/.htaccess', 'Order allow,deny' . PHP_EOL . 'Deny from all');"
cp -r node_modules/bootstrap-icons assets/fonts/bootstrap-icons