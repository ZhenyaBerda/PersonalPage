# Персональная страница

В данном репозитории находится мой личный сайт, где представлены мои навыки и основные средства контакта со мной.

 [GitHub Pages](https://zhenyaberda.github.io/PersonalPage/)

# Сборка файла style.css

Стили для сайта написаны с помощью предпроцессора SCSS. Для успешной сборки основного файла стилей style.css при изменении SCSS-файлов необходимо настроить File Watchers в WebStorm (Полную информацию по настройке можно посмотреть в [документации](https://www.jetbrains.com/help/phpstorm/transpiling-sass-less-and-scss-to-css.html)).

### Создание и настройка File Watchers
В диалоговом окне **Settings/Preferences** во вкладке **Tools** выбрать пункт **File Watchers**.

![Создание файла](/img/readme/1.PNG)

Создаем новый файл SCSS.

![Создание файла](/img/readme/2.PNG)

В открывшемся окне, в свойстве **Arguments** прописать следующий путь:
```
$FileName$:../css/$FileNameWithoutExtension$.css
```

![Создание файла](/img/readme/3.PNG)

Сохранить настройки и теперь можно работать с SCSS!
