// Задача 13. Игра: Книги
// Напишете игра, която показва заглавие на световноизвестен книга,
// но във всяка дума да има до 50% липсваши букви на случаен принцип всеки път.
// Ако думата е от две букви, то скритата буква трябва да е първата.
// Допълнително трябва да бъде изписано името на автора.

// За да спечели играчът трябва да познае заглавието на книгата с не повече от 3 опита в рамките на минута.

// Например:

// __лик_я_ _e_сб_,
// Франсис Скот Фицджералд
// Отговор: Великият Гетсби

(function(win) {

    /***
     * Singleton Instance
     * Generates the Book Game
     */
    win.mySingleton = (function() {

        // Instance stores a reference to the Singleton
        var instance;

        function init() {

            /***
             * Private methods and variables
             * like bookData
             */

            function generateTitle() {
                // randomize title here.
            }

            function getTitleAndAuthor() {
            }

            // INIT function
            function start (opts) {
            }

            // Fire up the game
            var PublicAPI = {
                start: start
            };

            // Public methods and variables
            return PublicAPI;
        }

        // Create a new Singleton instance
        return {
            getInstance: function(opts) {
                if(!instance) {
                    instance = init(opts);
                }

                return instance;
            }
        };

    })();

    //Document Ready
    $(function() {
        // Usage:
        // var bookGame = mySingleton.getInstance();
        app.start(bookData);
    });

})(window);

var bookData = [{
        "book-title" : "Lolita",
        "author" : "Vladimir Nabokov",
    }, {
        "Book Title" : "Brave New World",
        "author" : "Aldous Huxley",
    }, {
        "Book Title" : "Catch 22",
        "author" : "Joseph Heller",
    }, {
        "Book Title" : "The Lord of the Rings",
        "author" : "J.R.R. Tolkien",
    }, {
        "Book Title" : "Slaughterhouse Five",
        "author" : "Kurt Vonnegut",
    }
];