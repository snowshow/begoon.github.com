---
layout: post
title: "Wiki2blog: онлайновый wiki-редактор для Blogspot"
language: russian
date: 2009-12-22 00:00
comments: true
blogspot: http://easy-coding.blogspot.com/2009/12/wiki2blog-wiki-blogspot.html
categories:
- russian
---
Как я уже [писал][Ведение блога на Google Code], что из-за неудобства онлайнового редактора Blogspot'а я перешел на использование Wiki на Google Code для написания и хранения постов. То есть я пишу пост, используя язык разметки Wiki, отлаживанию разметку, заливаю картинки и т.д., а затем просто конвертирую wiki-файл с помощью [скрипта на php][wiki2blog.php] в html. Фишка тут в том, что скрипт должен учитывать некоторые "особенности" Blogspot'а — необходимость убирать разделители строки после блочных тэгов типа `blockquote`, `pre`, списков и т.д., чтобы не появлялись ненужные отступы. В результате выходной html становится практически нечитаемым.

[wiki2blog.php]: http://code.google.com/p/easy-coding/source/browse/tools/wiki2blog.php

Удобство же wiki-разметки в том, что исходник поста выглядит красиво и пригоден для последующего редактирования.

Но в таком подходе цикл работы над постом несколько длинноват: редактор, push через Mercurial на Google Code, просмотр как выглядит на Wiki, затем прогон через скрипт, и если все хорошо, то "cut-paste" в онлайн-редактор Blogspot и финальный отсмотр там. А если обнаруживаются шероховатости, что цикл повторяется сначала. И еще меня раздражал сам скрипт — корявый и непонятный.

Хотелось чего-нибудь легкого и более менее WYSIWYG.

Порыскав в сети на наткнулся на [wiki2html][]. И это оказалось то, что нужно. Я немного подкорячил это под свой формат wiki-разметки и, в итоге получилось это: [онлайновый редактор с препросмотром для подготовки постов][Онлайновый редактор] в Blogspot.

[wiki2html]: http://remysharp.com/demo/wiki2html.html
[Онлайновый редактор]: http://easy-coding.googlecode.com/hg/tools/js/wiki2html.html

Теперь цикл такой: набиваешь пост в этом редакторе, а он автоматически отображает preview по мере набора вместе с html'ем. Затем `cut-paste` html-я в Blogspot, и с большой вероятностью форматирование должно выглядеть как задумано.

Ни разу не претендую на возможные странности моего диалекта Wiki. Желающие могут изменить под себя, ибо форматировщик крайне простой.

Редактор состоит из одного файла [wiki2html.html][]. Его можно просто сохранить локально и поиграться.

[wiki2html.html]: http://easy-coding.googlecode.com/hg/tools/js/wiki2html.html

Под занавес привожу поддерживаемые команды wiki-разметки (таблиц пока нет).

**Ссылки и картинки**

    [http://example.com/test] — ссылка: http://example.com/test
    [http://example.com/test ссылка с текстом] — ссылка с текстом
    [http://github.com http://github.com/images/icons/public.png] — картинка со ссылкой 
    [http://github.com/images/icons/public.png] — картинка 
    [http://github.com/images/icons/public.png картинка по ссылке] — картинка по ссылке

**Текст**

    '''bold''' — bold
    ''italic'' — italic
    @@[http://google.com]@@ — экранирование любой wiki-разметки
    моно`ширин`ный текст — моноширинный текст

**Заголовки**

    = Заголовок1 =
    == Заголовок2 ==
    === Заголовок3 ===
    ==== Заголовок4 ====
    ===== Заголовок5 =====

**Цитирование**

Цитата начинается с двух пробелов.

**Разделитель**

    ---

**Ненумерованный список**

Код:

    * это
    ** ненумерованный
    * список

**Нумерованный список**

Код:

    # это
    ## нумерованный
    # список

**Исходники**

Код:

    #include <io.h>
    int main() {
      int a = 1;
      return a;
    }

**Видео**

    [http://www.youtube.com/watch?v=FrufJFBSoQY]

Посты по теме:

* [Ведение блога на Google Code][]

[Ведение блога на Google Code]: /blog/russian/2009/07/26/blogging-on-googlecode/
